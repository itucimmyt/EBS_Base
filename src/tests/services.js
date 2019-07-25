const fetch = require("node-fetch");
global.fetch = fetch
global.Headers = fetch.Headers;

function apiGet(url){
    var myHeaders = new Headers();
        myHeaders.append('Accept', 'application/json');        
            var myInit = {
                method: 'GET',
                headers: myHeaders,
            };
           return fetch (url, myInit)        
           .catch(error =>{return error})                
            .then((response)=>{
                if(response.status == undefined){
                    //return "error"
                    //return response.json()                                                         
                    return response.status
                }                
                return response.statusText
            })
}

exports.apiGet = apiGet