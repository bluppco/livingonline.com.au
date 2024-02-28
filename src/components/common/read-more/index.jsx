// IMPORTS ATOMS
import PictureInternalContain from "@/atoms/picture/internal/jsx/contain/index.jsx"

// IMPORTS MARKED
import { marked } from "marked"

// IMPORTS REACT
import { useState } from "react"

const ReadMoreButton = ( props ) => {

    const [ showContent, setShowContent ] = useState(false)
    // GET PROPS
    const { text } = props
    const html = marked.parse(text)

    return(
        <div>
            {

                showContent &&
                <section dangerouslySetInnerHTML={{ __html: html }}className="markdown textlg" />

            }
            <button className="flex items-center text-lg font-semibold font-lato text-body" onClick={() => setShowContent(!showContent)}>
                {

                    showContent ? "Show Less" : "Read More"

                }
                {

                    showContent &&
                    <div className="size-6">
                        <PictureInternalContain
                            alternative_text="arrow up icon"
                            source="/icons/arrow-up.svg"
                        />
                    </div>

                }
                {

                    !showContent &&
                    <div className="size-6">
                        <PictureInternalContain
                            alternative_text="arrow down icon"
                            source="/icons/arrow-down.svg"
                        />
                    </div>

                }
            </button>
        </div>
    )

}

export default ReadMoreButton
