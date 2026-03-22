import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import LaunchBanner from './components/LaunchBanner'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Community from './pages/Community'
import Buy from './pages/Buy'
import Terms from './pages/Terms'
import Privacy from './pages/Privacy'
import Refund from './pages/Refund'
import Settings from './pages/Settings'
import Features from './pages/Features'
import Onboarding from './pages/Onboarding'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
      <ScrollToTop />
      <LaunchBanner />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/community" element={<Community />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
          <Route path="/setup" element={<Settings />} />
          <Route path="/features" element={<Features />} />
          <Route path="/onboarding" element={<Onboarding />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
