// IMPORTS MARKED
import { marked } from "marked"

// IMPORTS ATOMS
import HeadingFourJSX from "@/atoms/heading/four/jsx/index"

const Advantage = ( props ) => {

    const { title, description } = props

    const html = marked.parse(description)

    return(
        <div className="space-y-4 md:space-y-6">
            <HeadingFourJSX>{ title }</HeadingFourJSX>
            <section dangerouslySetInnerHTML={{ __html: html }}className="markdown textlg" />
        </div>
    )

}

export default Advantage
