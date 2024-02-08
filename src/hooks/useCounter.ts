import { useState } from 'react';

export const useCounter = () => {
  // カウント
  const [count, setCount] = useState<number>(0);
  // カウント加算
  const incrementCount = () => setCount(count + 1);
  // カウント減算
  const decrementCount = () => setCount(count - 1);
  // カウント、カウント加算、カウント減算を返す
  return { count, incrementCount, decrementCount };
};
