// IMPORTS FRAMER MOTION
import { motion, useScroll, useAnimation, useMotionValueEvent, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

// IMPORT HEADER COLLECTION
import { getCollection } from "astro:content"

// IMPORTS COMPONENTS
import HeaderMobile from "./HeaderMobile"

// IMPORTS CONTENT
let header_data = await getCollection("header")
header_data = header_data.sort((a, b) => a.data.order - b.data.order)

const Header = ( props ) => {

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
        <header className="hidden md:block h-20" id="header">
            <motion.header className="w-full h-full px-8"
                variants={ squareVariants }
                initial="display"
                animate={ controls }
                onMouseLeave={ () => updateNavigationDisplay( null ) }
            >
                <nav className="flex justify-between items-center h-full">
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
                                    <li className="font-lato text-lg cursor-pointer text-white" key={ "navigation-" + value.slug } onMouseEnter={ () => updateNavigationDisplay( value.data.order ) }>
                                        <a href={ value.data.slug }>{ value.data.title }</a>
                                    </li>
                                )

                            })

                        }
                    </ul>
                </nav>
            </motion.header>
        </header>
        <HeaderMobile />
        </>
    )

}

export default Header
