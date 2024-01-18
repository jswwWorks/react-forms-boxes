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

  const [boxes, setBoxes] = useState([]);
  const initialState = {backgroundColor: "", width: "", height:""}
  const [formData, setFormData] = useState()


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

export default BoxList;