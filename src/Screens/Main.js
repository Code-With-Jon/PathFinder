import React from 'react'
import Grid from '../Components/Grid/Grid'
import NavBar from '../Components/Nav/NavBar'

const ROW_LENGTH = 20;
const COLUMN_LENGTH = 30;

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // grid: this.createGrid(ROW_LENGTH, COLUMN_LENGTH)
            grid: this.createGrid(),
            activeCells: new Array(30).fill(new Array(30).fill(false))
        }
    }


    handleActivateCell = (row, col) => {
        this.setState((prevState) => {
            let tempArr = [...prevState.activeCells]
            tempArr[row][col] = !tempArr[row][col];
            return ({ activeCells: tempArr })
        })
    }

    createGrid() {
        let grid = []
        for (let row = 0; row < ROW_LENGTH; row++) {
            grid.push([])
            for (let column = 0; column < COLUMN_LENGTH; column++) {

                grid[row].push({
                    x: row,
                    y: column
                })
            }
        }
        console.log(grid)
        return grid
    }

    render() {
        console.log('grid', this.state.grid)
        return (
            <div>
                <NavBar />
                <div style={{
                    height: '80vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexWrap: 'nowrap',
                    paddingTop: '65px'
                }}>
                    {this.state.grid.map((cell, idx) => {
                        return <Grid
                            key={idx}
                            cell={cell}
                            rowLength={ROW_LENGTH}
                            columnLength={COLUMN_LENGTH}
                            row={idx}
                            activeCells={this.state.activeCells}
                            handleActivateCell={this.handleActivateCell}
                        ></Grid>
                    })}
                </div>
            </div>
        )
    }
}