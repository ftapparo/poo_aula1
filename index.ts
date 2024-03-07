import express from "express";

const app = express();

// //http://localhost:3001/?name=pedro&age=22
// function getData(req: any, res: any) {
//   const name = req.query.name || "Desconhecido";
//   const age = req.query.age || "Desconhecida";
//   res.send("Seu nome é " + name + " e sua idade é " + age);
// }
// app.get("/", getData);

app.get("/", (req: any, res: any) => {
  const name = req.query.name || "Desconhecido";
  const age = req.query.age || "Desconhecida";
  res.send("Seu nome é " + name + " e sua idade é " + age);
});

app.listen(3001, () => {
  console.log(`App rodando na porta 3001`);
});
