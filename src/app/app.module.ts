import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'
import { AuthService } from './auth/auth.service';
import { LoadingSpinnerComponent } from './Shared/loading-spinner/loading-spinner.component';
import { SignupComponent } from './auth/signup/signup.component';
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component'
import { SizasportsComponent } from './sizasports/sizasports.component';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { SizasportsCategoryCardComponent } from './sizasports/sizasports-category-card/sizasports-category-card.component';
import { FooterComponent } from './footer/footer.component';
import { BeweegposterComponent } from './beweegposter/beweegposter.component';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component';
import { SizasportsSubcategoryComponent } from './sizasports/sizasports-subcategory/sizasports-subcategory.component';
import { SizasportsActivityCardComponent } from './sizasports/sizasports-activity-card/sizasports-activity-card.component';
import { ActivitiesComponent } from './activities/activities.component';
import { AdminActivityComponent } from './admin-activity/admin-activity.component';
import { AdminActivityspecificComponent } from './admin-activityspecific/admin-activityspecific.component';
import { CommentSectionComponent } from './activities/comment-section/comment-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    SignupComponent,
    VerifyEmailComponent,
    SizasportsComponent,
    SizasportsCategoryCardComponent,
    FooterComponent,
    BeweegposterComponent,
    AboutComponent,
    TrainingComponent
    SizasportsSubcategoryComponent,
    SizasportsActivityCardComponent,
    ActivitiesComponent,
    AdminActivityComponent,
    AdminActivityspecificComponent,
    SizasportsCategoryCardComponent,
    CommentSectionComponent
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 
      AuthService, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }