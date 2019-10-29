import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})


export class CommitsComponent implements OnInit {

    commits: Object;
    pulls: Object;
    contributors: Object;

    urlGroupId: string = this.route.snapshot.paramMap.get('groupId');

    urlRepoId: string = this.route.snapshot.paramMap.get('repoId');

    constructor(private route: ActivatedRoute, private apiService: ApiService) { }


    ngOnInit() {


        this.apiService.getCommits(this.urlRepoId, this.urlGroupId).subscribe((data) => {
            console.log('get commits');
            this.commits = data;

        });
        this.apiService.getPullRequest(this.urlRepoId, this.urlGroupId).subscribe((data) => {
            console.log('get pulls');
            if (data && data[0]) {
                this.pulls = data;
            }

        });
        this.apiService.getContributors(this.urlRepoId, this.urlGroupId).subscribe((data) => {
            console.log('get contributors');
            if (data && data[0]) {
                this.contributors = data;
            }
        });
       
  }

}
