import Link from "next/link";
import Layout from "../components/MyLayout";


const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`} as={`/p/${props.title}`}  >
            <a>
                {props.title}
            </a>
        </Link>
    </li>
)

export default function Blog() {
    return (
        <Layout>
            <ul>
                <PostLink title="Hello Next1 Js"/>
                <PostLink title="Hello Next2 Js"/>
                <PostLink title="Hello Next3 Js"/>
            </ul>
        </Layout>
    )
}