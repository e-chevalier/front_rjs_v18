const getFetch = async (id = 0) => {

    try {
        return await (fetch(`https://gateway.marvel.com/v1/public/characters?nameStartsWith=Spider&ts=1&apikey=fec2e794ad6e1043f6f95668641b3bef&hash=3b7ad6c2b5d09ffe05af30a9e69f93fb`)
            .then(res => res.json())
            .then(data => {
                console.log(data.data)
                console.log(data.data.results)
                return data.data.results
            }));
    } catch (err) {
        return console.log(err)
    }
    
}

export default getFetch;
