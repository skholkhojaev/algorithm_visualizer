function quickSort(array){
  arrlen = array.length
  if (arrlen <= 1) return array;

  const pivot = [];
  const left = [];
  const right = [];

  for (let i = 0; i < arrlen -1; i++) {
    if (array[i] < pivot) {
      left.push(array[i]);
    }
    else {
      right.push(array[i]);
    }
  return [...quickSort(left), pivot, ...quickSort(right)];
  }
}
// This is a testing commit
export default quickSort();
