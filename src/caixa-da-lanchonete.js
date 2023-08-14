class CaixaDaLanchonete {
    constructor() {
        this.cardapio = {
            cafe: { descricao: 'Café', valor: 3.00 },
            chantily: { descricao: 'Chantily (extra do Café)', valor: 1.50 },
            suco: { descricao: 'Suco Natural', valor: 6.20 },
            sanduiche: { descricao: 'Sanduíche', valor: 6.50 },
            queijo: { descricao: 'Queijo (extra do Sanduíche)', valor: 2.00 },
            salgado: { descricao: 'Salgado', valor: 7.25 },
            combo1: { descricao: '1 Suco e 1 Sanduíche', valor: 9.50 },
            combo2: { descricao: '1 Café e 1 Sanduíche', valor: 7.50 }
        };
    }

    calcularValorDaCompra(formaDePagamento, itens) {
        const formasDePagamentoValidas = ['dinheiro', 'debito', 'credito'];
    
        if (!formasDePagamentoValidas.includes(formaDePagamento)) {
          return "Forma de pagamento inválida!";
        }
    
        let total = 0;
    
        for (const itemInfo of itens) {
          const [codigo, quantidade] = itemInfo.split(',');
    
          if (!this.cardapio[codigo]) {
            return "Item inválido!";
          }
    
          if (quantidade <= 0) {
            return "Quantidade inválida!";
          }
    
          total += this.cardapio[codigo].valor * quantidade;
        }
    
        if (total === 0) {
          return "Não há itens no carrinho de compra!";
        }
    
        if (formaDePagamento === 'dinheiro') {
          total *= 0.95; // 5% de desconto
        } else if (formaDePagamento === 'credito') {
          total *= 1.03; // 3% de acréscimo
        }
    
        return `R$ ${total.toFixed(2).replace('.', ',')}`;
      }
    }

export { CaixaDaLanchonete };
