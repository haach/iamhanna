import {RemixBrowser} from '@remix-run/react';
import {hydrateRoot} from 'react-dom/client';

console.log(
  '\nš š š\n\nHey fellow developer!\n\nI appreciate you taking a look at this!\nIf you find a nasty bug, please drop me a message at https://www.iamhanna.de/contact/hello\n\nCheers!š»'
);

const root = hydrateRoot(document, <RemixBrowser />);
