const sinon = require('sinon');
const userController = require('../../src/controllers/userController');

describe('UserController', () => {
  describe('login', () => {
    it('Deve retornar token para credenciais válidas', () => {
      const req = { body: { username: 'admin', password: '123456' } };
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis()
      };

      userController.login(req, res);

      expect(res.json.calledOnce).to.be.true;
      const tokenResponse = res.json.getCall(0).args[0];
      expect(tokenResponse.token).to.exist;
    });

    it('Deve retornar 401 para credenciais inválidas', () => {
      const req = { body: { username: 'admin', password: 'wrong' } };
      const res = {
        json: sinon.spy(),
        status: sinon.stub().returnsThis()
      };

      userController.login(req, res);

      expect(res.status.calledWith(401)).to.be.true;
      expect(res.json.calledOnce).to.be.true;
    });
  });
});
