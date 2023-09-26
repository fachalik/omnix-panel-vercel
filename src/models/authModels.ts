export interface UserType {
  refreshToken: string;
  token: string;
  tokenExpires: number;
  user: User;
}

export interface User {
  id: number;
  email: string;
  provider: string;
  socialId: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: null;
  photo: null;
  role: Role;
  status: Role;
  __entity: string;
}

export interface Role {
  id: number;
  name: string;
  __entity: string;
}
