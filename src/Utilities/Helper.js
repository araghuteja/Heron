export function navigateTo(props, location, options = {}, query='') {
    props.history.push({
        pathname: `/${location}`,   // Eg. /game
        search: query,                     // Eg. ?query=abc
        state: {options}
    });
};
