const ColorText2 = ({ color, fontSize, children }) => {
  const styles = {
    color,
    fontSize,
  };

  return (
    <>
      <p style={styles}>{children}</p>
    </>
  );
};

export default ColorText2;
