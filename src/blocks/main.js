import Vue from 'vue';
import insertAfter from '../helpers/insert_after_html';

function mainCtor(checkoutUrl) {
  Vue.component('wizebank-main', {
    data() {
      return {
        checkoutUrl
      }
    },
    template: `
      <div class="course-block block">
        <div class="wb-main-container container">          
          <div class="wb-text">
      
            <h3 class="text-center">
              <strong>
                Make easy monthly payments with Wizebank
              </strong>
            </h3>

            <br>

            <p class="text-center">
              "I'm so excited to announce our partnership with Wizebank so you can pay at your own pace. Interested in a Trade and
              Travel program? Just use <a href="https://wizebank.co/teri" target="_blank" rel="noopener noreferrer">Wizebank</a>
              to easily split the cost into easy monthly payments with no added fees or interest."
            </p>
          </div>
  
          <div class="wb-image">
            <img
              style="width: 100%;" 
              src="https://treefort.sfo2.digitaloceanspaces.com/images/teri-ijeom-on-laptop-jouney-to-launch.jpeg"
            />
          </div>
        </div>


        <br>

        <div class="text-center">
          <a target="_blank" rel="noopener noreferrer" :href="checkoutUrl" class="btn btn-hg btn-primary btn-enroll">
            See Payment Plans
          </a>
        </div>
      </div>
    `,
  });

  const courseBlock = document.getElementsByClassName('course-block block checkout')[0];
  const target = document.createElement('div');
  target.setAttribute('id', 'wb-main');
  insertAfter(courseBlock, target);
  
  const main = new Vue({
    el: '#wb-main',
    template: `
      <wizebank-main />
    `
  });
  
}

export default mainCtor;