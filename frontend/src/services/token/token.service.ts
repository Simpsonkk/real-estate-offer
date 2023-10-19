const AUTH_TOKEN_KEY_NAME = 'token';

type Token = string;

class TokenService {
  public getToken(): Token {
    const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
    return token ?? '';
  }

  public saveToken(token: Token): void {
    localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
  }

  public removeToken(): void {
    localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
  }
}

export { TokenService };
