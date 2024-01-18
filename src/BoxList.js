import React, {useState} from "react";

/**
 *  Props:
 *    none
 *
 *  State:
 *    boxes: a list that contains all Box components (initially [])
 *
 *  Renders:
 *    App -> BoxList -> Box & NewBoxForm
 */
function BoxList() {

  const [boxes, setBoxes] = useState([]);



  /**
   *  For each box in boxes, renders a new box
   */
  function makeBoxes() {
    return (
      <Box />
    );
  }

  return (
    <div>
      {makeBoxes}
      <NewBoxForm />
    </div>
  );
}