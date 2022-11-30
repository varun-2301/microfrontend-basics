import React,{useEffect, useRef} from 'react'
import { mount } from 'auth/AuthApp'
import { useHistory } from 'react-router-dom'

export default ({ onSignIn }) => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            initialPath : history.location.pathname,
            onNavigate: ({ pathname : nextPath }) => {
                const { pathname } = history.location

                if(pathname !== nextPath)
                    history.push(nextPath)
            },
            onSignIn
        })

        history.listen(onParentNavigate)
    }, [])
 
    return <div ref={ref} />
}