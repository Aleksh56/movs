export interface IAuthContext {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}
