# [ETR] ENTER THE RENDER
## Plano de Implementação — Conductor.build

---

### VISÃO GERAL

**Objetivo:** Migrar o protótipo React (artifact) para um site Next.js completo, deployado em produção com domínio próprio.

**Stack escolhida:**
- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + CSS Modules (para animações custom)
- **Deploy:** Vercel
- **Domínio:** entertherender.com (já adquirido)
- **IDE:** Conductor.build (agentes Claude Code em paralelo)
- **Hosting de imagens:** Vercel (otimização automática com next/image)

**Referências:**
- Brand Guide: `enter-the-render-brand-guide.html`
- Protótipo React: `enter-the-render-website.jsx`
- Portfólio: 20 renders (01.png–20.png)

---

### ESTRUTURA DO PROJETO

```
enter-the-render/
├── conductor.json              # Config do Conductor
├── next.config.ts
├── tailwind.config.ts
├── package.json
├── tsconfig.json
├── public/
│   ├── fonts/
│   │   ├── IBMPlexMono-*.woff2
│   │   └── Orbitron-*.woff2
│   ├── images/
│   │   ├── portfolio/
│   │   │   ├── residencia-costeira/
│   │   │   │   ├── hero.jpg
│   │   │   │   ├── 01.jpg ... 06.jpg
│   │   │   ├── loft-contemporaneo/
│   │   │   ├── fachada-monolito/
│   │   │   └── refugio-mineral/
│   │   ├── og-image.jpg          # OpenGraph (1200x630)
│   │   └── favicon.ico
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root layout + fonts + metadata
│   │   ├── page.tsx              # Landing page (single page)
│   │   ├── globals.css           # Tailwind + custom animations
│   │   └── projeto/
│   │       └── [slug]/
│   │           └── page.tsx      # Página individual de projeto (futuro)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── LoadingScreen.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── Stats.tsx
│   │   │   ├── Services.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Process.tsx
│   │   │   ├── Quote.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── SectionHeader.tsx
│   │   │   ├── ServiceCard.tsx
│   │   │   ├── ProjectCard.tsx
│   │   │   └── ProcessStep.tsx
│   │   └── effects/
│   │       ├── Scanlines.tsx
│   │       ├── GridBackground.tsx
│   │       ├── TypingEffect.tsx
│   │       └── ScrollReveal.tsx
│   ├── lib/
│   │   ├── constants.ts          # Cores, textos, dados
│   │   └── utils.ts              # Helpers
│   └── hooks/
│       ├── useScrollPosition.ts
│       ├── useIntersection.ts
│       └── useTypingEffect.ts
└── .env.local
```

---

### CONDUCTOR.JSON

```json
{
  "scripts": {
    "setup": "cp $CONDUCTOR_ROOT_PATH/.env.local .env.local && npm install",
    "dev": "npm run dev",
    "build": "npm run build",
    "lint": "npm run lint"
  }
}
```

---

### FASE 1 — SETUP (1 agente, ~30 min)

**Workspace: `setup-project`**

Prompt para o agente:
```
Criar projeto Next.js 14 com App Router e TypeScript.
Instalar: tailwindcss, framer-motion, lucide-react.
Configurar Tailwind com a paleta ETR:
- cream: #FAF7F0
- beige: #F5F0E8, #E8DCC8, #D4C4A8
- olive: #8B9A6B, #6B7F4A, #4A5A33, #3A4828
- brown: #A68B6B, #7A6248, #5C4A36, #3D3024
- amber: #C4963A, #D4A64A
- terminal: #7FBF5F
- red: #8B2D2D, #A63D3D
Configurar fonts locais: IBM Plex Mono + Orbitron.
Criar layout.tsx com metadata SEO para "Enter the Render — Archviz Studio".
Configurar globals.css com cursor crosshair, seleção olive,
animação de scanlines e grid background.
```

**Checklist:**
- [ ] `npx create-next-app@latest` com TypeScript + Tailwind + App Router
- [ ] Paleta de cores no `tailwind.config.ts`
- [ ] Fonts carregadas via `next/font/local`
- [ ] `globals.css` com scanlines, grid, cursor
- [ ] `layout.tsx` com metadata, OG tags, favicon
- [ ] `conductor.json` na raiz

---

### FASE 2 — COMPONENTES BASE (2 agentes em paralelo, ~45 min)

**Workspace A: `components-layout`**

Prompt:
```
Criar Navbar.tsx:
- Fixed top, glassmorphism on scroll
- Logo [ETR] com cores: brackets #8B2D2D, E #C4963A, TR #3A4828
- Nav items: HOME, SERVIÇOS, PROJETOS, PROCESSO, CONTATO
- Active section tracking com IntersectionObserver
- Status dot vermelho pulsando + "ONLINE"
- Mobile: hamburger menu

Criar Footer.tsx:
- Background #3D3024
- Logo [ETR] + "ENTER THE RENDER"
- Tagline "BUILDING WORLDS. RENDERING FUTURES."
- © 2026

Criar LoadingScreen.tsx:
- Fullscreen #3A4828 com logo [ETR]
- Progress bar olive→amber gradient
- "LOADING WORLD... X%" com simulação de progresso
- Fade out após carregar
```

**Workspace B: `components-effects`**

Prompt:
```
Criar componentes de efeito reutilizáveis:

1. Scanlines.tsx - overlay fixo com repeating gradient
2. GridBackground.tsx - grid 60px olive 8% opacity
3. TypingEffect.tsx - hook + componente que digita texto
   caractere a caractere com cursor amber piscando ▌
4. ScrollReveal.tsx - wrapper com framer-motion para
   fade-in + slide-up ao entrar no viewport

Criar hooks:
- useScrollPosition.ts (scroll Y para navbar)
- useIntersection.ts (active section tracking)
- useTypingEffect.ts (typing animation com velocidade configurável)
```

---

### FASE 3 — SEÇÕES (3 agentes em paralelo, ~1h)

**Workspace C: `section-hero-stats`**

Prompt:
```
Criar Hero.tsx baseado no protótipo:
- Logo [ETR] grande com clamp(48px, 10vw, 120px)
- "ENTER THE RENDER" em monospace olive
- Manifesto com efeito typing: "Entre o pixel e o concreto,
  entre a linha de código e a linha de fuga, existe um lugar
  onde arquitetura vira experiência antes de virar parede.
  Nós construímos esse lugar."
- Bloco com borda esquerda olive, background sutil, label "manifesto.txt"
- Frase final em bold #3A4828
- CTA "CTRL + BUILD + DREAM" → link WhatsApp https://wa.me/5519989842020
- Tool badges: UNREAL ENGINE 5, 3DS MAX, AI GENERATIVA, REAL-TIME

Criar Stats.tsx:
- Background #3A4828, 3 colunas
- "50+" PROJETOS | "4" FERRAMENTAS CORE | "∞" MUNDOS POSSÍVEIS
- Números em amber, labels em terminal green
```

**Workspace D: `section-services-projects`**

Prompt:
```
Criar Services.tsx:
- Section header "// 01 — SERVIÇOS" + "O que construímos"
- Grid 2x2 com separador olive 2px
- 4 cards: ARCHVIZ, IMERSÃO 3D, FILMES, AI-ENHANCED
- Hover: inversão de cores (dark olive bg, cream text, terminal green tools)
- CTA: "RENDERIZE SEU MUNDO →" → WhatsApp

Criar Projects.tsx usando next/image:
- Section header "// 02 — PROJETOS" + "Mundos renderizados"
- Grid 2x2 com imagens reais do portfólio
- 4 projetos: RESIDÊNCIA COSTEIRA, LOFT CONTEMPORÂNEO,
  FACHADA MONOLITO, REFÚGIO MINERAL
- Hover: zoom scale(1.05) + darken
- Overlay com número, badge, título, localização
- CTAs: "CARREGAR MAIS MUNDOS →" + "CONSTRUA O MEU →" (WhatsApp)
```

**Workspace E: `section-process-contact`**

Prompt:
```
Criar Process.tsx:
- Background #3A4828
- Section header "// 03 — PROCESSO" + "Do briefing ao render final"
- 4 steps horizontais com setas: BRIEFING, CONCEITO, PRODUÇÃO, ENTREGA
- Ícones: >_ ◎ ▣ ✓
- Watermark numbers, terminal green accents
- CTA: "COMEÇAR A CONSTRUIR →" → WhatsApp

Criar Quote.tsx:
- "Não renderizamos imagens." (cream)
- "Construímos realidades paralelas." (amber)
- Bordas olive top/bottom

Criar Contact.tsx:
- 2 colunas: info + formulário
- Heading: "Pronto pra entrar?"
- Texto: "Seu projeto já existe. Só precisa ser renderizado."
- Contatos: hello@entertherender.com, +55 19 98984-2020,
  @enter.therender, behance.net/entertherender
- Form: "> NOVO_PROJETO.INIT" — campos NOME, EMAIL, TIPO, MENSAGEM
- Botão "EXECUTAR →"
- Link "CONVERSAR NO WHATSAPP →"
```

---

### FASE 4 — INTEGRAÇÃO + RESPONSIVO (2 agentes, ~45 min)

**Workspace F: `page-assembly`**

Prompt:
```
Montar page.tsx combinando todos os componentes na ordem:
LoadingScreen → Navbar → Hero → Stats → Services →
Projects → Process → Quote → Contact → Footer

Garantir:
- Smooth scroll entre seções
- Active nav tracking funcionando
- Loading screen com transição
- Scanlines + grid em todo o site
- Todos os WhatsApp links apontando para
  https://wa.me/5519989842020?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20serviços%20da%20Enter%20the%20Render.
```

**Workspace G: `responsive`**

Prompt:
```
Tornar todas as seções responsivas:
- Mobile first (< 768px):
  - Nav vira hamburger
  - Grids viram 1 coluna
  - Stats em stack vertical
  - Process steps em vertical
  - Contact em 1 coluna
  - Font sizes com clamp()
  - Paddings reduzidos
- Tablet (768px-1024px):
  - Grids 2x1 onde necessário
- Desktop (> 1024px):
  - Layout original do protótipo
```

---

### FASE 5 — OTIMIZAÇÃO + DEPLOY (1 agente, ~30 min)

**Workspace H: `optimization-deploy`**

Prompt:
```
1. SEO:
   - metadata completo em layout.tsx
   - OpenGraph image 1200x630
   - robots.txt e sitemap.xml
   - JSON-LD structured data (LocalBusiness)
   - Alt text em todas as imagens

2. Performance:
   - next/image com sizes e priority para hero
   - Font preload
   - Lazy load de seções abaixo do fold
   - Lighthouse target: 90+ em todas as métricas

3. Analytics:
   - Google Analytics 4 (tag via env var)
   - Meta Pixel (se necessário)

4. Deploy Vercel:
   - Conectar repositório Git
   - Configurar domínio entertherender.com
   - SSL automático
   - Preview deployments para PRs
```

---

### CRONOGRAMA

| Fase | Agentes | Tempo estimado | Dependências |
|------|---------|---------------|--------------|
| 1. Setup | 1 | 30 min | Nenhuma |
| 2. Componentes Base | 2 paralelos | 45 min | Fase 1 |
| 3. Seções | 3 paralelos | 1h | Fase 2 |
| 4. Integração | 2 paralelos | 45 min | Fase 3 |
| 5. Deploy | 1 | 30 min | Fase 4 |
| **TOTAL** | — | **~3h30** | — |

> Com Conductor rodando 3 agentes em paralelo nas fases 2-3,
> o tempo real é ~3h30 vs ~8h sequencial.

---

### PRÉ-REQUISITOS

Antes de abrir o Conductor:

1. **Instalar Conductor.build** no Mac
2. **Criar repo Git** (GitHub):
   ```bash
   gh repo create enter-the-render --private
   ```
3. **Conta Vercel** conectada ao GitHub
4. **Domínio** entertherender.com apontado para Vercel:
   - DNS: adicionar CNAME `@` → `cname.vercel-dns.com`
5. **Imagens otimizadas** do portfólio (já processadas, 20 renders)
6. **Claude Pro/Max** ou API key configurada no Conductor

---

### ASSETS NECESSÁRIOS

| Asset | Status | Arquivo |
|-------|--------|---------|
| Brand Guide HTML | ✅ Pronto | `enter-the-render-brand-guide.html` |
| Protótipo React | ✅ Pronto | `enter-the-render-website.jsx` |
| 20 renders portfólio | ✅ Otimizados WebP | `assets/portfolio/` (4 projetos) |
| Favicon .ico | ✅ Pronto | `assets/favicon.ico` (16/32/48px) |
| Favicon SVG | ✅ Pronto | `assets/favicon.svg` |
| Apple Touch Icon | ✅ Pronto | `assets/apple-touch-icon.png` (180px) |
| PWA Icons | ✅ Pronto | `assets/favicon-192.png`, `favicon-512.png` |
| OG Image 1200x630 | ✅ Pronto | `assets/og-image.png` |
| Logo Primary SVG | ✅ Pronto | `assets/logo-primary.svg` [ETR] dark bg |
| Logo Full SVG | ✅ Pronto | `assets/logo-full.svg` [ETR] + name |
| Logo Light SVG | ✅ Pronto | `assets/logo-light.svg` (for dark bg) |
| Logo Inline SVG | ✅ Pronto | `assets/logo-inline.svg` horizontal |
| Logo Watermark SVG | ✅ Pronto | `assets/logo-watermark.svg` (15% opacity) |
| Web Manifest | ✅ Pronto | `assets/site.webmanifest` |
| robots.txt | ✅ Pronto | `assets/robots.txt` |

---

### CONFIGURAÇÃO DO DOMÍNIO (Vercel)

```
entertherender.com     → CNAME → cname.vercel-dns.com
www.entertherender.com → CNAME → cname.vercel-dns.com
```

No Vercel Dashboard:
1. Settings → Domains → Add `entertherender.com`
2. Redirect `www` → root (sem www)
3. SSL provisiona automaticamente

---

### SEQUÊNCIA DE EXECUÇÃO NO CONDUCTOR

```
┌─────────────────────────────────────────┐
│  FASE 1: Setup (1 agente)               │
│  └─ setup-project                       │
└──────────────┬──────────────────────────┘
               │
    ┌──────────┴──────────┐
    ▼                     ▼
┌──────────┐      ┌──────────────┐
│ FASE 2A  │      │   FASE 2B    │
│ Layout   │      │   Effects    │
└────┬─────┘      └──────┬───────┘
     │                   │
     └─────────┬─────────┘
               │
  ┌────────────┼────────────┐
  ▼            ▼            ▼
┌──────┐  ┌──────────┐  ┌──────────┐
│ 3C   │  │   3D     │  │   3E     │
│ Hero │  │ Services │  │ Process  │
│Stats │  │ Projects │  │ Contact  │
└──┬───┘  └────┬─────┘  └────┬─────┘
   │           │              │
   └───────────┼──────────────┘
               │
    ┌──────────┴──────────┐
    ▼                     ▼
┌──────────┐      ┌──────────────┐
│ FASE 4F  │      │   FASE 4G    │
│ Assembly │      │  Responsive  │
└────┬─────┘      └──────┬───────┘
     │                   │
     └─────────┬─────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  FASE 5: Deploy (1 agente)              │
│  └─ optimization-deploy                 │
└─────────────────────────────────────────┘
```

---

### NOTAS IMPORTANTES

**WhatsApp URL global:**
```
https://wa.me/5519989842020?text=Olá!%20Quero%20saber%20mais%20sobre%20os%20serviços%20da%20Enter%20the%20Render.
```

**Todos os CTAs:**
| Seção | CTA Principal | CTA WhatsApp |
|-------|--------------|--------------|
| Hero | CTRL + BUILD + DREAM | → WhatsApp |
| Serviços | — | RENDERIZE SEU MUNDO → |
| Projetos | CARREGAR MAIS MUNDOS → | CONSTRUA O MEU → |
| Processo | — | COMEÇAR A CONSTRUIR → |
| Contato | EXECUTAR → (form) | CONVERSAR NO WHATSAPP → |

**Contatos:**
- Email: hello@entertherender.com
- WhatsApp: +55 19 98984-2020
- Instagram: @enter.therender
- Behance: behance.net/entertherender

---

*[ETR] — BUILDING WORLDS. RENDERING FUTURES.*
