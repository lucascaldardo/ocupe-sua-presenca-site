const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// Modulo 1 Desktop
content = content.replace(/Chakras e Centros de Energia \(Plexo Solar e fluxo vertical\)\./g, 'Chakras e Centros de Energia.');
content = content.replace(/Despertar da Presença Interna e Tempo de Qualidade\./g, 'Despertar da Presença Interna.');
content = content.replace(/Consagração diária do cacau em microdoses\./g, 'Consagração diária do cacau em microdoses (Opcional).');
content = content.replace(/Anotação matinal de sonhos e caderno da presença\./g, 'Anotação matinal de sonhos e caderno da Presença.');
content = content.replace(/Exercício de proteção da luz solar e dança livre\./g, 'Exercícios luz solar e dança livre.');

// Modulo 2
content = content.replace(/Resgate da Autonomia e Mapeamento dos Ciclos de Vida/g, 'Mapeamento dos Ciclos de Vida e História Familiar');
content = content.replace(/Resgate da Autonomia/g, 'Mapeamento dos Ciclos de Vida e História Familiar');
content = content.replace(/<li><i class="fas fa-check-circle"><\/i> "A alegria precede o sucesso" \(cultivo da energia realizadora\)\.<\/li>/g, '');
content = content.replace(/<li><i class="fas fa-dot-circle"><\/i> "A alegria precede o sucesso" \(cultivo da energia realizadora\)\.<\/li>/g, '');
content = content.replace(/Exercício diante do espelho: "Eu me vejo, eu sei do meu valor"\./g, 'Exercícios no espelho.');
content = content.replace(/Quebra de tabus: falar sobre dinheiro nas suas relações próximas\./g, 'Comunicações Financeiras.');

// Modulo 3
content = content.replace(/Crenças de herança, falências, dívidas e lealdades inconscientes\./g, 'Crenças limitantes, traumas financeiros, e lealdades invisíveis.');
content = content.replace(/Acolhimento do fluxo do pai e da mãe como raízes da abundância\./g, 'Relação Mãe, Pai e Cuidadores Primários.');
content = content.replace(/Prática de Grounding \(enraizamento corporal\)\./g, 'Práticas de Grounding.');
content = content.replace(/Mapeamento das profissões e crenças paternas e maternas\./g, 'Mapeamento: profissões e crenças.');

// Modulo 4
content = content.replace(/Alinhamento de Visão e Definição de Valores Inegociáveis/g, 'Alinhamento de Visão e Definição de Valores');
content = content.replace(/Definição profunda de Valores Inegociáveis\./g, 'Definição Valores.');
content = content.replace(/Metas de curto, médio e longo prazo conectadas à alma\./g, 'Metas de curto, médio e longo prazo conectadas à Presença.');
content = content.replace(/O poder do Mapa dos Sonhos e das Morning Money Pages\./g, 'Mapa dos Sonhos e Morning Money Pages.');
content = content.replace(/Escrever a Carta para o Dinheiro com nova consciência\./g, 'Escrita Carta.');
content = content.replace(/Criação do Mapa dos Sonhos visual no celular\./g, 'Criação do Mapa dos Sonhos.');
content = content.replace(/Execução do Diário da Gratidão e Atividade do Quadrado\./g, 'Diário da Gratidão.');

// Modulo 5
content = content.replace(/Sustentação do Estilo de Vida e Filtro de Estímulos Nutritivos/g, 'Sustentação do Estilo de Vida');
content = content.replace(/Construção de Hábitos Enriquecedores sem estresse\./g, 'Construção de Hábitos Enriquecedores.');
content = content.replace(/Ambiências nutritivas: filtrar estímulos e companhias\./g, 'Ambiências Nutridoras.');
content = content.replace(/Mentalidade da Prosperidade: aprender com o sucesso alheio\./g, 'Mentalidade da Prosperidade.');
content = content.replace(/Reorganização das prioridades da agenda semanal\./g, 'Reorganização da rotina.');
content = content.replace(/Limpeza ativa de contatos e grupos desgastantes\./g, 'Limpeza ativa de contatos e grupos digitais.');

// Modulo 6
content = content.replace(/Prática, Organização Real e Construção da Reserva da Paz/g, 'Organização e Construção da Reserva da Paz');
content = content.replace(/O Ciclo da Riqueza: Gerar, Gerir e Multiplicar\./g, 'Gerenciamento Financeiro.');
content = content.replace(/Métricas do Orçamento Essencial sem privação\./g, 'Orçamento Essencial.');
content = content.replace(/Estruturação da Reserva da Paz para sono tranquilo\./g, 'Estratégia para Reserva da Paz.');
content = content.replace(/Auditoria de gastos em aplicativos e assinaturas\./g, 'Categorias: receitas e despesas.');
content = content.replace(/Categorias exatas de gastos essenciais e livres\./g, 'Abertura de conta e organização Reserva da Paz.');
content = content.replace(/\n\s*<li><i class="fas fa-piggy-bank"><\/i> Abertura de conta e 1º aporte na Reserva da Paz\.<\/li>/g, '');
content = content.replace(/\n\s*<li><i class="fas fa-check"><\/i> Abertura de conta e 1º aporte na Reserva da Paz\.<\/li>/g, '');

// Modulo 7
content = content.replace(/Consolidação, Independência e Visão de Futuro/g, 'Consolidação e Visão de Futuro');
content = content.replace(/3 a 5 ações prioritárias de 0 a 30 dias\./g, 'Ações prioritárias.');
content = content.replace(/Limites saudáveis de ajuda financeira a familiares\./g, 'Relacionamentos e Limites.');
content = content.replace(/Plano de médio \(1 ano\) e longo prazo \(5 anos\)\./g, 'Plano de médio e longo prazo.');
content = content.replace(/Assinatura do seu Compromisso de Presença\./g, 'Compromisso de Presença.');
content = content.replace(/Celebração da autonomia e consolidação do novo estilo de vida\./g, 'Celebração e consolidação do novo estilo de vida.');

// End text
if (!content.includes('Um acompanhamento sob medida')) {
    const closing_html = `
    </div>
  </section>

  <!-- FECHAMENTO / ACOMPANHAMENTO -->
  <section class="section section-cream" style="padding-top: 0; padding-bottom: 60px;">
    <div class="container" style="text-align: center; max-width: 800px; margin: 0 auto;">
      <h3 style="color: var(--color-primary-brown); font-size: 1.5rem; line-height: 1.6; font-style: italic;">Um acompanhamento sob medida para quem decidiu viver com mais leveza e prosperidade e assumir de vez a sua cadeira de protagonista diante da Vida!</h3>
    </div>
  </section>
`;
    content = content.replace('    </div>\n  </section>\n\n  <!-- FORMATO DA MENTORIA -->', closing_html + '\n  <!-- FORMATO DA MENTORIA -->');
}

fs.writeFileSync('index.html', content, 'utf8');
console.log('Done!');
