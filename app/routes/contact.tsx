import {ActionFunction, MetaFunction, redirect} from '@remix-run/node';
import {Link, Outlet} from '@remix-run/react';
import classNames from 'classnames';
import dotenv from 'dotenv';
import {FC, useState} from 'react';
import {DiGithubFull} from 'react-icons/di';
import {RiLinkedinBoxFill} from 'react-icons/ri';
import {SiCodewars} from 'react-icons/si';
import {Input} from '~/components/molecules/FormComponents';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {PageLayout} from '~/components/molecules/PageLayout';
import {hideLineOverflow, link} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';
import * as SendgridMail from '@sendgrid/mail';
import {ClientResponse} from '@sendgrid/mail';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - contact',
});

export const action: ActionFunction = async ({request}) => {
  const form = await request.formData();
  console.log('form', form);

  const possibleFields = [
    'contactReason',
    'name',
    'email',
    'message',
    'employer',
    'compensation',
    'workingModel',
    'workingModelDescription',
    'dogsAllowed',
    'benefits',
  ];

  const fields = possibleFields.reduce((acc: {[field: string]: string}, val) => {
    const field = form.get(val);
    if (field) {
      acc[val] = field as string;
    }
    return acc;
  }, {});

  dotenv.config();
  //dotenv.config({path: `.env.${process.env.NODE_ENV}`});
  dotenv.config({path: `.env`});
  const email = process.env.EMAIL;
  const apiKey = process.env.APIKEY;

  if (apiKey && email) {
    SendgridMail.setApiKey(apiKey);
    console.log('email', email);
    console.log('fields', fields);
    const messsage = {
      to: email,
      from: email,
      subject: `Message over the contact form - ${fields.name} regrding ${fields.contactReason}`,
      // SANATIZE !!!
      text: `${JSON.stringify(fields)}`,
      html: `<p>${JSON.stringify(fields)}</p>`,
    };
    return SendgridMail.send(messsage)
      .then(([res]) => redirect(`/contact/${res.statusCode === 202 ? 'success' : 'error'}`))
      .catch((err) => {
        console.log(err);
        return redirect(`/contact/error`);
      });
  }
};

export async function loader() {
  dotenv.config();
  //dotenv.config({path: `.env.${process.env.NODE_ENV}`});
  dotenv.config({path: `.env`});
  return process.env.EMAIL;
}

enum ContactReason {
  UNSET = 'UNSET',
  HELLO = 'HELLO',
  JOB = 'JOB',
  FREELANCE = 'FREELANCE',
}

const contactReasonLang = {
  [ContactReason.UNSET]: 'UNSET',
  [ContactReason.HELLO]: 'Just saying hi',
  [ContactReason.JOB]: 'Job opportunity',
  [ContactReason.FREELANCE]: 'Freelance project',
};

const contactReasonFromURL = () => {
  const {pathname} = window?.location;
  if (pathname === '/contact/job-opportunity') return ContactReason.JOB;
  else if (pathname === '/contact/freelance') return ContactReason.FREELANCE;
  else if (pathname === '/contact/hello') return ContactReason.HELLO;
  return ContactReason.UNSET;
};

const Contact: FC = () => {
  const [contactReason, setContactReason] = useState<ContactReason>(contactReasonFromURL());

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
          <Input type="hidden" name="contactReason" value={contactReason} />

          <div className="flex flex-col gap-8">
            <Typo.p>
              You are interested in working with me or just want to say hi? Please select a subject below and then fill
              the form.
            </Typo.p>

            <Typo.p uppercase className="flex flex-col md:flex-row gap-4">
              <Link
                to="/contact/job-opportunity"
                replace
                onClick={() => {
                  setContactReason(ContactReason.JOB);
                }}
              >
                <Typo.linkInternal isActive={window?.location.pathname === '/contact/job-opportunity'}>
                  {contactReasonLang[ContactReason.JOB]}
                </Typo.linkInternal>
              </Link>
              |
              <Link
                to="/contact/freelance"
                replace
                onClick={() => {
                  setContactReason(ContactReason.FREELANCE);
                }}
              >
                <Typo.linkInternal isActive={window?.location.pathname === '/contact/freelance'}>
                  {contactReasonLang[ContactReason.FREELANCE]}
                </Typo.linkInternal>
              </Link>
              |
              <Link
                to="/contact/hello"
                replace
                onClick={() => {
                  setContactReason(ContactReason.HELLO);
                }}
              >
                <Typo.linkInternal isActive={window?.location.pathname === '/contact/hello'}>
                  {contactReasonLang[ContactReason.HELLO]}
                </Typo.linkInternal>
              </Link>
            </Typo.p>

            <Outlet />
          </div>
        </div>
      </form>
    </PageLayout>
  );
};

export default Contact;
