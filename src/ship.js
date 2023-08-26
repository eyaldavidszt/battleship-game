export default function Ship({ length }) {
  let hits = 0;
  const hit = () => {
    hits += 1;
  };
  const isSunk = () => {
    if (hits === length) return true;
    return false;
  };
  const getLength = () => length;
  return { isSunk, hit, getLength };
}
