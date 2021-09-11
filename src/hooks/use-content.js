import { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../context/firebase'

export default function useContent(target) {
    const [content, setContent] = useState([])
    const { firebase } = useContext(FirebaseContext)
    
    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map(contentObj => ({
                    ...contentObj.data(),
                    docId: contentObj.id
                }))
                
                setContent(allContent)
            })
            .catch(error => console.log(error.message))
    }, [])
    
    return { [target]: content }
}

// we used the firestore inside the firebase and then we get that collection
// instead of just returning all of them, we need the docId (which is react specific)
// we need the Id to allow us to use it as a key on each item.