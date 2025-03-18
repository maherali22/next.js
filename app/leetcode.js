const check = (ransomNote, magazine) => {
  return magazine
    .split("")
    .sort()
    .join("")
    .includes(ransomNote.split("").sort().join(""));
};

console.log(check("maher", "manu"));
console.log(check("aa",""))

