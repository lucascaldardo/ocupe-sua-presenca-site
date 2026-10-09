const fs = require('fs');

let content = fs.readFileSync('index.html', 'utf8');

// 1. Imersão Presencial description
content = content.replace(
  /O encontro de alma, presença e toque humano\. Um dia inteiro de desconexão da rotina, meditações ativas, consagração do cacau e vivências sistêmicas&nbsp;presenciais\./g,
  'O encontro com Presença e olhar profundo. Um dia inteiro de conexão na natureza, meditações ativas, consagração com Cacau e vivências sistêmicas financeiras.'
);

// 2. Cities
content = content.replace(/Botucatu \(BTU\)/g, 'Botucatu - SP');
content = content.replace(/Ribeirão Preto \(RP\)/g, 'Ribeirão Preto - SP');

// 3. FAQ answer
content = content.replace(
  /Após a conclusão das 7 semanas de encontros regulares, você terá mais duas sessões completas aos 30 e aos 90 dias após o encerramento, para checagem dos resultados práticos e consolidação da nova postura no mundo\./g,
  'Após a conclusão das 7 semanas de encontros regulares, você terá mais duas sessões completas aos 30 e aos 90 dias após o encerramento, para checagem dos resultados práticos e consolidação da nova postura diante da Vida.'
);

fs.writeFileSync('index.html', content, 'utf8');
console.log('Done!');
