import input from 'readline-sync';
import {salario_minimo, inflaçãoIPCA} from './dados.js';

// O objetivo da aplicação é listar o histórico do salário mínimo e da inflação (IPCA) entre os anos de 2010 e 2020. Além disso, o sistema deve ser capaz de calcular o crescimento percentual do salário mínimo ano a ano nesse período.

const escolhaUsuario = (escolha) => {

    console.log("Escolha uma das alternativas: \n");
    console.log("1 - Listar os salários minímos de 2010 á 2020 \n2 - Listar o índice IPCA de 2010 á 2020 \n3 - Comparação entre o percentual de aumento salarial e o IPCA")
    
    escolha = Number(input.question("\nDigite o numero da sua escolha: "));

    if(escolha == 1){
        for(let indice of salario_minimo){

            let ano = indice.Ano;
            let salario = indice.Salario_minimo;

            let formatandoAno = ano.toFixed(0).split("..............");
            let formatandoSalario = salario.toFixed(2).split("..............");

            console.log(`\nAno: ${formatandoAno}\nSalário mínimo: R$ ${formatandoSalario} \n`);
        }
    } 
    else if(escolha == 2){
        for( let indice of inflaçãoIPCA){
            
            let ano = indice.Ano;
            let inflacao = indice.inflacao_IPCA;

            console.log(`\nAno: ${ano}\nInflacao IPCA: ${inflacao} \n`);
        }
    } 
    else {
        console.log("testando")
    }
}

escolhaUsuario();
