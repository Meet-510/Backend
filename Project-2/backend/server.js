import express from "express";
const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });

const port = process.env.PORT || 3000;
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "1  joke",
      content: "1 joke",
    },
    {
      id: 2,
      title: "2  joke",
      content: "2 joke",
    },
    {
      id: 3,
      title: "3  joke",
      content: "3 joke",
    },
    {
      id: 4,
      title: "4  joke",
      content: "4 joke",
    },
  ];

  res.send(jokes);
});
app.listen(port, () => {
  console.log(`Hello MADAFAKA ${port}`);
});
