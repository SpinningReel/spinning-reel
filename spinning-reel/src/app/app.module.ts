import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { DescriptionWrapperComponent } from './description-wrapper/description-wrapper.component';
import { AccommodationComponent } from './accommodation/accommodation.component';
import { AboutComponent } from './about/about.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FeatureComponent } from './feature/feature.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderBarPageComponent } from './header-bar/header-bar-page/header-bar-page.component';
import { AccommodationPageComponent } from './accommodation/accommodation-page/accommodation-page.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    DescriptionWrapperComponent,
    AccommodationComponent,
    AboutComponent,
    AttractionsComponent,
    TestimonialsComponent,
    FeatureComponent,
    FooterComponent,
    HeaderBarPageComponent,
    AccommodationPageComponent,
    BookingComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
