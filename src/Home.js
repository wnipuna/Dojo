import { useState } from "react";

const Home = () => {
    const [name, setName] = useState('Nipuna');
    const [age, setAge] = useState(26);
    const clickHandle = (e) => {
        setName('Sachini');
        setAge(31);
    }

    return (<div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age} years old</p>
        <button onClick={clickHandle}>Click me</button>
    </div>);
}

export default Home;