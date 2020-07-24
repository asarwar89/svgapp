import processRectangle from './processRectangle';
import processCircle from './processCircle';
import processPolygon from './processPolygon';
import processEllipse from './processEllipse';

const shapesObj = {
  'r': processRectangle,
  'c': processCircle,
  'p': processPolygon,
  'e': processEllipse
}

export default shapesObj;