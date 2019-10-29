import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitsComponent } from './commits/commits.component'
import { RepoComponent } from './repo/repo.component'
import { GroupsComponent } from './groups/groups.component';
import { HomeComponent } from './home/home.component'
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'groups', component: GroupsComponent },
    { path: 'repo', component: RepoComponent },
    { path: 'home', component: HomeComponent },
    { path: 'commits/:groupId/:repoId', component: CommitsComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CommitsComponent, RepoComponent, HomeComponent]
