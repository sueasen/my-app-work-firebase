import { useState, useEffect } from 'react';

const AddNum = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [numAdd, setNumAdd] = useState(0);

  useEffect(() => setNumAdd(num1 + num2), [num1, num2]);

  return (
    <>
      <p>足し算</p>
      <input type="number" onChange={(e) => setNum1(Number(e.target.value))} />
      +
      <input type="number" onChange={(e) => setNum2(Number(e.target.value))} />
      {`=${numAdd}`}
    </>
  );
};

export default AddNum;
