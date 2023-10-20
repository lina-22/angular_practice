import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { Test2Component } from './components/test2/test2.component';
import { TestService } from './services/test.service';

@NgModule({
  declarations: [AppComponent, TestComponent, Test2Component],
  imports: [BrowserModule],
  providers: [TestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
