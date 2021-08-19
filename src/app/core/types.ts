import { User } from '@yelon/theme';

export interface YunzaiUser extends User {
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<{ [key: string]: string }>;
  credentialsNonExpired?: boolean;
  deptId?: string;
  deptName?: string;
  enabled?: boolean;
  id?: string;
  password?: string;
  realname?: string;
  roles?: string;
  userCode?: string;
  userId?: string;
  userType?: number;
  username?: string;
  avatarId?: string;
  tenantId?: string;
}
