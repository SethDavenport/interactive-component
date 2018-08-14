import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { InteractiveGraphComponent } from './interactive-graph/interactive-graph.component';
import { RiskLevelSelectorComponent } from './risk-level-selector/risk-level-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    InteractiveGraphComponent,
    RiskLevelSelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
