import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { SizasportsComponent } from './sizasports/sizasports.component'
import { ActivitiesComponent } from './activities/activities.component'
import { ActivityOverviewComponent } from './activity-overview/activity-overview.component'

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sizasports', component: SizasportsComponent},
    { path: 'activities/:id', component: ActivitiesComponent},
    { path: 'activities', component: ActivityOverviewComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
      
  } 