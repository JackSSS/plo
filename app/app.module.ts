import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard.component';
import { PortfolioComponent }  from './portfolio.component';
import { SkillsComponent }  from './skills.component';
import { ContactComponent }  from './contact.component';

@NgModule({
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService),
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		DashboardComponent,
		PortfolioComponent,
		SkillsComponent,
		ContactComponent,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
