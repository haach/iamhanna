import {FC} from 'react';
import {Typo} from '~/components/primitives/typography';
import {useWindow} from '~/WindowContext';

interface CookieBanner {
  onAccept(): void;
  onReject(): void;
}

export const CookieBanner: FC<CookieBanner> = ({onAccept, onReject}) => {
  const windowContext = useWindow();
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-black">
      <Typo.p>
        By continuing to visit this site, you accept the use of cookies by Google Analytics for statistical purposes.
        {windowContext && window?.location.pathname !== '/cookie-consent' && (
          <Typo.linkInternal to="/cookie-consent">Read more</Typo.linkInternal>
        )}
      </Typo.p>
      <div>
        <button
          onClick={() => {
            onReject();
          }}
        >
          Reject
        </button>
        <button
          onClick={() => {
            onAccept();
          }}
        >
          Accept
        </button>
      </div>
    </div>
  );
};
