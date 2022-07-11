import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { DownFileModule } from '@yelon/abc/down-file';
import { FullContentModule } from '@yelon/abc/full-content';
import { QRModule } from '@yelon/abc/qr';
import { G2MiniBarModule } from '@yelon/chart/mini-bar';

import { ACLComponent } from './acl/acl.component';
import { CacheComponent } from './cache/cache.component';
import { DownFileComponent } from './downfile/downfile.component';
import { YelonFormComponent } from './form/form.component';
import { GuardAdminComponent } from './guard/admin.component';
import { GuardAuthComponent } from './guard/auth.component';
import { CanLeaveProvide } from './guard/can-leave.provide';
import { GuardComponent } from './guard/guard.component';
import { GuardLeaveComponent } from './guard/leave.component';
import { PrintComponent } from './print/print.component';
import { QRComponent } from './qr/qr.component';
import { STDemoComponent } from './st/st.component';
import { UtilComponent } from './util/util.component';
import { XlsxComponent } from './xlsx/xlsx.component';
import { YelonRoutingModule } from './yelon-routing.module';
import { ZipComponent } from './zip/zip.component';

const COMPONENTS = [
  STDemoComponent,
  UtilComponent,
  PrintComponent,
  ACLComponent,
  GuardComponent,
  GuardLeaveComponent,
  GuardAdminComponent,
  GuardAuthComponent,
  CacheComponent,
  DownFileComponent,
  XlsxComponent,
  ZipComponent,
  YelonFormComponent,
  QRComponent
];

@NgModule({
  imports: [SharedModule, YelonRoutingModule, DownFileModule, FullContentModule, QRModule, G2MiniBarModule],
  providers: [CanLeaveProvide],
  declarations: COMPONENTS
})
export class YelonModule {}
