import {FC} from 'react';
import {Typo} from '~/components/primitives/typography';

const Success: FC = () => {
  return (
    <div>
      <Typo.h3>Thank you!</Typo.h3>
      <Typo.p>Your message was sent. I'll get back to you soon.</Typo.p>
    </div>
  );
};
export default Success;
