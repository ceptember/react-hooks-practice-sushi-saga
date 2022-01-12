import React, {useState} from "react";

function Table({ eaten, money }) {

  

 // eaten.reduce( (a, b) => a.price + b.price )

  const emptyPlates = eaten.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));


  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
