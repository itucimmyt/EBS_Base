import cropCatalog from "../catalogs/cropCatalog";
import serviceCatalog from "../catalogs/serviceCatalog";
import sourceCatalog from "../catalogs/sourceCatalog";
import subServiceCatalog from "../catalogs/subServiceCatalog";
import tissueCatalog from "../catalogs/tissueCatalog";

const map = (object) => {
  object.forEach(element => {
    element.crop = cropCatalog.get(element.crop);
    element.serviceCatalog = serviceCatalog.get(element.serviceCatalog);
    element.subService = subServiceCatalog.get(element.subService);
    element.tissue = tissueCatalog.get(element.tissue);
    element.source = sourceCatalog.get(element.source);
  });
}

export default map;