import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { DescriptionWrapperComponent } from './description-wrapper/description-wrapper.component';
import { AccomodationComponent } from './accomodation/accomodation.component';
import { AboutComponent } from './about/about.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    DescriptionWrapperComponent,
    AccomodationComponent,
    AboutComponent,
    AttractionsComponent,
    TestimonialsComponent,
    FeatureComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
