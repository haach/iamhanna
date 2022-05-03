import {MetaFunction} from '@remix-run/node';
import {FC} from 'react';

export const meta: MetaFunction = () => ({
  title: 'i am hanna ///',
});

const Index: FC = () => {
  return (
    <div>
      <h1>Welcome to Remix</h1>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Index;
