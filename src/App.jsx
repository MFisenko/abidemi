import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import ActionFeatures from './components/ActionFeatures'
import About from './components/About'
import Programs from './components/Programs'
import SuccessHighlights from './components/SuccessHighlights'
import GetHelp from './components/GetHelp'
import Donate from './components/Donate'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ActionFeatures />
        <About />
        <Programs />
        <SuccessHighlights />
        <GetHelp />
        <Donate />
      </main>
      <Footer />
    </>
  )
}
