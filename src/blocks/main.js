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

            <p class="text-center">
              "I'm so excited to announce our partnership with Wizebank
              so you can pay at your own pace. Interested in a Trade and
              Travel program? Just use Wizebank to easily split the cost
              into easy monthly payments with no added fees or interest."
            </p>
          </div>
  
          <div class="wb-image">
            <img
              style="width: 100%;" 
              src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/aa515181-1106-4387-98bd-6d1a28dcc1ab/teri-ijeom-on-laptop-jouney-to-launch.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20211203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20211203T041235Z&X-Amz-Expires=86400&X-Amz-Signature=5c39a5ba16df4f322e607e25547f7d12584ff9d726ec87f5c890643df87ab0fc&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22teri-ijeom-on-laptop-jouney-to-launch.jpeg%22&x-id=GetObject"
            />
          </div>
        </div>


        <br>

        <div class="text-center">
          <a target="_blank" rel="noopener noreferrer" :href="checkoutUrl" class="btn btn-hg btn-secondary btn-enroll">
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