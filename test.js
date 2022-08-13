function addNumber() {
  let odd = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) odd.push(i);
  }
  return odd;
}
console.log(addNumber());
