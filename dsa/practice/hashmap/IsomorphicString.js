// Approach
//  Initialize two hashmaps : mapST and mapTS
// iterate through index i from 1 to N-1
//   - c1 = s[i] and c2 = t[i]
// if c1 exist in mapST and it value isn't c2 return false
// if c2 exist in mapTS and it value isn't c1 return true

function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];
    if (mapST.has(charS) && mapST.get(charS) !== charT) {
      return false;
    }
    if (mapTS.has(charT) && mapTS.get(charT) !== charS) {
      return false;
    }

    mapST.set(charS, charT);
    mapTS.set(charT, charS);
  }

  return true;
}

console.log(isIsomorphic("foo", "bar"));
console.log(isIsomorphic("paper", "title"));
console.log(isIsomorphic("ab", "aa"))
