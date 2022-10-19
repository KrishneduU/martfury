import { React, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import FontAwesome from 'react-fontawesome';
import Assessment from '@mui/icons-material/Assessment';
import Favorite from '@mui/icons-material/Favorite';
import LocalMall from '@mui/icons-material/LocalMall';
import PersonOutline from '@mui/icons-material/PersonOutline';
import "../assets/dropdown.css";


const Header = () => {
    const [selectedCity1, setSelectedCity1] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];
    const [value1, setValue1] = useState('');
    const onCityChange = (e) => {
        setSelectedCity1(e.value);
    }
    return (
        <div class='topbar'>
            <h1 style={{ paddingTop: "15px", paddingLeft: "30px" }}>mart<span style={{ color: "white" }}>fury</span></h1>
            <div class="drpdwn" style={{ marginTop: "-57px", paddingLeft: "500px" }}>
                <Dropdown value={selectedCity1} options={cities} onChange={onCityChange} optionLabel="name" placeholder="All" />
                <span><InputText class="inputcls" value={value1} onChange={(e) => setValue1(e.target.value)} /></span>
                <span><Button label="Search" aria-label="Submit" /></span>

                
                     
                            <Assessment />
                            <span className="topIconBadge">2</span>
                       
                       
                            <Favorite />
                            <span className="topIconBadge">2</span>
                       
                        
                            <LocalMall />
                            <span className="topIconBadge">2</span>
                       
                            <PersonOutline />
                            <span className="topIconBadge">2</span>
            </div>
        </div>
               
        
    );
};



export default Header;