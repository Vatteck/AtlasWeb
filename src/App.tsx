import { useState } from 'react';
import { AtlasLogo } from './components/AtlasLogo';
import { AppSimulator } from './components/AppSimulator';
import { InstallGuide } from './components/InstallGuide';
import { 
  Github, 
  Layers, 
  ShieldCheck, 
  Trash2, 
  Cpu, 
  Terminal, 
  ExternalLink, 
  GitBranch, 
  Heart, 
  HardDrive,
  Copy,
  Check,
  Package,
  BookOpen,
  ArrowRight,
  Sparkles,
  Star
} from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [copied, setCopied] = useState(false);

  // Quick action clipboard trigger
  const handleCopyInstall = () => {
    navigator.clipboard.writeText('yay -S atlas-pm-git');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans relative antialiased selection:bg-atlas-red selection:text-white">
      
      {/* Background radial accent halos for moody visual styling */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-gradient-to-b from-[#4a0d0d]/10 via-transparent to-transparent pointer-events-none select-none blur-3xl z-0" />
      <div className="absolute top-[1200px] right-0 w-[400px] h-[400px] bg-indigo-950/5 pointer-events-none select-none blur-3xl z-0" />
      <div className="absolute bottom-[200px] left-0 w-[450px] h-[450px] bg-red-950/5 pointer-events-none select-none blur-3xl z-0" />

      {/* --- FLOATING HEADER NAVIGATION --- */}
      <header className="sticky top-0 bg-[#07090e]/80 backdrop-blur-md border-b border-slate-900/60 z-20 select-none">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          
          <div className="flex items-center gap-2.5">
            <AtlasLogo size={32} />
            <div className="flex flex-col">
              <span className="font-display font-bold text-white tracking-widest text-[15px] leading-tight select-none">ATLAS</span>
              <span className="text-[9px] font-mono font-semibold text-rose-500/80 leading-tight">GRAPHICAL PACKAGE MANAGER</span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs font-semibold text-slate-300">
            <a href="#simulator" className="hover:text-white transition-colors">Interactive Demo</a>
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#installation" className="hover:text-white transition-colors">Install Guide</a>
            <a href="https://github.com/Vatteck/atlas" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <span>Repository</span>
              <ExternalLink size={11} className="text-slate-500" />
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href="https://github.com/Vatteck/atlas" 
              target="_blank" 
              rel="noreferrer"
              className="bg-[#121622] hover:bg-[#1a2030] text-slate-200 border border-slate-800 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors font-medium cursor-pointer"
            >
              <Github size={13} />
              <span>GitHub Star</span>
            </a>
            
            <a 
              href="#installation" 
              className="bg-atlas-red hover:bg-rose-700 text-white text-xs px-3.5 py-1.5 rounded-lg font-semibold transition-all transform hover:scale-[1.03] shadow-md shadow-red-950/20"
            >
              Download
            </a>
          </div>

        </div>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative z-10 max-w-6xl mx-auto px-4 pt-12 pb-16 text-center space-y-8 select-none">
        
        {/* Soft Release version pill heading */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3 py-1 bg-rose-950/25 border border-rose-900/40 rounded-full text-xs font-semibold tracking-wide text-rose-300 mx-auto select-none"
        >
          <Sparkles size={12} className="text-rose-450 animate-pulse" />
          <span>Active Community Build: v0.10.7 (Arch-Focused)</span>
        </motion.div>

        {/* Dynamic Display Slogan Heading */}
        <div className="space-y-4 max-w-3xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
          >
            The Ultimate Graphical <span className="text-transparent bg-clip-text bg-gradient-to-r from-atlas-red-bright via-pink-500 to-rose-400">Package Manager</span> for Arch Linux
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-sm sm:text-base text-slate-400 font-sans tracking-wide leading-relaxed"
          >
            Search, install, update, downgrade, and remove software across <strong>Arch Repos, the AUR, Flatpaks, and AppImages</strong>. Built as a community fork of <em>bauh</em> around a modular pywebview interface and lazy-loaded engine.
          </motion.p>
        </div>

        {/* Big centered visual emblem showcasing craftsmanship */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 80, delay: 0.25 }}
          className="flex justify-center"
        >
          <AtlasLogo size={140} withGlow={true} />
        </motion.div>

        {/* Dynamic inline CLI install command wrapper */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-md mx-auto space-y-2 select-text"
        >
          <div className="bg-[#111420] border border-slate-800 rounded-xl p-2.5 flex items-center justify-between gap-4 justify-between font-mono text-xs sm:text-sm shadow-xl select-none">
            <div className="flex items-center gap-2.5 font-mono text-slate-200 pl-1.5">
              <Terminal size={14} className="text-rose-500 font-mono" />
              <span className="font-mono text-rose-350 select-text">yay -S <strong className="font-mono text-white font-semibold">atlas-pm-git</strong></span>
            </div>
            
            <button
              onClick={handleCopyInstall}
              className="px-3 py-1.5 rounded-lg text-xs bg-[#07090e] text-slate-400 hover:text-white border border-slate-850 hover:border-slate-700 transition-all font-semibold flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              {copied ? (
                <>
                  <Check size={12} className="text-emerald-400" />
                  <span className="text-emerald-400 font-mono">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={12} />
                  <span className="font-sans">Copy</span>
                </>
              )}
            </button>
          </div>
          <span className="text-[10px] text-slate-500 font-mono text-center block">Instantly compiled and packaged locally through standard Arch build chains.</span>
        </motion.div>

        {/* Feature badge summaries under emblem */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400 select-none pb-4"
        >
          <span className="px-3 py-1 bg-slate-900/60 border border-slate-850 rounded-lg flex items-center gap-1.5">
            <Package size={13} className="text-sky-400" />
            <span>Arch Repositories via pacman</span>
          </span>
          <span className="px-3 py-1 bg-slate-900/60 border border-slate-850 rounded-lg flex items-center gap-1.5">
            <Cpu size={13} className="text-yellow-405" />
            <span>Arch User Repository (AUR)</span>
          </span>
          <span className="px-3 py-1 bg-slate-900/60 border border-slate-850 rounded-lg flex items-center gap-1.5">
            <Layers size={13} className="text-teal-400" />
            <span>Flatpak Flathub</span>
          </span>
          <span className="px-3 py-1 bg-slate-900/60 border border-slate-850 rounded-lg flex items-center gap-1.5">
            <ArrowRight size={13} className="text-indigo-400" />
            <span>AppImage Integrations</span>
          </span>
        </motion.div>

      </section>

      {/* --- SECTION: LIVE ATALS SIMULATOR DEMO --- */}
      <section id="simulator" className="border-t border-slate-900/50 bg-gradient-to-b from-[#080b12] to-[#05060b] py-16 text-slate-100 z-10 relative">
        <div className="max-w-6xl mx-auto px-4 space-y-8">
          
          <div className="text-center space-y-2 select-none">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight">Try the Live Atlas Dashboard Experience</h2>
            <p className="text-xs sm:text-sm text-slate-405 max-w-xl mx-auto leading-relaxed">
              We reconstructed a fully functioning web simulator of Atlas's layout. Try clicking package source pill switches, triggers simulated password checks, compile AUR dependencies, or clean storage space.
            </p>
          </div>

          {/* Interactive mounted simulation console app */}
          <AppSimulator />

        </div>
      </section>

      {/* --- SECTION: BENTO GRID HIGHLIGHTS/FEATURES --- */}
      <section id="features" className="py-20 bg-[#07090e] relative z-10">
        <div className="max-w-6xl mx-auto px-4 space-y-12">
          
          <div className="text-center space-y-2 select-none">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight">Coded for Speed, Hardened for Security</h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              How Atlas addresses classic package problems with elegant designs and architecture.
            </p>
          </div>

          {/* Bento grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            
            {/* Box 1: Unified source pill switcher */}
            <div className="p-5 bg-[#111420] border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-2 bg-indigo-950/20 border border-indigo-900/40 text-indigo-400 rounded-xl w-fit">
                  <Layers size={18} />
                </div>
                <h3 className="font-display font-semibold text-white text-sm">One Card, Every Source</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  When a program is listed across multiple libraries (e.g. VLC on pacman and flatpak), Atlas automatically bundles them under a single card. Pivot between streams inside one interface.
                </p>
              </div>
              <div className="bg-[#070a0f] text-slate-400 p-2 border border-slate-850 rounded-xl flex items-center justify-between text-[10px] font-mono select-none">
                <span className="font-bold">vlc-player</span>
                <div className="flex gap-1">
                  <span className="px-1.5 py-0.5 bg-atlas-red text-white text-[8px] rounded uppercase font-semibold">Arch</span>
                  <span className="px-1.5 py-0.5 bg-slate-900 text-slate-500 text-[8px] rounded uppercase">AUR</span>
                  <span className="px-1.5 py-0.5 bg-slate-900 text-slate-500 text-[8px] rounded uppercase">Flat</span>
                </div>
              </div>
            </div>

            {/* Box 2: Timeshift snap system protections */}
            <div className="p-5 bg-[#111420] border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-2 bg-rose-950/20 border border-rose-900/40 text-rose-400 rounded-xl w-fit">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-display font-semibold text-white text-sm">Safe System Snapshots</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Atlas integrates with Timeshift hooks. It automatically triggers backups and system restore points before installing or upgrading package binaries, removing fears of broken system upgrades.
                </p>
              </div>
              <div className="bg-[#070a0f] border border-slate-850 p-2.5 rounded-xl text-[10px] font-mono flex items-center justify-between text-rose-400 select-none">
                <div className="flex items-center gap-1">
                  <Terminal size={11} />
                  <span>Timeshift Hook trigger</span>
                </div>
                <span className="text-emerald-400 text-[9px] font-bold">ACTIVE OK</span>
              </div>
            </div>

            {/* Box 3: Space Orphans remoter */}
            <div className="p-5 bg-[#111420] border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-2 bg-emerald-950/20 border border-emerald-900/40 text-emerald-400 rounded-xl w-fit">
                  <Trash2 size={18} />
                </div>
                <h3 className="font-display font-semibold text-white text-sm">Prune Unused footprint Caches</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Avoid terminal bloat. The Disk storage views pinpoint pacman program package cache files, redundant Flatpak language files and orphan package dependencies, freeing Gigabytes of space in a sweep.
                </p>
              </div>
              <div className="bg-[#070a0f] border border-slate-850 p-2.5 rounded-xl text-[10px] font-mono flex items-center justify-between text-slate-350 select-none">
                <span>Orphan packages footprint</span>
                <span className="text-rose-455 font-bold">1.2 GB saved</span>
              </div>
            </div>

            {/* Box 4: Architecture logic pure python */}
            <div className="p-5 bg-[#111420] border border-slate-800 rounded-2xl md:col-span-2 flex sm:flex-row flex-col justify-between items-start gap-4">
              <div className="space-y-2 max-w-md">
                <div className="p-2 bg-sky-950/20 border border-sky-900/40 text-sky-450 rounded-xl w-fit">
                  <Cpu size={18} />
                </div>
                <h3 className="font-display font-semibold text-white text-sm">Flexible pywebview Backend & Lazy Engines</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  By utilizing a lightweight Python module framework calling system wrappers directly and bridging them through a pywebview WebKit container, Atlas achieves incredibly quick renders and fast indexing without heavy backend runtimes or bloated memory leaks.
                </p>
              </div>
              <div className="bg-slate-950 border border-slate-900 p-3 rounded-2xl font-mono text-[11px] leading-relaxed text-slate-500 w-full sm:w-auto shrink-0 select-none">
                <span className="text-indigo-400 font-bold block mb-1"># architecture config</span>
                <span>atlas/gems/pacman <span className="text-slate-600 font-semibold">• core</span></span><br />
                <span>atlas/gems/aur <span className="text-slate-600 font-semibold">• core</span></span><br />
                <span>atlas/gems/flatpak <span className="text-slate-600 font-semibold">• core</span></span><br />
                <span>atlas/view/webview <span className="text-slate-605 font-bold font-semibold">• pywebview</span></span>
              </div>
            </div>

            {/* Box 5: AUR community metrics */}
            <div className="p-5 bg-[#111420] border border-slate-800 rounded-2xl flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="p-2 bg-yellow-950/25 border border-yellow-900/50 text-yellow-405 rounded-xl w-fit">
                  <Star size={16} className="fill-yellow-500/10" />
                </div>
                <h3 className="font-display font-semibold text-white text-sm">Arch & AUR stay Separated</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Because AUR programs are user-maintained, Atlas distinctly calls out community AUR applications, highlights flags from upstream, prints their community votes rating, and displays their specific compilation type.
                </p>
              </div>
              <div className="flex gap-1.5 select-none font-mono text-[9px]">
                <span className="px-2 py-0.5 bg-rose-950/20 border border-[#9b1c1c]/40 text-rose-400 rounded-md font-semibold">OUT OF DATE</span>
                <span className="px-2 py-0.5 bg-blue-950 border border-blue-900/40 text-blue-400 rounded-md font-semibold">VOTES: 114</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* --- SECTION: INSTALLATION GUIDES --- */}
      <section id="installation" className="py-16 bg-gradient-to-b from-[#07090e] to-[#040609] relative z-10">
        <div className="max-w-4xl mx-auto px-4 space-y-8">
          
          <div className="text-center space-y-2 select-none">
            <h2 className="font-display font-semibold text-2xl sm:text-3xl text-white tracking-tight">Installation Guide</h2>
            <p className="text-xs sm:text-sm text-slate-404 max-w-md mx-auto leading-relaxed">
              Standard compilation workflows for the Arch build chain, makepkg compilers, or running raw Python codes directly.
            </p>
          </div>

          <InstallGuide />

        </div>
      </section>

      {/* --- FLOATING / STANDARD FOOTER LAYOUT --- */}
      <footer className="mt-auto border-t border-slate-900/80 bg-[#05070a] py-10 relative z-10 select-none">
        <div className="max-w-6xl mx-auto px-4 flex sm:flex-row flex-col justify-between items-center gap-6 text-xs text-slate-500">
          
          <div className="flex items-center gap-3">
            <AtlasLogo size={28} />
            <div className="flex flex-col">
              <span className="font-display font-bold text-slate-300 tracking-wider text-xs">ATLAS</span>
              <span className="text-[10px] text-slate-600 font-mono">zlib/libpng software license</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-center text-slate-400 bg-slate-900/45 px-3 py-1.5 rounded-xl border border-slate-850">
            <span>Community fork of </span>
            <a href="https://github.com/vinifmor/bauh" target="_blank" rel="noreferrer" className="text-white hover:underline flex items-center gap-0.5 font-medium">
              <span>bauh</span>
              <ExternalLink size={10} className="text-slate-500" />
            </a>
            <span>• Built for Arch & CachyOS with</span>
            <Heart size={10} className="fill-rose-500 text-rose-500 inline px-0.2" />
          </div>

          <div className="flex gap-4 font-mono text-[11px] text-slate-600">
            <a href="https://github.com/Vatteck/atlas" target="_blank" rel="noreferrer" className="hover:text-slate-400 transition-colors">Github</a>
            <span>•</span>
            <a href="https://github.com/Vatteck/atlas/blob/master/LICENSE" target="_blank" rel="noreferrer" className="hover:text-slate-400 transition-colors">License</a>
            <span>•</span>
            <a href="https://github.com/Vatteck/atlas/issues" target="_blank" rel="noreferrer" className="hover:text-slate-400 transition-colors">Issues</a>
          </div>

        </div>
      </footer>

    </div>
  );
}
