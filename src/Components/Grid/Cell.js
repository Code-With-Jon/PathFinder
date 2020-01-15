import React from 'react'
import styled from 'styled-components'


// function handleClick(e) {

// }





const Cell = (props) => {

    function handleClick() {
        props.handleActivateCell(props.row, props.col);
    }

    return (
        <div
            style={{
                flexGrow: 1,
                border: '1px solid hotpink',
                color: 'white',
                backgroundColor: props.activeCell ? 'white' : 'black',
            }}
            onClick={() => handleClick()}
        >

        </div>
        // <CellItem
        //     onClick={this.handleClick}

        // />
    )
}

export default Cell

const CellItem = styled.div`
border: '5px solid black';
color: 'white';
`
