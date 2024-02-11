import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

// IMPORTS COMPONENTS
import HeaderMobileItem from "./HeaderMobileItem"

const HeaderMobile = ( props ) => {

    const { env } = props

    const [ isOpen, updateOpen ] = useState( false )

    return (
        <header className={` ${ env === "staging" ? "mt-16" : "" } md:hidden px-4 py-4 w-full bg-gradient-to-b from-[#303236] to-[#130904]`}>
            <div className="flex justify-between items-center z-20">
                <a href="/">
                    <div className="w-52 aspect-[4/1]">
                        <img
                            src="/logo/living-online.svg"
                            alt=""
                            className="w-52 aspect-[4/1]"
                        />
                    </div>
                </a>
                <div onClick={ () => updateOpen( !isOpen ) }>
                    {

                        isOpen &&
                        <img
                            src="/icons/close.svg"
                            className="w-4 aspect-square"
                        />

                    }
                    {

                        !isOpen &&
                        <img
                            src="/icons/menu.svg"
                            className="w-6 aspect-square"
                        />

                    }
                </div>
            </div>
            <AnimatePresence initial={false}>
                {

                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate={ isOpen ? "open" : "collapsed" }
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "100vh" },
                            collapsed: { opacity: 0, height: "0px" }
                        }}
                        transition={{ duration: 0.3 }}
                        className="grow"
                    >
                        <div className={`flex flex-col gap-1 items-center justify-center h-full relative ${ isOpen ? "z-50" : "hidden"}`}>
                            <ul className="flex flex-col justify-center items-center gap-8">
                                <HeaderMobileItem href="/">Home</HeaderMobileItem>
                                <HeaderMobileItem href="/digital-marketing-agency">Digital Marketing</HeaderMobileItem>
                                <HeaderMobileItem href="//digital-marketing-agency/digital-marketing-awards">Awards</HeaderMobileItem>
                                <HeaderMobileItem href="/case-studies">Our Work</HeaderMobileItem>
                                <HeaderMobileItem href="/digital-marketing-agency/digital-marketing-blog">Insights</HeaderMobileItem>
                                <HeaderMobileItem href="/about">About</HeaderMobileItem>
                                <HeaderMobileItem href="/contact-us">Contact</HeaderMobileItem>
                            </ul>
                        </div>
                    </motion.div>

                }
            </AnimatePresence>
        </header>
    )

}

export default HeaderMobile
