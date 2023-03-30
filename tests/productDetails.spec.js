const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails('alcool', 'máscara')).toEqual([{"details": {"productId": "alcool123"}, "name": "alcool"}, {"details": {"productId": "máscara123"}, "name": "máscara"}]);
  });
  it('Verifica se a função `produtcDetails` é uma função', () => {
    expect(typeof (productDetails)).toBe('function');
  });
  it('Verifica se o retorno da função `productDetails` é um array', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual(expect.arrayContaining([]));
  });
  it('Verifica se a função `productDetails` retorna um array com dois itens dentro', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual(expect.arrayContaining([{"details": {"productId": "Alcool gel123"}, "name": "Alcool gel"}, {"details": {"productId": "Máscara123"}, "name": "Máscara"}]));
  });
  it('Verifica se o array retornado pela função `productDetails` são objetos', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')).toBe('object');
  });
  it('Verifica se na função `productDetails` quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0]).not.toEqual(productDetails('Alcool gel', 'Máscara')[1]);
  });
  it('Verifica se os dois productIds da função `produtcDetails` terminam com 123', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId.endsWith('123')).toBe(true)
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId.endsWith('123')).toBe(true)
  })
});
