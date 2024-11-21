import { NgModule } from '@angular/core';
import { NgExportModule } from './ng-export.module';
import { BaseModule } from './components/base/base.module';


/**
 * This module only exports base components, pipe, and directives toward features and views.
 * This module gives default angular imports.
 * 
 * This module MUST not declare anything. 
 */
@NgModule({
  exports: [
    // Angular exports
    NgExportModule,

    // Application exports
    BaseModule

  ]
})
export class SharedModule { }
