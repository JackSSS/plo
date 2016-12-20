import {Component} from '@angular/core'

@Component({
	selector: 'portoflio',
	template: `
			<div class='portfolio'>
			 <h2 class="error">Por<span>tfoli</span>o</h2>
         <ul>
           <li>
             <h3><a target="_blank" href="https://www.stuffmapper.com">Stuffmapper</a></h3>
           </li>
            <li>
             <h3>Lisa Ruckh</h3>
           </li>
           <li>
             <h3 class="code"><span>Stud</span>io Artist<span>Collecti</span>ve</h3>
           </li>
           <li>
             <h3>Catch</h3>
           </li>
         </ul>
			</div>
            `
})
export class PortfolioComponent {

}
