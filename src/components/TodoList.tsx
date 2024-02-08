import {
  CheckCircleIcon,
  ChevronUpDownIcon,
  PencilIcon,
  PlusIcon,
  TrashIcon,
} from '@heroicons/react/24/solid';
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  IconButton,
  Tooltip,
  Tabs,
  Tab,
  TabsHeader,
} from '@material-tailwind/react';
import type Todo from '../types/Todo';

import { useState } from 'react';
import { useFireStore } from '../hooks/useFireStore';
import TodoAddDialog from './TodoAddDialog';
import TodoUpdateDialog from './TodoUpdateDialog';

// TODOリストヘッダ
const tableHeads = ['title', 'status', ''];
const tableTabs = ['all', 'done', 'doing'];

// TODOリストコンポーネント
const TodoList = () => {
  // firestore操作
  const { findDatas, deleteData, updateData } = useFireStore<Todo>('todos');

  // todo一覧
  const [todos, setTodos] = useState<{ id: string; data: Todo }[]>([]);

  const findTodos = async () => {
    setTodos(await findDatas());
  };

  // TodoAddDialog 表示制御
  const [openAdd, setOpenAdd] = useState<boolean>(false);
  const handleOpenAdd = () => setOpenAdd(!openAdd);

  // todo削除処理
  const deleteTodo = async (id: string) => {
    await deleteData(id);
    await findTodos();
  };

  // todo完了更新処理
  const doneTodo = async (before: { id: string; data: Todo }) => {
    const todo: Todo = { ...before.data, status: 'done' };
    await updateData(before.id, todo);
    await findTodos();
  };

  // TodoUpdateDialog 表示制御
  const [openUpdate, setOpenUpdate] = useState<boolean>(false);
  const handleOpenUpdate = () => setOpenUpdate(!openUpdate);

  // 更新対象todo
  const [updateTodo, setUpdateTodo] = useState<{ id: string; data: Todo }>({
    id: '',
    data: { title: '', status: '' },
  });

  // todo更新ダイアログ表示
  const openUpdateTodo = async (target: { id: string; data: Todo }) => {
    setUpdateTodo(target);
    handleOpenUpdate();
  };

  const [filter, setFilter] = useState<string>('all');

  const filterTodos = (
    todos: { id: string; data: Todo }[]
  ): { id: string; data: Todo }[] => {
    switch (filter) {
      case 'done':
        return todos.filter((t) => t.data.status === 'done');
      case 'doing':
        return todos.filter((t) => t.data.status !== 'done');
      default:
        return todos;
    }
  };

  const [sort, setSort] = useState<string[]>(['', '']);

  const setSortTodo = (value: string): void => {
    setSort([value, sort[1] === 'asc' ? 'desc' : 'asc']);
  };
  const sortTodos = (
    todos: { id: string; data: Todo }[]
  ): { id: string; data: Todo }[] => {
    let result = [...todos];
    switch (sort[0]) {
      case 'status':
        result.sort((a, b) => a.data.status.localeCompare(b.data.status, 'ja'));
        if (sort[1] === 'desc') result.reverse();
        return result;
      case 'title':
        result.sort((a, b) => a.data.title.localeCompare(b.data.title, 'ja'));
        if (sort[1] === 'desc') result.reverse();
        return result;
      default:
        return result;
    }
  };

  const todoTables = (): { id: string; data: Todo }[] => {
    let result = [...todos];
    result = sortTodos(result);
    result = filterTodos(result);
    return result;
  };

  return (
    <>
      <Card className="h-full w-full p-4 my-4 border border-blue-gray-50">
        <CardHeader
          floated={false}
          shadow={false}
          className="rounded-none mb-0"
        >
          <div className="flex items-center justify-between">
            <Typography variant="h5" color="blue-gray">
              Todo list
            </Typography>
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {tableTabs.map((value) => (
                  <Tab
                    className="px-4"
                    key={value}
                    value={value}
                    onClick={() => setFilter(value)}
                  >
                    {value}
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              {/* TODOリスト取得 */}
              <Button variant="outlined" size="sm" onClick={findTodos}>
                view all
              </Button>
              {/* TODO登録ダイアログ表示 */}
              <Button
                className="flex items-center gap-3"
                size="sm"
                onClick={handleOpenAdd}
              >
                <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add todo
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-y-scroll px-0 py-0 mt-1">
          {/* TODOリストのテーブル */}
          <table className="w-full min-w-max table-auto text-left">
            {/* TODOリストのヘッダ */}
            <thead>
              <tr>
                {tableHeads.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                      onClick={() => setSortTodo(head)}
                    >
                      {head}
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            {/* TODOリストのデータ */}
            <tbody>
              {todoTables().map((todo, index) => {
                const classes = 'p-4 border-b border-blue-gray-50';
                return (
                  <tr key={todo.id}>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {todo.data.title}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="ghost"
                          size="sm"
                          value={todo.data.status}
                          color={
                            todo.data.status !== 'done' ? 'green' : 'blue-gray'
                          }
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      {/* TODO完了(done)更新 */}
                      <Tooltip content="Done">
                        <IconButton
                          variant="text"
                          onClick={() => doneTodo(todo)}
                        >
                          <CheckCircleIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      {/* TODO更新 */}
                      <Tooltip content="Update">
                        <IconButton
                          variant="text"
                          onClick={() => openUpdateTodo(todo)}
                        >
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      {/* TODO削除 */}
                      <Tooltip content="Delete">
                        <IconButton
                          variant="text"
                          onClick={() => deleteTodo(todo.id)}
                        >
                          <TrashIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
      {/* 登録ダイアログ */}
      <TodoAddDialog
        open={openAdd}
        handleOpen={handleOpenAdd}
        findTodos={findTodos}
      ></TodoAddDialog>
      {/* 更新ダイアログ */}
      <TodoUpdateDialog
        open={openUpdate}
        handleOpen={handleOpenUpdate}
        findTodos={findTodos}
        id={updateTodo.id}
        todo={updateTodo.data}
      ></TodoUpdateDialog>
    </>
  );
};

export default TodoList;
