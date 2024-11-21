import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { MessageSearchComponent } from './message-search/message-search.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageListItemComponent } from './message-list-item/message-list-item.component';


/**
 * Component connected to messsage management functionnaltiy.
 * Such components depend on :
 * - MessageService
 */
@NgModule({
  declarations: [
    MessageSearchComponent,
    MessageFormComponent,
    MessageListComponent,
    MessageListItemComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    MessageSearchComponent,
    MessageFormComponent,
    MessageListComponent
  ]
})
export class MessageModule { }
