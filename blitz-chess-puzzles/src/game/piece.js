
import React from 'react';

class piece extends React.component{
    constructor(props){
        super();
        this.props.loc=props.loc
        this.props.abbr=props.abbr
    }

    getloc(){
        return this.props.loc
    }


    getifp(){
        let abbr = this.props.abbr
        let ifp = '\"./images/'
        switch(abbr[0]){
            case 'W':
                ifp +='white'
                break;
            case 'B':
                ifp +='black' 
        }
        switch(abbr[1]){
            case 'P':
                ifp += ' pawn';
                break;
            case 'R':
                ifp += ' rook'
                break;
            case 'N':
                ifp += ' knight'
                break;
            case 'B':
                ifp += ' bishop'
                break;
            case 'K':
                ifp += ' king'
                break;
            case 'Q':
                ifp += ' queen'               
                break;
        }
        ifp += '.png\"'
        return ifp
    }

    render(){
        return (<div class="piece">
            <img src={this.getifp} alt = {this.props.abbr}/>
            </div>
        ); 
    }
}