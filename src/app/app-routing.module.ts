import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';

const routes: Routes = [
  { path: 'home', component: HelloComponent },
  { path: 'uno', component: UnoComponent },
  { path: 'dos', component: DosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
