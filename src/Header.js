import React,{Component} from 'react';
import './Header.css'
import { Button } from 'react-bootstrap';

export class Header extends Component {
    render(){
        return (
            <div className="Header">
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"alt=""/>
                
                <Button href="/Home"className="login">Login</Button>    
                <Button href="/Home"className="subscribe">Subscribe</Button>    

                

                
            </div>

        )
    }
}



