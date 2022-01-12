import React from "react";

function MoreButton({onMoreBtn}) {

  function handleMoreBtn () {
    onMoreBtn()
  }


  return <button onClick={handleMoreBtn}>More sushi!</button>;
}

export default MoreButton;

