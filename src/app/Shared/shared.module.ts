import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatListModule } from '@angular/material/list'
import { MatCardModule, MatOptionModule, MatCheckboxModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material'
import { MatInputModule } from '@angular/material'
import { MatSelectModule } from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import {MatTreeModule} from '@angular/material/tree';

@NgModule(
    {
        imports: [
            RouterModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatCardModule,
            MatCheckboxModule,
            HttpClientModule,
            MatTreeModule
        ],
        providers: [],
        declarations: [],
        exports: [ 
            RouterModule,
            MatFormFieldModule,
            MatInputModule,
            MatOptionModule,
            MatSelectModule,
            MatToolbarModule,
            MatButtonModule,
            MatSidenavModule,
            MatIconModule,
            MatListModule,
            MatCardModule,
            MatCheckboxModule,
            HttpClientModule,
            MatTreeModule
        ]
    }
)
export class SharedModule
{
    
}