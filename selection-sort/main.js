function selectionSort(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[j] < numbers[minIndex]) {
        minIndex = j;
      }
    }

    // Older way.
    // let temp = numbers[i];
    // numbers[i] = numbers[minIndex];
    // numbers[minIndex] = temp;

    // New way.
    [numbers[i], numbers[minIndex]] = [numbers[minIndex], numbers[i]];
  }
  return numbers;
}

console.log(selectionSort([9, 5, 7, 6, 1, 2, 4, 0, 3, 8]));
