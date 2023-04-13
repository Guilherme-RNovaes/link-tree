import "./styles.css"

function RedesSociais() {

  const ListaRedes = [
    { id: 1, urlName: 'Github', url: 'https://github.com/Guilherme-RNovaes' },
    { id: 2, urlName: 'LinkedIn', url: 'https://www.linkedin.com/in/guilherme-r-novaes/' },
    { id: 3, urlName: 'Instagram', url: 'https://www.instagram.com/gr.novaes/' }
  ]

  const LinksRedes = ListaRedes.map((props) =>
    <div key={props.id} className='links-content'>
      <a href={props.url}>{props.urlName}</a>
    </div>
  )
  
  return (
    <>
    </>
  )
}

export default RedesSociais