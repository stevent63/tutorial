import express from 'express';
import userRoutes from './routes/userRoutes.js'

//initiate express
const app = express();
app.use(express.json());

//routes
app.get('/', (req, res) => {
  res.json({ msg: 'hello world' });
});
app.use('/user', userRoutes);
app.get('*', (req, res) => {
  res.json({ msg: 'not a valid route' });
  console.log('* hit');
});

//start server
const port = process.env.PORT || 4242;
app.listen(port, () => {
  console.log(`Serving on port ${port}`);
});