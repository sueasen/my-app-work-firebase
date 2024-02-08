import { Typography } from '@material-tailwind/react';
import { useFetchDataArr } from '../hooks/useFetchDataArr';

type Post = {
  id: number;
  title: string;
};
const post: Post = { id: 0, title: '' }; // 引数で使う値を生成,値はなんでもOK

const ListPosts = () => {
  const { data } = useFetchDataArr(
    'https://jsonplaceholder.typicode.com/posts',
    post
  );
  return (
    <>
      <Typography variant="h4" placeholder={''}>
        記事一覧
      </Typography>
      {data.map((posts) => (
        <p key={posts.id}>
          {posts.id}:{posts.title}
        </p>
      ))}
    </>
  );
};
export default ListPosts;
