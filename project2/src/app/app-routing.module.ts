import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommitsComponent } from './commits/commits.component'
import { RepoComponent } from './repo/repo.component'
import { GroupsComponent } from './groups/groups.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component'
||||||| merged common ancestors
import { ContributorsComponent } from './contributors/contributors.component';

=======
import { ContributorsComponent } from './contributors/contributors.component';
import { CommitsComponent } from './commits/commits.component';

>>>>>>> 851b8618f8a71fa0d5f5d5aa0d331f62e0fd396c
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'groups', component: GroupsComponent },
    { path: 'repo', component: RepoComponent },
<<<<<<< HEAD
    { path: 'home', component: HomeComponent },
    { path: 'commits/:groupId/:repoId', component: CommitsComponent },
    { path: '**', redirectTo: '/home', pathMatch: 'full' }
||||||| merged common ancestors
    { path: 'pulls', component: PullsComponent },
    { path: 'contributors', component: ContributorsComponent },
    { path: 'groups', component: GroupsComponent }
=======
    { path: 'pulls', component: PullsComponent },
    { path: 'contributors', component: ContributorsComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'commits', component: CommitsComponent }
>>>>>>> 851b8618f8a71fa0d5f5d5aa0d331f62e0fd396c
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [CommitsComponent, RepoComponent, HomeComponent]
