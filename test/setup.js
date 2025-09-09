
const chai = require('chai');
global.expect = chai.expect;
process.env.JWT_SECRET = process.env.JWT_SECRET || 'test_secret';