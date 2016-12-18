import {Component} from '@angular/core'
// import {AutoGrowDirective} from './auto-grow.directive'

@Component({
  selector: 'not-found',
  template: `{{ title }}
						 <p>That sucks. This page isn't here.
            `
})
export class NotFoundComponent {
  title = "404";
}
