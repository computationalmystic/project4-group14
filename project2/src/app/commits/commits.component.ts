import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';

@Component({
  selector: 'app-commits',
  templateUrl: './commits.component.html',
  styleUrls: ['./commits.component.css']
})
export class CommitsComponent implements OnInit {

    commits: Object;

    constructor(private apiService: ApiService) { }

    ngOnInit() {

        this.apiService.getRepos().subscribe((data) => {
            console.log("ngOnInit");
            var i;
            for (i = 0; i < Object.keys(data).length; i++) {

                //get repo group id from data //
                var rgid = data[i].repo_group_id;
                //get repo id from data
                var rpid = data[i].repo_id;
                //use get pull request function//
                this.apiService.getCommits(rgid, rpid).subscribe((data2) => {

                    this.commits = this.commits + JSON.stringify(data2);


                });
            }

        });
  }

}
