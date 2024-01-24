// IMPORTS MARKED
import { marked } from "marked"

// IMPORTS ATOMS
import HeadingFourJSX from "../../atoms/heading/four/Vanilla"

const Advantage = ( props ) => {

    const { title, description } = props

    const html = marked.parse(description)

    return(
        <div className="space-y-6">
            <HeadingFourJSX>{ title }</HeadingFourJSX>
            <section dangerouslySetInnerHTML={{ __html: html }}className="markdown" />
        </div>
    )

}

export default Advantage
