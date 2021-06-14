import React,{Component} from 'react';
import './Home.css'
import {Image} from 'react-bootstrap'
export class Home extends Component {
    render(){
        return (
            <div className="Header">
                <img src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"alt=""/>
                
                <span>TV</span>
                <span>Sports</span>
                <span>Movies</span>
                <span>Premium</span> 
                <span>Disney+</span>  
                

                
            </div>

        )
    }
}



