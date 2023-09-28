import { useEffect, useState } from 'react';

export default function useDebonce(search, delay) {
  const [valueDebonce, setValueDebonce] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValueDebonce(search);
    }, delay);
    return () => clearTimeout(timeout);
  }, [search, delay]);

  return valueDebonce;
}
