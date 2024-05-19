export const randomNum = () => {
  let from = Math.floor(Math.random() * 18) + 1;
  let to = from + 2;

  if (from >= 16) {
    to = 18;
    from = to - 3;
  }

  return { from, to };
};
