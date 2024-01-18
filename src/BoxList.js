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

    newBoxDetails.id = uuid();
    setBoxes(boxes => [...boxes, newBoxDetails]);
  }

  /** delete that box yo */
  function removeButton(boxId){
    //const targetBoxIdx = boxes.indexOf(boxId);
    setBoxes(boxes => boxes.filter(box => box.id != boxId));
  }

  /**
   *  For each box in boxes, renders a new box
  */
 function renderBoxes() {
 // debugger;
  return (
      boxes.map(({id, width, height, backgroundColor}) =>
        <Box
          backgroundColor={backgroundColor}
          width={width}
          height={height}
          key={id}
          id={id}
          removeButton={removeButton}
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