import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Folder } from 'src/app/interfaces/Folder';

@Injectable({
  providedIn: 'root'
})
export class MyMarkdownService {

  // TODO: get the url from a configuration file or from environment variables
  markdownUrl = "http://185.232.71.203/";

  constructor(private http: HttpClient) { }

  getMarkdown(path): Observable<string> {
    console.log(this.markdownUrl + path);
    return this.http.get(this.markdownUrl + path, { responseType: 'text' });
  }
}
