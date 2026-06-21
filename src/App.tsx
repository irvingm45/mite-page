import { Typewriter } from "@/components/ui/typewriter"

export default function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("¡Mensaje enviado con éxito! Nos contactaremos a la brevedad.")
  }

  const glassCardClass = "w-full sm:w-[85%] md:w-[70%] lg:w-[65%] h-full bg-white/45 backdrop-blur-md border border-white/40 shadow-lg rounded-2xl md:rounded-[1.5rem] p-5 md:p-6 flex flex-col justify-center relative z-10"

  return (
    <>
      {/* Global Liquid Blobs (Distributed Palette Colors) */}
      <div className="fixed top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#ffdbd1] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob pointer-events-none z-[-1]"></div>
      <div className="fixed top-[20%] right-[-10%] w-[400px] h-[400px] bg-[#d1e4fb] rounded-full mix-blend-multiply filter blur-[100px] opacity-60 animate-blob animation-delay-2000 pointer-events-none z-[-1]"></div>
      <div className="fixed bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#f5e3d6] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-4000 pointer-events-none z-[-1]"></div>

      {/* TopNavBar Wrapper (Fixed/Sticky) */}
      <div className="fixed top-0 left-0 w-full z-50 flex justify-center p-2 md:p-4 pointer-events-none">
        <nav className="w-full max-w-7xl flex justify-between items-center px-4 md:px-8 py-2 md:py-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-2xl md:rounded-[2rem] pointer-events-auto">
          <div className="font-headline-sm text-headline-sm font-bold text-white">
            MITE
          </div>
          <div className="hidden md:flex items-center space-x-md">
            <a className="text-white/80 hover:text-white transition-colors font-semibold" href="#hvac">HVAC</a>
            <a className="text-white/80 hover:text-white transition-colors font-semibold" href="#electrical">Electrical</a>
            <a className="text-white/80 hover:text-white transition-colors font-semibold" href="#backups">Backups</a>
            <a className="text-white/80 hover:text-white transition-colors font-semibold" href="#infrastructure">Infrastructure</a>
            <a className="text-white/80 hover:text-white transition-colors font-semibold" href="#why-choose-us">Benefits</a>
          </div>
          <button className="bg-gradient-to-r from-[#b2533e] to-[#934a34] hover:from-[#c85a3e] hover:to-[#a3533e] text-white shadow-[0_4px_15px_rgba(147,74,52,0.4)] border border-white/20 hover:scale-105 transition-all px-4 py-1.5 md:px-6 md:py-2 rounded-full text-label-sm md:text-label-md font-bold">
            Get a Quote
          </button>
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
              src="hero_background.webp"
            />
            {/* Soft gradient bottom overlay to blend with the rest of the page */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-black/30"></div>
          </div>

          {/* Centered Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#ffdbd1] px-4 py-1.5 rounded-full w-max shadow-sm mb-4">
              <span className="material-symbols-outlined text-[16px] icon-fill text-[#fea186]">verified</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Ambiente Eficiente</span>
            </div>

            {/* Giant Title "MITE" */}
            <h1 className="font-display font-extrabold text-[5rem] sm:text-[7rem] md:text-[9rem] text-white leading-none tracking-tighter [text-shadow:_0_4px_24px_rgba(0,0,0,0.6)] select-none">
              MITE
            </h1>

            {/* Line 2: "Cuidamos el entorno donde tu negocio" */}
            <h2 className="font-headline font-semibold text-2xl sm:text-3xl md:text-5xl text-white/95 max-w-3xl [text-shadow:_0_2px_12px_rgba(0,0,0,0.6)] select-none leading-tight mt-2">
              Cuidamos el entorno donde tu negocio
            </h2>

            {/* Line 3: Typewriter Animation in Terracotta */}
            <div className="font-headline font-bold text-4xl sm:text-5xl md:text-7xl text-[#ffb5a0] min-h-[48px] md:min-h-[100px] [text-shadow:_0_2px_12px_rgba(0,0,0,0.4)] select-none mt-0 md:mt-2">
              <Typewriter
                text={[
                  "crece",
                  "prospera",
                  "opera seguro",
                  "se mantiene al 100%"
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

        {/* Trust Bar */}
        <section className="bg-white/20 backdrop-blur-md border-y border-white/40 py-md shadow-[0_8px_32px_rgba(0,0,0,0.02)] overflow-hidden">
          <div className="w-full">
            <p className="text-center font-label-md text-label-md text-on-surface-variant mb-sm uppercase tracking-widest font-bold">Con la confianza de sectores clave</p>
            <div className="relative w-full overflow-hidden flex flex-row flex-nowrap opacity-80 [mask-image:_linear-gradient(to_right,_transparent_0,_white_10%_90%,_transparent_100%)]">
              <div className="flex shrink-0 items-center justify-around min-w-full gap-lg md:gap-xl py-2 animate-marquee-right px-[20px] md:px-[32px]">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[32px] text-secondary">school</span><span className="font-headline-sm text-headline-sm text-secondary">Educación</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[32px] text-secondary">hotel</span><span className="font-headline-sm text-headline-sm text-secondary">Hotelería</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[32px] text-secondary">business</span><span className="font-headline-sm text-headline-sm text-secondary">Corporativo</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[32px] text-secondary">storefront</span><span className="font-headline-sm text-headline-sm text-secondary">Retail</span></div>
              </div>
              <div className="flex shrink-0 items-center justify-around min-w-full gap-lg md:gap-xl py-2 animate-marquee-right px-[20px] md:px-[32px]" aria-hidden="true">
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[32px] text-secondary">school</span><span className="font-headline-sm text-headline-sm text-secondary">Educación</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[32px] text-secondary">hotel</span><span className="font-headline-sm text-headline-sm text-secondary">Hotelería</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[32px] text-secondary">business</span><span className="font-headline-sm text-headline-sm text-secondary">Corporativo</span></div>
                <div className="flex items-center gap-2"><span className="material-symbols-outlined text-[32px] text-secondary">storefront</span><span className="font-headline-sm text-headline-sm text-secondary">Retail</span></div>
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Pillar 1: HVAC */}
            <div id="hvac" className="relative h-[280px] sm:h-[300px] md:h-[320px] rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 group" style={{ transform: "translateZ(0)" }}>
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="hvac.webp"
                alt="HVAC y Refrigeración"
              />
              <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-start bg-black/5">
                <div className={glassCardClass}>
                  <div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#ffdbd1] to-[#ffb5a0] rounded-xl flex items-center justify-center mb-3 md:mb-4 text-[#783521] border border-white/50 shadow-sm">
                      <span className="material-symbols-outlined text-[24px] md:text-[28px] icon-fill">ac_unit</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">HVAC y Refrigeración</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Proyectos y mantenimiento correctivo/preventivo de sistemas de aire acondicionado y refrigeración comercial o industrial.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Pillar 2: Electrical */}
            <div id="electrical" className="relative h-[280px] sm:h-[300px] md:h-[320px] rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 group" style={{ transform: "translateZ(0)" }}>
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="electric_instalation.webp"
                alt="Instalaciones Eléctricas"
              />
              <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-start bg-black/5">
                <div className={glassCardClass}>
                  <div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#d1e4fb] to-[#a5b8ce] rounded-xl flex items-center justify-center mb-3 md:mb-4 text-[#091d2e] border border-white/50 shadow-sm">
                      <span className="material-symbols-outlined text-[24px] md:text-[28px] icon-fill">bolt</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">Instalaciones Eléctricas</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Ingeniería y mantenimiento preventivo y correctivo para redes de baja, media y alta tensión, asegurando un suministro continuo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Pillar 3: Backups & Networks */}
            <div id="backups" className="relative h-[280px] sm:h-[300px] md:h-[320px] rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 group" style={{ transform: "translateZ(0)" }}>
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="ups.webp"
                alt="Sistemas UPS y Redes"
              />
              <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-start bg-black/5">
                <div className={glassCardClass}>
                  <div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#ffeedd] to-[#fea186] rounded-xl flex items-center justify-center mb-3 md:mb-4 text-[#76331f] border border-white/50 shadow-sm">
                      <span className="material-symbols-outlined text-[24px] md:text-[28px] icon-fill">battery_charging_full</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">Sistemas UPS y Redes</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Mantenimiento de sistemas UPS para el respaldo de energía ininterrumpida y soluciones integrales en cableado estructurado de redes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* Pillar 4: Infrastructure & Machinery */}
            <div id="infrastructure" className="relative h-[280px] sm:h-[300px] md:h-[320px] rounded-[2rem] overflow-hidden border border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-300 group" style={{ transform: "translateZ(0)" }}>
              <img
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                src="obra_civil.webp"
                alt="Maquinaria y Obra Civil"
              />
              <div className="absolute inset-0 p-4 md:p-6 flex items-center justify-start bg-black/5">
                <div className={glassCardClass}>
                  <div>
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#e4e2dd] to-[#c8c6c2] rounded-xl flex items-center justify-center mb-3 md:mb-4 text-[#31312e] border border-white/50 shadow-sm">
                      <span className="material-symbols-outlined text-[24px] md:text-[28px] icon-fill">construction</span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 font-bold">Maquinaria y Obra Civil</h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      Mantenimiento preventivo/correctivo de maquinaria industrial y el desarrollo de todo tipo de obra civil e infraestructura física.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid / Why Choose Us */}
        <section id="why-choose-us" className="py-xl px-margin-mobile md:px-margin-desktop bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-headline-md text-headline-md text-primary mb-xl text-center">Por qué elegir MITE</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-sm h-auto md:h-[500px]">
              {/* Large Card (Terracotta Overlay) */}
              <div className="md:col-span-2 md:row-span-2 bg-white/40 backdrop-blur-2xl rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.5)] border border-white/60 p-lg flex flex-col justify-end relative overflow-hidden group">
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Technician inspecting an electrical panel" src="tecnico.webp" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#783521]/90 via-[#783521]/30 to-transparent backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 ring-1 ring-inset ring-white/20 rounded-[2rem]"></div>
                <div className="relative z-10 text-white">
                  <div className="flex items-center gap-xs mb-sm"><span className="material-symbols-outlined icon-fill drop-shadow-md">verified_user</span></div>
                  <h3 className="font-headline-sm text-headline-sm mb-xs drop-shadow-md">Confianza Operativa</h3>
                  <p className="font-body-sm text-body-sm opacity-90 drop-shadow-sm">Tus instalaciones en manos de expertos. Reducimos riesgos y garantizamos cumplimiento normativo.</p>
                </div>
              </div>
              {/* Medium Card Top */}
              <div className="md:col-span-2 bg-white/60 backdrop-blur-2xl rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.8)] border border-white/70 p-md flex items-center gap-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#ffdbd1] to-[#ffb5a0] shadow-[inset_0_2px_10px_rgba(255,255,255,0.8)] border border-white/50 flex items-center justify-center shrink-0 relative z-10">
                  <span className="material-symbols-outlined text-[#783521]">support_agent</span>
                </div>
                <div className="relative z-10">
                  <h3 className="font-label-md text-label-md text-on-surface mb-1 font-bold">Soporte 24/7</h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">Atención continua para emergencias críticas. Nunca estás solo ante una falla de infraestructura.</p>
                </div>
              </div>
              {/* Small Cards Bottom (Terracotta and Slate Navy) */}
              <div className="bg-gradient-to-br from-[#934a34] to-[#75331f] text-white rounded-[2rem] shadow-[0_8px_20px_rgba(147,74,52,0.3),inset_0_2px_15px_rgba(255,255,255,0.3)] border border-white/20 p-md flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent pointer-events-none"></div>
                <span className="material-symbols-outlined text-[40px] mb-xs opacity-90 drop-shadow-md relative z-10 group-hover:scale-110 transition-transform">engineering</span>
                <h3 className="font-label-md text-label-md relative z-10 drop-shadow-sm">Técnicos Certificados</h3>
              </div>
              <div className="bg-gradient-to-br from-[#203344] to-[#36485b] text-white rounded-[2rem] shadow-[0_8px_20px_rgba(32,51,68,0.3),inset_0_2px_15px_rgba(255,255,255,0.2)] border border-white/10 p-md flex flex-col justify-center items-center text-center relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/10 to-transparent pointer-events-none"></div>
                <span className="material-symbols-outlined text-[40px] mb-xs opacity-90 drop-shadow-md relative z-10 group-hover:scale-110 transition-transform">handyman</span>
                <h3 className="font-label-md text-label-md relative z-10 drop-shadow-sm">Equipamiento Premium</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-xl px-margin-mobile md:px-margin-desktop bg-transparent max-w-3xl mx-auto relative z-10">
          <div className="bg-white/50 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.05),inset_0_0_30px_rgba(255,255,255,0.8)] border border-white/70 p-lg md:p-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none"></div>
            <div className="text-center mb-lg relative z-10">
              <h2 className="font-headline-md text-headline-md text-primary mb-xs">Hablemos de tu Proyecto</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Completa el formulario y un especialista en mantenimiento comercial te contactará a la brevedad.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-sm relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-sm">
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 ml-2">Nombre Completo</label>
                  <input required className="w-full bg-white/50 backdrop-blur-md border border-white/80 rounded-2xl focus:bg-white/80 focus:ring-2 focus:ring-[#934a34] px-4 py-3 font-body-md text-body-md text-[#0b1c30] transition-all shadow-[inset_0_2px_5px_rgba(0,0,0,0.02)]" placeholder="Ej. Juan Pérez" type="text" />
                </div>
                <div>
                  <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 ml-2">Empresa / Sector</label>
                  <input required className="w-full bg-white/50 backdrop-blur-md border border-white/80 rounded-2xl focus:bg-white/80 focus:ring-2 focus:ring-[#934a34] px-4 py-3 font-body-md text-body-md text-[#0b1c30] transition-all shadow-[inset_0_2px_5px_rgba(0,0,0,0.02)]" placeholder="Ej. Hotel Central" type="text" />
                </div>
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 ml-2">Correo Electrónico</label>
                <input required className="w-full bg-white/50 backdrop-blur-md border border-white/80 rounded-2xl focus:bg-white/80 focus:ring-2 focus:ring-[#934a34] px-4 py-3 font-body-md text-body-md text-[#0b1c30] transition-all shadow-[inset_0_2px_5px_rgba(0,0,0,0.02)]" placeholder="correo@empresa.com" type="email" />
              </div>
              <div>
                <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1 ml-2">Mensaje o Necesidad Principal</label>
                <textarea required className="w-full bg-white/50 backdrop-blur-md border border-white/80 rounded-2xl focus:bg-white/80 focus:ring-2 focus:ring-[#934a34] px-4 py-3 font-body-md text-body-md text-[#0b1c30] transition-all shadow-[inset_0_2px_5px_rgba(0,0,0,0.02)] resize-none" placeholder="Describe brevemente tus necesidades de mantenimiento..." rows={4}></textarea>
              </div>
              <button className="w-full bg-gradient-to-r from-[#934a34] to-[#75331f] text-white shadow-[0_8px_20px_rgba(147,74,52,0.4)] border border-white/30 hover:shadow-[0_10px_25px_rgba(147,74,52,0.5)] transition-all py-4 rounded-full font-label-md text-label-md mt-md flex items-center justify-center font-bold" type="submit">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-tertiary text-on-tertiary font-body-sm text-body-sm w-full px-margin-desktop py-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-md relative z-10 rounded-t-[2rem] mt-auto">
        <div className="font-headline-sm text-headline-sm font-bold text-on-tertiary">
          MITE Industrial
        </div>
        <div className="text-on-tertiary-container">
          © 2026 MITE Industrial Maintenance. Comfort, Safety, and Continuity.
        </div>
        <div className="flex flex-wrap gap-md">
          <a className="text-on-tertiary-container hover:text-[#ffb5a0] transition-colors" href="#">Privacy Policy</a>
          <a className="text-on-tertiary-container hover:text-[#ffb5a0] transition-colors" href="#">Terms of Service</a>
          <a className="text-on-tertiary-container hover:text-[#ffb5a0] transition-colors" href="#">Certifications</a>
          <a className="text-on-tertiary-container hover:text-[#ffb5a0] transition-colors" href="#">Contact Us</a>
        </div>
      </footer>
    </>
  )
}
