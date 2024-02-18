import { NgClass, NgStyle, NgTemplateOutlet } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DatePipe, I18nPipe } from '@yelon/theme';

import { SHARED_YELON_MODULES } from './shared-yelon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

export const SHARED_IMPORTS = [
  FormsModule,
  ReactiveFormsModule,
  RouterLink,
  NgTemplateOutlet,
  NgClass,
  NgStyle,
  I18nPipe,
  DatePipe,
  ...SHARED_YELON_MODULES,
  ...SHARED_ZORRO_MODULES
];
