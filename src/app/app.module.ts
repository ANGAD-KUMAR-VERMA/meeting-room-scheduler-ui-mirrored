import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BookingComponent } from './booking/booking.component';
import { SearchFormComponent } from './booking/search-form/search-form.component';
import { SearchResultsComponent } from './booking/search-results/search-results.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { AuthService } from './_service/auth.service';
import { TokenInterceptService } from './_interceptors/token-intercept.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { BookingService } from './_service/booking.service';
import { ConstantService } from './_service/constant.service';
import { RouterModule } from '@angular/router';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { DateTimeFormatPipe } from './date-time-format-pipe';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NgxSpinnerModule } from "ngx-spinner";
import { SpinnerComponent } from './spinner/spinner.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    BookingComponent,
    SearchFormComponent,
    SearchResultsComponent,
    NavbarComponent,
    TopNavigationComponent,
    LeftNavigationComponent,
    BottomNavigationComponent,
    DateTimeFormatPipe,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    NgxMaterialTimepickerModule,
    NgxSpinnerModule

  ],
  providers: [
    AuthService,
    BookingService,
    ConstantService,
    RouterModule,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptService, multi: true },
    {provide : LocationStrategy , useClass: HashLocationStrategy}
    
  ],
  bootstrap: [AppComponent]

})

export class AppModule { }
