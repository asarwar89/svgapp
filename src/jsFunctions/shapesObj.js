const shapesObj = {
  'r': (cleanElement) => {
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
  },
  'c': (cleanElement) => {
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
  },
  'p': (cleanElement) => {
    if ((/^p(\s\d+,\d+){3,}$/g).test(cleanElement)){
      let shape = ['polyG', 
        { 
          points: cleanElement.replace('p ', '')
        }
      ]
      return { shape }
    } else {
      return {
        error: `Polygons should have minimum 3 (x,y) coordinates. Like, p 10,10 20,30 40,50.`
      }
    }
  },
  'e': (cleanElement) => {
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
};

export default shapesObj;