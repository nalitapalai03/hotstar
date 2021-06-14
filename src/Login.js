import React,{Component} from 'react'
import './login.css'
import log1 from './log1.svg'
import logo2 from './logo2.png'
import {Header} from'./Header'
export class Login extends Component {
    render(){
        return (
            <div className="Container">
                <Header/>
                
                <div className="section" >
                
       
         
       <img src={log1} alt="" width="500px"/>
       <div className="signup"><h2>GET ALL THERE</h2>
        
       </div>
       <p>Get Premier Access to Raya and the Last Dragon for an additional fee
          with a Disney+ subscription. As of 03/26/21, the price of Disney+
          and The Disney Bundle will increase by $1.</p>
       <img src={logo2} alt="" width="700px"/>
     </div>

                
            </div>

        )
    }
}



