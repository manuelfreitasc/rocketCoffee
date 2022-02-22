import './styles.css'

interface IData {
  title: string;
  code?: string;
}


function Banner({ title, code }: IData) {
  return (
    <div className="banner-conteiner">
      <h1>{title}</h1>
      <p className="great">{`< Great Code/ >`}</p>`
    </div>
  )
}
export { Banner }