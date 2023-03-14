function addCommas(num) {
  // Convert the input number to a string using the toString() method.
  let str = num.toString();
  // Define a regular expression that matches non-word boundaries (\B) followed by groups of three digits.
  // The (?=(\d{3})+(?!\d)) lookahead assertion ensures that the match is followed by another group of three digits, but not another digit.
  let pattern = /\B(?=(\d{3})+(?!\d))/g;
  // Use the replace() method to insert commas between groups of three digits.
  // The pattern is replaced with a comma followed by the match, represented by $&.
  return str.replace(pattern, ",");
}

module.exports = addCommas;