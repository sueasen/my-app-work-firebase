import { Button, Typography, Input } from '@material-tailwind/react';
import { useFireStore } from '../hooks/useFireStore';
import type Todo from '../types/Todo';
import { useState } from 'react';

const Page8 = () => {
  // firestore操作
  const { findDatas, addData, deleteData, updateData } =
    useFireStore<Todo>('todos');

  // todo一覧
  const [todos, setTodos] = useState<{ id: string; data: Todo }[]>();

  // todo一覧取得処理
  const findTodos = async () => {
    setTodos(await findDatas());
  };

  // title
  const [title, setTitle] = useState<string>('');

  // todo一覧追加処理
  const addTodo = async () => {
    const todo: Todo = { title: title, status: 'doing' };
    const id: string = await addData(todo);
    console.log(id);
  };

  // todo一覧更新処理
  const updateTodo = async (before: { id: string; data: Todo }) => {
    const todo: Todo = { ...before.data, title: title };
    await updateData(before.id, todo);
  };

  // todo一覧削除処理
  const deleteTodo = async (id: string) => {
    await deleteData(id);
  };

  return (
    <>
      <p>Page8</p>
      <hr className="m-2" />
      <Input
        label="title"
        crossOrigin={undefined}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <Button className="mt-2" onClick={addTodo} placeholder={''}>
        todo一覧追加
      </Button>
      <hr className="m-2" />
      <Button onClick={findTodos} placeholder={''}>
        todo一覧取得
      </Button>
      <div>
        <Typography variant="h4" placeholder={''}>
          todo一覧
        </Typography>
        {todos?.map((todo) => (
          <p key={todo.id}>
            {todo.id}:{todo.data.title}:{todo.data.status}
            <Button onClick={() => updateTodo(todo)} placeholder={''}>
              更新
            </Button>
            <Button onClick={() => deleteTodo(todo.id)} placeholder={''}>
              削除
            </Button>
          </p>
        ))}
      </div>
    </>
  );
};
export default Page8;
