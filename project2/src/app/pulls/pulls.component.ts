import { Component, OnInit } from '@angular/core';
import { ApiService } from '.././api.service';

@Component({
    selector: 'app-pulls',
    templateUrl: './pulls.component.html',
    styleUrls: ['./pulls.component.css']
})
export class PullsComponent implements OnInit {

   pulls: Object;

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
              //use get pull request function

              this.apiService.getPullRequest(rgid, rpid).subscribe((data2) => {
                  //delete empty element in object
                  if (data2[0] && data2[0].date) {

                      this.pulls = this.pulls + JSON.stringify(data2);
                  }


              });
          }
      });
  }

}
