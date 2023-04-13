import "./styles.css"

function RedesSociais() {

  const ListaRedes = [
    { id: 1, urlName: 'Github', url: 'https://github.com/Guilherme-RNovaes' },
    { id: 2, urlName: 'LinkedIn', url: 'https://www.linkedin.com/in/guilherme-r-novaes/' },
    { id: 3, urlName: 'Instagram', url: 'https://www.instagram.com/gr.novaes/' },
    { id: 4, urlName: 'Portifólio', url: 'https://guilherme-novaes-portifolio.vercel.app/'}
  ]

  const LinksRedes = ListaRedes.map((props) =>
    <div key={props.id} className='links-content'>
      <a href={props.url}>{props.urlName}</a>
    </div>
  )
  
  return (
    <>
      {LinksRedes}
    </>
  )
}

export default RedesSociais