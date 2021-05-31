import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Footer from '../footer/footer';
import Header from '../header/header';
import Preview from '../preview/preview';
import styles from './maker.module.css';

const Maker = ({FileInput, authService, cardRepository}) => {
    const historyState = useHistory().state;
    const [cards, setCards] = useState({});
    const [userId, setUserID] = useState(historyState && historyState.id)
 
    const history = useHistory();
    const onLogout = () => {
        authService.logout();
    };

    // 사용자 id 변경
    useEffect(() => {
        if (!userId) {
            return;
        }
        const stopSync = cardRepository.syncCards(userId, cards => {
            setCards(cards);
        })
        // 컴포넌트가 Unmount됬을때 호출할 함수 리턴
        return () => stopSync(); 
    }, [userId, cardRepository]);

    // 로그인
    useEffect(() => {
        authService.onAuthChange(user => {
            if(user){
                setUserID(user.uid);
            } else{ 
                history.push('/');
            }
        });
    }, [authService, userId, history]);

    const createOrUpdateCard = (card) => {   
        // updated의 key를 이용
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated;
        });
        cardRepository.saveCard(userId, card);
    }

    const deleteCard = (card) => {  
        setCards(cards => {
            const updated = {...cards};
            delete updated[card.id];
            return updated;
        });
        cardRepository.removeCard(userId, card);
    }

    return(
        <section className={styles.maker}>
            <Header onLogout={onLogout} />
            <div className={styles.container}>
                <Editor FileInput={FileInput} cards={cards} addCard={createOrUpdateCard} updateCard={createOrUpdateCard} deleteCard={deleteCard} />
                <Preview cards={cards} />
            </div>
            <Footer />
        </section>
    );
};

export default Maker;