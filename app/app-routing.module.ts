import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { PortfolioComponent }  from './portfolio.component';
import { SkillsComponent }  from './skills.component';
import { ContactComponent }  from './contact.component';

const routes: Routes = [
	{ path: '', redirectTo: '/home', pathMatch: 'full' },
	{ path: 'home', component: DashboardComponent },
	{ path: 'portfolio', component: PortfolioComponent },
	{ path: 'skills', component: SkillsComponent },
	{ path: 'contact', component: ContactComponent },

];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
