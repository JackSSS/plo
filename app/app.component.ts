import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
  <div class="site-wrapper-inner">
    <div class="cover-container">
      <div class="inner">
        <div>
          <img src="./app/img/logo.svg" class="logo">
        </div>
        <ul class="nav masthead-nav">
          <li class="nav-links"><a routerLink="">Home</a></li>
          <li class="nav-links"><a routerLink="portfolio">Portfolio</a></li>
          <li class="nav-links"><a routerLink="resume">Resume</a></li>
          <li class="nav-links"><a routerLink="about">About</a></li>
          <li class="nav-links"><a routerLink="contact">Contact</a></li>
        </ul>
      </div>
    </div>
      <router-outlet></router-outlet>
      
          <div class="mastfoot">
            <div class="inner">
              <p>by Jack Sneed | 2016</p>
            </div>
          </div>
  </div>
  `,
})
export class AppComponent {
}