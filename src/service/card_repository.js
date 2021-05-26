import firebaseApp from './firebase';

// 카드의 정보를 가짐.
class CardRepository {
  // 해당경로의 데이터가 업데이트 될때마다 snapshot의 value가 설정되어 있다면 onUpdate함수 호출
  syncCards(userId, onUpdate) {
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on('value', (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    // Synchronization발생 끄기
    return () => ref.off();
  }

  saveCard(userId, card) {
    //   사용자별 데이터 관리 => 사용자 id에 해당하는 카드의 id에 데이터 저장
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }
  removeCard(userId, card) {
    //   사용자별 데이터 관리 => 사용자 id에 해당하는 카드의 id에 데이터 저장
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
