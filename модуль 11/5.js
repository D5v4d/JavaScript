const result = (x, n) => {
  let itog = x
  for (i = 1; i < n; i++) {
    itog *= x;
  }
  return (itog)
}

console.log(result(2, 3))

