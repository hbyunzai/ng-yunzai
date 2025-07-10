import { AsyncPipe, JsonPipe, NgTemplateOutlet } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DatePipe, I18nPipe } from '@yelon/theme';

import { SHARED_YELON_MODULES } from './shared-yelon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

export const SHARED_IMPORTS = [
  FormsModule,
  ReactiveFormsModule,
  RouterLink,
  RouterOutlet,
  NgTemplateOutlet,
  I18nPipe,
  JsonPipe,
  DatePipe,
  AsyncPipe,
  ...SHARED_YELON_MODULES,
  ...SHARED_ZORRO_MODULES
];
