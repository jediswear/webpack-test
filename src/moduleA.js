function printCounter (htmlElem) {
  let counter = 0;

  setInterval(() => {
    htmlElem.textContent = counter++;
  }, 1000);
}

export default printCounter
