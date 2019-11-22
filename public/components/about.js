function AboutController() {
    // const ctrl = this;

     
}  
  
angular
.module('owlApp')
.component('about', {
    template: `
        <section class="about">
       
        <h3>This is the About page!</h3>

        </section>
        `, // or use templateUrl
    controller: AboutController

  });