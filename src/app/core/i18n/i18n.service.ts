// 请参考：https://ng.yunzainfo.com/docs/i18n
import { Platform } from '@angular/cdk/platform';
import { registerLocaleData } from '@angular/common';
import ngEn from '@angular/common/locales/en';
import ngZh from '@angular/common/locales/zh';
import ngZhTw from '@angular/common/locales/zh-Hant';
import { Injectable } from '@angular/core';
import {
  YelonLocaleService,
  en_US as yelonEnUS,
  SettingsService,
  zh_CN as yelonZhCn,
  zh_TW as yelonZhTw,
  _HttpClient,
  YunzaiI18nBaseService
} from '@yelon/theme';
import { YunzaiConfigService } from '@yelon/util/config';
import { enUS as dfEn, zhCN as dfZhCn, zhTW as dfZhTw } from 'date-fns/locale';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { en_US as zorroEnUS, NzI18nService, zh_CN as zorroZhCN, zh_TW as zorroZhTW } from 'ng-zorro-antd/i18n';
import { Observable } from 'rxjs';

interface LangConfigData {
  abbr: string;
  text: string;
  ng: NzSafeAny;
  zorro: NzSafeAny;
  date: NzSafeAny;
  yelon: NzSafeAny;
}

const DEFAULT = 'zh-CN';
const LANGS: { [key: string]: LangConfigData } = {
  'zh-CN': {
    text: '简体中文',
    ng: ngZh,
    zorro: zorroZhCN,
    date: dfZhCn,
    yelon: yelonZhCn,
    abbr: '🇨🇳'
  },
  'zh-TW': {
    text: '繁体中文',
    ng: ngZhTw,
    zorro: zorroZhTW,
    date: dfZhTw,
    yelon: yelonZhTw,
    abbr: '🇭🇰'
  },
  'en-US': {
    text: 'English',
    ng: ngEn,
    zorro: zorroEnUS,
    date: dfEn,
    yelon: yelonEnUS,
    abbr: '🇬🇧'
  }
};

@Injectable({ providedIn: 'root' })
export class I18NService extends YunzaiI18nBaseService {
  protected _defaultLang = DEFAULT;
  private _langs = Object.keys(LANGS).map(code => {
    const item = LANGS[code];
    return { code, text: item.text, abbr: item.abbr };
  });

  constructor(
    private http: _HttpClient,
    private settings: SettingsService,
    private nzI18nService: NzI18nService,
    private yelonLocaleService: YelonLocaleService,
    private platform: Platform,
    cogSrv: YunzaiConfigService
  ) {
    super(cogSrv);
    const defaultLang = this.getDefaultLang();
    this._defaultLang = this._langs.findIndex(w => w.code === defaultLang) === -1 ? DEFAULT : defaultLang;
  }

  private getDefaultLang(): string {
    if (!this.platform.isBrowser) {
      return DEFAULT;
    }
    if (this.settings.layout.lang) {
      return this.settings.layout.lang;
    }
    let res = (navigator.languages ? navigator.languages[0] : null) || navigator.language;
    const arr = res.split('-');
    return arr.length <= 1 ? res : `${arr[0]}-${arr[1].toUpperCase()}`;
  }

  loadLangData(lang: string): Observable<NzSafeAny> {
    return this.http.get(`assets/tmp/i18n/${lang}.json`);
  }

  use(lang: string, data: Record<string, unknown>): void {
    if (this._currentLang === lang) return;

    this._data = this.flatData(data, []);

    const item = LANGS[lang];
    registerLocaleData(item.ng);
    this.nzI18nService.setLocale(item.zorro);
    this.nzI18nService.setDateLocale(item.date);
    this.yelonLocaleService.setLocale(item.yelon);
    this._currentLang = lang;

    this._change$.next(lang);
  }

  getLangs(): Array<{ code: string; text: string; abbr: string }> {
    return this._langs;
  }
}
