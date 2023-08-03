import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GraphComponent } from './components/graph/graph.component';
import { StickComponent } from './components/stick/stick.component';

@NgModule({
  declarations: [
    AppComponent,
    GraphComponent,
    StickComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
