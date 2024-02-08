import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from '@material-tailwind/react';
import Todo from '../types/Todo';

import { useEffect, useState } from 'react';
import { useFireStore } from '../hooks/useFireStore';

const TodoAddDialog: React.FC<{
  open: boolean; // 表示制御フラグ
  handleOpen: () => void; // 表示制御処理
  findTodos: () => void; // todo一覧取得処理
}> = (props) => {
  // firestore操作
  const { addData } = useFireStore<Todo>('todos');

  // title
  const [title, setTitle] = useState<string>('');

  // props変更時の title 初期化
  useEffect(() => {
    setTitle('');
  }, [props]);

  // todo追加してダイアログ閉じる
  const addTodoHandleClose = async () => {
    const todo: Todo = { title: title, status: 'doing' };
    await addData(todo);
    await props.findTodos();
    props.handleOpen();
  };

  return (
    <>
      <Dialog open={props.open} handler={props.handleOpen}>
        <DialogHeader>Todo Add.</DialogHeader>
        <DialogBody>
          <div className="m-3">
            {/* title 入力 */}
            <Input
              label="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          {/* ダイアログ閉じる */}
          <Button variant="text" onClick={props.handleOpen} className="mr-1">
            <span>Cancel</span>
          </Button>
          {/* TODO追加処理 */}
          <Button variant="gradient" color="green" onClick={addTodoHandleClose}>
            <span>Add</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default TodoAddDialog;
