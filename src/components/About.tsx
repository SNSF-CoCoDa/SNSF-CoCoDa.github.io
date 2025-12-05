import './About.css';

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-intro">
          <h2 className="section-title">About CoCoDa</h2>
          <p>
            The research project is motivated by the fact that online platforms increasingly play a key role in our societies. 
            This creates <strong>systemic risks to democracy, such as undermining freedom of information and online privacy</strong>. 
            These risks are, however, merely symptoms of a root cause: the high concentration of control and data (CoCoDa) 
            with dominant online platforms.
          </p>
          <p>
            Both computer science (CS) and legal scholarship (Law) have been developing countermeasures, but typically in 
            disciplinary silos. In CS, researchers have tried to find workarounds for the lack of explicit research platform 
            data access methods by combining available technical methods (e.g., data scraping, blackbox testing, network traffic analysis). 
            However, those approaches face challenges, stemming from platform-imposed restrictions and limited legal support.
          </p>
          <p>
            In Law, the EU enacted the Digital Services Act (DSA) in late 2022 to enable vetted researchers to better access 
            dominant online platforms. However, there is a significant risk that, without sufficient technical support and 
            alignment, these promising legal mechanisms become moot in practice.
          </p>
          <p className="highlight-box">
            To overcome the challenge of having computational methods without (legal) teeth, or legal solutions that are not 
            implementable or miss important technical aspects, there is a <strong>strong need for CS and Law to work closely 
            together</strong> to develop a mutual understanding and integrated implementations of concepts, viewpoints and methods.
          </p>
        </div>

        <div className="about-aim">
          <h3>🚀 Project Aim</h3>
          <p>
            The project has two main aims: 
          </p>
          <ol>
            <li>Combine existing technical data access methods with novel legal approaches like the DSA and create new technical methods on this foundation.</li>
            <li>Advance current legally mandated platform data access methods and make them work in practice.</li>
          </ol>
          <p>
            Your research will be grounded in two use cases in the domains of social media and mobile applications. 
            By creating integrated “techno-legal” tools, the project supports regulators, researchers, and civil society 
            in studying and mitigating systemic risks arising from data and control concentration in Very Large Online Platforms (VLOPs).
          </p>
        </div>

        <div className="about-rq">
          <h3>📚 Research Questions</h3>
          <div className="rq-grid">
            <div className="rq-card">
              <h4>RQ1: Understanding the Status Quo</h4>
              <p>
                What are <strong>current legal and technical approaches</strong> to address control and data concentration 
                in dominant platforms, and how can these be <strong>evaluated and compared</strong> with respect to their 
                ability and limitations when measuring and mitigating systemic risk?
              </p>
            </div>
            <div className="rq-card">
              <h4>RQ2: Building Better Solutions</h4>
              <p>
                What novel ways of <strong>integrating technical and legal means</strong> for accessing data and information 
                about control mechanisms in dominant online platforms can overcome the limitations identified in RQ1, and how 
                effective are these in terms of the evaluation criteria from RQ1?
              </p>
            </div>
            <div className="rq-card">
              <h4>RQ3: Scaling and Generalizing</h4>
              <p>
                What legal, technical, and techno-legal features are <strong>still required to fortify society against 
                systemic risk from data and control concentration</strong> in UC1 and UC2, and how can the <strong>disconnect 
                between CS and Law</strong>, which commonly work in disciplinary silos, be overcome beyond the project’s UCs?
              </p>
            </div>
          </div>
        </div>

        <div className="about-usecases">
          <h3>🔧 Use Cases</h3>
          <div className="usecase-grid">
            <div className="usecase-card">
              <h4>1. Freedom of Speech on Social Media</h4>
              <p>Investigating content moderation and data access limitations in social media (e.g., Instagram, X/Twitter).</p>
            </div>
            <div className="usecase-card">
              <h4>2. Privacy on App Stores</h4>
              <p>Monitoring privacy practices in mobile ecosystems dominated by Google Play and Apple App Store.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

