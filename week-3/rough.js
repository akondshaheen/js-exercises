function isEven(n) {
  return n % 2 === 0;
}
function generateChars(chessboard) {
  for (var c = 0; c < size; c += 1) {
    if (isEven(c)) {
      chessboard += " ";
    } else {
      chessboard += "#";
    }
  }
  chessboard += "\n";
  return chessboard;
}
var chessboard = "";
var size = 8;
for (var i = 0; i < size; i += 1) {
  if (isEven(i)) {
    chessboard = generateChars(chessboard);
  } else {
    for (var c = 0; c < size; c += 1) {
      if (isEven(c)) {
        chessboard += "#";
      } else {
        chessboard += " ";
      }
    }
    chessboard += "\n";
  }
}
console.log(chessboard);