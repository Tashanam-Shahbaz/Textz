import React from 'react';
import "./mystyle2.css";
import { Container} from 'react-bootstrap';

function Text_Generator() {
    return (
        <div className="c_main_text_to_text">
            <Container className="main_heading text-center"> <h3 >Text Generator</h3> </Container>
            <Container className="c_video_to_text_cont">
                
            <div class="input-group mb-3 c_video_to_text_div" >
                  <input type="text" className=" c_topic_input" placeholder="Enter your Topic"/>
                   
                </div>
            </Container>
            <Container >
              
                  <textarea className="c_video_to_text_para"></textarea>
            </Container>


        </div>

    );

}
export default Text_Generator;