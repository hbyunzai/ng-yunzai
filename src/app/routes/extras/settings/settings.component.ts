import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { SHARED_IMPORTS } from '@shared';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadComponent } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-extras-settings',
  templateUrl: './settings.component.html',
  imports: [...SHARED_IMPORTS, NzUploadComponent]
})
export class ExtrasSettingsComponent implements OnInit {
  readonly msg = inject(NzMessageService);

  active = 1;
  profileForm = inject(FormBuilder).nonNullable.group({
    name: ['', Validators.compose([Validators.required, Validators.pattern(`^[-_a-zA-Z0-9]{4,20}$`)])],
    email: '',
    bio: ['', Validators.maxLength(160)],
    url: '',
    company: '',
    location: ''
  });
  pwd = {
    old_password: '',
    new_password: '',
    confirm_new_password: ''
  };
  // Email
  primary_email = 'yunzai-bot@outlook.com';

  profileSave(value: any): void {
    console.log('profile value', value);
  }

  pwdSave(): void {
    if (!this.pwd.old_password) {
      this.msg.error('invalid old password');
      return;
    }
    if (!this.pwd.new_password) {
      this.msg.error('invalid new password');
      return;
    }
    if (!this.pwd.confirm_new_password) {
      this.msg.error('invalid confirm new password');
      return;
    }
    console.log('pwd value', this.pwd);
  }

  ngOnInit(): void {
    this.profileForm.patchValue({
      name: 'yunzai-bot',
      email: 'yunzai-bot@outlook.com'
    });
  }
}
