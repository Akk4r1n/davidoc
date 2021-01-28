import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DocumentationService } from 'src/app/services/documentation.service';
import { Folder } from 'src/app/interfaces/Folder';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SidenavComponent implements OnInit {

  myDocumentation: Folder;
  sidenavOpened : boolean = true;

  constructor(private documentationService:DocumentationService) {}

  ngOnInit(): void {
    this.showDocumentation();
  }

  showDocumentation() {
    this.documentationService.getDocumentation().subscribe((data: Folder) => {
      this.myDocumentation = data;
    });
  }

  toggleDrawer(): void {
    this.sidenavOpened = !this.sidenavOpened;
  }

}
