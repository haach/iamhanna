import {RemixBrowser} from '@remix-run/react';
import {hydrate} from 'react-dom';

console.log(
  '\n🐕 🐕 🐕\n\nHey fellow developer!\n\nI appreciate you taking a look at this!\nIf you find a nasty bug, please drop me a message at https://iamhanna.de/contact\n\nCheers!🍻'
);

hydrate(<RemixBrowser />, document);
