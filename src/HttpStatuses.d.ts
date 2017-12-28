export declare class HttpStatuses {
    static readonly SUCCESS_200_OK: number;
    static readonly SUCCESS_201_CREATED: number;
    static readonly SUCCESS_204_NO_CONTENT: number;
    static readonly REDIRECT_301_MOVED_PERM: number;
    static readonly REDIRECT_302_FOUND: number;
    static readonly REDIRECT_304_NOT_MODIFIED: number;
    static readonly ERR_400_BAD_REQUEST: number;
    static readonly ERR_401_UNAUTHORIZED: number;
    static readonly ERR_403_FORBIDDEN: number;
    static readonly ERR_404_NOT_FOUND: number;
    static readonly ERR_409_CONFLICT: number;
    static readonly ERR_500_SERVER_ERR: number;
    static getMessage(statusCode: number): string;
}
