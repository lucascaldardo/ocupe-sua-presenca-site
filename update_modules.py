import re

def update_html():
    with open('index.html', 'r', encoding='utf-8') as f:
        content = f.read()

    # Modulo 1 Desktop
    content = content.replace('Chakras e Centros de Energia (Plexo Solar e fluxo vertical).', 'Chakras e Centros de Energia.')
    content = content.replace('Despertar da Presença Interna e Tempo de Qualidade.', 'Despertar da Presença Interna.')
    content = content.replace('Consagração diária do cacau em microdoses.', 'Consagração diária do cacau em microdoses (Opcional).')
    content = content.replace('Anotação matinal de sonhos e caderno da presença.', 'Anotação matinal de sonhos e caderno da Presença.')
    content = content.replace('Exercício de proteção da luz solar e dança livre.', 'Exercícios luz solar e dança livre.')
    
    # Modulo 2
    content = content.replace('Resgate da Autonomia e Mapeamento dos Ciclos de Vida', 'Mapeamento dos Ciclos de Vida e História Familiar')
    content = content.replace('Resgate da Autonomia', 'Mapeamento dos Ciclos de Vida e História Familiar')
    content = content.replace('<li><i class="fas fa-check-circle"></i> "A alegria precede o sucesso" (cultivo da energia realizadora).</li>', '')
    content = content.replace('<li><i class="fas fa-dot-circle"></i> "A alegria precede o sucesso" (cultivo da energia realizadora).</li>', '')
    content = content.replace('Exercício diante do espelho: "Eu me vejo, eu sei do meu valor".', 'Exercícios no espelho.')
    content = content.replace('Quebra de tabus: falar sobre dinheiro nas suas relações próximas.', 'Comunicações Financeiras.')

    # Modulo 3
    content = content.replace('Crenças de herança, falências, dívidas e lealdades inconscientes.', 'Crenças limitantes, traumas financeiros, e lealdades invisíveis.')
    content = content.replace('Acolhimento do fluxo do pai e da mãe como raízes da abundância.', 'Relação Mãe, Pai e Cuidadores Primários.')
    content = content.replace('Prática de Grounding (enraizamento corporal).', 'Práticas de Grounding.')
    content = content.replace('Mapeamento das profissões e crenças paternas e maternas.', 'Mapeamento: profissões e crenças.')
    
    # Modulo 4
    content = content.replace('Alinhamento de Visão e Definição de Valores Inegociáveis', 'Alinhamento de Visão e Definição de Valores')
    content = content.replace('Definição profunda de Valores Inegociáveis.', 'Definição Valores.')
    content = content.replace('Metas de curto, médio e longo prazo conectadas à alma.', 'Metas de curto, médio e longo prazo conectadas à Presença.')
    content = content.replace('O poder do Mapa dos Sonhos e das Morning Money Pages.', 'Mapa dos Sonhos e Morning Money Pages.')
    content = content.replace('Escrever a Carta para o Dinheiro com nova consciência.', 'Escrita Carta.')
    content = content.replace('Criação do Mapa dos Sonhos visual no celular.', 'Criação do Mapa dos Sonhos.')
    content = content.replace('Execução do Diário da Gratidão e Atividade do Quadrado.', 'Diário da Gratidão.')
    
    # Modulo 5
    content = content.replace('Sustentação do Estilo de Vida e Filtro de Estímulos Nutritivos', 'Sustentação do Estilo de Vida')
    content = content.replace('Construção de Hábitos Enriquecedores sem estresse.', 'Construção de Hábitos Enriquecedores.')
    content = content.replace('Ambiências nutritivas: filtrar estímulos e companhias.', 'Ambiências Nutridoras.')
    content = content.replace('Mentalidade da Prosperidade: aprender com o sucesso alheio.', 'Mentalidade da Prosperidade.')
    content = content.replace('Reorganização das prioridades da agenda semanal.', 'Reorganização da rotina.')
    content = content.replace('Limpeza ativa de contatos e grupos desgastantes.', 'Limpeza ativa de contatos e grupos digitais.')
    
    # Modulo 6
    content = content.replace('Prática, Organização Real e Construção da Reserva da Paz', 'Organização e Construção da Reserva da Paz')
    content = content.replace('O Ciclo da Riqueza: Gerar, Gerir e Multiplicar.', 'Gerenciamento Financeiro.')
    content = content.replace('Métricas do Orçamento Essencial sem privação.', 'Orçamento Essencial.')
    content = content.replace('Estruturação da Reserva da Paz para sono tranquilo.', 'Estratégia para Reserva da Paz.')
    content = content.replace('Auditoria de gastos em aplicativos e assinaturas.', 'Categorias: receitas e despesas.')
    content = content.replace('Categorias exatas de gastos essenciais e livres.', 'Abertura de conta e organização Reserva da Paz.')
    content = content.replace('<li><i class="fas fa-piggy-bank"></i> Abertura de conta e 1º aporte na Reserva da Paz.</li>', '')
    content = content.replace('<li><i class="fas fa-check"></i> Abertura de conta e 1º aporte na Reserva da Paz.</li>', '')
    
    # Modulo 7
    content = content.replace('Consolidação, Independência e Visão de Futuro', 'Consolidação e Visão de Futuro')
    content = content.replace('3 a 5 ações prioritárias de 0 a 30 dias.', 'Ações prioritárias.')
    content = content.replace('Limites saudáveis de ajuda financeira a familiares.', 'Relacionamentos e Limites.')
    content = content.replace('Plano de médio (1 ano) e longo prazo (5 anos).', 'Plano de médio e longo prazo.')
    content = content.replace('Assinatura do seu Compromisso de Presença.', 'Compromisso de Presença.')
    content = content.replace('Celebração da autonomia e consolidação do novo estilo de vida.', 'Celebração e consolidação do novo estilo de vida.')
    
    # End text
    if "Um acompanhamento sob medida para quem decidiu viver com mais leveza" not in content:
        closing_html = """
    </div>
  </section>

  <!-- FECHAMENTO / ACOMPANHAMENTO -->
  <section class="section section-cream" style="padding-top: 0;">
    <div class="container" style="text-align: center; max-width: 800px; margin: 0 auto;">
      <h3 style="color: var(--color-primary-brown); font-size: 1.5rem; line-height: 1.6;">Um acompanhamento sob medida para quem decidiu viver com mais leveza e prosperidade e assumir de vez a sua cadeira de protagonista diante da Vida!</h3>
    </div>
  </section>
"""
        content = content.replace('    </div>\n  </section>\n\n  <!-- FORMATO DA MENTORIA -->', closing_html + '\n  <!-- FORMATO DA MENTORIA -->')
        
    with open('index.html', 'w', encoding='utf-8') as f:
        f.write(content)

if __name__ == '__main__':
    update_html()
