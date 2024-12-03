
const request = require('supertest');
const app = require('../index'); // Ensure this path is correct

describe('GET /users', function() {
    it('should return user kizi if exists', function(done) {
        request(app)
            .get('/users')
            .query({ username: 'kizi' })
            .expect('Content-Type', /json/)
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);
                const users = res.body;
                const userExists = users.some(user => user.username === 'kizi');
                if (userExists) {
                    done();
                } else {
                    done(new Error('User kizi not found'));
                }
            });
    });
});