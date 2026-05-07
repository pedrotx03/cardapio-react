import './App.css'; // Podemos manter o CSS padrão importado

function App() {
  // Criamos uma lista com os 5 itens do cardápio e seus preços
  const cardapio = [
    { id: 1, nome: 'X-Bacon Completo', preco: 25.50 },
    { id: 2, nome: 'Porção de Batata Frita', preco: 15.00 },
    { id: 3, nome: 'Refrigerante Lata', preco: 6.00 },
    { id: 4, nome: 'Cachorro Quente Duplo', preco: 12.00 },
    { id: 5, nome: 'Milkshake de Morango', preco: 18.50 }
  ];

  return (
    <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', color: '#333' }}>
      
      <h1 style={{ textAlign: 'center', borderBottom: '2px solid #ff4757', paddingBottom: '10px' }}>
        🍔 Lanchonete React
      </h1>
      
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        
        {/* O .map() percorre nossa lista e cria um <li> para cada item */}
        {cardapio.map((item) => (
          <li 
            key={item.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              padding: '15px 0',
              borderBottom: '1px dashed #ccc'
            }}
          >
            <span style={{ fontWeight: 'bold' }}>{item.nome}</span>
            <span style={{ color: '#2ed573', fontWeight: 'bold' }}>
              {/* O toFixed(2) garante que o preço tenha duas casas decimais */}
              R$ {item.preco.toFixed(2).replace('.', ',')}
            </span>
          </li>
        ))}

      </ul>

    </div>
  );
}

export default App;