// listOne - array of objects
// listTwo - array of strings / other primitive data if necessary
export const addProperty = (listOne, listTwo) => {
  listOne.map((step, index) => {
    step.imgSrc = listTwo[index];
    return step;
  });
  return listOne;
};