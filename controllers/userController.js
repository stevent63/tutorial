import { StatusCodes } from 'http-status-codes';

const upsertUser = async (req, res) => {
  // const user = req.body.user;
  console.log('upsert user for');
  res.status(StatusCodes.OK).json({ msg: 'upsert user' });
};

export { upsertUser };
