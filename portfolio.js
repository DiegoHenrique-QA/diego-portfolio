export default function Portfolio() {
  return (
    React.createElement("main", {className: "main"},
      React.createElement("section", {className: "hero"},
        React.createElement("h1", null, "Diego Azevedo"),
        React.createElement("p", null, "Estagiário em QA | Pós-graduando em Engenharia e Qualidade de Software")
      ),
      React.createElement("section", {className: "card"},
        React.createElement("h2", null, "Sobre mim"),
        React.createElement("p", null, "Formado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Newton Paiva, atualmente curso pós-graduação em Engenharia e Qualidade de Software na PUC Minas...")
      ),
      React.createElement("section", {className: "card"},
        React.createElement("h2", null, "Habilidades"),
        React.createElement("ul", null,
          React.createElement("li", null, "Testes Funcionais"),
          React.createElement("li", null, "BDD (Behavior Driven Development)"),
          React.createElement("li", null, "Postman e testes de API"),
          React.createElement("li", null, "Criação de casos e evidências de teste"),
          React.createElement("li", null, "Scrum e metodologias ágeis")
        )
      ),
      React.createElement("section", {className: "card"},
        React.createElement("h2", null, "Formação Acadêmica"),
        React.createElement("ul", null,
          React.createElement("li", null, "PUC Minas – Pós-graduação em Engenharia e Qualidade de Software (2024 – atual)"),
          React.createElement("li", null, "Centro Universitário Newton Paiva – Tecnólogo em Análise e Desenvolvimento de Sistemas (2021 – 2023)")
        )
      ),
      React.createElement("section", {className: "card"},
        React.createElement("h2", null, "Projetos de QA"),
        React.createElement("ul", null,
          React.createElement("li", null, "API Testing com Postman - Criação de coleções de testes automatizados para APIs RESTful..."),
          React.createElement("li", null, "Cenários BDD com Gherkin - Desenvolvimento de testes utilizando a linguagem Gherkin..."),
          React.createElement("li", null, "Documentação de Evidências - Registro de testes manuais com captura de tela...")
        )
      ),
      React.createElement("section", {className: "card"},
        React.createElement("h2", null, "Contato"),
        React.createElement("p", null, "Email: seuemail@email.com"),
        React.createElement("p", null, "LinkedIn: /seulinkedin"),
        React.createElement("p", null, "GitHub: /seugithub")
      )
    )
  );
}
