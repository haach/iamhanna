import {ActionFunction, MetaFunction, redirect} from '@remix-run/node';
import {Outlet, useLocation} from '@remix-run/react';
import * as SendgridMail from '@sendgrid/mail';
import classNames from 'classnames';
import dotenv from 'dotenv';
import {FC, useRef, useState} from 'react';
import {DiGithubFull} from 'react-icons/di';
import {RiLinkedinBoxFill} from 'react-icons/ri';
import {SiCodewars} from 'react-icons/si';
import {AiOutlineLoading3Quarters} from 'react-icons/ai';
import {Input} from '~/components/molecules/FormComponents';
import {HeadlineWithDivider} from '~/components/molecules/HeadlineWithDivider';
import {ContainerInner} from '~/components/molecules/Layout';
import {PageLayout} from '~/components/molecules/PageLayout';
import {btn_primary, btn, hideLineOverflow, link} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - contact',
});

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

const sanitize = (string: string) => {
  // escape dangerous character
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '/': '&#x2F;',
  };
  const reg = /[&<>"'/]/gi;
  return string.replace(reg, (match) => map[match as keyof typeof map]);
};

export const action: ActionFunction = async ({request}) => {
  const form = await request.formData();

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
      const cleanField = sanitize(field as string);
      if (val === 'contactReason') acc[val] = contactReasonLang[cleanField as ContactReason];
      else acc[val] = cleanField;
    }
    return acc;
  }, {});

  dotenv.config({path: `.env`});
  const fromEmail = process.env.EMAIL_FROM;
  const toEmail = process.env.EMAIL_TO;
  const apiKey = process.env.APIKEY;

  if (apiKey && fromEmail && toEmail) {
    SendgridMail.setApiKey(apiKey);
    // SANATIZE !!!
    const text = `Message over the contact form - ${fields.name} regrding ${fields.contactReason}`;
    const html = Object.entries(fields).map(([key, value]) =>
      key === 'email'
        ? '<p><b>' + key + '</b>: <a href="mailto:' + value + '" >' + value + '</a></p>'
        : '<p><b>' + key + '</b>: ' + value + '</p>'
    );
    const messsage = {
      to: toEmail,
      from: fromEmail,
      subject: `Message over the contact form - ${fields.name} regrding ${fields.contactReason}`,
      text,
      html: html.join(''),
    };
    return SendgridMail.send(messsage)
      .then(([res]) => redirect(`/contact/${res.statusCode === 202 ? 'success' : 'error'}`))
      .catch((err) => {
        console.log(err);
        return redirect(`/contact/error`);
      });
  }
};

const contactReasonFromURL = () => {
  const {pathname} = useLocation();
  if (pathname === '/contact/job-opportunity') return ContactReason.JOB;
  else if (pathname === '/contact/freelance') return ContactReason.FREELANCE;
  else if (pathname === '/contact/hello') return ContactReason.HELLO;
  return ContactReason.UNSET;
};

const Contact: FC = () => {
  const location = useLocation();
  const [contactReason, setContactReason] = useState<ContactReason>(contactReasonFromURL());
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const handleSubmit = () => {
    const form = formRef?.current;
    if (!form) return;
    // check if form is valid
    if (form.checkValidity() === false) return;
    // setIsSubmitting
    setIsSubmitting(true);
    // perform submit
    form.submit();
    // No need to reset because of redirect from action
  };
  return (
    <PageLayout
      title="Hanna Achenbach"
      subTitle="Frontend engineer"
      sideBar={
        <ContainerInner className="md:text-right">
          <HeadlineWithDivider title="Find me on" className="md:text-right" />
          <div className="flex flex-row gap-4 md:justify-end w-full">
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
        </ContainerInner>
      }
    >
      <ContainerInner>
        <HeadlineWithDivider title="Get in touch" />
        <form action="/contact" method="post" ref={formRef}>
          <div className="flex flex-col gap-20">
            <Input type="hidden" name="contactReason" value={contactReason} />

            <div className="flex flex-col gap-8">
              <Typo.p>
                You are interested in working with me or just want to say hi? Please select a subject below and then
                fill the form.
              </Typo.p>

              <Typo.p className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <Typo.linkInternal
                  to="/contact/job-opportunity"
                  replace
                  onClick={() => {
                    setContactReason(ContactReason.JOB);
                  }}
                  block
                  isActive={location.pathname === '/contact/job-opportunity'}
                >
                  {contactReasonLang[ContactReason.JOB]}
                </Typo.linkInternal>
                <span className="hidden sm:inline-block">|</span>
                <Typo.linkInternal
                  to="/contact/freelance"
                  replace
                  onClick={() => {
                    setContactReason(ContactReason.FREELANCE);
                  }}
                  block
                  isActive={location.pathname === '/contact/freelance'}
                >
                  {contactReasonLang[ContactReason.FREELANCE]}
                </Typo.linkInternal>
                <span className="hidden sm:inline-block">|</span>
                <Typo.linkInternal
                  to="/contact/hello"
                  replace
                  onClick={() => {
                    setContactReason(ContactReason.HELLO);
                  }}
                  block
                  isActive={location.pathname === '/contact/hello'}
                >
                  {contactReasonLang[ContactReason.HELLO]}
                </Typo.linkInternal>
              </Typo.p>

              <Outlet />
              {contactReason !== ContactReason.UNSET && (
                <div className="flex flex-row justify-end">
                  <button
                    type="submit"
                    className={classNames(btn, btn_primary, 'flex flex-row items-center justify-center')}
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <AiOutlineLoading3Quarters className="animate-spin h-5 w-5 self-center" />
                    ) : (
                      <span>send</span>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </ContainerInner>
    </PageLayout>
  );
};

export default Contact;
