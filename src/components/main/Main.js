import React, {useState, useContext, useEffect} from 'react'
import "./Main.css"
import logo from "../../logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import CloseIcon from '@material-ui/icons/Close';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import { Link } from "react-router-dom"
import { FirebaseContext } from '../../context/firebase';
import Slides from "../slides/Slides"
import Footer from "../footer/Footer"

function Main({user, films, series, slides}) {
    const arrow = <FontAwesomeIcon icon={faSortDown} />
    const [isUserFocusing, setIsUserFocusing] = useState(false);
    const [searchValue, setSearchValue] = useState("");
    const [category, setCategory] = useState("films");
    const [muted, setMuted] = useState(true)
    const { firebase } = useContext(FirebaseContext);
    const [slideRows, setSlideRows] = useState([])

  
    useEffect(() => {
        setSlideRows(slides[category])
        console.log(slideRows)
    }, [slides, category])

    return (
        <div className="main" >
             <header className="main__header">
                <div className="main__header--left">
                    <img src={logo} alt="" />
                    <ul>
                        <Link className={category === "films" ? "active" : ""} onClick={() => setCategory("films")}>Movies</Link>
                        <Link className={category === "series" ? "active" : ""} active={category === "series" ? true : false} onClick={() => setCategory("series")}>TV Shows</Link>
                    </ul>
                </div>
                <div className="main__header--right">
                    
                 
                    {!isUserFocusing? <button className={isUserFocusing? "button-op" : null} onClick={() => setIsUserFocusing(true)}>
                    
                    <img className="main__header--search" src="images/icons/search.png"></img>
                    </button> : null}
                
                        <div className={isUserFocusing? "search__input input_open" : "search__input"}>
                            <img className="main__header--search" src="images/icons/search.png"></img>
                            <input 
                            
                                className={isUserFocusing? "input-inner-open input-inner" : "input-inner"} 
                                type="text" 
                                placeholder="Titles, people, genres"
                                value={searchValue}
                                onChange={(e) => setSearchValue(e.target.value)}/>
                                {searchValue === ""? null: <CloseIcon onClick={() => setSearchValue("")} className="clear__search"/>}
                                
                        </div>
                        
                    <div className="main__header--profile">
                    <img src={`images/users/${user.photoURL}.png`}></img>
                        <span>{arrow}</span>
                        <div className="user__dropdown">
                    <div className="user__dropdown--arrow">{arrow}</div>
                    <div className="header__profile--content">
                            <div className="profile__content--user">
                                <img src={`images/users/${user.photoURL}.png`}></img>
                                <span>{user.displayName}</span>
                            </div>
                            <hr />
                            <div className="profile__content--list">
                                <ul>
                                    <li>Account</li>
                                    <li>Help Center</li>
                                    <li onClick={() => firebase.auth().signOut()}>Sign Out of Netflix</li>
                                </ul>
                            </div>
                     </div>
                </div>
                    </div>
                    
                </div>
               
                
             </header>
             <main onClick={() => setIsUserFocusing(false)}>
                 <div className="main__video">
                    <video
                    autoPlay={true} 
                    loop
                    muted={muted}
                    style={{position: "relative", width: "100%"}}>
                        <source src="videos/JOKER.mp4" type="video/mp4" />
                    </video>
                    <div className="header__movie--info">
                        <img src="images/joker.png"></img>
                        <p>Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham
                        City.</p>
                        <button>
                            <div className="play-arrow">{arrow}</div>
                            <span>Play</span>
                        </button>
                        
                    </div>
                    <div className="header__movie--mute">
                            {muted? <VolumeOffIcon fontSize="small" onClick={() => setMuted(false)}/> : <VolumeUpIcon fontSize="small" onClick={() => setMuted(true)}/>}
                        </div>
                    </div>
                     <section className="slides__container">
                        <Slides slideRows={slideRows} category={category}/>
                    </section> 

                    
                    
             </main>
             <footer>
                 <Footer style={{ backgroundColor: '#141414' }}/>
             </footer>
        </div>
    )
}

export default Main
