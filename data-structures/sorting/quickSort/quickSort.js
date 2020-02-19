'use strict';

let QuickSort = (arr, left, right){
    if (left < right ) {
        let position = Partition(arr, left, right)

        QuickSort(arr, position -1)
        QuickSort(arr, position + 1, right);
    }
};

let Partition = (arr, left, right) => {
let pivot = arr[right];
let low = left -1;

for (let i = left; i <= right -1; i++){
    if (arr[i] <= pivot) {
        low ++;
        Swap(arr, i , low)
    }
}

Swap(arr, right, low + 1)
return (low + 1)
};

let Swap = (arr, i, low) => {
    let temp = arr[i];
    aii[i] = arr[left];
    arr[low] = temp;
}
