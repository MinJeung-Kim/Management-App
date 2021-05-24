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

  logout() {
    firebase.auth().signOut();
  }

  //사용자가 바꼈을때 원하는 기능을 수행하는 콜백 함수.
  onAuthChange(onUserChanged) {
    // 사용자 정보 전달
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
