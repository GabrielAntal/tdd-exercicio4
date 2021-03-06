const Gerador = require('../lib/gerador')
const g = new Gerador();
describe('Gerador',()=>{
    test('teste faixa ate 1000',()=>{
      
        const cliente = {
            nome: 'Chuck Norris',
            salario:'500.00',
            valorDoEmprestimo:'1000.00',
            idade:30
        }
       const props = g.montarPropostas(cliente);
       expect(props.length).toBe(2);
       expect(props[0].parcelas).toBe(2);
       expect(props[0].total).toBeCloseTo(2000.00);
       expect(props[0].valorDaParcela).toBeCloseTo(1000.00);

       expect(props.length).toBe(2);
       expect(props[1].parcelas).toBe(3);
       expect(props[1].total).toBeCloseTo(2000.00);
       expect(props[1].valorDaParcela).toBeCloseTo(666.67);
    });

    test('teste faixa de 1000 ate 5000',()=>{
        
        const cliente = {
            nome: 'Jim Carrey',
            salario:'2500.00',
            valorDoEmprestimo:'1000.00',
            idade:50
        }
       const props = g.montarPropostas(cliente);
       expect(props.length).toBe(3);
       expect(props[0].parcelas).toBe(2);
       expect(props[0].total).toBeCloseTo(1300.00);
       expect(props[0].valorDaParcela).toBeCloseTo(650.00);

       
       expect(props[1].parcelas).toBe(4);
       expect(props[1].total).toBeCloseTo(1500.00);
       expect(props[1].valorDaParcela).toBeCloseTo(375.00);

       expect(props[2].parcelas).toBe(10);
       expect(props[2].total).toBeCloseTo(1500.00);
       expect(props[2].valorDaParcela).toBeCloseTo(150.00);
    });

    test('teste faixa maior que 5000',()=>{
       
        const cliente = {
            nome: 'Guy-Manuel de Homem-Christo ',
            salario:'7500.00',
            valorDoEmprestimo:'3000.00',
            idade:40
        }
       const props = g.montarPropostas(cliente);
       expect(props.length).toBe(4);
       expect(props[0].parcelas).toBe(2);
       expect(props[0].total).toBeCloseTo(3300.00);
       expect(props[0].valorDaParcela).toBeCloseTo(1650.00);

       
       expect(props[1].parcelas).toBe(4);
       expect(props[1].total).toBeCloseTo(3900.00);
       expect(props[1].valorDaParcela).toBeCloseTo(975.00);

       expect(props[2].parcelas).toBe(10);
       expect(props[2].total).toBeCloseTo(3900.00);
       expect(props[2].valorDaParcela).toBeCloseTo(390.00);

       expect(props[3].parcelas).toBe(20);
       expect(props[3].total).toBeCloseTo(4200.00);
       expect(props[3].valorDaParcela).toBeCloseTo(210.00);
    });


    test('teste com salario zero', ()=>{
        const cliente = {
            nome: 'João Grilo',
            salario:'0.00',
            valorDoEmprestimo:'100.00',
            idade:21
        }

        expect(()=>{
            const props = g.montarPropostas(cliente);
        }).toThrow("Emprestimo Negado")

    })

    test('teste com valor do emprestimo fora dos limites', ()=>{
        const cliente = {
            nome: 'John Travolta',
            salario:'7000.00',
            valorDoEmprestimo:'1000000.00',
            idade:54
        }


       

        expect(()=>{
            const props = g.montarPropostas(cliente);
        }).toThrow("Emprestimo Negado")

    })

    test('teste com idade nao permitida', ()=>{
        const cliente = {
            nome: 'Peter Parker',
            salario:'900.00',
            valorDoEmprestimo:'1500.00',
            idade:16
        } 
        expect(()=>{
            const props = g.montarPropostas(cliente);
        }).toThrow("Emprestimo Negado")
    })   

       

});