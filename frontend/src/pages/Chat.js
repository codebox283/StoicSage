import React from 'react';
import '../styles/Chat.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Chat() {
    return (
        <>
            <Header/>
            <div className="chat">
                <h1>Coming Soon<span className="dots"></span></h1>
                <p>Sincere apologies for the inconvinience.</p>
            </div>
            <Footer />
        </>
    );
}

export default Chat;
