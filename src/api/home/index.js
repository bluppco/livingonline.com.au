import { endpointFetch } from "../../functions/endpoint"

export const homeAPI = async ( environment ) => {

    const endpoint = endpointFetch( environment )

    // NETWORK CALL TO GET DATA
    const network_data = await fetch( endpoint + "/home" )
    const data_json = await network_data.json()

    const { home, case_studies, meta_tags } = data_json.data

    let home_data = {

        // HOME PROPS
        hero : "",
        awards : "",
        dm_agency_perth : "",
        full_service_dm_agency : "",
        platforms : "",
        outcomes : "",
        case_studies : "",
        top_dm_company : "",
        contact : "",
        dm_services : "",
        dm_strategy : "",
        dm_planning : "",
        dm_management : "",
        dm_audits : "",
        skyrocketing_revenue : "",
        massively_reduced_costs : "",
        blazingly_fast_speed : "",
        unchain_yourself : "",
        bake_yourself_profit : "",
        rediscover_the_sweet_feeling : "",

    }
    home.map( ( data ) => {

        if( data.slug === "hero" )
            home_data.hero = data
        else if( data.slug === "awards" )
            home_data.awards = data
        else if ( data.slug === "dm-agency-perth" )
            home_data.dm_agency_perth = data
        else if ( data.slug === "full-service-dm-agency" )
            home_data.full_service_dm_agency = data
        else if ( data.slug === "platforms" )
            home_data.platforms = data
        else if ( data.slug === "outcomes" )
            home_data.outcomes = data
        else if( data.slug === "case-studies" )
            home_data.case_studies = data
        else if ( data.slug === "top-dm-company" )
            home_data.top_dm_company = data
        else if ( data.slug === "contact" )
            home_data.contact = data
        else if ( data.slug === "dm-services" )
            home_data.dm_services = data
        else if ( data.slug === "dm-strategy" )
            home_data.dm_strategy = data
        else if ( data.slug === "dm-planning" )
            home_data.dm_planning = data
        else if ( data.slug === "dm-management" )
            home_data.dm_management = data
        else if ( data.slug === "dm-audits" )
            home_data.dm_audits = data
        else if ( data.slug === "skyrocketing-revenue" )
            home_data.skyrocketing_revenue = data
        else if ( data.slug === "massively-reduced-costs" )
            home_data.massively_reduced_costs = data
        else if ( data.slug === "blazingly-fast-speed" )
            home_data.blazingly_fast_speed = data
        else if ( data.slug === "unchain-yourself" )
            home_data.unchain_yourself = data
        else if ( data.slug === "bake-yourself-profit" )
            home_data.bake_yourself_profit = data
        else if ( data.slug === "rediscover-the-sweet-feeling" )
            home_data.rediscover_the_sweet_feeling = data

    })

    return { home_data, case_studies, meta_tags }

}
