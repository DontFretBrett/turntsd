import { Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
  HttpClient,
  HttpHeaders,
  HttpRequest,
  HttpParams,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { SiteDataModel } from './models/site-data-model';

@Injectable()
export class EventsService {
  constructor(private http: HttpClient) {}

  getEvents(): Observable<SiteDataModel> {
    return this.http.get<SiteDataModel>('assets/sitedata.json');
  }
}
