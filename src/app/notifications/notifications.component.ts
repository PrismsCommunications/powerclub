import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

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

  handleSuccess(data)
  {
      this.notificationsFound = true;
      this.notifications = data.notificationsresult;
      console.log(data.notificationsresult);
 }

 handleError(error)
  {
     console.log(Error);
  }

  ngOnInit()
  {
     console.log('ngOnInit holidays');
     this.apiSerivce.getNotificationsdetails(this.uid,this.sid).subscribe(
     data => this.handleSuccess(data),
     error => this.handleError(error),
     () => this.searching = false);
  }

}
