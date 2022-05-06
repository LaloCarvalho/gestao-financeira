import { ApiClient } from "../services";

export interface SelectProps {
  value: number;
  label: string;
}

export interface User {
  Name: string;
  Email: string;
  Password: string;
}

export interface IServicesContext {
  api: ApiClient;
}
