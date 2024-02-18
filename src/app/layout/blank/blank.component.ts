import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'layout-blank',
  template: `<router-outlet />`,
  host: {
    '[class.yunzai-blank]': 'true'
  },
  standalone: true,
  imports: [RouterOutlet]
})
export class LayoutBlankComponent {}
