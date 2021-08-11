import { Component } from '@angular/core';
import { STColumn } from '@yelon/abc/st';
import { SFSchema } from '@yelon/form';

@Component({
  selector: 'app-yelon-form',
  templateUrl: './form.component.html'
})
export class YelonFormComponent {
  params: any = {};
  url = `/user`;
  searchSchema: SFSchema = {
    properties: {
      no: {
        type: 'string',
        title: '编号'
      }
    }
  };
  columns: STColumn[] = [
    { title: '编号', index: 'no' },
    { title: '调用次数', type: 'number', index: 'callNo' },
    { title: '头像', type: 'img', width: '50px', index: 'avatar' },
    { title: '时间', type: 'date', index: 'updatedAt' }
  ];
}
