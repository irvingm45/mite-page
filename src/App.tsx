import { useState, useEffect } from "react"
import { Typewriter } from "@/components/ui/typewriter"
import { motion, AnimatePresence } from "framer-motion"

interface emailObj {
  service: string;
  scale: string;
  name: string;
  company: string;
  email: string;
  message: string;
}

export default function App() {
  const [selectedService, setSelectedService] = useState<string>("hvac")
  const [projectScale, setProjectScale] = useState<string>("medio")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  // Variables del formulario
  const [fullName, setFullName] = useState<string>("");
  const [companyName, setCompanyName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);

  // Auto-dismiss toast after 5 seconds
  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const constructEmail = (): emailObj => {
    const serviceLabels: Record<string, string> = {
      hvac: "HVAC / Aire Acondicionado",
      electrical: "Instalación Eléctrica",
      backups: "UPS y Redes",
      infrastructure: "Obra Civil / Maquinaria",
      "energy-efficiency": "Eficiencia y Calidad de Energía",
      training: "Capacitación y Cursos Técnicos",
      other: "Otro Servicio"
    }

    const scaleLabels: Record<string, string> = {
      pequeno: "Comercial / PYME",
      medio: "Corporativo / Educativo",
      grande: "Industrial / Hospitalario",
      otro: "Otro"
    }

    return {
      service: serviceLabels[selectedService] || selectedService,
      scale: scaleLabels[projectScale] || projectScale,
      name: fullName,
      company: companyName,
      email: email,
      message: message
    }
  }
  // Mensaje de éxito al enviar el formulario
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY; // Reemplaza con tu clave de acceso de Web3Forms
    if (!accessKey) {
      console.error("Error: La clave de Web3Forms no está definida en las variables de entorno.");
      return;
    }
    e.preventDefault()
    setIsSubmitting(true);

    // Construcción del objeto
    const newEmail = constructEmail();
    console.log(newEmail);

    try {
      // Envio del formulario a web3forms
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey, // Reemplaza con tu clave de acceso de Web3Forms
          subject: "Nuevo correo desde MITE",
          name: newEmail.name,
          email: newEmail.email,
          message: `Servicio: ${newEmail.service}\nEscala del proyecto: ${newEmail.scale}\nNombre: ${newEmail.name}\nEmpresa: ${newEmail.company}\nCorreo electrónico: ${newEmail.email}\nMensaje: ${newEmail.message}`,
        }),
      });
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      else {
        // Limpiar el formulario después de enviar
        setFullName("");
        setCompanyName("");
        setEmail("");
        setMessage("");

        // Mostrar mensaje de éxito
        setToast({
          type: "success",
          message: "¡Mensaje enviado con éxito! Nos contactaremos a la brevedad."
        });
      }
    } catch (e) {
      console.log(e);
      setToast({
        type: "error",
        message: "Hubo un problema al enviar tu mensaje por correo. Por favor, platícanos tu idea por WhatsApp."
      });
    }

    setIsSubmitting(false);
  }

  return (
    <>
      {/* Background Textures */}
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none z-[-2]"></div>
      <div className="fixed inset-0 bg-noise-pattern pointer-events-none z-[-2]"></div>

      {/* Global Liquid Blobs (Distributed Palette Colors) */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ffdbd1] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob pointer-events-none z-[-1]"></div>
      <div className="fixed top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#d1e4fb] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-2000 pointer-events-none z-[-1]"></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#f5e3d6] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-4000 pointer-events-none z-[-1]"></div>

      {/* TopNavBar Wrapper (Fixed/Sticky) */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center p-2 md:p-4 pointer-events-none">
        <nav className="w-full max-w-7xl flex justify-between items-center px-4 md:px-8 py-2 md:py-4 bg-white/70 backdrop-blur-lg border border-white/50 shadow-md rounded-2xl md:rounded-[2rem] pointer-events-auto relative">
          <a href="#" className="flex items-center gap-2 pointer-events-auto hover:opacity-90 transition-opacity">
            <img src="logoMITE_S.webp" alt="MITE Logo" className="h-8 md:h-9 w-auto object-contain" />
            <span className="font-display font-extrabold text-lg md:text-xl text-secondary tracking-widest">MITE</span>
          </a>
          <div className="hidden md:flex items-center space-x-md">
            <a className="text-secondary/80 hover:text-secondary transition-colors font-semibold text-sm md:text-base" href="#services">Servicios</a>
            <a className="text-secondary/80 hover:text-secondary transition-colors font-semibold text-sm md:text-base" href="#about">Nosotros</a>
            <a className="text-secondary/80 hover:text-secondary transition-colors font-semibold text-sm md:text-base" href="#why-choose-us">Beneficios</a>
            <a className="text-secondary/80 hover:text-secondary transition-colors font-semibold text-sm md:text-base" href="#identity">Identidad</a>
            <a className="text-secondary/80 hover:text-secondary transition-colors font-semibold text-sm md:text-base" href="#contact">Contacto</a>
          </div>

          <div className="flex items-center gap-2">
            <a href="#contact" className="bg-gradient-to-r from-[#b2533e] to-[#934a34] hover:from-[#c85a3e] hover:to-[#a3533e] text-white shadow-[0_4px_15px_rgba(147,74,52,0.4)] border border-white/20 hover:scale-105 transition-all px-3.5 py-1.5 sm:px-5 sm:py-2 rounded-full text-[11px] sm:text-xs md:text-sm font-bold pointer-events-auto">
              Cotizar
            </a>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="flex md:hidden items-center justify-center p-2 text-secondary hover:text-[#934a34] transition-colors focus:outline-none pointer-events-auto"
              aria-label="Menú principal"
            >
              <span className="material-symbols-outlined text-[28px] select-none">
                {isMobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>

          {/* Mobile Navigation Dropdown */}
          {isMobileMenuOpen && (
            <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white/95 backdrop-blur-xl border border-white/60 shadow-xl rounded-2xl p-6 flex flex-col gap-4 md:hidden z-50 animate-fade-in pointer-events-auto">
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-secondary/80 hover:text-secondary transition-colors font-semibold py-2 border-b border-slate-100" href="#services">Servicios</a>
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-secondary/80 hover:text-secondary transition-colors font-semibold py-2 border-b border-slate-100" href="#about">Nosotros</a>
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-secondary/80 hover:text-secondary transition-colors font-semibold py-2 border-b border-slate-100" href="#why-choose-us">Beneficios</a>
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-secondary/80 hover:text-secondary transition-colors font-semibold py-2 border-b border-slate-100" href="#identity">Identidad</a>
              <a onClick={() => setIsMobileMenuOpen(false)} className="text-secondary/80 hover:text-secondary transition-colors font-semibold py-2" href="#contact">Contacto</a>
            </div>
          )}
        </nav>
      </div>

      <main className="flex-grow">
        {/* Hero Section with Typewriter animation */}
        {/* Full-bleed Hero Section with Background Image */}
        <section className="relative w-full min-h-[90vh] flex items-center justify-center text-center overflow-hidden px-margin-mobile md:px-margin-desktop pt-36 pb-20 z-10">
          {/* Background Image with Dark Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              className="w-full h-full object-cover filter brightness-[0.3] contrast-[1.05]"
              alt="Modern commercial office space with soft daylight"
              src="hero_background_C.webp"
              {...{ fetchpriority: "high" }}
            />
            {/* Soft gradient bottom overlay to blend with the rest of the page */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-black/30"></div>
          </div>

          {/* Centered Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#ffdbd1] px-4 py-1.5 rounded-full w-max shadow-sm mb-4 animate-fade-in">
              <span className="material-symbols-outlined text-[16px] icon-fill text-[#fea186]">engineering</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Mantenimiento Industrial y Comercial</span>
            </div>

            {/* Giant Title "MITE" */}
            <h1 className="font-display font-extrabold text-[5rem] sm:text-[7rem] md:text-[9rem] text-white leading-none tracking-tighter [text-shadow:_0_4px_24px_rgba(0,0,0,0.6)] select-none">
              MITE
            </h1>

            {/* Line 2: Main B2B Value Proposition */}
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl md:text-5xl text-white/95 max-w-4xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)] select-none leading-tight mt-2">
              Ingeniería y mantenimiento que asegura tu
            </h2>

            {/* Line 3: Typewriter Animation with Industrial Tasks */}
            <div className="font-headline font-bold text-3xl sm:text-4xl md:text-6xl text-[#ffb5a0] min-h-[48px] md:min-h-[100px] [text-shadow:_0_2px_12px_rgba(0,0,0,0.4)] select-none mt-0 md:mt-2">
              <Typewriter
                text={[
                  "continuidad operativa",
                  "mantenimiento preventivo",
                  "suministro eléctrico seguro",
                  "infraestructura al 100%"
                ]}
                speed={75}
                waitTime={2200}
                deleteSpeed={35}
                cursorChar={"_"}
                cursorClassName="text-[#ffdbd1] ml-2 animate-pulse"
              />
            </div>

            {/* Premium CTA Buttons (Terracotta Theme) */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a href="#contact" className="bg-gradient-to-r from-[#b2533e] to-[#934a34] hover:from-[#c85a3e] hover:to-[#a3533e] text-white shadow-[0_8px_20px_rgba(147,74,52,0.4)] hover:shadow-[0_10px_25px_rgba(147,74,52,0.6)] hover:scale-105 transition-all duration-300 px-8 py-4 rounded-full font-label-md text-label-md flex items-center justify-center gap-2 font-bold">
                Solicitar Diagnóstico Gratuito
                <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </a>
              <a href="#services" className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white hover:text-white transition-all duration-300 px-8 py-4 rounded-full font-label-md text-label-md flex items-center justify-center font-bold">
                Nuestros Servicios
              </a>
            </div>
          </div>
        </section>

        {/* Trust Bar (Floating Glass Card overlapping the Hero boundary) */}
        <section className="relative z-20 -mt-10 md:-mt-14 mx-4 md:mx-auto max-w-5xl bg-white/40 backdrop-blur-xl border border-white/50 py-4 px-6 shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.4)] rounded-[2rem] overflow-hidden">
          <div className="w-full">
            <p className="text-center font-label-sm text-label-sm text-on-surface-variant/80 mb-2 uppercase tracking-widest font-bold">Con la confianza de sectores clave</p>
            <div className="relative w-full overflow-hidden flex flex-row flex-nowrap opacity-90 [mask-image:_linear-gradient(to_right,_transparent_0,_white_10%_90%,_transparent_100%)]">
              <div className="flex shrink-0 items-center justify-around min-w-full gap-lg md:gap-xl py-1.5 animate-marquee-right px-[20px] md:px-[32px]">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[28px] text-secondary">school</span><span className="font-headline-sm text-[16px] md:text-[18px] text-secondary">Educación</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[28px] text-secondary">hotel</span><span className="font-headline-sm text-[16px] md:text-[18px] text-secondary">Hotelería</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[28px] text-secondary">business</span><span className="font-headline-sm text-[16px] md:text-[18px] text-secondary">Corporativo</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[28px] text-secondary">storefront</span><span className="font-headline-sm text-[16px] md:text-[18px] text-secondary">Retail</span></div>
              </div>
              <div className="flex shrink-0 items-center justify-around min-w-full gap-lg md:gap-xl py-1.5 animate-marquee-right px-[20px] md:px-[32px]" aria-hidden="true">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[28px] text-secondary">school</span><span className="font-headline-sm text-[16px] md:text-[18px] text-secondary">Educación</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[28px] text-secondary">hotel</span><span className="font-headline-sm text-[16px] md:text-[18px] text-secondary">Hotelería</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[28px] text-secondary">business</span><span className="font-headline-sm text-[16px] md:text-[18px] text-secondary">Corporativo</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[28px] text-secondary">storefront</span><span className="font-headline-sm text-[16px] md:text-[18px] text-secondary">Retail</span></div>
              </div>
            </div>
          </div>
        </section>
        {/* Service Pillars */}
        <section id="services" className="py-xl px-margin-mobile md:px-margin-desktop bg-transparent max-w-7xl mx-auto">
          <div className="text-center mb-xl">
            <h2 className="font-headline-md text-headline-md text-primary mb-sm">Pilares de Servicio MITE</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">Mantenimiento preventivo y correctivo diseñado para garantizar la operatividad de tus espacios comerciales.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Pillar 1: HVAC */}
            <div id="hvac" className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-[#ffb5a0]/30 transition-all duration-300 group flex flex-col bg-white/70 backdrop-blur-xs" style={{ transform: "translateZ(0)" }}>
              <div className="w-full h-[200px] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  src="hvac_C.webp"
                  alt="HVAC y Refrigeración"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/[0.03]"></div>
              </div>
              <div className="flex-grow p-5 md:p-6 flex flex-col justify-between border-t border-white/30">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ffdbd1] to-[#ffb5a0] rounded-xl flex items-center justify-center text-[#783521] border border-white/50 shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-[22px] icon-fill">ac_unit</span>
                    </div>
                    <h3 className="font-headline-sm text-[16px] md:text-[18px] text-on-surface font-bold leading-tight">HVAC y Refrigeración</h3>
                  </div>
                  <p className="font-body-sm text-[12px] md:text-[13px] text-on-surface-variant leading-relaxed mb-4">
                    Proyectos y mantenimiento correctivo/preventivo de sistemas de aire acondicionado y refrigeración comercial o industrial.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["Chillers", "Sistemas VRF", "Cámaras Frías", "Aire Acondicionado"].map((tag) => (
                    <span key={tag} className="bg-white/80 text-[#783521] text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#ffdbd1]/60 shadow-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 2: Electrical */}
            <div id="electrical" className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-[#a5b8ce]/30 transition-all duration-300 group flex flex-col bg-white/70 backdrop-blur-xs" style={{ transform: "translateZ(0)" }}>
              <div className="w-full h-[200px] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  src="electric_instalation_C.webp"
                  alt="Instalaciones Eléctricas"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/[0.03]"></div>
              </div>
              <div className="flex-grow p-5 md:p-6 flex flex-col justify-between border-t border-white/30">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#d1e4fb] to-[#a5b8ce] rounded-xl flex items-center justify-center text-[#091d2e] border border-white/50 shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-[22px] icon-fill">bolt</span>
                    </div>
                    <h3 className="font-headline-sm text-[16px] md:text-[18px] text-on-surface font-bold leading-tight">Instalaciones Eléctricas</h3>
                  </div>
                  <p className="font-body-sm text-[12px] md:text-[13px] text-on-surface-variant leading-relaxed mb-4">
                    Ingeniería y mantenimiento preventivo y correctivo para redes de baja, media y alta tensión, asegurando un suministro continuo.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["Alta, Media y Baja Tensión", "Subestaciones", "Tableros Eléctricos", "Redes de Tierra"].map((tag) => (
                    <span key={tag} className="bg-white/80 text-[#091d2e] text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#d1e4fb]/60 shadow-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 3: Backups & Networks */}
            <div id="backups" className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-[#ffeedd]/30 transition-all duration-300 group flex flex-col bg-white/70 backdrop-blur-xs" style={{ transform: "translateZ(0)" }}>
              <div className="w-full h-[200px] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  src="ups_C.webp"
                  alt="Sistemas UPS y Redes"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/[0.03]"></div>
              </div>
              <div className="flex-grow p-5 md:p-6 flex flex-col justify-between border-t border-white/30">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ffeedd] to-[#fea186] rounded-xl flex items-center justify-center text-[#76331f] border border-white/50 shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-[22px] icon-fill">battery_charging_full</span>
                    </div>
                    <h3 className="font-headline-sm text-[16px] md:text-[18px] text-on-surface font-bold leading-tight">Sistemas UPS y Redes</h3>
                  </div>
                  <p className="font-body-sm text-[12px] md:text-[13px] text-on-surface-variant leading-relaxed mb-4">
                    Mantenimiento de sistemas UPS para el respaldo de energía ininterrumpida y soluciones integrales en cableado estructurado de redes.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["Respaldo Crítico", "Bancos de Baterías", "Cableado de Redes", "Fibra Óptica"].map((tag) => (
                    <span key={tag} className="bg-white/80 text-[#76331f] text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#ffeedd]/60 shadow-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 4: Infrastructure & Machinery */}
            <div id="infrastructure" className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-[#e4e2dd]/30 transition-all duration-300 group flex flex-col bg-white/70 backdrop-blur-xs" style={{ transform: "translateZ(0)" }}>
              <div className="w-full h-[200px] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  src="obra_civil_C.webp"
                  alt="Maquinaria y Obra Civil"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/[0.03]"></div>
              </div>
              <div className="flex-grow p-5 md:p-6 flex flex-col justify-between border-t border-white/30">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#e4e2dd] to-[#c8c6c2] rounded-xl flex items-center justify-center text-[#31312e] border border-white/50 shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-[22px] icon-fill">construction</span>
                    </div>
                    <h3 className="font-headline-sm text-[16px] md:text-[18px] text-on-surface font-bold leading-tight">Maquinaria y Obra Civil</h3>
                  </div>
                  <p className="font-body-sm text-[12px] md:text-[13px] text-on-surface-variant leading-relaxed mb-4">
                    Mantenimiento preventivo/correctivo de maquinaria industrial y el desarrollo de todo tipo de obra civil e infraestructura física.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["Montaje Industrial", "Obra Civil", "Estructuras", "Pintura Epóxica"].map((tag) => (
                    <span key={tag} className="bg-white/80 text-[#31312e] text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#e4e2dd]/60 shadow-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 5: Eficiencia y Calidad de Energía */}
            <div id="energy-efficiency" className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-[#ffeedd]/30 transition-all duration-300 group flex flex-col bg-white/70 backdrop-blur-xs" style={{ transform: "translateZ(0)" }}>
              <div className="w-full h-[200px] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  src="eficiencia_energia.webp"
                  alt="Eficiencia y Calidad de Energía"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/[0.03]"></div>
              </div>
              <div className="flex-grow p-5 md:p-6 flex flex-col justify-between border-t border-white/30">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#ffeedd] to-[#fea186] rounded-xl flex items-center justify-center text-[#76331f] border border-white/50 shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-[22px] icon-fill">insights</span>
                    </div>
                    <h3 className="font-headline-sm text-[16px] md:text-[18px] text-on-surface font-bold leading-tight">Eficiencia y Calidad de Energía</h3>
                  </div>
                  <p className="font-body-sm text-[12px] md:text-[13px] text-on-surface-variant leading-relaxed mb-4">
                    Auditorías de calidad eléctrica, perfiles de carga y optimización para cumplimiento del Código de Red y ahorro energético.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["Código de Red", "Perfiles de Carga", "Ahorro de Energía", "Calidad de Energía"].map((tag) => (
                    <span key={tag} className="bg-white/80 text-[#76331f] text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#ffeedd]/60 shadow-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pillar 6: Capacitación y Cursos Técnicos */}
            <div id="training" className="relative rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:border-[#e4e2dd]/30 transition-all duration-300 group flex flex-col bg-white/70 backdrop-blur-xs" style={{ transform: "translateZ(0)" }}>
              <div className="w-full h-[200px] overflow-hidden relative">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  src="capacitacion_tecnica.webp"
                  alt="Capacitación y Cursos Técnicos"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/[0.03]"></div>
              </div>
              <div className="flex-grow p-5 md:p-6 flex flex-col justify-between border-t border-white/30">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#e4e2dd] to-[#c8c6c2] rounded-xl flex items-center justify-center text-[#31312e] border border-white/50 shadow-sm shrink-0">
                      <span className="material-symbols-outlined text-[22px] icon-fill">school</span>
                    </div>
                    <h3 className="font-headline-sm text-[16px] md:text-[18px] text-on-surface font-bold leading-tight">Capacitación y Cursos Técnicos</h3>
                  </div>
                  <p className="font-body-sm text-[12px] md:text-[13px] text-on-surface-variant leading-relaxed mb-4">
                    Cursos con certificación oficial ante la STPS y constancias de competencias laborales DC-3 para tu personal técnico.
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {["Cursos STPS", "Seguridad Eléctrica", "Constancias DC-3", "Capacitación Externa"].map((tag) => (
                    <span key={tag} className="bg-white/80 text-[#31312e] text-[10px] md:text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-[#e4e2dd]/60 shadow-xs">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Acerca de Nosotros */}
        <section id="about" className="py-xl px-margin-mobile md:px-margin-desktop bg-transparent max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-12 gap-3 md:gap-12 items-center">
            {/* Left Column: Visual Image */}
            <div className="col-span-5 sm:col-span-5 md:col-span-4 relative rounded-[2rem] overflow-hidden border border-white/30 shadow-lg" style={{ transform: "translateZ(0)" }}>
              <img
                className="w-full h-auto block"
                src="logo.webp"
                alt="Logo MITE Industrial"
                loading="lazy"
              />
            </div>
            {/* Right Column: Copywriting & Founders */}
            <div className="col-span-7 sm:col-span-7 md:col-span-8 flex flex-col gap-3 sm:gap-5 justify-center">
              <div className="inline-flex items-center gap-2 bg-[#d1e4fb] text-[#091d2e] border border-[#a5b8ce]/30 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full w-max shadow-sm">
                <span className="material-symbols-outlined text-[14px] sm:text-[16px] icon-fill">groups</span>
                <span className="font-label-sm text-[10px] sm:text-label-sm uppercase tracking-wider font-bold">Acerca de Nosotros</span>
              </div>
              <h2 className="font-display font-bold text-lg sm:text-4xl md:text-5xl text-secondary leading-snug">
                Con amplia experiencia en el sector
              </h2>
              <p className="text-xs sm:text-body-md text-on-surface-variant leading-relaxed">
                MITE es una organización con una amplia y comprobada trayectoria en el sector del mantenimiento industrial y comercial, brindando soluciones integrales de alta precisión.
              </p>
              <p className="text-xs sm:text-body-md text-on-surface-variant leading-relaxed font-semibold">
                Llevamos realizando trabajos especializados y de precisión en cualquier área, asegurando en todo momento la continuidad y seguridad de tus operaciones.
              </p>
            </div>
          </div>
        </section>

        {/* Bento Grid / Why Choose Us */}
        <section id="why-choose-us" className="py-xl px-margin-mobile md:px-margin-desktop bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline-md text-headline-md text-primary mb-xl text-center">Por qué elegir MITE</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-sm h-auto md:h-[550px]">
              {/* Large Card (Terracotta Overlay) */}
              <div className="md:col-span-2 md:row-span-2 bg-white/40 backdrop-blur-2xl rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.5)] border border-white/60 p-lg flex flex-col justify-end relative overflow-hidden group hover:shadow-xl transition-all duration-500">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Technician inspecting an electrical panel" src="tecnico_C.webp" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#783521]/95 via-[#783521]/30 to-transparent backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]"></div>
                <div className="relative z-10 text-white">
                  <div className="flex items-center gap-xs mb-sm">
                    <span className="material-symbols-outlined icon-fill drop-shadow-md text-[#ffdbd1]">verified_user</span>
                    <span className="text-xs uppercase font-bold tracking-widest text-[#ffdbd1]">Certidumbre Operativa</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm mb-xs drop-shadow-md font-bold">Confianza Operativa</h3>
                  <p className="font-body-sm text-body-sm opacity-90 drop-shadow-sm leading-relaxed">
                    Tus instalaciones en manos de expertos. Reducimos riesgos, optimizamos el rendimiento de tus equipos y garantizamos cumplimiento normativo.
                  </p>
                </div>
              </div>
              {/* Medium Card Top */}
              <div className="md:col-span-2 bg-white/50 backdrop-blur-2xl rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.8)] border border-white/70 p-md md:p-lg flex items-center gap-md relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffdbd1] to-[#ffb5a0] shadow-[inset_0_2px_10px_rgba(255,255,255,0.8)] border border-white/50 flex items-center justify-center shrink-0 relative z-10">
                  <span className="material-symbols-outlined text-[#783521] text-2xl">support_agent</span>
                </div>
                <div className="relative z-10">
                  <h3 className="font-label-md text-label-md text-secondary mb-1 font-bold">Soporte 24/7</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    Atención continua para emergencias críticas. Nunca estás solo ante una falla de infraestructura; respondemos de inmediato.
                  </p>
                </div>
              </div>
              {/* Small Card Bottom Left (Terracotta Theme) */}
              <div className="bg-gradient-to-br from-[#934a34] to-[#75331f] text-white rounded-[2rem] shadow-[0_8px_20px_rgba(147,74,52,0.3),inset_0_2px_15px_rgba(255,255,255,0.3)] border border-white/20 p-md md:p-lg flex flex-col justify-center items-start relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                <span className="material-symbols-outlined text-[36px] mb-xs opacity-90 drop-shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300 text-[#ffdbd1]">engineering</span>
                <h3 className="font-label-md text-label-md relative z-10 drop-shadow-sm font-bold mb-1">Técnicos Certificados</h3>
                <p className="text-white/80 text-[12px] leading-relaxed relative z-10">
                  Capacitación continua bajo estándares de seguridad para garantizar trabajos de alta precisión en cualquier área.
                </p>
              </div>
              {/* Small Card Bottom Right (Slate Navy Theme) */}
              <div className="bg-gradient-to-br from-[#203344] to-[#36485b] text-white rounded-[2rem] shadow-[0_8px_20px_rgba(32,51,68,0.3),inset_0_2px_15px_rgba(255,255,255,0.2)] border border-white/10 p-md md:p-lg flex flex-col justify-center items-start relative overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                <span className="material-symbols-outlined text-[36px] mb-xs opacity-90 drop-shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300 text-[#d1e4fb]">handyman</span>
                <h3 className="font-label-md text-label-md relative z-10 drop-shadow-sm font-bold mb-1">Equipamiento Premium</h3>
                <p className="text-white/80 text-[12px] leading-relaxed relative z-10">
                  Instrumentación calibrada de última generación para diagnósticos predictivos rápidos y reparaciones duraderas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Identidad Corporativa (Misión y Visión) */}
        <section id="identity" className="py-xl px-margin-mobile md:px-margin-desktop bg-transparent max-w-7xl mx-auto relative z-10 animate-fade-in">
          <div className="text-center mb-xl">
            <div className="inline-flex items-center gap-2 bg-[#ffdbd1] text-[#783521] border border-[#ffb5a0]/30 px-4 py-1.5 rounded-full w-max shadow-sm mb-3">
              <span className="material-symbols-outlined text-[16px] icon-fill">campaign</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Identidad Corporativa</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary">Misión y Visión</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto mt-2">
              Los pilares estratégicos y el propósito que guían nuestras operaciones diarias hacia la excelencia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Misión Card */}
            <div className="bg-white/40 backdrop-blur-xl rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.4)] border border-white/50 p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#934a34]/10 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#ffdbd1] to-[#ffb5a0] shadow-sm border border-white/50 flex items-center justify-center text-[#783521] shrink-0">
                <span className="material-symbols-outlined text-[28px] icon-fill">track_changes</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-secondary font-bold mb-2">Misión</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Realizar el mantenimiento e instalaciones técnico-eléctricas satisfactoriamente en casas, industrias, escuelas, hospitales y pequeños negocios. Nos adaptamos a cualquier presupuesto, brindando no solo los mejores precios, sino también los mejores resultados a nivel nacional.
                </p>
              </div>
            </div>

            {/* Visión Card */}
            <div className="bg-white/40 backdrop-blur-xl rounded-[2rem] shadow-[0_15px_35px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.4)] border border-white/50 p-6 md:p-8 flex flex-col gap-4 relative overflow-hidden group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#203344]/10 to-transparent rounded-bl-full pointer-events-none"></div>
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#d1e4fb] to-[#a5b8ce] shadow-sm border border-white/50 flex items-center justify-center text-[#091d2e] shrink-0">
                <span className="material-symbols-outlined text-[28px] icon-fill">insights</span>
              </div>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-secondary font-bold mb-2">Visión</h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  Continuar brindando servicios de excelencia, lanzar una línea propia de equipos para expandirnos a un mercado global y ofrecer cursos especializados, siendo siempre reconocidos por nuestra total calidad y garantía.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-xl px-margin-mobile md:px-margin-desktop bg-transparent max-w-4xl mx-auto relative z-10">
          <div className="bg-white/50 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.05),inset_0_0_30px_rgba(255,255,255,0.8)] border border-white/70 p-6 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>

            <div className="text-center mb-xl relative z-10">
              <h2 className="font-headline-md text-headline-md text-primary mb-xs">Hablemos de tu Proyecto</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-xl mx-auto">
                Selecciona las opciones de tu proyecto y nuestro equipo de ingenieros te contactará a la brevedad.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
              <input type="hidden" name="servicio" value={selectedService} />
              <input type="hidden" name="escala" value={projectScale} />

              {/* Step 1: Service Type (Interactive Chips) */}
              <div className="space-y-3">
                <label className="block font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold ml-1">
                  1. ¿Qué servicio requieres?
                </label>
                <div className="flex flex-wrap gap-2">
                  {[
                    { id: "hvac", label: "HVAC / Aire Acondicionado", icon: "ac_unit" },
                    { id: "electrical", label: "Instalación Eléctrica", icon: "bolt" },
                    { id: "backups", label: "UPS y Redes", icon: "battery_charging_full" },
                    { id: "infrastructure", label: "Obra Civil / Maquinaria", icon: "construction" },
                    { id: "energy-efficiency", label: "Eficiencia y Calidad de Energía", icon: "insights" },
                    { id: "training", label: "Capacitación y Cursos Técnicos", icon: "school" },
                    { id: "other", label: "Otro Servicio", icon: "handyman" }
                  ].map((service) => {
                    const isSelected = selectedService === service.id
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => setSelectedService(service.id)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs md:text-sm font-bold border transition-all duration-300 ${
                          isSelected
                            ? "bg-[#934a34] text-white border-[#934a34] shadow-md scale-[1.03]"
                            : "bg-white/40 text-secondary border-slate-200 hover:bg-white/70 hover:border-slate-300"
                        }`}
                      >
                        <span className="material-symbols-outlined text-[18px]">{service.icon}</span>
                        {service.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Step 2: Project Scale (Segmented Control) */}
              <div className="space-y-3">
                <label className="block font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold ml-1">
                  2. Escala del Proyecto
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 bg-white/30 p-1.5 rounded-2xl border border-slate-200/50">
                  {[
                    { id: "pequeno", label: "Comercial / PYME", desc: "Locales y oficinas" },
                    { id: "medio", label: "Corporativo / Educativo", desc: "Edificios y escuelas" },
                    { id: "grande", label: "Industrial / Hospitalario", desc: "Naves y clínicas" },
                    { id: "otro", label: "Otro", desc: "Detallar en el mensaje" }
                  ].map((scale) => {
                    const isSelected = projectScale === scale.id
                    return (
                      <button
                        key={scale.id}
                        type="button"
                        onClick={() => setProjectScale(scale.id)}
                        className={`p-3 rounded-xl text-left border transition-all duration-300 flex flex-col gap-0.5 ${
                          isSelected
                            ? "bg-white text-secondary border-[#934a34]/30 shadow-md"
                            : "bg-transparent text-secondary/70 border-transparent hover:bg-white/20"
                        }`}
                      >
                        <span className="text-xs md:text-sm font-bold">{scale.label}</span>
                        <span className="text-[10px] opacity-75">{scale.desc}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Step 3: Contact details (Blueprint fields with bottom border only) */}
              <div className="space-y-6 pt-4 border-t border-slate-200/40">
                <label className="block font-label-sm text-label-sm text-secondary uppercase tracking-wider font-bold ml-1">
                  3. Tus Datos de Contacto
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  {/* Name field */}
                  <div className="flex flex-col relative group">
                    <span className="absolute bottom-3 left-0 material-symbols-outlined text-slate-400 group-focus-within:text-[#934a34] transition-colors">
                      person
                    </span>
                    <input
                      required
                      name="fullName"
                      type="text"
                      // Para ver su cambio
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Nombre Completo"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-slate-300/80 focus:border-[#934a34] focus:ring-0 pl-7 pr-2 py-2.5 font-body-md text-body-md text-secondary transition-all outline-none"
                    />
                  </div>

                  {/* Company field */}
                  <div className="flex flex-col relative group">
                    <span className="absolute bottom-3 left-0 material-symbols-outlined text-slate-400 group-focus-within:text-[#934a34] transition-colors">
                      business
                    </span>
                    <input
                      required
                      type="text"
                      name="companyName"
                      // Para guardar el nombre de la empresa
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Empresa / Razón Social"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-slate-300/80 focus:border-[#934a34] focus:ring-0 pl-7 pr-2 py-2.5 font-body-md text-body-md text-secondary transition-all outline-none"
                    />
                  </div>

                  {/* Email field */}
                  <div className="flex flex-col relative group md:col-span-2">
                    <span className="absolute bottom-3 left-0 material-symbols-outlined text-slate-400 group-focus-within:text-[#934a34] transition-colors">
                      mail
                    </span>
                    <input
                      required
                      type="email"
                      name="fullEmail"
                      // Para guardar el correo de la empresa
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Correo Electrónico Corporativo"
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-slate-300/80 focus:border-[#934a34] focus:ring-0 pl-7 pr-2 py-2.5 font-body-md text-body-md text-secondary transition-all outline-none"
                    />
                  </div>

                  {/* Message field */}
                  <div className="flex flex-col relative group md:col-span-2">
                    <span className="absolute bottom-3 left-0 material-symbols-outlined text-slate-400 group-focus-within:text-[#934a34] transition-colors">
                      chat
                    </span>
                    <textarea
                      required
                      rows={3}
                      name="message"
                      // Para guardar el mensaje
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Cuéntanos sobre tu necesidad o proyecto..."
                      className="w-full bg-transparent border-t-0 border-x-0 border-b border-slate-300/80 focus:border-[#934a34] focus:ring-0 pl-7 pr-2 py-2.5 font-body-md text-body-md text-secondary transition-all outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#934a34] to-[#75331f] text-white shadow-[0_8px_20px_rgba(147,74,52,0.4)] border border-white/30 hover:shadow-[0_10px_25px_rgba(147,74,52,0.5)] hover:scale-[1.01] transition-all py-4 rounded-full font-label-md text-label-md flex items-center justify-center gap-2 font-bold"
              >
                {isSubmitting ? (
                  <span className="material-symbols-outlined text-lg animate-spin">autorenew</span>
                ) : (
                  "Enviar Solicitud"
                )}
                <span className="material-symbols-outlined text-lg">send</span>
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-[#121c27]/95 backdrop-blur-md text-white/80 font-body-sm text-body-sm w-full relative z-10 border-t border-white/10 rounded-t-[3rem] mt-auto">
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
          {/* Main Footer Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            {/* Col 1: Brand & Desc */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4">
              <a href="#">
                <img src="logo.webp" alt="MITE Logo" className="h-24 w-auto object-contain" />
              </a>
              <p className="text-white/60 leading-relaxed max-w-xs text-xs md:text-sm">
                Ingeniería y mantenimiento de precisión para garantizar la continuidad y seguridad de tus operaciones comerciales e industriales.
              </p>
              <div className="flex items-center gap-2 mt-2 bg-white/5 border border-white/10 rounded-xl p-2.5 w-max">
                <span className="material-symbols-outlined text-[#ffdbd1] text-lg">verified</span>
                <span className="text-[11px] text-white/70 font-semibold tracking-wider uppercase">Técnicos Certificados DC-3</span>
              </div>
            </div>

            {/* Grouped Col 2 & 3: Services & Company in a 2-column sub-grid (mobile only) */}
            <div className="grid grid-cols-2 md:contents gap-6">
              {/* Services Quick Links */}
              <div className="flex flex-col gap-4">
                <h4 className="font-label-md text-label-md font-bold text-[#ffb5a0] uppercase tracking-wider">Servicios</h4>
                <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
                  <li>
                    <a href="#hvac" className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      HVAC y Refrigeración
                    </a>
                  </li>
                  <li>
                    <a href="#electrical" className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      Instalaciones Eléctricas
                    </a>
                  </li>
                  <li>
                    <a href="#backups" className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      Sistemas UPS y Redes
                    </a>
                  </li>
                  <li>
                    <a href="#infrastructure" className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      Maquinaria y Obra Civil
                    </a>
                  </li>
                  <li>
                    <a href="#energy-efficiency" className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      Eficiencia y Calidad de Energía
                    </a>
                  </li>
                  <li>
                    <a href="#training" className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      Capacitación y Cursos Técnicos
                    </a>
                  </li>
                </ul>
              </div>

              {/* Company Links */}
              <div className="flex flex-col gap-4">
                <h4 className="font-label-md text-label-md font-bold text-[#ffb5a0] uppercase tracking-wider">Empresa</h4>
                <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
                  <li>
                    <a href="#about" className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      Acerca de Nosotros
                    </a>
                  </li>
                  <li>
                    <a href="#why-choose-us" className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      Por qué elegir MITE
                    </a>
                  </li>
                  <li>
                    <a href="#identity" className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      Misión y Visión
                    </a>
                  </li>
                  <li>
                    <a href="#contact" className="text-white/60 hover:text-white transition-colors hover:translate-x-1 inline-block duration-200">
                      Solicitar Cotización
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Col 4: Quick Contact */}
            <div className="flex flex-col gap-4">
              <h4 className="font-label-md text-label-md font-bold text-[#ffb5a0] uppercase tracking-wider">Contacto</h4>
              <ul className="flex flex-col gap-3 text-xs md:text-sm text-white/60">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ffdbd1] text-lg">mail</span>
                  <a href="mailto:contacto@mite.com.mx" className="hover:text-white transition-colors">
                    contacto@mite.com.mx
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#ffdbd1] text-lg">phone</span>
                  <a href="tel:+5522875999" className="hover:text-white transition-colors">
                    +55 2287 5999
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#ffdbd1] text-lg mt-0.5">location_on</span>
                  <span>
                    Nezahualcóyotl, Estado de México.<br />
                    {/*<span className="text-[11px] text-[#ffdbd1] font-semibold uppercase tracking-wider">Cobertura Nacional</span>*/}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Divider & Copyright */}
          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-white/50">
            <div>
              © 2026 MITE Mantenimiento Industrial. Todos los derechos reservados.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/525571904860?text=Hola,%20me%20gustaría%20solicitar%20una%20cotización%20de%20mantenimiento%20para%20mi%20negocio."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#25d366] to-[#128c7e] text-white p-4 rounded-full shadow-lg hover:shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group animate-float"
        aria-label="Contactar por WhatsApp"
      >
        {/* Tooltip */}
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-xl shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
          ¿En qué te podemos ayudar? 💬
        </span>
        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.63 2.007 14.162.981 11.534.981 6.1 1.011 1.674 5.432 1.67 10.86c-.001 1.737.453 3.428 1.316 4.922L2.007 21.3l5.823-1.526-.183-.32zm10.741-6.196c-.3-.15-1.774-.875-2.046-.974-.272-.1-.471-.15-.669.15-.198.3-.767.974-.94 1.174-.173.2-.347.225-.647.075-.3-.15-1.269-.468-2.417-1.493-.893-.797-1.496-1.78-1.672-2.08-.175-.3-.019-.462.13-.611.135-.133.3-.349.45-.524.15-.175.2-.299.3-.499.1-.2.05-.375-.025-.524-.075-.15-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.299-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.774-.724 2.022-1.424.248-.699.248-1.299.173-1.424-.075-.125-.272-.199-.572-.349z"/>
        </svg>
      </a>

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`fixed top-24 right-6 z-[100] max-w-md bg-white/95 backdrop-blur-md border rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.1)] flex items-start gap-3 border-l-4 ${
              toast.type === "success"
                ? "border-l-emerald-500 border-white/40"
                : "border-l-rose-500 border-white/40"
            }`}
          >
            {/* Icon */}
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
              toast.type === "success"
                ? "bg-emerald-50 text-emerald-600"
                : "bg-rose-50 text-rose-600"
            }`}>
              <span className="material-symbols-outlined text-[20px] font-bold">
                {toast.type === "success" ? "check_circle" : "error"}
              </span>
            </div>

            {/* Text */}
            <div className="flex-grow pr-4">
              <h4 className="font-bold text-slate-800 text-sm">
                {toast.type === "success" ? "¡Éxito!" : "¡Hubo un error!"}
              </h4>
              <p className="text-slate-600 text-xs mt-0.5 leading-relaxed">
                {toast.message}
              </p>
            </div>

            {/* Close button */}
            <button
              onClick={() => setToast(null)}
              className="text-slate-400 hover:text-slate-600 transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">close</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
