const LiftDiamond = () => {
  const whatsappUrl =
    "https://wa.me/5547991549098?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20para%20o%20Protocolo%20Lift%20Diamond";

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#1c2b26", color: "#f0ede8", overflowX: "hidden" }}>

      {/* Google Fonts */}
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400;1,500&family=DM+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />

      <style>{`
        .ld-nav { padding: 14px 48px; display: flex; align-items: center; justify-content: space-between; background: #172219; position: sticky; top: 0; z-index: 100; }
        .ld-nav-logo img { height: 48px; width: auto; object-fit: contain; }
        .ld-nav-links { display: flex; gap: 36px; }
        .ld-nav-link { font-size: 14px; color: #8a9e97; text-decoration: none; transition: color 0.2s; }
        .ld-nav-link:hover { color: #f0ede8; }
        .ld-btn-nav { display: flex; align-items: center; gap: 8px; background: #4ecdc4; color: #111; padding: 12px 24px; border-radius: 50px; font-size: 13px; font-weight: 600; text-decoration: none; white-space: nowrap; }

        .ld-hero { display: flex; align-items: center; justify-content: center; min-height: 92vh; background: #1c2b26; padding: 0 60px; }
        .ld-hero-text { max-width: 720px; width: 100%; padding: 80px 0; display: flex; flex-direction: column; justify-content: center; }
        .ld-hero-label { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #4ecdc4; font-weight: 500; margin-bottom: 20px; display: block; }
        .ld-hero-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(52px, 7vw, 90px); font-weight: 400; line-height: 0.95; margin-bottom: 24px; color: #f0ede8; }
        .ld-hero-title em { font-style: italic; color: #4ecdc4; }
        .ld-hero-desc { font-size: 15px; line-height: 1.9; color: #8a9e97; margin-bottom: 16px; font-weight: 300; max-width: 460px; }
        .ld-hero-desc strong { color: #f0ede8; font-weight: 500; }
        .ld-hero-stats { display: flex; gap: 36px; margin: 36px 0; flex-wrap: wrap; }
        .ld-stat { text-align: center; }
        .ld-stat-icon { font-size: 20px; color: #4ecdc4; margin-bottom: 6px; }
        .ld-stat-num { font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 500; color: #f0ede8; line-height: 1; }
        .ld-stat-label { font-size: 11px; color: #8a9e97; margin-top: 4px; }
        .ld-hero-btns { display: flex; gap: 14px; flex-wrap: wrap; }
        .ld-btn-primary { display: flex; align-items: center; gap: 8px; background: #4ecdc4; color: #111; padding: 16px 34px; border-radius: 50px; font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.3s; }
        .ld-btn-primary:hover { background: #3dbdb5; transform: translateY(-2px); }
        .ld-btn-ghost { display: flex; align-items: center; border: 1.5px solid rgba(255,255,255,0.25); color: #f0ede8; padding: 16px 34px; border-radius: 50px; font-size: 14px; text-decoration: none; transition: all 0.3s; }
        .ld-btn-ghost:hover { border-color: #f0ede8; }

        .ld-section-light { padding: 90px 60px; background: #f5f4f0; }
        .ld-section-dark { padding: 90px 60px; background: #172219; }
        .ld-section-mid { padding: 90px 60px; background: #1c2b26; }
        .ld-section-inner { max-width: 1100px; margin: 0 auto; }
        .ld-label { font-size: 11px; letter-spacing: 4px; text-transform: uppercase; color: #4ecdc4; font-weight: 500; margin-bottom: 14px; display: block; }
        .ld-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 5vw, 58px); font-weight: 400; line-height: 1.1; margin-bottom: 16px; }
        .ld-title em { font-style: italic; color: #4ecdc4; }
        .ld-title-dk { color: #111; }
        .ld-subtitle { font-size: 15px; line-height: 1.8; max-width: 580px; font-weight: 300; margin-bottom: 52px; }
        .ld-subtitle-dk { color: #666; }
        .ld-subtitle-lt { color: #8a9e97; }

        .ld-steps-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(230px, 1fr)); gap: 20px; }
        .ld-step-card { background: #fff; border-radius: 16px; padding: 34px 26px; border: 1px solid #e0ddd8; transition: all 0.3s; }
        .ld-step-card:hover { box-shadow: 0 12px 40px rgba(0,0,0,0.1); transform: translateY(-4px); border-color: #4ecdc4; }
        .ld-step-icon { width: 50px; height: 50px; background: linear-gradient(135deg, rgba(78,205,196,0.2), rgba(78,205,196,0.06)); border-radius: 12px; display: flex; align-items: center; justify-content: center; margin-bottom: 18px; font-size: 22px; }
        .ld-step-num { font-size: 10px; letter-spacing: 3px; color: #4ecdc4; font-weight: 500; text-transform: uppercase; margin-bottom: 8px; }
        .ld-step-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 500; margin-bottom: 10px; color: #111; }
        .ld-step-desc { font-size: 13px; color: #666; line-height: 1.8; font-weight: 300; }

        .ld-tech-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .ld-tech-layout-noimg { grid-template-columns: 1fr; max-width: 720px; margin: 0 auto; }
        .ld-laser-wrap { display: flex; justify-content: center; align-items: center; background: #1a2e25; border-radius: 20px; padding: 64px 48px; min-height: 460px; position: relative; overflow: visible; }
        .ld-laser-wrap::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at center, rgba(78,205,196,0.08), transparent 70%); }
        .ld-laser-wrap img { max-height: 300px; width: auto; object-fit: contain; position: relative; z-index: 2; filter: drop-shadow(0 20px 40px rgba(0,0,0,0.5)); }
        .ld-tech-list { display: flex; flex-direction: column; margin-top: 28px; }
        .ld-tech-item { display: flex; gap: 16px; padding: 22px 0; border-bottom: 1px solid rgba(255,255,255,0.08); }
        .ld-tech-item:first-child { border-top: 1px solid rgba(255,255,255,0.08); }
        .ld-tech-dot { width: 8px; height: 8px; background: #4ecdc4; border-radius: 50%; flex-shrink: 0; margin-top: 6px; }
        .ld-tech-item-title { font-size: 14px; font-weight: 500; color: #f0ede8; margin-bottom: 5px; }
        .ld-tech-item-desc { font-size: 13px; color: #8a9e97; line-height: 1.7; font-weight: 300; }

        .ld-ad-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-top: 52px; }
        .ld-ad-card { background: #172219; border-radius: 16px; overflow: hidden; border: 1px solid rgba(255,255,255,0.06); }
        .ld-ad-images { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .ld-ad-slot { width: 100%; height: 220px; background: #243028; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px; }
        .ld-ad-slot span.icon { font-size: 28px; }
        .ld-ad-slot span.txt { font-size: 10px; letter-spacing: 2px; color: #3a5047; text-transform: uppercase; }
        .ld-ad-slot-single { width: 100%; height: 280px; background: #243028; display: flex; align-items: center; justify-content: center; flex-direction: column; gap: 8px; }
        .ld-ad-slot-single span.icon { font-size: 32px; }
        .ld-ad-slot-single span.txt { font-size: 10px; letter-spacing: 2px; color: #3a5047; text-transform: uppercase; }
        .ld-ad-images img { width: 100%; height: 220px; object-fit: cover; display: block; }
        .ld-ad-labels { display: grid; grid-template-columns: 1fr 1fr; gap: 2px; }
        .ld-ad-lbl { text-align: center; padding: 8px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; font-weight: 600; }
        .ld-ad-lbl-a { background: #1a2e25; color: #4a6a5a; }
        .ld-ad-lbl-d { background: rgba(78,205,196,0.08); color: #4ecdc4; }
        .ld-ad-info { padding: 20px 24px; }
        .ld-ad-title { font-size: 13px; font-weight: 500; color: #f0ede8; margin-bottom: 6px; }
        .ld-ad-desc { font-size: 12px; color: #8a9e97; font-weight: 300; }

        .ld-results-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-top: 52px; }
        .ld-result-card { background: #fff; border-radius: 16px; padding: 34px 26px; border: 1px solid #e8e5e0; transition: all 0.3s; }
        .ld-result-card:hover { border-color: #4ecdc4; box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
        .ld-result-bar { width: 40px; height: 3px; background: #4ecdc4; border-radius: 2px; margin-bottom: 18px; }
        .ld-result-title { font-family: 'Cormorant Garamond', serif; font-size: 22px; font-weight: 500; margin-bottom: 10px; color: #111; }
        .ld-result-desc { font-size: 13px; color: #666; line-height: 1.8; font-weight: 300; }

        .ld-cta { display: grid; grid-template-columns: 1fr 1fr; background: #172219; }
        .ld-cta-photo { min-height: 460px; background: #1a2e25; display: flex; align-items: center; justify-content: center; overflow: hidden; padding: 40px; }
        .ld-cta-locations { display: flex; flex-direction: column; gap: 20px; width: 100%; max-width: 380px; }
        .ld-location-card { display: flex; align-items: center; gap: 16px; padding: 22px 24px; border: 1px solid rgba(78,205,196,0.25); border-radius: 12px; background: rgba(78,205,196,0.04); text-decoration: none; transition: all 0.3s ease; }
        .ld-location-card:hover { border-color: #4ecdc4; background: rgba(78,205,196,0.09); transform: translateY(-2px); }
        .ld-location-pin { font-size: 22px; flex-shrink: 0; }
        .ld-location-info { display: flex; flex-direction: column; gap: 4px; }
        .ld-location-name { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-style: italic; color: #f0ede8; }
        .ld-location-address { font-size: 12.5px; color: #8a9e97; font-weight: 300; line-height: 1.5; }
        .ld-cta-text { padding: 80px 60px; display: flex; flex-direction: column; justify-content: center; }
        .ld-cta-title { font-family: 'Cormorant Garamond', serif; font-size: clamp(36px, 5vw, 56px); font-weight: 400; color: #f0ede8; line-height: 1.1; margin-bottom: 20px; }
        .ld-cta-title em { font-style: italic; color: #4ecdc4; }
        .ld-cta-desc { font-size: 15px; color: #8a9e97; line-height: 1.9; margin-bottom: 40px; font-weight: 300; }
        .ld-btn-cta { display: inline-flex; align-items: center; gap: 10px; background: #4ecdc4; color: #111; padding: 18px 44px; border-radius: 50px; font-size: 14px; font-weight: 600; text-decoration: none; transition: all 0.3s; align-self: flex-start; }
        .ld-btn-cta:hover { background: #3dbdb5; transform: translateY(-2px); }
        .ld-cta-note { font-size: 11px; color: #8a9e97; margin-top: 14px; opacity: 0.6; }

        .ld-footer { background: #0d1510; padding: 36px 60px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
        .ld-footer-logo img { height: 36px; width: auto; opacity: 0.85; }
        .ld-footer-links { display: flex; gap: 28px; }
        .ld-footer-link { font-size: 11px; color: #3a5047; text-decoration: none; transition: color 0.2s; letter-spacing: 1px; }
        .ld-footer-link:hover { color: #4ecdc4; }

        @media (max-width: 768px) {
          .ld-nav { padding: 14px 20px; }
          .ld-nav-links { display: none; }
          .ld-hero { padding: 0 24px; }
          .ld-hero-text { padding: 48px 0; }
          .ld-section-light, .ld-section-dark, .ld-section-mid { padding: 60px 24px; }
          .ld-tech-layout { grid-template-columns: 1fr; }
          .ld-cta { grid-template-columns: 1fr; }
          .ld-cta-photo { min-height: 0; padding: 40px 24px; }
          .ld-cta-locations { max-width: 100%; }
          .ld-cta-text { padding: 60px 24px; }
          .ld-footer { padding: 28px 24px; flex-direction: column; text-align: center; }
        }
      `}</style>

      {/* NAV */}
      <nav className="ld-nav">
        <div className="ld-nav-logo">
          <a href="/">
            <img
              src="/logo-white-teal.png"
              alt="New Age Derma"
            />
          </a>
        </div>
        <div className="ld-nav-links">
          <a href="/" className="ld-nav-link">Especialidades</a>
          <a href="/" className="ld-nav-link">Sobre</a>
          <a href="/" className="ld-nav-link">Depoimentos</a>
        </div>
        <a href={whatsappUrl} className="ld-btn-nav" target="_blank" rel="noopener noreferrer">
          💬 Agendar Consulta
        </a>
      </nav>

      {/* HERO */}
      <div className="ld-hero">
        <div className="ld-hero-text">
          <span className="ld-hero-label">DR. FABRICIO DALL'IGNA — NEW AGE DERMA</span>
          <h1 className="ld-hero-title">
            Lift<br /><em>Diamond™</em><br />o protocolo<br />completo
          </h1>
          <p className="ld-hero-desc">
            Programa exclusivo de <strong>3 a 6 meses</strong> com Laser CO2 ultrafracionado + exossomos regenerativos. Resultados progressivos, naturais e duradouros.
          </p>
          <div className="ld-hero-stats">
            <div className="ld-stat">
              <div className="ld-stat-icon">⏱</div>
              <div className="ld-stat-num">3-6</div>
              <div className="ld-stat-label">meses de programa</div>
            </div>
            <div className="ld-stat">
              <div className="ld-stat-icon">✦</div>
              <div className="ld-stat-num">2</div>
              <div className="ld-stat-label">tecnologias</div>
            </div>
            <div className="ld-stat">
              <div className="ld-stat-icon">🛡</div>
              <div className="ld-stat-num">0</div>
              <div className="ld-stat-label">downtime</div>
            </div>
          </div>
          <div className="ld-hero-btns">
            <a href={whatsappUrl} className="ld-btn-primary" target="_blank" rel="noopener noreferrer">
              💬 Agendar Avaliação
            </a>
            <a href="#protocolo" className="ld-btn-ghost">Conhecer o Protocolo</a>
          </div>
        </div>
      </div>

      {/* PROTOCOLO */}
      <div className="ld-section-light" id="protocolo">
        <div className="ld-section-inner">
          <span className="ld-label">Como funciona</span>
          <h2 className="ld-title ld-title-dk">Um programa <em>completo</em>,<br />não um procedimento isolado</h2>
          <p className="ld-subtitle ld-subtitle-dk">Pensado para restaurar a estrutura, a firmeza e a qualidade da sua pele de forma progressiva e natural.</p>
          <div className="ld-steps-grid">
            {[
              { icon: "🔍", num: "Etapa 01", title: "Avaliação Personalizada", desc: "Consulta detalhada com o Dr. Fabricio para mapear as necessidades da sua pele e definir o protocolo ideal." },
              { icon: "⚡", num: "Etapa 02", title: "Laser CO2 Ultrafracionado", desc: "SmartXIDE Punto DEKA com Cool Peel. Mínimo desconforto, sem crostas e retração imediata visível." },
              { icon: "🔬", num: "Etapa 03", title: "Exossomos por Drug Delivery", desc: "Aplicados imediatamente após o laser para potencializar a regeneração e acelerar a recuperação." },
              { icon: "📅", num: "Etapa 04", title: "3 a 6 Meses de Acompanhamento", desc: "Protocolo domiciliar exclusivo e revisões periódicas ao longo do programa para maximizar e manter os resultados." },
            ].map((s) => (
              <div key={s.num} className="ld-step-card">
                <div className="ld-step-icon">{s.icon}</div>
                <div className="ld-step-num">{s.num}</div>
                <div className="ld-step-title">{s.title}</div>
                <div className="ld-step-desc">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECNOLOGIA */}
      <div className="ld-section-dark">
        <div className="ld-section-inner">
          <div className="ld-tech-layout ld-tech-layout-noimg">
            <div>
              <span className="ld-label">A tecnologia</span>
              <h2 className="ld-title">Laser CO2 <em>SmartXIDE</em><br />Punto DEKA</h2>
              <p className="ld-subtitle ld-subtitle-lt">Pulso ultrafracionado com ponteira Cool Peel para máxima eficácia com mínimo desconforto.</p>
              <div className="ld-tech-list">
                {[
                  { title: "Pulso ultrafracionado preciso", desc: "Microestímulos controlados sem agressão superficial — sem crostas, recuperação confortável." },
                  { title: "Retração imediata e visível", desc: "Efeito lifting perceptível já na primeira sessão." },
                  { title: "Ação profunda nas camadas dérmicas", desc: "Ativa produção de colágeno e elastina e reorganiza toda a estrutura da pele." },
                ].map((item) => (
                  <div key={item.title} className="ld-tech-item">
                    <div className="ld-tech-dot" />
                    <div>
                      <div className="ld-tech-item-title">{item.title}</div>
                      <div className="ld-tech-item-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ANTES E DEPOIS */}
      <div className="ld-section-mid">
        <div className="ld-section-inner">
          <span className="ld-label">Resultados reais</span>
          <h2 className="ld-title">Transformações <em>comprovadas</em></h2>
          <p className="ld-subtitle ld-subtitle-lt">Resultados de pacientes tratados com o protocolo Lift Diamond.</p>
          <div className="ld-ad-grid">
            {[
              { title: "Cicatriz de Acne", desc: "caso 1", img:  "/IMG_1970 2.jpg" },
              { title: "Cicatriz de Acne", desc: "Caso 2", img: "/IMG_1974 3.jpg" },
              { title: "Rejuvenescimento Avançado", desc: "Caso 1", img: "/IMG_1971 2.jpg" },
              { title: "Rejuvenescimento Avançado", desc: "Caso 2", img: "/IMG_1972 2.jpg" },
              { title: "Rejuvenescimento Avançado", desc: "Caso 3", img: "/IMG_1973 2.jpg" },
              { title: "Cicatriz de Acne", desc: "Caso 3", img: "/lift-diamond-resultado-acne-3.jpg" },
              { title: "Rejuvenescimento Avançado", desc: "Caso 4", img: "/lift-diamond-resultado-4.jpg" },
              { title: "Rejuvenescimento Avançado", desc: "Caso 5", img: "/lift-diamond-resultado-5.jpg" },
              { title: "Rejuvenescimento Avançado", desc: "Caso 6", img: "/lift-diamond-resultado-6.jpg" },
            ].map((ad, i) => (
            <div key={`${ad.title}-${i}`} className="ld-ad-card">
              {ad.img ? ( 
              <img
              src={ad.img} 
               alt={`${ad.title} - ${ad.desc}`}
             style={{ width: "100%", height: 280, objectFit: "cover", display: "block" }}
            />
            ) : (
         <div className="ld-ad-slot-single"><span className="icon">📷</span><span className="txt">Aguardando foto</span></div>
        )}
       <div className="ld-ad-info">
       <div className="ld-ad-title">{ad.title}</div>
       <div className="ld-ad-desc">{ad.desc}</div>
      </div>
   </div>
        ))}       
            </div> 
               {/* RESULTADOS */}
      <div className="ld-section-light">
        <div className="ld-section-inner">
          <span className="ld-label">O que você vai conquistar</span>
          <h2 className="ld-title ld-title-dk">Resultados <em>progressivos</em> e naturais</h2>
          <p className="ld-subtitle ld-subtitle-dk">Ao longo dos 3 a 6 meses de programa, sua pele se transforma de dentro para fora.</p>
          <div className="ld-results-grid">
            {[
              { title: "Textura Renovada", desc: "Pele mais lisa, macia e visivelmente renovada já nas primeiras semanas." },
              { title: "Tom Uniforme", desc: "Redução de manchas e poros. Mais luminosidade e homogeneidade." },
              { title: "Firmeza Real", desc: "Estímulo intenso de colágeno e elastina com efeito lifting natural." },
              { title: "Regeneração Celular", desc: "Exossomos elevam os resultados a um novo patamar de qualidade da pele." },
            ].map((r) => (
              <div key={r.title} className="ld-result-card">
                <div className="ld-result-bar" />
                <div className="ld-result-title">{r.title}</div>
                <div className="ld-result-desc">{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="ld-cta">
        <div className="ld-cta-photo">
          <div className="ld-cta-locations">
            <a
              href="https://maps.app.goo.gl/ZGymksmYAyDT7ZWD7?g_st=ic"
              target="_blank"
              rel="noopener noreferrer"
              className="ld-location-card"
            >
              <span className="ld-location-pin">📍</span>
              <span className="ld-location-info">
                <span className="ld-location-name">Balneário Camboriú</span>
                <span className="ld-location-address">Rua Miguel Matte, 687 – Sala 1605, Pioneiros</span>
              </span>
            </a>
            <a
              href="https://maps.google.com/maps/place//data=!4m2!3m1!1s0x94dce73545caf83b:0x43bdb9a5dab2fcc7?entry=s&sa=X&ved=2ahUKEwi1tdyTtP2VAxVQlZUCHTGjFIkQ4kB6BAgDEAA&hl=pt"
              target="_blank"
              rel="noopener noreferrer"
              className="ld-location-card"
            >
              <span className="ld-location-pin">📍</span>
              <span className="ld-location-info">
                <span className="ld-location-name">Curitiba</span>
                <span className="ld-location-address">Av. Anita Garibaldi, 850 – Sala 601/602, Cabral</span>
              </span>
            </a>
          </div>
        </div>
        <div className="ld-cta-text">
          <span className="ld-label">Agende sua avaliação</span>
          <h2 className="ld-cta-title">Conheça o <em>futuro</em> da sua pele</h2>
          <p className="ld-cta-desc">Avaliação personalizada com o Dr. Fabricio Dall'Igna em Balneário Camboriú. Descubra se o Protocolo Lift Diamond é ideal para você.</p>
          <a href={whatsappUrl} className="ld-btn-cta" target="_blank" rel="noopener noreferrer">
            💬 Agendar via WhatsApp
          </a>
          <p className="ld-cta-note">New Age Derma · Balneário Camboriú · @newagederma.bc</p>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="ld-footer">
        <div className="ld-footer-logo">
          <img
            src="/logo-white-teal.png"
            alt="New Age Derma"
          />
        </div>
        <div className="ld-footer-links">
          <a href="https://newagedermabc.com.br" className="ld-footer-link">newagedermabc.com.br</a>
          <a href="https://instagram.com/newagederma.bc" className="ld-footer-link">@newagederma.bc</a>
          <a href={whatsappUrl} className="ld-footer-link" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </footer>

    </div>
  );
};

export default LiftDiamond;
