import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ControlWidget, YelonFormModule } from '@yelon/form';

@Component({
  selector: 'test',
  template: `
    <sf-item-wrap [id]="id" [schema]="schema" [ui]="ui" [showError]="showError" [error]="error" [showTitle]="schema.title">
      test widget
    </sf-item-wrap>
  `,
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [YelonFormModule]
})
export class TestWidget extends ControlWidget implements OnInit {
  static readonly KEY = 'test';

  ngOnInit(): void {
    console.warn('init test widget');
  }
}
