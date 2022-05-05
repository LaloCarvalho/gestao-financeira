export interface SelectProps {
  value: number;
  label: string;
}

export interface User {
  Id: string;
  Name: string;
  Email: string;
  PasswordHash: string;
  CreatedDate: Date;
  LastModified: Date;
  Active: boolean;
}