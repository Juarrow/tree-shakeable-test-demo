import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AggyService } from './services/aggy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lazy';

  constructor(private cache: AggyService, private router: Router) {
    //
  }

  ngOnInit(): void {
    console.log('AppComponent - value, before setting:', this.cache.getValue());
    this.cache.setValue(666);
  }

  ngAfterViewInit() {
    console.log('AppComponent - value:', this.cache.getValue());
  }

  async openTazy() {
    await this.router.navigate(['tazy']);
  }
}
