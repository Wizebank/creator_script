import cta from './blocks/cta';
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
    const productList = document
      .getElementsByClassName('product-list')[0];
      
    if (productList && productList.children.length > 1) {
      const lastChild = productList.lastElementChild;

      if (
        lastChild && 
        lastChild.lastElementChild && 
        lastChild.lastElementChild.innerText.includes('payment')
      ) {
        lastChild.remove();
      }
    }

    cta();
    main();
  }
}

wizebank();