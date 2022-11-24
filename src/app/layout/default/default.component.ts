import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {

  sidebar:boolean =true;

  constructor() { }

  ngOnInit(): void {
  }
  toggle(){
    // value changes to true or false
    this.sidebar = !this.sidebar
  }

}
