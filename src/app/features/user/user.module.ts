import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared.module';
import { UserLoginFormComponent } from './user-login-form/user-login-form.component';
import { UserRegisterFormComponent } from './user-register-form/user-register-form.component';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


/**
 * Component connected to user management functionnaltiy.
 * Such components depend on :
 * - UserService
 */
@NgModule({
  declarations: [
    UserLoginFormComponent,
    UserRegisterFormComponent,
    UserActionsComponent,
    UserProfileComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    UserLoginFormComponent,
    UserRegisterFormComponent,
    UserActionsComponent,
    UserProfileComponent
  ]
})
export class UserModule { }
