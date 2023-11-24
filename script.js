import input from 'readline-sync';
import {salario_minimo, inflaçãoIPCA} from './dados.js'

// O objetivo da aplicação é listar o histórico do salário mínimo e da inflação (IPCA) entre os anos de 2010 e 2020. Além disso, o sistema deve ser capaz de calcular o crescimento percentual do salário mínimo ano a ano nesse período.

const escolhaUsuario = (escolha) => {

    console.log("Escolha uma das alternativas: \n");
    console.log("1 - Listar os salários minímos de 2010 á 2020 \n2 - Listar o índice IPCA de 2010 á 2020 \n3 - Comparação entre o percentual de aumento salarial e o IPCA")
    
    escolha = input.question("\nDigite o numero da sua escolha: ");

    console.log(escolha);
    if(escolha == 1){
        for(let indice of salario_minimo){
            console.log(indice);
        }
    } 
    else if(escolha == 2){
        for( let indice of inflaçãoIPCA){
            console.log(indice);
        }
    } 
    else{
        
    }
}

escolhaUsuario();



// console.log(opcao);

// switch(opcao){
//     case 1:
//         console.log("foiii");
//         break

//     case 2:
//         console.log("foiiii222");
//         break

//     case 3: 
//         console.log("foii33333");
// }