import { Notification } from './notification/notification.package.js';
import { TokenService } from './token/token.service.js';

const notification = new Notification();
const tokenService = new TokenService();

export { notification, tokenService };
