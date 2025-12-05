import { teamMembers } from '../data/team';
import './Team.css';

export default function Team() {
  const partners = teamMembers.filter(m => m.category === 'Partner');
  const researchers = teamMembers.filter(m => m.category === 'Researcher');
  const odiTeam = teamMembers.filter(m => m.category === 'ODI');

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "https://via.placeholder.com/150?text=No+Image";
  };

  const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => (
    <div className="team-card">
      <div className="member-image-container">
        <img 
          src={member.imageUrl} 
          alt={member.name} 
          className="member-image" 
          onError={handleImageError}
        />
      </div>
      <div className="member-info">
        <h4 className="member-name">{member.name}</h4>
        <p className="member-role">{member.role}</p>
        <p className="member-institution">{member.institution}</p>
      </div>
    </div>
  );

  return (
    <section id="team" className="team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        
        <div className="team-category">
          <h3 className="category-title">Project Leads</h3>
          <div className="team-grid">
            {partners.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div className="team-category">
          <h3 className="category-title">PhD Researchers</h3>
          <div className="team-grid">
            {researchers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

        <div className="team-category">
          <h3 className="category-title">ODI Team</h3>
          <div className="team-grid">
            {odiTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
