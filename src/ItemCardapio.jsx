// Este é o nosso componente "pequeno" e reutilizável
function ItemCardapio({ nome, preco }) {
  return (
    <li 
      style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        padding: '15px 0',
        borderBottom: '1px dashed #ccc'
      }}
    >
      <span style={{ fontWeight: 'bold' }}>{nome}</span>
      <span style={{ color: '#2ed573', fontWeight: 'bold' }}>
        {/* Formatando o preço recebido via props */}
        R$ {preco.toFixed(2).replace('.', ',')}
      </span>
    </li>
  );
}

export default ItemCardapio;