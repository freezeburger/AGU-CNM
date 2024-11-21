import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { LayoutModule } from '../layout/layout.module';
import { ViewHomeComponent } from './view-home/view-home.component';
import { ViewMessageComponent } from './view-message/view-message.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

/**
 * Expose components to be routed. 
 */
@NgModule({
  exports: [
    ViewHomeComponent,
    ViewMessageComponent,
    ViewProfileComponent
  ],
  declarations: [
    ViewHomeComponent,
    ViewMessageComponent,
    ViewProfileComponent
  ],
  imports: [
    LayoutModule,
    SharedModule
  ]
})
export class ViewModule { }
