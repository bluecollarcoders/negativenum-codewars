const maskify = (cc) => {
  // assign a variable to an empty string
  var hiddenNum = "";
  // iterate over the parameter
  for (let i = 0; i < cc.length; i++) {
    //  if the last numbers are less then cc.length
    if (i < cc.length - 4) {
      hiddenNum = hiddenNum + "#";
    } else {
      hiddenNum = hiddenNum + cc.charAt(i);
    }
  }
  return hiddenNum;
};
