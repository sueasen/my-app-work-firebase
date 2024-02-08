// 引数として props を定義、値は props.要素名 で取得
const ColorText1 = (props) => {
  const { color, fontSize, text } = props;
  const styles = {
    color,
    fontSize,
  };

  return (
    <>
      <p style={styles}>{text}</p>
    </>
  );
};

export default ColorText1;
