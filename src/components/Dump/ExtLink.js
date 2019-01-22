import React from 'react'

import { toAbsURL } from '../../helpers'


// Ссылка на внешний ресурс
export default function ExtLink ({href, children, ...props}) {
    return (
        <a href={toAbsURL(href)} target="_blank" rel="nofollow noopener noreferrer" {...props}>
            {children || href}
        </a>
    )
}
