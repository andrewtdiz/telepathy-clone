import React from 'react'

export default function NavbarButton(props:any) {
    const [hovering, setHovering] = React.useState(false)

    return (
        <div className="relative mr-16">
            <button onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)}>{props.label}</button>
            <div className={"absolute left-0 bg-white transition-all duration-200 ease-in-out "} style={{height: hovering ?'1px' : '0px', width: hovering?'100%' : '0px', opacity: hovering?'100%':'0%'}}>

            </div>
        </div>
    )
}
