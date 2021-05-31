import { firebaseAuth, githubProvider, googleProvider } from './firebase';

// 로그인, 로그아웃 기능 담당 - 유닛 테스트해야할 부분
class AuthService {
  //providerName : google or github
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    //팝업으로 로그인창 활성화
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  //사용자가 바꼈을때 원하는 기능을 수행하는 콜백 함수.
  onAuthChange(onUserChanged) {
    // 사용자 정보 전달
    firebaseAuth.onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvider;
      default:
        throw new Error(`not supported provider: ${providerName}`);
    }
  }
}

export default AuthService;
