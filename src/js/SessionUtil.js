import { stores } from '@sapper/app';
const { session }= stores();
export class SessionUtil {
  constructor(){}
  isAuthenticated() {
    return $session.token != null;
  }
  getAccess(){
    if ($session.token) {
      return $session.token.access;
    } else {
      return -1;
    }
  }
}