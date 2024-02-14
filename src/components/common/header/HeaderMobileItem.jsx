const HeaderMobileItem = ( props ) => {

    const { href } = props

    return(
        <li className="text-lg uppercase font-lato text-white tracking-widest">
            <a href={ href }>
                { props.children }
            </a>
        </li>
    )

}

export default HeaderMobileItem
