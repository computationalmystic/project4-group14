import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PullsComponent } from './pulls/pulls.component';
import { RepoComponent } from './repo/repo.component'
import { GroupsComponent } from './groups/groups.component';
import { ContributorsComponent } from './contributors/contributors.component';
import { CommitsComponent } from './commits/commits.component';

const routes: Routes = [
    { path: 'repo', component: RepoComponent },
    { path: 'pulls', component: PullsComponent },
    { path: 'contributors', component: ContributorsComponent },
    { path: 'groups', component: GroupsComponent },
    { path: 'commits', component: CommitsComponent }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [PullsComponent, CommitsComponent, RepoComponent]
