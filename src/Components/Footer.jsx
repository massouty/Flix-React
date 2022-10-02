import React from 'react';
class Footer extends React.Component{
    render(){
        return(
            <div className="footer"  >
            <ul className="list-group" bg="dark"  >
                <li className="list-group-item"><a href='https://www.facebook.com/massouty'>Facebook</a></li>
                <li className="list-group-item"><a href='https://www.youtube.com/channel/UCyawU6msveC4s7TgqeXmCUA'>Youtube</a></li>
                <li className="list-group-item">Contact us : Email:massouty@outlook.com</li>

            </ul>
            </div>

        )
    }
}

export default Footer;
