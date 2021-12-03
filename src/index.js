import header from './blocks/header';
import main from './blocks/main';

function wizebank() {
  let activateScript = false;
  const currentURL = document.URL;
  const allowList = [
    'dist/index.html',
    'https://investwithteri.com/p/trade-and-travel-pro',
  ];

  for (let i = 0; i < allowList.length; i++) {
    const allowedURL = allowList[i];
    if (currentURL.includes(allowedURL)) {
      activateScript = true;
      break;
    }
  }

  if (activateScript) {
    header();
    main();
  }
}

wizebank();