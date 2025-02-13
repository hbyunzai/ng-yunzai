import { Component } from '@angular/core';
import { SHARED_IMPORTS } from '@shared';
import { DownFileDirective } from '@yelon/abc/down-file';

@Component({
  selector: 'app-down-file',
  templateUrl: './downfile.component.html',
  imports: [...SHARED_IMPORTS, DownFileDirective]
})
export class DownFileComponent {
  fileTypes = ['.xlsx', '.docx', '.pptx', '.pdf'];

  data = {
    otherdata: 1,
    time: new Date()
  };
}
