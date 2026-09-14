import { useEffect } from 'react';
import { assetUrl } from '../../assets';
import { useSiteData } from '../../site-data';

function Portfolio() {
    const { portfolio, ui } = useSiteData();
    const projects = portfolio.map((project) => ({
        ...project,
        image: assetUrl(project.image),
    }));

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
                            <i className="las la-grip-vertical"></i> {ui.nav.portfolio}
                        </h4>
                        <h1>
                            {ui.portfolio.title[0]} <span>{ui.portfolio.title[1]}</span>
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
