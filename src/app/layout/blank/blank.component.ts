import { Component } from '@angular/core';

@Component({
  selector: 'layout-blank',
  template: `<router-outlet></router-outlet> `,
  host: {
    '[class.yunzai-blank]': 'true'
  }
})
export class LayoutBlankComponent {}
