

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
function Box({ backgroundColor, width, height }) {

  console.log('information about box in Box component', backgroundColor, width, height);

  const style = {
    backgroundColor: backgroundColor,
    width: width,
    height: height
  };

  return (
    <div className="Box" style={style}>

    </div>
  );
}

export default Box;