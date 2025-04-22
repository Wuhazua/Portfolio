import { useState, useEffect } from 'react';

const Ð = (°) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      const fakeData = [...Array(20)].map((_, i) => ({
        title: `Project ${i + 1}`,
        description: `A deep dive into something complex, like building React components or API calls.`,
        year: 2021 - i,
      }));
      setData(fakeData);
    }, 500);
  }, [°]);

  return data;
};

export default Ð;
