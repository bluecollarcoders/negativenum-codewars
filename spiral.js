var spiralize = function (size) {
  let arr = Array.from(Array(size), (_) => Array(size).fill(0));
  for (n = 0; n < size / 2; n += 2) {
    fill(arr, n);
  }
  return arr;
};

function fill(arr, n) {
  for (i = n; i < arr.length - n; i++) {
    arr[n][i] =
      arr[i][n] =
      arr[arr.length - n - 1][i] =
      arr[i][arr.length - n - 1] =
        1;
  }
  arr[n + 1][n] = 0;
  arr[n][n - 1] = 1;
}
