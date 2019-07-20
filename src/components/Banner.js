import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <div className="banner">
            <h1>
                {title}
                <div>

                </div>
                <p>{subtitle}</p>
                {children}
            </h1>
        </div>
    )
}
