import React, { useState } from 'react';
import "./mystyle2.css";
import { Container, Button } from 'react-bootstrap';
import Tesseract from 'tesseract.js';
import Axios from 'axios';
function Image_Text_Summary() {
    const [imagePath, setImagePath] = useState("");
    const [textz, setText] = useState("");
    const [summary,setSummary]=useState(" ");

    const handleChange = (event) => {
        setImagePath(URL.createObjectURL(event.target.files[0]));
    }
    const call =()=>{
        Axios.post('/post_ocr_to_text_summary', { "text": textz })
            .then(function (response) {
                // handle success
                // console.log(response.data);
                setSummary(response.data);
    
                // console.log(response.data);
               

            })
            .catch(function (error) {
                // handle error

                console.log(error);
            })
    }

    const image_to_text = () => {

        Tesseract.recognize(
            imagePath, 'eng',
        )
            .catch(err => {
                console.error(err);
            })
            .then(result => {
                // Get Confidence score
                console.log(result.data.text)
                // let confidence = result.confidence
                // console.log(confidence)
                // let text = result.text
                setText(result.data.text);
                // console.log(text)

            })
            call();


    }
    return (
        <div className="c_main_text_to_text">
            <Container className="main_heading text-center"> <h3 >Image to Text Summary</h3> </Container>
            <Container className="c_video_to_text_cont">

            <div class="input-group mb-3 c_video_to_text_div" >
                    <input type="file" className="form-control c_file_input" placeholder="files" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange={handleChange}/>
                    <div className="input-group-append">
                        <button className="c_video_to_text_btn" type="button" onClick={image_to_text}>Summary</button>
                    </div>
                </div>
            </Container>
            <Container >

                <p type="textarea" className="c_text_to_text_area video_text">{summary}</p>
            </Container>


        </div>

    );

}
export default Image_Text_Summary;