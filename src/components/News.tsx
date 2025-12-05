import { newsItems } from '../data/news';
import './News.css';

export default function News() {
  // Get unique months in order from the data
  const months = Array.from(new Set(newsItems.map(item => item.month)));

  return (
    <section id="news" className="news-section">
      <div className="container">
        <h2 className="section-title">News & Updates</h2>
        <div className="news-grid">
          {months.map((month) => (
            <div key={month} className="news-month-group">
              <h3 className="news-month-title">{month}</h3>
              {newsItems
                .filter(item => item.month === month)
                .map((item) => (
                  <div key={item.id} className="news-item">
                    <h4>{item.title}</h4>
                    {item.link && (
                      <a 
                        href={item.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="news-link"
                      >
                        {item.linkText || 'Read more'} →
                      </a>
                    )}
                  </div>
                ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

