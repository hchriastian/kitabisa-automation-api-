const errorBuilder = require("../../../utils/errorBuilder");

class BinListRequest {
    constructor (resource) {
        if(!resource) {
            throw errorBuilder.ConstructorParams()
        }
        this.resource = resource;
    }

    newExportRequest = () => {
        return {}
    }

    newExportRequestFilterPage = () => {
        return {
            "page": "2"
        }
    }

    newExportRequestFilterPerPage = () => {
        return {
            "per_page": "6"
        }
    }

    newExportRequestFilterTotal = () => {
        return {
            "total":  "12"
        }
    }