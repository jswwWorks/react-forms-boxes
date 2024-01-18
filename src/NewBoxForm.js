import { useState } from "react";
/**
 *  Props:
 *
 *
 *  states:
 *
 *
 *
 *  renders:
 *
 *    BoxList -> NewBoxForm
 *
 *    Is rendered by BoxList, returns HTML form that gathers information to
 *    give to BoxList which will help produce a new box with customization.
 */
function NewBoxForm({ addBox }){

  const [formData, setFormData] = useState({});

  function handleSubmit(evt){
    evt.preventDefault();

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
      />

      <label htmlFor="width">Width</label>
      <input type="text"
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />

      <label htmlFor="height">Height</label>
      <input type="text"
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />

    <button> BANG! New Box. </button>
    </form>
  )
}

export default NewBoxForm;