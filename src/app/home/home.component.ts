import { Component, OnInit } from '@angular/core';
declare let $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: String = 'Qoo1233';


  constructor() { }

  ngOnInit() {

    const selector = '.Header-nav > li';

    $(selector).hover(function () {
      $(selector).removeClass('is-active');
      $(this).addClass('is-active');
    }, function () {
      $(selector).removeClass('is-active');
    });

  }

}
