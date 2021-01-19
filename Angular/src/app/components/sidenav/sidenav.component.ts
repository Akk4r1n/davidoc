import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Documentation } from 'src/app/interfaces/documentation';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit {

  myDocumentations: Documentation[] = [ 
    { id: 1, content: "", childs: [
      { id: 2, content: "#Setup Python...", childs: [], parentId: 1, title: "Setup Angular", orderIndex: 1 },
      { id: 3, content: "#Setup Python...", childs: [], parentId: 1, title: "Setup Docker", orderIndex: 2 },
    ], parentId: 0, title: "Setup", orderIndex: 1},

    { id: 4, content: "", childs: [
      { id: 5, content: "#Build your Angular application", childs: [], parentId: 4, title: "Build your Angular application", orderIndex: 1 },
      { id: 6, content: "#Create a Dockerfile...", childs: [], parentId: 4, title: "Create a Dockerfile", orderIndex: 1 },
    ], parentId: 0, title: "Deploy", orderIndex: 2 },

    { id: 7, content: "", childs: [], parentId: 0, title: "Hosting with a Virtual Private Server (VPS)", orderIndex: 1 },
    { id: 9, content: "", childs: [], parentId: 0, title: "Note about XSS Cross Site Scripting", orderIndex: 2 },
    { id: 10, content: "", childs: [], parentId: 0, title: "Useful Ressources for learning Docker", orderIndex: 3 },

    { id: 11, content: "", childs: [
      { id: 12, content: "#Setup MariaDB...", childs: [], parentId: 11, title: "Setup MariaDB", orderIndex: 1 },
      { id: 13, content: "#Basic SQL Commands...", childs: [], parentId: 11, title: "Basic SQL Commands", orderIndex: 2 },
    ], parentId: 0, title: "Databases & SQL", orderIndex: 3},
  ];

  sidenavOpened : boolean = true;

  constructor() { }

  ngOnInit(): void {
    // Sort the incoming data
  }

  filterDocumentations = (documentation: Documentation) => {
    return documentation.parentId === 0;
  }

  hasChilds = (documentation: Documentation) => {
    return documentation.childs.length > 0;
  }

  toggleDrawer(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

}
