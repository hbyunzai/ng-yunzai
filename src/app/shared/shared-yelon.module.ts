import { PageHeaderModule } from '@yelon/abc/page-header';
import { SEModule } from '@yelon/abc/se';
import { STModule } from '@yelon/abc/st';
import { SVModule } from '@yelon/abc/sv';
import { ACLDirective, ACLIfDirective } from '@yelon/acl';
import { YelonFormModule } from '@yelon/form';
import { CurrencyPricePipe } from '@yelon/util';

export const SHARED_YELON_MODULES = [
  YelonFormModule,
  STModule,
  SVModule,
  SEModule,
  PageHeaderModule,
  ACLDirective,
  ACLIfDirective,
  CurrencyPricePipe
];
