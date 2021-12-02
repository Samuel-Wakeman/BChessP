import React from 'react';

class Board extends React.component{
    constructor(){
        super();
        // initital board state
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
                html+='<div class=\"square\"></div>'
            }
        }

        return html
    }

}