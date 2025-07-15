import { Dispatch, SetStateAction, useState } from "react";

interface UseCounterReturn {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
  setCount: Dispatch<SetStateAction<number>>;
}

export default function useCounter(initialValue?: number): UseCounterReturn {
  const [count, setCount] = useState(initialValue || 0);
  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(initialValue || 0);
  };

  return { count, increment, decrement, reset, setCount };
}
