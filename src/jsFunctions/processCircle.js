const processCircle = (cleanElement) => {
  if ((/^c(\s\d+){3}$/g).test(cleanElement)){
    const eleArr = cleanElement.split(/\s/);
    let shape = ['circL', 
      { 
        x: eleArr[1], 
        y: eleArr[2], 
        r: eleArr[3] 
      }
    ]
    return { shape }
  } else {
    return {
      error: `Circles must have 3 values x, y and radius. Like, c 30 40 20.`
    }
  }
}

export default processCircle;