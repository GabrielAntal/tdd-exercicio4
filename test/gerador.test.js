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
        const g = new Gerador();
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
});