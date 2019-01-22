import React from 'react'
import Icons from 'react-svg-use'


export default function Icon ({id, className=''}) {
    return <Icons id={id} width="1em" height="1em" className={`icon ${id} ${className}`} />
}
