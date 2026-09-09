"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaPlay, FaPause, FaStepForward, FaStepBackward } from "react-icons/fa";
import { useEffect, useState } from "react";
import dynamic from 'next/dynamic';

const YouTube = dynamic(() => import('react-youtube'), { ssr: false });

const playlist = [
  { id: "dQw4w9WgXcQ", title: "Never Gonna Give You Up", artist: "Rick Astley" },
  { id: "oRdxUFDoQe0", title: "Beat It", artist: "Michael Jackson" },
  { id: "fJ9rUzIMcZQ", title: "Bohemian Rhapsody", artist: "Queen" },
  { id: "L_jWHffIx5E", title: "All Star", artist: "Smash Mouth" },
  { id: "1w7OgIMMRc4", title: "Sweet Child O' Mine", artist: "Guns N' Roses" },
  { id: "btPJPFnesV4", title: "Eye of the Tiger", artist: "Survivor" },
  { id: "djV11Xbc914", title: "Take On Me", artist: "a-ha" },
  { id: "T6wbugWrfLU", title: "Hotel California", artist: "Eagles" },
  { id: "hT_nvWreIhg", title: "Counting Stars", artist: "OneRepublic" },
  { id: "Zi_XLOBDo_Y", title: "Billie Jean", artist: "Michael Jackson" },
  { id: "kXYiU_JCYtU", title: "Numb", artist: "Linkin Park" },
  { id: "eVTXPUF4Oz4", title: "In The End", artist: "Linkin Park" },
  { id: "YVkUvmDQ3HY", title: "Smells Like Teen Spirit", artist: "Nirvana" },
  { id: "9bZkp7q19f0", title: "Gangnam Style", artist: "PSY" },
  { id: "3JWTaaS7LdU", title: "I Will Always Love You", artist: "Whitney Houston" },
  { id: "JGwWNGJdvx8", title: "Shape of You", artist: "Ed Sheeran" },
  { id: "RgKAFK5djSk", title: "See You Again", artist: "Wiz Khalifa ft. Charlie Puth" },
  { id: "OPf0YbXqDm0", title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars" },
  { id: "ktvTqknDobU", title: "Radioactive", artist: "Imagine Dragons" },
  { id: "SlPhMPnQ58k", title: "Demons", artist: "Imagine Dragons" },
  { id: "450p7goxZqg", title: "Someone Like You", artist: "Adele" },
  { id: "lp-EO5I60KA", title: "Thinking Out Loud", artist: "Ed Sheeran" },
  { id: "nfWlot6h_JM", title: "Shake It Off", artist: "Taylor Swift" },
  { id: "2Vv-BfVoq4g", title: "Perfect", artist: "Ed Sheeran" },
  { id: "09R8_2nJtjg", title: "Sugar", artist: "Maroon 5" },
  { id: "KQ6zr6kCPj8", title: "Party Rock Anthem", artist: "LMFAO" },
  { id: "pRpeEdMmmQ0", title: "Waka Waka", artist: "Shakira" },
  { id: "CevxZvSJLk8", title: "Roar", artist: "Katy Perry" },
  { id: "uelHwf8o7_U", title: "Love The Way You Lie", artist: "Eminem ft. Rihanna" },
  { id: "60ItHLz5WEA", title: "Faded", artist: "Alan Walker" },
  { id: "34Na4j8AVgA", title: "Starboy", artist: "The Weeknd" },
  { id: "J_ub7Etch2U", title: "Believer", artist: "Imagine Dragons" },
  { id: "fRh_vgS2dFE", title: "Sorry", artist: "Justin Bieber" },
  { id: "nfs8NYg7yQM", title: "Animals", artist: "Maroon 5" },
  { id: "LsoLEjrDogU", title: "Thunder", artist: "Imagine Dragons" },
  { id: "YQHsXMglC9A", title: "Hello", artist: "Adele" },
  { id: "gCYcHz2k5x0", title: "Closer", artist: "The Chainsmokers" },
  { id: "K0ibBPhiaG0", title: "Lean On", artist: "Major Lazer & DJ Snake" },
  { id: "UceaB4D0jpo", title: "Counting Stars (Live)", artist: "OneRepublic" },
  { id: "iS1g8G_njx8", title: "Castle on the Hill", artist: "Ed Sheeran" }
];

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Granthik Som";

  // Music Player State
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [player, setPlayer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isMobile, setIsMobile] = useState(true); // default true to avoid hydration mismatch if possible, or just update in useEffect

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && player) {
      interval = setInterval(async () => {
        try {
          const time = await player.getCurrentTime();
          const dur = await player.getDuration();
          if (time !== undefined) setCurrentTime(time);
          if (dur !== undefined) setDuration(dur);
        } catch (e) {
          // ignore
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, player]);

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = Number(e.target.value);
    setCurrentTime(time);
    if (player) {
      player.seekTo(time, true);
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const m = Math.floor(time / 60);
    const s = Math.floor(time % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  useEffect(() => {
    let i = 0;
    setText("");
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, [fullText]);

  const togglePlay = () => {
    if (!player) return;
    if (isPlaying) {
      player.pauseVideo();
    } else {
      player.playVideo();
    }
  };

  const playNext = () => {
    setCurrentIdx((prev) => {
      let nextIdx = Math.floor(Math.random() * playlist.length);
      if (nextIdx === prev && playlist.length > 1) {
        nextIdx = (nextIdx + 1) % playlist.length;
      }
      return nextIdx;
    });
  };

  const playPrev = () => {
    setCurrentIdx((prev) => {
      let nextIdx = Math.floor(Math.random() * playlist.length);
      if (nextIdx === prev && playlist.length > 1) {
        nextIdx = (nextIdx + 1) % playlist.length;
      }
      return nextIdx;
    });
  };

  useEffect(() => {
    if (player && isPlaying) {
      setTimeout(() => {
        player.playVideo();
      }, 500);
    }
  }, [currentIdx, player]);

  const currentSong = playlist[currentIdx];

  return (
    <section className="min-h-screen relative flex items-end justify-start pb-8 px-8 md:pb-16 md:px-16 pt-32 overflow-hidden">
      {/* Giant Decorative Typography */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full text-left pointer-events-none opacity-[0.04] z-0 overflow-hidden mix-blend-overlay">
        <h1 className="text-[25vw] font-black leading-[0.8] tracking-tighter text-white whitespace-nowrap ml-[-5vw]">
          ENGINEER
        </h1>
        <h1 className="text-[25vw] font-black leading-[0.8] tracking-tighter text-white whitespace-nowrap ml-[10vw]">
          DESIGNER
        </h1>
      </div>

      <div className="w-full relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-20">
        
        {/* Left Side: Bio - Asymmetrical and oversized */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="flex-1 relative z-20"
        >
          <div className="relative mb-4 md:mb-8 inline-block">
            <h1 className="text-[12vw] lg:text-[7vw] font-black leading-[0.85] tracking-tighter text-white drop-shadow-2xl">
              {text}
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-[1.5vw] h-[8vw] lg:h-[5vw] bg-pink-500 ml-2 lg:ml-4 align-bottom"
              />
            </h1>
            {/* Layered colored shadow/offset for the name */}
            <h1 className="text-[12vw] lg:text-[7vw] font-black leading-[0.85] tracking-tighter text-orange-500/30 absolute top-2 -left-3 -z-10 blur-sm pointer-events-none">
              {fullText}
            </h1>
          </div>
          
          <div className="max-w-xl relative mt-4">
            <motion.h2 
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 1.5, duration: 1 }}
              className="text-2xl md:text-4xl font-black mb-8 text-pink-50 leading-tight"
            >
              I build <span className="text-gradient">modern applications</span><br className="hidden md:block"/> & <span className="text-gradient">system utilities</span>.
            </motion.h2>
            
            <div className="flex gap-4">
              {[
                { icon: FaGithub, link: "https://github.com/GranthikSom" },
                { icon: FaLinkedin, link: "https://www.linkedin.com/in/kaun-granthik12345678/" },
                { icon: Mail, link: "mailto:granthiksom@gmail.com" }
              ].map((social, idx) => (
                <motion.a
                  key={idx}
                  initial={{ opacity: 0, scale: 0, rotate: -180 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: 2.5 + idx * 0.1, type: "spring" }}
                  whileHover={{ 
                    scale: 1.1, 
                    y: -5,
                    boxShadow: "0 10px 25px rgba(244, 114, 182, 0.3)",
                    backgroundColor: "rgba(255, 255, 255, 0.1)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white/5 backdrop-blur-md rounded-2xl transition-all border border-white/10 hover:border-pink-500"
                >
                  <social.icon className="w-6 h-6 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
        

          {/* Music Player - Responsive Slide-out */}
          <motion.div
            initial={isMobile ? { x: "120%", y: 0 } : { y: "-120%", x: 0 }}
            animate={isMobile ? { x: "calc(100% - 40px)", y: 0 } : { y: "calc(-100% + 40px)", x: 0 }}
            whileHover={isMobile ? { x: 0, y: 0 } : { y: 0, x: 0 }}
            transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
            className={`fixed z-50 w-[350px] lg:w-[400px] group hidden md:block ${isMobile ? "top-20 right-0" : "top-0 right-0"}`}
          >
            {/* Dynamic background glow based on current song */}
            <div 
              className={`absolute -inset-10 blur-[100px] opacity-30 group-hover:opacity-50 saturate-[2] transition-all duration-1000 -z-10 ${isMobile ? "rounded-l-full" : "rounded-bl-full"}`} 
              style={{ backgroundImage: `url(https://img.youtube.com/vi/${currentSong.id}/hqdefault.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
            />
            
            <div className={`glass-card relative overflow-hidden p-8 shadow-2xl flex flex-col items-center bg-black/60 backdrop-blur-3xl transition-all duration-500 hover:shadow-[0_30px_80px_rgba(0,0,0,0.8)] ${isMobile ? "rounded-l-[2.5rem] border-y border-l border-white/20 pl-12" : "rounded-bl-[2.5rem] pt-12 border-l border-b border-white/20"}`}>
              
              {/* Little tab to indicate hoverable area when hidden */}
              {isMobile ? (
                <div className="absolute top-1/2 left-2 -translate-y-1/2 w-1.5 h-12 bg-white/30 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
              ) : (
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/30 rounded-full opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
              )}

              <div className="w-full flex justify-between items-center mb-8 px-2 relative z-10">
                <span className="text-xs font-black tracking-[0.2em] text-pink-400 uppercase">Now Playing</span>
                <div className="flex gap-1.5 items-end h-4">
                  <motion.div animate={isPlaying ? { height: [4, 16, 4] } : { height: 4 }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-orange-400 rounded-sm" />
                  <motion.div animate={isPlaying ? { height: [8, 12, 8] } : { height: 4 }} transition={{ repeat: Infinity, duration: 0.5 }} className="w-1 bg-pink-500 rounded-sm" />
                  <motion.div animate={isPlaying ? { height: [4, 14, 4] } : { height: 4 }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-purple-400 rounded-sm" />
                </div>
              </div>

              <div className="absolute w-0 h-0 opacity-0 pointer-events-none overflow-hidden -z-50">
                <YouTube 
                  videoId={currentSong.id} 
                  opts={{ playerVars: { autoplay: 0 } }} 
                  onReady={(e: any) => setPlayer(e.target)}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnd={playNext}
                />
              </div>

              <motion.div 
                animate={{ rotate: isPlaying ? 360 : 0 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="w-56 h-56 rounded-full overflow-hidden mb-8 relative border-4 border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center bg-black group-hover:scale-105 transition-transform duration-500"
              >
                <img 
                  src={`https://img.youtube.com/vi/${currentSong.id}/hqdefault.jpg`} 
                  alt="Album Cover"
                  className="w-full h-full object-cover scale-150 opacity-90"
                />
                <div className="absolute inset-0 rounded-full border border-white/10" style={{ background: 'radial-gradient(circle, transparent 30%, rgba(0,0,0,0.6) 100%)' }} />
                <div className="absolute inset-2 rounded-full border border-white/10" />
                <div className="absolute inset-8 rounded-full border border-white/5" />
                
                <div className="absolute w-14 h-14 bg-zinc-900 rounded-full border-4 border-zinc-800 shadow-inner flex items-center justify-center z-10">
                  <div className="w-4 h-4 bg-black rounded-full shadow-inner" />
                </div>
              </motion.div>

              <div className="text-center mb-8 w-full px-2 relative z-10">
                <h3 className="text-2xl font-black text-white truncate mb-2 drop-shadow-lg tracking-tight">{currentSong.title}</h3>
                <p className="text-pink-200/80 font-bold text-xs tracking-[0.2em] uppercase">{currentSong.artist}</p>
              </div>

              <div className="w-full flex flex-col gap-4 mb-8 relative z-10">
                <div className="relative group/slider w-full h-2 flex items-center">
                  <input 
                    type="range" 
                    min={0} 
                    max={duration || 100} 
                    value={currentTime} 
                    onChange={handleSeek}
                    className="absolute w-full h-full opacity-0 cursor-pointer z-20"
                  />
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden z-0 backdrop-blur-sm">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 transition-all duration-300 ease-linear shadow-[0_0_10px_rgba(244,114,182,0.8)]"
                      style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                    />
                  </div>
                  <div 
                    className="absolute h-4 w-4 bg-white rounded-full shadow-[0_0_15px_rgba(255,255,255,1)] z-10 pointer-events-none transition-transform duration-200 group-hover/slider:scale-125"
                    style={{ left: `calc(${(currentTime / (duration || 1)) * 100}% - 8px)` }}
                  />
                </div>
                
                <div className="flex justify-between text-[10px] text-pink-200/80 font-bold font-mono tracking-widest">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <div className="flex items-center justify-center gap-8 w-full relative z-10">
                <motion.button 
                  whileHover={{ scale: 1.2, color: "#fff" }} whileTap={{ scale: 0.9 }}
                  onClick={playPrev} 
                  className="p-2 text-pink-200/80 transition-colors"
                >
                  <FaStepBackward size={20} />
                </motion.button>
                
                <motion.button 
                  whileHover={{ scale: 1.1, boxShadow: "0 0 30px rgba(244,114,182,0.6)" }} 
                  whileTap={{ scale: 0.95 }}
                  onClick={togglePlay} 
                  className="w-16 h-16 rounded-full bg-white text-black flex items-center justify-center shadow-2xl transition-all"
                >
                  {isPlaying ? <FaPause size={22} /> : <FaPlay size={22} className="ml-1" />}
                </motion.button>

                <motion.button 
                  whileHover={{ scale: 1.2, color: "#fff" }} whileTap={{ scale: 0.9 }}
                  onClick={playNext} 
                  className="p-2 text-pink-200/80 transition-colors"
                >
                  <FaStepForward size={20} />
                </motion.button>
              </div>
              
            </div>
          </motion.div>
      </div>
    </section>
  );
}
