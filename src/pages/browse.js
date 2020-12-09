import React, {useState, useContext, useEffect} from 'react'
import UseContent  from "../hooks/use-content"
import selectionFilter from "../utils/selection-map"
import Profiles from "../components/profiles/Profiles"
import { FirebaseContext } from "../context/firebase"

function Browse() {
    const { series } = UseContent("series");
    const { films } = UseContent("films");
    const [profile, setProfile] = useState({})
    const [loading, setLoading] = useState(true)
    const slides = selectionFilter({series, films})
    const { firebase } = useContext(FirebaseContext)
    const user = firebase.auth().currentUser || {}



    useEffect(() => {
    setTimeout(() => {
        setLoading(false)
    }, 500)
    }, [profile.displayName])
    
    return (
        profile.displayName? (
        <div>
            <Profiles user={user} setProfile={setProfile} loading={loading}/>
        </div>) : <div>hi</div>
    )
}

export default Browse
