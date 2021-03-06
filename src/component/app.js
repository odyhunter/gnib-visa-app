import React from 'react';
import Nav from './nav';
import Disqus from '../component/disqus';

const App = () => {
    return(
        <div>
            <h3 className="text-center">GNIB (IRP) &amp; Re-Entry Visa Appointments</h3><br />
            <button type="button" className="btn float-right" onClick={() => window.location.href='https://m.me/dbei-bot'}>
                <i className="fab fa-facebook-messenger fa-w-14 fa-1x"></i><span className="pl-2">Stamp 4 Notification</span>
            </button>
            <Nav />
            <Disqus />
        </div>
    );
}

export default App;