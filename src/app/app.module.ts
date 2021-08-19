import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { UnoComponent } from './uno/uno.component';

@NgModule({
  declarations: [AppComponent, HelloComponent, UnoComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
