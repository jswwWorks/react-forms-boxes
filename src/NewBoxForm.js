
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
function NewBoxForm(){

  function handleSubmit(evt){

  }

  function handleChange(evt){

  }

  return (
    <form onSubmit={handleSubmit} action="">
      <label htmlFor="backgroundColor">Background Color:</label>
      <input type="text"
        id="backgroundColor"
        name="backgroundColor"
        value=""
        onChange={handleChange}
      />

      <label htmlFor="width">Width</label>
      <input type="text"
        id="width"
        name="width"
        value=""
        onChange={handleChange}
      />

      <label htmlFor="height">Height</label>
      <input type="text"
        id="height"
        name="height"
        value=""
        onChange={handleChange}
      />

    <button> BANG! New Box. </button>
    </form>
  )
}

export default NewBoxForm;