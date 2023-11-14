function firstWord(s) {
  // your code here
  if (s == "") return "";
  s = s.trim();
  let i = 0, str = "";
  while (i <= s.length - 1) {
    if(s[i] == " ") return str;
    str += s[i];
    i++;
  }
  return str;
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
