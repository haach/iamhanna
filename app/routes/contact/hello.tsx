import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';
import {Input, TextArea} from '~/components/molecules/FormComponents';
import {button_primary} from '~/components/primitives';

export const meta: MetaFunction = () => ({
  title: 'i am hanna - say hello',
});

const Hello: FC = () => {
  return (
    <ul className="flex flex-col gap-4">
      <li className="flex flex-col">
        <Input label="Your name" name="name" required placeholder="Jane Doe" />
      </li>
      <li className="flex flex-col">
        <Input label="Your email" type="email" name="email" required placeholder="janedoe@monster.com" />
      </li>
      <li className="flex flex-col">
        <TextArea label="Your message" name="message" required placeholder="Hello stranger!" />
      </li>

      <li className="flex flex-row justify-end">
        <button type="submit" className={button_primary}>
          send
        </button>
      </li>
    </ul>
  );
};

export default Hello;
