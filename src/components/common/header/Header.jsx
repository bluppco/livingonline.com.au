// IMPORTS FRAMER MOTION
import { motion, useScroll, useAnimation, useMotionValueEvent, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState, useEffect } from "react"

// IMPORT HEADER COLLECTION
import { getCollection } from "astro:content"

// IMPORTS COMPONENTS
import HeaderMobile from "./HeaderMobile"

// IMPORTS CONTENT
let header_data = await getCollection("header")
header_data = header_data.sort((a, b) => a.data.order - b.data.order)

const Header = ( props ) => {

    const { bg } = props

    const [ isScrolled, setIsScrolled ] = useState( false )

    useEffect(() => {

        const handleScroll = () => {

          setIsScrolled( window.scrollY > 20 )

        }

        window.addEventListener("scroll", handleScroll)

        return () => window.removeEventListener("scroll", handleScroll)

      }, [])

    const [ navigationDisplay, updateNavigationDisplay ] = useState( null )

    const { scrollY } = useScroll()
    const squareVariants = {

        display: { y: 0, transition: { duration: .2 } },
        hide: { y: "-100%", transition: { duration: .4 } },

    }
    const controls = useAnimation( scrollY )
    useMotionValueEvent(scrollY, "change", (latest) => {

        let isScrollingDown = scrollY.getPrevious() - latest < 0;
        if( isScrollingDown && latest > 0 ){

            controls.start("hide")

        } else {

            controls.start("display")

        }


    })
    return (
        <>
        <header className={` ${ bg ? "bg-gradient-to-b from-[#303236] to-[#130904]" : "" } ${ isScrolled ? "bg-gradient-to-b from-[#303236] to-[#130904]" : "bg-transparent" } hidden md:block md:fixed top-9 h-20 z-50 w-full`} id="header">
            <nav className="flex justify-between items-center h-full container max-w-8xl mx-auto">
                <a href="/">
                    <div className="w-full h-10">
                        <img
                            src="/logo/living-online.svg"
                            alt=""
                            className="w-full h-10 object-contain"
                        />
                    </div>
                </a>
                <ul className="flex gap-6 items-center">
                    {

                        header_data.map( ( value ) => {

                            return (
                                <li className="font-lato cursor-pointer text-white tracking-widest" key={ "navigation-" + value.slug } onMouseEnter={ () => updateNavigationDisplay( value.data.order ) }>
                                    <a href={ value.data.slug }>{ value.data.title }</a>
                                </li>
                            )

                        })

                    }
                </ul>
            </nav>
        </header>
        <HeaderMobile />
        </>
    )

}

export default Header
