import Vue from 'vue';
import insertAfter from '../helpers/insert_after_html';

function headerCtor(checkoutUrl) {
  Vue.component('wizebank-header', {
    data() {
      return {
        checkoutUrl
      }
    },
    template: `
      <div class="wb-header-container">
        <div class="container text-center">
          <h2>
            Get Started Now!
          </h2>
    
          <p>
            Payment Plans as LOW as $208/Month.
          
            <a :href="checkoutUrl" target="_blank" rel="noopener noreferrer">
              Learn More Here!
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