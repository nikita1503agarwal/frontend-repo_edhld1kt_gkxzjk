import { useRef } from 'react'
import Hero from './components/Hero'
import TemplateBuilder from './components/TemplateBuilder'
import GuideViewer from './components/GuideViewer'

function App() {
  const builderRef = useRef(null)

  const scrollToBuilder = () => {
    builderRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Hero onGetStarted={scrollToBuilder} />

      <div ref={builderRef}>
        <TemplateBuilder onGenerateGuide={() => {}} />
      </div>

      <GuideViewer />

      <footer className="border-t border-slate-800 bg-slate-950 py-10">
        <div className="mx-auto max-w-6xl px-6 text-center text-slate-400 text-sm">
          Learn by building. Follow the steps for your favorite tool, then tweak the template to make it yours.
        </div>
      </footer>
    </div>
  )
}

export default App
