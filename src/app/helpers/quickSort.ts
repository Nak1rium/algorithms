function swap(items: number[], leftIndex: number, rightIndex: number) {
  let temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

async function partition(items: number[], left: number, right: number) {
  const timer = (ms: number) => new Promise(res => setTimeout(res, ms));
  let pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      i++;
      j--;
      await timer(10);
    }
  }
  return i;
}

export async function quickSort(items: number[], left: number, right: number) {
  let index;
  if (items.length > 1) {
    index = await partition(items, left, right);
    if (left < index - 1) {
      await quickSort(items, left, index - 1);
    }
    if (index < right) {
      await quickSort(items, index, right);
    }
  }
}
