// fetch

const tab = fetch("https://jsonplaceholder.typicode.com/posts")
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  })
  .then((data) => data);

const tab1 = fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "content-type": "application/json" },
  body: JSON.stringify(data),
})
  .then((data) => data.json())
  .then((data) => {
    console.log(data);
  })
  .then((data) => data);

// axios
const axios = require("axios");
const data = axios
  .get("https://jsonplaceholder.typicode.com/posts")
  .then((item) => {
    console.log(item);
  });

axios
  .post("https://jsonplaceholder.typicode.com/posts", data)
  .then((item) => console.log(item.data));
