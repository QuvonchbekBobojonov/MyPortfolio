import { useEffect } from 'react';
import portfolioImage1 from '../../assets/portfolio/1.png';
import portfolioImage2 from '../../assets/portfolio/5.jpg';
import portfolioImage3 from '../../assets/portfolio/3.jpg';

function Portfolio() {
    const projects = [
        {
            id: 1,
            title: 'MegaLord - PC Monitoring System and Game Club Management Software',
            image: portfolioImage2,
            link: '#',
            tech: ['Django', 'Django Rest Framework', 'JavaScript', 'Qt', 'PySide6'],
            layout: 'half',
        },
        {
            id: 2,
            title: 'Megalife - Water Automation Selling Device',
            image: portfolioImage3,
            link: '/',
            tech: ['Django', 'Django Rest Framework', 'MQTT', 'JavaScript', 'Qt'],
            layout: 'full',
        },
        {
            id: 3,
            title: 'MedControl Apteka - Medical Control System',
            image: portfolioImage1,
            link: 'https://apteka.medcontrol.uz/',
            tech: ['Django', 'Django Rest Framework', 'Django Channels', 'JavaScript'],
            layout: 'full',
        },
    ];

    // Fade from bottom animation on scroll
    useEffect(() => {
        const elements = document.querySelectorAll('.scroll-animation');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            { threshold: 0.2 }
        );
        elements.forEach((el) => observer.observe(el));
        return () => elements.forEach((el) => observer.unobserve(el));
    }, []);

    return (
        <section className="portfolio-area page-section scroll-to-page" id="portfolio">
            <div className="custom-container">
                <div className="portfolio-content content-width">
                    <div
                        className="section-header scroll-animation"
                        data-animation="fade_from_bottom"
                    >
                        <h4 className="subtitle">
                            <i className="las la-grip-vertical"></i> Portfolio
                        </h4>
                        <h1>
                            Featured <span>Projects</span>
                        </h1>
                    </div>

                    <div className="row portfolio-items">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className={`col-md-12 scroll-animation`}
                                data-animation="fade_from_bottom"
                            >
                                <div
                                    className={`portfolio-item ${
                                        project.layout === 'half' ? 'portfolio-half' : 'portfolio-full'
                                    }`}
                                >
                                    <div className="portfolio-item-inner">
                                        <a href={project.image} data-lightbox={`project-${project.id}`}>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                loading="lazy"
                                            />
                                        </a>

                                        <ul className="portfolio-categories">
                                            {project.tech.map((tech) => (
                                                <li key={tech}>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        {tech}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <h2>
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {project.title}
                                        </a>
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
