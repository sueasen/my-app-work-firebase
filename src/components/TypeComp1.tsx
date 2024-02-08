import React, { useEffect, useState } from 'react';
import type TypeComp1Props from '../types/TypeComp1Props';
import { Button } from '@material-tailwind/react';

// 残画像取得処理 戻り値型 Promise<string>
const fetchImage = async (): Promise<string> => {
  const apiUrl = 'https://api.thecatapi.com/v1/images/search';
  // fetch の戻り型 Response
  const res: Response = await fetch(apiUrl);
  // json の戻り型 Array<{ url: string }> ※ 配列で url をキーに含む
  const images: Array<{ url: string }> = await res.json();
  // images[0] の url を返す
  return images[0].url;
};

const TypeComp1: React.FC<TypeComp1Props> = (props) => {
  // 猫画像URL 型 string
  const [imageUrl, setImageUrl] = useState<string>('');
  // 初回残画像取得
  useEffect(() => {
    fetchImage().then((newImageUrl) => setImageUrl(newImageUrl));
  }, []);
  // 画像変更処理
  const changeImage = async () => setImageUrl(await fetchImage());

  return (
    <>
      <p>練習 TypeComp1</p>
      <p>txt : {props.txt}</p>
      <p>num : {props.num}</p>
      {props.children}

      {/* 猫画像 */}
      <div className="text-center">
        <Button onClick={changeImage} placeholder={'cat'}>
          猫画像取得
        </Button>
        <div className="flex justify-center m-3">
          <img
            className="h-96 w-96 rounded-full object-cover object-center"
            alt="cat"
            src={imageUrl}
          />
        </div>
      </div>
    </>
  );
};
export default TypeComp1;
