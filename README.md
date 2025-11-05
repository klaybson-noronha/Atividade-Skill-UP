# 🚀 Atividade Skill UP - JavaScript TDD

Projeto de demonstração de competências em **JavaScript**, **TDD** e **Git Flow** desenvolvido para atividades empresariais.

## 📋 Sobre o Projeto

Este repositório contém implementações de:
- **Calculadora** com operações matemáticas básicas e avançadas
- **Validadores** de CPF e e-mail com regex
- **Testes unitários** usando Jest e metodologia TDD
- **Fluxo Git Flow** completo com branches organizadas

## 🛠️ Tecnologias Utilizadas

- **JavaScript ES6+**
- **Jest** para testes unitários
- **Node.js** como runtime
- **Git Flow** para versionamento
- **TDD** (Test-Driven Development)

## 📁 Estrutura do Projeto

```
Atividade-Skill-UP/
├── README.md                    # Documentação
├── package.json                 # Configurações do projeto
├── .gitignore                   # Arquivos ignorados pelo Git
└── atividades-js/               # Código fonte
    ├── calculadora.js           # Funções da calculadora
    ├── calculadora.test.js      # Testes da calculadora
    ├── validators.js            # Validadores (CPF e e-mail)
    └── validators.test.js       # Testes dos validadores
```

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone https://github.com/klaybson-noronha/Atividade-Skill-UP.git

# Entre no diretório
cd Atividade-Skill-UP

# Instale as dependências
npm install
```

### Executando os Testes
```bash
# Executar todos os testes
npm test

# Executar testes em modo watch
npm run test:watch

# Executar testes com cobertura
npm run test:coverage
```

## 🧮 Funcionalidades

### Calculadora
- ✅ **Soma** - Adiciona dois números
- ✅ **Subtração** - Subtrai dois números
- ✅ **Multiplicação** - Multiplica dois números
- ✅ **Divisão** - Divide dois números (com proteção contra divisão por zero)
- ✅ **Potenciação** - Calcula potência de um número
- ✅ **Raiz Quadrada** - Calcula raiz quadrada
- ✅ **Porcentagem** - Calcula porcentagem de um valor

### Validadores
- ✅ **CPF** - Validação completa com dígitos verificadores
- ✅ **E-mail** - Validação com regex robusta

### Características Técnicas
- ✅ **Funções Puras** - Sem efeitos colaterais
- ✅ **Validação de Tipos** - Verificação de argumentos
- ✅ **Tratamento de Erros** - Exceções específicas
- ✅ **Testes Abrangentes** - 39 testes cobrindo todos os cenários

## 🌿 Git Flow

O projeto demonstra um fluxo Git Flow completo:

```
master (produção)
├── develop (desenvolvimento)
    └── feature/primeiro-teste (funcionalidade)
```

### Branches
- **`master`** - Branch principal de produção
- **`develop`** - Branch de desenvolvimento
- **`feature/primeiro-teste`** - Branch de funcionalidade específica

## 🧪 Testes

O projeto possui **39 testes** organizados da seguinte forma:

### Calculadora (29 testes)
- Testes para cada operação matemática
- Validação de tipos e argumentos
- Cenários de erro e edge cases

### Validadores (16 testes)
- Validação de CPF com casos válidos e inválidos
- Validação de e-mail com diferentes formatos
- Testes de tipos e argumentos incorretos

## 📊 Cobertura de Testes

```bash
npm run test:coverage
```

Todos os arquivos principais possuem 100% de cobertura de código.

## 🎯 Objetivos Alcançados

- [x] Implementar calculadora com funções simples
- [x] Criar validadores de CPF e e-mail com regex
- [x] Escrever testes usando TDD com Jest
- [x] Aplicar boas práticas e refatoração
- [x] Versionar projeto no GitHub
- [x] Simular fluxo Git Flow completo
- [x] Resolver conflitos de merge
- [x] Adicionar .gitignore adequado

## 👨‍💻 Autor

**Klaybson Noronha**
- GitHub: [@klaybson-noronha](https://github.com/klaybson-noronha)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

⭐ **Desenvolvido com foco em qualidade, boas práticas e demonstração de competências técnicas!**