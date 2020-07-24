const processPolygon = (cleanElement) => {
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
}

export default processPolygon;