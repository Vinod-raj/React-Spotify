import React from 'react'
import SidebarOption from '../SidebarOption/SidebarOption'
import './Sidebar.css'
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useDataLayerValue } from '../../Context/DataLayer';

function Sidebar() {
    const [{playlists}, dispatch] = useDataLayerValue();
    console.log('inside side bar', playlists.items);
    return (
        <div className='sidebar'>
            <img 
            className="sidebar__logo"
            src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
            alt="" />
            <SidebarOption title='Home' Icon={HomeIcon}/>
            <SidebarOption title='Library' Icon={SearchIcon}/>
            <SidebarOption title='Your Library' Icon={LibraryMusicIcon}/>

            <br/>
            <strong className='sidebar__title'>PLAYLISTS</strong>
            <hr />

            {
                playlists?.items?.map( (playlist) =>(
                    <SidebarOption key={playlist.name} title={playlist.name} />
                ))
            }
        </div>
    )
}

export default Sidebar
