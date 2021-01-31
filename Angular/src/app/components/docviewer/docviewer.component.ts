import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { MyMarkdownService } from 'src/app/services/myMarkdown.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docviewer',
  templateUrl: './docviewer.component.html',
  styleUrls: ['./docviewer.component.css']
})
export class DocviewerComponent implements OnInit {

  specifiedPath: string;
  markdown: string;

  constructor(private route: ActivatedRoute, private myMarkdownService: MyMarkdownService, private router: Router) {
    this.route.params.subscribe(path => this.specifiedPath = path.specifiedPath);
  }

  ngOnInit(): void {
    this.markdown = `
    # IndexAA
    ## About this Documentation
    This **application** aims at...
    ### Workflow
    In the first step...
    `

    

    this.route.url.subscribe((url : UrlSegment[]) => {
      let myPath: string = "";
      console.log(url);
      url.forEach(segment => {
        myPath += segment + "/";
      })
      myPath = myPath.substring(0, myPath.length - 1);
      console.log(myPath);
      this.myMarkdownService.getMarkdown(myPath).subscribe((data : string) => {
        this.markdown = data;
      })
    });



    // this.myMarkdownService.getMarkdown(this.specifiedPath).subscribe((data : string) => {
    //   this.markdown = data;
    // })
  }

}
