import {ActionFunction, MetaFunction} from '@remix-run/node';
import dotenv from 'dotenv';
import {FC, useState} from 'react';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {PageLayout} from '~/components/molecules/PageLayout';
import {button_primary, hideLineOverflow, input, link} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
import {DiGithubFull} from 'react-icons/di';
import {RiLinkedinBoxFill} from 'react-icons/ri';
import {SiCodewars} from 'react-icons/si';
import classNames from 'classnames';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - contact',
});

export const action: ActionFunction = async ({request}) => {
  const form = await request.formData();
  console.log('form', form);

  const contactReason = form.get('contactReason');
  const name = form.get('name');
  const email = form.get('email');
  const message = form.get('message');

  switch (contactReason) {
    case ContactReason.JOB:
    case ContactReason.FREELANCE:
    case ContactReason.HELLO:
  }

  const fields = {contactReason, name, email, message};
  console.log('fields', fields);
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

enum ContactReason {
  HELLO = 'HELLO',
  JOB = 'JOB',
  FREELANCE = 'FREELANCE',
}

const contactReasonLang = {
  [ContactReason.HELLO]: 'Just quickly saying hi',
  [ContactReason.JOB]: 'Job opportunity',
  [ContactReason.FREELANCE]: 'Freelance project',
};

const Contact: FC = () => {
  const [contactReason, setContactReason] = useState<ContactReason>();
  return (
    <PageLayout
      title="Hanna Achenbach"
      subTitle="Frontend engineer"
      sideBar={
        <div className="flex flex-col items-end w-full">
          <HeadlineWithDivider title="Find me on" />
          <div className="flex flex-row gap-4 justify-end w-full">
            <a
              className={classNames(link, hideLineOverflow)}
              href="https://github.com/haach"
              target="_blank"
              rel="noopener noreferrer"
              title="Github"
            >
              <DiGithubFull className="h-12 w-12" />
            </a>
            <a
              className={classNames(link, hideLineOverflow)}
              href="https://www.linkedin.com/in/hanna-achenbach/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <RiLinkedinBoxFill className="h-6 w-6" />
            </a>
            <a
              className={classNames(link, hideLineOverflow)}
              href="https://www.codewars.com/users/haach"
              target="_blank"
              rel="noopener noreferrer"
              title="Codewars"
            >
              <SiCodewars className="h-5 w-5" />
            </a>
          </div>
        </div>
      }
    >
      <HeadlineWithDivider title="Get in touch" />
      <form action="/contact" method="post">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-8">
            <Typo.p>
              You are interested in working with me or just want to say hi? Please select a subject below and then fill
              in the form.
            </Typo.p>

            <select
              defaultValue="Please select"
              className={input}
              name="contactReason"
              placeholder="Please select the subject"
              onChange={(e) => setContactReason(e.target.value as ContactReason)}
            >
              <option value="">- Please select -</option>
              <option value={ContactReason.JOB}>{contactReasonLang[ContactReason.JOB]}</option>
              <option value={ContactReason.FREELANCE}>{contactReasonLang[ContactReason.FREELANCE]}</option>
              <option value={ContactReason.HELLO}>{contactReasonLang[ContactReason.HELLO]}</option>
            </select>
            {contactReason && (
              <ul className="flex flex-col gap-4">
                {contactReason === ContactReason.HELLO && (
                  <>
                    <li className="flex flex-col">
                      <label htmlFor="name">Your name</label>
                      <input name="name" required type="text" className={input} />
                    </li>
                    <li className="flex flex-col">
                      <label htmlFor="email">Your email</label>
                      <input type="email" id="email" required name="email" className={input} />
                    </li>
                    <li className="flex flex-col">
                      <label htmlFor="message">Your message</label>
                      <textarea name="message" required className={input} />
                    </li>
                  </>
                )}
                <li className="flex flex-col">
                  <button type="submit" className={button_primary}>
                    send
                  </button>
                </li>
              </ul>
            )}
          </div>
        </div>
      </form>
    </PageLayout>
  );
};

export default Contact;
