const processEllipse = (cleanElement) => {
  if ((/^e(\s\d+){4}$/g).test(cleanElement)){
    const eleArr = cleanElement.split(/\s/);
    let shape = ['elipSE', 
      { 
        x: eleArr[1], 
        y: eleArr[2], 
        rx: eleArr[3], 
        ry: eleArr[4] 
      }
    ]
    return { shape }
  } else {
    return {
      error: `Ellipse must have 4 values x, y, x radius, y radius. Like, e 120 200 60 30.`
    }
  }
}

export default processEllipse;