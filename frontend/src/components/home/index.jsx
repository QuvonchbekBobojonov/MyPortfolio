function Home() {
    return (
        <section className="hero-section page-section scroll-to-page" id="home">
            <div className="custom-container">
                <div className="hero-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-home"></i> Main
                        </h4>
                        <h1 className="scroll-animation title" data-animation="fade_from_bottom">Hello &nbsp;
                            <span>There</span>
                        </h1>
                    </div>
                    <p className="scroll-animation" data-animation="fade_from_bottom">
                        Understanding, analyzing, and developing software efficiently. 
                        Continuously updating applications and creating user-friendly features.
                    </p>

                    <div className="facts d-flex">
                        <div className="left scroll-animation" data-animation="fade_from_left">
                            <h1>{(new Date().getFullYear() - 2022) + "+"}</h1> 
                            <p>Years of Experience</p>
                        </div>
                        <div className="right scroll-animation" data-animation="fade_from_right">
                            <h1>20+</h1>
                            <p>Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
