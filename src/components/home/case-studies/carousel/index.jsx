// IMPORTS ATOMS
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS REACT
import { useState } from "react"

const CaseStudyCarousel = ( props ) => {

    const {

        CDN,
        data,
        PROJECT

    } = props

    const [ startIndex, setStartIndex ] = useState(0)

    const nextSlide = () => {
        setStartIndex( ( prevIndex ) => ( prevIndex + 1 ) % data.length )
    }

    const prevSlide = () => {
        setStartIndex( ( prevIndex) => ( prevIndex - 1 + data.length ) % data.length )
    }

    const goToSlide = ( index ) => {
        setStartIndex( index )
    }

    return (
        <section className="w-full h-full relative">
            <div className="h-full flex items-center absolute top-0 -left-2 md:-left-16 z-10" onClick={ prevSlide }>
                <div className="w-8 aspect-square cursor-pointer">
                    <PictureInternalContain
                        alternative_text="left icon"
                        source="/icons/left.svg"
                    />
                </div>
            </div>
            <div className="gap-8 transition-all duration-500 hidden md:flex">
                {

                    [ 0, 1 ].map( ( value ) => {

                    const index = ( startIndex + value ) % data.length

                        return (
                            <div key={ index } className="relative w-full h-[350px] flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url(${ CDN + PROJECT + "/" + data[ index ].cover + "?quality=80" + "&width=800" })` }}>
                                <div className="space-y-4 px-6">
                                    <p className="md:text-lg text-white font-lato capitalize font-bold text-center relative z-10">{ data[ index ].company_name }</p>
                                    <p className="text-xl md:text-3xl text-white font-lato capitalize font-bold text-center relative z-10">{ data[ index ].title }</p>
                                </div>
                                <div className="bg-red-700/80 h-full w-full absolute top-0 left-0 opacity-90" style={{ backgroundColor: data[ index ].color_code }} />
                            </div>
                        )
                    })

                }
            </div>
            <div className="flex gap-8 transition-all duration-500 px-10 md:hidden">
                {

                    [ 0 ].map( ( value ) => {

                    const index = ( startIndex + value ) % data.length

                        return (
                            <div key={ index } className="relative w-full h-[350px] flex flex-col items-center justify-center bg-cover" style={{ backgroundImage: `url(${ CDN + PROJECT + "/" + data[ index ].cover + "?quality=80" + "&width=800" })` }}>
                                <div className="space-y-4 px-6">
                                    <p className="md:text-lg text-white font-lato capitalize font-bold text-center relative z-10">{ data[ index ].company_name }</p>
                                    <p className="text-xl md:text-3xl text-white font-lato capitalize font-bold text-center relative z-10">{ data[ index ].title }</p>
                                </div>
                                <div className="bg-red-700/80 h-full w-full absolute top-0 left-0 opacity-90" style={{ backgroundColor: data[ index ].color_code }} />
                            </div>
                        )
                    })

                }
            </div>
            <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2">
               {

                    data.map( ( value, index ) => {

                        return(
                            <button
                                key={ index }
                                onClick={() => goToSlide( index )}
                                className={`rounded-full bg-transparent border border-white ${ index === startIndex ? "bg-white size-[18px]" : "size-4" }`}
                            />
                        )

                    })

               }
            </div>
            <div className="h-full flex items-center absolute top-0 -right-2 md:-right-16 z-10" onClick={ nextSlide }>
                <div className="w-8 aspect-square cursor-pointer">
                    <PictureInternalContain
                        alternative_text="right icon"
                        source="/icons/right.svg"
                    />
                </div>
            </div>
        </section>
    )
}

export default CaseStudyCarousel
