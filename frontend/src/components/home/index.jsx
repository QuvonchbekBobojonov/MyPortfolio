import React from 'react';

function Home() {
    return (
        <section className="hero-section page-section scroll-to-page" id="home">
            <div className="custom-container">
                <div className="hero-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="las la-home"></i> Asosy
                        </h4>
                        <h1 className="scroll-animation title" data-animation="fade_from_bottom">Assalomu
                            <span>Aleykum</span>
                        </h1>
                    </div>
                    <p className="scroll-animation" data-animation="fade_from_bottom"> Dasturlarni yaxshi tushunish,
                        tahlil qilish va ishlab chiqish. Yaratilayotgan dasturlarini doimiy ravishda yangilash,
                        foydalanuvchilar uchun qulay imkoniyatlar yaratish.</p>

                    <div className="facts d-flex">
                        <div className="left scroll-animation" data-animation="fade_from_left">
                            <h1>1.5+</h1>
                            <p>Yilik Tajriba</p>
                        </div>
                        <div className="right scroll-animation" data-animation="fade_from_right">
                            <h1>13+</h1>
                            <p>loyihalar</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;