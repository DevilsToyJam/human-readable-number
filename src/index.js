module.exports = function toReadable (number) {
  let answer = '';
  
  const unitNumbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const unitExtensions = {10: 'ten', 11: 'eleven', 12: 'twelve'};
  const numberEndings = ['teen', 'ty'];
  const endingsExclude = ['twen', 'thir', 'four', 'fif', 'six', 'seven', 'eigh', 'nine'];
  
  const checkFunc = (x) => {
    if (x <= 9) {
      return unitNumbers[x]
    }
    if (x <= 12 && x > 9) {
      return unitExtensions[x]
    }
    if (x <= 19 && x > 12) {
      return endingsExclude[x - 12] + numberEndings[0]
    }
    if (x > 39 && x <= 49) {
      if (x === 40) {
        return 'forty'
      }
      return 'forty' + ' ' + unitNumbers[x % 10] 
    }
    if (x > 19 && x <= 99) {
      if (x % 10 === 0) {
        return endingsExclude[Math.floor(x/10) - 2] + numberEndings[1]
      } else {
        return endingsExclude[Math.floor(x/10) - 2] + numberEndings[1] + ' ' + unitNumbers[x % 10]
      }
    }
  }

  if (number >= 0 && number <= 99) {
    return checkFunc(number)
  }

  if (number > 99 && number <= 999) {
    let numberReminder = (number % 100);
    let hundredCounter = Math.floor(number/100);
    if (numberReminder === 0) {
      return unitNumbers[hundredCounter] + ' ' + 'hundred'
    }
    return unitNumbers[hundredCounter] + ' ' + 'hundred' + ' ' + checkFunc(numberReminder)
  }
}

