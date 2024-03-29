import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { YelonACLModule } from '@yelon/acl';
import { YelonFormModule } from '@yelon/form';
import { YunzaiThemeModule } from '@yelon/theme';

import { SHARED_YELON_MODULES } from './shared-yelon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

// #region third libs
// import { NgxTinymceModule } from 'ngx-tinymce';

const THIRDMODULES: Array<Type<any>> = [];
// #endregion

// #region your componets & directives
const COMPONENTS: Array<Type<any>> = [];
const DIRECTIVES: Array<Type<any>> = [];
// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    YunzaiThemeModule,
    YelonACLModule,
    YelonFormModule,
    ...SHARED_YELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    YunzaiThemeModule,
    YelonACLModule,
    YelonFormModule,
    ...SHARED_YELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES
  ]
})
export class SharedModule {}
