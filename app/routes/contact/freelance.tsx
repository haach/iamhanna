import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {Input, TextArea} from '~/components/molecules/FormComponents';
import {button_primary, input} from '~/components/primitives';
import {Typo} from '~/components/primitives/typography';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - send me a freelance opportunity',
});

const FreelanceOpportunity: FC = () => {
  return (
    <ul className="flex flex-col gap-4">
      <li className="flex flex-col">
        <Input label="Company name" name="employer" required />
      </li>
      <li className="flex flex-col">
        <Input label="Compensation / rate" name="compensation" required placeholder="Enter fixed or range" />
      </li>
      <li className="flex flex-col">
        <Input label="Your name" name="name" required />
      </li>
      <li className="flex flex-col">
        <Input label="Your email" type="email" name="email" required />
      </li>
      <li className="flex flex-col">
        <TextArea
          label="Your message"
          name="message"
          required
          placeholder="Describe the role and the project or drop a link"
        />
      </li>

      <li className="flex flex-row justify-end">
        <button type="submit" className={button_primary}>
          send
        </button>
      </li>
    </ul>
  );
};

export default FreelanceOpportunity;
