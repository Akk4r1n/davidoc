import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Folder } from 'src/app/interfaces/Folder';

@Injectable({
  providedIn: 'root'
})
export class DocumentationService {

  // url for the backend - endpoint documentation to get the folder structure
  // TODO: get the url from a configuration file or from environment variables
  documentationUrl = "http://185.232.71.203/documentation";

  constructor(private http: HttpClient) { }

  getDocumentation(): Observable<Folder> {
    return this.http.get<Folder>(this.documentationUrl, { responseType: 'json' });
  }
}
