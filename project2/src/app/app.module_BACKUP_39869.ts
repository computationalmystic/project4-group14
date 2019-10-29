import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';


import { CommitsComponent } from './commits/commits.component';
import { RepoComponent } from './repo/repo.component';
import { GroupsComponent } from './groups/groups.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
=======
import { ContributorsComponent } from './contributors/contributors.component';
import { CommitsComponent } from './commits/commits.component';
>>>>>>> 851b8618f8a71fa0d5f5d5aa0d331f62e0fd396c


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CommitsComponent,
    RepoComponent,
    GroupsComponent,
<<<<<<< HEAD
    HomeComponent
=======
    ContributorsComponent,
    CommitsComponent
>>>>>>> 851b8618f8a71fa0d5f5d5aa0d331f62e0fd396c
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
