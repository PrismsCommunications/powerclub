import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topnotific',
  templateUrl: './topnotific.component.html',
  styleUrls: ['./topnotific.component.css']
})
export class TopnotificComponent implements OnInit {

  uid: String = '';
  sid: String = '';
  notifications: any[];
  notificationsFound = false;
  searching = false;
  errorMessage: String;

  constructor(private apiSerivce: ApiService, private route: ActivatedRoute) {
        this.uid = this.route.snapshot.params.uid;
        this.sid = this.route.snapshot.params.sid;
        console.log(this.route.snapshot.params);
  }

  handleSuccess(data) {
        this.notificationsFound = true;
        this.notifications = data.record;
        console.log(data);
  }

 handleError(error) {
     console.log(Error);
  }

  ngOnInit() {

     console.log('ngOnInit TopSchool Notifications');

     this.apiSerivce.getTopSchoolNotifications(this.uid, this.sid).subscribe(
     data => this.handleSuccess(data),
     error => this.handleError(error),
     () => this.searching = false);
  }

}
