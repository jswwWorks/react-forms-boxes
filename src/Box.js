

function Box({ backgroundColor, width, height }){

  const style = {
    backgroundColor: backgroundColor,
    width: width,
    height: height
  }

  return (
    <div className="Box" style={style}>

    </div>
  )
}

export default Box;