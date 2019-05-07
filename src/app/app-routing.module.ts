import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
  {'path':'list','component':ListComponent},
  {'path':'detail/:key','component':DetailComponent},
  {'path':'add','component':AddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
