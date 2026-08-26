
interface NavigationItem {
  label: string
  href: string
}
const navigationItems: NavigationItem[] = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certs", href: "#certs" },
  { label: "Contact", href: "#contact" },
]
const App = () => {
  return (
    <div>
      <nav>
        <ul>
          {navigationItems.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <h1>Portafolio website</h1>
        <section id="about"><h2>About</h2></section>
          <section id="education"><h2>Education</h2></section>
            <section id="experience"><h2>Experience</h2></section>
              <section id="projects"><h2>Projects</h2></section>
                <section id="certs"><h2>Certifications</h2> </section>
                  <section id="contact"><h2>Contact information</h2></section>
                  
      </main>
    </div>
  );
}

export default App
