import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { UserService } from '../features/user/services/user.service';


/**
 * Only contains core logics.
 * Interface and type.
 * Technical services such as....
 * - AuthService
 * - BusEventService
 * - StorageService
 */
@NgModule({
  providers: [
    AuthService,
    { provide: UserService, useClass: UserService }
  ]
})
export class CoreModule { }
