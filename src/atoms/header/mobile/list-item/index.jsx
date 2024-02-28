// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index"

const ListItem = ( props ) => {

    // GET PROPS
    const {

        aria_label,
        href

    } = props

    return(
        <li className="text-lg uppercase font-lato text-white tracking-widest">
            <Link href={ href } aria_label={ aria_label }>
                { props.children }
            </Link>
        </li>
    )

}

export default ListItem
