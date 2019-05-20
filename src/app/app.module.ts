import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InputsNumForImgComponent } from './inputs-num-for-img/inputs-num-for-img.component';
import { DisplayImgComponent } from './display-img/display-img.component';
import {FormsModule} from '@angular/forms';
import { DisplayStudentsComponent } from './display-students/display-students.component';
import { DisplayTeachersComponent } from './display-teachers/display-teachers.component';

@NgModule({
  declarations: [
    AppComponent,
    InputsNumForImgComponent,
    DisplayImgComponent,
    DisplayStudentsComponent,
    DisplayTeachersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
