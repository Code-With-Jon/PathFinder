import React from 'react'
import Select from 'react-select'


const options = [
    { value: 'bfs', label: 'BFS' },
    { value: 'a-star', label: 'A Star' },
    { value: 'dijkstra', label: 'Dijkstra' }
]


export default class NavBar extends React.Component {
    state = {
        selectedOption: null
    }

    updateSelection = (val) => {
        this.setState({ selectedOption: val })
    }



    render() {
        const { selectedOption } = this.state
        return (
            <>
                <div style={{ display: 'flex', flexDirection: 'column', width: '50%', height: '20%', position: 'absolute', left: 0, top: 0 }}>
                    <ul style={{ width: '100%', listStyleType: 'none', display: 'flex', flexDirection: 'column' }}>
                        <li>Home</li>
                        <Select
                            value={selectedOption}
                            options={options}
                            onChange={this.updateSelection}
                            style={{ width: '100%', color: 'black' }}
                            placeholder={'Select A Path Finding Algo'}
                            theme={theme => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: 'hotpink',
                                    primary: 'black',
                                    neutral0: 'black',
                                    neutral80: 'hotpink'
                                },
                            })}
                        />

                    </ul>

                </div >
                <div style={{ paddingLeft: '20%', paddingTop: '5%' }}>
                    <button style={{ padding: '10px', backgroundColor: 'black', color: 'hotpink' }} >Run Search Algo</button>
                </div>
            </>
        )
    }
}