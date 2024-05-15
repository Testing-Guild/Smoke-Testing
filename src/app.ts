import e, { Application, Request, Response } from "express";

const app = e();
app.get("/", (req: Request, res: Response) => {
  res.status(200).send("Hello, Smoke Test!");
});
app.listen(3000, () => {
  console.log(`Server is running on port 3000`);
});
export default app