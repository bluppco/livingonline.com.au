import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const ReadMore = ( props ) => {

    const { expand, updateExpand, value, index } = props
    const isOpen = index === expand

    return (
        <div className="py-4 border-y-[0.5px] border-y-zinc-300 z-30">
            <AnimatePresence initial={false}>
                {
                    isOpen &&
                    <motion.div
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { opacity: 1, height: "auto" },
                            collapsed: { opacity: 0, height: 0 }
                        }}
                        transition={{ duration: 0.3 }}
                    >
                        <section className="whitespace-pre-wrap pt-6">{ value.details }</section>
                    </motion.div>
                }
            </AnimatePresence>
        </div>
    )

}
const Data = ( props ) => {

    const { data } = props

    const [ expand, updateExpand ] = useState( 0 )
    return (
        <section>
            {

                data.map( ( value, index ) => {

                    return (
                        <Accordion expand={ expand } updateExpand={ updateExpand } value={ value } index={ index } key={ "readmore" + index }/>
                    )

                })

            }
        </section>
    )

}

export default ReadMore
