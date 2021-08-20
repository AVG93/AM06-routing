import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AppRoutingModule } from './app-routing.module';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { TresComponent } from './tres/tres.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UnoComponent,
    DosComponent,
    TresComponent
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
