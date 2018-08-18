import {Component, NgModule, enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app/app.module';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {FormsModule} from '@angular/forms';
import {RacingDataService} from './car/racing-data.service';
import {HttpModule} from '@angular/http';
import {environment} from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpModule],
  bootstrap: [AppComponent],
  providers: [RacingDataService]
})

class Appmodule {

}

platformBrowserDynamic().bootstrapModule(Appmodule);
