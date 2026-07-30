<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Uma experiência musical intimista à luz de velas." />
  <title>Lumine — Concerto à Luz de Velas</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Montserrat:wght@400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <div id="locationGate" class="gate" aria-modal="true" role="dialog">
    <div class="gate-card">
      <div class="flame" aria-hidden="true"></div>
      <p class="eyebrow">Experiência personalizada</p>
      <h1>Encontre concertos próximos a você</h1>
      <p class="gate-copy">
        Para acessar o site, autorize o uso da sua localização. Ela será usada
        para exibir sessões e campanhas da sua região.
      </p>

      <div class="privacy-box">
        <strong>Como a localização será usada</strong>
        <span>Identificação aproximada da região e personalização da experiência.</span>
      </div>

      <button id="allowLocationBtn" class="primary-btn" type="button">
        Permitir localização e entrar
      </button>

      <p id="gateStatus" class="status" aria-live="polite"></p>

      <p class="small-print">
        Ao continuar, você concorda com o uso da localização conforme a
        <button id="openPrivacyBtn" class="text-button" type="button">Política de Privacidade</button>.
      </p>
    </div>
  </div>

  <div id="blockedScreen" class="blocked-screen hidden">
    <div class="blocked-card">
      <div class="lock-icon">✦</div>
      <h2>Acesso indisponível</h2>
      <p>
        A localização é necessária para acessar esta experiência.
        Autorize a permissão no navegador e tente novamente.
      </p>
      <button id="retryBtn" class="primary-btn" type="button">Tentar novamente</button>
      <p class="browser-help">
        Você também pode clicar no ícone de cadeado ao lado do endereço do site
        e alterar a permissão de localização para “Permitir”.
      </p>
    </div>
  </div>

  <main id="siteContent" class="site hidden">
    <header class="hero">
      <nav class="nav container">
        <a href="#" class="brand">LUMINE</a>
        <div class="nav-links">
          <a href="#experiencia">A experiência</a>
          <a href="#programacao">Programação</a>
          <a href="#local">Local</a>
          <a href="#faq">Dúvidas</a>
        </div>
        <button class="nav-cta" data-scroll="#ingressos">Ver ingressos</button>
      </nav>

      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <p class="eyebrow">Música, atmosfera e emoção</p>
        <h1>Uma noite inesquecível<br>à luz de milhares de velas</h1>
        <p class="hero-text">
          Clássicos que atravessam gerações em uma apresentação intimista,
          elegante e envolvente.
        </p>
        <div class="hero-actions">
          <button class="primary-btn" data-scroll="#ingressos">Garantir meu ingresso</button>
          <button class="secondary-btn" data-scroll="#experiencia">Conhecer a experiência</button>
        </div>
        <div class="location-pill">
          <span class="pulse"></span>
          <span style="display:none" id="detectedRegion">Localização autorizada</span>
        </div>
      </div>
    </header>

    <section id="experiencia" class="section experience">
      <div class="container two-columns">
        <div>
          <p class="eyebrow dark">Experiência sensorial</p>
          <h2>Música que transforma o espaço</h2>
          <p>
            Um repertório cuidadosamente selecionado, executado por músicos
            talentosos em um ambiente cercado por luz suave e arquitetura marcante.
          </p>
          <div class="feature-grid">
            <article>
              <span>01</span>
              <h3>Atmosfera única</h3>
              <p>Um cenário criado para desacelerar e viver cada nota.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Repertório especial</h3>
              <p>Obras clássicas e releituras contemporâneas.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Espaços memoráveis</h3>
              <p>Locais escolhidos pela beleza e pela acústica.</p>
            </article>
          </div>
        </div>
        <div class="visual-panel">
          <div class="candle candle-one"></div>
          <div class="candle candle-two"></div>
          <div class="candle candle-three"></div>
          <div class="quote-card">
            <span>“</span>
            <p>Uma experiência delicada, imersiva e completamente diferente.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="programacao" class="section schedule">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Próximas apresentações</p>
            <h2>Escolha sua noite</h2>
          </div>
          <p>Datas demonstrativas para o protótipo.</p>
        </div>

        <div class="event-grid">
          <article class="event-card">
            <div class="event-date"><strong>16</strong><span>AGO</span></div>
            <div>
              <p class="tag">Tributo</p>
              <h3>Queen à Luz de Velas</h3>
              <p>Quarteto de cordas • 19h30</p>
            </div>
            <button data-scroll="#ingressos">Ingressos</button>
          </article>

          <article class="event-card featured">
            <div class="event-date"><strong>23</strong><span>AGO</span></div>
            <div>
              <p class="tag">Mais procurado</p>
              <h3>Clássicos de Hans Zimmer</h3>
              <p>Quarteto de cordas • 21h00</p>
            </div>
            <button data-scroll="#ingressos">Ingressos</button>
          </article>

          <article class="event-card">
            <div class="event-date"><strong>30</strong><span>AGO</span></div>
            <div>
              <p class="tag">Especial</p>
              <h3>Vivaldi: As Quatro Estações</h3>
              <p>Ensemble de câmara • 20h00</p>
            </div>
            <button data-scroll="#ingressos">Ingressos</button>
          </article>
        </div>
      </div>
    </section>

    <section id="local" class="section venue">
      <div class="container venue-grid">
        <div class="venue-card">
          <p class="eyebrow dark">O local</p>
          <h2>Teatro Lumine</h2>
          <p id="venueText">
            O local exato da apresentação pode ser personalizado conforme a cidade
            identificada pelo sistema.
          </p>
          <ul>
            <li>Abertura das portas 45 minutos antes</li>
            <li>Duração aproximada de 60 minutos</li>
            <li>Ambiente climatizado e acessível</li>
          </ul>
        </div>
        <div class="venue-map">
          <div class="map-marker"></div>
          <span style="display:none" id="mapRegion">Sua região</span>
        </div>
      </div>
    </section>

    <section id="ingressos" class="section tickets">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Ingressos</p>
            <h2>Reserve seu lugar</h2>
          </div>
          <p>Valores demonstrativos.</p>
        </div>

        <div class="ticket-grid">
          <article class="ticket-card">
            <p class="ticket-zone">Zona C</p>
            <h3>Essencial</h3>
            <div class="price"><span>R$</span>89</div>
            <p>Boa visão geral do palco e da ambientação.</p>
            <button class="secondary-btn buy-btn">Selecionar</button>
          </article>

          <article class="ticket-card recommended">
            <div class="recommended-label">Recomendado</div>
            <p class="ticket-zone">Zona B</p>
            <h3>Imersiva</h3>
            <div class="price"><span>R$</span>129</div>
            <p>Posição central e proximidade da iluminação.</p>
            <button class="primary-btn buy-btn">Selecionar</button>
          </article>

          <article class="ticket-card">
            <p class="ticket-zone">Zona A</p>
            <h3>Premium</h3>
            <div class="price"><span>R$</span>169</div>
            <p>Assentos próximos ao palco e visão privilegiada.</p>
            <button class="secondary-btn buy-btn">Selecionar</button>
          </article>
        </div>
      </div>
    </section>

    <section id="faq" class="section faq">
      <div class="container narrow">
        <p class="eyebrow dark">Dúvidas frequentes</p>
        <h2>Antes de viver a experiência</h2>

        <details>
          <summary>As velas são reais?</summary>
          <p>Por segurança, a ambientação utiliza velas de LED de alta qualidade.</p>
        </details>
        <details>
          <summary>Posso chegar atrasado?</summary>
          <p>A entrada após o início pode não ser permitida, conforme a organização local.</p>
        </details>
        <details>
          <summary>O evento possui acessibilidade?</summary>
          <p>Sim. O protótipo prevê espaços acessíveis e atendimento prioritário.</p>
        </details>
      </div>
    </section>

    <footer>
      <div class="container footer-grid">
        <div>
          <a href="#" class="brand">LUMINE</a>
          <p>Concertos que iluminam memórias.</p>
        </div>
        <div>
          <strong>Informações</strong>
          <button id="footerPrivacyBtn" class="footer-link">Política de Privacidade</button>
          <a href="#faq">Perguntas frequentes</a>
        </div>
        <div>
          <strong>Localização da sessão</strong>
          <span>Os dados técnicos e a localização opcional são usados para análise de acessos.</span>
        </div>
      </div>
    </footer>
  </main>

  <div id="locationNotice" class="location-notice hidden" role="status">
    <div>
      <strong>Localização opcional</strong>
      <p>Seu navegador solicitará acesso à localização. Você pode negar e continuar usando o site normalmente.</p>
    </div>
    <button id="dismissLocationNotice" type="button" aria-label="Fechar aviso">×</button>
  </div>

  <div id="privacyModal" class="modal hidden" aria-modal="true" role="dialog">
    <div class="modal-card">
      <button id="closePrivacyBtn" class="modal-close" aria-label="Fechar">×</button>
      <p class="eyebrow dark">Privacidade</p>
      <h2>Privacidade e dados técnicos</h2>
      <p>
        Ao abrir a página, o site registra dados técnicos do acesso, como IP público,
        navegador, sistema, resolução, idioma, fuso horário e página de origem.
      </p>
      <p>
        O navegador também solicitará sua localização. A autorização é opcional:
        negar ou ignorar o pedido não bloqueia nenhuma parte do site.
      </p>
      <p>
        Quando autorizada, a latitude, a longitude e a precisão informada pelo navegador
        são enviadas à planilha usada para análise de acessos.
      </p>
    </div>
  </div>

  <div id="toast" class="toast hidden">Seleção adicionada ao protótipo.</div>

  <script src="script.js"></script>
</body>
</html>
