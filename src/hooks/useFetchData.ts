import { useState, useEffect } from 'react';

export const useFetchData = <T>(url: string, type: T): { data: T } => {
  // Tのデータ(初期値は引数のtypeを設定)
  const [data, setData] = useState<T>(type);
  // URL 設定でAPI実行してデータ設定
  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    };
    fetchPost();
  }, [url]);
  // データを返す
  return { data };
};
