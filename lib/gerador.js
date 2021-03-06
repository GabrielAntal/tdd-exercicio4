var validate = require("validate.js");

class Gerador{

    validador(cliente){
        var constraint ={
            nome: {
                presence: true
            },
            salario:{
                numericality: {
                    greaterThan: 0
                    
                }
            },
            valorDoEmprestimo:{
                numericality: {
                greaterThanOrEqualTo:100.00,
                lessThanOrEqualTo: 100000.00
                }
            },
            idade:{
                numericality: {
                greaterThanOrEqualTo:18,
                lessThanOrEqualTo: 70
                }
            }
        }
       if( validate(cliente, constraint)){
            throw 'Emprestimo Negado'
       }
    }
   

    montarPropostas(cliente){
        
        this.validador(cliente);

        if(cliente.salario<=1000){
            return [this.gerarProposta(2,2,cliente.valorDoEmprestimo),
                this.gerarProposta(3,2,cliente.valorDoEmprestimo)
               ];
        }
        else if(cliente.salario>=1000 && cliente.salario<=5000){
            return [this.gerarProposta(2,1.3,cliente.valorDoEmprestimo),
                this.gerarProposta(4,1.5,cliente.valorDoEmprestimo),
                this.gerarProposta(10,1.5,cliente.valorDoEmprestimo)
               ];
        }else if(cliente.salario>5000){
           return [this.gerarProposta(2,1.1,cliente.valorDoEmprestimo),
            this.gerarProposta(4,1.3,cliente.valorDoEmprestimo),
            this.gerarProposta(10,1.3,cliente.valorDoEmprestimo),
            this.gerarProposta(20,1.4,cliente.valorDoEmprestimo)
           ];
        }   
    }

    gerarProposta(pParcelas, fator, valorDoEmprestimo){
        return {
            parcelas: pParcelas,
            total: fator * valorDoEmprestimo,
            valorDaParcela: fator * valorDoEmprestimo / pParcelas
        }
    }

}

module.exports = Gerador;