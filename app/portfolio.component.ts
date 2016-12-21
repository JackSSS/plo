import {Component} from '@angular/core'

@Component({
	selector: 'portoflio',
	template: `
			<div>
				<h2 class="error">Por<span>tfoli</span>o</h2>
			</div>
			<div class="portfolio col-sm-12">
         <ul>
           <li>
             <p><a target="_blank" href="//www.stuffmapper.com">Stuffmapper</a></p>
           </li>
            <li>
             <p><a target="_blank" href="//www.losangeles-makeup-artist.com">Lisa Ruckh</a></p>
           </li>
           <li>
             <p><a class="" target="_blank" href="//www.studioartistcollective.com">
             <span>Stud</span><span>io Artist Collective</span></a></p>
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
