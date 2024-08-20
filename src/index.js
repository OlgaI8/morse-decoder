const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
  const SPACE = '**********';
  let lettersArray = [];
  let symbols = [];

  for (let i = 0; i < expr.length; i += 10) {
    symbols.push(expr.slice(i, i + 10));
  }

  for (let i = 0; i < symbols.length; i++) {

    for (let [key, value] of Object.entries(MORSE_TABLE)) {

      let keyIntoNumberView = key.replace(/-/g, '11').replace(/\./g, '10');

      if (keyIntoNumberView.length < 10) {
        let blank = '0000000000';
        let tenBytesKey = blank.slice(0, 10 - keyIntoNumberView.length) + keyIntoNumberView;
        key = tenBytesKey;
      } else {
        key = keyIntoNumberView;
      }

      if (symbols[i] === key) {
        lettersArray.push(value);
      }     
    }

    if (symbols[i] === SPACE) {
      lettersArray.push(' ');
    }
  }

  return String(lettersArray).replace(/,/g, '');
}

module.exports = {
    decode
}