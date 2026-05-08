// Recebemos a função 'onAdicionar' via props
function ItemCardapio({ nome, preco, onAdicionar }) {
  return (
    <li 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', // Mudamos para coluna para o botão ficar embaixo ou alinhado
        padding: '15px 0',
        borderBottom: '1px dashed #ccc'
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <span style={{ fontWeight: 'bold' }}>{nome}</span>
        <span style={{ color: '#2ed573', fontWeight: 'bold' }}>
          R$ {preco.toFixed(2).replace('.', ',')}
        </span>
      </div>

      {/* Botão que chama a função de adicionar quando clicado */}
      <button 
        onClick={onAdicionar}
        style={{
          marginTop: '10px',
          backgroundColor: '#ff4757',
          color: 'white',
          border: 'none',
          padding: '8px',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Adicionar ao pedido
      </button>
    </li>
  );
}

export default ItemCardapio;