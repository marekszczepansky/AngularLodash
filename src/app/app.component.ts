import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list = [];

  ngOnInit() {
  	_([1,2,3,4,0]).each (i => this.list.push(i));
  }

}
