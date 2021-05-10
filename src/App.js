import React ,{Component} from 'react'
import './App.css';
import Person from './components/person'
import Book from './components/Book'

// function App() {
//     return ( 
//         <div className = "App" >
//             <h1>this is first page</h1>
//             <Person/>
//         </div>
//         // React.createElement('div',{ className: "App"},React.createElement('h1',null,'Hello world!'),<Person />)
//     )
// }

class App extends Component{
    state ={
        books:[
            {bookName:"The da vinci code",writer:"Dan Brown"},
            {bookName:"The Alchemist",writer:"Paulo coelho"},
            {bookName:"Science venture",writer:"Nayem Hossen Faruk"},
            {bookName:"Quantam macanichs",writer:"Jafor Iqbal"},
        ],
    };

    BookChangeState=(newBook)=>{
        this.setState({
            books:[
                {bookName:newBook,writer:"Dan Brown"},
                {bookName:"The Alchemist",writer:"Paulo coelho"},
                {bookName:"Science venture",writer:"Nayem Hossen Faruk"},
                {bookName:"classical physics",writer:"Jafor Iqbal"},
            ]
        })
    }

    changeWithInput=(event)=>{
        this.setState({
            books:[
                {bookName:event.target.value,writer:"Dan Brown"},
                {bookName:"The Alchemist",writer:"Paulo coelho"},
                {bookName:"Science venture",writer:"Nayem Hossen Faruk"},
                {bookName:"classical physics",writer:"Jafor Iqbal"},
            ]
        })
    }
    // constructor(){
    //     super();
    //     this.state ={};
    // }
    render(){
        const style ={
            border:"1px solid red",
            borderRadius:"5px",
            backgroundColor:"black",
            color:"white",
        }
        // let obj = new Component();
        // console.log(obj)
        return (
            <div className="App">
                <h1 style={style}>Book List!</h1>
                <button onClick={()=>this.BookChangeState("My favourite book is in button")}>Change Button</button>
                {/* <input onChange={this.changeWithInput}></input> */}
                <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer}/>
                <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer}/>
                <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer}/>
                <Book bookName={this.state.books[3].bookName} writer={this.state.books[3].writer} change={this.BookChangeState.bind(this,'My favourite book')} inputName={this.changeWithInput}/>
            </div>
        )
    }
}

// function Person(){
//     return (
//         <div>
//             <h1>I am person component!</h1>
//         </div>
//     )
//     // return React.createElement('div',null,React.createElement('h1',null,"This is person component!"))
// }



export default App;