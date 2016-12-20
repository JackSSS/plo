import {Component} from '@angular/core'

@Component({
	selector: 'portoflio',
	template: `
			<div>
				<h2 class="error">Por<span>tfoli</span>o</h2>
			</div>
			<div class='portfolio'>
         <ul>
           <li>
             <p><a target="_blank" href="https://www.stuffmapper.com">Stuffmapper</a></p>
           </li>
            <li>
             <p>Lisa Ruckh</p>
           </li>
           <li>
             <p class="code"><span>Stud</span>io Artist<span>Collecti</span>ve</p>
           </li>
           <li>
             <p>Catch</p>
           </li>
         </ul>
			</div>
            `
})
export class PortfolioComponent {

}
