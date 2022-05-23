const dataFunc = () => {
  return fetch("./data/books.json")
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
const calledDataFunc =dataFunc()
export { calledDataFunc };
