import React from 'react'
const styles = {
    wrap: {
        width: '100%',
        height: '5em',
        background: 'red'
    }
}
class Header extends React.Component {
    render () {
        return (<div className="header" style={styles.wrap}>
                Header
                <div className="title">
                    title
                </div>
            </div>)
    }
}

export default Header