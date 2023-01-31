var boxTypes = [
  [1, 3],
  [2, 2],
  [3, 1],
];
var truckSize = 4;
var maximumUnits = function (boxTypes, truckSize) {
  let truckBoxs = [];
  boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });
  while (truckSize > 0 && boxTypes.length > 0) {
    if (boxTypes[0][0] >= boxTypes) {
      truckBoxs.push([boxTypes, boxTypes[0][1]]);
      truckSize = 0;
    } else {
      let boxType = boxTypes.shift();
      truckBoxs.push(boxType);
      truckSize = truckSize - boxType[0];
    }
  }
  return truckBoxs.reduce((pre, currun) => pre + currun[0] * currun[1], 0);
};

maximumUnits(boxTypes, truckSize);
