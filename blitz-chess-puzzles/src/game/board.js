import React from 'react';

class Board extends React.component{
    constructor(){
        super();
        // create an empty 2d 8*8 array as the board
        this.state={ boardArray:
            [
            ['BR','BN','BB','BQ','BK','BB','BN','BR']
            ['BP','BP','BP','BP','BP','BP','BP','BP']    
            [''  ,''  ,''  ,''  ,''  ,''  ,''  ,''  ]
            [''  ,''  ,''  ,''  ,''  ,''  ,''  ,''  ]
            [''  ,''  ,''  ,''  ,''  ,''  ,''  ,''  ]
            [''  ,''  ,''  ,''  ,''  ,''  ,''  ,''  ]    
            ['WP','WP','WP','WP','WP','WP','WP','WP']
            ['WR','WN','WB','WQ','WK','WB','WN','WR']
            ]
        }

    }




    render(){
        let html='<div>'
        for(i=0;i<8;i++){
            for(j=0;j<8;j++)
            {
                html+='<div></div class=\'square\'>'
            }
        }

        return html
    }



}