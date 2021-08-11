import { NgModule } from '@angular/core';
import { CountDownModule } from '@yelon/abc/count-down';
import { OnboardingModule } from '@yelon/abc/onboarding';
import { QuickMenuModule } from '@yelon/abc/quick-menu';
import { G2BarModule } from '@yelon/chart/bar';
import { G2CardModule } from '@yelon/chart/card';
import { G2GaugeModule } from '@yelon/chart/gauge';
import { G2MiniAreaModule } from '@yelon/chart/mini-area';
import { G2MiniBarModule } from '@yelon/chart/mini-bar';
import { G2MiniProgressModule } from '@yelon/chart/mini-progress';
import { NumberInfoModule } from '@yelon/chart/number-info';
import { G2PieModule } from '@yelon/chart/pie';
import { G2RadarModule } from '@yelon/chart/radar';
import { G2SingleBarModule } from '@yelon/chart/single-bar';
import { G2TagCloudModule } from '@yelon/chart/tag-cloud';
import { G2TimelineModule } from '@yelon/chart/timeline';
import { TrendModule } from '@yelon/chart/trend';
import { G2WaterWaveModule } from '@yelon/chart/water-wave';
import { SharedModule } from '@shared';
import { CountdownModule } from 'ngx-countdown';

import { DashboardAnalysisComponent } from './analysis/analysis.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardMonitorComponent } from './monitor/monitor.component';
import { DashboardV1Component } from './v1/v1.component';
import { DashboardWorkplaceComponent } from './workplace/workplace.component';

const COMPONENTS = [DashboardV1Component, DashboardAnalysisComponent, DashboardMonitorComponent, DashboardWorkplaceComponent];

@NgModule({
  imports: [
    SharedModule,
    DashboardRoutingModule,
    CountDownModule,
    CountdownModule,
    G2BarModule,
    G2CardModule,
    G2GaugeModule,
    G2MiniAreaModule,
    G2MiniBarModule,
    G2MiniProgressModule,
    G2PieModule,
    G2RadarModule,
    G2SingleBarModule,
    G2TagCloudModule,
    G2TimelineModule,
    G2WaterWaveModule,
    NumberInfoModule,
    TrendModule,
    QuickMenuModule,
    OnboardingModule
  ],
  declarations: [...COMPONENTS]
})
export class DashboardModule {}
