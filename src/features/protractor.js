describe('simple test', function () {

    //1.- Fill database with data (recreate database or tables if needed)
    var databaseHelper = require('./helpers/databaseHelper'),
        server = require('../server/server.js');
    databaseHelper.ensureDataBaseIsFilledWithSampleData();
    server.start();

    it('should have a title', function () {
        browser.get('http://localhost:8081/');

        expect(browser.getTitle()).toEqual('ToDo List');

        expect(element.all('.toDoItem').count()).toEqual(10);
    });
});