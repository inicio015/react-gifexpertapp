export const GifItem = ({title, url,id}) => {
  return (
    <div className="card-style col-3">
        <img src={url} alt={ title } />
        <p>{ title }</p>
        
    </div>
  )
}
