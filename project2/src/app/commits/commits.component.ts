<<<<<<< HEAD
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
||||||| merged common ancestors
=======
import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {

    repos: Object;
    commits: Object;

    constructor(private apiService: ApiService) { }

    ngOnInit() {

        this.apiService.getRepos().subscribe((data) => {
            this.repos = data;
            console.log(data);
            console.log("ngOnInit");
            var i;
            for (i = 0; i < Object.keys(data).length; i++) {
                //get repo group id from data //
                var rgid = data[i].repo_group_id;
                //get repo id from data
                var rpid = data[i].repo_id;

                // use get pull request function//
                this.apiService.getCommits(rgid, rpid).subscribe((data2) => {
                    this.commits = this.commits + JSON.stringify(data2);
                });
            }

        });
        
  }

}
>>>>>>> 851b8618f8a71fa0d5f5d5aa0d331f62e0fd396c
