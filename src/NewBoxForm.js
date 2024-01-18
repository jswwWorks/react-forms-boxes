import { useState } from "react";
/**
 *  Props:
 *    addbox, a callback function that collects the form data in BoxList
 *    component
 *
 *  states:
 *    formData, which stores an object that contains form contents
 *
 *    initial state: {}
 *
 *    eventually, it could look like:
 *      {backgroundColor: "pink", width: 300, height: 200}
 *
 *  renders:
 *
 *    BoxList -> NewBoxForm
 *
 *    Is rendered by BoxList, returns HTML form that gathers information to
 *    give to BoxList which will help produce a new box with customization.
 */
function NewBoxForm({ addBox }){

  const initialFormData = {
    backgroundColor: "",
    height: "",
    width: ""
  }
  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit(evt){
    evt.preventDefault();

    // Send form data into addBox function in BoxList
    console.log('new data to send back to Boxlist:', formData);

    //convert height and width to Number types
    const heightNum = Number(formData.height);
    const widthNum = Number(formData.width);

    addBox({
      backgroundColor: formData.backgroundColor,
      height: heightNum,
      width: widthNum
    });
    setFormData(initialFormData);
  }

  function handleChange(evt){
    const { name, value } = evt.target;
    setFormData(currentFormData =>({
      ...currentFormData,
      [name]: value
    }))
  }

  return (
    <form onSubmit={handleSubmit} action="">
      <label htmlFor="backgroundColor">Background Color:</label>
      <input type="text"
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
        required
      />

      <label htmlFor="width">Width</label>
      <input type="text"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
        required
      />

      <label htmlFor="height">Height</label>
      <input type="text"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
        required
      />

    <button> BANG! New Box. </button>
    </form>
  )
}

export default NewBoxForm;