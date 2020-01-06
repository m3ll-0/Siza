import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AuthComponent } from './auth/auth.component'
import { SizasportsComponent } from './sizasports/sizasports.component'
import { AuthGuard } from './auth/auth.guard';
import { AuthAdminGuard } from './auth/auth.admin.guard';
import { SignupComponent } from './auth/signup/signup.component'
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component'
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component'
import { AdminUserOverviewComponent } from './admin/admin-user-overview/admin-user-overview.component'
import { AccessdeniedComponent } from './admin/accessdenied/accessdenied.component'
import { AdminCategoriesComponent } from './admin/admin-categories/admin-categories.component'
import { AdminFormComponent } from './admin/admin-form/admin-form.component'
import { AboutComponent } from './about/about.component'
import { TrainingComponent } from './training/training.component'
import { BeweegposterComponent } from './beweegposter/beweegposter.component'
import { SizasportsSubcategoryComponent } from './sizasports/sizasports-subcategory/sizasports-subcategory.component'
import { AdminActivityeditComponent } from './admin/admin-activityedit/admin-activityedit.component'
import { AdminActivityComponent } from './admin/admin-activity/admin-activity.component'
import { ActivitiesComponent } from './activities/activities.component'
import { SuggestionDetailComponent } from './suggestion-detail/suggestion-detail.component'
import { AdminCategoryEditComponent } from './admin/admin-categories/admin-category-edit/admin-category-edit.component'
import { AddActivityComponent } from './admin/add-activity/add-activity.component';

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'sizasports', component: SizasportsComponent, canActivate: [AuthGuard]},
    { path: 'about', component: AboutComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'poster', component: BeweegposterComponent },
    { path: 'sizasports/category/:id', component: SizasportsSubcategoryComponent, canActivate: [AuthGuard]},  
    { path: 'auth', children: [
        { path: '', component: AuthComponent},
        { path: 'verifyemail/:token', component: VerifyEmailComponent},
        { path: 'signup', component: SignupComponent},
    ] },
    { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthAdminGuard], children: [
        { path: '', redirectTo: 'usersoverview', pathMatch: 'full', },
        { path: 'usersoverview', component: AdminUserOverviewComponent},
        { path: 'categories', component: AdminCategoriesComponent},
        { path: 'activities', component: AdminActivityComponent},
        { path: 'editCategory', component: AdminCategoryEditComponent},
        { path: 'form', component: AdminFormComponent},
        { path: 'activities', component: AdminActivityComponent},
        { path: 'activities/:id', component: AdminActivityeditComponent},
        { path: 'addactivity', component: AddActivityComponent}
    ] },
    { path: 'suggestions/:id', component: SuggestionDetailComponent, canActivate: [AuthGuard]},
    { path: 'accessdenied', component: AccessdeniedComponent},
    { path: 'sizasports', component: SizasportsComponent, canActivate: [AuthGuard]},
    { path: 'sizasports', component: SizasportsComponent, canActivate: [AuthGuard]},
    { path: 'activities/:id', component: ActivitiesComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
      
  } 