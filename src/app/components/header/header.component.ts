import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  display:boolean = false;
  showLogin:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  showDialog() {
    this.display = true;
  }
}
