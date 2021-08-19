import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelloComponent } from './hello.component';
import { UnoComponent } from './uno/uno.component';
import { DosComponent } from './dos/dos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaisDetalleComponent } from './pais-detalle/pais-detalle.component';

const routes: Routes = [
  { path: 'home', component: HelloComponent },
  { path: 'uno', component: UnoComponent },
  { path: 'pais/:id', component: PaisDetalleComponent },
  { path: 'dos', component: DosComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
