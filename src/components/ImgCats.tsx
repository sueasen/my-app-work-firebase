import { useFetchDataArr } from '../hooks/useFetchDataArr';

type ImgCat = {
  url: string;
};
const imgCat: ImgCat = { url: '' };

const ImgCats = () => {
  const { data } = useFetchDataArr(
    'https://api.thecatapi.com/v1/images/search',
    imgCat
  );

  return (
    <>
      <div className="flex justify-center m-3">
        <img
          className="h-36 w-36 rounded-full object-cover object-center"
          alt="cat"
          src={data[0]?.url}
        />
      </div>
    </>
  );
};

export default ImgCats;
