let nombres = [0, NaN, Infinity, -Infinity, 42, 3.14, Number.MAX_SAFE_INTEGER + 1,-0];
for (let n of nombres) {
  let message;
  if (Number.isNaN(n)) {
    message = "INVALIDE";
  } else if (n === Infinity || n === -Infinity) {
    message = "INFINI";
  } else if (Object.is(n, -0)) {
    message = "ZERO NEGATIF";
  } else if (Number.isInteger(n)) {
    if (n >= Number.MIN_SAFE_INTEGER && n <= Number.MAX_SAFE_INTEGER) {
      message = "ENTIER SUR";
    } else {
      message = "ENTIER HORS LIMITES";
    }
  } else {
    message = "DECIMAL";
  }
  console.log(n + " -> " + message);
}