import React from "react";
import {Link} from "react-router-dom";

function Team(){
    return(
        <section className="page-section bg-light" id="team">
        <div className="container">
            <div className="text-center">
                <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                {/* <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3> */}
            </div>
            <div className="row">
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/Uzair.gif" alt="..." />
                        <h4>Uzair Khan</h4>
                        <p className="text-muted">ML Developer</p>
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/Mohommad_Uzair?t=uyWW45PATfhyKgcD16UrYw&s=09"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/uzairmetro"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/muhammad-uzair-308200228"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img class="mx-auto rounded-circle" src="assets/img/team/Mhewish.gif" alt="..." />
                        <h4>Mehwish Alam</h4>
                        <p className="text-muted">Project Lead</p>
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/TheMehwishAlam"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/TheMehwishAlam/"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/mehwish-alam-b62486163/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/tashanam.gif" alt="..." />
                        <h4>Tashanam Shahbaz</h4>
                        <p className="text-muted">Full Stack Developer</p>
                        {/* <Link className="btn btn-dark btn-social mx-2" to="www.twitter.com/TashanamShahbaz"><i className="fab fa-twitter"></i></Link> */}
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/TashanamShahbaz"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/tashanam.shahbaz"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/tashanam-shahbaz-2103b0216/"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                {/* <div className="col-lg-3">
                    <div className="team-member">
                        <img className="mx-auto rounded-circle" src="assets/img/team/fasih.gif" alt="..." />
                        <h4>Fasihullah Ejaz Khan</h4>
                        <p className="text-muted">Python Developer</p>
                        <a className="btn btn-dark btn-social mx-2" href="https://twitter.com/fasihullah1712"><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.facebook.com/profile.php?id=100009807727830"><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/muhammad-fasihullah-550a0a1b4/!"><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div> */}
            </div>
            
            {/* <div className="row">
                <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
            </div> */}
        </div>
    </section>
    )
}

export default Team;