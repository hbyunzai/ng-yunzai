/* eslint-disable import/order */
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { YelonACLModule } from '@yelon/acl';
import { YunzaiThemeModule } from '@yelon/theme';
import { YunzaiConfig, YUNZAI_CONFIG } from '@yelon/util/config';

import { throwIfAlreadyLoaded } from '@core';

import { environment } from '@env/environment';

// Please refer to: https://ng.yunzainfo.com/docs/global-config
// #region NG-YUNZAI Config

const yunzaiConfig: YunzaiConfig = {
  st: { modal: { size: 'lg' } },
  pageHeader: { homeI18n: 'home' },
  lodop: {
    license: `A59B099A586B3851E0F0D7FDBF37B603`,
    licenseA: `C94CEE276DB2187AE6B65D56B3FC2848`
  },
  auth: { login_url: '/passport/login' }
};

const yunzaiModules: any[] = [YunzaiThemeModule.forRoot(), YelonACLModule.forRoot()];
const yunzaiProvides = [{ provide: YUNZAI_CONFIG, useValue: yunzaiConfig }];

// #region reuse-tab
/**
 * 若需要[路由复用](https://ng.yunzainfo.com/components/reuse-tab)需要：
 * 1、在 `shared-yelon.module.ts` 导入 `ReuseTabModule` 模块
 * 2、注册 `RouteReuseStrategy`
 * 3、在 `src/app/layout/default/default.component.html` 修改：
 *  ```html
 *  <section class="yunzai-default__content">
 *    <reuse-tab #reuseTab></reuse-tab>
 *    <router-outlet (activate)="reuseTab.activate($event)"></router-outlet>
 *  </section>
 *  ```
 */
import { RouteReuseStrategy } from '@angular/router';
import { ReuseTabService, ReuseTabStrategy } from '@yelon/abc/reuse-tab';
yunzaiProvides.push({
  provide: RouteReuseStrategy,
  useClass: ReuseTabStrategy,
  deps: [ReuseTabService]
} as any);

// #endregion

// #endregion

// Please refer to: https://ng.ant.design/docs/global-config/en#how-to-use
// #region NG-ZORRO Config

import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';

const ngZorroConfig: NzConfig = {};

const zorroProvides = [{ provide: NZ_CONFIG, useValue: ngZorroConfig }];

// #endregion

@NgModule({
  imports: [...yunzaiModules, ...(environment.modules || [])]
})
export class GlobalConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: GlobalConfigModule) {
    throwIfAlreadyLoaded(parentModule, 'GlobalConfigModule');
  }

  static forRoot(): ModuleWithProviders<GlobalConfigModule> {
    return {
      ngModule: GlobalConfigModule,
      providers: [...yunzaiProvides, ...zorroProvides]
    };
  }
}
