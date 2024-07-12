import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';

@NgModule({
    imports: [
        MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatSelectModule, MatTableModule
    ],
    exports: [
        MatIconModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatButtonModule, MatCheckboxModule, MatSelectModule, MatTableModule
    ],
    providers: [{ provide: MAT_DATE_LOCALE, useValue: 'fr-fr' }]
})
export class MaterialModule { }