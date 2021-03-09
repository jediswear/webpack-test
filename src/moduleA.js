function printCounter (htmlElem) {
  let counter = 5;

  setInterval(() => {
    htmlElem.textContent = counter++;
  }, 1000);
}

export default printCounter
