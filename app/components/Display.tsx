import { title } from "process"

type Props = {
    params : {
        title: string,
        value: string,
    }
}

export default function Display({params}: {params: {title: string, value: string}}) {
  return (
    <li>
        <div className="diplay-div">
            <p className="display-title">{params.title}</p>
            <p className="display-value">{params.value}</p>
        </div>
    </li>
  )
}
