# :construction: Projeto Trybe and Dragons :construction:
Este projeto é uma aplicação TypeScript que parece ser um jogo de batalha entre personagens e monstros, utilizando uma arquitetura orientada a objetos. Aqui está uma visão geral do projeto:

1. **Arquétipos (Archetypes)**:
   - Implementa diferentes classes de arquétipos, como Mage, Necromancer, Ranger e Warrior, cada uma representando um tipo diferente de personagem no jogo.
   - Cada arquétipo possui características únicas, como tipo de energia (mana ou stamina).

2. **Batalhas (Battle)**:
   - Define classes abstratas e concretas para representar batalhas entre personagens (PVP) e entre personagens e monstros (PVE).
   - Fornece métodos para realizar as batalhas e determinar o vencedor com base nos pontos de vida dos lutadores.

3. **Personagens (Character)**:
   - Implementa a classe `Character` que representa os personagens jogáveis no jogo.
   - Cada personagem é definido por uma raça e um arquétipo, e possui atributos como pontos de vida, força, defesa e destreza.
   - Os personagens podem receber dano, atacar outros lutadores e evoluir de nível.

4. **Monstros (Monster)**:
   - Define classes para representar monstros que os jogadores podem enfrentar nas batalhas.
   - Os monstros possuem pontos de vida e força, e podem atacar os personagens.

5. **Raças (Races)**:
   - Implementa diferentes classes de raças, como Elf, Dwarf, Halfling e Orc, cada uma com atributos únicos.
   - As raças determinam os pontos de vida máximos dos personagens e podem influenciar outros atributos.

6. **Utilitários (Utils)**:
   - Fornece uma função para gerar números aleatórios, que é utilizada para atribuir valores de atributos aos personagens.

7. **Outros arquivos**:
   - Existem outros arquivos, como `Energy.ts`, `Fighter.ts`, `SimpleFighter.ts`, que definem interfaces e tipos usados em várias partes do projeto.

8. **Arquivo de entrada (index.ts)**:
   - Cria instâncias de personagens e monstros, e realiza batalhas PVP e PVE para testar o funcionamento do jogo.

Em resumo, este projeto representa um jogo de batalha com uma variedade de personagens, arquétipos, raças e monstros, onde os jogadores podem participar de batalhas contra o ambiente ou entre si.