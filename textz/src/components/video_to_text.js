import React, { useState } from 'react';
import Axios from "axios";
import "./mystyle2.css";
import { Container} from 'react-bootstrap';
// import image from "..//images//check.jpg";

function Video_Text_Summary() {
    const [url,setURL]=useState("")
    const [videoSummary,setVideoSummary]=useState("")

    const submit_url = () => {
        // console.log(url)
        Axios.post('/post_video_to_text_summary', { "url": url })
          .then(function (response) {
            // handle success
            console.log(response.data);
            setVideoSummary(response.data);
            
          })
          .catch(function (error) {
            // handle error
    
            console.log(error);
          })

          console.log(videoSummary)
    
      }
    return (

        //adding c_main_text_to_text , it added margin to main_heading
        <div className="c_main_text_to_text">
            <Container className="main_heading text-center"> <h3 >Video to Text Summary</h3> </Container>
            <Container className="c_video_to_text_cont">
                <div class="input-group mb-3 c_video_to_text_div" >
                    <input type="link" class="form-control" placeholder="URL" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={(e)=>setURL(e.target.value)}/>
                    <div class="input-group-append">
                        <button class="c_video_to_text_btn" type="button" onClick={submit_url}>Summary</button>
                    </div>
                </div>
            </Container>
            <Container >
              
                  <p type="textarea" className="c_text_to_text_area">{videoSummary}</p>
            </Container>
        </div>

    );

}
export default Video_Text_Summary;