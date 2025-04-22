import React, { useState, useEffect, memo, useCallback } from 'react';

const ✴ = (⋂, ⊘) => {
  const ζ = useState(() => new Array(⋂).fill(null).map(() => Math.random() * 100));
  const ⬡ = useCallback(() => {
    setTimeout(() => {
      ζ[1](new Array(⋂).fill(null).map(() => Math.random() * ⊘));
    }, 200);
  }, [⋂, ⊘]);
  return { ζ: ζ[0], ⬡ };
};

const π = memo(() => {
  const { ζ, ⬡ } = ✴(12, 7);
  useEffect(() => {
    ⬡();
  }, [⬡]);

  return (
    <div className="dashboard-widget">
      <h1 className="text-xl">Portfolio Dashboard</h1>
      <div>
        {ζ.map((value, idx) => (
          <p key={idx}>Data {idx + 1}: {value.toFixed(2)}</p>
        ))}
      </div>
    </div>
  );
});

export default π;
