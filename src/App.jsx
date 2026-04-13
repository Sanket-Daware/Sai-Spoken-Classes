import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import PageWrapper from './components/layout/PageWrapper'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Faculty from './pages/Faculty'
import StudentsSuccess from './pages/StudentsSuccess'
import PracticeRevision from './pages/PracticeRevision'
import VideoWatch from './pages/VideoWatch' // New Page
import LiveSessions from './pages/LiveSessions'
import MediaCenter from './pages/MediaCenter'
import Franchise from './pages/Franchise'
import FAQ from './pages/FAQ'
import BlogsNews from './pages/BlogsNews'
import JoinFormModal from './components/forms/JoinFormModal'
import { useState } from 'react'

function App() {
  const location = useLocation();
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar onOpenJoinModal={() => setIsJoinModalOpen(true)} />
      <main className="grow">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/courses" element={<PageWrapper><Courses onOpenJoinModal={() => setIsJoinModalOpen(true)} /></PageWrapper>} />
            <Route path="/faculty" element={<PageWrapper><Faculty /></PageWrapper>} />
            <Route path="/students-success" element={<PageWrapper><StudentsSuccess /></PageWrapper>} />
            <Route path="/practice-revision" element={<PageWrapper><PracticeRevision /></PageWrapper>} />
            <Route path="/practice-revision/watch/:videoId" element={<PageWrapper><VideoWatch /></PageWrapper>} />
            <Route path="/live-sessions" element={<PageWrapper><LiveSessions /></PageWrapper>} />
            <Route path="/media-center" element={<PageWrapper><MediaCenter /></PageWrapper>} />
            <Route path="/franchise" element={<PageWrapper><Franchise /></PageWrapper>} />
            <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} />
            <Route path="/blogs-news" element={<PageWrapper><BlogsNews /></PageWrapper>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <JoinFormModal isOpen={isJoinModalOpen} onClose={() => setIsJoinModalOpen(false)} />
    </div>
  )
}

export default App
