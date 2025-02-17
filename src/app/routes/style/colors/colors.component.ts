import { Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '@shared';
import { copy } from '@yelon/util/browser';
import { NzMessageService } from 'ng-zorro-antd/message';

import { ColorService } from '../color.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.less'],
  imports: SHARED_IMPORTS
})
export class ColorsComponent {
  private readonly colorSrv = inject(ColorService);
  private readonly msg = inject(NzMessageService);

  nums = Array(10)
    .fill(1)
    .map((v, i) => v + i);

  get names(): string[] {
    return this.colorSrv.names;
  }

  get brands(): string[] {
    return this.colorSrv.brands;
  }

  onCopy(str: string): void {
    copy(str).then(() => this.msg.success(`Copied Success!`));
  }
}
