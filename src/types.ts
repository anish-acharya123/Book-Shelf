export interface LoginFormValues {
  email: string;
  password: string;
}
export interface Book {
  id: number;
  author: string;
  img: string;
  date: number;
  rate: number;
  name: string;
}

export interface NavbarItem {
  id: number;
  label: string;
  link: string;
}
