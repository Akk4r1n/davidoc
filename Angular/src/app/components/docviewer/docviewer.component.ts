import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.css']
})
export class DocviewerComponent implements OnInit {

  specifiedPath: string;

  constructor(private route: ActivatedRoute, public router: Router) {
    this.route.params.subscribe(path => this.specifiedPath = path.specifiedPath);
  }

  ngOnInit(): void {
    console.log(this.specifiedPath);
  }

}
