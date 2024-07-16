import './styles/App.css';
import PageContentWrapper from './components/PageContentWrapper';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { useRef } from 'react';
import Intro from './pages/Intro';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Project';
import PageLabel from './components/PageLabel';
import Experiences from './pages/Experiences';
import Resume from './pages/Resume';
import MouseLight from './components/MouseLight';

function App() {
  //Reference page content to propely active the links based on scroll
  const pageContentRef = {
    about:useRef<HTMLDivElement>(null),
    skills:useRef<HTMLDivElement>(null),
    projects:useRef<HTMLDivElement>(null),
    experiences:useRef<HTMLDivElement>(null),
    resume:useRef<HTMLDivElement>(null)
  }

  return (
    <>
      {/* Mouse Light */}
      <MouseLight/>
      <main>
        {/* Header */}
        <Header/>

        <div className="flex">
            {/* Page Content */}
            <div className='flex-grow'>
              <PageContentWrapper id="intro" >
                <Intro />
              </PageContentWrapper>
              <PageContentWrapper id="about"  ref={pageContentRef.about}>
                <PageLabel label="About"/>
                <About />
              </PageContentWrapper>

              <PageContentWrapper id="skills" ref={pageContentRef.skills}>
                <PageLabel label="Skills"/>
                <Skills />
              </PageContentWrapper>

              <PageContentWrapper id="projects" ref={pageContentRef.projects}>
                <PageLabel label="Projects"/>
                <Projects />
              </PageContentWrapper>

              <PageContentWrapper id="experiences" ref={pageContentRef.experiences}>
                <PageLabel label="Experiences"/>
                <Experiences />
              </PageContentWrapper>

              <PageContentWrapper id="resume" ref={pageContentRef.resume}>
                <PageLabel label="Resume"/>
                <Resume />
              </PageContentWrapper>
            </div>

            {/* Navigation & Footer Container */}
            <div className='sticky flex-col self-start justify-between hidden p-6 mb-20 border-l-2 border-gray-500 lg:flex h-[90vh] min-w-72 top-[88px]'>
              
                {/* Navigation */}
                <Navigation pageContentRef={pageContentRef}/>
                {/* Footer */}
                <div className='text-center'>
                    2024
                  <div className='text-xs'>
                    Built with Tailwind and React 
                  </div>
                </div>
            </div>
        </div>
      </main>
    </>
  )
}

export default App
