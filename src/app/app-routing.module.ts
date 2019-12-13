import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { SizasportsComponent } from './sizasports/sizasports.component'
import { ActivitiesComponent } from './activities/activities.component'

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sizasports', component: SizasportsComponent},
    { path: 'activities/:id', component: ActivitiesComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
      
  } 