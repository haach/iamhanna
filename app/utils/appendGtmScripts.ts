/**
 * Use this to load GTM scripts only after user has consented the cookie
 */
export const appendGtmScripts = (TRACKING_ID: string) => {
  const gaScript1 = document.createElement('script');
  gaScript1.async = true;
  gaScript1.src = `https://www.googletagmanager.com/gtag/js?id=${TRACKING_ID}`;

  const gaScript2 = document.createElement('script');
  gaScript2.async = true;
  gaScript2.id = 'gtag-init';
  gaScript2.innerHTML = `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date()); gtag('config', '${TRACKING_ID}', {page_path: window.location.pathname,});`;

  document.body.prepend(gaScript1);
  document.body.prepend(gaScript2);
};
