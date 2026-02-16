
import React from 'react';
import { Coordinates, Vector, useMovablePoint } from 'mafs';

export const LinearAlgebra: React.FC = () => {
  const matrixPoint = useMovablePoint([1, 0.5]);
  const matrixPoint2 = useMovablePoint([0.2, 1]);

  return (
    <>
      <Coordinates.Cartesian />
      <Vector tail={[0, 0]} tip={[matrixPoint.x, matrixPoint.y]} color="#13EC92" />
      <Vector tail={[0, 0]} tip={[matrixPoint2.x, matrixPoint2.y]} color="#A855F7" />
      {matrixPoint.element}
      {matrixPoint2.element}
    </>
  );
};
