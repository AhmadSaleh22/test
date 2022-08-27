import React from "react";
import GridSquare from "./GridSquare";

export default function GridTriangle(props) {
  const grid = [];
  for (let row = 18; row > 0; row--) {
    grid.push([]);
    for (let col = row; col < 10; col++) {
      grid[row].push(<GridSquare key={`${col}${row}`} color="1" />);
    }
  }

  return <div className="grid-board">{grid}</div>;
}
