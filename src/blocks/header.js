import Vue from 'vue';
import insertAfter from '../helpers/insert_after_html';

function headerCtor() {
  Vue.component('wizebank-header', {
    template: `
      <div class="wb-header-container">
        <div class="container">
          <h2 style="text-align: center;">
            Get Started Now!
          </h2>
    
          <p style="text-align: center;">
            Payment Plans as Low as $208/month.
          
            <a href="https://app.wizebank.co" target="_blank" rel="noopener noreferrer">
              Learn More!
            </a>
          </p>
        </div>
      </div>
    `
  });

  const checkoutCta = document.getElementsByClassName('checkout-cta')[0];
  const target = document.createElement('div');
  target.setAttribute('id', 'wizebank-header');
  insertAfter(checkoutCta, target);
  checkoutCta.remove()
  
  const header = new Vue({
    el: '#wizebank-header',
    template: `
      <wizebank-header />
    `,
  });
}

export default headerCtor;