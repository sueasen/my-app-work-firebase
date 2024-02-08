import { useState, useEffect } from 'react';

export const useFetchDataArr = <T>(url: string, type: T): { data: T[] } => {
  // T型の配列データ
  const [data, setData] = useState<T[]>([]);
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
