import { Carousel } from '@material-tailwind/react';

const Rensyu3Carousel = ({ srcs }) => {
  return (
    <>
      <Carousel className="rounded-xl h-96 my-3">
        {srcs.map((src, i) => {
          return (
            <img
              id={'image' + i}
              src={src}
              alt={'image' + i}
              className="h-full w-full object-cover"
            />
          );
        })}
      </Carousel>
    </>
  );
};

export default Rensyu3Carousel;
