export default class Funcionamento {
  constructor(funcionamento, activeClass) {
    this.funcionamento = document.querySelector(funcionamento);
    this.activeClass = activeClass;
  }

  dadosFuncionamento() {
    this.diaSemana = this.funcionamento.dataset.semana.split(',').map(Number); // split converte em array com a virgula como separador e o map converte o string em number
    this.horarioSemana = this.funcionamento.dataset.horario
      .split(',')
      .map(Number);
  }

  dadosAgora() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horarioAgora = this.dataAgora.getUTCHours() - 3;
  }

  estaAberto() {
    const semanaAberto = this.diaSemana.indexOf(this.diaAgora) !== -1;
    // pegou o array do dia Semana. [1, 2, 3, 4, 5] sendo segunda, terça até sexta , verificou o index(posição do dia agora), se o dia agora nao estiver dentro do Index, vai retornar -1, entao retornando false, dizendo que esta fechado

    const horarioAberto = this.horarioAgora >= this.horarioSemana[0] && this.horarioAgora < this.horarioSemana[1];
    // nesse caso pegou os dois itens do array de horario semana, o na primeira posição que é 8 e o segundo que é 18, entao se o horario agora estiver nesse intervalo estará como aberto
    return semanaAberto && horarioAberto;
  }

  ativaAberto() {
    if (this.estaAberto()) {
      this.funcionamento.classList.add(this.activeClass);
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosAgora();
      this.ativaAberto();
    }
    return this;
  }
}
