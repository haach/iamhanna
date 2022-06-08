import {FC} from 'react';
import {Typo} from '~/components/primitives/typography';

const CookieConsent: FC = () => {
  return (
    <div className="flex flex-col items-center content-center justify-center">
      <div className="py-10 px-10 max-w-lg">
        <Typo.h1>About those cookies 🍪</Typo.h1>
        <Typo.p>
          We use Google Analytics for statistical purpose to distinguish unique users as well as unique sessions from a
          single user.
        </Typo.p>
        <Typo.p>
          You can find more info on how Google uses your cookies here:{' '}
          <Typo.linkExternal href="https://support.google.com/analytics/answer/11397207?hl=en">
            support.google.com/analytics/
          </Typo.linkExternal>
        </Typo.p>
      </div>
    </div>
  );
};
export default CookieConsent;
