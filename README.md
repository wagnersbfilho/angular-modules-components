# Cases utilizando Modulos, Componentes e Diretivas

## Conceitos
#### LifeCycle
    - This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.
#### Ciclo de vida Angular
    - https://angular.io/guide/lifecycle-hooks

#### Diretivas
    - Diretiva são a maneira como o angular manipula e altera a DOM dinâmicamente
    - Diretivas de atributo
        - Alteram a aparência ou comportamento de um elemento, componente ou outra diretiva
        - NgClass - Adiciona ou remove conjunto de classes CSS
        - NgStyle - Adiciona ou remove um conjunto de estilos ao HTML
        - NgModel - Adiciona vinculação de dados bidirecional a um elemento de um formulário

    - Diretivas estruturais
        - Moldam ou remodelam a estrutura da DOM, adicionando ou removendo elementos na tela
        - NgIf - Condicional que verifica se modelo deve ser visualizado ou não
        - NgFor - repete um elemento para cada item em uma lista
        - NgSwitch - Utilizado para alternar entre comportamentos alternativos

#### Modulos
    - Agrupar componentes, diretivas, pipes, services

#### Comandos úteis
    - ng new "nome-projeto"
    - ng generate component "nome-componente" (ng g c)
    - ng g m "nome-modulo"
    - ng g c "nome-modulo/nome-component"
