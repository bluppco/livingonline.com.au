// IMPORTS COMPONENTS
import ReadMore from "@/components/common/read-more/index.jsx"

// IMPORTS ATOMS
import HeadingFourJSX from "@/atoms/heading/four/jsx/index.jsx"

// IMPORTS MARKED
import { marked } from "marked"

const Advantage = ( props ) => {

    // GET PROPS
    const { data } = props
    const html = marked.parse( data.description )

    return(
        <div className="space-y-4 md:space-y-6">
            <HeadingFourJSX>{ data.title }</HeadingFourJSX>
            <div>
                <div dangerouslySetInnerHTML={{ __html: html }}className="markdown textlg" />
                <ReadMore text={ data.more_description } />
            </div>
        </div>
    )

}

export default Advantage
