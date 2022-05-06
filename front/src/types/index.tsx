import { Dispatch } from "react";
import { ApiClient } from "../services";

export interface SelectProps {
  value: number;
  label: string;
}

export interface User {
  name?: string;
  email: string;
  password: string;
  token?: string;
}
