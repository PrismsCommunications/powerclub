import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router'


@Component({
  selector: 'app-membershipdetails',
  templateUrl: './membershipdetails.component.html',
  styleUrls: ['./membershipdetails.component.css']
})
export class MembershipdetailsComponent implements OnInit
{
    uid: String = '';
    sid: String = '';
    members: any[];
    membersFound = false;
    searching = false;
    errorMessage: String;
    recentgymplan: any[];
    recentgymplanFound= false;

   constructor(private apiSerivce: ApiService, private route: ActivatedRoute)
    {
        this.uid = this.route.snapshot.params.uid;
        this.sid = this.route.snapshot.params.sid;
        console.log(this.route.snapshot.params);
    }

    handleSuccess(data)
    // tslint:disable-next-line:one-line
    {
        this.membersFound = true;
        this.members = data.result;
        console.log(data.result);
        this.recentgymplanFound = true;
        this.recentgymplan = data.plans;
    }

    handleError(error)
    {
      console.log(Error);
    }

   ngOnInit()
    {
        console.log('ngOnInit cj');
        this.apiSerivce.getMemberdetails(this.uid, this.sid).subscribe(
          data => this.handleSuccess(data),
          error => this.handleError(error),
          () => this.searching = false);
    }
}
