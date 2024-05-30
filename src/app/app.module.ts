import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersoComponent } from './pages/perso/perso.component';
import { HomeComponent } from './pages/home/home.component';
import { MyPersoComponent } from './pages/my-perso/my-perso.component';

@NgModule({
  declarations: [
    AppComponent,
    PersoComponent,
    HomeComponent,
    MyPersoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
