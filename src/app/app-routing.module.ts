import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { SizasportsComponent } from './sizasports/sizasports.component'
import { ActivitiesComponent } from './activities/activities.component'
import { AdminActivityComponent } from './admin-activity/admin-activity.component'
import { AdminActivityspecificComponent } from './admin-activityspecific/admin-activityspecific.component'

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
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