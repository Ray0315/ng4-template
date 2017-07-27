import { Isendable } from './../interface/isendable';
import { Injectable, OnInit } from '@angular/core';
import { Iprintable } from '../interface/iprintable';

@Injectable()
export class AWSSmsService implements Iprintable, Isendable {
  printMessage() {
    console.log('Print AWS Message');
  }
  sendMessage() {
    return 'Send AWS Message';
  }
}
