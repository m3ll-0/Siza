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
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminUserOverviewComponent } from './admin/admin-user-overview/admin-user-overview.component';
import { AccessdeniedComponent } from './admin/accessdenied/accessdenied.component';
import { MaterialModule } from './material.module';
import { UserComponent } from './admin/admin-user-overview/user/user.component';
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component';
import { AdminFormComponent } from './admin/admin-form/admin-form.component'
import { FooterComponent } from './footer/footer.component';
import { BeweegposterComponent } from './beweegposter/beweegposter.component';
import { AboutComponent } from './about/about.component';
import { TrainingComponent } from './training/training.component';
import { SizasportsSubcategoryComponent } from './sizasports/sizasports-subcategory/sizasports-subcategory.component';
import { SizasportsActivityCardComponent } from './sizasports/sizasports-activity-card/sizasports-activity-card.component';
import { ActivitiesComponent } from './activities/activities.component';
import { CommentSectionComponent, DialogOverviewExampleDialogComponent } from './activities/comment-section/comment-section.component';
import { SuggestionDetailComponent } from './suggestion-detail/suggestion-detail.component';
import { BeweegtipComponent } from './beweegtip/beweegtip.component';
import { AdminCategoryCardComponent } from './admin/admin-categories/admin-category-card/admin-category-card.component';
import { TreeNodeComponent } from './admin/admin-categories/admin-categories.component';
import { AdminCategoryEditComponent } from './admin/admin-categories/admin-category-edit/admin-category-edit.component';
import { AdminActivityCardComponent } from './admin/admin-activities/admin-activity-card/admin-activity-card.component'
import { CommentComponent } from './activities/comment-section/comment/comment.component'
import { CreateSuggestionComponent } from './create-suggestion/create-suggestion.component'
import { BannerComponent } from './banner/banner.component'
import { AngularEditorModule } from '@kolkov/angular-editor';
import { AddActivityComponent } from './admin/admin-activity/admin-add-activity/add-activity.component';
import { AdminActivityeditComponent } from './admin/admin-activity/admin-activityedit/admin-activityedit.component';
import { AdminActivityComponent } from './admin/admin-activity/admin-activity.component';
import { TestModuleComponent } from './test-module/test-module.component'

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
    AdminDashboardComponent,
    AdminUserOverviewComponent,
    AccessdeniedComponent,
    UserComponent,
    AdminCategoriesComponent,
    AdminFormComponent,
    FooterComponent,
    BeweegposterComponent,
    AboutComponent,
    TrainingComponent,
    SizasportsSubcategoryComponent,
    TrainingComponent,
    SizasportsActivityCardComponent,
    ActivitiesComponent,
    AdminActivityComponent,
    AdminActivityeditComponent,
    CommentSectionComponent,
    SizasportsCategoryCardComponent,
    AddActivityComponent,
    CommentSectionComponent,
    SuggestionDetailComponent,
    BeweegtipComponent,
    AdminCategoryCardComponent,
    TreeNodeComponent,
    AdminCategoryEditComponent,
    AdminActivityCardComponent,
    CommentComponent,
    CreateSuggestionComponent,
    BannerComponent,
    TestModuleComponent,
    DialogOverviewExampleDialogComponent
  ],
  entryComponents: [
    DialogOverviewExampleDialogComponent
  ],
  imports: [
    MaterialModule,
    AngularEditorModule,
    BrowserModule,    
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ 
      AuthService, 
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
