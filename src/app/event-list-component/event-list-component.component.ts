import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';

import { EventsService } from '../events.service';
import { SiteDataModel } from '../models/site-data-model';
import { OneMonthModel } from '../models/one-month-model';

@Component({
  selector: 'app-event-list-component',
  templateUrl: './event-list-component.component.html',
  styleUrls: ['./event-list-component.component.scss']
})
export class EventListComponentComponent implements OnInit {
  data;

  constructor(private service: EventsService) {}

  ngOnInit() {
    this.service.getEvents().subscribe(d => {
      this.data = d.SiteDataByMonth;
    });
  }
}
