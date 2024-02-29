// IMPORTS COMPONENTS
import ListItem from "@/atoms/header/mobile/list-item/index.jsx"

// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index.jsx"
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS FRAMER MOTION
import { motion, AnimatePresence } from "framer-motion"

// IMPORTS REACT
import { useState } from "react"

const HeaderMobile = ( props ) => {

    const { ENVIRONMENT } = props

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className={` ${ ENVIRONMENT === "staging" ? "mt-16" : "" } md:hidden px-4 py-2 w-full bg-gradient-to-b from-[#303236] to-[#130904]`}>
            <div className="flex justify-between items-center z-20">
                <Link href="/" aria_label="livingonline mobile header logo">
                    <div className="w-52 aspect-[4/1]">
                        <PictureInternalContain
                            alternative_text="livingonline mobile header logo"
                            source="/logo/living-online.svg"
                        />
                    </div>
                </Link>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <div className="w-4 aspect-square">
                            <PictureInternalContain
                                alternative_text="close icon"
                                source="/icons/close.svg"
                            />
                        </div>

                    }
                    {

                        !isOpen &&
                        <div className="w-6 aspect-square">
                            <PictureInternalContain
                                alternative_text="menu icon"
                                source="/icons/menu.svg"
                            />
                        </div>
                    }
                </div>
            </div>
            <AnimatePresence initial={ false }>
                {

                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate={ isOpen ? "open" : "collapsed" }
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, display: "block" },
                            collapsed: { opacity: 0, display: "none" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow !h-[calc(100vh-6rem)] !p-0"
                    >
                        <div className={`flex flex-col gap-1 items-center justify-center h-full relative ${ isOpen ? "z-50" : "hidden"}`}>
                            <ul className="flex flex-col justify-center items-center gap-8">
                                <ListItem href="/" aria_label="Explore Home">Home</ListItem>
                                <ListItem href="/digital-marketing-agency" aria_label="Explore Digital Marketing">Digital Marketing</ListItem>
                                <ListItem href="/digital-marketing-agency/digital-marketing-awards" aria_label="Explore Awards">Awards</ListItem>
                                <ListItem href="/case-studies" aria_label="Explore Our Work">Our Work</ListItem>
                                <ListItem href="/digital-marketing-agency/digital-marketing-blog" aria_label="Explore Insights">Insights</ListItem>
                                <ListItem href="/about" aria_label="Explore About">About</ListItem>
                                <ListItem href="/contact-us" aria_label="Explore Contact">Contact</ListItem>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
