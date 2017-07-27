import { AWSSmsService } from './service/aws-sms.service';
import { Component, OnInit } from '@angular/core';
import { NotificationService } from './service/notification.service';
import { Isendable } from './interface/isendable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  toggle = false;

  constructor(private notificationService: NotificationService) {

  }

  ngOnInit() {
    this.title = this.notificationService.showMessage();
  }
}
