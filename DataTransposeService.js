const transposeHeaderData = function (header) {
  var headerObjArr = [];
  Object.keys(header).forEach((key) => {
    console.log(key);
    headerObjArr.push({ 'Row Header': key, Value: header[key] });
  });

  return headerObjArr;
};

//could probably make this and the above one function that applies to any two-column table
const transposeGeneralData = function (general) {
  var headerObjArr = [];
  Object.keys(general).forEach((key) => {
    headerObjArr.push({ 'Row Header': key, Value: general[key] });
  });

  return headerObjArr;
};

export { transposeHeaderData, transposeGeneralData };
