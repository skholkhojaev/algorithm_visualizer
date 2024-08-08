export function sortedArray(array) {
  const sortedArray = []
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  devide(array, auxiliaryArray, 0, array.length-1, sortedArray);
  return sortedArray
};

function devide(mainArray, auxiliaryArray, startIdx, endIdx, sortedArray){
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  devide(auxiliaryArray, mainArray, startIdx, middleIdx, sortedArray);
  devide(auxiliaryArray, mainArray, middleIdx +1, endIdx, sortedArray);
  conquer(mainArray, auxiliaryArray, startIdx, middleIdx, endIdx, sortedArray);
}

function conquer(mainArray, auxiliaryArray, startIdx, middleIdx, endIdx, sortedArray){
  let i = startIdx;
  let k = startIdx;
  let j = middleIdx +1;

  while (k <= middleIdx && j <= endIdx) {
    sortedArray.push([k, j]);
    sortedArray.push([k, j]);
    if (auxiliaryArray[k] <= auxiliaryArray[j]){
      sortedArray.push([i, auxiliaryArray[k]]);
      mainArray[i++] = auxiliaryArray[k++];
      //i = i + 1; k = k + 1;
    }
    else{
      sortedArray.push([i, auxiliaryArray[j]]);
      mainArray[i++] = auxiliaryArray[j++];
      //i = i + 1; j = j + 1;
    }
  }

  while (k <= middleIdx){
    sortedArray.push([k, k]);
    sortedArray.push([k, k]);
    sortedArray.push([i, auxiliaryArray[k]]);
    mainArray[i++] = auxiliaryArray[k++];
    //i = i + 1; k = k + 1;
  }
  
  while (j <= endIdx) {
    sortedArray.push([j, j]);
    sortedArray.push([j, j]);
    sortedArray.push([i, auxiliaryArray[j]]);
    mainArray[i++] = auxiliaryArray[j++];
    //i = i + 1; j = j + 1;
  }
}