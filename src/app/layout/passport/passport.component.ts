import { Component, Inject, OnInit } from '@angular/core';
import { YA_SERVICE_TOKEN, ITokenService } from '@yelon/auth';

@Component({
  selector: 'layout-passport',
  templateUrl: './passport.component.html',
  styleUrls: ['./passport.component.less']
})
export class LayoutPassportComponent implements OnInit {
  links = [
    {
      title: '帮助',
      href: ''
    },
    {
      title: '隐私',
      href: ''
    },
    {
      title: '条款',
      href: ''
    }
  ];

  constructor(@Inject(YA_SERVICE_TOKEN) private tokenService: ITokenService) {}

  ngOnInit(): void {
    this.tokenService.clear();
  }
}
