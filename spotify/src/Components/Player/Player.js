import React from 'react'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import '../Player/Player.css'
import Sidebar from '../Sidebar/Sidebar'

function Player({ spotify }) {
    return (
        <div className='player'>
            <div className='player__body'>
                <Sidebar />
                <Body spotify={spotify}/>
                {/* sidebar */}
                {/* body */}
            </div>
            <Footer />
                {/* footer */}
        </div>
    )
}

export default Player
