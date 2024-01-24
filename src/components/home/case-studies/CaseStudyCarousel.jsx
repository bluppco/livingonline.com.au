// IMPORTS REACT RESPONSIVE CAROUSEL
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"

// IMPORTS CONSTANTS
import { CDN_LINK, IMAGE_QUALITY } from "../../../constants/cdn"

const CaseStudyCarousel = ( props ) => {

    const { data } = props
    return (
        <section className="w-full h-full">
            <Carousel showThumbs={ false } showStatus={ false } showArrows={ true } autoPlay={ false } infiniteLoop={ true }
                renderArrowPrev={( onClickHandler, hasPrev, label ) =>
                hasPrev && (
                        <button
                            type="button"
                            onClick={ onClickHandler }
                            title={ label }
                            className="absolute top-0 left-1 z-10 flex items-center h-full mt-10 md:mt-0"
                        >
                            <ChevronLeftIcon className="text-white size-8 md:size-12"/>
                        </button>
                )}
                renderArrowNext={( onClickHandler, hasNext, label ) =>
                    hasNext && (
                        <button
                            type="button"
                            onClick={ onClickHandler }
                            title={ label }
                            className="absolute top-0 right-1 z-10 flex items-center h-full mt-10 md:mt-0"
                        >
                            <ChevronRightIcon className="text-white size-8 md:size-12"/>
                        </button>
                )}
            >
                {

                    data.map( ( value, index ) => {
                        return (
                            <div key={ "case-study-image-" + index } className="relative w-full h-96 space-y-4 flex flex-col items-center justify-center" style={{ backgroundImage: `url(${ CDN_LINK + value.cover + "?quality=" + IMAGE_QUALITY })` }}>
                                <div className="space-y-4 px-20">
                                    <p className="text-lg text-white font-lato capitalize font-bold text-center relative z-10">{ value.company_name }</p>
                                    <p className="text-3xl text-white font-lato capitalize font-bold text-center relative z-10">{ value.title }</p>
                                </div>
                                <div className="bg-red-700/80 h-full w-full absolute top-0 opacity-90" style={{ backgroundColor: value.color_code }} />
                            </div>
                        )
                    })

                }
            </Carousel>
        </section>
    )

}

export default CaseStudyCarousel