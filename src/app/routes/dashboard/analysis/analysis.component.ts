import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { SHARED_IMPORTS, yuan } from '@shared';
import { STColumn } from '@yelon/abc/st';
import { G2BarModule } from '@yelon/chart/bar';
import { G2CardModule } from '@yelon/chart/card';
import { G2MiniAreaModule } from '@yelon/chart/mini-area';
import { G2MiniBarModule } from '@yelon/chart/mini-bar';
import { G2MiniProgressModule } from '@yelon/chart/mini-progress';
import { NumberInfoModule } from '@yelon/chart/number-info';
import { G2PieModule } from '@yelon/chart/pie';
import { G2TimelineModule } from '@yelon/chart/timeline';
import { TrendModule } from '@yelon/chart/trend';
import { YUNZAI_I18N_TOKEN, _HttpClient } from '@yelon/theme';
import { getTimeDistance } from '@yelon/util/date-time';
import { deepCopy } from '@yelon/util/other';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-dashboard-analysis',
  templateUrl: './analysis.component.html',
  styleUrls: ['./analysis.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ...SHARED_IMPORTS,
    G2TimelineModule,
    G2PieModule,
    NumberInfoModule,
    TrendModule,
    G2MiniAreaModule,
    DecimalPipe,
    G2BarModule,
    G2MiniProgressModule,
    G2CardModule,
    G2MiniBarModule
  ]
})
export class DashboardAnalysisComponent implements OnInit {
  private readonly http = inject(_HttpClient);
  readonly msg = inject(NzMessageService);
  private readonly i18n = inject(YUNZAI_I18N_TOKEN);
  private readonly cdr = inject(ChangeDetectorRef);

  data: any = {};
  loading = true;
  dateRange: Date[] = [];
  dateRangeTypes = ['today', 'week', 'month', 'year'];
  dateRangeType = this.dateRangeTypes[0];
  rankingListData: Array<{ title: string; total: number }> = Array(7)
    .fill({})
    .map((_, i) => {
      return {
        title: this.i18n.fanyi('app.analysis.test', { no: i }),
        total: 323234
      };
    });
  titleMap = {
    y1: this.i18n.fanyi('app.analysis.traffic'),
    y2: this.i18n.fanyi('app.analysis.payments')
  };
  searchColumn: STColumn[] = [
    { title: { text: '排名', i18n: 'app.analysis.table.rank' }, index: 'index' },
    {
      title: { text: '搜索关键词', i18n: 'app.analysis.table.search-keyword' },
      index: 'keyword',
      click: item => this.msg.success(item.keyword)
    },
    {
      type: 'number',
      title: { text: '用户数', i18n: 'app.analysis.table.users' },
      index: 'count',
      sort: {
        compare: (a, b) => a.count - b.count
      }
    },
    {
      type: 'number',
      title: { text: '周涨幅', i18n: 'app.analysis.table.weekly-range' },
      index: 'range',
      render: 'range',
      sort: {
        compare: (a, b) => a.range - b.range
      }
    }
  ];

  salesType = 'all';
  salesPieData: any;
  salesTotal = 0;

  saleTabs: string[] = ['sales', 'visits'];

  offlineIdx = 0;

  ngOnInit(): void {
    this.http.get('/chart').subscribe(res => {
      res.offlineData.forEach((item: any) => {
        item.chart = deepCopy(res.offlineChartData);
      });
      this.data = res;
      this.loading = false;
      this.changeSaleType();
    });
  }

  setDate(type: string): void {
    this.dateRange = getTimeDistance(type as NzSafeAny);
    this.dateRangeType = type;
    setTimeout(() => this.cdr.detectChanges());
  }
  changeSaleType(): void {
    this.salesPieData =
      this.salesType === 'all'
        ? this.data.salesTypeData
        : this.salesType === 'online'
          ? this.data.salesTypeDataOnline
          : this.data.salesTypeDataOffline;
    if (this.salesPieData) {
      this.salesTotal = this.salesPieData.reduce((pre: number, now: { y: number }) => now.y + pre, 0);
    }
    this.cdr.detectChanges();
  }

  handlePieValueFormat(value: string | number): string {
    return yuan(value);
  }
  offlineChange(idx: number): void {
    if (this.data.offlineData[idx].show !== true) {
      this.data.offlineData[idx].show = true;
      this.cdr.detectChanges();
    }
  }
}
