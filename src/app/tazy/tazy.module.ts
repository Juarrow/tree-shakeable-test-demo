import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TazyRoutingModule } from './tazy-routing.module';
import { TazyComponent } from './tazy.component';



@NgModule({
  declarations: [TazyComponent],
  imports: [
    CommonModule,
    TazyRoutingModule
  ]
})
export class TazyModule { }
