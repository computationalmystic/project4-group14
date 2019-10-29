import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import { CommitsComponent } from './commits/commits.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { PullsComponent } from './pulls/pulls.component';
import { RepoComponent } from './repo/repo.component';
import { GroupsComponent } from './groups/groups.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CommitsComponent,
    ContributorsComponent,
    PullsComponent,
    RepoComponent,
    GroupsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      // Home Page with Repos
      { path: '', component: AppComponent }
      // Page with total commits for each project and proportion of commits each contributor is responsible for.
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
