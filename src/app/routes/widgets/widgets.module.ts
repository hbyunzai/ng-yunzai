import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { G2MiniAreaModule } from '@yelon/chart/mini-area';
import { G2MiniBarModule } from '@yelon/chart/mini-bar';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';

import { WidgetsComponent } from './widgets/widgets.component';
import { WidgetsRoutingModule } from './widgets-routing.module';

const COMPONENTS: Array<Type<void>> = [WidgetsComponent];

@NgModule({
  imports: [SharedModule, WidgetsRoutingModule, NzCarouselModule, G2MiniBarModule, G2MiniAreaModule],
  declarations: COMPONENTS
})
export class WidgetsModule {}
