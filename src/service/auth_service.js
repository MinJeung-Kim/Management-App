import firebase from 'firebase';
import firebaseApp from './firebase';

// 로그인, 로그아웃 기능 담당 - 유닛 테스트해야할 부분
class AuthService {
  //providerName : google or github
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    //팝업으로 로그인창 활성화
    return firebaseApp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;
