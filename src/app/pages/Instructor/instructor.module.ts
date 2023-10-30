import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { InstructorPage } from './instructor.page';

import { InstructorPageRoutingModule } from './instructor-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstructorPageRoutingModule
  ],
  declarations: [InstructorPage]
})
export class InstructorPageModule {}
