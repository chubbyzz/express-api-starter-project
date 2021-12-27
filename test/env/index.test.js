describe('change enviroment change the env variables', () => {
    beforeEach(() => {
        return jest.resetModules();
    });
    
    it('should be in dev enviroment', () => {
        process.env.NODE_ENV = 'development';
        let dotenv = require('../../config/env');
        expect(dotenv.ENV).toBe(process.env.NODE_ENV);
    });

    it('should be in test enviroment', () => {
        process.env.NODE_ENV = 'test';
        let dotenv = require('../../config/env');
        expect(dotenv.ENV).toBe(process.env.NODE_ENV);
    });

    it('should be in production enviroment', () => {
        process.env.NODE_ENV = 'production';
        let dotenv = require('../../config/env');
        expect(dotenv.ENV).toBe(process.env.NODE_ENV);
    });
});