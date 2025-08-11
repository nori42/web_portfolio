import './styles/App.css';
import PageContentWrapper from './components/PageContentWrapper';
import Navigation from './components/Navigation';
import Header from './components/Header';
import { useRef } from 'react';
import PageLabel from './components/PageLabel';
import MouseLight from './components/MouseLight';
import ActivePages from './pages/ActivePages';

function App() {
  //Reference page content to propely active the links based on scroll
  const pageContentRef = new Map<string, React.RefObject<HTMLDivElement> | null>();

  for (const page of ActivePages) {
    if (page.page)
      pageContentRef.set(page.id, useRef<HTMLDivElement | null>(null));
  }

  return (
    <>
      {/* Mouse Light */}
      <MouseLight />
      <Header />
      <main>
        {/* Header */}
        <div className="flex">
          {/* Page Content */}
          <div className='flex-grow'>
            {ActivePages.map(page => (
              <PageContentWrapper id={page.id} ref={pageContentRef.get(page.id)} key={page.id}>
                {page.page != "Intro" ? <PageLabel label={page.page} /> : null}
                {page.component()}
              </PageContentWrapper>
            ))}
          </div>

          {/* Navigation & Footer Container */}
          <div className='sticky flex-col self-start justify-between hidden p-6 mb-20 border-l-2 border-gray-500 lg:flex h-[90vh] min-w-72 top-[88px]'>

            {/* Navigation */}
            <Navigation pageContentRef={pageContentRef} />
            {/* Footer */}
            <div className='text-center'>
              2025
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
