function Resume() {
    const experienceData = [
        {
            date: '2024 - Present',
            title: 'Full Stack Engineer Mentor | Mentor at "Al-Khwarizmi Heirs" Project',
            place: 'Digital Education Development Center',
        },
        {
            date: '2024 - 2025',
            title: 'Desktop Engineer',
            place: 'TOTMEGA LLC',
        },
        {
            date: '2023 - 2025',
            title: 'Back-end Developer',
            place: 'TOTMEGA LLC',
        },
    ];

    const educationData = [
        {
            date: '2024 - Present',
            title: "Bachelor's Degree in Information Systems and Technologies",
            place: 'International School of Finance Technology and Science (ISFT)',
        },
        {
            date: '2022 - 2024',
            title: 'Information Media Machines and Computer Networks Operator',
            place: 'Vocational School No. 1 (Yangibozor District)',
        },
        {
            date: '2022 - 2023',
            title: 'Front-end Development Course',
            place: 'IT Park (Yangibozor District)',
        },
        {
            date: '2022 - 2023',
            title: 'Python Backend Development',
            place: 'Fulfil Education',
        },
        {
            date: '2020 - 2022',
            title: 'Back-end Development & Computer Literacy',
            place: 'IT Park (Yangibozor District)',
        },
        {
            date: '2020 - 2022',
            title: 'Front-end & Back-end Development',
            place: 'Mohirdev',
        },
        {
            date: '2020 - 2022',
            title: 'WordPress & Django REST Framework',
            place: 'YouTube',
        },
    ];

    return (
        <section className="resume-area page-section scroll-to-page" id="resume">
            <div className="custom-container">
                <div className="resume-content content-width">
                    <div className="section-header scroll-animation" data-animation="fade_from_bottom">
                        <h4 className="subtitle">
                            <i className="las la-briefcase"></i> Resume
                        </h4>
                        <h1>
                            Education and&nbsp;<span>Experience</span>
                        </h1>
                    </div>

                    <div className="resume-timeline">
                        {/* --- Experience Section --- */}
                        {experienceData.map((item, index) => (
                            <div
                                key={index}
                                className="item scroll-animation"
                                data-animation="fade_from_right"
                            >
                                <span className="date">{item.date}</span>
                                <h2>{item.title}</h2>
                                <p>{item.place}</p>
                            </div>
                        ))}

                        {/* --- Education Section --- */}
                        {educationData.map((item, index) => (
                            <div
                                key={index + 100}
                                className="item scroll-animation"
                                data-animation="fade_from_right"
                            >
                                <span className="date">{item.date}</span>
                                <h2>{item.title}</h2>
                                <p>{item.place}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Resume;
