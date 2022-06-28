const minPartitions = (n) => {
  let cont = 0;

  const digits = n.toString().split("");
  const realDigits = digits.map(Number);

  do {
    realDigits.forEach((digit, index) => {
      if (digit > 0) realDigits[index] = digit - 1;
    });
    cont++;
  } while (Math.max(...realDigits) > 0);

  return cont;
};

const num = "3276";
console.log(minPartitions(num));
