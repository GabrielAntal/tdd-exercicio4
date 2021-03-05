

class Gerador{


   

    montarPropostas(cliente){
        if(cliente.salario<=0.00 || cliente.idade<18 || cliente.idade>70 || cliente.valorDoEmprestimo<100.00 || cliente.valorDoEmprestimo>100000.00){
              throw 'Emprestimo Negado'
        }
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