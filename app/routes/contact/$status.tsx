import {useParams} from '@remix-run/react';
import {FC} from 'react';
import {Typo} from '~/components/primitives/typography';

const SuccessOrFailure: FC = () => {
  const {status} = useParams();
  return (
    <div>
      {status === 'success' ? (
        <>
          <Typo.h3>Yeahi!</Typo.h3>
          <Typo.p>Your message was sent. I'll get back to you soon.</Typo.p>
        </>
      ) : (
        <>
          <Typo.h3>Oh no! </Typo.h3>
          <Typo.p>There was a problem sending your email. Please give it another try. 😕</Typo.p>
        </>
      )}
    </div>
  );
};
export default SuccessOrFailure;
