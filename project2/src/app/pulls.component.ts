import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project2';
  repos: Object;

  constructor(private apiService: ApiService){}
  
  ngOnInit() {
    console.log("ngOnInit 1");
      this.apiService.getRepos().subscribe((data) => {
          console.log("ngOnInit");
          this.repos = data['repos'];
          var i;
          for (i = 0; i < Object.keys(data).length; i++) {
              //get repo group id from data //
              var rgid = data[i].repo_group_id;
              //get repo id from data//
              var rpid = data[i].repo_id;
              //use get pull request function//
              this.apiService.getPullRequest(rgid, rpid).subscribe((data2) => {
                  //delete empty element in object//
                  if (typeof data2[0].length === 'undefined' && typeof data2[0].length === null) {
                      delete data2[0];
                  }
              //display in pages
              document.write(JSON.stringify(data2));

          });
      }
    });
  }
}
