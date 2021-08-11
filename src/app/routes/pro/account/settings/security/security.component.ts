import { ChangeDetectionStrategy, Component } from '@angular/core';
import { _HttpClient } from '@yelon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-account-settings-security',
  templateUrl: './security.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProAccountSettingsSecurityComponent {
  constructor(public msg: NzMessageService) {}
}
