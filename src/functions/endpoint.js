export const endpointFetch = ( environment ) => {

    return environment === "staging" ? "https://staging.api.livingonline.blupp.co" : "https://api.livingonline.blupp.co"

}
