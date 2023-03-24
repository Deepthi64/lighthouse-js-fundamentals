function range(start, end, step) {
  if (start >= end || step <= 0) {
    return [];
  }
  const interval = (end - start) / (step - 1);
  const some_value = [];
  for (let i = 0; i < step; i++) {
    some_value.push(start + i * interval);
  }
  return some_value;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));