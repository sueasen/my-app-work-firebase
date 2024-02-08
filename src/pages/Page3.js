import CssModules from '../components/CssModules';
import TailwindCss from '../components/TailwindCss';
import { DefaultAccordion } from '../components/DefaultAccordion';
import Rensyu1Badge from '../components/Rensyu1Badge';
import Rensyu2Card from '../components/Rensyu2Card';
import Rensyu3Carousel from '../components/Rensyu3Carousel';
import { Input } from '@material-tailwind/react';
import { useState } from 'react';

const Page3 = () => {
  const [carouselImgs, setCarouselImgs] = useState([]);

  const change = async (e) => {
    const imags = [];
    for (const file of e.target.files) imags.push(await fileRead(file));
    setCarouselImgs([...carouselImgs, ...imags]);
  };

  const fileRead = async (file) => {
    console.log(file);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    await new Promise((resolve) => (fileReader.onload = () => resolve()));
    return fileReader.result;
  };

  return (
    <>
      <p>Page3</p>
      <CssModules></CssModules>
      <TailwindCss></TailwindCss>
      <DefaultAccordion></DefaultAccordion>
      <Rensyu1Badge count={100}></Rensyu1Badge>
      <Rensyu2Card
        imgSrc={'https://docs.material-tailwind.com/img/team-3.jpg'}
        name="てきとう"
        yakusyoku="えらい"
      ></Rensyu2Card>
      <Rensyu3Carousel srcs={carouselImgs}></Rensyu3Carousel>

      <Input
        variant="static"
        label="Carousel Images"
        type="file"
        onChange={change}
        className="mb-3"
        multiple
      />
    </>
  );
};
export default Page3;
