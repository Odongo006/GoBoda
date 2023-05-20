import React from 'react';

const AboutSection = () => {
  const primaryColor = 'Blue';
  // eslint-disable-next-line no-unused-vars
  const secondaryColors = ['Green', 'Yellow'];

  return (
    <section style={{ backgroundColor: primaryColor, color: 'white' }}>
      <div className="container">
        <h2>About Section</h2>
        <p>
          A section that provides an overview of the purpose and goals of our website.
          We aim to bring awareness, professionalism, and improved reputation to the bodaboda
          industry.
        </p>
        <p>
          The bodaboda industry faces various challenges, including safety concerns, lack of
          regulation, and negative public perception. Through our platform, we strive to
          address these issues and promote positive change within the industry.
        </p>
        <p>
          Here are some relevant statistics/facts to highlight the importance of our mission:
        </p>
        <ul>
          <li>Over X% of bodaboda accidents result in serious injuries or fatalities.</li>
          <li>Only X% of bodaboda riders have received formal training or certification.</li>
          <li>The average monthly income of bodaboda riders is below the poverty line.</li>
        </ul>
        <p>
          By promoting awareness, professionalism, and improved reputation, we believe that
          the bodaboda industry can thrive and contribute positively to society.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
