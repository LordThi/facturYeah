import express from 'express';

const app = express();

// Servir les fichiers statiques
app.use(express.static('public'));

// Autres routes et configuration du serveur ici

export default app;
