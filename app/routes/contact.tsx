import {FC} from 'react';
const dotenv = require('dotenv');

export async function loader() {
  dotenv.config();
  //dotenv.config({path: `.env.${process.env.NODE_ENV}`});
  dotenv.config({path: `.env`});
  return process.env.EMAIL;
}

const Contact: FC = () => {
  return <h1>Contact me</h1>;
};

export default Contact;
