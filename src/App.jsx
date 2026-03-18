import { useState, useEffect } from 'react';
import { 
  Menu, X, Sun, Battery, Activity, Zap, Shield, Cpu, 
  ChevronRight, Play, Star, ArrowRight, ArrowUpRight 
} from 'lucide-react';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Background Energy Lines animation in App.css */}
      <div className="energy-bg">
        <div className="energy-line line-1"></div>
        <div className="energy-line line-2"></div>
        <div className="energy-line line-3"></div>
      </div>
      
      {/* Navigation */}
      <nav className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}>
        <div className="nav-container">
          <a href="#" className="logo">
            <Sun className="logo-icon pulse" />
            <span className="logo-text">SQUARA <span className="gradient-text-green">TECH</span></span>
          </a>
          
          <div className="desktop-menu">
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#products" className="nav-link">Products</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#contact" className="btn btn-primary btn-sm">Get a Quote</a>
          </div>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="mobile-menu glass-panel">
            <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#products" onClick={() => setMobileMenuOpen(false)}>Products</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#contact" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Get a Quote</a>
          </div>
        )}
      </nav>

      {/* Floating Chat UI Placeholder */}
      <div className="floating-chat glass-panel">
        <div className="chat-dot"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="hero-section" id="home">
        <div className="hero-glow bg-glow green"></div>
        <div className="container hero-content">
          <div className="hero-text reveal active">
            <h1 className="hero-title">
              Powering the Future with <br /> 
              <span className="gradient-text-green">Smart Solar</span> & <span className="gradient-text-blue">Technology</span>
            </h1>
            <p className="hero-subtitle">
              Sustainable energy solutions combined with cutting-edge technology to redefine how you power your life.
            </p>
            <div className="hero-cta">
              <a href="#services" className="btn btn-primary">
                Explore Solutions <ArrowRight className="btn-icon" />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get a Quote <ChevronRight className="btn-icon" />
              </a>
            </div>
            
            <div className="energy-stats glass-panel">
              <div className="stat-item">
                <span className="stat-value">98%</span>
                <span className="stat-label">Efficiency Rate</span>
              </div>
              <div className="stat-line"></div>
              <div className="stat-item">
                <span className="stat-value">24/7</span>
                <span className="stat-label">Smart Monitoring</span>
              </div>
              <div className="stat-line"></div>
              <div className="stat-item">
                <span className="stat-value">0</span>
                <span className="stat-label">Carbon Trace</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section className="about-section pt-0" id="about">
        <div className="container grid-2 align-center reveal">
          <div className="about-image-wrapper">
             <div className="about-glow bg-glow blue"></div>
             <div className="glass-panel about-card">
               <Sun size={60} className="about-icon text-green pulse" />
               <h3>Next-Gen Infrastructure</h3>
               <p>We build solar grids that power entire smart cities autonomously.</p>
             </div>
          </div>
          <div className="about-text">
            <h2>The Intersection of <span className="gradient-text-blue">Eco</span> & <span className="gradient-text-green">Tech</span></h2>
            <p>At Squara Technologies, we don't just install solar panels. We engineer comprehensive energy ecosystems driven by AI and IoT automation to give you total control over consumption, generation, and storage.</p>
            <ul className="about-list">
              <li><Zap className="list-icon" /> <span><strong>Innovation:</strong> Patented AI energy routing.</span></li>
              <li><Shield className="list-icon" /> <span><strong>Sustainability:</strong> 100% recyclable components.</span></li>
              <li><Activity className="list-icon" /> <span><strong>Reliability:</strong> Fail-proof microgrid integration.</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="services-section" id="services">
        <div className="container">
          <h2 className="reveal text-center">Our Core Solutions</h2>
          <div className="grid-4 reveal">
            <div className="service-card glass-panel">
              <div className="service-icon-wrapper"><Sun className="service-icon" /></div>
              <h3>Solar Installation</h3>
              <p>Premium monocrystalline panels with active sun-tracking.</p>
            </div>
            <div className="service-card glass-panel">
              <div className="service-icon-wrapper"><Battery className="service-icon" /></div>
              <h3>Smart Energy Systems</h3>
              <p>Intelligent battery storage with real-time grid arbitrage.</p>
            </div>
            <div className="service-card glass-panel">
              <div className="service-icon-wrapper"><Activity className="service-icon" /></div>
              <h3>Solar Maintenance</h3>
              <p>Drone-assisted predictive cleaning and maintenance.</p>
            </div>
            <div className="service-card glass-panel">
              <div className="service-icon-wrapper"><Cpu className="service-icon" /></div>
              <h3>Tech Automation</h3>
              <p>IoT modules that turn your property into a smart hub.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Products Showcase */}
      <section className="products-section" id="products">
         <div className="container">
          <h2 className="reveal">Advanced Hardware</h2>
          <div className="grid-3 reveal">
            <div className="product-card glass-panel group">
              <div className="product-image hardware-1"></div>
              <div className="product-info">
                <h4>SQ-Quantum Panel</h4>
                <p>High-yield panels that generate energy even in low light.</p>
                <a href="#" className="product-link">View Details <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="product-card glass-panel group">
              <div className="product-image hardware-2"></div>
              <div className="product-info">
                <h4>PowerVault X</h4>
                <p>Modular home battery system with hyper-charging capability.</p>
                <a href="#" className="product-link">View Details <ArrowUpRight size={16} /></a>
              </div>
            </div>
            <div className="product-card glass-panel group">
              <div className="product-image hardware-3"></div>
              <div className="product-info">
                <h4>Nexus Inverter</h4>
                <p>The brain of your energy setup, featuring AI optimization.</p>
                <a href="#" className="product-link">View Details <ArrowUpRight size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us */}
      <section className="stats-section bg-dark">
        <div className="container grid-2 align-center reveal">
          <div className="stats-text">
            <h2>Why Partners Choose Squara</h2>
            <div className="benefits-list">
              <div className="benefit-item glass-panel">
                <h4>Cost-Effective Returns</h4>
                <p>Achieve ROI 40% faster than traditional setups.</p>
              </div>
              <div className="benefit-item glass-panel">
                <h4>Eco-Friendly Future</h4>
                <p>Zero emissions from manufacturing to deployment.</p>
              </div>
              <div className="benefit-item glass-panel">
                <h4>Latest Technology</h4>
                <p>OTA updates ensure your system never goes obsolete.</p>
              </div>
            </div>
          </div>
          <div className="stats-grid">
            <div className="stat-box glass-panel">
              <span className="stat-number gradient-text-green">5,000+</span>
              <span className="stat-text">Projects Completed</span>
            </div>
            <div className="stat-box glass-panel">
              <span className="stat-number gradient-text-blue">1.2GW</span>
              <span className="stat-text">Energy Saved</span>
            </div>
            <div className="stat-box glass-panel">
              <span className="stat-number gradient-text-green">99.9%</span>
              <span className="stat-text">Uptime Guaranteed</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Projects Slider (Minimal Approach) */}
      <section className="portfolio-section" id="projects">
        <div className="container reveal">
          <h2 className="text-center">Real-World Deployments</h2>
          <div className="portfolio-showcase glass-panel">
             <div className="portfolio-image">
               <div className="portfolio-overlay">
                 <h3>Surya Smart Grid, Maharashtra</h3>
                 <p>25MW installation powering a 500-home eco-village.</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="testimonials-section">
        <div className="container reveal">
          <h2 className="text-center">What the Industry Says</h2>
          <div className="grid-3">
             <div className="testimonial-card glass-panel">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#00ff88" color="#00ff88" />)}
                </div>
                <p className="testimonial-text">"Squara transformed our manufacturing plant. We reduced energy costs by 70% while heavily upgrading our tech infrastructure."</p>
                <div className="author">- Elena R., Operations Director</div>
             </div>
             <div className="testimonial-card glass-panel">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#00ff88" color="#00ff88" />)}
                </div>
                <p className="testimonial-text">"The PowerVault X and Nexus system is years ahead of the competition. The app gives us granular control."</p>
                <div className="author">- Marcus T., Homeowner</div>
             </div>
             <div className="testimonial-card glass-panel">
                <div className="stars">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#00ff88" color="#00ff88" />)}
                </div>
                <p className="testimonial-text">"Flawless installation and incredible customer support. They truly own the eco-tech intersection."</p>
                <div className="author">- Sarah L., Tech Executive</div>
             </div>
          </div>
        </div>
      </section>

      {/* 8. Call to Action */}
      <section className="cta-section" id="contact">
        <div className="cta-glow bg-glow green"></div>
        <div className="container reveal">
          <div className="cta-box glass-panel">
            <h2>Switch to <span className="gradient-text-blue">Smart Energy</span> Today</h2>
            <p>Ready to power your life efficiently? Let our engineers design a custom topology for your needs.</p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary btn-lg">Contact Us <ArrowRight className="btn-icon" /></a>
            </div>
            
            {/* Energy Calculator Widget Placeholder */}
            <div className="calculator-widget">
               <Battery size={20} className="calc-icon"/>
               <span>Launch ROI Calculator</span>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="footer">
        <div className="container grid-4 footer-top">
          <div className="footer-brand">
            <a href="#" className="logo">
              <Sun className="logo-icon" />
              <span className="logo-text">SQUARA <span className="gradient-text-green">TECH</span></span>
            </a>
            <p className="footer-desc">Redefining energy through cutting-edge technology and sustainable infrastructure.</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#products">Hardware</a></li>
              <li><a href="#projects">Deployments</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Warranty Info</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact</h4>
            <p>hello@squaratech.com</p>
            <p>+91 (800) SQUARA-0</p>
            <div style={{marginTop: '1rem'}}>
              <p>4-18-34/P-325, Balajinagar Rd</p>
              <p>Near Sidhivinayak Ganesh Mandir,</p>
              <p>New Balaji Nagar, Chhatrapati Sambhajinagar,</p>
              <p>Maharashtra 431005, India</p>
            </div>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>&copy; {new Date().getFullYear()} Squara Technologies. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
