function NaviName(props) {
    return <li><a href="#">{props.navi}</a></li>;
};

function MainNavi() {
    const list = [
        {name: "Live Shopping"},
        {name: "My Page"},
        {name: "Login"}
    ];

    return (
        <>
            <ul>
                {list.map((search) => <NaviName navi={search.name}/>)}
            </ul>
        </>
    )
};


export default MainNavi;