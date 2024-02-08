import CountUp from '../components/CountUp';
import AddText from '../components/AddText';
import AddNum from '../components/AddNum';
import GetImg from '../components/GetImg';

const Page2 = (props) => {
  return (
    <>
      <p>Page2 {props.text}</p>
      <CountUp text="かうんとあっぷ"></CountUp>
      <AddText></AddText>
      <AddNum></AddNum>
      <GetImg></GetImg>
    </>
  );
};
export default Page2;
