import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AuthComponent } from './auth/auth.component'
import { SizasportsComponent } from './sizasports/sizasports.component'
import { AuthGuard } from './auth/auth.guard';
import { SignupComponent } from './auth/signup/signup.component'
import { VerifyEmailComponent } from './auth/verify-email/verify-email.component'
import { AdminActivityspecificComponent } from './admin-activityspecific/admin-activityspecific.component'
import { AdminActivityComponent } from './admin-activity/admin-activity.component'
import { ActivitiesComponent } from './activities/activities.component'




const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'auth', children: [
        { path: '', component: AuthComponent},
        { path: 'verifyemail/:token', component: VerifyEmailComponent},
        { path: 'signup', component: SignupComponent},
    ] },
    { path: 'sizasports', component: SizasportsComponent, canActivate: [AuthGuard]}


    { path: 'sizasports', component: SizasportsComponent},
    { path: 'activity/:id', component: ActivitiesComponent},
    { path: 'admin/activity', component: AdminActivityComponent},
    { path: 'admin/activity/:id', component: AdminActivityspecificComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
      
  } 