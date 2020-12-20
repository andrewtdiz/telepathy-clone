import React from 'react'
import logo from './images/logo.svg'
import NavbarButton from './components/NavbarButton'

export default function Navbar(props:any) {

    return (
        <div className={"h-28 fixed z-50 top-0 left-0 w-full shadow-sm flex justify-center transition-all duration-200 ease-in-out " + (props.showNav ? " " : "-mt-28")} style={{ background: "#ff3d25" }}>
            <div className="flex px-12 w-full justify-between text-white items-center">
                <h1 className="text-2xl">Andrew DiZenzo</h1>
                <div className="flex items-center">
                    <NavbarButton label="Work" />
                    <NavbarButton label="Services" />
                    <NavbarButton label="About" />
                    <NavbarButton label="Resume" />
                </div>
            </div>
        </div>
    )
}
