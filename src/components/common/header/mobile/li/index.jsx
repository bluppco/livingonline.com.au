// IMPORTS ATOMS
import Link from "@/atoms/links/jsx/index"

const HeaderMobileItem = ( props ) => {

    const { href } = props

    return(
        <li className="text-lg uppercase font-lato text-white tracking-widest">
            <Link href={ href } aria_label="">
                { props.children }
            </Link>
        </li>
    )

}

export default HeaderMobileItem
