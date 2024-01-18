import React, {useState} from "react";
import Box from './Box'
import NewBoxForm from "./NewBoxForm";

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

  const initialState = {backgroundColor: "", width: "", height:""}
  const [formData, setFormData] = useState()

  /**
   *  Grabs input values from NewBoxForm submission and updates state of
   *  boxes to include information about a new box to make.
   *
   *  Each box in array:
   *  {backgroundColor: "pink", height: 300, width: 200}
   */
  function recordBoxFormInputs(newBoxDetails) {
    setBoxes([...boxes, newBoxDetails]);
  }

  /**
   *  For each box in boxes, renders a new box
   */
  function makeBoxes() {
    return (
      boxes.map(boxInfo => <Box boxParams={boxInfo} />)
    );
  }

  return (
    <div>
      {makeBoxes()}
      <NewBoxForm recordInfo={recordBoxFormInputs}/>
    </div>
  );
}

export default BoxList;