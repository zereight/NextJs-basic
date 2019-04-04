import Link from "next/link";
import Layout from "../components/MyLayout";
import fetch from "isomorphic-unfetch";
import MyLayout from "../components/MyLayout";

const Index = (props) => (
    <MyLayout>
        <h1>Batman TV shows</h1>
        <ul>
            {props.shows.map( show=> (
                <li key={show.id}>
                    <Link href={`/post?id=${show.id}`} as={`/p/${show.id}`} >
                        <a> {show.name} </a>
                    </Link>
                </li>
            ) )}
        </ul>
    </MyLayout>
)

Index.getInitialProps = async () => {
    const res = await fetch(`https://api.tvmaze.com/search/shows?q=batman`)
    const data = await res.json()

    console.log(`Show data fetched, Count: ${data.length}`)

    return {
        shows: data.map(  entry => entry.show )
    }

}

export default Index;
