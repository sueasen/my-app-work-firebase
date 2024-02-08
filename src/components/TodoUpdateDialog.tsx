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

const TodoUpdateDialog: React.FC<{
  open: boolean; // 表示制御フラグ
  handleOpen: () => void; // 表示制御処理
  findTodos: () => void; // todo一覧取得処理
  id: string; // 更新対象のid(キー)
  todo: Todo; // 更新対象のTodo
}> = (props) => {
  // firestore操作
  const { updateData } = useFireStore<Todo>('todos');

  // title
  const [title, setTitle] = useState<string>('');
  // status
  const [status, setStatus] = useState<string>('');

  // props変更時 title, status に props の値を設定
  useEffect(() => {
    setTitle(props.todo.title);
    setStatus(props.todo.status);
  }, [props]);

  // todo更新してダイアログ閉じる
  const updateTodoHandleClose = async () => {
    const todo: Todo = { ...props.todo, title: title, status: status };
    await updateData(props.id, todo);
    await props.findTodos();
    props.handleOpen();
  };

  return (
    <>
      <Dialog open={props.open} handler={props.handleOpen}>
        <DialogHeader>Todo Update.</DialogHeader>
        <DialogBody>
          <div className="m-3">
            {/* title 入力 */}
            <Input
              label="title"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </div>
          <div className="m-3">
            {/* status 入力 */}
            <Input
              label="status"
              onChange={(e) => setStatus(e.target.value)}
              value={status}
            />
          </div>
        </DialogBody>
        <DialogFooter>
          {/* ダイアログ閉じる */}
          <Button variant="text" onClick={props.handleOpen} className="mr-1">
            <span>Cancel</span>
          </Button>
          {/* TODO更新処理 */}
          <Button
            variant="gradient"
            color="green"
            onClick={updateTodoHandleClose}
          >
            <span>Update</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default TodoUpdateDialog;
