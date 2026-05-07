import './App.css';
// 1. Importamos o componente do arquivo separado
import ItemCardapio from './ItemCardapio';

function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', color: '#333' }}>
      
      <h1 style={{ textAlign: 'center', borderBottom: '2px solid #ff4757', paddingBottom: '10px' }}>
        🍔 Lanchonete React
      </h1>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {/* 2. Usamos o componente 5 vezes, passando os dados via props */}
        <ItemCardapio nome="X-Bacon Completo" preco={25.50} />
        <ItemCardapio nome="Porção de Batata Frita" preco={15.00} />
        <ItemCardapio nome="Refrigerante Lata" preco={6.00} />
        <ItemCardapio nome="Cachorro Quente Duplo" preco={12.00} />
        <ItemCardapio nome="Milkshake de Morango" preco={18.50} />
      </ul>

    </div>
  );
}

export default App;