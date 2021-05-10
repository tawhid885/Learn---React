import React from 'react'

// class Person extends Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         console.log(this.props);
//         return (
//             <div>
//                 <h1>{this.props.name}</h1>
//                 <h1>{this.props.age}</h1>
//             </div>
            
//         );
//     }
// }

let Person=(props)=>{
    return (
        <div>
            <h4>{props.children}</h4>
            <h1>Name : {props.name}</h1>
            <h1>Age : {props.age}</h1>
        </div>
    )
}

export default Person;