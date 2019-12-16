import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component'
import { AuthComponent } from './auth/auth.component'
import { SizasportsComponent } from './sizasports/sizasports.component'
import { AuthGuard } from './auth/auth.guard';
import { SizasportsSubcategoryComponent } from './sizasports/sizasports-subcategory/sizasports-subcategory.component'

const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'auth', component: AuthComponent },
    { path: 'sizasports', component: SizasportsComponent, canActivate: [AuthGuard]},
    { path: 'sizasports/category/:id', component: SizasportsSubcategoryComponent, canActivate: [AuthGuard]},  
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {enableTracing: true })],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
      
  } 