// IMPORTS MARKED
import { marked } from "marked"

import { useState } from "react"

const ReadMoreButton = ( props ) => {

    const [ showContent, setShowContent ] = useState(false)
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

                    <img
                        src="/icons/arrow-up.svg"
                        alt=""
                        className="size-6"
                    />

                }
                {

                    !showContent &&

                    <img
                        src="/icons/arrow-down.svg"
                        alt=""
                        className="size-6"
                    />

                }
            </button>
        </div>
    )

}

export default ReadMoreButton
