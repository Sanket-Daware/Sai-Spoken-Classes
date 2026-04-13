import { useParams, Link } from 'react-router-dom'
import { CheckCircle, ChevronLeft } from 'lucide-react'
import { videosData } from '../data/videoData'
import logo from '../assets/sai-logo.png'

export default function VideoWatch() {
  const { videoId } = useParams()
  const video = videosData.find(v => v.id === videoId) || videosData[0]

  if (!video) return <div className="pt-24 text-center text-slate-900">Video not found</div>

  // Add autoplay and mute (for auto-playing) to the youtube URL
  const autoplayUrl = video.youtubeUrl.includes('?') 
    ? `${video.youtubeUrl}&autoplay=1` 
    : `${video.youtubeUrl}?autoplay=1`

  return (
    <div className="min-h-screen bg-black text-white pt-[80px]">
      {/* Persistent Back & Header Area */}
      <div className="bg-slate-900 border-b border-white/5 py-4 px-4 lg:px-8">
        <div className="container mx-auto">
          <Link 
            to="/practice-revision" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-[#803FF6] transition-all font-semibold text-sm group"
          >
            <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Learning Center
          </Link>
        </div>
      </div>

      {/* Immersive Player Area */}
      <div className="relative w-full h-[60vh] md:h-[calc(100vh-160px)] bg-black flex items-center justify-center">
        <div className={`w-full h-full ${video.type === 'short' ? 'max-w-md' : ''} mx-auto shadow-2xl overflow-hidden`}>
          <iframe 
            src={autoplayUrl}
            title={video.title}
            className="w-full h-full border-0"
            allow="autoplay; fullscreen"
            allowFullScreen
          />
        </div>
      </div>

      {/* Info Area below fold */}
      <div className="bg-[#FFF9F1] text-slate-900 py-12 px-4 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className={`space-y-4 ${video.type === 'short' ? 'max-w-md mx-auto' : ''}`}>
            <h2 className="text-2xl md:text-3xl font-bold leading-tight">{video.title}</h2>
            
            <div className="flex flex-wrap items-center justify-between gap-6 py-6 border-b border-slate-200">
              <div className="flex items-center gap-4">
                 <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center overflow-hidden shadow-lg">
                   <img src={logo} alt="Sai Spoken" className="w-full h-full object-contain p-2" />
                 </div>
                 <div>
                   <p className="font-bold flex items-center gap-2 text-xl">
                     {video.channel} <CheckCircle size={18} className="text-[#803FF6]" />
                   </p>
                   <p className="text-sm text-slate-500 font-medium">Official Learning Channel • Sai Success Spoken English</p>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
