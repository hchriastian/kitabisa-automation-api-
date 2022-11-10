const supertest = require('supertest');
const errorBuilder = require('../../utils/errorBuilder');
const {
    wmsLogin
} = require('../../utils/login');

class BinListService {
    constructor (resource) {
        if(!resource) {
            throw errorBuilder.ConstructorParams()
        }
        this.resource = resource;
        this.request = supertest(this.resource.Config.ReqresBaseUrl)
        this.path = '/api/users?page=2';
      
    }

    getListUser = async (params) => {
        return this.request.get(this.path)
            .query(params)
            .set('Content-Type', 'application/json')
            .set('Accept', 'application/json')
            .set('Reqres-Id', this.ReqresBaseUrl)
            .set('Authorization', await reqresLogin())
            .send();
    }