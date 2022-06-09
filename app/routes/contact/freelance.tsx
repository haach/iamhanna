import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {Input, TextArea} from '~/components/molecules/FormComponents';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - send me a freelance opportunity',
});

const FreelanceOpportunity: FC = () => {
  return (
    <ul className="flex flex-col gap-4">
      <li className="flex flex-col">
        <Input label="Company name" name="employer" required placeholder="Monster Corp" />
      </li>
      <li className="flex flex-col">
        <Input label="Compensation / rate" name="compensation" required placeholder="Enter fixed value or range" />
      </li>
      <li className="flex flex-col">
        <Input label="Your name" name="name" required placeholder="Jane Doe" />
      </li>
      <li className="flex flex-col">
        <Input label="Your email" type="email" name="email" required placeholder="janedoe@monster.com" />
      </li>
      <li className="flex flex-col">
        <TextArea
          label="Your message"
          name="message"
          required
          placeholder="Describe the role and the project or drop a link"
        />
      </li>
    </ul>
  );
};

export default FreelanceOpportunity;
