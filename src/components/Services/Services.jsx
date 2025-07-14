import "./Services.css";
import servicesData from "./servicesData";

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title text-center animate animate-flow-from-bottom">
          My Services
        </h2>
        <div className="row">
          {servicesData.map((service, index) => {
            const gradientId = `service-gradient-${index}`;
            const IconComponent = service.icon;

            return (
              <div
                className="col-md-4 mb-4 animate animate-flow-from-bottom"
                style={{ transitionDelay: `${index * 150}ms` }}
                key={index}
              >
                <div className="service-card">
                  <div className="service-icon">
                    <svg width="0" height="0" style={{ position: "absolute" }}>
                      <defs>
                        <linearGradient
                          id={gradientId}
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="0%"
                        >
                          <stop offset="0%" stopColor="#8A2BE2" />
                          <stop offset="100%" stopColor="#E02595" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <IconComponent
                      size={48}
                      style={{ fill: `url(#${gradientId})` }}
                    />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
