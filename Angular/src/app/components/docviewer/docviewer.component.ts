import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.css']
})
export class DocviewerComponent implements OnInit {

  documentationId : number;

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => this.documentationId = params.id);
  }

  ngOnInit(): void {
  }

}
