import './styles.css'

interface IData {
  title: string;
  code: string;
}


function Banner({ title, code }: IData) {
  return (
    <div className="container">
      <h1>{title}</h1>
      <code>
        {code}
      </code>
    </div>
  )
}
export { Banner }