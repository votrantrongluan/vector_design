export interface RoutePage {
  name: string
  component: object
  options?: object
}

export enum AppRoutes {
  HOME = 'HOME',
  DETAIL = 'DETAIL',
  INTRODUCE = 'INTRODUCE',
  SIGNIN = 'SIGNIN',
}
