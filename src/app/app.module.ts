import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './comse/IO-fun/parent/parent.component';
import { ChildComponent } from './comse/IO-fun/child/child.component';
import { ChildOutputComponent } from './comse/IO-fun/child-output/child-output.component';
import { MyNgmodelComponent } from './comse/IO-fun/my-ngmodel/my-ngmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    ChildOutputComponent,
    MyNgmodelComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
