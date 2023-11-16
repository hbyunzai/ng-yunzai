import { Component, Input, OnInit } from '@angular/core';
import { SocialService } from '@yelon/auth';
import { SettingsService } from '@yelon/theme';

@Component({
  selector: 'app-callback',
  template: ``,
  providers: [SocialService]
})
export class CallbackComponent implements OnInit {
  @Input() type = '';

  constructor(
    private socialService: SocialService,
    private settingsSrv: SettingsService
  ) {}

  ngOnInit(): void {
    this.mockModel();
  }

  private mockModel(): void {
    const info = {
      access_token: '123456789',
      name: 'cipchk',
      email: `${this.type}@${this.type}.com`,
      id: 10000,
      time: +new Date()
    };
    this.settingsSrv.setUser({
      ...this.settingsSrv.user,
      ...info
    });
    this.socialService.callback(info);
  }
}
