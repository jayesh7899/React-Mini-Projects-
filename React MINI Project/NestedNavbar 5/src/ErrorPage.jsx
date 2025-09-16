import { Link} from 'react-router'

export default function ErrorPage(){

    return <div style={{textAlign:'center'}}>

        <h1>Page Not Found </h1>

        <h2>404 Error</h2>

        <div>
            <Link to="/">Go to Home Page</Link>

        </div>
        <img style={{width:'60%'}}  src="https://tse3.mm.bing.net/th/id/OIP.0PLHVHrBYDro1PwvLbYRxQHaHa?pid=Api&P=0&h=180" alt="" />
        </div>
}