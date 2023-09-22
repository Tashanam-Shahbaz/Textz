import React, { useState } from 'react';
import "./mystyle2.css";
import Axios from "axios";
import { Container, Col, Row } from 'react-bootstrap';


function Text_Summary() {
  const [textareaValue, settextareaValue] = useState("");
  const [answer, setAnswer] = useState(" ");




  const submit_text = () => {
    Axios.post('/post_text_to_text_summary', { "text": textareaValue })
      .then(function (response) {
        // handle success
        console.log(response.data);
        setAnswer(response.data);
      })
      .catch(function (error) {
        // handle error

        console.log(error);
      })

  }
  return (

    <div className="c_main_text_to_text">
      <Container className="main_heading text-center"> <h3 >Text to Text Summary</h3> </Container>
      <Container className="c_text_to_text_cont">

        <Row >
          <Col lg>
            <h4 className="c_text_to_text_heading">Orginal Text</h4>
            <textarea onChange={(e) => settextareaValue(e.target.value)} className="c_text_to_text_area" />
          </Col>
          <Col lg><h4 className="c_text_to_text_heading">Summary</h4>
            <p type="textarea" className="c_text_to_text_area" >{answer}</p></Col>
        </Row>
        <button className="summary_btn" onClick={submit_text}>Summary</button>
      </Container>
    </div>


  );

}
export default Text_Summary;