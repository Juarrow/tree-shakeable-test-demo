import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TazyComponent } from './tazy.component';

const routes: Routes = [{ path: '', component: TazyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TazyRoutingModule { }
