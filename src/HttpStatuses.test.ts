import * as assert from 'assert';

import { HttpStatuses } from './HttpStatuses';

describe('HttpStatuses', () => {
    it('has common HTTP status codes', async () => {
        assert.equal(HttpStatuses.SUCCESS_200_OK,            200);
        assert.equal(HttpStatuses.SUCCESS_201_CREATED,       201);
        assert.equal(HttpStatuses.SUCCESS_204_NO_CONTENT,    204);

        assert.equal(HttpStatuses.REDIRECT_301_MOVED_PERM,   301);
        assert.equal(HttpStatuses.REDIRECT_302_FOUND,        302);
        assert.equal(HttpStatuses.REDIRECT_304_NOT_MODIFIED, 304);

        assert.equal(HttpStatuses.ERR_400_BAD_REQUEST,       400);
        assert.equal(HttpStatuses.ERR_401_UNAUTHORIZED,      401);
        assert.equal(HttpStatuses.ERR_403_FORBIDDEN,         403);
        assert.equal(HttpStatuses.ERR_404_NOT_FOUND,         404);
        assert.equal(HttpStatuses.ERR_409_CONFLICT,          409);
        assert.equal(HttpStatuses.ERR_500_SERVER_ERR,        500);
    });

    it('returns the correct information message given a status code', async () => {
        assert.equal(HttpStatuses.getMessage(HttpStatuses.SUCCESS_200_OK),         'OK');
        assert.equal(HttpStatuses.getMessage(HttpStatuses.SUCCESS_201_CREATED),    'Created');
        assert.equal(HttpStatuses.getMessage(HttpStatuses.SUCCESS_204_NO_CONTENT), 'No Content');

        assert.equal(HttpStatuses.getMessage(HttpStatuses.REDIRECT_301_MOVED_PERM),   'Moved Permanently');
        assert.equal(HttpStatuses.getMessage(HttpStatuses.REDIRECT_302_FOUND),        'Found');
        assert.equal(HttpStatuses.getMessage(HttpStatuses.REDIRECT_304_NOT_MODIFIED), 'Not Modified');

        assert.equal(HttpStatuses.getMessage(HttpStatuses.ERR_400_BAD_REQUEST),  'Bad Request');
        assert.equal(HttpStatuses.getMessage(HttpStatuses.ERR_401_UNAUTHORIZED), 'Unauthorized');
        assert.equal(HttpStatuses.getMessage(HttpStatuses.ERR_403_FORBIDDEN),    'Forbidden');
        assert.equal(HttpStatuses.getMessage(HttpStatuses.ERR_404_NOT_FOUND),    'Not Found');
        assert.equal(HttpStatuses.getMessage(HttpStatuses.ERR_409_CONFLICT),     'Conflict');
        assert.equal(HttpStatuses.getMessage(HttpStatuses.ERR_500_SERVER_ERR),   'Internal Server Error');
    });
});