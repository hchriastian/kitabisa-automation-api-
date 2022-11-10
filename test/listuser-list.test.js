const { test } = require('../../../Test');
const status = require('http-status');

describe('Bin List VIEW', () => {

    beforeAll(test(async (service, model, resource) => {
        await resource.DBManipulator.seed('revert', 'wmsApi/locator');
        await resource.DBManipulator.seed('seed', 'wmsApi/locator');
    
        await resource.DBManipulator.seed('revert', 'wmsApi/binType');
        await resource.DBManipulator.seed('seed', 'wmsApi/binType');
    
        await resource.DBManipulator.seed('revert', 'wmsApi/bin');
        await resource.DBManipulator.seed('seed', 'wmsApi/bin');
    }))

    it('[GET] /api/users?page=2 > Response 200', test(async (service, model, resource) => {
        const params = {
            page: 2,
            limit: 10,
            
        }
        const response = await service.ListUserService.getListUser(params)
        const expectedResponse = model.ListUserResponse.newListUser()
        
        expect(response.status).toBe(status.OK);
        expect(response.body).toStrictEqual(expectedResponse);
    }));