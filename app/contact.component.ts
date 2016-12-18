import {Component} from '@angular/core'
// import {AutoGrowDirective} from './auto-grow.directive'

@Component({
  selector: 'contact',
  template: `
						 <h2>Contact</h2>

               <ul>
                 <li>
                   <input type="text" autoGrow />
                 </li>
                 <li>
                   <input type="text" autoGrow />
                 </li>
                 <li>
                   <input type="text" autoGrow />
                 </li>
                 <li>
                   <input type="text" autoGrow />
                 </li>
               </ul>
            `
})
export class ContactComponent {
  title = "Contact";

}
