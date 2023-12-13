import express, {Express, Request, Response} from "express";

const app: Express = express();

const PORT = 8080;

app.get("/", (req: Request, res: Response) => {
	res.send(" Initial server things! And changes ");
});

app.listen(PORT, () => {
	console.log(`Server running on ports ${PORT}`);
});
