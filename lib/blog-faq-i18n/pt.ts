import type { BlogFaqItem } from "../blog-posts";

/* Traduction (pt) de lib/blog-faq-ajouts.ts, article par article, dans le même ordre. */
export const FAQ_PT: Record<string, BlogFaqItem[]> = {
  "choisir-template-site-web": [
    {
      q: "Como escolher um modelo de site adequado à minha atividade?",
      a: "Parta do seu setor e do seu público: o design deve corresponder a eles. Um modelo bonito que não fala com os seus clientes custa credibilidade. Verifique depois se ele foi pensado primeiro para o celular e se continua rápido.",
    },
    {
      q: "Por que o celular importa tanto na escolha de um modelo?",
      a: "Porque a maior parte do tráfego web mundial vem de celulares (a fonte é citada no artigo). Um modelo concebido primeiro para o celular evita perder grande parte dos visitantes.",
    },
    {
      q: "Até onde é possível personalizar um modelo?",
      a: "O suficiente para acolher a sua identidade (logotipo, cores, textos, fotos) sem refazer o site inteiro. Se a adaptação exige uma reforma completa, o modelo não é o certo.",
    },
    {
      q: "A velocidade é tão importante quanto o design?",
      a: "Sim. Um site bonito, mas lento, afasta os visitantes: o desempenho faz parte dos critérios de escolha, tanto quanto a estética.",
    },
  ],
  "rgpd-site-web-obligations-2026": [
    {
      q: "Quais documentos um site precisa ter para cumprir o RGPD?",
      a: "Três: as informações legais, a política de privacidade e um banner de consentimento para cookies, caso você acompanhe os visitantes.",
    },
    {
      q: "Uma caixa pré-marcada vale como consentimento?",
      a: "Não. O consentimento deve ser explícito: uma caixa pré-marcada não basta.",
    },
    {
      q: "As sanções da CNIL são reais para uma pequena empresa?",
      a: "Sim, são reais. O artigo remete ao balanço de 2024 da CNIL, que quantifica as sanções aplicadas e o total das multas.",
    },
    {
      q: "Quanto tempo leva para adequar um site institucional?",
      a: "O artigo estima de um a dois dias para um site institucional comum.",
    },
  ],
  "erreurs-site-web-font-fuir-clients": [
    {
      q: "Quais erros de site afastam os clientes?",
      a: "Cinco erros se repetem: tempo de carregamento longo demais, mensagem principal confusa, site mal adaptado ao celular, ausência de uma chamada para ação visível e fotos de má qualidade.",
    },
    {
      q: "Em quanto tempo um visitante deve entender a minha oferta?",
      a: "A mensagem principal deve ser compreendida em menos de 5 segundos; caso contrário, o visitante vai embora.",
    },
    {
      q: "Por que uma chamada para ação clara é necessária?",
      a: "Se o visitante não sabe o que fazer, ele não faz nada. Um botão visível indica o próximo passo.",
    },
    {
      q: "Como fazer rapidamente o diagnóstico do meu site?",
      a: "O artigo propõe um diagnóstico em 5 minutos: reler os cinco erros acima no seu próprio site, especialmente em um telefone.",
    },
  ],
  "whatsapp-business-guide-pme": [
    {
      q: "Qual é a diferença entre o WhatsApp Business e a API do WhatsApp Business?",
      a: "O WhatsApp Business é um aplicativo móvel gratuito para pequenas estruturas. A plataforma WhatsApp Business (API) é paga, mas permite automação avançada.",
    },
    {
      q: "Meus clientes precisam instalar algo para falar comigo?",
      a: "Não. Se já usam o WhatsApp, eles escrevem para você no mesmo lugar onde falam com as pessoas próximas.",
    },
    {
      q: "O que configurar primeiro no WhatsApp Business?",
      a: "O perfil da empresa, uma mensagem de boas-vindas, uma mensagem de ausência, respostas rápidas e etiquetas. As mensagens de boas-vindas e de ausência evitam deixar um cliente sem resposta.",
    },
    {
      q: "Como evitar alternar entre vários aplicativos de mensagens?",
      a: "Centralizando o WhatsApp e os seus outros canais em uma caixa de entrada unificada.",
    },
  ],
  "vitesse-site-web-optimisations": [
    {
      q: "Quais otimizações aceleram mais um site?",
      a: "Cinco alavancas: comprimir e converter as imagens, carregar os elementos sob demanda (lazy loading), reduzir os scripts de terceiros, usar um cache eficiente e migrar para uma hospedagem de alto desempenho.",
    },
    {
      q: "Por que começar pelas imagens?",
      a: "As imagens costumam ser a parte mais pesada de uma página: é ali que o ganho é maior.",
    },
    {
      q: "Para que serve uma CDN?",
      a: "Ela aproxima os seus arquivos dos visitantes que estão longe do seu servidor.",
    },
    {
      q: "A velocidade influencia o posicionamento nas buscas?",
      a: "Sim: desde 2021, as Core Web Vitals do Google influenciam a posição nos resultados de busca. Meça antes e depois de cada mudança.",
    },
  ],
  "repondre-avis-negatifs-reputation": [
    {
      q: "Como responder a uma avaliação negativa?",
      a: "Em quatro tempos: reconhecer a experiência do cliente, explicar-se brevemente sem se defender, propor uma solução concreta e, por fim, convidar a continuar a conversa em particular.",
    },
    {
      q: "É preciso responder imediatamente?",
      a: "Não. Nunca responda no calor do momento: espere pelo menos 30 minutos antes de responder a uma avaliação negativa.",
    },
    {
      q: "Por que responder é importante?",
      a: "Porque os seus futuros clientes leem as suas avaliações, e a sua resposta conta tanto quanto a própria avaliação. Uma avaliação ruim bem administrada tranquiliza mais do que uma página em que todas as avaliações têm 5 estrelas, o que parece falso.",
    },
    {
      q: "O que se deve evitar fazer?",
      a: "O artigo detalha os erros que nunca se deve cometer, a começar por responder sob o impulso da emoção.",
    },
  ],
  "ia-support-client-pme": [
    {
      q: "O que a IA pode fazer no atendimento ao cliente de uma pequena empresa?",
      a: "Responder em tempo real às perguntas frequentes, qualificar e triar os pedidos, fazer lembretes e acompanhamentos automáticos e permanecer disponível 24 horas por dia.",
    },
    {
      q: "A IA substitui o relacionamento humano?",
      a: "Não. Ela livra a equipe das tarefas repetitivas sem valor agregado. O artigo também esclarece o que a IA não deve fazer e deve encaminhar a uma pessoa.",
    },
    {
      q: "Que parte dos pedidos a IA consegue tratar?",
      a: "Boa parte dos pedidos repetitivos (horários, preços, disponibilidade, status de um pedido). A parcela exata depende do que a sua base de conhecimento contém.",
    },
    {
      q: "São necessárias habilidades técnicas para implantá-la?",
      a: "Não, não com as ferramentas modernas. O artigo descreve a implantação com o Aevia Inbox e o que é preciso medir antes e depois.",
    },
  ],
  "securite-mots-de-passe-comptes-pros": [
    {
      q: "Por que não se deve reutilizar uma senha?",
      a: "Se um serviço for invadido, todas as contas que compartilham essa senha também serão.",
    },
    {
      q: "Para que serve um gerenciador de senhas?",
      a: "Para dar a cada conta uma senha longa e única, sem esforço de memória (por exemplo, Bitwarden ou 1Password, citados no artigo).",
    },
    {
      q: "A autenticação em dois fatores é necessária?",
      a: "Sim: é o segundo cadeado mais importante. Ative-a em todos os lugares em que for possível.",
    },
    {
      q: "Quais contas o phishing ataca primeiro?",
      a: "As suas contas profissionais: e-mail, CRM, banco, fornecedores.",
    },
  ],
  "tunnel-conversion-landing-page": [
    {
      q: "O que é um funil de conversão?",
      a: "A sequência de etapas entre um visitante desconhecido e um cliente pagante.",
    },
    {
      q: "Quais são as 4 etapas de um funil eficaz?",
      a: "Captar a atenção (a promessa), construir a confiança (a prova), superar as objeções (os atritos) e concluir com uma chamada para ação sem atrito.",
    },
    {
      q: "O que acontece sem um funil estruturado?",
      a: "Os visitantes vão embora sem deixar rastro.",
    },
    {
      q: "Por que medir cada etapa?",
      a: "Sem analytics, trabalha-se às cegas. Medir cada etapa mostra onde os visitantes são perdidos; o teste A/B permite então testar antes de decidir.",
    },
  ],
  "segmentation-clients-fidelisation": [
    {
      q: "O que é a segmentação de clientes?",
      a: "Dividir os seus clientes em grupos homogêneos para falar de maneira diferente com cada um.",
    },
    {
      q: "Quais segmentações usar para começar?",
      a: "Quatro bases: a segmentação RFM (recência, frequência, valor), por canal de preferência, por tipo de necessidade e por satisfação.",
    },
    {
      q: "Por que fidelizar em vez de conquistar?",
      a: "Segundo os estudos e os setores, conquistar um cliente custa bem mais caro do que manter um (estudo da Harvard Business Review citado no artigo): fidelizar exige, sobretudo, conhecer bem os seus clientes.",
    },
    {
      q: "De qual ferramenta se precisa?",
      a: "Um CRM ou uma caixa de entrada unificada, para reunir o histórico de cada cliente.",
    },
  ],
  "optimiser-presence-en-ligne": [
    {
      q: "Como otimizar a presença online em 2026?",
      a: "Cinco alavancas: um site profissional, o SEO local, um perfil do Google bem cuidado, uma escolha de redes sociais em vez de todas ao mesmo tempo e um site rápido para carregar.",
    },
    {
      q: "Por que o SEO local importa?",
      a: "Ele ajuda a ser encontrado por quem procura perto de você.",
    },
    {
      q: "É preciso estar em todas as redes sociais?",
      a: "Não: o artigo aconselha escolher aquelas em que estão os seus clientes em vez de fazer tudo.",
    },
    {
      q: "Por onde começar?",
      a: "O artigo termina com uma seção \"Por onde começar?\" que ordena essas cinco ações.",
    },
  ],
  "audit-securite-site-web": [
    {
      q: "Por que auditar a segurança de um site pequeno?",
      a: "Porque a segurança web não diz respeito apenas às grandes empresas: uma falha pode surgir a qualquer momento, em qualquer site.",
    },
    {
      q: "O que uma auditoria de segurança web verifica?",
      a: "O certificado SSL/HTTPS, as falhas comuns da classificação OWASP Top 10, os cabeçalhos HTTP de segurança e a configuração de DNS.",
    },
    {
      q: "É preciso ser desenvolvedor para auditar o próprio site?",
      a: "Não: o artigo explica como fazer isso sem ser desenvolvedor, com uma ferramenta de análise.",
    },
    {
      q: "Uma única auditoria basta?",
      a: "Não. O acompanhamento contínuo é recomendado, porque uma falha pode surgir depois da auditoria.",
    },
  ],
  "gestion-messages-clients-multicanal": [
    {
      q: "Por que centralizar as mensagens dos clientes?",
      a: "Uma caixa de entrada dispersa alonga os tempos de resposta, faz perder ou esquecer mensagens e prejudica a imagem profissional.",
    },
    {
      q: "O que é uma inbox unificada?",
      a: "Uma ferramenta que reúne em um só lugar as mensagens de todos os seus canais de contato.",
    },
    {
      q: "Como organizar a transição?",
      a: "Em quatro etapas: mapear os seus canais atuais, escolher a ferramenta de centralização, documentar as suas respostas-padrão e comunicar os seus prazos de resposta.",
    },
    {
      q: "Qual é o papel da IA?",
      a: "O de assistente na gestão das mensagens: o artigo a apresenta como uma ajuda, não como substituta da equipe.",
    },
  ],
};
