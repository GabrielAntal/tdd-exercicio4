
class Gerador{
    montarPropostas(cliente){

        if(cliente.salario<=1000){
            return [this.gerarProposta(2,2,cliente.valorDoEmprestimo),
                this.gerarProposta(3,2,cliente.valorDoEmprestimo)
               ];
        }
        return [this.gerarProposta(2,1.3,cliente.valorDoEmprestimo),
            this.gerarProposta(4,1.5,cliente.valorDoEmprestimo),
            this.gerarProposta(10,1.5,cliente.valorDoEmprestimo)
           ];
        
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