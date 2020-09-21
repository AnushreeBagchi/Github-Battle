import React from "react";
import { battle } from '../utils/app';

 export default class results extends React.Component{
     componentDidMount(){
         const {playerOne, playerTwo} = this.props;
         battle([playerOne, playerTwo])
         .then((players)=> {
             console.log("data", players)
         })
     }
    render(){
        return (
            <div>Results
                <pre>{JSON.stringify(this.props, null, 2)}</pre>
            </div>
        )
    }
}


