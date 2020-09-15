const caesar = (string, key) => {
  if (key === 0) return string;

  let encrypted = '';
  let char = '';
  for (let i = 0; i < string.length; i += 1) {
    if (/[a-z]/i.test(string[i])) {
      if (string[i] === string[i].toLowerCase()) {
        char = (string.charCodeAt(i) + key - 97) % 26;
        if (char < 0) {
          char = 123 + char;
        } else {
          char += 97;
        }
      } else {
        char = (string.charCodeAt(i) + key - 65) % 26;
        if (char < 0) {
          char = 91 + char;
        } else {
          char += 65;
        }
      }
      encrypted += String.fromCharCode(char);
    } else {
      encrypted += string[i];
    }
  }
  return encrypted;
};

export default caesar;