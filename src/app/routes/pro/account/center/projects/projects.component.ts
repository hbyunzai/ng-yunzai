import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject } from '@angular/core';
import { SHARED_IMPORTS } from '@shared';
import { _HttpClient } from '@yelon/theme';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-account-center-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [...SHARED_IMPORTS, NzAvatarModule]
})
export class ProAccountCenterProjectsComponent {
  private readonly http = inject(_HttpClient);
  private readonly msg = inject(NzMessageService);
  private readonly cdr = inject(ChangeDetectorRef);

  listLoading = true;
  list: any[] = [];

  constructor() {
    this.http.get('/api/list', { count: 8 }).subscribe(res => {
      this.list = res;
      this.listLoading = false;
      this.cdr.detectChanges();
    });
  }

  suc(id: number): void {
    this.msg.success(`标题：${id}`);
  }
}
