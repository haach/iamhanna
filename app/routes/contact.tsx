import {ActionFunction, MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {Typo} from '~/components/primitives/typography';
import dotenv from 'dotenv';
import {PageLayout} from '~/components/molecules/PageLayout';
import {HR} from '~/components/primitives';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - contact',
});

export const action: ActionFunction = async ({request}) => {
  console.log('request', request);
  /* 
  let session = await getSession(request.headers.get('Cookie'));
  // perform the login here and store something in the session
  return redirect('/dashboard', {
    headers: {'Set-Cookie': await commitSession(session)},
  }); */
  return null;
};

export async function loader() {
  dotenv.config();
  //dotenv.config({path: `.env.${process.env.NODE_ENV}`});
  dotenv.config({path: `.env`});
  return process.env.EMAIL;
}

const Contact: FC = () => {
  return (
    <PageLayout
      title="Hanna Achenbach"
      subTitle="Frontend engineer"
      sideBar={
        <div className="flex flex-col items-end w-full">
          <HeadlineWithDivider title="Find me on" />
          <Typo.p>
            <a href="https://www.linkedin.com/in/hanna-achenbach/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </Typo.p>
          <Typo.p>
            <a href="https://github.com/haach" target="_blank" rel="noopener noreferrer">
              Github
            </a>
          </Typo.p>
          <Typo.p>
            <a href="https://www.codewars.com/users/haach" target="_blank" rel="noopener noreferrer">
              Codewars
            </a>
          </Typo.p>
        </div>
      }
    >
      <Typo.p>
        You are interested in working with me? Then please fill the form below and drop me a short message.
      </Typo.p>
      <form className="flex flex-col" action="/contact" method="post">
        <label htmlFor="name">Your name</label>
        <input name="name" required type="text" />
        <label htmlFor="email">Your email</label>
        <input type="email" id="email" required name="email" />
        <label htmlFor="message">Your message</label>
        <textarea name="message" required />
        <button type="submit">send</button>
      </form>
    </PageLayout>
  );
};

export default Contact;
