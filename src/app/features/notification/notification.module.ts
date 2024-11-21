import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { NotificationComponent } from './notification.component';


/**
 * Component connected to notification management functionnaltiy.
 * Such components depend on :
 * - NotificationService
 */
@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
