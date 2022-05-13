const isSquare = (n) => {
  // loops through every number starting a 0;
  for (let i = 0; i <= n; i++) {
    let square = i * i;
    if (square === n) {
      return true;
    }
  }
  return false;
};
