import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon'
import { MatTableModule } from '@angular/material/table'
import { MatListModule } from '@angular/material/list'
import { MatCardModule, MatOptionModule, MatCheckboxModule } from '@angular/material'
import { MatFormFieldModule } from '@angular/material'
import { MatInputModule } from '@angular/material'
import { MatSelectModule } from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatTabsModule } from '@angular/material/tabs'
import { MatMenuModule} from '@angular/material/menu';
import { MatDialogModule} from '@angular/material/dialog';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularEditorModule } from '@kolkov/angular-editor';

@NgModule(
    {
        imports: [
            AngularEditorModule,
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
            MatTreeModule,
            FormsModule,
            BrowserAnimationsModule,
            RouterModule.forRoot([]),
            MatTableModule,
            MatTabsModule,
            NgbModule,
            MatMenuModule,
            MatDialogModule,
            ReactiveFormsModule
        ],
        providers: [],
        declarations: [
        ],
        exports: [ 
            AngularEditorModule,
            ReactiveFormsModule,
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
            MatTreeModule,
            FormsModule,
            BrowserAnimationsModule,
            MatTableModule,
            MatTabsModule,
            NgbModule,
            MatMenuModule,
            MatDialogModule
        ]
    }
)
export class SharedModule {
    
}
