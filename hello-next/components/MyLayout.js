import Header from "./Header";


const layourStyle = {
    margin: 20,
    padding: 20,
    border: "1px solid #DDD"
}

const Layout = (props) => (
    <div style={layourStyle}>
        <Header/>
        {props.children}
    </div>
)

export default Layout;