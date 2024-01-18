import React, {useState} from "react";
import Box from './Box'
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from 'uuid';

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

  // const [boxes, setBoxes] = useState([]);
  const [boxes, setBoxes] = useState([
    {backgroundColor: "pink", height: 300, width: 200},
    {backgroundColor: "green", height: 300, width: 200}
  ]);

  /**
   *  Grabs input values from NewBoxForm submission and updates state of
   *  boxes to include information about a new box to make.
   *
   *  Each box in array:
   *  {backgroundColor: "pink", height: 300, width: 200}
   */
  function addBox(newBoxDetails) {
    console.log('new details about the box to add', newBoxDetails);
    setBoxes([...boxes, newBoxDetails]);
  }

  /**
   *  For each box in boxes, renders a new box
  */
 function renderBoxes() {
    return (
      boxes.map(box =>
        <Box
          backgroundColor={box.backgroundColor}
          width={box.width}
          height={box.height}
          key={uuid()}
        />)
    );
  }

  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      {renderBoxes()}
    </div>
  );
}

export default BoxList;