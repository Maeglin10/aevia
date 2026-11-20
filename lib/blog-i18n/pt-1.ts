import type { BlogPostTranslation } from "../blog-posts";

/* Traductions pt — lot 1. Voir lib/blog-i18n/index.ts. */
export const PT_1: Record<string, BlogPostTranslation> = {
  "choisir-template-site-web": {
    title: "Como escolher o modelo de site certo para o seu negócio",
    excerpt:
      "De longe, todos os templates se parecem, mas a escolha errada custa caro em credibilidade. Veja como encontrar aquele que combina com o seu setor, a sua imagem e os seus objetivos.",
    content: `## O essencial em 30 segundos

- **A estética sozinha não basta** — o design precisa combinar com o seu setor e o seu público
- **Mobile em primeiro lugar** — mais de 65% do tráfego vem dos smartphones; escolha um template mobile-first
- **A velocidade conta tanto quanto o design** — um site bonito e lento afugenta os visitantes
- **Adaptabilidade** — o seu template precisa acolher a sua identidade sem uma reforma completa

---

## A armadilha do template "bonito"

A primeira reação ao percorrer uma biblioteca de templates costuma ser: "Esse aqui é lindo." Mas escolher apenas pelo critério estético é como escolher um ponto comercial porque ele tem uma iluminação bonita.

Um template de site é, antes de tudo, uma **estrutura de comunicação**. Ele destaca as informações certas? Ele conduz o visitante até a ação que você quer que ele faça? Ele reflete a personalidade da sua marca?

---

## A adequação ao setor — a regra nº 1

Um escritório de advocacia e uma loja de streetwear não podem usar o mesmo template. Não porque exista uma regra absoluta, mas porque os seus visitantes têm expectativas implícitas.

- **Profissionais liberais, consultoria, B2B** — design limpo, tipografias sérias, poucas cores, destaque para a credibilidade e as referências
- **Comércio, restaurantes, artesanato** — fotos de produtos/ambiente em primeiro plano, CTA de compra ou de reserva visível logo na chegada
- **Criativos, estúdios, agências** — espaço para a ousadia visual, animações, portfólios em tela cheia
- **Saúde, bem-estar, coaching** — tons suaves, fotos humanas autênticas, tom tranquilizador

Antes de escolher o seu template, faça a si mesmo esta pergunta: um visitante que não conhece a minha marca entende na hora o que eu faço e para quem?

---

## Mobile-first: inegociável

Em 2026, criar um site "para desktop, que depois é adaptado ao celular" é um erro fundamental. Mais de 65% do tráfego web mundial vem dos smartphones. E o Google indexa primeiro a versão mobile do seu site para o posicionamento nas buscas.

Um bom template mobile-first se reconhece por:

- **Botões de ação fáceis de tocar** com o polegar — no mínimo 44px de altura
- **Textos legíveis sem zoom** — no mínimo 16px para o corpo do texto
- **Um menu hambúrguer ou uma navegação adaptada** — nenhum elemento saindo da tela
- **Imagens otimizadas** que não deixam o carregamento lento na rede móvel

Teste o template no seu celular antes de adotá-lo. Não em uma aba do computador em modo responsivo — no seu celular de verdade.

---

## A personalização: até onde dá para ir?

O melhor template é aquele que já se parece com o que você quer, não aquele que exige reconstruir tudo.

Faça a si mesmo estas perguntas concretas:

- **As cores podem ser facilmente substituídas** pela sua identidade visual?
- **A estrutura das seções corresponde ao seu conteúdo** — ou será preciso adicionar/remover muitos elementos?
- **As fontes podem ser trocadas** ou estão integradas de forma irremovível ao design?
- **Existem seções inúteis** (FAQ, depoimentos, blog) que você nunca vai usar e que vão pesar na manutenção?

---

## Desempenho: o invisível que decide

Dois sites visualmente idênticos podem ter tempos de carregamento muito diferentes, dependendo da qualidade do código por trás deles.

Os templates construídos com frameworks modernos como o **Next.js** já trazem de forma nativa o carregamento progressivo das imagens, o cache inteligente e o code splitting. Os construídos em sistemas mais antigos ou sobrecarregados de plugins podem pesar de 5 a 10 vezes mais.

Uma ferramenta como o **Google PageSpeed Insights** mostra em 30 segundos a pontuação de desempenho de um exemplo de template — antes de você adotá-lo.

---

## Por onde começar, na prática?

O **Aevia Launch** oferece uma biblioteca com mais de 100 templates por setor, pensados para desempenho e conversão — restaurantes, consultoria, e-commerce, beleza, imóveis e muitos outros. Cada template é mobile-first e personalizável; o site fica no ar em até 48 horas nos planos Landing, Essentiel e Pro (5 a 7 dias para um site Premium sob medida).

A melhor abordagem: filtre primeiro pelo setor de atividade, depois pelo estilo visual. Você vai reduzir a sua seleção a 3-5 candidatos sérios, em vez de se perder em uma galeria com várias centenas de opções.`,
  },
  "rgpd-site-web-obligations-2026": {
    title: "RGPD em 2026: o que o seu site precisa ter obrigatoriamente",
    excerpt:
      "Cookies, aviso legal, política de privacidade — as obrigações do RGPD não são opcionais. Aqui está um guia claro para deixar o seu site em conformidade sem se afogar no jargão jurídico.",
    content: `## O essencial em 30 segundos

- **3 documentos obrigatórios**: aviso legal, política de privacidade e banner de cookies se você rastreia os visitantes
- **O consentimento precisa ser explícito** — a caixa pré-marcada é ilegal desde 2020
- **As sanções são reais**: em 2024, a CNIL aplicou 87 sanções, que somam 55.212.400 euros em multas ([balanço 2024 da CNIL, em inglês](https://www.cnil.fr/en/sanctions-and-corrective-measures-cnils-actions-2024))
- **A adequação leva de 1 a 2 dias** para um site institucional comum

---

## Por que o RGPD diz respeito de verdade à sua PME

"Isso é coisa de empresa grande." É o erro clássico. A CNIL (Commission Nationale de l'Informatique et des Libertés, a autoridade francesa de proteção de dados) fiscaliza tanto as microempresas quanto as multinacionais — e as sanções proporcionais continuam doloridas para uma estrutura pequena. Este guia segue a lei francesa e as regras da CNIL: o RGPD vale para quem atende o público da União Europeia; no Brasil, a lei equivalente é a LGPD, fiscalizada pela ANPD.

Na prática, se o seu site:
- Usa o Google Analytics ou qualquer outra ferramenta de rastreamento
- Coleta e-mails por meio de um formulário
- Instala cookies (publicitários, analíticos, de redes sociais)
- Trata dados pessoais de clientes europeus

...então o RGPD se aplica a você, e o seu site precisa estar em conformidade.

---

## Os 3 documentos que todo site precisa ter

### 1. O aviso legal

Obrigatório na França para qualquer profissional (Loi pour la Confiance dans l'Économie Numérique, a lei francesa sobre a economia digital, de 2004). Ele deve incluir:

- Nome ou razão social do responsável pelo site
- Endereço da sede social ou do domicílio profissional
- Número de telefone e e-mail de contato
- Número SIRET (o registro das empresas na França) / número de matrícula
- Nome do provedor de hospedagem do site e os dados de contato dele
- Se for o caso: número de IVA intracomunitário

### 2. A política de privacidade

Obrigatória a partir do momento em que você coleta dados pessoais (e-mail de formulário de contato, cookies analíticos etc.). Ela deve explicar:

- Quais dados você coleta
- Por que (a base legal e a finalidade)
- Por quanto tempo você os guarda
- Quem tem acesso a eles (subcontratados, provedores de hospedagem, ferramentas de analytics)
- Como os usuários podem exercer os seus direitos (acesso, retificação, exclusão)

### 3. O banner de consentimento de cookies

Se o seu site instala cookies não essenciais (analytics, publicidade, redes sociais), você precisa obter o consentimento antes da instalação — não depois.

As regras da CNIL em vigor:
- Recusar deve ser tão simples quanto aceitar
- Nada de caixa pré-marcada
- O visitante precisa poder aceitar ou recusar antes de navegar
- O consentimento deve poder ser revisto (o usuário pode mudar de ideia)

---

## Os erros mais frequentes

- **Usar o Google Analytics sem consentimento prévio** — é ilegal. A CNIL puniu vários sites franceses exatamente por esse motivo em 2023-2024.
- **Ter um banner sem um botão "Recusar" bem visível** — o "X" de fechar não vale como recusa.
- **Um aviso legal genérico, copiado e colado** sem as informações reais da empresa.
- **Ignorar os formulários de contato** — o campo de e-mail de um formulário coleta um dado pessoal. É preciso informar como ele é usado.

---

## O que a adequação significa, na prática

Para um site institucional comum, a conformidade básica leva **de 1 a 2 dias**:

1. Redigir o aviso legal com as suas informações reais
2. Redigir uma política de privacidade adaptada às suas ferramentas (analytics, CRM, newsletter)
3. Instalar uma solução de gestão de consentimento de cookies (Axeptio, Cookiebot ou uma solução open source)
4. Configurar a sua ferramenta de analytics no modo "sem cookies" ou no modo "anonimização de IP" enquanto o consentimento não é dado

O Aevia Launch integra de forma nativa as páginas legais nos templates — aviso legal, política de privacidade e gestão de cookies já vêm prontos para personalizar desde o início.

---

## Os recursos oficiais

- **CNIL.fr** — guia prático sobre as obrigações do RGPD para micro, pequenas e médias empresas
- **CNIL — Cookies** — as regras exatas sobre o consentimento
- **Cookiebot Scanner** — varredura gratuita do seu site para identificar todos os cookies instalados

Não subestime a conformidade com o RGPD. Não é juridiquês esotérico — é a base da confiança que os seus visitantes depositam em você.`,
  },
  "erreurs-site-web-font-fuir-clients": {
    title: "5 erros de site que afastam os seus clientes em 10 segundos",
    excerpt:
      "A maioria dos sites perde de 40 a 60% dos visitantes durante os primeiríssimos segundos. Esses erros podem ser evitados — e muitas vezes corrigidos em poucas horas.",
    content: `## O essencial em 30 segundos

- **O tempo de carregamento** é o primeiro culpado — cada segundo a mais custa 7% das conversões
- **A mensagem principal** precisa ser entendida em menos de 5 segundos; senão, o visitante vai embora
- **O mobile**: se o seu site não for perfeito no celular, você perde 65% dos seus visitantes em potencial
- **A falta de um CTA claro**: se o visitante não sabe o que fazer, ele não faz nada

---

## Por que os primeiros segundos são decisivos

Segundo os estudos de comportamento on-line, a decisão de ficar ou ir embora é tomada nos **5 a 10 primeiros segundos** em um site. Não é uma questão de falta de atenção dos seus visitantes — é um comportamento natural de filtragem diante do excesso de informação.

O que o seu visitante procura ao chegar: "Estou no lugar certo? Este site pode me ajudar?"

Se a resposta não for imediata e positiva, ele vai embora.

---

## Erro nº 1 — Um tempo de carregamento longo demais

É a causa nº 1 de abandono. Os números são implacáveis:

- **3 segundos**: 53% dos visitantes no celular desistem (Google, 2023)
- **Cada segundo a mais**: -7% de conversões
- **Um site que leva 5 segundos**: perde em média 38% mais visitantes do que um site que leva 2 segundos

Os culpados de sempre: imagens sem compressão, hospedagem de baixa qualidade, scripts JavaScript demais carregados ao mesmo tempo, fontes externas não otimizadas.

A solução rápida: comprima as suas imagens em WebP, use uma CDN, reduza os plugins ou scripts de terceiros.

---

## Erro nº 2 — Uma mensagem principal confusa

O seu visitante chega ao seu site. Ele olha o topo da página. Em menos de 5 segundos, ele precisa entender:

1. O que você faz
2. Para quem você faz
3. Por que você e não outra pessoa

Se o seu título principal diz "Bem-vindo ao nosso site" ou se o seu slogan é tão conceitual que não quer dizer nada de concreto, você tem um problema de clareza.

Teste o seu site com alguém que não conhece você. Mostre a sua página inicial por 5 segundos. Pergunte o que a pessoa acha que você faz. A resposta vai dizer tudo.

---

## Erro nº 3 — Um site não otimizado para celular

Em 2026, mais de 65% do tráfego web vem dos smartphones. Mesmo assim, muitos sites foram criados para desktop e "adaptados" ao celular como último recurso — com resultados desastrosos.

Os sinais de alerta:
- Textos pequenos demais para serem lidos sem zoom
- Botões muito próximos uns dos outros (impossível tocar no certo)
- Um menu que sai da tela
- Imagens que "quebram" o layout em alguns aparelhos

O Google penaliza os sites que não são mobile-friendly nos resultados de busca. Os seus clientes e o Google penalizam você ao mesmo tempo.

---

## Erro nº 4 — Nenhum CTA visível

CTA = Call To Action (chamada para ação). O botão ou link que diz ao seu visitante o que fazer em seguida.

"Fale conosco", "Peça um orçamento", "Reservar", "Ver nossos serviços" — não importa a formulação, ele precisa estar visível imediatamente, sem precisar rolar a página.

Os erros clássicos:
- O botão de contato fica só no rodapé (ninguém vai até lá)
- O único CTA é o endereço de e-mail em texto simples
- Há 6 CTAs diferentes na mesma página e o visitante não sabe qual escolher

Uma página eficaz tem **um CTA principal**, repetido 2 a 3 vezes na página, com um texto que diz exatamente o que vai acontecer quando a pessoa clicar.

---

## Erro nº 5 — Fotos e elementos visuais de baixa qualidade

As fotos genéricas de banco de imagens (sorrisos forçados, apertos de mão de terno), as imagens pixeladas, os prints mal recortados — tudo isso sinaliza na hora "pouco cuidado, pouco profissionalismo".

Em 2026, os visitantes têm um radar muito apurado para distinguir o autêntico do genérico. Fotos do seu espaço real, da sua equipe real, dos seus produtos reais — mesmo tiradas com um iPhone recente — convertem melhor do que belas fotos de banco de imagens.

Se você ainda não tem fotos profissionais, algumas regras para as suas fotos caseiras: luz natural, fundo neutro, nada de lixo ou bagunça ao fundo, formato horizontal para os banners.

---

## O diagnóstico em 5 minutos

Teste o seu site agora:

1. **Google PageSpeed Insights** — digite a sua URL e veja a pontuação mobile (meta: 70+)
2. **Abra o seu site no celular** — como se você fosse um visitante pela primeira vez
3. **Cronometre**: em quantos segundos você entende o que o site oferece?
4. **Tente clicar no botão de contato** — ele é fácil de encontrar?

Se você identificar problemas, ferramentas como o Aevia Launch permitem reconstruir o seu site inteiro com templates otimizados para conversão, velocidade e mobile — em menos de uma semana.`,
  },
  "whatsapp-business-guide-pme": {
    title: "WhatsApp Business para PMEs: guia prático 2026",
    excerpt:
      "O WhatsApp é o principal canal de mensagens na França. Veja como configurá-lo corretamente, automatizar as suas respostas e nunca mais perder uma solicitação de cliente.",
    content: `## O essencial em 30 segundos

- **O WhatsApp Business** é gratuito para pequenas estruturas — a **WhatsApp Business API** é paga, mas dá acesso à automação avançada
- **Taxa de abertura das mensagens de WhatsApp: 98%** — contra 20 a 30% no e-mail
- **Configure uma mensagem de ausência** e uma mensagem de boas-vindas para nunca deixar um cliente sem resposta
- **Centralize o WhatsApp com os seus outros canais** para não ficar pulando de um app para outro

---

## Por que o WhatsApp se tornou indispensável

Na França, o WhatsApp tem mais de 35 milhões de usuários ativos. Para os seus clientes, é o app de mensagens que eles já usam — com a família, os amigos, os colegas. Falar com uma empresa pelo WhatsApp é natural, rápido, informal.

Para você, como empresa, as vantagens são reais: taxa de abertura de 98%, expectativa de resposta quase instantânea e uma sensação de proximidade que o e-mail não transmite.

A pergunta não é mais "eu preciso estar no WhatsApp?" — é "como eu administro o WhatsApp do jeito certo?".

---

## WhatsApp Business vs. WhatsApp Business API: a diferença principal

### WhatsApp Business (aplicativo gratuito para celular)

Para autônomos e estruturas muito pequenas. Pode ser baixado gratuitamente. Ele oferece:

- Um perfil comercial com as suas informações (endereço, site, horários, descrição)
- Uma mensagem de boas-vindas automática para novos contatos
- Uma mensagem de ausência configurável por horário
- Respostas rápidas (modelos de respostas frequentes)
- Um catálogo de produtos/serviços
- Etiquetas para organizar as suas conversas (Novo cliente, Aguardando, Pedido entregue etc.)

**Principal limitação**: um único celular por vez, sem acesso multiusuário, sem API.

### WhatsApp Business Platform (API)

Para as empresas que querem automatizar e integrar o WhatsApp às suas ferramentas. Permite:

- Vários atendentes (várias pessoas no mesmo número)
- Envio de mensagens proativas (confirmações de pedido, lembretes de horário marcado)
- Integração com um CRM ou uma caixa de entrada unificada
- Bots e automação avançada

**Acesso por meio de parceiros oficiais** como a Meta, ou por soluções como o **Aevia Inbox**, que integram a API do WhatsApp diretamente em uma interface web.

---

## Configuração básica do WhatsApp Business

Se você usa o aplicativo gratuito, estes são os 5 ajustes a fazer imediatamente:

### 1. Complete o seu perfil comercial

Configurações > Informações da empresa. Adicione: nome comercial, categoria, descrição (2-3 frases sobre o que você faz), endereço, site, e-mail, horário de funcionamento.

Um perfil completo inspira confiança. Um contato que manda uma mensagem para você vê o seu perfil antes de receber a sua resposta.

### 2. Configure a sua mensagem de boas-vindas

Configurações > Ferramentas > Mensagem de saudação. Essa mensagem é enviada automaticamente a todo novo contato que escreve para você pela primeira vez.

Exemplo eficaz: "Olá! Obrigado por entrar em contato. Vamos responder o mais rápido possível. Para ganhar tempo, você pode informar o assunto da sua solicitação?"

### 3. Configure a sua mensagem de ausência

Configurações > Ferramentas > Mensagem de ausência. Defina os horários em que você não está disponível.

Exemplo: "Olá! Recebemos a sua mensagem. A nossa equipe está disponível de segunda a sexta, das 9h às 18h. Vamos responder assim que possível. Em caso de urgência: [número]."

### 4. Crie respostas rápidas

Configurações > Ferramentas > Respostas rápidas. Crie atalhos para as suas respostas frequentes. "/precos" pode abrir uma mensagem completa com a sua tabela de preços. "/agendar", com o link da sua agenda.

### 5. Use as etiquetas

Organize as suas conversas com etiquetas coloridas: Novo, Orçamento enviado, Em andamento, Urgente, Retornar ligação. Isso evita perder o fio da meada.

---

## Ganhando escala: a caixa de entrada unificada

Se você administra o WhatsApp manualmente em um celular, logo vai esbarrar em limites:

- Impossível delegar a um colaborador sem compartilhar o seu celular
- WhatsApp, Instagram e e-mail em apps diferentes = mensagens perdidas
- Nenhum histórico centralizado por cliente

A solução: uma **caixa de entrada unificada** como o Aevia Inbox, que conecta a WhatsApp Business API a todos os seus outros canais (Instagram, e-mail, Messenger) em uma interface web. Vários atendentes podem responder, as conversas ficam arquivadas por cliente e respostas automáticas com IA cuidam das perguntas frequentes.

---

## O marco legal a respeitar

O WhatsApp Business não está isento das regras do RGPD:

- **Você não pode enviar mensagens não solicitadas** (spam)
- **Os clientes precisam ter consentido** em receber as suas comunicações
- **Guarde os dados** de acordo com a sua política de privacidade

As mensagens enviadas pela WhatsApp Business API têm uma restrição a mais: você só pode enviar mensagens proativas (fora de uma resposta) com modelos aprovados pela Meta.`,
  },
  "vitesse-site-web-optimisations": {
    title: "Velocidade do site: as 5 otimizações que realmente fazem diferença",
    excerpt:
      "Um site lento significa clientes perdidos e um posicionamento prejudicado nas buscas. Estas 5 ações concretas podem reduzir o seu tempo de carregamento em 40 a 70% sem refazer o site.",
    content: `## O essencial em 30 segundos

- **As imagens respondem por 60 a 80% do peso de uma página** — é ali que o impacto é maior
- **Uma CDN** pode reduzir o tempo de carregamento em 30 a 50% para os visitantes fora da sua região geográfica
- **Cada script JavaScript de terceiros** (chat, analytics, pixel) acrescenta 100 a 500 ms ao carregamento
- **As Core Web Vitals do Google** afetam diretamente a sua posição nos resultados de busca desde 2021

---

## A ligação direta entre velocidade e faturamento

Não é só uma questão técnica. A velocidade de um site tem um impacto mensurável nas suas conversões:

- **+1 segundo** de carregamento = **-7%** de conversões (Akamai)
- **53%** dos visitantes no celular desistem se uma página leva mais de **3 segundos** para carregar (Google)
- A **Amazon** estimou que cada 100 ms de latência lhe custa **1% do faturamento**

E desde 2021 o Google inclui as Core Web Vitals (a velocidade real de carregamento percebida pelos usuários) nos seus critérios de classificação. Um site lento é penalizado duas vezes: pelos visitantes que vão embora e pelo Google, que o classifica pior.

---

## Otimização nº 1 — Comprimir e converter as suas imagens

As imagens representam em média 60 a 80% do peso total de uma página web. Muitas vezes é ali que o ganho é mais espetacular.

Duas ações concretas:

**Converter para WebP**: esse formato moderno gera imagens de qualidade equivalente ao JPEG/PNG com 25 a 35% menos peso. A maioria dos CMS modernos já lida com ele de forma nativa. No WordPress, plugins como Imagify ou ShortPixel fazem a conversão automaticamente.

**Redimensionar antes de fazer o upload**: subir uma foto de 5000x4000px para exibi-la com 800px de largura é carregar 6 vezes mais dados do que o necessário. Redimensione as suas imagens para as dimensões reais de exibição antes de colocá-las no ar.

Meta: nenhuma imagem acima de 200 KB no seu site. As imagens hero (em tela cheia) podem chegar a 400 KB se forem fotos de alta qualidade.

---

## Otimização nº 2 — O carregamento adiado (lazy loading)

O lazy loading consiste em carregar as imagens só quando elas estão prestes a entrar no viewport do visitante — e não todas de uma vez quando a página carrega.

Na prática, um visitante que chega à sua página inicial só precisa das imagens visíveis sem rolar a tela. As imagens mais abaixo na página podem esperar.

A implementação é simples com o atributo HTML nativo: \`loading="lazy"\` nas suas tags \`<img>\`. Frameworks modernos como o Next.js aplicam isso automaticamente.

Ganho típico: redução de 40 a 60% no peso inicial carregado pela página.

---

## Otimização nº 3 — Reduzir os scripts de terceiros

Cada script externo que você adiciona ao seu site — Google Analytics, Meta Pixel, Hotjar, Intercom, widget de chat, botões de compartilhamento em redes sociais — tem um custo em desempenho.

Em média, um script de terceiros acrescenta 100 a 500 ms ao tempo de carregamento. Se você tem 6 ou 7, já está com 1 a 3 segundos de latência só por causa dessas ferramentas.

Ações concretas:
- **Faça uma auditoria dos seus scripts**: quais você realmente usa? Desative tudo o que não serve
- **Carregue-os de forma adiada** com o atributo \`defer\` ou \`async\` nas tags \`<script>\`
- **Use o Google Analytics 4 em modo serverless** para evitar o cookie e reduzir o script no cliente
- **Substitua o Hotjar** por alternativas mais leves se você só usa os mapas de calor básicos

---

## Otimização nº 4 — Usar o cache de forma eficiente

O cache consiste em armazenar uma versão da sua página ou dos seus recursos mais perto do visitante, para não ter que recalculá-los ou transferi-los de novo a cada visita.

**Cache do navegador**: configure cabeçalhos HTTP \`Cache-Control\` para que os recursos estáticos (imagens, CSS, JS) fiquem armazenados no navegador do visitante por 1 a 12 meses.

**CDN (Content Delivery Network)**: uma CDN como a Cloudflare (gratuita para as funcionalidades básicas) distribui o seu conteúdo a partir de servidores geograficamente próximos dos seus visitantes. Para um site francês com visitantes na Europa, isso significa uma redução de 30 a 50% nos tempos de carregamento.

---

## Otimização nº 5 — Migrar para uma hospedagem de alto desempenho

Uma hospedagem de 2 €/mês em um servidor compartilhado com outros 500 sites não oferece o mesmo desempenho que uma hospedagem em nuvem ou um VPS bem configurado.

O tempo de resposta do servidor (TTFB — Time To First Byte) deveria ficar abaixo de **200 ms** para um site bem hospedado. Se o seu TTFB passa de 500 ms, a hospedagem provavelmente é o problema.

Alternativas de alto desempenho e acessíveis:
- **Vercel ou Netlify** para sites estáticos e aplicações Next.js
- **Render.com** para aplicações com backend
- **OVH Performance** ou **Infomaniak** para CMS WordPress em VPS

---

## Meça antes e depois

Antes de fazer qualquer coisa, meça o seu ponto de partida com:

- **Google PageSpeed Insights** — pontuação e Core Web Vitals
- **GTmetrix** — gráfico em cascata (waterfall chart) para ver exatamente o que carrega devagar
- **WebPageTest** — testes a partir de diferentes localizações geográficas

Depois, aplique as otimizações na ordem acima (imagens primeiro, elas têm o maior impacto) e meça de novo após cada etapa.

Um site que passa de 6 segundos para 2 segundos de carregamento pode ver as conversões aumentarem de 30 a 50%. Muitas vezes é o melhor retorno sobre investimento de uma melhoria técnica.`,
  },
  "repondre-avis-negatifs-reputation": {
    title: "Avaliações negativas: o método para proteger e fortalecer a sua reputação",
    excerpt:
      "Uma avaliação ruim no Google não é uma catástrofe se você souber como responder. A resposta certa pode transformar um detrator em embaixador — e tranquilizar dezenas de futuros clientes.",
    content: `## O essencial em 30 segundos

- **88% dos consumidores** leem as avaliações antes de comprar — a sua resposta às avaliações negativas é lida por todos os futuros clientes
- **Nunca responda de cabeça quente** — espere pelo menos 30 minutos antes de responder a uma avaliação negativa
- **A estrutura vencedora**: reconhecer, pedir desculpas (sem admitir culpa se o caso for contestável), propor uma solução, convidar a continuar a conversa no privado
- **Uma avaliação ruim bem administrada** transmite mais confiança do que uma página com 100% de avaliações 5 estrelas (que parece falsa)

---

## Por que a sua resposta conta tanto quanto a própria avaliação

Esta é a realidade que poucos empreendedores entendem: quando um cliente em potencial lê uma avaliação negativa sobre a sua empresa, ele não julga só a avaliação — ele também lê a sua resposta. E a sua resposta diz muito sobre a forma como você trata os seus clientes.

Uma resposta profissional, empática e construtiva pode neutralizar totalmente uma avaliação negativa. Uma resposta ruim (defensiva, agressiva ou inexistente) sempre agrava a situação.

Os números falam por si: 45% dos consumidores têm mais chances de visitar uma empresa que responde às avaliações negativas. 88% leem as respostas às avaliações negativas antes de tomar uma decisão.

---

## A regra dos 30 minutos

Nunca responda a uma avaliação negativa nos 30 minutos seguintes à leitura. A emoção imediata — raiva, sensação de injustiça, vontade de se defender — leva às piores respostas.

Espere. Leia a avaliação com distanciamento. Pergunte a si mesmo: **existe um fundo de verdade nesse retorno, mesmo que a forma como foi escrito seja injusta?**

---

## A estrutura de resposta em 4 etapas

### 1. Reconhecer a experiência do cliente

Comece sempre reconhecendo que o cliente viveu uma experiência negativa — mesmo que você esteja convencido de que não está errado. Isso não é admitir uma falha, é demonstrar empatia.

"Olá, [nome, se disponível], obrigado por compartilhar o seu retorno conosco. Lamentamos sinceramente que a sua experiência não tenha correspondido às suas expectativas."

### 2. Explicar-se brevemente (sem se defender)

Se houver elementos de contexto que expliquem a situação sem soar como desculpas vazias, mencione-os brevemente. Mas evite o reflexo natural de contra-atacar ou minimizar.

"Naquele dia, estávamos enfrentando uma situação excepcional [se for verdade], e deveríamos ter nos comunicado melhor com você."

### 3. Propor uma solução concreta

É esse elemento que transforma uma troca negativa em um sinal positivo. Proponha algo concreto:

- Um contato direto para resolver o problema
- Um reembolso ou uma cortesia comercial, se for o caso
- Um convite para voltar, com uma atenção especial

### 4. Convidar a continuar no privado

Termine levando a conversa para um canal privado. Isso mostra que você leva o assunto a sério e evita uma guerra pública.

"Convidamos você a entrar em contato diretamente conosco pelo [número] ou pelo [e-mail] para que possamos encontrar uma solução juntos."

---

## Os erros que você nunca deve cometer

- **Questionar publicamente a veracidade da avaliação**: "Não temos nenhum registro da sua visita" — mesmo que seja verdade, soa defensivo
- **Responder com argumentos técnicos complexos**: os outros leitores não entendem e parece uma tentativa de desconversar
- **Copiar e colar a mesma resposta genérica** em todas as avaliações negativas — os leitores percebem
- **Ignorar as avaliações** — a ausência de resposta é vista como indiferença

---

## Como gerar mais avaliações positivas

A melhor defesa contra as avaliações negativas é ter um volume suficiente de avaliações positivas para que as ruins pareçam marginais.

Estratégias eficazes:
- **Peça depois de cada serviço bem-sucedido** — por SMS ou e-mail, diretamente com um link para a sua página no Google
- **Facilite o processo** — um link direto para o formulário de avaliação, não para o seu perfil geral
- **Peça no momento certo** — logo depois que o cliente demonstrou a sua satisfação, não semanas mais tarde

Uma proporção de 1 avaliação negativa para cada 15 avaliações positivas é administrável. Uma proporção de 1 para 3 se torna problemática.

Ferramentas como o **Aevia Inbox** permitem automatizar os pedidos de avaliação pós-compra via WhatsApp ou e-mail, no momento ideal da jornada do cliente.`,
  },
  "ia-support-client-pme": {
    title: "IA e atendimento ao cliente: o que muda na prática para as PMEs em 2026",
    excerpt:
      "Os assistentes de IA não substituem a sua equipe — eles cuidam do que pode ser automatizado para que você se concentre no que importa. Veja o que isso muda de verdade.",
    content: `## O essencial em 30 segundos

- **A IA pode assumir boa parte das solicitações repetitivas** (horários, preços, disponibilidade, status de pedidos): a proporção exata depende do que a base de conhecimento dela contém
- **Os tempos de resposta passam de várias horas para poucos segundos**, 24h por dia, 7 dias por semana
- **A IA não substitui a relação humana** — ela a libera das tarefas sem valor agregado
- **A implantação não exige conhecimentos técnicos** com as ferramentas modernas

---

## O verdadeiro problema do atendimento ao cliente para uma PME

Se você cuida sozinho, ou com uma equipe pequena, do relacionamento com os clientes da sua empresa, conhece este ciclo: as mesmas perguntas voltam sem parar. "Qual é o horário de funcionamento?" "Vocês fazem orçamento?" "Qual é o prazo de entrega?" "Não recebi o meu pedido."

Essas perguntas não exigem julgamento, criatividade nem conhecimento especializado. Elas exigem tempo. E esse tempo você usa em detrimento das conversas de verdade — aquelas que criam valor, fidelizam e geram faturamento.

É aí que entra a IA no atendimento ao cliente.

---

## O que a IA faz realmente bem

### Responder às perguntas frequentes em tempo real

Um agente de IA treinado com as suas informações (horários, preços, catálogo, política de devolução, área geográfica de atendimento) consegue responder corretamente às solicitações comuns cuja resposta está nessas informações — na hora, às 3h da manhã de um domingo.

Sem tempo de espera. Sem frustração. O cliente recebe a resposta imediatamente.

### Qualificar e triar as solicitações

Nem todas as solicitações têm a mesma urgência nem o mesmo valor. Um bot inteligente consegue:

- Distinguir uma solicitação comercial de verdade de uma pergunta genérica
- Identificar um cliente insatisfeito que precisa de uma intervenção humana rápida
- Coletar as informações básicas (nome, projeto, orçamento, prazo) antes de transferir para uma pessoa

Quando você recebe uma conversa repassada pela IA, já tem o contexto — não precisa fazer o cliente repetir tudo.

### Lembretes e acompanhamentos automáticos

Quantos orçamentos ficam sem resposta porque você não teve tempo de cobrar um retorno? A automação pode cuidar desses lembretes — "Você teve a oportunidade de analisar a nossa proposta?" — no momento certo, sem que você precise pensar nisso.

### Disponibilidade 24/7

Os seus clientes não param às 18h. As perguntas deles também não. Um agente de IA cobre os horários de menor movimento e os fins de semana sem custo adicional.

---

## O que a IA não faz — e não deve fazer

Há situações em que a IA não deve continuar no circuito:

- **As situações complexas ou ambíguas** — quando o contexto exige julgamento humano
- **Os clientes irritados** — uma escalada emocional se resolve de pessoa para pessoa
- **As negociações ou discussões delicadas** — preços, exceções, disputas
- **As solicitações novas, fora da base de conhecimento dela**

Os bons sistemas de IA são configurados para detectar essas situações e passar a conversa para uma pessoa — com todo o contexto da troca.

---

## Como funciona na prática com o Aevia Inbox

O Aevia Inbox combina uma caixa de entrada multicanal (WhatsApp, Instagram, e-mail, Messenger) com agentes de IA configurados a partir da sua base de conhecimento.

A implantação:

1. **Preencha a sua base de conhecimento** — perguntas frequentes, preços, horários, política de devolução, catálogo (em formato de texto ou documento)
2. **Defina as regras de escalonamento** — quando a IA deve transferir a conversa para uma pessoa
3. **Conecte os seus canais** — WhatsApp Business, Instagram, e-mail
4. **Teste** com solicitações reais de clientes

A configuração inicial leva **2 a 4 horas** para uma estrutura simples. Depois, o sistema aprende e melhora ao longo das conversas.

---

## O que medir, antes e depois

Não publicamos uma média: ela dependeria do seu ramo, dos seus canais e da qualidade da sua base de conhecimento. Estas quatro medições, feitas no seu próprio negócio, mostram se a IA está economizando o seu tempo:

- **O tempo até a primeira resposta**: anote durante uma semana antes da implantação e compare um mês depois
- **A parte das solicitações resolvidas sem você**: conte as conversas que a IA encerrou sozinha e as que ela passou para você
- **A satisfação do cliente**: uma pergunta no fim da conversa ("Esta resposta ajudou você?") basta para acompanhar a tendência
- **O custo real**: a assinatura, mais o tempo gasto para manter a base de conhecimento atualizada

---

## Por onde começar

A principal resistência que eu ouço dos empreendedores: "O meu negócio é específico demais para uma IA dar conta."

Na realidade, não é a complexidade do seu negócio que determina a eficácia da IA — é a qualidade da base de conhecimento que você fornece a ela. Quanto mais precisas e completas forem as suas perguntas frequentes e informações, mais pertinentes serão as respostas da IA.

Comece listando as suas 15 perguntas mais frequentes e as respostas ideais. Esse é o seu ponto de partida. Todo o resto se constrói em torno disso.`,
  },
  "securite-mots-de-passe-comptes-pros": {
    title: "Segurança de senhas: proteja as suas contas profissionais em 2026",
    excerpt:
      "80% das violações de dados envolvem senhas fracas ou comprometidas. Estas práticas simples eliminam a maior parte dos riscos — sem prejudicar a sua produtividade.",
    content: `## O essencial em 30 segundos

- **Uma senha reutilizada** em vários serviços é um risco enorme — se um serviço for invadido, todas as suas contas ficam expostas
- **Um gerenciador de senhas** (Bitwarden, 1Password) resolve 90% dos problemas de segurança das contas
- **A autenticação de dois fatores (2FA)** é a segunda trava mais importante — ative-a em tudo
- **Os ataques de phishing** miram primeiro as suas contas profissionais (e-mail, CRM, banco, fornecedores)

---

## A realidade das contas invadidas em 2026

Em 2023, o relatório Verizon Data Breach Investigations estimava que **80% das violações de dados envolvem senhas roubadas ou fracas**. Não se trata de hackers sofisticados em porões escuros — muitas vezes é bem mais simples.

Um funcionário usa a mesma senha no e-mail profissional e em um fórum on-line. Esse fórum é hackeado. O banco de dados é vendido na dark web. Um bot testa essas credenciais no seu banco, na sua hospedagem, no seu CRM.

Esse cenário se repete milhões de vezes por mês. E o alvo pode ser qualquer empresa.

---

## As práticas perigosas mais comuns

- **Reutilizar a mesma senha** em vários serviços (ou pequenas variações: "Minhasenha1", "Minhasenha2")
- **Usar informações pessoais**: data de nascimento, nome de um filho, nome da empresa
- **Guardar as senhas em um arquivo do Excel** ou em uma nota na área de trabalho
- **Compartilhar as senhas por e-mail ou WhatsApp** com colegas
- **Não trocar uma senha depois da saída de um funcionário**

---

## A solução: um gerenciador de senhas

Um gerenciador de senhas gera, armazena e preenche automaticamente senhas únicas e complexas para cada serviço. Você só precisa lembrar de **uma única senha mestra**.

As opções recomendadas:

- **Bitwarden** — código aberto, gratuito para as funcionalidades essenciais, versão para equipes disponível
- **1Password** — excelente para equipes, com auditoria de segurança integrada
- **Dashlane** — interface intuitiva, boa opção para quem tem menos familiaridade com tecnologia

Vantagens concretas:
- Senhas de 20 caracteres ou mais geradas automaticamente
- Uma senha única por serviço — um vazamento atinge apenas uma conta
- Compartilhamento seguro com os colaboradores sem transmitir a senha em texto aberto
- Alertas quando um dos seus serviços sofre um vazamento de dados

---

## A autenticação de dois fatores (2FA)

O 2FA acrescenta uma segunda verificação além da senha: um código temporário enviado por SMS, gerado por um aplicativo ou obtido por meio de uma chave física.

Mesmo que a sua senha seja comprometida, o invasor não consegue acessar a sua conta sem esse segundo fator.

Ative o 2FA com prioridade nestes itens:
- O seu e-mail profissional (Gmail, Outlook)
- A sua hospedagem e o seu registrador de domínio
- A sua conta bancária e as suas ferramentas de pagamento (Stripe, PayPal)
- O seu CRM e as suas ferramentas de clientes
- As suas contas profissionais nas redes sociais

Aplicativos de 2FA recomendados: **Google Authenticator**, **Authy** (permite fazer backup), **Microsoft Authenticator**.

---

## As boas práticas para uma equipe

Se você tem colaboradores, a segurança das contas se torna uma questão coletiva:

- **Use um gerenciador para equipes** (1Password Teams, Bitwarden Business) — os acessos ficam centralizados e podem ser revogados
- **Protocolo de saída**: a cada saída de funcionário, troque imediatamente as senhas das contas compartilhadas às quais ele tinha acesso
- **Contas nominais**: evite contas genéricas compartilhadas como "contato@" ou "admin" — crie contas individuais com as permissões adequadas
- **Auditoria trimestral**: verifique quem tem acesso a quê e revogue os acessos desnecessários

---

## O teste básico para fazer agora

Acesse **haveibeenpwned.com** e digite o seu endereço de e-mail profissional. Esse serviço indexa os bancos de dados roubados e informa se o seu e-mail foi comprometido em algum vazamento conhecido.

Se for o caso — e, para muitos endereços de e-mail ativos há vários anos, é o caso — troque imediatamente as senhas de todos os serviços ligados a esse endereço e ative o 2FA em tudo.

Ferramentas como o **Aevia Security** também permitem auditar a segurança geral do seu domínio, incluindo a verificação dos seus registros de e-mail (SPF, DKIM, DMARC), que protegem o seu domínio contra falsificação.`,
  },
  "tunnel-conversion-landing-page": {
    title: "Funil de conversão: como transformar os seus visitantes em clientes",
    excerpt:
      "Ter tráfego sem conversão é como ter uma loja cheia de curiosos que nunca passam pelo caixa. Veja os mecanismos que fazem um funil de vendas funcionar de verdade.",
    content: `## O essencial em 30 segundos

- **Um funil de conversão** = a sequência de etapas entre "visitante desconhecido" e "cliente pagante"
- **A maioria dos sites perde 95% dos visitantes** por falta de um funil estruturado
- **3 elementos-chave**: uma proposta de valor clara, uma prova social, uma chamada para ação sem atrito
- **Meça cada etapa** — sem analytics, você trabalha às cegas

---

## Por que o seu site tem tráfego, mas poucas conversões

Imagine uma loja física onde 100 pessoas entram, olham, e 95 vão embora de mãos vazias. Você chamaria isso de um problema de layout, de apresentação ou de vendedor.

Na web, é exatamente o que acontece com a maioria dos sites. O tráfego chega — pelo Google, pelas redes sociais, pelo boca a boca — e vai embora sem converter.

A diferença entre um site que converte e um site institucional é a presença de um **funil de conversão estruturado**: uma sequência de etapas que guiam o visitante de "estou descobrindo" até "estou virando cliente".

---

## As 4 etapas de um funil eficaz

### Etapa 1 — Capturar a atenção (a promessa)

O visitante chega à sua página. Em menos de 5 segundos, ele precisa entender:

- O que você faz
- Que problema concreto você resolve
- Por que você e não outro

O título e o subtítulo do seu hero são os elementos mais importantes do seu site. Eles trabalham enquanto você dorme. Teste, ajuste, teste de novo.

Exemplo ruim: "Bem-vindo à [Nome da empresa] — o seu parceiro de confiança"

Bom exemplo: "Sites profissionais entregues em 7 dias — sem agência, sem surpresas"

### Etapa 2 — Construir a confiança (a prova)

O visitante está interessado. Mas ele não conhece você. Ele precisa se sentir seguro.

Os elementos de prova que funcionam:
- **Depoimentos de clientes com foto e nome** — não anônimos
- **Estudos de caso com resultados em números** — "O Jean aumentou os contatos dele em 40% em 3 meses"
- **Logos de clientes conhecidos**, se for o caso
- **Números concretos** — "200 clientes atendidos", "7 anos de experiência"
- **Certificações ou selos** relevantes para o seu setor

### Etapa 3 — Eliminar as objeções (os atritos)

Mesmo convencido em princípio, o visitante tem objeções na cabeça: "É caro demais", "Não tenho certeza de que funciona para mim", "Preciso conversar com o meu sócio".

Antecipe essas objeções no seu conteúdo:
- Um FAQ bem pensado
- Uma garantia (satisfação garantida ou o seu dinheiro de volta, período de teste)
- Informações sobre o processo (como funciona na prática?)
- Um preço transparente, com o que está incluído

### Etapa 4 — A chamada para ação (atrito zero)

O CTA final precisa ser evidente, sem ambiguidade e sem atrito. Cada etapa extra que você acrescenta reduz a taxa de conversão.

Compare:
- **Muito atrito**: "Preencha o nosso formulário de 12 campos para receber o nosso folheto; depois ligaremos para você em até 48h"
- **Pouco atrito**: "Agende um horário de 20 min on-line" (link direto do Calendly)

---

## Medir para melhorar

Sem medição, você otimiza às cegas. As métricas-chave de um funil:

- **Taxa de rejeição**: que % dos visitantes vai embora sem ver uma segunda página?
- **Taxa de conversão da landing page**: que % clica no seu CTA principal?
- **Taxa de conversão do formulário**: que % preenche o formulário?
- **Taxa de fechamento**: que % dos contatos vira cliente?

Cada etapa pode ser otimizada de forma independente. O Google Analytics 4 fornece esses dados gratuitamente.

---

## O teste A/B: testar antes de decidir

Não suponha o que funciona. Teste duas versões do seu CTA, do seu título, do seu layout — e deixe os dados decidirem.

Ferramentas como o Vercel Speed Insights ou o Google Optimize permitem testar duas versões em segmentos de visitantes e medir objetivamente qual delas converte melhor.

Uma mudança de título que melhora a taxa de conversão em 15% pode dobrar os seus leads sem aumentar o seu tráfego.

---

## O exemplo concreto do Aevia Launch

Os templates do Aevia Launch são concebidos com um funil de conversão integrado:

- Hero com uma proposta de valor clara
- Seção de depoimentos de clientes
- Seção de FAQ com respostas às objeções mais comuns
- CTA repetido 3 vezes na página
- Formulário de contato minimalista (no máximo 3 campos)

O design é pensado para converter — não só para ser bonito.`,
  },
};
