import React from 'react'
// import styled from 'styled-components'
import Cell from './Cell'


const nonStateRows = []
export default class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCell: null
        }
    }


    async componentDidMount() {
        await this.displayRows()
    }

    handleClick(x, y) {
        this.setState({})
    }

    displayRows() {
        let nonStateRows = []
        for (let i = 0; i < this.props.rowLength; i++) {
            nonStateRows.push(<Cell
                style={{}}
                row={this.props.row}
                col={i}
                activeCell={this.props.activeCells[this.props.row][this.props.col]}
                handleActivateCell={this.props.handleActivateCell}
            />)
            // nonStateRows.push(i)
        }
        return nonStateRows
    }

    render() {
        return (
            <div style={{
                width: '70vw',
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                justifyContent: 'center',
                flexGrow: 1,
                backgroundColor: 'white'
            }}>
                {this.displayRows()}

            </div>
        )
    }
}
// const Container = styled.div`
// display: flex;
// width: '100px';
// height: '100px'
// `