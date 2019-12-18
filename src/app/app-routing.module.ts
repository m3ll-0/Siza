import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AuthComponent } from './auth/auth.component'
import { SizasportsComponent } from './sizasports/sizasports.component'
import { AuthGuard } from './auth/auth.guard';
import { AboutComponent } from './about/about.component'
import { TrainingComponent } from './training/training.component'
import { BeweegposterComponent } from './beweegposter/beweegposter.component'

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'sizasports', component: SizasportsComponent, canActivate: [AuthGuard]},
    { path: 'about', component: AboutComponent },
    { path: 'training', component: TrainingComponent },
    { path: 'poster', component: BeweegposterComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
      
  } 