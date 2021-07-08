const Home = () => {

    const clickHandle = (e) => {
        console.log('clicked', e);
    }

    const clickMeAgain = (name, e) => {
        console.log('name ' + name, e);
    }

    return (<div className="home">
        <h2>Homepage</h2>
        <button onClick={clickHandle}>Click me</button>
        <button onClick={(e) => clickMeAgain('nipuna', e)}>Click me again</button>
    </div>);
}

export default Home;