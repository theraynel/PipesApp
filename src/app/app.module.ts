import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';

// configuraciones de del locale de la app
import localeEsHN from "@angular/common/locales/es-HN";
import localeFrCA from "@angular/common/locales/fr-CA";

import { registerLocaleData } from "@angular/common";

registerLocaleData( localeEsHN )
registerLocaleData( localeFrCA )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    AppRoutingModule,

    SharedModule
  ],
  providers: [
    {  provide: LOCALE_ID, useValue: 'es-HN'   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
