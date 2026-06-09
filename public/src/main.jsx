
import React from 'react'
import { createRoot } from 'react-dom/client'
import { ShieldCheck, Lock, Star, Phone, Mail, MapPin, Flame, Cable, Volume2, CloudSun, Wrench, Monitor, ChevronRight, CheckCircle2 } from 'lucide-react'
import './styles.css'

const phoneDisplay = '781-927-9069'
const phoneHref = 'tel:17819279069'
const email = 'markabber@gmail.com'

const services = [
  { icon: Monitor, title: 'TV Wall Mounting', text: 'Securely mounted for the perfect viewing experience.', pricing: 'Standard TV mounting starts around $150–$250 depending on TV size and wall type.' },
  { icon: Flame, title: 'Fireplace TV Mounting', text: 'Specialized mounting above fireplaces. Safe & secure.', pricing: 'Fireplace mounting commonly starts around $250–$450+ depending on wall material, TV size and mount type.' },
  { icon: Cable, title: 'Cord Concealment', text: 'Hide wires in-wall or with raceways for a clean, professional look.', pricing: 'Cord concealment typically ranges from $75–$200 depending on the setup.' },
  { icon: Volume2, title: 'Soundbar Mounting', text: 'Perfectly placed sound for the best home theater setup.', pricing: 'Soundbar installation typically ranges from $75–$150 when added to a TV mounting project.' },
  { icon: CloudSun, title: 'Outdoor TV Installation', text: 'Weather-aware mounting for patios, decks and porches.', pricing: 'Outdoor TV mounting and enclosure installs vary based on location, enclosure and cable protection needs.' },
  { icon: Wrench, title: 'Dismount & Remount', text: "Moving or upgrading? We'll move it safely and professionally.", pricing: 'Dismount and remount services typically range from $150–$350.' }
]

const towns = [
  ['Dedham, MA', 'Professional TV mounting services in Dedham.'],
  ['Westwood, MA', 'Expert TV installation in Westwood.'],
  ['Needham, MA', 'TV wall mounting in Needham.'],
  ['Newton, MA', 'Professional TV mounting in Newton.'],
  ['Wellesley, MA', 'TV installation services in Wellesley.'],
  ['Norwood, MA', 'TV mounting specialist in Norwood.'],
  ['Canton, MA', 'TV wall mounting in Canton.'],
  ['Walpole, MA', 'Expert TV installation in Walpole.'],
  ['Medfield, MA', 'Professional TV mounting in Medfield.'],
  ['Milton, MA', 'TV installation services in Milton.'],
  ['Brookline, MA', 'TV mounting services in Brookline.'],
  ['Boston, MA', 'Professional TV mounting in Boston.']
]

const reviews = [
  { name: 'Nikia B.', town: 'Quincy, MA', text: 'Did a great job mounting my 70 inch TV in less than an hour. Great service and professional.' },
  { name: 'Bianca H.', town: 'Dorchester, MA', text: 'I had a great experience mounting my 3 TVs. He was professional, arrived on time, and completed the job quickly and neatly. The TVs are securely mounted and positioned perfectly.' },
  { name: 'Greg S.', town: 'Arlington, MA', text: 'I had a great experience working with Mark for my TV installation. He was professional, punctual, and did an excellent job mounting and setting everything up.' }
]

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#home" aria-label="TV Mountin' Man Home">
        <span>TV</span><strong>MOUNTIN'</strong><em>MAN</em>
      </a>
      <nav aria-label="Main navigation">
        <a href="#home">Home</a><a href="#services">Services</a><a href="#service-areas">Service Areas</a><a href="#reviews">Reviews</a><a href="#quote">Contact</a>
      </nav>
      <a className="button primary header-button" href="#quote">Submit a Request <ChevronRight size={18}/></a>
    </header>
  )
}

function MascotGraphic() {
  return (
    <div className="mascot" aria-label="TV Mountin' Man mascot holding TV">
      <div className="mascot-tv"><span>TV</span><strong>MOUNTIN'</strong><em>MAN</em></div>
      <div className="mascot-ring"></div><div className="mountain mountain-one"></div><div className="mountain mountain-two"></div><div className="pine pine-one"></div><div className="pine pine-two"></div>
      <div className="person"><div className="head"></div><div className="cap"></div><div className="torso"></div><div className="arm arm-left"></div><div className="arm arm-right"></div><div className="leg leg-left"></div><div className="leg leg-right"></div><div className="boot boot-left"></div><div className="boot boot-right"></div></div>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-art"><MascotGraphic /></div>
        <div className="hero-copy">
          <p className="eyebrow">Safe. Level. Secure.</p>
          <h1>Professional <span>TV Mounting</span> Services</h1>
          <p>From wall mounting to fireplace installs, soundbars, Samsung Frame TVs, outdoor TVs and cord concealment, TV Mountin' Man keeps your setup clean, secure and built to impress.</p>
          <div className="hero-badges"><span><ShieldCheck/> Safe</span><span><CheckCircle2/> Level</span><span><Lock/> Secure</span></div>
          <div className="hero-actions"><a className="button primary" href="#quote">Get a Free Quote <ChevronRight size={18}/></a><a className="button secondary" href="#services">View Services</a></div>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section className="services section-light" id="services">
      <div className="section-title"><h2>Professional <span>TV Mounting</span> Services</h2><p>TV mounting, fireplace installs, cord concealment, soundbars, outdoor installations and dismount/remount help.</p></div>
      <div className="services-grid">{services.map(({ icon: Icon, title, text }) => <article className="service-card" key={title}><div className="service-icon"><Icon size={54}/></div><h3>{title}</h3><p>{text}</p><a href="#quote">Learn More <ChevronRight size={15}/></a></article>)}</div>
    </section>
  )
}

function ServiceAreasQuote() {
  return (
    <section className="areas-quote">
      <div className="areas" id="service-areas">
        <h2>Serving <span>Greater Boston</span> and Beyond</h2>
        <p>TV Mountin' Man proudly provides professional TV mounting services throughout Dedham and communities within approximately a 20-mile radius. Whether you're in Boston, Brookline, Quincy, Needham, Newton, Wellesley, Norwood, Canton, Walpole, Milton, Westwood, Arlington, Dorchester or the surrounding area, we're ready to help.</p>
        <div className="town-grid">{towns.map(([town, desc]) => <article className="town-card" key={town}><h3>{town}</h3><p>{desc}</p></article>)}</div>
        <a className="button secondary town-button" href="#quote">View All Service Areas</a>
      </div>
      <div className="quote-panel" id="quote">
        <h2>Get a <span>Free Quote</span> Today</h2><p>Fast response. No obligation.</p>
        <form action="https://formsubmit.co/markabber@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="New TV Mountin' Man Quote Request" /><input type="hidden" name="_captcha" value="false" /><input type="hidden" name="_template" value="table" />
          <label><span>Full Name</span><input name="name" placeholder="Full Name" required /></label>
          <label><span>Phone Number</span><input name="phone" placeholder="Phone Number" required /></label>
          <label><span>Email</span><input type="email" name="email" placeholder="Email Address" required /></label>
          <label><span>TV Size</span><select name="tv_size" required defaultValue=""><option value="" disabled>TV Size (inches)</option><option>Less than 59&quot;</option><option>60&quot;+</option><option>70&quot;+</option><option>80&quot;+</option><option>90&quot;+</option></select></label>
          <label><span>Wall Type</span><select name="wall_type" defaultValue=""><option value="" disabled>Wall Type</option><option>Drywall / studs</option><option>Brick</option><option>Stone</option><option>Concrete</option><option>Above fireplace</option><option>Not sure</option></select></label>
          <label><span>Project Details</span><textarea name="message" placeholder="Tell us about your TV, wall type, mount, and preferred timing..." rows="4"></textarea></label>
          <button className="button primary form-button" type="submit">Submit Request <ChevronRight size={18}/></button>
          <p className="privacy"><Lock size={14}/> We respect your privacy. Your information will never be shared.</p>
        </form>
      </div>
    </section>
  )
}

function Reviews() {
  return (
    <section className="reviews section-light" id="reviews">
      <div className="section-title"><h2>Real <span>5-Star</span> Reviews</h2><p>Actual customer feedback from recent TV mounting and home repair jobs.</p></div>
      <div className="review-grid">{reviews.map(r => <article className="review-card" key={r.name}><div className="stars">★★★★★</div><p>“{r.text}”</p><strong>— {r.name}</strong><span>{r.town}</span></article>)}</div>
    </section>
  )
}

function PricingGuide() {
  return (
    <section className="pricing">
      <div className="section-title"><h2>TV Mounting <span>Pricing Guide</span></h2><p>Every installation is different, but these ranges help customers understand what to expect.</p></div>
      <div className="pricing-grid">{services.map(s => <article key={s.title}><h3>{s.title}</h3><p>{s.pricing}</p></article>)}</div>
      <p className="pricing-note">For TVs larger than 75", TV Mountin' Man may require a second person to safely lift and position the television. Text photos of your TV, wall and mounting location to <a href={phoneHref}>{phoneDisplay}</a> for a fast, accurate quote.</p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand"><div className="mini-logo"><span>TV</span><strong>MOUNTIN'</strong><em>MAN</em></div></div>
      <div className="footer-middle"><h2>Safe. Secure. Professional.</h2><p className="script">TV Mounting Done Right.</p><a href={phoneHref}><Phone size={18}/> {phoneDisplay}</a><a href={`mailto:${email}`}><Mail size={18}/> {email}</a><span><MapPin size={18}/> Dedham, MA</span></div>
      <div className="footer-area"><h3>Proudly Serving <span>Greater Boston</span> and surrounding areas!</h3><p>Dedham • Westwood • Needham • Newton • Wellesley • Norwood • Canton • Walpole • Medfield • Milton • Brookline • Boston • Quincy • Dorchester • Arlington</p></div>
      <div className="copyright">© 2026 TV Mountin' Man. All Rights Reserved.</div>
    </footer>
  )
}

function App() { return <><Header/><main><Hero/><Services/><ServiceAreasQuote/><Reviews/><PricingGuide/></main><Footer/></> }
createRoot(document.getElementById('root')).render(<App />)
