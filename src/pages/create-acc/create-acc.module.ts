import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateAccPage } from './create-acc';

@NgModule({
  declarations: [
    CreateAccPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateAccPage),
  ],
})
export class CreateAccPageModule {}
