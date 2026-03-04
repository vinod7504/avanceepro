import React from 'react';

const toArray = (value) => {
  if (!value) {
    return [];
  }

  return Array.isArray(value) ? value : [value];
};

const slugify = (text) =>
  String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const CountryServicesPage = ({ country, headline, intro, sections }) => {
  const introLines = toArray(intro);

  return (
    <section className="section country-services-page">
      <div className="container">
        <header className="country-services-hero">
          <p className="country-services-eyebrow">{country}</p>
          <h1>{headline}</h1>
          {introLines.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </header>

        <nav className="country-services-toc" aria-label={`${country} service sections`}>
          {sections.map((section) => {
            const anchor = section.id || slugify(section.title);
            return (
              <a key={section.title} href={`#${anchor}`}>
                {section.title}
              </a>
            );
          })}
        </nav>

        <div className="country-services-stack">
          {sections.map((section) => {
            const anchor = section.id || slugify(section.title);
            const sectionIntro = toArray(section.intro);
            const sectionClosing = toArray(section.closing);

            return (
              <article id={anchor} key={section.title} className="country-service-card">
                <h2>{section.title}</h2>

                {sectionIntro.map((line) => (
                  <p key={`${section.title}-${line}`}>{line}</p>
                ))}

                {Array.isArray(section.points) && section.points.length > 0 && (
                  <ul className="country-service-list">
                    {section.points.map((point) => (
                      <li key={`${section.title}-${point}`}>{point}</li>
                    ))}
                  </ul>
                )}

                {Array.isArray(section.groups) &&
                  section.groups.map((group) => (
                    <section key={`${section.title}-${group.title}`} className="country-service-group">
                      <h3>{group.title}</h3>
                      <ul className="country-service-list">
                        {group.points.map((point) => (
                          <li key={`${group.title}-${point}`}>{point}</li>
                        ))}
                      </ul>
                    </section>
                  ))}

                {sectionClosing.map((line) => (
                  <p key={`${section.title}-closing-${line}`} className="country-service-closing">
                    {line}
                  </p>
                ))}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CountryServicesPage;
