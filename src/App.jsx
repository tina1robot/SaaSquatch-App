import './App.css'

function App() {
  return (
    <>
      {/* HEADER WITH NAVIGATION */}
      <header>
        <h1><strong>Christina McNeice - UVic Inspiring Software Developer </strong>  
        </h1>
        <nav>
          <a href="#home">Home</a>
          <a href="#why-impact">Why impact.com</a> 
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* MAIN CONTENT */}
      <main>
        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-content">
            <h2>Hi Saasquatch Team, I am Christina </h2>
            <p> Computer Science Student at UVic - Developer, hackathon organizer, and believer in building software that matters </p>
            <p>Shipping features to 200+ users | 8 months available </p>
            
            
            <div className="cta-buttons">
              <a href="Christina-McNeice-Resume.pdf" download="christina-mcneice-resume.pdf" className="button secondary">
                📄 Download Resume
              </a>
              <a href="https://github.com/tina1robot" target="_blank" rel="noopener noreferrer" className="button secondary">
                💻 View GitHub
              </a>
              <a href="https://www.christinacode.com/" target="_blank" rel="noopener noreferrer" className="button secondary">
                🎨 Full Portfolio
              </a>
            </div>
          </div>
          <img src="images/ChristinaM.webp" alt="profile photo" />
        </section>

        {/* Quick Wins*/}
        <section className="quick-wins">
          <h3>Why This Role? Quick Version:</h3>
          <div className="wins-grid">
            <div className="win-card">
              <div className="win-icon">✅</div>
              <h4>8 Months Available</h4>
              <p>Jan 5, 2026 start - your preferred duration</p>
            </div>
            <div className="win-card">
              <div className="win-icon">⚡</div>
              <h4>My Stack</h4>
              <p> Currently using Vue, React, TypeScript and more, with practical experience in test driven development</p>
            </div>
            <div className="win-card">
              <div className="win-icon">🏆</div>
              <h4>Recent Win</h4>
              <p>Led team to 1st place in hackathon - shipped in 19hrs</p>
            </div>
            <div className="win-card">
              <div className="win-icon">🚀</div>
              <h4>Production Features</h4>
              <p> Legacy code improvements are live, serving 200+ students, with planned features in the works </p>
            </div>
          </div>
        </section>

       
        <section className="why-impact" id="why-impact">
          <h3>Why I Made This Website for You</h3>
          <div className="impact-content">
            <div className="impact-reason">
              <h4>🎯 I Read Your Job Posting</h4>
              <p>You mentioned "bonus points" for making a personalized website, well challenge accepted. This bonus point option caught my eye and genuinely improve the application experience.</p>
            </div>

            <div className="impact-reason">
              <h4>🛠️ Tech Skills</h4>
              <p><strong>You're looking for:</strong> Vue, React, TypeScript, TDD, Figma, Storybook, Jest, Vitest</p>
              <p> I am actively using Vue, Nuxt, React, TypeScript, TDD practices, Vite either within my current co-op at Inspire Research Lab or within my position at WECs. The overlap is clear meaning I can contribute quickly while learning more about the larger picture of SaaSquatch</p>
            </div>

            <div className="impact-reason">
              <h4>📈 What I Want to Learn from You</h4>
              <ul>
                <li>Storybook & Percy for visual testing (not in my toolkit yet)</li>
                <li>How you build and deploy tech that serve global brands</li>
                <li>Enterprise-scale partnership management platforms</li>
                <li></li>
              </ul>
            </div>

            <div className="impact-reason">
              <h4>💡 What You Get from Me</h4>
              <ul>
                <li><strong>Fresh production experience:</strong> Currently shipping features at Inspire Research Lab</li>
                <li><strong>Proven team leadership:</strong> Won hackathon leading 4-person team under pressure</li>
                <li><strong>Full commitment:</strong> 8 months = time to make real impact, not just "learn and leave"</li>
                <li><strong>Growth mindset:</strong> I debug legacy code, learn fast, and ask good questions</li>
              </ul>
            </div>

            <div className="impact-reason">
              <h4>Most exciting aspects of this opporunity from my POV</h4>
              <p> Working with a well known, established company </p>
              <p> Meeting and learning from the team, hands on experience is where the most growth happens </p>
              <p> Getting a glipse of what life looks like outside of academic heavy research fields </p>
            </div>
          </div>
        </section>

        
        <section className="real-experience">
          <h3>What I'm Doing Right Now</h3>
          <div className="experience-content">
            <div className="current-role">
              <h4>🔧 Currently: Software Engineering Co-op @ Inspire Research Lab</h4>
              <p><strong>Sep 2025 - Dec 2025</strong></p>
              <ul>
                <li><strong>Shipping to production:</strong> 3 major features (auto study planner, focus mode, practice quiz generator) serving 200+ students</li>
                <li><strong>Tech stack:</strong> Vue/Nuxt, TypeScript, TDD practices, Git/GitLab, Agile/Scrum</li>
                <li><strong>Showcased at Victoria Tech Week 2025</strong> - scheduled to present to industry professionals</li>
                <li><strong>Won 1st place hackathon</strong> - led 4-person team to build auto-grade feedback system in 19 hours</li>
              </ul>
            </div>

            <div className="current-role">
              <h4>🔧 Currently: Website Manager for Women in Engineering and Computer Science</h4>
              <p><strong>July 2025 - Present </strong></p>
              <ul>
                <li><strong>React development:</strong> Building team spotlight feature to showcase member achievements and stories</li>
                <li><strong>Site improvements:</strong> Collaborating with coding team to enhance navigation and user experience</li>
                <li><strong>Content management:</strong> Updating events, resources, and announcements for 100+ club members</li>
                <li><strong>Cross-team coordination:</strong> Working with executives to prioritize features and website enhancements</li>
                <li><strong>Digital presence:</strong> Maintaining website and social platforms to boost recruitment and engagement</li>
              </ul>
            </div>
            
            <div className="past-role">
              <h4>🔍 Previously: Research Assistant @ Restoration Futures Lab</h4>
              <p><strong>Sep 2022 - Jan 2023</strong></p>
              <ul>
                <li>Designed database architecture for 500+ land segments</li>
                <li>Backend system design, API architecture, technical documentation</li>
              </ul>
            </div>




          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="features">
          <h3>Technical Skills (What's on My Resume)</h3>
          <div className="feature-grid">
            <div className="feature-card">
              <div className="feature-icon">💻</div>
              <h4>Frontend</h4>
              
              <p><strong>I have:</strong> Vue, Nuxt, React, TypeScript, HTML/CSS, Vite</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🧪</div>
              <h4>Testing & Tools</h4>
              
              <p><strong>I have:</strong> Jest, Vitest, TDD practices | <em>Want to learn: Storybook, Percy</em></p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔧</div>
              <h4>Engineering Practices</h4>
              <p>Agile/Scrum, Git/GitLab, Jira, Code Review, CI/CD, Technical Documentation</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🗄️</div>
              <h4>Backend & Other</h4>
              <p>Java, Python, SQL, REST APIs, Node.js, Database Architecture</p>
            </div>
          </div>
        </section>

        {/* Q&A Section with specific dates */}
        <section className="qa-section">
          <h3>Addressing Your Requirements</h3>
          <div className="qa-list">
            <div className="qa-item">
              <h4>Q: What's your availability?</h4>
              <p><strong>A:</strong> <span className="highlight">8 months preferred - January 5, 2026 to August 2026</span>. </p>
            </div>
            <div className="qa-item">
              <h4>Q: Do you have programming experience?</h4>
              <p><strong>A:</strong> Yes - current co-op shipping production code + hackathon winner + years of coursework. </p>
            </div>
            <div className="qa-item">
              <h4>Q: Detail oriented?</h4>
              <p><strong>A:</strong> I'm currently shipping to production serving 200+ students. Bugs = real problems for real users. I also caught the "bonus points" section of your job posting that most candidates miss.</p>
            </div>
            <div className="qa-item">
              <h4>Q: Can you work in Victoria?</h4>
              <p><strong>A:</strong> I'm based in Victoria, BC. I noticed you're hybrid/remote friendly - perfect setup for focused work and team collaboration.</p>
            </div>
            <div className="qa-item">
              <h4>Q: Why impact.com specifically?</h4>
              <p><strong>A:</strong> Three reasons: (1) Your tech stack matches what I'm learning, (2) Partnership management at scale is fascinating - you're solving real business problems, (3) Your culture of "curiosity rewarded" aligns with how I approach learning.</p>
            </div>
          </div> 
        </section>

        {/* CTA SECTION */}
        <section className="cta" id="contact">
          <h3>Let's Talk</h3>
          <p>I'd love to discuss how I can contribute to the impact.com team</p>
          <div className="contact-buttons">
            <a href="www.linkedin.com/in/christina-mcneice-441b541a0" target="_blank" rel="noopener noreferrer" className="cta-button secondary">
              💼 LinkedIn
            </a>
              <a href="mailto:mcneicechristina@gmail.com" className="cta-button">
              📧 Email Me
            </a>
            <a href="tel:403-704-0787" className="cta-button secondary">
              📱 403-704-0787
            </a>
          </div>

      
          
         
          <div className="quick-links">
            <p><strong>Quick Links:</strong></p>
            <a href="Christina-McNeice-Resume.pdf" download="christina-mcneice-resume.pdf"> Resume (PDF)</a> | 
            <a href="https://github.com/tina1robot" target="_blank" rel="noopener noreferrer">GitHub</a> | 
            <a href="https://www.christinacode.com/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <p>&copy; 2025 Christina McNeice | Built specifically for impact.com | Application deadline: Oct 21, 2025</p>
      </footer>
    </>
  )
}

export default App

