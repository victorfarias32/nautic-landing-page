"use client";
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { 
  Zap, 
  BarChart3, 
  CheckCircle2, 
  ArrowRight, 
  Menu, 
  X, 
  FileSpreadsheet, 
  FileText, 
  MonitorCheck, 
  AlertTriangle, 
  PieChart, 
  TrendingUp, 
  Users, 
  ShieldCheck, 
  Mail, 
  Phone,
  Database,
  Layers,
  Moon,
  Sun
} from 'lucide-react';

const Trident = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 2v20" />
    <path d="M5 6v3a7 7 0 0 0 14 0V6" />
    <path d="M5 4v2" />
    <path d="M19 4v2" />
    <path d="M12 2l-2 2" />
    <path d="M12 2l2 2" />
  </svg>
);

interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

interface DashboardItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

const NAV_LINKS = [
  { label: 'Missão', href: '#missao' },
  { label: 'Diferenciais', href: '#diferenciais' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Dashboards', href: '#dashboards' },
];

const DIFFERENTIALS = [
  {
    title: "Experiência Prática",
    desc: "Atuação comprovada em escritórios de contabilidade e grandes empresas.",
    icon: <CheckCircle2 className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  },
  {
    title: "Contabilidade + Tech",
    desc: "Unimos o rigor contábil com a inovação tecnológica.",
    icon: <Trident className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  },
  {
    title: "Foco em Resultados",
    desc: "Redução de erros e aumento real de produtividade.",
    icon: <TrendingUp className="w-6 h-6 text-blue-600 dark:text-blue-400" />
  }
];

const SERVICES: ServiceItem[] = [
  { title: "Integração de Planilhas", desc: "Centralize dados de clientes automaticamente.", icon: <FileSpreadsheet /> },
  { title: "Faturas ENEL via API", desc: "Download e acompanhamento automático.", icon: <Zap /> },
  { title: "Escrituração de NFs", desc: "Automação fiscal em ERPs.", icon: <FileText /> },
  { title: "Monitoramento DETRAN", desc: "Acompanhamento de multas.", icon: <MonitorCheck /> },
  { title: "Alertas Fiscais", desc: "Notificações de impostos e obrigações.", icon: <AlertTriangle /> },
  { title: "Relatórios de Divergências", desc: "Identificação de inconsistências.", icon: <ShieldCheck /> },
  { title: "Envio de Relatórios", desc: "Automação para clientes.", icon: <Mail /> },
  { title: "Consultoria de Processos", desc: "Mapeamento e otimização de fluxos.", icon: <Layers /> },
];

const DASHBOARDS: DashboardItem[] = [
  { title: "Fluxo de Caixa", desc: "Entradas, saídas e previsões.", icon: <BarChart3 /> },
  { title: "Desempenho Tributário", desc: "Análise de carga fiscal.", icon: <PieChart /> },
  { title: "Resultados Contábeis", desc: "DRE e Balanço interativos.", icon: <FileText /> },
  { title: "Rentabilidade Cliente", desc: "Lucratividade real.", icon: <Users /> },
  { title: "Produtividade", desc: "Monitoramento de equipe.", icon: <Trident /> },
  { title: "Compliance", desc: "Risco fiscal e certidões.", icon: <ShieldCheck /> },
  { title: "Gestão de Passivos", desc: "Controle de multas e juros.", icon: <AlertTriangle /> },
  { title: "Benchmarking", desc: "Comparativo entre filiais.", icon: <TrendingUp /> },
  { title: "Churn & Growth", desc: "Métricas de crescimento.", icon: <Database /> },
];

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: custom * 0.1 }
  })
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};


const SectionTitle = ({ title, subtitle, isDark, light = false }: { title: string, subtitle?: boolean, isDark: boolean, light?: boolean }) => (
  <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto px-4">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-4xl font-bold mb-4 tracking-tighter ${light ? 'text-white' : (isDark ? 'text-white' : 'text-slate-900')}`}
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: 60 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`h-1 mx-auto rounded-full ${light ? 'bg-blue-400' : 'bg-blue-600'}`} 
      />
    )}
  </div>
);


export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const bgMain = darkMode ? 'bg-slate-950' : 'bg-slate-50';
  const bgSection = darkMode ? 'bg-slate-900' : 'bg-white';
  const bgSectionAlt = darkMode ? 'bg-slate-950' : 'bg-slate-50';
  const textMain = darkMode ? 'text-slate-300' : 'text-slate-600';
  const textTitle = darkMode ? 'text-white' : 'text-slate-900';
  const cardBg = darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100';

  return (
    <div className={`min-h-screen font-sans antialiased selection:bg-blue-500 selection:text-white transition-colors duration-300 ${bgMain} ${textMain}`}>
      
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? (darkMode ? 'bg-slate-900/90 border-slate-800 shadow-lg' : 'bg-white/80 border-slate-200 shadow-sm') + ' backdrop-blur-md py-3' 
            : 'bg-transparent border-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 z-50 group">
            <div className="bg-blue-600 text-white p-1.5 rounded-lg group-hover:bg-blue-700 transition-colors">
              <Trident size={24} />
            </div>
            <div className="leading-tight">
              <span className={`block text-xl font-bold tracking-tighter ${darkMode ? 'text-white' : 'text-slate-900'}`}>Nautic</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className={`hidden md:flex items-center gap-8 px-6 py-2 rounded-full backdrop-blur-sm border ${darkMode ? 'bg-slate-800/50 border-white/10' : 'bg-white/50 border-white/20'}`}>
            {NAV_LINKS.map((link) => (
              <button 
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`text-sm font-medium hover:text-blue-500 transition-colors relative group ${darkMode ? 'text-slate-200' : 'text-slate-600'}`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleTheme}
              className={`p-2.5 rounded-full transition-colors ${darkMode ? 'bg-slate-800 text-yellow-400 hover:bg-slate-700' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              title="Alternar Tema"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <motion.a 
              href="https://wa.me/5585985410058" 
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full text-sm font-bold transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2"
            >
              <Phone size={16} /> Falar no WhatsApp
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden z-50">
            <button 
                onClick={toggleTheme}
                className={`p-2 rounded-full transition-colors ${darkMode ? 'text-yellow-400' : 'text-slate-600'}`}
              >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>
            <button className={darkMode ? 'text-white' : 'text-slate-800'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center gap-8 md:hidden z-40 ${darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'}`}
            >
              {NAV_LINKS.map((link) => (
                <button 
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="text-2xl font-bold tracking-tight"
                >
                  {link.label}
                </button>
              ))}
              <a 
                href="https://wa.me/5585985410058"
                className="mt-4 px-8 py-4 bg-emerald-500 text-white rounded-full text-lg font-bold shadow-xl shadow-emerald-500/30"
              >
                Falar no WhatsApp
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <section className={`relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-slate-950' : 'bg-gradient-to-br from-white via-blue-50/30 to-white'}`}>
        <div className={`absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l pointer-events-none transition-colors duration-500 ${darkMode ? 'from-blue-900/10 to-transparent' : 'from-blue-50/50 to-transparent'}`} />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className={`inline-block px-3 py-1 rounded-full border text-xs font-bold tracking-wide uppercase mb-6 ${darkMode ? 'bg-blue-900/30 border-blue-800 text-blue-300' : 'bg-blue-100/80 border-blue-200 text-blue-700'}`}>
                Revolucione sua gestão
              </div>

              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tighter leading-[1.1] ${textTitle}`}>
                Automação e Digitalização <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                  para a Sua Empresa
                </span>
              </h1>

              <p className={`text-lg max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed ${textMain}`}>
                Otimize processos, reduza erros operacionais e impulsione a eficiência do seu negócio com soluções de tecnologia sob medida.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('#contato')}
                  className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold shadow-lg shadow-blue-600/25 transition-all flex items-center justify-center gap-2"
                >
                  Solicitar Diagnóstico
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection('#servicos')}
                  className={`w-full sm:w-auto px-8 py-4 border rounded-xl font-bold transition-all ${darkMode ? 'bg-slate-900 border-slate-700 text-white hover:bg-slate-800' : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'}`}
                >
                  Ver Serviços
                </motion.button>
              </div>

              <div className={`flex flex-wrap justify-center lg:justify-start gap-6 text-sm font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-700'}`}>
                <span className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border shadow-sm ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/60 border-slate-100'}`}>
                  <CheckCircle2 className="text-emerald-500 w-4 h-4" /> Reduza tarefas manuais
                </span>
                <span className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border shadow-sm ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/60 border-slate-100'}`}>
                  <CheckCircle2 className="text-emerald-500 w-4 h-4" /> Aumente a produtividade
                </span>
                <span className={`flex items-center gap-2 px-3 py-1.5 rounded-lg border shadow-sm ${darkMode ? 'bg-slate-900/50 border-slate-800' : 'bg-white/60 border-slate-100'}`}>
                  <CheckCircle2 className="text-emerald-500 w-4 h-4" /> Insights estratégicos
                </span>
              </div>
            </motion.div>

            {/* Right Column: Abstract Visual Composition */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[400px] hidden lg:block"
            >
              {/* Fake Dashboard Elements */}
              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[280px] rounded-2xl shadow-2xl border z-20 flex flex-col p-4 transition-colors duration-500 ${darkMode ? 'bg-slate-900 border-slate-800 shadow-black/50' : 'bg-white border-slate-100 shadow-2xl'}`}>
                {/* Mock Header */}
                <div className={`flex items-center gap-2 mb-4 border-b pb-2 ${darkMode ? 'border-slate-800' : 'border-slate-50'}`}>
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className={`ml-auto w-20 h-2 rounded-full ${darkMode ? 'bg-slate-800' : 'bg-slate-100'}`}></div>
                </div>
                {/* Mock Content */}
                <div className="flex gap-4 h-full">
                  <div className={`w-1/3 rounded-lg p-2 flex flex-col gap-2 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                     <div className={`w-full h-8 rounded mb-2 ${darkMode ? 'bg-blue-900/50' : 'bg-blue-100'}`}></div>
                     <div className={`w-full h-2 rounded ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
                     <div className={`w-2/3 h-2 rounded ${darkMode ? 'bg-slate-700' : 'bg-slate-200'}`}></div>
                  </div>
                  <div className="w-2/3 flex flex-col gap-3">
                    <div className="flex gap-2">
                      <div className={`w-1/2 h-20 rounded-lg flex items-center justify-center ${darkMode ? 'bg-indigo-900/30' : 'bg-indigo-50'}`}>
                        <PieChart className="text-indigo-400 w-8 h-8" />
                      </div>
                      <div className={`w-1/2 h-20 rounded-lg flex items-center justify-center ${darkMode ? 'bg-emerald-900/30' : 'bg-emerald-50'}`}>
                        <BarChart3 className="text-emerald-400 w-8 h-8" />
                      </div>
                    </div>
                    <div className={`flex-1 rounded-lg p-3 ${darkMode ? 'bg-slate-800/50' : 'bg-slate-50'}`}>
                      <div className="w-full h-full flex items-end justify-between gap-1">
                        <div className="w-full bg-blue-400/60 rounded-t h-[40%]"></div>
                        <div className="w-full bg-blue-500/60 rounded-t h-[70%]"></div>
                        <div className="w-full bg-blue-600/60 rounded-t h-[50%]"></div>
                        <div className="w-full bg-blue-500/80 rounded-t h-[80%]"></div>
                        <div className="w-full bg-blue-600/80 rounded-t h-[60%]"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className={`absolute top-0 right-10 p-4 rounded-xl shadow-xl border z-30 flex items-center gap-3 transition-colors duration-500 ${darkMode ? 'bg-slate-800 border-slate-700 shadow-black/30' : 'bg-white border-slate-50 shadow-xl'}`}
              >
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-green-900/30' : 'bg-green-100'}`}><CheckCircle2 className="text-green-500 w-5 h-5"/></div>
                <div>
                  <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Tarefas</div>
                  <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>100% Concluído</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                className={`absolute bottom-10 left-0 p-4 rounded-xl shadow-xl border z-30 flex items-center gap-3 transition-colors duration-500 ${darkMode ? 'bg-slate-800 border-slate-700 shadow-black/30' : 'bg-white border-slate-50 shadow-xl'}`}
              >
                <div className={`p-2 rounded-lg ${darkMode ? 'bg-blue-900/30' : 'bg-blue-100'}`}><TrendingUp className="text-blue-500 w-5 h-5"/></div>
                <div>
                  <div className={`text-xs ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>Produtividade</div>
                  <div className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-800'}`}>+45% Growth</div>
                </div>
              </motion.div>

              <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl -z-10 transition-colors duration-500 ${darkMode ? 'bg-indigo-900/20' : 'bg-indigo-50/50'}`} />
            </motion.div>
          </div>
        </div>
      </section>

      <section id="missao" className={`py-24 transition-colors duration-500 ${bgSection}`}>
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="relative"
          >
            <div className="w-0.5 h-12 bg-blue-600 mx-auto mb-8 opacity-30"></div>
            
            <h2 className={`text-3xl md:text-4xl font-bold mb-8 tracking-tight ${textTitle}`}>
              A Nossa Missão
            </h2>
            <div className={`space-y-6 text-xl md:text-2xl leading-relaxed font-light ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
              <p>
                “Criamos e implementamos as melhores soluções de <strong className={`font-semibold ${textTitle}`}>automação</strong> para a sua transformação digital.”
              </p>
              <p className={`text-lg md:text-xl ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Comprovada experiência no desenvolvimento de soluções que otimizam rotinas, reduzem erros manuais e aumentam a eficiência das equipas através de <strong className="font-semibold text-blue-600 dark:text-blue-400">Power BI</strong> e scripts inteligentes.
              </p>
            </div>
            
            <div className={`mt-12 pt-12 border-t flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'}`}>
               <ShieldCheck size={16} /> Experiência Comprovada
            </div>
          </motion.div>
        </div>
      </section>

      <section id="diferenciais" className={`py-24 transition-colors duration-500 ${bgSectionAlt}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <SectionTitle title="Os Nossos Diferenciais" subtitle isDark={darkMode} />
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {DIFFERENTIALS.map((diff, idx) => (
              <motion.div key={idx} variants={fadeInUp} custom={idx} className="h-full">
                <div className={`rounded-2xl p-8 shadow-sm border h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group ${cardBg}`}>
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-blue-600 transition-transform duration-300 group-hover:scale-110 ${darkMode ? 'bg-slate-800' : 'bg-blue-50'}`}>
                    {React.cloneElement(diff.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${textTitle}`}>{diff.title}</h3>
                  <p className={`leading-relaxed text-sm md:text-base ${textMain}`}>
                    {diff.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="servicos" className={`py-24 relative transition-colors duration-500 ${bgSection}`}>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionTitle title="Serviços de Automação & Otimização" subtitle isDark={darkMode} />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {SERVICES.map((service, idx) => (
              <motion.div key={idx} variants={fadeInUp} custom={idx} className="group">
                <div className={`p-6 rounded-2xl border shadow-sm h-full transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:shadow-blue-900/20 group-hover:-translate-y-1 cursor-default ${cardBg}`}>
                  <div className={`mb-4 transition-colors group-hover:text-white ${darkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {React.cloneElement(service.icon as React.ReactElement<any>, { size: 28 })}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 transition-colors group-hover:text-white ${textTitle}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm transition-colors group-hover:text-blue-100 leading-relaxed ${textMain}`}>
                    {service.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Destaque Banner */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-600 rounded-3xl p-8 md:p-16 text-center text-white shadow-2xl shadow-blue-900/20 max-w-5xl mx-auto overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 -mr-10 -mt-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-64 h-64 bg-indigo-600 rounded-full blur-3xl opacity-50" />
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                "As nossas soluções são desenhadas para transformar a sua operação."
              </h3>
              <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                Elimine tarefas repetitivas e foque no que realmente importa: o crescimento do seu negócio.
              </p>
              <button 
                onClick={() => scrollToSection('#contato')}
                className="px-8 py-3 bg-white text-blue-700 hover:bg-blue-50 rounded-full font-bold transition-colors shadow-lg"
              >
                Quero automatizar meu processo
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="dashboards" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <SectionTitle title="Dashboards Inteligentes" subtitle light isDark={true} />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-bold mb-4 text-white">Insights para Decisão</h3>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Transforme dados brutos em inteligência. Nossos dashboards interativos permitem que você visualize a saúde do seu negócio em tempo real.
              </p>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm">
                <div className="text-4xl font-bold text-emerald-400 mb-1">100%</div>
                <div className="text-xs text-slate-500 uppercase tracking-wider">Visualização de Dados</div>
              </div>
            </div>

            {/* Right Column: Grid */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
            >
              {DASHBOARDS.map((dash, idx) => (
                <motion.div key={idx} variants={fadeInUp} custom={idx}>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/5 p-5 rounded-xl hover:bg-white/10 hover:border-blue-500/30 transition-all duration-300 group h-full">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 text-blue-400 group-hover:text-blue-300 transition-colors group-hover:scale-110 duration-300">
                        {React.cloneElement(dash.icon as React.ReactElement<any>, { size: 20 })}
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-slate-100 mb-1">{dash.title}</h4>
                        <p className="text-xs text-slate-400 leading-relaxed">{dash.desc}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section id="contato" className={`py-24 transition-colors duration-500 ${darkMode ? 'bg-slate-950' : 'bg-gradient-to-t from-white to-blue-50/50'}`}>
        <div className="container mx-auto px-6 max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={`rounded-[2.5rem] p-8 md:p-16 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] text-center border relative overflow-hidden transition-colors duration-500 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500" />
            
            <h2 className={`text-3xl md:text-5xl font-bold mb-6 tracking-tight ${textTitle}`}>
              Pronto para Transformar?
            </h2>
            <p className={`text-lg md:text-xl mb-10 max-w-2xl mx-auto ${textMain}`}>
              Entre em contato conosco hoje. Estamos à disposição para entender as suas necessidades e construir a solução ideal para o seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a 
                href="https://wa.me/5585985410058"
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-10 py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-xl shadow-emerald-500/25 transition-all"
              >
                <Phone size={24} /> (85) 98541-0058
              </motion.a>
              
              <motion.a 
                href="mailto:pvsales33@gmail.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full sm:w-auto px-10 py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 shadow-lg transition-all ${darkMode ? 'bg-slate-800 hover:bg-slate-700 text-white' : 'bg-slate-800 hover:bg-slate-900 text-white'}`}
              >
                <Mail size={24} /> Enviar E-mail
              </motion.a>
            </div>
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
               <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
               Resposta rápida em até 24h úteis
            </div>
          </motion.div>
        </div>
      </section>

      <footer className={`border-t pt-16 pb-8 transition-colors duration-500 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-100'}`}>
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
                <div className="bg-blue-600 text-white p-1.5 rounded-lg">
                  <Trident size={20} />
                </div>
                <span className={`text-xl font-bold tracking-tight ${textTitle}`}>Nautic Automação</span>
              </div>
              <p className={`max-w-sm leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Automação, integração e dashboards para acelerar a eficiência da sua empresa com tecnologia de ponta.
              </p>
            </div>

            <div className={`flex gap-8 text-sm font-semibold ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
              <button onClick={() => scrollToSection('#missao')} className="hover:text-blue-500 transition-colors">Missão</button>
              <button onClick={() => scrollToSection('#servicos')} className="hover:text-blue-500 transition-colors">Serviços</button>
              <button onClick={() => scrollToSection('#dashboards')} className="hover:text-blue-500 transition-colors">Dashboards</button>
              <button onClick={() => scrollToSection('#contato')} className="hover:text-blue-500 transition-colors">Contato</button>
            </div>
          </div>

          <div className={`border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs ${darkMode ? 'border-slate-800 text-slate-500' : 'border-slate-100 text-slate-400'}`}>
            <p>© {new Date().getFullYear()} Nautic Automação & Digitalização. Todos os direitos reservados.</p>
            <p>Desenvolvido com foco em performance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
