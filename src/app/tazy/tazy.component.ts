import { Component } from '@angular/core';
import { AggyService } from '../services/aggy.service';

@Component({
  selector: 'app-tazy',
  templateUrl: './tazy.component.html',
  styleUrls: ['./tazy.component.css'],
})
export class TazyComponent {

  constructor(private cache: AggyService) { }

  ngAfterViewInit() {
    console.log('TazyComponent - value: ', this.cache.getValue());
  }

}
