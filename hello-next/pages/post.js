
import {withRouter} from "next/router"; //url인자전달 감지

const Post = (props) => {
    

    //console.log(props)
    console.log(props)
    return (
        <div>
             <h1>{props.router.query.title}</h1>
        </div>
    )
    

}

export default withRouter(Post) 