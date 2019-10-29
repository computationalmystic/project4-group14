import { Component, OnInit } from '@angular/core';

// import api service
import { ApiService } from '.././api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contributors',
  templateUrl: './contributors.component.html',
  styleUrls: ['./contributors.component.css']
})
export class ContributorsComponent implements OnInit {

    contributors: Object;
    pulls: object;

    // repo id from URL
    urlRid: string = this.route.snapshot.paramMap.get('rid');

    // repo group id from URL
    urlRgid: string = this.route.snapshot.paramMap.get('rgid');

    constructor( private apiService: ApiService, private route: ActivatedRoute ) { }
    
    ngOnInit() {
      this.apiService.getContributors(this.urlRgid, this.urlRid).subscribe(data => {
        this.contributors = data;
      });

      this.apiService.getPullRequest(this.urlRgid, this.urlRid).subscribe(data => {
        this.pulls = data;
      });
    }
}