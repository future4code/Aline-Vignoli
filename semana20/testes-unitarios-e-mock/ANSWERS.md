### Exercício 3
c) O que mudou da função `performAttack` chamando a `validateCharacter` diretamente para a função `performAttackDI` (com inversão de dependências) é que ela recebe a função `validateCharacter` como argumento, ao invéz de chamá-lo dentro do corpo da função.

### Exercício 4
a) Devemos criar um `mock` para testes da função `validateCharacter`, pois é ela que vamos precisar passar como argumento da função `performAttack`.