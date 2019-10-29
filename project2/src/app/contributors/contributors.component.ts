import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

    contributors: Object;

    constructor(private apiService: ApiService) { }

    ngOnInit() {
        this.apiService.getRepos().subscribe((data) => {
            var i;
            for (i = 0; i < Object.keys(data).length; i++) {
                //get repo group id from data 
                var rgid = data[i].repo_group_id;
                //get repo id from data

                var rpid = data[i].repo_id;
                //use get pull request function

                this.apiService.getContributors(rgid, rpid).subscribe((data2) => {
                    //delete empty element in object

     
                    if (data2[0] && data2[0].user_id) {

                        this.contributors = this.contributors + JSON.stringify(data2);
                    }

                });
            }
        });
  }

}
