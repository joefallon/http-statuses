"use strict";
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var assert = require("assert");
var HttpStatuses_1 = require("./HttpStatuses");
describe('HttpStatuses', function () {
    it('has common HTTP status codes', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            assert.equal(HttpStatuses_1.HttpStatuses.SUCCESS_200_OK, 200);
            assert.equal(HttpStatuses_1.HttpStatuses.SUCCESS_201_CREATED, 201);
            assert.equal(HttpStatuses_1.HttpStatuses.SUCCESS_204_NO_CONTENT, 204);
            assert.equal(HttpStatuses_1.HttpStatuses.REDIRECT_301_MOVED_PERM, 301);
            assert.equal(HttpStatuses_1.HttpStatuses.REDIRECT_302_FOUND, 302);
            assert.equal(HttpStatuses_1.HttpStatuses.REDIRECT_304_NOT_MODIFIED, 304);
            assert.equal(HttpStatuses_1.HttpStatuses.ERR_400_BAD_REQUEST, 400);
            assert.equal(HttpStatuses_1.HttpStatuses.ERR_401_UNAUTHORIZED, 401);
            assert.equal(HttpStatuses_1.HttpStatuses.ERR_403_FORBIDDEN, 403);
            assert.equal(HttpStatuses_1.HttpStatuses.ERR_404_NOT_FOUND, 404);
            assert.equal(HttpStatuses_1.HttpStatuses.ERR_409_CONFLICT, 409);
            assert.equal(HttpStatuses_1.HttpStatuses.ERR_500_SERVER_ERR, 500);
            return [2 /*return*/];
        });
    }); });
    it('returns the correct information message given a status code', function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
        return tslib_1.__generator(this, function (_a) {
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.SUCCESS_200_OK), 'OK');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.SUCCESS_201_CREATED), 'Created');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.SUCCESS_204_NO_CONTENT), 'No Content');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.REDIRECT_301_MOVED_PERM), 'Moved Permanently');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.REDIRECT_302_FOUND), 'Found');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.REDIRECT_304_NOT_MODIFIED), 'Not Modified');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.ERR_400_BAD_REQUEST), 'Bad Request');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.ERR_401_UNAUTHORIZED), 'Unauthorized');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.ERR_403_FORBIDDEN), 'Forbidden');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.ERR_404_NOT_FOUND), 'Not Found');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.ERR_409_CONFLICT), 'Conflict');
            assert.equal(HttpStatuses_1.HttpStatuses.getMessage(HttpStatuses_1.HttpStatuses.ERR_500_SERVER_ERR), 'Internal Server Error');
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cFN0YXR1c2VzLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJIdHRwU3RhdHVzZXMudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUJBc0NHOzs7QUF0Q0gsK0JBQWlDO0FBRWpDLCtDQUE4QztBQUU5QyxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3JCLEVBQUUsQ0FBQyw4QkFBOEIsRUFBRTs7WUFDL0IsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBWSxDQUFDLGNBQWMsRUFBYSxHQUFHLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsbUJBQW1CLEVBQVEsR0FBRyxDQUFDLENBQUM7WUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBWSxDQUFDLHNCQUFzQixFQUFLLEdBQUcsQ0FBQyxDQUFDO1lBRTFELE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQVksQ0FBQyx1QkFBdUIsRUFBSSxHQUFHLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsa0JBQWtCLEVBQVMsR0FBRyxDQUFDLENBQUM7WUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBWSxDQUFDLHlCQUF5QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBRTFELE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQVksQ0FBQyxtQkFBbUIsRUFBUSxHQUFHLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsb0JBQW9CLEVBQU8sR0FBRyxDQUFDLENBQUM7WUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBWSxDQUFDLGlCQUFpQixFQUFVLEdBQUcsQ0FBQyxDQUFDO1lBQzFELE1BQU0sQ0FBQyxLQUFLLENBQUMsMkJBQVksQ0FBQyxpQkFBaUIsRUFBVSxHQUFHLENBQUMsQ0FBQztZQUMxRCxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsZ0JBQWdCLEVBQVcsR0FBRyxDQUFDLENBQUM7WUFDMUQsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBWSxDQUFDLGtCQUFrQixFQUFTLEdBQUcsQ0FBQyxDQUFDOzs7U0FDN0QsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLDZEQUE2RCxFQUFFOztZQUM5RCxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLDJCQUFZLENBQUMsY0FBYyxDQUFDLEVBQVUsSUFBSSxDQUFDLENBQUM7WUFDakYsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBWSxDQUFDLFVBQVUsQ0FBQywyQkFBWSxDQUFDLG1CQUFtQixDQUFDLEVBQUssU0FBUyxDQUFDLENBQUM7WUFDdEYsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBWSxDQUFDLFVBQVUsQ0FBQywyQkFBWSxDQUFDLHNCQUFzQixDQUFDLEVBQUUsWUFBWSxDQUFDLENBQUM7WUFFekYsTUFBTSxDQUFDLEtBQUssQ0FBQywyQkFBWSxDQUFDLFVBQVUsQ0FBQywyQkFBWSxDQUFDLHVCQUF1QixDQUFDLEVBQUksbUJBQW1CLENBQUMsQ0FBQztZQUNuRyxNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLDJCQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBUyxPQUFPLENBQUMsQ0FBQztZQUN2RixNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLDJCQUFZLENBQUMseUJBQXlCLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUU5RixNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLDJCQUFZLENBQUMsbUJBQW1CLENBQUMsRUFBRyxhQUFhLENBQUMsQ0FBQztZQUN4RixNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLDJCQUFZLENBQUMsb0JBQW9CLENBQUMsRUFBRSxjQUFjLENBQUMsQ0FBQztZQUN6RixNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLDJCQUFZLENBQUMsaUJBQWlCLENBQUMsRUFBSyxXQUFXLENBQUMsQ0FBQztZQUN0RixNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLDJCQUFZLENBQUMsaUJBQWlCLENBQUMsRUFBSyxXQUFXLENBQUMsQ0FBQztZQUN0RixNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLDJCQUFZLENBQUMsZ0JBQWdCLENBQUMsRUFBTSxVQUFVLENBQUMsQ0FBQztZQUNyRixNQUFNLENBQUMsS0FBSyxDQUFDLDJCQUFZLENBQUMsVUFBVSxDQUFDLDJCQUFZLENBQUMsa0JBQWtCLENBQUMsRUFBSSx1QkFBdUIsQ0FBQyxDQUFDOzs7U0FDckcsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUMifQ==