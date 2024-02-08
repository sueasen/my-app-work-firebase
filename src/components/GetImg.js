import { useState, useEffect } from 'react';

const imgUrl = 'https://source.unsplash.com/random';

const GetImg = () => {
  const [res, setRes] = useState();
  const [src, setSrc] = useState();

  useEffect(() => setSrc(res?.url), [res]);

  const changeRes = async () => setRes(await fetch(imgUrl));

  return (
    <>
      <p>画像</p>
      <button onClick={changeRes}>画像変更</button>
      <br />
      <img src={src || imgUrl} alt="img" style={{ width: '500px' }} />
    </>
  );
};

export default GetImg;
