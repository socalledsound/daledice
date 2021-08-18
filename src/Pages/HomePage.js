import React from 'react';
import '../HomePage.css';

const HomePage = ({currentUser, userInfo}) => {

    return (
        <div className='bg-main'>
            {
                !currentUser ? 
                    <div className='intro-container'>
                        <p>This is words for testing when no currUser exists</p>
                    </div>
                    :
                    <div className='loggedIntro'>
                        <p>This is words for testing when user IS there, hello { currentUser }</p>
                    </div>
            }
        </div>
    );
}

export default HomePage;