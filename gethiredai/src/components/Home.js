import {Component} from 'react';
import LinkedinLogin from './LinkedinLogin';
import logo from "../images/logo.png";
import work from "../images/work.png";
import "./Home.css";

class Home extends Component {

    render(){
        return(
            <div>
                <img src={logo} class="logo" alt="DesHired AI"></img>
                <div class="main-description-section">
                    <span class="main-description"><span class="red">Desire</span> to be Hired.</span>
                {/* </div> */}
                {/* <div class="sub-description-section"> */}
                    <span class="sub-description">Powered by OpenAI, Deshired enable you to create impactful cover letters 
                        and personalized  messages in less than <span>5 minutes.</span></span>
                </div>
                <div class="workimage">
                    <img src={work} alt="woman working"></img>
                </div>
                <LinkedinLogin />
            </div>
        )
    }

}

export default Home;