
function About() {
    return (
        <section className="about-area page-section scroll-to-page" id="about">
            <div className="custom-container">
                <div className="about-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                            <i className="lar la-user"></i> Men haqimda
                        </h4>
                        <h1 className="scroll-animation" data-animation="fade_from_bottom">Mening ismim&nbsp;
                            <span>Quvonchbek Bobojonov</span>
                        </h1>
                    </div>
                    <p className="scroll-animation" data-animation="fade_from_bottom">
                        Men Full stack dasturchisiman. Men yangi narsalarni yaratishni va murakkab muammolarni oddiy, chiroyli va intuitiv dizaynga aylantirishni yaxshi ko‘raman. Mening vazifam sizning veb-saytingiz va ilovalaringizni funksional va foydalanuvchilarga qulay, lekin ayni paytda jozibador bo‘lishi uchun yaratishdir. Bundan tashqari, men sizning mahsulotingizga shaxsiy teginish qo‘shaman va uning ko‘zni qamashtiruvchi va ishlatish uchun qulayligiga ishonch hosil qilaman. Mening maqsadim sizning xabaringiz va shaxsingizni ijodiy tarzda yetkazishdir.
                    </p>
                    <div className="row mt-3 scroll-animation row-cols-1 row-cols-md-2" data-animation="fade_from_bottom">
                        <div className="col scroll-animation" data-animation="fade_from_left">
                            <ul>
                                <li>Ism: Quvonchbek</li>
                                <li>Familya: Bobojonov</li>
                                <li>Yosh: 18</li>
                                <li>Daraja: strong junior</li>
                            </ul>
                        </div>
                        <div className="col scroll-animation" data-animation="fade_from_right">
                            <ul>
                                <li>Tel: +998993833582</li>
                                <li>Email: moorfoinfo@gmail.com</li>
                                <li>ZIP code: 221209</li>
                                <li>Manzil: Uzbekistan, Xorazm, Yangibozor, Chubalanchi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
