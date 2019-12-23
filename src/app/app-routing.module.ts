import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegComponent } from './reg/reg.component';
import { LoComponent } from './lo/lo.component';
import { ForComponent } from './for/for.component';
import { ResComponent } from './res/res.component';


const routes: Routes = [
  {
    path: '',
    component: RegComponent,
  },
  {
    path: 'log',
    component: LoComponent,
  },
  {
    path: 'for',
    component: ForComponent,
 },
 {
  path: 'reset',
  component: ResComponent,
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
