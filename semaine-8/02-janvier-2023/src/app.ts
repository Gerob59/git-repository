import Express, { Request, Response } from "express";

const app = Express();

app.use("/", (req: Request, res: Response) => {
  res.send("c'est tout bon");
});

app.listen("3000", () => {
  console.log(`server lancé sur le port 3000`);
});
