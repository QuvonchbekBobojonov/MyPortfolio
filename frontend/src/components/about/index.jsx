function About() {
    return (
        <section className="about-area page-section scroll-to-page" id="about">
            <div className="custom-container">
                <div className="about-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="lar la-user"></i> About Me
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">
                            My name is&nbsp;
                            <span>Quvonchbek Bobojonov</span>
                        </h1>
                    </div>
                    <p className="scroll-animation" data-animation="fade_from_bottom">
                        I am a Full Stack Developer. I love creating new things and transforming complex problems into 
                        simple, elegant, and intuitive designs. My mission is to make your websites and applications 
                        functional and user-friendly while also ensuring they are visually appealing. 
                        Additionally, I add a personal touch to your product, ensuring it is both eye-catching and easy to use. 
                        My goal is to convey your message and identity creatively.
                    </p>
                    <div className="row mt-3 scroll-animation row-cols-1 row-cols-md-2" data-animation="fade_from_bottom">
                        <div className="col scroll-animation" data-animation="fade_from_left">
                            <ul>
                                <li>Name: Quvonchbek</li>
                                <li>Surname: Bobojonov</li>
                                <li>Age: {new Date().getFullYear() - 2006}</li>
                                <li>Level: Strong Junior</li>
                            </ul>
                        </div>
                        <div className="col scroll-animation" data-animation="fade_from_right">
                            <ul>
                                <li>Phone: +998 77 404 00 66</li>
                                <li>Email: hi@moorfo.uz</li>
                                <li>ZIP Code: 221209</li>
                                <li>Address: Uzbekistan, Khorezm, Yangibozor, Chubalanchi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;


export default About;
