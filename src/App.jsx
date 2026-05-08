import { useState } from 'react'; // Importamos o useState para o contador funcionar
import './App.css';
import ItemCardapio from './ItemCardapio';

function App() {
  // Criamos o estado do contador começando em 0
  const [totalItens, setTotalItens] = useState(0);

  // Função que aumenta o contador em 1
  const adicionarAoPedido = () => {
    setTotalItens(totalItens + 1);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', color: '#333' }}>
      
      <h1 style={{ textAlign: 'center', color: '#ff4757', marginBottom: '5px' }}>
        🍔 Lanchonete React
      </h1>

      {/* Mostramos o total de itens no topo */}
      <h3 style={{ textAlign: 'center', backgroundColor: '#dfe4ea', padding: '10px', borderRadius: '5px' }}>
        Total de itens no pedido: {totalItens}
      </h3>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* Passamos a função 'adicionarAoPedido' para cada componente */}
        <ItemCardapio nome="X-Bacon Completo" preco={25.50} onAdicionar={adicionarAoPedido} />
        <ItemCardapio nome="Porção de Batata Frita" preco={15.00} onAdicionar={adicionarAoPedido} />
        <ItemCardapio nome="Refrigerante Lata" preco={6.00} onAdicionar={adicionarAoPedido} />
        <ItemCardapio nome="Cachorro Quente Duplo" preco={12.00} onAdicionar={adicionarAoPedido} />
        <ItemCardapio nome="Milkshake de Morango" preco={18.50} onAdicionar={adicionarAoPedido} />
      </ul>

    </div>
  );
}

export default App;