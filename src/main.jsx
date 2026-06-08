
import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { motion } from 'framer-motion'
import {
  ShieldCheck, Lock, Tv, Flame, Volume2, Cable, Home, Phone, Mail, MapPin,
  CheckCircle2, Wrench, Clock, Menu, User, Hammer, Truck, Image as ImageIcon,
  Star, Search, Map, Camera, Building2
} from 'lucide-react'
import './styles.css'

function App() {
  const [submitted, setSubmitted] = useState(false)

  const services = [
    { icon: Tv, title: "TV Wall Mounting", slug: "tv-wall-mounting", keywords: "TV mounting, wall mounted TV, TV installer near me", text: "Clean, level, secure TV mounting for living rooms, bedrooms, apartments, condos, offices, and rental properties." },
    { icon: Flame, title: "Fireplace TV Mounting", slug: "fireplace-tv-mounting", keywords: "fireplace TV mounting, TV above fireplace, mantel TV installation", text: "Over-the-fireplace installs with careful attention to height, studs, masonry, heat, mantel clearance, and viewing angle." },
    { icon: Cable, title: "Cord Concealment", slug: "cord-concealment", keywords: "hide TV wires, cord concealment, wire hiding service", text: "Hide visible wires with clean cable routing options so the finished setup looks polished and professional." },
    { icon: Volume2, title: "Soundbar Mounting", slug: "soundbar-mounting", keywords: "soundbar installation, mount soundbar under TV, home audio setup", text: "Mount your soundbar neatly below the TV, aligned and secured so the whole setup looks intentional." },
    { icon: Home, title: "Outdoor TV Installation", slug: "outdoor-tv-installation", keywords: "outdoor TV mounting, patio TV installation, deck TV mount", text: "Mount TVs on patios, porches, decks, garages, and exterior walls using the right approach for the surface." },
    { icon: Wrench, title: "Dismount & Remount", slug: "tv-dismount-remount", keywords: "remove TV from wall, remount TV, moving TV installation", text: "Moving, upgrading, replacing, or rearranging? I can safely remove and reinstall your TV." },
  ]

  const serviceAreas = ["Dedham", "Needham", "Westwood", "Norwood", "Canton", "Walpole", "Newton", "Brookline", "Wellesley", "Medfield", "Milton", "Boston"]

  const packages = [
    { size: 'Up to 55"', price: "$199+", detail: "Standard drywall/stud mounting" },
    { size: '65"–75"', price: "$249+", detail: "Most common large TV install" },
    { size: '77"–85"', price: "$299+", detail: "Large-format installation" },
    { size: "Fireplace", price: "$349+", detail: "Brick, stone, mantel, or height complexity" },
  ]

  const galleryProjects = [
    { title: "75-Inch TV Mounted Above Media Console", location: "Dedham, MA", text: "A clean living room installation with secure stud mounting, centered placement, and a professional finished look." },
    { title: "Fireplace TV Installation", location: "Westwood, MA", text: "Mounted above a fireplace with attention to viewing height, mantel clearance, and clean cable planning." },
    { title: "Soundbar + TV Setup", location: "Needham, MA", text: "TV and soundbar aligned together for a clean home entertainment setup with fewer visible wires." },
  ]

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Service Areas", href: "#service-areas" },
    { label: "Gallery", href: "#gallery" },
    { label: "Get Quote", href: "#quote" },
    { label: "About", href: "#about" },
  ]

  return (
    <div>
      <header className="header">
        <div className="header-inner">
          <a href="#home" className="brand">
            <div className="logo-tv">
              <div>
                <div className="tv">TV</div>
                <div className="small">MOUNTIN'</div>
                <div className="man">MAN</div>
              </div>
            </div>
            <div>
              <div className="brand-title">TV Mountin' Man</div>
              <div className="brand-subtitle">Safe. Secure. Professional.</div>
            </div>
          </a>

          <nav className="nav">
            {navItems.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>

          <a href="tel:7815550123" className="call-button">Call for a Quote</a>
          <Menu className="icon" />
        </div>
      </header>

      <main id="home">
        <section className="hero">
          <div className="container hero-grid">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="badge"><MapPin className="icon" /> TV Mounting in Dedham, Boston & Greater Boston</div>
              <h1>Greater Boston's <span className="orange">TV Mounting Specialist.</span></h1>
              <p className="lead">
                Safe, secure, professional TV installation for wall-mounted TVs, fireplace mounts, Samsung Frame TVs, soundbars, outdoor TVs, and cord concealment.
              </p>
              <div className="cta-row">
                <a href="#quote" className="primary-button">Get a Fast Quote</a>
                <a href="#services" className="secondary-button">View Services</a>
              </div>
              <div className="trust-row">
                <span><ShieldCheck className="icon" /> Safe</span>
                <span><Lock className="icon" /> Secure</span>
                <span><Star className="icon" /> Professional</span>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="hero-card">
              <div className="hero-card-inner">
                <div className="big-tv">
                  <div className="big-tv-text">
                    <div className="tv">TV</div>
                    <div className="mount">MOUNTIN'</div>
                    <div className="man">MAN</div>
                  </div>
                </div>
                <div className="tv-stand"></div>
                <div className="mountain">🏔️</div>
                <p className="section-kicker" style={{ marginTop: 30 }}>Safe. Secure. Professional.</p>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="quick-proof">
          <div className="container quick-proof-grid">
            {["Same-week appointments", "Studs located properly", "Mounts installed securely", "Clean workspace"].map(item => (
              <span key={item}><CheckCircle2 className="icon" /> {item}</span>
            ))}
          </div>
        </section>
      </main>

      <section id="services">
        <div className="container">
          <div className="section-kicker"><Search className="icon" /> SEO Service Pages</div>
          <h2>TV mounting services built to rank locally.</h2>
          <p className="section-intro">
            Each service below is designed as its own SEO target so customers searching for specific jobs like fireplace TV mounting, cord concealment, or soundbar installation can find you.
          </p>

          <div className="card-grid">
            {services.map(({ icon: Icon, title, text, keywords, slug }) => (
              <div className="card" id={slug} key={title}>
                <Icon className="icon" style={{ width: 36, height: 36 }} />
                <h3>{title}</h3>
                <p>{text}</p>
                <p className="keyword">Targets: {keywords}</p>
              </div>
            ))}
          </div>

          <div className="two-col">
            <div className="panel">
              <h3>Why homeowners choose TV Mountin' Man</h3>
              <div className="check-list">
                <p><CheckCircle2 className="icon" /> Safe installation using the right mounting method for the wall type.</p>
                <p><CheckCircle2 className="icon" /> Secure mounting with studs located properly before drilling.</p>
                <p><CheckCircle2 className="icon" /> Professional results with clean lines, fewer visible cords, and a polished finish.</p>
                <p><CheckCircle2 className="icon" /> Local service based around Dedham and Greater Boston.</p>
              </div>
            </div>
            <div className="panel orange-panel">
              <h3>High-intent add-ons</h3>
              <div className="mini-grid">
                {["Cord concealment", "Soundbar mounting", "Mount assembly", "Dismount old TV", "Customer-supplied mount", "Outdoor mounting", "Samsung Frame TV", "Fireplace install"].map(item => (
                  <div className="mini-item" key={item}>{item}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="service-areas" className="dark-section">
        <div className="container">
          <div className="section-kicker"><Map className="icon" /> Local Landing Pages</div>
          <h2>TV mounting service areas.</h2>
          <p className="section-intro">
            These town pages are designed for local SEO searches like “TV mounting Dedham MA,” “TV installer Newton,” and “fireplace TV mounting near me.”
          </p>
          <div className="area-grid">
            {serviceAreas.map(town => (
              <div className="area-card" key={town}>
                <MapPin className="icon" />
                <h3>TV Mounting {town}, MA</h3>
                <p>Professional TV wall mounting, fireplace TV installation, soundbar mounting, and cord concealment in {town} and nearby neighborhoods.</p>
                <a href="#quote">Request a {town} quote →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery">
        <div className="container">
          <div className="section-kicker"><Camera className="icon" /> Project Gallery</div>
          <h2>Every install becomes searchable content.</h2>
          <p className="section-intro">
            Add before-and-after photos after each job. Project posts help the site rank for local searches and show customers the quality of your work.
          </p>
          <div className="card-grid">
            {galleryProjects.map(project => (
              <div className="card gallery-card" key={project.title}>
                <div className="gallery-placeholder">
                  <div><Tv className="icon" style={{ width: 60, height: 60 }} /><br/>Before / After Photo</div>
                </div>
                <div className="card-body">
                  <div className="location">{project.location}</div>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="black-section">
        <div className="container">
          <div className="section-kicker"><Star className="icon" /> Reviews</div>
          <h2>Reviews will drive local rankings.</h2>
          <p className="section-intro">
            Google reviews are one of the strongest trust signals for local service businesses. Add real reviews here as soon as they come in.
          </p>
          <div className="card-grid">
            {[
              "Professional, punctual, and meticulous. The TV looks fantastic and the cords are completely hidden.",
              "Couldn’t be happier. The install was clean, secure, and exactly where we wanted it.",
              "Great communication, careful work, and a very professional finished setup."
            ].map(review => (
              <div className="card" key={review}>
                <div className="review-stars">{[1,2,3,4,5].map(i => <Star key={i} className="icon" fill="currentColor" />)}</div>
                <p><em>“{review}”</em></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="dark-section">
        <div className="container">
          <div className="two-col" style={{ alignItems: 'end', marginTop: 0 }}>
            <div>
              <div className="section-kicker">Lead Capture Landing Page</div>
              <h2>Get a fast TV mounting quote.</h2>
              <p className="section-intro">
                Send the basic details and I’ll follow up with pricing and availability. Photos of the wall and TV area are helpful.
              </p>
            </div>
            <div className="price-grid">
              {packages.map(p => (
                <div className="card" key={p.size}>
                  <strong>{p.size}</strong>
                  <div className="price">{p.price}</div>
                  <p>{p.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="quote-grid">
            <div className="panel">
              <h3>Before you submit</h3>
              <p className="section-intro" style={{ fontSize: 16 }}>The more details you include, the faster I can give you a clear quote.</p>
              <div className="check-list">
                <p><Tv className="icon" /> TV size</p>
                <p><Hammer className="icon" /> Wall type</p>
                <p><ImageIcon className="icon" /> Photo of the wall</p>
                <p><MapPin className="icon" /> Town or neighborhood</p>
                <p><Phone className="icon" /> 781-555-0123</p>
                <p><Mail className="icon" /> markabber@gmail.com</p>
                <p><Clock className="icon" /> Nights & weekends available</p>
              </div>
            </div>

            <div className="form-card">
              {!submitted ? (
                <form action="https://formsubmit.co/markabber@gmail.com" method="POST" onSubmit={() => setSubmitted(true)}>
                  <input type="hidden" name="_subject" value="New TV Mountin' Man Lead" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="form-row">
                    <label>Name<input required name="name" placeholder="Your name" /></label>
                    <label>Phone<input required name="phone" placeholder="Best phone number" /></label>
                  </div>
                  <label>Email<input required type="email" name="email" placeholder="you@email.com" /></label>
                  <div className="form-row">
                    <label>TV Size<select name="tv_size"><option>Up to 55 inches</option><option>65–75 inches</option><option>77–85 inches</option><option>86+ inches</option><option>Not sure</option></select></label>
                    <label>Wall Type<select name="wall_type"><option>Drywall / studs</option><option>Brick</option><option>Stone</option><option>Concrete</option><option>Over fireplace</option><option>Not sure</option></select></label>
                  </div>
                  <label>Address / Town<input name="location" placeholder="Town or neighborhood" /></label>
                  <label>What do you need mounted?<textarea required name="message" rows="5" placeholder="Example: 75 inch TV on drywall above media console. I have the mount. Would also like cords hidden."></textarea></label>
                  <button className="primary-button" type="submit">Submit Quote Request</button>
                  <p className="disclaimer">This form uses FormSubmit to email leads directly to markabber@gmail.com. The first submission may require email confirmation.</p>
                </form>
              ) : (
                <div className="success">
                  <CheckCircle2 className="icon" style={{ width: 60, height: 60 }} />
                  <h3>Thanks! Your request was submitted.</h3>
                  <p>I’ll follow up with pricing and availability.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="about">
        <div className="container about-grid">
          <div className="about-avatar">
            <div className="avatar-circle"><User style={{ width: 56, height: 56 }} /></div>
            <h2 style={{ fontSize: 34, marginTop: 24 }}>Meet Mark</h2>
            <p className="section-intro" style={{ fontSize: 16 }}>Local. Practical. Careful. Built around doing one thing really well.</p>
          </div>
          <div className="about-text">
            <div className="section-kicker">About TV Mountin' Man</div>
            <h2>A specialist for homeowners who want the job done right.</h2>
            <p>Hi, I’m Mark, founder of TV Mountin' Man. I started this business because people get nervous when it comes to mounting an expensive TV, and for good reason. A 75-inch or 85-inch television can cost thousands of dollars, and homeowners want someone who treats the job carefully.</p>
            <p>I focus on one thing: mounting TVs safely, securely, and professionally. Whether it is a simple bedroom installation, a fireplace mount, a Samsung Frame TV, or a complete entertainment setup with cord concealment and a soundbar, my goal is simple: leave every customer with a TV that looks great and a job done right.</p>
            <p>When I’m not working on home projects, you’ll usually find me spending time with my family, camping, overlanding, woodworking, and enjoying the outdoors around New England.</p>
            <div className="card-grid" style={{ gridTemplateColumns: 'repeat(3,1fr)', marginTop: 24 }}>
              <div className="card"><Truck className="icon" /><h3>Local Service</h3><p>Greater Boston area</p></div>
              <div className="card"><ShieldCheck className="icon" /><h3>Careful Installs</h3><p>Built for peace of mind</p></div>
              <div className="card"><Building2 className="icon" /><h3>Professional Finish</h3><p>Clean and polished</p></div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>© 2026 TV Mountin' Man. Professional TV Installation in Greater Boston.</div>
          <div className="footer-links">
            <a href="tel:7815550123">Call</a>
            <a href="mailto:markabber@gmail.com">Email</a>
            <a href="#quote">Get Quote</a>
            <a href="#service-areas">Service Areas</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
