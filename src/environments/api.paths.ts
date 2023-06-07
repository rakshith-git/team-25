export enum ApiPaths {

    // Get API paths [GET Request]
    get = 'get',
    getById = 'get/{id}',
    listView = 'view/list',
    cardView = 'view/card',

    // Edit API paths [PUT request]
    edit = 'edit',
    
    // Post API paths [POST request]
    add = 'add',
    
    // Delete API paths [DELETE]
    delete = 'appointment/delete/{id}',
    cancel = 'appointment/cancel{id}'

}