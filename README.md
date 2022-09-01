# Documentação do Projeto Final - React Sports

## Idioma do codigo

- Inglês

## Linguagens utilizada

- JavaScript/TypeScript

## Biblioteca principal utilizada

- React.js

## Bibliotecas secundarias utilizadas

- axios
- styled-components
- axios
- styled-components
- adicionar todas que forem utilizadas
- react-toastify
- react-router-dom
- react-hook-form
- framer-motion
- react-icons
- react-typical

## Conventional Branchs/Commits

### Branchs

##### Master:

    Branch padrão do repositório, só aceitará pull request da branch
    Develop ou de uma branch hotFix

##### Develop:

    Branch de desenvolvimento, todas as branchs de feature serão criadas apartir desta.

##### Feature:

    Branch usada para desenvolver uma nova funcionalidade. Essa
    branch só existem enquanto a funcionalidade está sendo
    desenvolvida, mas será excluida quando o merge for realizado
    para branch develop

##### HotFix:

    Branch para correções emergenciais da branch Master caso esta já
    esteja em produção nesse caso a branch Develop também deve ser
    atualizada, ou para correções emergenciais da branch Develop
    antes que está seja mergeada com a Master

#### Modelo de Branch

    tipoDaBranch_nomeDafuncionalidade (escrito em ingles com camelCase)

### Commits

    Os arquivos deverão ser adicionados individualmente para serem
    commitados evitando o uso de git add .

##### feat:

     Commits, que adicionam um novo recurso

##### fix:

     Commits, que corrige um bug

##### refactor:

    Commits, que reescrevem/reestruturam seu código, porém
    não alteram nenhum comportamento

##### perf:

    são commits de refatoração especiais, que melhoram o desempenho

##### style:

    Commits, que não afetam o significado (espaço em branco,
    formatação, ponto e vírgula ausente etc.)

##### docs:

    Commits, que afetam apenas a documentação

##### build:

    Commits, que afetam componentes de compilação como ferramenta de
    compilação, pipeline ci, dependências, versão do projeto ...

##### chore:

    Commits, Utilizado na atualização para mudanças em
    ferramentas, configurações e bibliotecas.

Atualizações que não ocasionam alteração no código de produção.

## Modelo de Organização das Pastas

![alt Pastas](./Doc/img/pastas.png)

### src

    Contém todos as pastas criadas para o projeto

### src/Components

    Contém somente os componentes criados para o projeto com styled-components
      - Caso o componente tenha mais de um modelo, eles deveram
        ser dividos em subpastas. que partilham o mesmo style

### src/Contexts

    Contém todos os contextos da aplicação

### src/Pages

    Contém as paginas da aplicação

### src/Routes

    Contém as definições de rotas da aplicação

### src/Services

    Contém as configurações do axios para requisições da api

### src/Validators

    Contém as validações como yup,resolver, schema

### src/Style

    Contém o estilo global da aplicação
        - Variaveis
        - Fontes
        - Reset

### src/Images

    Contém imagens locais utilizadas no projeto

## Estilização do codigo

### Styled-Components

    - O styled (css) deve adotar o modelo de nome ComponentStyle
    (nome do componente html seguindo de Style em camelcase)

    - O styled-Component deve adotar o nome do elemento html com a
    primeira letra MAIUSCULA, Ex: Input, Button, Ul, Li.
    Caso o styled-Component seja mais complexo como o exemplo abaixo:

    _< li >_
    ..._< div >_
    ......_< h1 > Loren < / h1>_
    ......_< span > Ipsun </ span>_
    ..._</ div >_
    ..._< div >_
    ......_< img />_
    ..._</ div>_
    _< /li >_

    o modelo de nome deve segui o mesmo mas sendo a descrição da função do elemento ex:
    Card, DropMenu, Modal, HeaderModal, FormLogin, FormRegister

### Componentes

    Devem ser variaveis
    const Nome () =>{
        return
    }

### Funções

    Devem ser variaveis
    const Nome () =>{
        return
    }

### Formatação do codigo

    Espaços devem ser evitados pois deixam um codigo pequeno, extenso e cansativo de ler

    adotar aspas simples ( '' )

### Estrutura do html

    Uma <Div /> não é uma tag semantica, ela é apenas para estilização de algo em especifico,
    não devendo ser utilizada sem a devida necessidade
