import {
  Billing,
  Business,
  CardDeal,
  Clients,
  CTA,
  Footer,
  Hero,
  Navbar,
  Stats,
  Testimonials,
} from "./components";
import "./style.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
