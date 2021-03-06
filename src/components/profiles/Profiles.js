import React, {useEffect, useState} from 'react'
import "./Profiles.css"
import logo from "../../logo.svg"
import Loading from "../../components/loading/Loading"


function Profiles({user, setProfile, loading}) {
    const [photo, setPhoto] = useState(null)

   useEffect(() => {
       if(user.photoURL) {
        setPhoto(`images/users/${user.photoURL}.png`)
       } else {
           setPhoto(null)
       }
   }, [])
    return (
        <div className="profiles">
            <header className="profiles__header">
                <img src={logo} alt="Netflix" />
            </header>
            {loading? <Loading /> : 
            <div className="profiles__center">
                <div className="profiles__list">
                <h1>Who's watching?</h1>
                    <ul>
                        <li onClick={() => setProfile({displayName: user.displayName, photoURL: user.photoURL})}>
                            <div className="profiles__list--inner">
                                <div className="inner-img">
                                {!photo? <img src="images/users/1.png" alt="userphoto" /> :  <img src={photo} alt="userphoto" />}
                                </div>
                                <span>{user.displayName}</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>}
        </div>
    )
}

export default Profiles
