// 引数として props を定義、値は props.要素名 で取得
const Title1 = (props) => {
  return (
    <>
      <h1 style={props.h1style}>{props.h1text}</h1>
      <div style={props.divstyle}>{props.children}</div>
    </>
  );
};

export default Title1;
