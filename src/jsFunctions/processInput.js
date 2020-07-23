import shapesObj from './shapesObj';

const processInput = (inputArray) => {

  let errors = {
    str: []
  };
  let shapes = [];

  inputArray.forEach((element, index) => {

    const cleanElement = cleanString(element);
    
    if (typeof shapesObj[cleanElement.charAt(0)] === 'function') {
      const { shape = [], error = '' } = shapesObj[(cleanElement.charAt(0))](cleanElement);
      if (shape.length > 0) {
        shapes.push(shape);
      } else {
        errors.str.push(`Line ${index + 1}: Invalid input. ${error} Entered value "${element}".`);
      }
    } else {
      errors.str.push(`Line ${index + 1}: Invalid input. Please provide a valid shape like 'c 100 100 50' for a circle.`);
    }
  });

  return {
    errors,
    shapes
  };
};

const cleanString = (theString) => {
  return theString.trim().toLowerCase().replace(/\s\s+/g, ' ')
};

export default processInput;
