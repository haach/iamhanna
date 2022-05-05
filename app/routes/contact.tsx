import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {H1} from '~/components/primitives/typography';
import dotenv from 'dotenv';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - contact',
});

export async function loader() {
  dotenv.config();
  //dotenv.config({path: `.env.${process.env.NODE_ENV}`});
  dotenv.config({path: `.env`});
  return process.env.EMAIL;
}

const Contact: FC = () => {
  return <H1>Contact me</H1>;
};

export default Contact;
