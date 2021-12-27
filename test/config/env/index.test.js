describe('change enviroment change the env variables', () => {
    beforeEach(() => {
        return jest.resetModules();
    });
    
    it('should be in dev enviroment', () => {
        process.env.NODE_ENV = 'development';
        const dotenv = require('../../../config/env');
        expect(dotenv.ENV).toBe(process.env.NODE_ENV);
    });

    it('should be in test enviroment', () => {
        process.env.NODE_ENV = 'test';
        const dotenv = require('../../../config/env');
        expect(dotenv.ENV).toBe(process.env.NODE_ENV);
    });

    it('should be in production enviroment', () => {
        process.env.NODE_ENV = 'production';
        const dotenv = require('../../../config/env');
        expect(dotenv.ENV).toBe(process.env.NODE_ENV);
    });
});

const dotenv = require('../../../config/env');

it('should return undefined is access a property who doest exists', () => {
    expect(dotenv.NULL_PROPERTY).toBe(undefined);
});