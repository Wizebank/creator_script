import cta from './blocks/cta';
import main from './blocks/main';

function wizebank() {
  let activateScript = false;
  const currentURL = window.location.pathname;
  const allowList = [
    'dist/index.html',
    '/p/trade-and-travel-pro',
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

    const pages = [
      { name: 'trade-and-travel-pro', productId: 'e5474fee-f41c-4b97-9e90-058efeb1fddc' },
      { name: 'consulting-and-coaching-for-traders' , productId: 'ffd55f19-cda1-4f50-be23-f084f14c04df' },
    ];

    const projectUrl = `https://app.wizebank.co/student/checkout/f4906aa1-6d62-4dc9-b96c-443bed57ab70`;
    const currentUrl = window.location.pathname;
    const product = pages.find(p => currentUrl.includes(p.name)) || null;
    const productUrl = product ? '?productId=' + product.productId : '';

    const checkoutUrl = projectUrl + productUrl

    cta(checkoutUrl);
    main(checkoutUrl);
  }
}

wizebank();