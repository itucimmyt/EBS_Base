//import constants
import * as Constant from "../../app/helpers/constants";

//import models
import modelDefault from "./modelDefault";

//import console utilities
import * as consoleUtils from "../../app/helpers/consoleUtils";

class ClientDefault {
  getData(callBack) {

    //object to insert parameters to pass to url
    let urlParams = {
      myParam: "exampleParam"
    };

    //url construction
    let url = Constant.URL_EXAMPLE;

    //set headers
    var myHeaders = new Headers();
    myHeaders.append('Accept', 'application/json');

    //header definition
    let myInit = {
      method: 'GET',
      headers: myHeaders,
    }

    //array of model objects
    let dataSet = []

    //log current url to fetch data from
    consoleUtils.urlPrint(url, urlParams);

    fetch(url, myInit)
      .then(response => {
        //log url status and parameters
        consoleUtils.statusPrint(url, response.status);
        return response.json();
      })
      .then(json => {
        //log extracted data from fetch w/o processing
        consoleUtils.colorPrint("blue", "white", "API extracted data:");
        consoleUtils.tablePrint(json.entities.requests);

        //iterate over results to create model objects and push them to array
        json.entities.requests.map(element => {
          let modelObject = new modelDefault(
            element.comments,
            element.id,
            element.firstName,
            element.lastName
          );
          dataSet.push(modelObject);
        });
        //callback object
        consoleUtils.colorPrint("purple", "white", "API extracted data:");
        consoleUtils.tablePrint(dataSet);
        callBack(json);
      })
  }
}

export default ClientDefault;
