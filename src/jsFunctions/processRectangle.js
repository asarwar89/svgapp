const processRectangle = (cleanElement) => {
  if ((/^r(\s\d+){4}$/g).test(cleanElement)){
    const eleArr = cleanElement.split(/\s/);
    let shape = ['rectA', 
      { 
        x: eleArr[1], 
        y: eleArr[2], 
        height: eleArr[3], 
        width: eleArr[4] 
      }
    ]
    return { shape }
  } else {
    return {
      error: `Rectangles must have 4 values x, y, width, height. Like, r 10 10 20 30.`
    }
  }
}

export default processRectangle;