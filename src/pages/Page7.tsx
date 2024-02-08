import { Button } from '@material-tailwind/react';
import { useCounter } from '../hooks/useCounter';
import ListUsers from '../components/ListUsers';
import ListPosts from '../components/ListPosts';
import ImgDogs from '../components/ImgDogs';
import ImgFoxs from '../components/ImgFoxs';
import ImgCats from '../components/ImgCats';

const Page7 = () => {
  const { count, incrementCount, decrementCount } = useCounter();
  return (
    <>
      <p>Page7</p>
      <p>{count}</p>
      <Button onClick={incrementCount} placeholder={''}>
        ふやす
      </Button>
      <Button onClick={decrementCount} placeholder={''}>
        へらす
      </Button>
      <ListUsers></ListUsers>
      <ListPosts></ListPosts>
      <ImgDogs></ImgDogs>
      <ImgFoxs></ImgFoxs>
      <ImgCats></ImgCats>
    </>
  );
};
export default Page7;
