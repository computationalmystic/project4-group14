import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import { CommitsComponent } from './commits/commits.component';
import { RepoComponent } from './repo/repo.component';
import { GroupsComponent } from './groups/groups.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CommitsComponent,
    RepoComponent,
    GroupsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
