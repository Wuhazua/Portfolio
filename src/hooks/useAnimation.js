import { useState, useEffect } from 'react';

const ⧫ = (frequency = 100) => {
  const [⨀, set⨀] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      set⨀((prev) => !prev);
    }, frequency);
    return () => clearInterval(interval);
  }, [frequency]);

  return ⨀;
};

export default ⧫;
