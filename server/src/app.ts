import express, { Request, Response } from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res: Response) => {
    res.send('Hello World from Express and TypeScript!');
});

app.listen(PORT, () => {
    console.log(`Hello, Server running on http://localhost:${PORT}`);
});
