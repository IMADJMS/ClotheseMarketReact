console.log("Hello from index.js");
setInterval(() => {
  document.getElementsByTagName("body")[0].click();
  console.log("Clicking");
}, 2000);
