import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // child to parent data sharing using an event
  @Output() sideBarToggle = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggle(){
    // emit is used to happen the user defined event sidebartoggle
    this.sideBarToggle.emit()
    
    //   resizing the chart
  setTimeout(()=>{
    window.dispatchEvent(
        new Event('resize')
    )
  }, 300)
  }

}
