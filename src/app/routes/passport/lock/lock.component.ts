import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { YA_SERVICE_TOKEN, ITokenService } from '@yelon/auth';
import { SettingsService, User } from '@yelon/theme';

@Component({
  selector: 'passport-lock',
  templateUrl: './lock.component.html',
  styleUrls: ['./lock.component.less']
})
export class UserLockComponent {
  f: FormGroup;

  get user(): User {
    return this.settings.user;
  }

  constructor(
    fb: FormBuilder,
    @Inject(YA_SERVICE_TOKEN) private tokenService: ITokenService,
    private settings: SettingsService,
    private router: Router
  ) {
    this.f = fb.group({
      password: [null, Validators.required]
    });
  }

  submit(): void {
    for (const i in this.f.controls) {
      this.f.controls[i].markAsDirty();
      this.f.controls[i].updateValueAndValidity();
    }
    if (this.f.valid) {
      console.log('Valid!');
      console.log(this.f.value);
      this.tokenService.set({
        token: '123'
      });
      this.router.navigate(['dashboard']);
    }
  }
}
