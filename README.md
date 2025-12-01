# dados-atletas




## 🥇 Análise de Desempenho do Atleta

Aplicação desenvolvida para receber e processar informações de um atleta, calcular parâmetros biométricos essenciais e exibir os resultados de forma organizada para o usuário.

-----

### 📝 Sobre o Projeto

O objetivo principal desta aplicação é modelar um atleta usando uma classe que encapsula seus dados fundamentais e permite o cálculo de métricas de desempenho.

A classe central do projeto é projetada para receber e gerenciar os seguintes atributos:

| Atributo | Descrição | Tipo |
| :--- | :--- | :--- |
| `nome` | Nome completo do atleta. | `String` |
| `idade` | Idade atual do atleta em anos. | `Integer` |
| `peso` | Peso corporal do atleta. | `Float` |
| `altura` | Altura do atleta. | `Float` |
| `notas` | Lista de pontuações, tempos ou notas de desempenho em provas. | `List/Array de Float` |

A partir desses dados, a aplicação calcula parâmetros como o Índice de Massa Corporal (IMC) e a média de desempenho (`notas`), exibindo-os de maneira clara.

-----

### ✨ Funcionalidades Principais

  * **Modelagem de Atleta:** Utilização de uma classe com atributos definidos (`nome`, `idade`, `peso`, `altura`, `notas`).
  * **Cálculo de IMC:** Determinação do Índice de Massa Corporal usando a fórmula $Peso / Altura^2$.
  * **Média de Desempenho:** Cálculo da média das `notas` registradas para avaliar a consistência do atleta.
  * **Exibição de Perfil:** Apresentação formatada de todos os atributos e dos parâmetros calculados.


