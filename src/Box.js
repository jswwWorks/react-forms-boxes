

/**
 *  props:
 *    backgroundColor, a string for a color
 *    width: a number
 *    height: a number
 *
 *  states: none
 *
 *  renders:
 *    BoxList ->
 *
 *    Returns an HTML div element of a box with colors based on input props.
 */
function Box({ backgroundColor, width, height, id, removeButton }) {
  //debugger;

  console.log('id, removebutton', id, removeButton);

  const style = {
    backgroundColor: backgroundColor,
    width: width,
    height: height
  };

  function handleRemoveButton(){
    removeButton(id);
  }

  return (
    <div className="Box" style={style}>
      <button onClick={handleRemoveButton}>X</button>
    </div>
  );
}

export default Box;