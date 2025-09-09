const request = require('supertest');
const app = require('../src/app');

describe('User Routes', () => {
  it('Deve retornar token com login correto', async () => {
    const res = await request(app).post('/api/login').send({
      username: 'admin',
      password: '123456'
    });

    expect(res.statusCode).to.equal(200);
    expect(res.body.token).to.be.a('string');
  });

  it('Deve negar acesso sem token', async () => {
    const res = await request(app).get('/api/profile');
    expect(res.statusCode).to.equal(401);
  });
});
