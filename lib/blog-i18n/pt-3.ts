import type { BlogPostTranslation } from "../blog-posts";

/* Traductions pt — lot 3. Voir lib/blog-i18n/index.ts. */
export const PT_3: Record<string, BlogPostTranslation> = {
  "prise-commande-telephone-ia-restaurant": {
    title: "Pedidos por telefone com IA: como funciona para uma pizzaria ou um restaurante de comida para viagem",
    excerpt:
      "Entre 18h30 e 20h30, o telefone toca enquanto você está no forno. O que um agente de voz com IA realmente faz quando anota um pedido para viagem, o que ele não faz, de quantos minutos você precisa e as perguntas a fazer antes de escolher.",
    content: `## O essencial em 30 segundos

- **Um agente de voz com IA pode anotar um pedido para viagem completo por telefone**: ele lê o seu cardápio, anota os pratos, as quantidades e as observações, relê o resumo para o cliente e só registra o pedido depois que ele concorda.
- **Ele só deve oferecer o que está no seu cardápio**: um prato que não consta nele é recusado em vez de inventado, e o total é calculado a partir dos seus preços.
- **Ele não recebe pagamento**: o cliente paga na retirada, como em um pedido anotado por você.
- **Na Aevia Inbox, a voz começa em 79 € por mês** (200 minutos de chamada incluídos), mais 100 € de taxa de ativação única.

---

## O problema: os pedidos chegam quando você está com as mãos ocupadas

Numa pizzaria, numa lanchonete ou num restaurante que vende para viagem, as ligações se concentram em poucos horários: no almoço e à noite, antes do jantar. É exatamente o momento em que a cozinha está a todo vapor. Ou alguém sai do seu posto para atender, ou o telefone toca sem resposta e o cliente pede em outro lugar — muitas vezes numa plataforma que cobra comissão.

Um agente de voz com IA atende essas ligações por você, inclusive quando várias chegam ao mesmo tempo.

---

## Como uma ligação acontece, passo a passo

1. **O agente atende em nome do seu estabelecimento** e pergunta o que o cliente deseja.
2. **Ele consulta o seu cardápio** — os pratos e os preços que você cadastrou — para responder às perguntas ("vocês têm pizza vegetariana?") e oferecer o que existe.
3. **Ele anota o pedido**: pratos, quantidades, observações ("sem cebola"), alergia a avisar na cozinha e o nome do cliente.
4. **Ele relê o resumo** — pratos, quantidades, total — e espera a confirmação do cliente.
5. **Ele registra o pedido** só depois desse "sim": o pedido recebe um número, o total é calculado a partir dos seus preços e o número de quem ligou é guardado para que você possa retornar a ligação.
6. **Ele informa um horário de retirada** que leva em conta os pedidos já em andamento: com o movimento tranquilo, o prazo básico; quando vários pedidos acabaram de chegar, um prazo mais longo.
7. **Ele pode enviar um SMS de confirmação** ao cliente com o resumo (números de celular franceses).

O que importa: o pedido não é "um recado para retornar". Ele é anotado, confirmado pelo cliente e registrado durante a ligação. Com a Aevia Inbox, ele aparece na aba Pedidos, com o detalhe dos pratos e o número do cliente.

---

## O que um bom agente não faz

- **Ele não inventa pratos.** Se o cliente pede algo que não está no seu cardápio, o pedido não pode ser registrado com esse prato: o agente oferece o que existe.
- **Ele não se faz de especialista em alérgenos.** Se a informação não está no que você cadastrou, ele não responde "sim, não tem amendoim": ele repassa a pergunta para a equipe.
- **Ele não recebe pagamento.** Nada de número de cartão ditado por telefone: o pagamento é feito na retirada.
- **Ele não cuida da entrega.** O pedido anotado pelo agente é um pedido para retirar no local.
- **Ele não decide os casos especiais** — pedido grande para um evento, reclamação: ele os anota e os repassa para você.

---

## E o seu sistema de caixa?

Um pedido anotado por telefone precisa chegar aonde a cozinha o vê. Com a Aevia Inbox, ele chega na aba Pedidos. Para os restaurantes cujo sistema de caixa está conectado ao HubRise, um conector permite enviá-lo diretamente para lá, com o horário de retirada previsto e o número do cliente; esse conector está em processo de validação pela HubRise. Se a sua operação depende do sistema de caixa, pergunte em que pé ele está antes de contar com ele.

---

## De quantos minutos você precisa?

O preço de um agente de voz é contado em minutos de chamada. Para estimar a sua necessidade, parta da duração de uma ligação de pedido no seu estabelecimento. **A título de exemplo** — hipótese a verificar nas suas próprias ligações: se uma ligação de pedido dura de 2 a 3 minutos,

| Plano Aevia Inbox (só voz) | Minutos incluídos por mês | Ligações de pedido de 2 a 3 min |
|---|---|---|
| Starter — 79 €/mês | 200 | cerca de 65 a 100 |
| Growth — 99 €/mês | 400 | cerca de 130 a 200 |
| Pro — 199 €/mês | 800 | cerca de 265 a 400 |

Somam-se 100 € de taxa de ativação única (conexão da linha e configuração do agente com o seu cardápio). Sem fidelidade, 14 dias de satisfação garantida ou seu dinheiro de volta. Fora da zona do euro, o mesmo valor é cobrado em dólares.

---

## As perguntas a fazer a qualquer fornecedor

1. **De onde o agente tira o cardápio e os preços?** E o que acontece quando você muda um prato ou um preço?
2. **O que ele faz com um prato que não existe?** A resposta certa: ele recusa e oferece o que existe.
3. **Ele relê o resumo antes de registrar?** Sem essa etapa, um erro de compreensão vira um erro na cozinha.
4. **Aonde o pedido chega?** Tela, caixa, e-mail, SMS: onde a sua equipe realmente olha.
5. **O que ele responde sobre alérgenos que não conhece?** Ele deve repassar, nunca adivinhar.
6. **Quanto custa um minuto além do pacote, e quanto dura uma ligação no seu estabelecimento?**

---

## Perguntas frequentes

**A IA consegue mesmo anotar um pedido completo por telefone?**
Sim. O agente lê o seu cardápio, anota os pratos e as quantidades, relê o resumo para o cliente e registra o pedido depois da confirmação dele, com o número de quem ligou.

**O que acontece se o cliente pedir um prato que não está no cardápio?**
O pedido não pode ser registrado com esse prato. O agente oferece o que consta no seu cardápio.

**O agente recebe o pagamento?**
Não. O cliente paga na retirada. Nenhum número de cartão é pedido por telefone.

**E as entregas?**
O agente de voz da Aevia Inbox anota pedidos para retirar no local. Ele não cuida da entrega.

**Quanto custa?**
A voz começa em 79 € por mês com 200 minutos de chamada incluídos, mais 100 € de taxa de ativação única, sem fidelidade.

---

👉 [Veja como o atendimento ao cliente com IA da Aevia Inbox atende o telefone](https://inbox.aevia.services/pt-br/solutions/standard-telephonique-ia)
`,
    faq: [
      {
        q: "A IA consegue mesmo anotar um pedido completo por telefone?",
        a: "Sim. O agente lê o cardápio do restaurante, anota os pratos e as quantidades, relê o resumo para o cliente e registra o pedido depois da confirmação dele, com o número de quem ligou.",
      },
      {
        q: "O que acontece se o cliente pedir um prato que não está no cardápio?",
        a: "O pedido não pode ser registrado com esse prato. O agente oferece o que consta no cardápio.",
      },
      {
        q: "O agente recebe o pagamento?",
        a: "Não. O cliente paga na retirada. Nenhum número de cartão é pedido por telefone.",
      },
      {
        q: "E as entregas?",
        a: "O agente de voz da Aevia Inbox anota pedidos para retirar no local. Ele não cuida da entrega.",
      },
      {
        q: "Quanto custa um agente de voz que anota pedidos?",
        a: "Na Aevia Inbox, a voz começa em 79 € por mês com 200 minutos de chamada incluídos, mais 100 € de taxa de ativação única, sem fidelidade.",
      },
    ],
  },
  "combien-coute-site-internet-professionnel-2026": {
    title: "Quanto custa um site profissional em 2026? Os preços reais",
    excerpt:
      "Entre o primo que faz por 200 € e a agência que anuncia 12.000 €, a diferença não é por acaso: ela corresponde ao que é realmente entregue. Veja as faixas de preço por tipo de site, o que as justifica e os custos que ninguém informa no início.",
    content: `## O essencial em 30 segundos

- **Site institucional simples: 400 a 1.500 €**, site com reservas ou loja: 1.500 a 6.000 €, sob medida complexo: 6.000 € ou mais
- **O preço anunciado nunca é o preço total** — conte a hospedagem, o domínio, a manutenção e as atualizações
- **Um orçamento sem o conteúdo precificado é um orçamento incompleto**: a redação é uma parte importante do trabalho
- **O verdadeiro risco não é pagar caro demais, é pagar por um site que ninguém visita** — um site sem SEO é um folheto caríssimo

---

## Por que as diferenças de preço são tão grandes

Quando um orçamento passa de 500 € para 8.000 € pelo que parece ser o mesmo site, a diferença quase nunca está no design. Ela está em três coisas invisíveis a partir da página inicial: a quantidade de conteúdo a produzir, as funcionalidades que rodam por trás e o tempo gasto para tornar o site encontrável.

Um site de cinco páginas com textos fornecidos pelo cliente não tem nada a ver com um site de cinco páginas em que é preciso escrever cada linha, fotografar os produtos e estruturar o SEO. No entanto, os dois aparecem exatamente da mesma forma num portfólio.

---

## As faixas reais por tipo de site

### Landing page — 300 a 800 €

Uma única página, um único objetivo: fazer o visitante preencher um formulário ou ligar. É o formato mais rentável quando você já tem tráfego para enviar a algum lugar (publicidade, redes sociais, feira do setor).

O que normalmente inclui: uma página estruturada em seções argumentativas, um formulário conectado ao seu e-mail, um design adaptado ao celular, uma hospedagem.

### Site institucional — 600 a 2.500 €

De quatro a oito páginas: início, serviços, sobre, contato, às vezes páginas por serviço. É o formato padrão para um autônomo, um escritório ou consultório, um comércio, um prestador de serviços.

O extremo inferior da faixa corresponde a um modelo adaptado às suas cores e aos seus textos. O extremo superior corresponde a um design próprio da sua marca, uma redação profissional e um trabalho sério de SEO local.

### Site com reservas ou agendamento — 1.500 a 5.000 €

A partir do momento em que um visitante precisa escolher um horário, a complexidade muda de natureza. É preciso gerenciar as disponibilidades, as confirmações, os cancelamentos, os lembretes e, muitas vezes, a sincronização com uma agenda existente.

### Loja virtual — 2.000 a 10.000 €

O catálogo é o custo oculto. Trinta produtos com fotos, descrições, variações e estoques são vários dias de cadastro que ninguém orça no início. Acrescente o pagamento, a entrega, o IVA e as informações legais obrigatórias da venda a distância.

### Sob medida — 6.000 € ou mais

Área do cliente, conexão com um software de gestão do seu setor, calculadora de orçamento, vários idiomas com conteúdos distintos. Aqui já não se fala de site, mas de aplicativo.

---

## Os custos que ninguém informa

| Item | Faixa anual | Evitável? |
|---|---|---|
| Domínio | 10 a 40 € | Não |
| Hospedagem | 60 a 400 € | Não |
| Certificado SSL | 0 a 100 € | Muitas vezes incluído |
| Manutenção e atualizações | 200 a 1.200 € | Não, se for CMS |
| Alterações de conteúdo | 50 a 120 €/h | Sim, se você mesmo souber editar |
| Backups | 0 a 150 € | Não |

Um site de 900 € que custa 800 € por ano para manter sai mais caro em três anos do que um site de 1.800 € com tudo incluído. É a conta que poucos orçamentos permitem fazer.

---

## As três perguntas que revelam um orçamento honesto

**"Quem escreve os textos?"** Se a resposta for vaga, o orçamento vai estourar ou o site vai sair com texto provisório. A redação é o item mais subestimado.

**"O que acontece se eu quiser mudar um preço daqui a seis meses?"** Um site que você não consegue editar sozinho vai lhe custar uma intervenção cobrada a cada vírgula.

**"O site vai aparecer no Google, e para quais termos?"** Um prestador sério vai falar de buscas precisas e locais. Um prestador que responde "ele será otimizado para SEO" não disse nada.

---

## A verdadeira escolha: custo de criação contra custo da ausência

Um comércio que não aparece quando alguém procura o seu ramo na sua cidade perde clientes todos os dias, sem nunca perceber. É uma perda silenciosa, portanto fácil de ignorar — ao contrário de uma fatura.

Se você recebe nem que seja um cliente por mês graças ao seu site, com um tíquete médio de 150 €, o site se paga em menos de um ano, seja qual for a faixa em que você está. A questão, portanto, não é "quanto custa", mas "a partir de quando dá retorno".

---

## E as soluções automatizadas?

Há dois anos existe um terceiro caminho entre o criador de sites em que você faz tudo sozinho e a agência de vários milhares de euros: plataformas que geram um site profissional a partir das informações do seu negócio, com o SEO já estruturado.

A vantagem não é apenas o preço. É o prazo: um site no ar em poucos dias, em vez de seis semanas de idas e vindas. A contrapartida é que você parte de um modelo do seu setor em vez de uma criação gráfica original — o que, para muitos comércios e prestadores de serviços, não tem nenhuma consequência comercial.

[Aevia Launch](https://launch.aevia.services) funciona com esse princípio: site no ar em até 48 horas (5 a 7 dias para um site Premium sob medida), de 399 € a 1.499 € em pagamento único, e depois 20 € por mês de hospedagem e manutenção.`,
    faq: [
      {
        q: "Qual é o preço médio de um site profissional na França?",
        a: "Para uma microempresa ou um autônomo, um site institucional costuma custar entre 800 e 2.500 €. Abaixo de 400 €, geralmente se trata de um modelo sem trabalho de conteúdo nem de SEO. Acima de 5.000 €, entra-se no sob medida ou no e-commerce.",
      },
      {
        q: "É preciso pagar uma mensalidade por um site?",
        a: "Não necessariamente. Alguns prestadores cobram um pagamento único com hospedagem incluída, outros uma assinatura mensal. Compare sempre em três anos: uma assinatura de 39 €/mês representa 1.400 € nesse período.",
      },
      {
        q: "Quanto custa a manutenção de um site por ano?",
        a: "Entre 200 e 1.200 € por ano, dependendo da tecnologia. Um site em CMS exige atualizações regulares de segurança; uma solução hospedada geralmente as inclui no preço.",
      },
      {
        q: "Um site por menos de 500 € pode ser sério?",
        a: "Sim, desde que o escopo seja claro: uma ou duas páginas, os seus textos, um modelo adaptado. O problema não é o preço baixo, mas o preço baixo anunciado para um escopo que não é pequeno.",
      },
    ],
  },
  "standard-telephonique-ia-vs-secretariat-telephonique": {
    title: "Central telefônica com IA ou secretariado telefônico: qual escolher?",
    excerpt:
      "Os dois prometem a mesma coisa — que nenhuma ligação fique sem resposta. Mas o custo, a disponibilidade e o que realmente acontece durante a ligação não têm nada a ver. Comparativo com números e critérios de decisão de acordo com o seu volume de ligações.",
    content: `## O essencial em 30 segundos

- **O secretariado telefônico cobra por ligação ou por pacote**: conte de 1,50 a 3 € por ligação atendida, ou de 80 a 400 €/mês, dependendo do volume
- **O agente de voz com IA cobra por pacote ou por minuto**, sem adicional quando várias ligações chegam ao mesmo tempo: cada minuto custa o mesmo preço
- **A verdadeira diferença não é o preço, é o que sai da ligação**: um recado para retornar, ou um horário já marcado na sua agenda
- **O secretariado mantém a vantagem nos pedidos emocionais ou fora do roteiro**; a IA mantém a vantagem no volume, à noite e nos picos

---

## O que cada solução realmente faz

Um **secretariado telefônico** é um serviço humano terceirizado. Atendentes respondem no seu lugar, com uma ficha de instruções que você redigiu. Eles anotam um recado, filtram e repassam para você por e-mail ou SMS. Alguns prestadores chegam a marcar horários se você lhes der acesso a uma agenda.

Um **agente de voz com IA** é um software que atende, entende o pedido em linguagem natural e executa uma ação no seu sistema: verificar disponibilidades, criar uma reserva, registrar um pedido, responder a uma pergunta sobre os seus horários ou os seus preços.

A distinção que importa: o secretariado produz, na maior parte das vezes, informação a ser tratada depois. O agente de voz produz uma ação já concluída.

---

## Comparativo com números

| Critério | Secretariado telefônico | Agente de voz com IA |
|---|---|---|
| Custo inicial | 0 a 150 € de ativação | 0 a 200 € de configuração |
| Custo recorrente | 80 a 400 €/mês, ou 1,50–3 €/ligação | 79 a 999 €/mês, dependendo do volume |
| Horários | Horário comercial, extensões pagas | 24 horas por dia, 7 dias por semana, sem adicional |
| Ligações simultâneas | Limitadas pelo número de atendentes | Várias em paralelo, sem sinal de "ocupado" |
| Idiomas | Depende da equipe, muitas vezes 1 a 2 | 5 idiomas ou mais, sem custo extra |
| Resultado de uma ligação | Um recado a tratar | Uma ação executada |
| Nuances emocionais | Ponto forte | Ponto fraco |
| Pedidos fora do roteiro | Improvisação humana | Transferência ou retorno da ligação |

---

## A conta que pouca gente faz

Um restaurante que recebe 25 ligações por dia, das quais 18 para reserva, vai pagar cerca de 40 a 55 € por dia de secretariado na tarifa por ligação — ou seja, mais de 1.200 € por mês. Para esse volume, o pacote de IA fica muito abaixo.

Por outro lado, uma consultoria que recebe três ligações por dia, todas delicadas e todas diferentes, não tem nenhum interesse em automatizar. O secretariado vai custar 100 € por mês e fará melhor.

**A regra prática**: abaixo de 5 ligações por dia com pedidos variados, o humano continua sendo mais adequado. Acima de 15 ligações por dia com pedidos repetitivos, a balança pende claramente para a IA. Entre os dois, depende da repetitividade, não do volume.

---

## O que a IA faz melhor, na prática

**Os horários sem ninguém para atender.** Parte das ligações de um comércio chega fora do horário de funcionamento ou no meio do rush. São justamente as ligações que nenhum humano atende e que nenhum secretariado cobre sem custo extra.

**Os picos.** Na sexta à noite, num restaurante, seis pessoas ligam ao mesmo tempo. Um secretariado coloca cinco ligações em espera; um agente de voz atende as seis.

**A execução completa.** O agente não diz "vou repassar". Ele verifica a mesa das 20h, faz a reserva no nome informado, registra no software do salão e envia a confirmação.

---

## O que o humano faz melhor

Um cliente irritado, um luto, um cancelamento que esconde um litígio, uma negociação comercial: são momentos em que a voz humana não é um luxo. Um bom secretariado sabe desacelerar, pedir desculpas com sinceridade, perceber que é hora de passar a vez.

Por isso, a melhor configuração quase nunca é uma ou outra. O agente de voz atende as ligações padrão — reservas, horários, disponibilidades — e transfere para um humano assim que o pedido sai do roteiro.

---

## Como decidir em três perguntas

1. **Que proporção das suas ligações se parece?** Anote as suas ligações durante uma semana. Se a maioria se resume a três motivos, a automação compensa.
2. **Quantas ligações nunca são atendidas?** A sua operadora ou o seu telefone informa. É esse o número que justifica o gasto, não o total de ligações.
3. **O que você quer obter no fim da ligação?** Se um recado basta, um secretariado serve. Se você quer um horário já marcado, precisa de um sistema conectado à sua agenda.

---

Na Aevia, o agente de voz da [Aevia Inbox](https://inbox.aevia.services) foi criado para a terceira resposta: ele não repassa, ele executa — criação da reserva, sincronização do calendário, envio da confirmação — e transfere para um humano assim que o pedido sai do seu escopo.`,
    faq: [
      {
        q: "Um agente de voz com IA custa menos que um secretariado telefônico?",
        a: "Acima de umas quinze ligações por dia, sim, e a diferença aumenta com o volume, já que a IA não cobra pela simultaneidade. Abaixo de cinco ligações por dia, um secretariado humano muitas vezes continua mais barato e mais adequado.",
      },
      {
        q: "Quem liga sabe que está falando com uma inteligência artificial?",
        a: "O agente é transparente sobre a sua natureza. Na prática, o que importa para quem liga é obter uma resposta imediata e uma reserva confirmada em vez de cair numa secretária eletrônica.",
      },
      {
        q: "O que acontece se a IA não entender o pedido?",
        a: "Ela transfere para um número atendido por uma pessoa ou registra um pedido de retorno com o contexto da ligação. Um sistema bem configurado define com antecedência os motivos que devem sempre ser transferidos para uma pessoa.",
      },
      {
        q: "Dá para combinar os dois?",
        a: "É a configuração mais eficaz: a IA absorve as ligações repetitivas e os horários não cobertos, e um humano assume as situações delicadas ou os pedidos complexos.",
      },
    ],
  },
  "chatbot-vs-agent-ia-conversationnel-difference": {
    title: "Chatbot ou agente de IA: qual é a diferença e de qual você precisa?",
    excerpt:
      "Chamamos de “chatbot” praticamente tudo o que responde automaticamente, e isso esconde uma diferença de natureza. Um segue uma árvore de decisão escrita com antecedência; o outro entende e age. Veja como distinguir os dois e qual corresponde à sua necessidade.",
    content: `## O essencial em 30 segundos

- **Um chatbot clássico segue um roteiro**: botões, árvore de decisão, respostas pré-escritas. Ele não entende, ele direciona.
- **Um agente de IA conversacional entende a formulação livre** e pode executar uma ação: reservar, localizar um pedido, alterar um agendamento.
- **A diferença visível para o cliente**: o chatbot faz você clicar em "Outro assunto", o agente responde ao pedido.
- **O chatbot continua pertinente** para jornadas muito curtas e muito delimitadas. Fora disso, ele gera mais frustração do que economiza tempo.

---

## Três gerações, muitas vezes confundidas

**O chatbot de botões.** Você clica em "Horários", "Preços", "Fale conosco". É um menu disfarçado de conversa. Útil para três informações fixas, irritante assim que a sua pergunta não está na lista.

**O chatbot de palavras-chave.** Ele procura palavras na sua frase e dispara a resposta associada. "Eu queria cancelar a minha reserva de quinta-feira" dispara a resposta "cancelamento", mas ele não sabe de qual reserva você está falando.

**O agente de IA conversacional.** Ele interpreta a frase inteira, guarda o contexto das mensagens anteriores, consulta os seus dados reais e executa a ação. "Eu queria passar a de quinta para sexta" se torna: identificar o cliente, encontrar o horário de quinta, verificar a sexta, remarcar, confirmar.

---

## O teste que os separa em uma única pergunta

Faça uma pergunta composta: **"Vocês abrem no sábado e fazem entrega em Bourg-en-Bresse?"**

- O chatbot de botões não consegue recebê-la.
- O chatbot de palavras-chave capta um dos dois assuntos e ignora o outro.
- O agente de IA responde aos dois, na ordem certa.

É exatamente o tipo de pergunta que os clientes reais fazem, porque ninguém formula um pedido de cada vez.

---

## O que isso muda comercialmente

O custo de um chatbot mal posicionado não aparece em nenhuma fatura: ele está nos clientes que desistem. Quando um visitante clica três vezes sem obter a resposta, ele não escreve para reclamar — ele fecha a aba e liga para o concorrente.

Por outro lado, um agente que responde a perguntas formuladas livremente transforma uma pergunta em ação. O visitante não pergunta mais "como reservar", ele reserva dentro da própria conversa.

---

## Quando um simples chatbot basta

Não há vergonha nenhuma em continuar simples. Um chatbot de botões dá conta do recado se:

- você tem menos de cinco perguntas recorrentes, todas factuais;
- o seu objetivo é filtrar antes de um contato humano, não resolver o pedido;
- o seu volume é baixo e o orçamento, apertado.

Nesse caso, uma faixa clara com os seus horários e um botão de ligação muitas vezes funciona melhor do que um chatbot.

---

## Quando você precisa de um agente de IA

- Os seus clientes escrevem pedidos compostos, com datas, nomes, quantidades.
- A resposta depende dos seus dados: disponibilidades, estoques, histórico do cliente.
- Você recebe mensagens em vários canais e quer a mesma qualidade em todos.
- Você perde pedidos à noite e no fim de semana.

---

## O critério decisivo: ler ou agir

Faça a si mesmo uma única pergunta: **você quer que o sistema informe ou que ele termine o trabalho?**

Informar é exibir uma resposta. Terminar o trabalho é gravar uma linha na sua base de dados: uma reserva, um pedido, um agendamento remarcado. Essa segunda categoria exige um agente conectado às suas ferramentas, não um widget de conversa.

Essa é a lógica da [Aevia Inbox](https://inbox.aevia.services): o mesmo cérebro de IA responde no WhatsApp, no Instagram, por e-mail e por telefone, com acesso às disponibilidades reais — e cria a reserva em vez de explicar como criar uma.`,
    faq: [
      {
        q: "Qual é a diferença entre um chatbot e um agente de IA?",
        a: "Um chatbot segue um roteiro predefinido (botões ou palavras-chave) e exibe respostas escritas com antecedência. Um agente de IA conversacional interpreta um pedido formulado livremente, mantém o contexto da conversa e pode executar uma ação nos seus sistemas, como criar uma reserva.",
      },
      {
        q: "Um agente de IA pode errar?",
        a: "Sim, como um ser humano. A diferença é que um agente bem configurado conhece os próprios limites: quando o pedido sai do seu escopo, ele transfere para uma pessoa em vez de inventar uma resposta.",
      },
      {
        q: "É preciso um desenvolvedor para implantar um agente de IA?",
        a: "Hoje não, para os casos padrão. As plataformas atuais são configuradas descrevendo a sua atividade, os seus horários e as suas regras; o desenvolvimento continua necessário para conectar um software de gestão setorial pouco comum.",
      },
      {
        q: "Um agente de IA substitui o atendimento ao cliente humano?",
        a: "Não. Ele absorve os pedidos repetitivos e os horários não cobertos, o que libera a equipe para as situações em que a presença humana realmente faz diferença.",
      },
    ],
  },
  "service-client-multilingue-ia-international": {
    title: "Vender para o exterior sem contratar: o atendimento ao cliente multilíngue com IA",
    excerpt:
      "Responder em cinco idiomas exigia cinco funcionários, ou um prestador caríssimo. Essa trava caiu. Veja o que um atendimento ao cliente multilíngue automatizado muda para uma pequena empresa que vende além das suas fronteiras, e as armadilhas que continuam.",
    content: `## O essencial em 30 segundos

- **A barreira do idioma não é mais um custo fixo**: um agente de IA responde no idioma do cliente sem pessoal adicional por mercado
- **O verdadeiro freio não é a tradução, é o fuso horário** — um cliente em Bogotá escreve enquanto o seu escritório dorme
- **Traduzir não é localizar**: as moedas, os formatos de data e os costumes comerciais mudam de um país para outro
- **Comece por um idioma e um país**, meça e depois replique — abrir cinco mercados ao mesmo tempo dilui tudo

---

## A conta que travava a expansão internacional

Até pouco tempo atrás, atender um mercado estrangeiro impunha uma escolha binária: contratar alguém que fala o idioma, ou desistir. Para uma empresa de três pessoas, isso significava que um mercado de 40 milhões de habitantes continuava fechado porque faltava um funcionário de 35.000 € por ano.

Essa conta mudou. Um agente conversacional responde em francês, inglês, espanhol, alemão ou português com a mesma qualidade, sem que o custo dependa do número de idiomas. O idioma se tornou um parâmetro, não uma linha de despesa.

---

## O que isso destrava na prática

**Você pode testar um mercado sem se comprometer.** Abrir a Espanha exigia uma contratação; agora exige uma página traduzida e um agente configurado. Se o mercado não responder, você perdeu alguns dias, não um ano de salário.

**Você cobre os fusos horários sem trabalhar à noite.** É o ponto mais subestimado. Um potencial cliente canadense que escreve às 21h no horário de Montreal chega até você às 3h da manhã. Sem resposta automática, ele já escreveu para três concorrentes antes de você acordar.

**Você não perde mais os pedidos em um idioma que não lê.** Muitas pequenas empresas têm uma pasta de e-mails que nunca foram tratados porque estavam em alemão.

---

## As quatro armadilhas que continuam

### 1. Traduzir não basta

Um texto traduzido palavra por palavra soa estrangeiro. Os costumes comerciais diferem: o tratamento informal é normal na Espanha em contextos em que o francês exigiria o tratamento formal ("vous"); o alemão espera mais precisão factual e menos ênfase; o inglês britânico e o americano não têm as mesmas convenções de cortesia.

### 2. As moedas e os formatos

Exibir "399 €" para um cliente colombiano exige dele um cálculo mental e uma conversão que ele não vai fazer. Os formatos de data (12/06 significa junho no Reino Unido e dezembro nos Estados Unidos) provocam erros reais de reserva.

### 3. O pagamento

Cada mercado tem os seus hábitos: cartão na França, transferência instantânea na Alemanha, carteiras digitais na América Latina. Oferecer apenas o cartão fecha uma parte do mercado sem que você perceba.

### 4. As obrigações locais

Avisos legais, condições de venda, direito de arrependimento e tributação mudam de um país para outro. Um atendimento ao cliente automatizado não dispensa você de ter condições gerais adaptadas ao mercado-alvo.

---

## O método que funciona: um mercado de cada vez

1. **Escolha o mercado em que você já tem sinais** — visitas, um pedido espontâneo, um cliente existente que falou de você.
2. **Traduza primeiro o que converte**: a página de produto, a página de preços, as perguntas frequentes. O blog vem depois.
3. **Configure o agente nesse idioma** e verifique as respostas dele para as suas vinte perguntas mais frequentes.
4. **Meça durante seis semanas**: pedidos recebidos, taxa de resposta, pedidos convertidos.
5. **Só replique se os números acompanharem.**

---

## O que isso significa para uma microempresa

Uma empresa sediada na França pode hoje atender um cliente espanhol, canadense ou colombiano com as mesmas ferramentas que o seu vizinho de porta. O site é entregue multilíngue, o agente responde no idioma do visitante no WhatsApp, no Instagram, por e-mail ou por telefone, e os pedidos chegam a uma única caixa de entrada, seja qual for o canal ou o idioma.

É o que faz a [Aevia Inbox](https://inbox.aevia.services): cinco idiomas nativos, nenhum custo adicional por idioma e o mesmo contexto do cliente de um canal para outro. A sede fica na França; os clientes atendidos não necessariamente.`,
    faq: [
      {
        q: "Um agente de IA consegue mesmo responder corretamente em vários idiomas?",
        a: "Sim, nas conversas comuns de atendimento ao cliente: perguntas sobre horários, preços, disponibilidade, agendamentos. A qualidade é comparável de um idioma para outro. Para negociações comerciais ou assuntos sensíveis, continua sendo preferível passar para um humano.",
      },
      {
        q: "É preciso ter um site traduzido para atender um mercado estrangeiro?",
        a: "No mínimo as páginas que convertem: produto, preços, contato e perguntas frequentes. Um agente multilíngue num site inteiramente em francês cria uma incoerência que reduz a confiança.",
      },
      {
        q: "Quanto custa adicionar um idioma?",
        a: "Numa solução multilíngue nativa, nada a mais por idioma — o custo acompanha o volume de mensagens, não o número de idiomas. O que custa é a tradução do site e a adaptação das condições de venda ao mercado-alvo.",
      },
      {
        q: "Dá para atender um fuso horário distante sem trabalhar à noite?",
        a: "Esse é justamente o interesse: o agente responde imediatamente, seja qual for a hora, faz o agendamento ou registra o pedido, e você trata o resto durante o seu horário comercial.",
      },
    ],
  },
  "whatsapp-business-api-ou-application-difference": {
    title: "WhatsApp Business: aplicativo gratuito ou API, de qual você precisa?",
    excerpt:
      "Dois produtos têm o mesmo nome e não fazem o mesmo trabalho. Um é um aplicativo no celular, o outro, uma infraestrutura sem tela. Escolher o errado custa dinheiro gasto à toa ou um bloqueio da conta no pior momento.",
    content: `## O essencial em 30 segundos

- **O aplicativo WhatsApp Business é gratuito**, roda num celular e serve enquanto uma só pessoa responde
- **A API do WhatsApp Business não tem interface**: é uma conexão técnica ligada a uma ferramenta, feita para o volume e para o trabalho em equipe
- **Um número não pode estar nos dois ao mesmo tempo** — a migração para a API é um caminho sem volta fácil
- **Enviar mensagens não solicitadas pelo aplicativo é a melhor maneira de ter o número bloqueado**

---

## Dois produtos, um só nome

O WhatsApp oferece duas coisas muito diferentes sob a mesma marca.

**O aplicativo WhatsApp Business** é instalado como o WhatsApp comum. Ele acrescenta um perfil comercial, um catálogo simples, respostas rápidas e etiquetas. É gratuito e funciona num celular, com extensão possível no computador.

**A API do WhatsApp Business** não tem nenhuma interface. É um canal técnico que você conecta a um software: uma caixa de entrada compartilhada, um CRM, um agente de IA. Você não "vê" a API, você vê a ferramenta que a utiliza.

---

## Comparativo

| Critério | Aplicativo | API |
|---|---|---|
| Preço | Gratuito | Cobrado por conversa, via um fornecedor |
| Interface | Sim, no celular | Nenhuma, passa por uma ferramenta |
| Usuários simultâneos | 1 celular (+ 4 aparelhos vinculados) | Ilimitado |
| Automação | Respostas rápidas básicas | Completa, agente de IA possível |
| Histórico compartilhado | Não | Sim |
| Mensagens em massa | Muito limitado, risco de bloqueio | Autorizado via modelos aprovados |
| Estatísticas | Mínimas | Completas |

---

## O ponto de virada

Há três sinais que indicam que o aplicativo não basta mais:

1. **Várias pessoas precisam responder.** O aplicativo está vinculado a um celular. Assim que dois funcionários precisam tratar as mesmas conversas, você acaba passando um aparelho de mão em mão, o que é insustentável.
2. **Você perde o fio da meada.** Sem histórico compartilhado nem atribuição, há pedidos tratados duas vezes, ou nem tratados.
3. **Você quer responder automaticamente.** As respostas rápidas do aplicativo não entendem o pedido: elas colam um texto que você escreveu.

---

## A armadilha que sai mais cara

Muitas empresas usam o aplicativo para enviar promoções a uma lista de clientes. O WhatsApp detecta isso, e o número é restringido e depois bloqueado. Você perde não só o canal, mas também o histórico das conversas com os seus clientes.

A API existe justamente para isso: as mensagens enviadas a um cliente que não escreveu para você recentemente passam por **modelos aprovados com antecedência** pela Meta. É mais restritivo, mas é o que protege o número.

---

## O que é preciso saber antes de migrar

**O número não pode estar nos dois.** Migrar um número para a API o remove do aplicativo. Planeje a migração para um momento tranquilo e avise a equipe.

**Você não trata diretamente com a Meta.** Você passa por um fornecedor que cuida da conexão e da cobrança. A escolha desse fornecedor determina o que você poderá fazer depois.

**A verificação da empresa leva tempo.** A Meta pede para verificar a existência legal da empresa. Conte com vários dias a algumas semanas, e faça isso antes de precisar.

---

## Como escolher com uma única pergunta

**Quantas pessoas precisam ver as mesmas conversas?**

Uma só, com menos de cinco conversas por dia: o aplicativo gratuito é a escolha certa, e pagar pela API seria desperdício.

Duas ou mais, ou mais de dez conversas por dia, ou a vontade de automatizar: você precisa da API e de uma ferramenta para usá-la.

É o que faz a [Aevia Inbox](https://inbox.aevia.services): a conexão com a API é gerenciada, o WhatsApp chega à mesma caixa de entrada que o Instagram e o e-mail, e o mesmo agente de IA pode responder nos três.`,
    faq: [
      {
        q: "A API do WhatsApp Business é paga?",
        a: "Sim. A Meta cobra por conversa, com uma tarifa que varia conforme o país e o tipo de mensagem. É preciso somar o preço da ferramenta que usa a API. Já o aplicativo WhatsApp Business continua gratuito.",
      },
      {
        q: "Dá para manter o número atual ao migrar para a API?",
        a: "Sim, na maioria dos casos, mas o número sai do aplicativo WhatsApp Business e não pode mais ser usado nele. A migração precisa ser preparada: histórico local salvo, equipe avisada.",
      },
      {
        q: "Por que o meu número de WhatsApp foi bloqueado?",
        a: "Na maioria das vezes, porque mensagens foram enviadas em massa para pessoas que não tinham escrito primeiro, ou porque destinatários denunciaram as mensagens. A API com modelos aprovados existe para evitar esse cenário.",
      },
      {
        q: "É preciso um desenvolvedor para usar a API do WhatsApp?",
        a: "Não, se você usar uma solução que já a integra. O desenvolvimento só é necessário para uma integração sob medida com um software interno.",
      },
    ],
  },
  "agent-vocal-ia-garage-automobile": {
    title: "Oficina mecânica: pare de perder clientes enquanto está embaixo de um carro",
    excerpt:
      "Um mecânico não consegue atender o telefone com as mãos sujas de graxa. Cada ligação perdida é uma revisão que vai para o concorrente da frente. Como um agente de voz marca os horários enquanto a oficina trabalha, e o que não se deve confiar a ele.",
    content: `## O essencial em 30 segundos

- **Uma oficina perde ligações** no horário de trabalho: não há ninguém no balcão, e ninguém atende embaixo de um elevador
- **A ligação perdida não liga de novo** — ela liga para a próxima oficina, porque uma pane não pode ser adiada
- **Um agente de voz marca o horário**, anota o motivo e o veículo e registra tudo na agenda sem interromper o trabalho em andamento
- **O que NÃO se deve confiar a ele**: o diagnóstico e o orçamento. Um valor informado por telefone e desmentido na oficina destrói a confiança

---

## O problema é mecânico, não comercial

Uma oficina de duas a cinco pessoas tem uma restrição que poucas profissões conhecem: as mãos ocupadas e sujas durante a maior parte do dia. O telefone toca exatamente no momento em que não dá para atender.

Resultado: a maioria das oficinas funciona num modo precário assumido — retorna a ligação "quando sobra um minuto", ou seja, às 19h, quando o próprio cliente está fazendo outra coisa. Nesse meio-tempo, ele ligou para outras duas oficinas e marcou horário na primeira que atendeu.

Não é uma falha de atendimento. É uma restrição física. E é justamente o tipo de problema que um sistema resolve melhor do que um esforço extra.

---

## O que um agente de voz faz bem nessa profissão

**Marcar o horário com as informações certas.** Um agendamento útil numa oficina contém quatro coisas: o nome, o veículo (marca, modelo, placa), o motivo e uma disponibilidade. O agente pergunta tudo na ordem, confere e reserva o horário.

**Separar o urgente do planejável.** "O meu carro não pega mais" e "preciso de uma troca de óleo no mês que vem" não pedem a mesma resposta. Um agente bem configurado oferece o primeiro horário disponível num caso e uma faixa ampla no outro.

**Responder às perguntas que voltam trinta vezes por semana.** Vocês fazem a inspeção técnica? Emprestam um carro reserva? Atendem a minha marca? Abrem no sábado? Essas perguntas não exigem nenhuma competência mecânica, só uma resposta imediata.

**Absorver a noite e o fim de semana.** Uma pane raramente acontece num dia de semana às 10h. A ligação de domingo à noite é a que decide para onde o carro vai na segunda-feira.

---

## O que não se deve automatizar de jeito nenhum

**O diagnóstico.** Um cliente que descreve um barulho nunca descreve o barulho certo. Nenhum sistema, humano ou não, faz diagnóstico por telefone — e um agente que arrisca uma causa compromete você.

**O orçamento.** É o erro que sai mais caro. Se o agente diz "conte com uns 250 €" e a fatura sai a 480 €, você perde o cliente e ganha uma avaliação de uma estrela. A regra a escrever na configuração: **nunca informar preço sem orçamento**, e encaminhar para uma visita à oficina.

**Os litígios.** Um cliente que liga de novo, insatisfeito com um conserto, precisa falar com um humano. Imediatamente.

---

## O que isso muda numa semana típica

Uma oficina que recebe 15 ligações por dia, das quais metade fica sem resposta, recupera, com uma taxa de conversão prudente, vários agendamentos por semana que iam para outro lugar. Com um tíquete médio de manutenção comum, a conta é rápida.

O benefício menos visível, porém mais duradouro: **a oficina não é mais interrompida**. Um mecânico que larga a ferramenta para atender perde muito mais do que a duração da ligação — ele perde o fio do que estava fazendo.

---

## Como implantar sem quebrar o que já existe

A configuração recomendada é o **encaminhamento condicional**: a oficina mantém o seu número, e as ligações passam para o agente somente se ninguém atender depois de cinco toques ou se a linha estiver ocupada. Nada muda para os clientes, nada muda para a equipe, e o agente só pega o que teria caído no vazio.

Reserve meio dia para reunir as perguntas frequentes e as verdadeiras regras da oficina — é aí que se decide a qualidade, não na parte técnica.`,
    faq: [
      {
        q: "O agente pode dar o preço de um conserto por telefone?",
        a: "Não deveria, e essa é uma regra a incluir explicitamente na configuração dele. Um valor informado sem diagnóstico será desmentido pela fatura, o que custa o cliente e a avaliação. O agente encaminha para um orçamento após uma visita à oficina.",
      },
      {
        q: "Como o agente sabe quais horários estão livres?",
        a: "Ele lê a agenda conectada em tempo real e só oferece horários realmente disponíveis; depois, registra nela o agendamento com o veículo e o motivo.",
      },
      {
        q: "O que acontece se o cliente tiver uma pane urgente?",
        a: "A urgência é configurável: o agente pode oferecer o primeiro horário do dia, transferir imediatamente para o celular do dono ou explicar o que fazer para conseguir um socorro mecânico, conforme o que você decidir.",
      },
      {
        q: "É preciso trocar de número de telefone?",
        a: "Não. A configuração recomendada é um encaminhamento condicional a partir do número atual: o agente só pega as ligações que não são atendidas.",
      },
    ],
  },
  "prise-rendez-vous-ia-cabinet-dentaire": {
    title: "Consultório odontológico: o agendamento com IA e a linha que não se deve cruzar",
    excerpt:
      "A recepção de um consultório odontológico passa o dia com três pedidos que se repetem. Automatizá-los libera tempo de verdade — desde que se saiba exatamente o que uma IA não tem o direito de fazer num consultório de saúde.",
    content: `## O essencial em 30 segundos

- **Três motivos representam a maior parte das ligações**: marcar, remarcar ou cancelar uma consulta
- **Automatizar esses três** devolve à recepção o tempo que ela passa ao telefone em vez de acolher os pacientes presentes
- **Uma IA nunca dá conselho médico** — nem triagem de sintomas, nem "é grave?". É um limite jurídico, não só uma questão de prudência
- **Os dados de saúde são sensíveis no sentido do RGPD**: hospedagem, minimização e informação aos pacientes não são opcionais

---

## O que a recepção de um consultório odontológico realmente faz

Observe um dia de telefone num consultório: a grande maioria das ligações cabe em três frases. "Eu queria marcar uma consulta." "Preciso remarcar a de quinta." "Não vou poder ir."

Essas ligações não exigem nenhuma competência clínica. Exigem uma agenda atualizada e dois minutos. Mas chegam em rajadas às 9h e às 14h, exatamente quando os pacientes chegam à recepção — e é a pessoa na sua frente que espera enquanto você atende o telefone.

---

## O que se automatiza sem problemas

**A marcação de consultas.** O agente pergunta o motivo dentro de uma lista que você define (revisão, limpeza, urgência, continuação de tratamento), oferece os horários correspondentes à duração real do procedimento e registra o paciente.

**A remarcação e o cancelamento.** É a fonte de ganho mais rentável e mais subestimada. Um cancelamento não tratado vira uma cadeira vazia; um cancelamento captado a tempo permite oferecer o horário de novo.

**O lembrete de consulta.** A taxa de faltas cai bastante com um lembrete na véspera — e ninguém gosta de fazer essas ligações.

**As perguntas administrativas.** Vocês aceitam o cartão Vitale (o cartão do seguro de saúde francês)? São credenciados pelo seguro de saúde público (conventionné)? Onde estacionar? Fazem implantes? Essas respostas são fixas e não há nenhuma razão para ocupar um humano com elas.

---

## A linha que não se deve cruzar

Esta é a parte que precisa ser lida duas vezes.

**Nenhum conselho médico, nunca.** Um agente não deve responder a "estou com dor, posso esperar?", nem sugerir analgésico, nem estimar uma gravidade. A configuração deve prever uma frase de saída explícita e uma transferência.

**Nenhuma triagem de sintomas.** Decidir se um paciente é urgente ou não com base numa descrição por telefone é um ato médico. O agente pode oferecer um horário de "urgência" se o paciente pedir, mas não decidir que o caso se enquadra nisso.

**Nenhuma troca de dados médicos.** O agente registra um motivo na sua nomenclatura, não um histórico clínico.

**Um humano acessível o tempo todo.** Uma dor de dente aguda não fica em espera. A transferência deve ser imediata e testada.

---

## RGPD: o que isso implica na prática

Uma consulta odontológica, mesmo sem detalhe clínico, revela um estado de saúde. O RGPD a classifica entre os **dados sensíveis**, o que impõe mais do que um formulário de consentimento:

- **Minimização** — coletar apenas o nome, o contato, o motivo e o horário. Nada de "descreva o seu problema".
- **Informação aos pacientes** — dizer claramente que um sistema automatizado cuida da marcação de consultas e como falar com um humano.
- **Hospedagem** — os dados de saúde na França estão sujeitos a exigências específicas de hospedagem; verifique com o seu prestador, de acordo com o que é realmente armazenado.
- **Prazo de conservação** — definido, escrito, aplicado.
- **Subcontratação** — um contrato de subcontratação, nos devidos termos, com o prestador.

Isso não é um obstáculo: é uma estrutura. Um consultório que a aplica também ganha tranquilidade na relação com os pacientes.

---

## O que isso muda no dia a dia

O benefício não é "substituir a recepção". É **devolver a ela a sua verdadeira função**: acolher, preparar, cuidar do pagamento direto pelo seguro (tiers payant), dar atenção ao paciente que está presente. O telefone deixa de ser uma interrupção permanente e passa a ser um fluxo tratado em segundo plano.

E o consultório deixa de perder os pedidos da noite e do fim de semana, que hoje caem numa secretária eletrônica que poucos pacientes escutam até o fim.

---

## Implantação realista

Conte com meio dia para definir a nomenclatura dos motivos e as durações associadas, as regras de urgência e a lista das situações que acionam uma transferência para um humano. É esse trabalho — não a parte técnica — que determina se o sistema será um alívio ou uma fonte de incidentes.`,
    faq: [
      {
        q: "Uma IA tem o direito de marcar consultas médicas?",
        a: "Sim, a marcação de consultas é um ato administrativo, não um ato médico. Por outro lado, o agente não deve avaliar sintomas, nem recomendar um tratamento, nem decidir sobre uma urgência: esses atos cabem ao profissional de saúde.",
      },
      {
        q: "Os dados dos pacientes estão protegidos?",
        a: "Uma consulta com um profissional de saúde revela um estado de saúde e, portanto, entra nos dados sensíveis no sentido do RGPD. Isso impõe a minimização dos dados coletados, a informação aos pacientes, um prazo de conservação definido, um contrato de subcontratação e atenção às exigências de hospedagem de acordo com o que é armazenado.",
      },
      {
        q: "O que acontece se um paciente tiver uma urgência com dor?",
        a: "A transferência para um humano deve ser imediata e configurada com antecedência. O agente nunca deve avaliar sozinho o grau de urgência a partir da descrição do paciente.",
      },
      {
        q: "O agente consegue cuidar dos cancelamentos e dos lembretes?",
        a: "Sim, e muitas vezes é o ganho mais rentável: um cancelamento captado a tempo permite oferecer o horário de novo, e um lembrete na véspera reduz bastante as faltas.",
      },
    ],
  },
};
