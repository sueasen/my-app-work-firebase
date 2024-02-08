import { useFetchData } from '../hooks/useFetchData';

type ImgDog = {
  message: string;
};
const imgDog: ImgDog = { message: '' };

const ImgDogs = () => {
  const { data } = useFetchData(
    'https://dog.ceo/api/breeds/image/random',
    imgDog
  );

  return (
    <>
      <div className="flex justify-center m-3">
        <img
          className="h-36 w-36 rounded-full object-cover object-center"
          alt="dog"
          src={data.message}
        />
      </div>
    </>
  );
};

export default ImgDogs;
