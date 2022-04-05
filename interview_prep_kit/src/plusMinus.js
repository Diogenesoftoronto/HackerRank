function plusMinus(arr) {
  // Write your code here
  const denominator = arr.length;
  let zeroNumerator = 0;
  let positiveNumerator = 0;
  let negativeNumerator = 0;
  arr.forEach((element) => {
    // determine whether the element is positive, negative or a zero
    let elementIsZero;
    let elementIsPositive;
    // check if zero
    // check if positive, negative
    let checkValue = element + element;
    checkValue == 0
      ? (elementIsZero = true)
      : checkValue > element
      ? (elementIsPositive = true)
      : null;
    // ternary that handles operations
    elementIsZero
      ? zeroNumerator++
      : elementIsPositive
      ? positiveNumerator++
      : negativeNumerator++;
  });
  const cleanInputs = (numerator) =>
    Math.trunc(Math.round((numerator / denominator) * 10 ** 7)) * 10 ** -7;

  const positiveRatio = cleanInputs(positiveNumerator);
  const negativeRatio = cleanInputs(negativeNumerator);
  const zeroRatio = cleanInputs(zeroNumerator);
  
  console.log(`${positiveRatio} \n ${negativeRatio} \n ${zeroRatio}`);
}
