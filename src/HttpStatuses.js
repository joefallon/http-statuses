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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSHR0cFN0YXR1c2VzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiSHR0cFN0YXR1c2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFBQTtJQWlEQSxDQUFDO0lBakNpQix1QkFBVSxHQUF4QixVQUF5QixVQUFrQjtRQUN2QyxRQUFPLFVBQVUsRUFBRTtZQUNmLEtBQUssWUFBWSxDQUFDLGNBQWM7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDO1lBQ2hCLEtBQUssWUFBWSxDQUFDLG1CQUFtQjtnQkFDakMsT0FBTyxTQUFTLENBQUM7WUFDckIsS0FBSyxZQUFZLENBQUMsc0JBQXNCO2dCQUNwQyxPQUFPLFlBQVksQ0FBQztZQUV4QixLQUFLLFlBQVksQ0FBQyx1QkFBdUI7Z0JBQ3JDLE9BQU8sbUJBQW1CLENBQUM7WUFDL0IsS0FBSyxZQUFZLENBQUMsa0JBQWtCO2dCQUNoQyxPQUFPLE9BQU8sQ0FBQztZQUNuQixLQUFLLFlBQVksQ0FBQyx5QkFBeUI7Z0JBQ3ZDLE9BQU8sY0FBYyxDQUFDO1lBRTFCLEtBQUssWUFBWSxDQUFDLG1CQUFtQjtnQkFDakMsT0FBTyxhQUFhLENBQUM7WUFDekIsS0FBSyxZQUFZLENBQUMsb0JBQW9CO2dCQUNsQyxPQUFPLGNBQWMsQ0FBQztZQUMxQixLQUFLLFlBQVksQ0FBQyxpQkFBaUI7Z0JBQy9CLE9BQU8sV0FBVyxDQUFDO1lBQ3ZCLEtBQUssWUFBWSxDQUFDLGlCQUFpQjtnQkFDL0IsT0FBTyxXQUFXLENBQUM7WUFDdkIsS0FBSyxZQUFZLENBQUMsZ0JBQWdCO2dCQUM5QixPQUFPLFVBQVUsQ0FBQztZQUN0QixLQUFLLFlBQVksQ0FBQyxrQkFBa0I7Z0JBQ2hDLE9BQU8sdUJBQXVCLENBQUM7WUFFbkM7Z0JBQ0ksT0FBTyxFQUFFLENBQUM7U0FDakI7SUFDTCxDQUFDO0lBL0NzQiwyQkFBYyxHQUFjLEdBQUcsQ0FBQztJQUNoQyxnQ0FBbUIsR0FBUyxHQUFHLENBQUM7SUFDaEMsbUNBQXNCLEdBQU0sR0FBRyxDQUFDO0lBRWhDLG9DQUF1QixHQUFLLEdBQUcsQ0FBQztJQUNoQywrQkFBa0IsR0FBVSxHQUFHLENBQUM7SUFDaEMsc0NBQXlCLEdBQUcsR0FBRyxDQUFDO0lBRWhDLGdDQUFtQixHQUFTLEdBQUcsQ0FBQztJQUNoQyxpQ0FBb0IsR0FBUSxHQUFHLENBQUM7SUFDaEMsOEJBQWlCLEdBQVcsR0FBRyxDQUFDO0lBQ2hDLDhCQUFpQixHQUFXLEdBQUcsQ0FBQztJQUNoQyw2QkFBZ0IsR0FBWSxHQUFHLENBQUM7SUFDaEMsK0JBQWtCLEdBQVUsR0FBRyxDQUFDO0lBbUMzRCxtQkFBQztDQUFBLEFBakRELElBaURDO0FBakRZLG9DQUFZIn0=