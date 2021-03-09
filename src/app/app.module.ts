import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  // providers: [
  //   { provide: AggyService, useClass: ImpyService }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
