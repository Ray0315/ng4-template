import { AWSSmsService } from './aws-sms.service';
import { Injectable } from '@angular/core';
import { Isendable } from '../interface/isendable';

@Injectable()
export class NotificationService {

  constructor(private AWSSmsService: Isendable) {

  }
  showMessage(): string {
    return this.AWSSmsService.sendMessage();
  }

}
