import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushi, onEat, onMoreBtn, eaten}) {
  
  function handleMoreBtn () {
    
  }

  return (
    
    <div className="belt">
      {sushi.map((s) => <Sushi key={s.id} sushi={s} onEat={onEat} eaten={eaten}/>)}
      
      <MoreButton onMoreBtn={onMoreBtn} />
    </div>
  );
}

export default SushiContainer;
