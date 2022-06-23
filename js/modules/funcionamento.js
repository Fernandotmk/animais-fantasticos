export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diaSemana = funcionamento.dataset.semana.split(',').map(Number); // split converte em array com a virgula como separador e o map converte o string em number
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);
  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();
  const semanaAberto = diaSemana.indexOf(diaAgora) !== -1;
  // pegou o array do dia Semana. [1, 2, 3, 4, 5] sendo segunda, terça até sexta , verificou o index(posição do dia agora), se o dia agora nao estiver dentro do Index, vai retornar -1, entao retornando false, dizendo que esta fechado

  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];
  // nesse caso pegou os dois itens do array de horario semana, o na primeira posição que é 8 e o segundo que é 18, entao se o horario agora estiver nesse intervalo estará como aberto

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }
}
/*
const agora = new Date();
const futuro = new Date('Dec 24 2022 23:59');

function converterEmDias(tempo) {
  return tempo / (24 * 60 * 60 * 1000) // 24hrs tem 60mim , cada min tem 60 segudos, cada segundo tem 1000 milesegundos
}

const diasAgora = converterEmDias(agora.getTime());
const diasFuturo = converterEmDias(futuro.getTime());

const faltam = Math.floor(diasAgora - diasFuturo);

console.log(faltam); */
