import Footer from '@/components/Footer/Footer.js'
import About from '../components/About/About.js'

export default function Home() {
  return (
    <main className="flex justify-center w-full min-h-screen p-24 font-mono text-sm"> 
    <div className="z-10 max-w-5xl">
      <About></About>
      <Footer></Footer>
    </div>
    </main>
  )
}
