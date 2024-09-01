export const doSomeStuff = (
  withThis: string,
  andThat: string,
  andThose: string[]
): boolean | void => {
  if (!andThose.length) {
    return false;
  }
  console.log(withThis);
  console.log(andThat);
  console.dir(andThose);
  console.log(longString, trailing, why, iWish, vizzini, re);
  return;
};
