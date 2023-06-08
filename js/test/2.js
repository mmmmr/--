function a(a, ...abv) {
  console.log(a, abv);
}

const b = (a, ...rest) => {
  console.log(a, rest)
}

a(1, 2, 3, 4, 5, 6)
b(1, 2, 3, 4, 5, 6)