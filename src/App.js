import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    // Variable Declear 
    // let name = "Md. Rased Molla"
    // let work = "Service Man"


    // Style Declear 
    // let style = {
    //     color: "black",
    // }


    // Array Declear
    const personName =["Rased", "Rahul", "Robin", "Rahat"];
    // const productValue = [
    //     {name: "Car", price: "$999.99"},
    //     {name: "Motorbike", price: "$599.99"},
    //     {name: "Cycle", price: "$199.99"} 
    // ];
    const friends =["Rased", "Rakib"]
    return ( 
        <div className = "App" >
        <header className = "App-header">
        <img src = { logo }
        className = "App-logo"
        alt = "logo"/>
        <p>Edit <code> src / App.js </code> and save to reload. </p>

        <Users></Users>
        {/* <Counter></Counter> */}

        {/* Map Filter Objecting */}
        <ul>
            {/* {
                friends.map(friends => <li>{friends}</li>)
            } */}
            {
                personName.map(personName => <li>{personName}</li>)
            }
            {/* {
                productValue.map(productValue => <li>{productValue.name}</li>)
            }
            {
                productValue.map(productValue => <li>{productValue.price}</li>) */}
            {/* } */}
            {/* call from array object Normal Way */}
            {/* <li>{personName[0]}</li>
            <li>{personName[1]}</li>
            <li>{personName[2]}</li>
            <li>{personName[3]}</li> */}
        </ul>

        {/* Declear Component Function Here  */}
        {/* <Component></Component>
        <Component></Component>
        <a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer">Learn React </a>
        <h1 style = {style}>React Also Run HTML Like Math : {(2+5)*45+55}</h1> */}


        {/* Ontime Style Applie  */}
        {/* <h2 style = {{color: "red",}}>I Am Also Run Variable: {name + ", " + work}</h2>
        <p>This is simple text.</p> */}


        {/* Live way to write component value */}
        {/* <Dynamic name = {personName[0]} age = "24"></Dynamic> */}


        {/* Props Way to Write Function in React */}
        {/* <Namhin name = "Rahul" age = "12"></Namhin> */}


        {/* Object React function */}
        {/* <ProductAdobe name = {ProductValue[0].name} price = {ProductValue[0].price}></ProductAdobe>
        <ProductAdobe name = {ProductValue[1].name} price = {ProductValue[1].price}></ProductAdobe>
        <ProductAdobe name = {ProductValue[2].name} price = {ProductValue[2].price}></ProductAdobe> */}


        {/* Object Dynamic Way To Function  */}
        {/* <ProductAdobe products = {ProductValue[0]}></ProductAdobe>
        <ProductAdobe products = {ProductValue[1]}></ProductAdobe>
        <ProductAdobe products = {ProductValue[2]}></ProductAdobe> */}


        {/* Object Destructuring Way to Write Function */}
        {/* <ProductAdobe products = {productValue[0]}></ProductAdobe>
        <ProductAdobe products = {productValue[1]}></ProductAdobe>
        <ProductAdobe products = {productValue[2]}></ProductAdobe> */}
        </header > 
        </div>
    );
}


function Users() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => setUser(data));
    }, [])
    return(
        <div>
            <h3>Dynamic User: {user.length} </h3>
            <ul>
                {
                    user.map(users => <li>{users.name}</li>)
                }
            </ul>
            <ul>
                {
                    user.map(users => <li>{users.email}</li>)
                }
            </ul>
        </div>
    )
}

// function Counter() {
//     const [count, setCount] = useState(0);
//     // const hendleIncrease = () => setCount(count + 1);//Low Level Shortcut Way To Write Array Function
//     // {
//         // Noraml way to Write
//         // const newCount = count + 1;
//         // setCount(newCount);

//         // Shortcut Way To Write
//         // setCount(count + 1);
//     // }
//     return(
//         <div>
//             <h1>Count:{count} </h1>
//             {/* Normal Way To Write */}
//             {/* <button onClick = {hendleIncrease}>Increase</button> */}

//             {/* Shortcut Way To Write */}
//             <button onMouseMove = {() => setCount(count + 1)}>Increase</button>
//             <button onClick = {() => setCount(count - 1)}>Decrease</button>
//         </div>
//     )
// }
// function Name(props) {
//     const styleFrineds = {
//         border: "2px solid red"
//     }
//     const {name} = props.friends;
//     return(
//         <div style = {styleFrineds}>
//             <h2>Name: {name}</h2>
//             <h5>Age: {age2}</h5>
//             <button>Buy</button>
//         </div>
//     )
// }

// Create Adobe Products Buy Menu 
// function ProductAdobe(props) {
//     const styleProduct = {
//         border: "1px solid gray",
//         borderRadius: "6px",
//         height: "250px",
//         width: "300px",
//         margin: "15px",
//         float: "left",
//         color: "black",
//         backgroundColor: "lightgray"
//     }
//     // Object Destructuring
//     const {name, price} = props.products;

//     return(
//         <div style = {styleProduct}>
//             <h2>Name: {name} </h2>
//             <h5>Price: {price} </h5>
//             <button>Buy Now</button>
//         </div>
//     )
// }


// // Create a component in function
// function Component (){
//     return (
//         <div style= {{border:"2px solid blue", padding: "5px 15px", margin: "10px 0"}}>
//             <h2>This a Component in Function whis is create by React.</h2>
//             <h4>This Is Just Fun Data.</h4>
//         </div>
//     );
// }


// // Dynamic Way to Function in React
// function Dynamic (component) {
//     let style3 = {
//         border: "2px solid red",
//         padding: "0 20px",
//         margin: "10px"
//     }
//     return(
//         <div style = {style3} >
//             <h1>Dynamic Name : {component.name} </h1>
//             <h1>Dynamic Age : {component.age} </h1>
//         </div>
//     );
// }


// // Normal way to write Props Function in React
// function Namhin (props) {
//     let style4 = {
//         border: "2px solid red",
//         padding: "0 20px",
//         margin: "10px"
//     }
//     return(
//         <div style = {style4} >
//             <h1>Dynamic Name : {props.name} </h1>
//             <h1>Dynamic Age : {props.age} </h1>
//         </div>
//     );
// }




export default App;