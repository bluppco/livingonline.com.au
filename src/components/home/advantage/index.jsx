// IMPORTS MARKED
import { marked } from "marked"

// IMPORTS ATOMS
import HeadingFourJSX from "@/atoms/heading/four/jsx/index"

// IMPORTS COMPONENTS
import ReadMore from "@/components/common/read-more/index"

const Advantage = ( props ) => {

    const { data } = props
    const html = marked.parse( data.description )

    return(
        <div className="space-y-4 md:space-y-6">
            <HeadingFourJSX>{ data.title }</HeadingFourJSX>
            <section dangerouslySetInnerHTML={{ __html: html }}className="markdown textlg" />
            <ReadMore text={ data.more_description } />
        </div>
    )

}

export default Advantage
