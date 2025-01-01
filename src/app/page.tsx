import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Header'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'
import Hero from '@/components/sections/Hero'
import Mentorship from '@/components/sections/Mentorship'
import Projects from '@/components/sections/Projects'

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-dark-500">
        <Hero />
        <About/> 
        <Projects/> 
        <Mentorship/>
        <Contact/> 
        {/* Other sections will be added here */}
      </main>
      <Footer/>
    </>
  )
}