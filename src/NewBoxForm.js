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

  const [formData, setFormData] = useState({
    backgroundColor: "",
    height: "",
    width: ""
  });

  function handleSubmit(evt){
    evt.preventDefault();

    // Send form data into addBox function in BoxList
    console.log('new data to send back to Boxlist:', formData);

    setFormData(Number(formData.height));
    setFormData(Number(formData.width));
    // formData.height = Number(formData.height);
    // formData.width = Number(formData.width);

    addBox({formData});
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
        value={Number(formData.width)}
        onChange={handleChange}
        required
      />

      <label htmlFor="height">Height</label>
      <input type="text"
        id="height"
        name="height"
        value={Number(formData.height)}
        onChange={handleChange}
        required
      />

    <button> BANG! New Box. </button>
    </form>
  )
}

export default NewBoxForm;