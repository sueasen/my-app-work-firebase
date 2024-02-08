import { useFetchData } from '../hooks/useFetchData';

type ImgFox = {
  image: string;
};
const imgFox: ImgFox = { image: '' };

const ImgFoxs = () => {
  const { data } = useFetchData('https://randomfox.ca/floof/', imgFox);

  return (
    <>
      <div className="flex justify-center m-3">
        <img
          className="h-36 w-36 rounded-full object-cover object-center"
          alt="dog"
          src={data.image}
        />
      </div>
    </>
  );
};

export default ImgFoxs;
