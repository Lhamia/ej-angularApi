import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { OlympusComponent } from './pages/olympus/olympus.component';

import { CoreComponent } from './core/core.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { SharedComponent } from './shared/shared.component';
import { GalleryComponent } from './shared/gallery/gallery.component';
import { ServicesComponent } from './services/services.component';
import { OlympusDetailsPageComponent } from './pages/olympus/olympus-details-page/olympus-details-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    OlympusComponent,
    ContactComponent,
    CoreComponent,
    NavigatorComponent,
    SharedComponent,
    GalleryComponent,
    ServicesComponent,
    OlympusDetailsPageComponent,
    HeroComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
