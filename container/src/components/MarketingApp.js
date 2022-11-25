import React,{useEffect, useRef} from 'react'
import { mount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'

export default () => {
    const ref = useRef(null)
    const history = useHistory()

    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname : nextPath }) => {
                console.log('Navigation noticed in Marketing')
                const { pathname } = history.location

                if(pathname !== nextPath)
                    history.push(nextPath)
            }
        })

        history.listen(onParentNavigate)
    }, [])
 
    return <div ref={ref} />
}