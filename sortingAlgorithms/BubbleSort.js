array = [230,124, 235,34, 345, 6, 7, 23, 85, 85, 34, 100]

function bubbleSort(array){
Sort(array);
}

function Sort(array){
  const arrayLength = array.length;
  let isSwapped;

  for( i = 0; i < arrayLength; i++) {
    isSwapped = false;
    for (let j = 0; j < arrayLength - i - 1; j++){
      if (array[i] > array [j]){
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
        console.log(array)
        isSwapped = true;
      };
    };
    if (!isSwapped){
      break;
    };
  };
};

sortedarray = bubbleSort(array)
console.log(sortedarray)