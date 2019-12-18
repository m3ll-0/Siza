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
import { AdminActivitiesComponent } from './admin/admin-activities/admin-activities.component'
import { AdminFormComponent } from './admin/admin-form/admin-form.component'




const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'auth', children: [
        { path: '', component: AuthComponent},
        { path: 'signup', component: SignupComponent},
        { path: 'verifyemail/:token', component: VerifyEmailComponent},
    ] },
    { path: 'admin', component: AdminDashboardComponent, canActivate: [AuthAdminGuard], children: [
        { path: '', redirectTo: 'usersoverview', pathMatch: 'full', },
        { path: 'usersoverview', component: AdminUserOverviewComponent},
        { path: 'categories', component: AdminCategoriesComponent},
        { path: 'activities', component: AdminActivitiesComponent},
        { path: 'form', component: AdminFormComponent},
        
    ] },
    { path: 'accessdenied', component: AccessdeniedComponent},
    { path: 'sizasports', component: SizasportsComponent, canActivate: [AuthGuard]}


]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
      
  } 