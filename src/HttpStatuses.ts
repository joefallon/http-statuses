export class HttpStatuses {
    public static readonly SUCCESS_200_OK            = 200;
    public static readonly SUCCESS_201_CREATED       = 201;
    public static readonly SUCCESS_204_NO_CONTENT    = 204;

    public static readonly REDIRECT_301_MOVED_PERM   = 301;
    public static readonly REDIRECT_302_FOUND        = 302;
    public static readonly REDIRECT_304_NOT_MODIFIED = 304;

    public static readonly ERR_400_BAD_REQUEST       = 400;
    public static readonly ERR_401_UNAUTHORIZED      = 401;
    public static readonly ERR_403_FORBIDDEN         = 403;
    public static readonly ERR_404_NOT_FOUND         = 404;
    public static readonly ERR_409_CONFLICT          = 409;
    public static readonly ERR_500_SERVER_ERR        = 500;

    public static getMessage(statusCode: number): string {
        switch(statusCode) {
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
    }
}