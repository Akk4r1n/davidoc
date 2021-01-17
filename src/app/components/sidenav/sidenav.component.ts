import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit {

  sidenavOpened : boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleDrawer(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

}
