# Desaparecidos - Ninguém Está Sozinho!

Projeto realizado em Janeiro de 2024 para uma entrevista de trabalho.

## Requisitos

**Objetivo**: Criar um aplicativo Angular que exibe uma lista de pessoas desaparecidas usando a API fornecida. A Polícia Judiciária Civil de Mato Grosso oferece acesso ao cidadão uma API de pessoas desaparecidas. Para este teste você deverá implementar uma aplicação que possibilita consultar dados dessas pessoas desaparecidas bem como enviar eventuais informações sobre elas

**Requisitos**:

1. Configurar um novo projeto Angular usando o Angular CLI.
1. Usar a API fornecida (https://abitus-api.pjc.mt.gov.br/v1/pessoas/aberto/filtro?faixaIdadeFinal=0&faixaIdadeInicial=0&nome=&porPagina=12&sexo=&status=DESAPARECIDO&pagina=0) para buscar os dados das pessoas desaparecidas.
1. Exibir os dados da API em uma lista na página. Cada item da lista deve conter pelo menos as seguintes informações: nome, idade, sexo e uma foto, se disponível.
1. Implementar uma seção de pesquisa que permite ao usuário filtrar a lista de pessoas desaparecidas por nome, idade e sexo.
1. Paginar os resultados para exibir 12 pessoas por página.
1. Ao clicar em um item da lista, o usuário deve ser redirecionado para uma página de detalhes que exibe informações detalhadas da pessoa desaparecida. API:(https://abitus-api.pjc.mt.gov.br/v1/pessoas/${idPessoa})
1. Possibilitar o compartilhamento dessa informação com mídias sociais como Facebook, Instagram, Whatsapp e outras que julgar oportuno.

**Critérios de Avaliação**:
- Funcionalidade geral do aplicativo.
- Consumo correto da API.
- Exibição correta dos dados na lista.
- Funcionalidade de pesquisa.
- Paginação dos resultados.
- Interface de usuário limpa e responsiva.
- Roteamento para a página de detalhes.
- Organização do código, boas práticas de desenvolvimento Angular.

## Quick Start

Para executar o projeto, basta seguir estes passos:

```bash
npm install
ng serve --open
```

## Demo

Se você deseja ver o demo do projeto, basta clicar no aqui: [DEMO](https://desaparecidos-a1398.web.app)

## License

[MIT](LICENSE)
