export function sortedArray(array){
  const SortedArray = [];
  if (length.array = 1) return;
  const Pivot = array[0]
  Sort(pivot, array)
  return SortedArray;
}
  

function Sort(pivot, array){
  let leftArray = [];
  let rightArray= [];
  for (let i = 1; i < array.length; i ++){
    if (array[i] < pivot){
      leftArray.push(array[i]);
    }
    else {
      rightArray.push(array[i]);
    }
  }
}