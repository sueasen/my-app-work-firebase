import TypeComp1 from '../components/TypeComp1';

const Page6 = () => {
  return (
    <>
      <p>Page6</p>
      <TypeComp1 txt="てきとう" num={12}>
        <p>pタグもてきとう、ここがチルドレン</p>
      </TypeComp1>
    </>
  );
};

export default Page6;
