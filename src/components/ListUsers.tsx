import { Typography } from '@material-tailwind/react';
import { useFetchDataArr } from '../hooks/useFetchDataArr';

type User = {
  id: number;
  name: string;
};
const user: User = { id: 0, name: '' }; // 引数で使う値を生成,値はなんでもOK

const ListUsers = () => {
  const { data } = useFetchDataArr(
    'https://jsonplaceholder.typicode.com/users',
    user
  );
  return (
    <>
      <Typography variant="h4" placeholder={''}>
        ユーザ一覧
      </Typography>
      {data.map((user) => (
        <p key={user.id}>
          {user.id}:{user.name}
        </p>
      ))}
    </>
  );
};
export default ListUsers;
