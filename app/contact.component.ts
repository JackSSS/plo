import {Component} from '@angular/core'
// import {AutoGrowDirective} from './auto-grow.directive'

@Component({
  selector: 'contact',
  template: `
      <div>
        <h2 class="error"><span>Co</span>ntact</h2>
      </div>
      <div class="portfolio">
         <ul>
           <li>
             <a target="_top" href="mailto:sneed.jack@gmail.com"><i class="fa fa-envelope fa-3x" aria-hidden="true"></i>l</a>
           </li>
            <li>
             <a target="_blank" href="//www.linkedin.com/in/jacksneed"><i class="fa fa-linkedin fa-3x" aria-hidden="true"></i></a>
           </li>
           <li>
             <a target="_blank" href="//github.com/JackSSS"><i class="fa fa-github fa-3x" aria-hidden="true"></i></a>
           </li>
         </ul>
      </div>
            `
})
export class ContactComponent {
  title = "Contact";

}
