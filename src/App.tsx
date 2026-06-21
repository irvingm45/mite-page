import { Typewriter } from "@/components/ui/typewriter"

export default function App() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert("¡Mensaje enviado con éxito! Nos contactaremos a la brevedad.")
  }

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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMw997aBY6wMq_AkAp6iK-tlJzAyKIRIK9Uq2tniaT-7mRVs-12aET-bAT1EDY3sMeHVFWLcAEtsY--SgnQooUFA1p0Q5kOApwZcWC5D23iIeFU24DcSuTDotQXOGehg9C_hvNJgGJeZfN456FCUuSj02ZSSQbBo-vNxyalMdE1a2b9zQW3OAhbR6yHqooTQ08hihybbuw0upXiUACTQ5xerVAYCjxlPneE3AYVEyBJRtOCQgarhaBbovrl1nwri-fJnpFfDI-STk"
            />
            {/* Soft gradient bottom overlay to blend with the rest of the page */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#faf9f7] via-transparent to-black/30"></div>
          </div>

          {/* Centered Content Container */}
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-[#ffdbd1] px-4 py-1.5 rounded-full w-max shadow-sm mb-4">
              <span className="material-symbols-outlined text-[16px] icon-fill text-[#fea186]">verified</span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider font-bold">Mantenimiento Industrial</span>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Pillar 1 */}
            <div id="hvac" className="bg-white/50 backdrop-blur-2xl p-lg rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.8)] border border-white/60 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,1)] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none transition-opacity group-hover:opacity-100"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#ffdbd1] to-[#ffb5a0] rounded-2xl flex items-center justify-center mb-md text-[#783521] shadow-[inset_0_2px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(255,181,160,0.5)] border border-white/50 relative z-10">
                <span className="material-symbols-outlined text-[32px] icon-fill">mode_fan</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs relative z-10">Clima Perfecto</h3>
              <p className="font-body-md text-body-md text-on-surface-variant relative z-10">Sistemas HVAC y calidad de aire optimizados para asegurar el confort de estudiantes, huéspedes y colaboradores en todo momento.</p>
            </div>
            {/* Pillar 2 */}
            <div id="electrical" className="bg-white/50 backdrop-blur-2xl p-lg rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.8)] border border-white/60 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,1)] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none transition-opacity group-hover:opacity-100"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#d1e4fb] to-[#a5b8ce] rounded-2xl flex items-center justify-center mb-md text-[#091d2e] shadow-[inset_0_2px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(165,184,206,0.5)] border border-white/50 relative z-10">
                <span className="material-symbols-outlined text-[32px] icon-fill">bolt</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs relative z-10">Energía Ininterrumpida</h3>
              <p className="font-body-md text-body-md text-on-surface-variant relative z-10">Sistemas eléctricos y soluciones de respaldo (backups) robustos para que tu operación nunca se detenga, sin importar las circunstancias.</p>
            </div>
            {/* Pillar 3 */}
            <div id="infrastructure" className="bg-white/50 backdrop-blur-2xl p-lg rounded-[2rem] shadow-[0_8px_32px_rgba(0,0,0,0.05),inset_0_0_20px_rgba(255,255,255,0.8)] border border-white/60 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(0,0,0,0.1),inset_0_0_30px_rgba(255,255,255,1)] transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/60 to-transparent pointer-events-none transition-opacity group-hover:opacity-100"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#e4e2dd] to-[#c8c6c2] rounded-2xl flex items-center justify-center mb-md text-[#31312e] shadow-[inset_0_2px_10px_rgba(255,255,255,0.9),0_4px_15px_rgba(200,198,194,0.5)] border border-white/50 relative z-10">
                <span className="material-symbols-outlined text-[32px] icon-fill">shield</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-xs relative z-10">Espacios Seguros</h3>
              <p className="font-body-md text-body-md text-on-surface-variant relative z-10">Mantenimiento general e infraestructura estructural para garantizar la seguridad total de las instalaciones y de quienes las ocupan.</p>
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
                <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Technician inspecting an electrical panel" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCF-D5xmWRHkE-EC3lPXIbYo-POA6lbtLwvUFokwtZYGj6VGwSTBXgqVq5Z1zRqGUJpjNCrNoHuUWQ2YMQmEuFRsx6Ike_2PUSMa45O16HZ67PC3K-BCfTk4jd31XJ02QfCKWdtho_yJlfdjmrR5ejNx1E8sWt6Ygq2bnvh05yqM5wWjJ5gi37xLlVfzV1WK_DzFEjwmM3TCO5zFWRzamtaNlEFTaZ6DDcf152Ja6UvSo3gQrHTqe0q23bTIM4nULomzlcyNWJKnfo" />
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
