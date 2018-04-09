import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { EventListComponentComponent } from './event-list-component/event-list-component.component';
import { EventsService } from './events.service';

const appRoutes: Routes = [
  { path: '', component: EventListComponentComponent }
];

@NgModule({
  declarations: [AppComponent, EventListComponentComponent],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes), HttpClientModule],
  providers: [EventsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
