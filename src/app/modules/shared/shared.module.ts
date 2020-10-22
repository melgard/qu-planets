import { NgModule } from '@angular/core';
import {MaterialModule} from '../material/material.module';
import { FirstLetterComponent } from './components/first-letter/first-letter.component';
import { LoaderComponent } from './components/loader/loader.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [
    FirstLetterComponent,
    LoaderComponent,
    SearchBoxComponent
  ],
  imports: [
    MaterialModule,
    ReactiveFormsModule
  ],
  exports: [
    MaterialModule,
    FirstLetterComponent,
    LoaderComponent,
    SearchBoxComponent
  ]
})
export class SharedModule { }
