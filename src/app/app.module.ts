import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MembershipdetailsComponent } from './membershipdetails/membershipdetails.component';
import { ApiService } from './api.service';
import { HolidaysComponent } from './holidays/holidays.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';
import { TopnotificComponent } from './topschool/topnotific/topnotific.component';

@NgModule({
  declarations: [
    AppComponent,
    MembershipdetailsComponent,
    HolidaysComponent,
    NotificationsComponent,
    NotFoundComponentComponent,
    TopnotificComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
            { path : '', component : AppComponent },
            { path : 'memberdetails/:uid/:sid', component : MembershipdetailsComponent },
            { path : 'holidays/:uid/:sid', component : HolidaysComponent },
            { path : 'notifications/:uid/:sid', component : NotificationsComponent },
            { path : 'topnotific/:uid/:sid', component : TopnotificComponent },
            { path : '**', component: NotFoundComponentComponent}

          ])
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
