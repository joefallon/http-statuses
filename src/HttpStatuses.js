"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpStatuses = /** @class */ (function () {
    function HttpStatuses() {
    }
    HttpStatuses.getMessage = function (statusCode) {
        switch (statusCode) {
            case HttpStatuses.SUCCESS_200_OK:
                return 'OK';
            case HttpStatuses.SUCCESS_201_CREATED:
                return 'Created';
            case HttpStatuses.SUCCESS_204_NO_CONTENT:
                return 'No Content';
            case HttpStatuses.REDIRECT_301_MOVED_PERM:
                return 'Moved Permanently';
            case HttpStatuses.REDIRECT_302_FOUND:
                return 'Found';
            case HttpStatuses.REDIRECT_304_NOT_MODIFIED:
                return 'Not Modified';
            case HttpStatuses.ERR_400_BAD_REQUEST:
                return 'Bad Request';
            case HttpStatuses.ERR_401_UNAUTHORIZED:
                return 'Unauthorized';
            case HttpStatuses.ERR_403_FORBIDDEN:
                return 'Forbidden';
            case HttpStatuses.ERR_404_NOT_FOUND:
                return 'Not Found';
            case HttpStatuses.ERR_409_CONFLICT:
                return 'Conflict';
            case HttpStatuses.ERR_500_SERVER_ERR:
                return 'Internal Server Error';
            default:
                return '';
        }
    };
    HttpStatuses.SUCCESS_200_OK = 200;
    HttpStatuses.SUCCESS_201_CREATED = 201;
    HttpStatuses.SUCCESS_204_NO_CONTENT = 204;
    HttpStatuses.REDIRECT_301_MOVED_PERM = 301;
    HttpStatuses.REDIRECT_302_FOUND = 302;
    HttpStatuses.REDIRECT_304_NOT_MODIFIED = 304;
    HttpStatuses.ERR_400_BAD_REQUEST = 400;
    HttpStatuses.ERR_401_UNAUTHORIZED = 401;
    HttpStatuses.ERR_403_FORBIDDEN = 403;
    HttpStatuses.ERR_404_NOT_FOUND = 404;
    HttpStatuses.ERR_409_CONFLICT = 409;
    HttpStatuses.ERR_500_SERVER_ERR = 500;
    return HttpStatuses;
}());
exports.HttpStatuses = HttpStatuses;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cFN0YXR1c2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSHR0cFN0YXR1c2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQWlEQSxDQUFDO0lBakNpQix1QkFBVSxHQUF4QixVQUF5QixVQUFrQjtRQUN2QyxNQUFNLENBQUEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLEtBQUssWUFBWSxDQUFDLGNBQWM7Z0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDaEIsS0FBSyxZQUFZLENBQUMsbUJBQW1CO2dCQUNqQyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JCLEtBQUssWUFBWSxDQUFDLHNCQUFzQjtnQkFDcEMsTUFBTSxDQUFDLFlBQVksQ0FBQztZQUV4QixLQUFLLFlBQVksQ0FBQyx1QkFBdUI7Z0JBQ3JDLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQztZQUMvQixLQUFLLFlBQVksQ0FBQyxrQkFBa0I7Z0JBQ2hDLE1BQU0sQ0FBQyxPQUFPLENBQUM7WUFDbkIsS0FBSyxZQUFZLENBQUMseUJBQXlCO2dCQUN2QyxNQUFNLENBQUMsY0FBYyxDQUFDO1lBRTFCLEtBQUssWUFBWSxDQUFDLG1CQUFtQjtnQkFDakMsTUFBTSxDQUFDLGFBQWEsQ0FBQztZQUN6QixLQUFLLFlBQVksQ0FBQyxvQkFBb0I7Z0JBQ2xDLE1BQU0sQ0FBQyxjQUFjLENBQUM7WUFDMUIsS0FBSyxZQUFZLENBQUMsaUJBQWlCO2dCQUMvQixNQUFNLENBQUMsV0FBVyxDQUFDO1lBQ3ZCLEtBQUssWUFBWSxDQUFDLGlCQUFpQjtnQkFDL0IsTUFBTSxDQUFDLFdBQVcsQ0FBQztZQUN2QixLQUFLLFlBQVksQ0FBQyxnQkFBZ0I7Z0JBQzlCLE1BQU0sQ0FBQyxVQUFVLENBQUM7WUFDdEIsS0FBSyxZQUFZLENBQUMsa0JBQWtCO2dCQUNoQyxNQUFNLENBQUMsdUJBQXVCLENBQUM7WUFFbkM7Z0JBQ0ksTUFBTSxDQUFDLEVBQUUsQ0FBQztRQUNsQixDQUFDO0lBQ0wsQ0FBQztJQS9Dc0IsMkJBQWMsR0FBYyxHQUFHLENBQUM7SUFDaEMsZ0NBQW1CLEdBQVMsR0FBRyxDQUFDO0lBQ2hDLG1DQUFzQixHQUFNLEdBQUcsQ0FBQztJQUVoQyxvQ0FBdUIsR0FBSyxHQUFHLENBQUM7SUFDaEMsK0JBQWtCLEdBQVUsR0FBRyxDQUFDO0lBQ2hDLHNDQUF5QixHQUFHLEdBQUcsQ0FBQztJQUVoQyxnQ0FBbUIsR0FBUyxHQUFHLENBQUM7SUFDaEMsaUNBQW9CLEdBQVEsR0FBRyxDQUFDO0lBQ2hDLDhCQUFpQixHQUFXLEdBQUcsQ0FBQztJQUNoQyw4QkFBaUIsR0FBVyxHQUFHLENBQUM7SUFDaEMsNkJBQWdCLEdBQVksR0FBRyxDQUFDO0lBQ2hDLCtCQUFrQixHQUFVLEdBQUcsQ0FBQztJQW1DM0QsbUJBQUM7Q0FBQSxBQWpERCxJQWlEQztBQWpEWSxvQ0FBWSJ9