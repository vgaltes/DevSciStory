/*global require, describe, it, beforeEach */
(function () {
    var expect = chai.expect;

    describe("ToDoList tests", function () {
        beforeEach(angular.mock.module('ToDoListApp'));

        it('should contain an $toDoItemsRepository service', inject(function(toDoItemsRepository) {
            expect(toDoItemsRepository).not.to.equal(null);
        }));

        it("should call to server to obtain the ToDoList", function () {
            expect(true).to.be.false;
        });
    });
}());