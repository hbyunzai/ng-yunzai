/* eslint-disable import/order */
/* eslint-disable import/no-duplicates */
import { HttpClientModule } from '@angular/common/http';
import { default as ngLang } from '@angular/common/locales/zh';
import { APP_INITIALIZER, LOCALE_ID, NgModule, Type } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleInterceptor } from '@yelon/auth';
import { YELON_LOCALE, zh_CN as yelonLang, YUNZAI_I18N_TOKEN } from '@yelon/theme';
import { NZ_DATE_LOCALE, provideNzI18n, zh_CN as zorroLang } from 'ng-zorro-antd/i18n';
import { NzNotificationModule } from 'ng-zorro-antd/notification';

// #region default language
// 参考：https://ng.yunzainfo.com/docs/i18n
import { I18NService } from '@core';
import { zhCN as dateLang } from 'date-fns/locale';

const LANG = {
  abbr: 'zh',
  ng: ngLang,
  zorro: zorroLang,
  date: dateLang,
  yelon: yelonLang
};
// register angular
import { registerLocaleData } from '@angular/common';
registerLocaleData(LANG.ng, LANG.abbr);
const LANG_PROVIDES = [
  { provide: LOCALE_ID, useValue: LANG.abbr },
  provideNzI18n(LANG.zorro),
  { provide: NZ_DATE_LOCALE, useValue: LANG.date },
  { provide: YELON_LOCALE, useValue: LANG.yelon }
];
// #endregion

// #region i18n services

const I18NSERVICE_PROVIDES = [{ provide: YUNZAI_I18N_TOKEN, useClass: I18NService, multi: false }];

// #endregion

// #region global third module

import { BidiModule } from '@angular/cdk/bidi';
const GLOBAL_THIRD_MODULES: Array<Type<any>> = [BidiModule];

// #endregion

// #region JSON Schema form (using @yelon/form)
import { JsonSchemaModule } from '@shared';
const FORM_MODULES = [JsonSchemaModule];
// #endregion

// #region Http Interceptors
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { DefaultInterceptor } from '@core';

const INTERCEPTOR_PROVIDES = [
  { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: DefaultInterceptor, multi: true }
];
// #endregion

// #region Startup Service
import { StartupService } from '@core';
export function StartupServiceFactory(startupService: StartupService): () => Observable<void> {
  return () => startupService.load();
}
const APPINIT_PROVIDES = [
  StartupService,
  {
    provide: APP_INITIALIZER,
    useFactory: StartupServiceFactory,
    deps: [StartupService],
    multi: true
  }
];
// #endregion

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { GlobalConfigModule } from './global-config.module';
import { LayoutModule } from './layout/layout.module';
import { RoutesModule } from './routes/routes.module';
import { SharedModule } from './shared/shared.module';
import { STWidgetModule } from './shared/st-widget/st-widget.module';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    GlobalConfigModule.forRoot(),
    CoreModule,
    SharedModule,
    LayoutModule,
    RoutesModule,
    STWidgetModule,
    NzNotificationModule,
    ...GLOBAL_THIRD_MODULES,
    ...FORM_MODULES
  ],
  providers: [...LANG_PROVIDES, ...INTERCEPTOR_PROVIDES, ...I18NSERVICE_PROVIDES, ...APPINIT_PROVIDES],
  bootstrap: [AppComponent]
})
export class AppModule {}
