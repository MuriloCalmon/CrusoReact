import './style.css';
import {useParams, useSearchParams, Outlet} from 'react-router-dom'

export const Posts = () => {
    const params = useParams()
    const [qs] = useSearchParams()
    return (
        <div>
            <h1>
                Posts {`params: ${params.id}`} {`QS: ${qs}`}
            </h1>
            <Outlet />
        </div>
    )
}