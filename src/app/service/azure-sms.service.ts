import { Iprintable } from './../interface/iprintable';
import { Injectable } from '@angular/core';
import { Isendable } from '../interface/isendable';

@Injectable()
export class AzureSmsService implements Isendable, Iprintable {

  constructor() { }
  printMessage() {
    console.log('Print Azure Message');
  }
  sendMessage(): string {
    return 'Send Azure Message';
  }



}
