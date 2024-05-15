import request from "supertest";
import chai from "chai";
import app from "../src/app";
const expect = chai.expect;

describe("GET /",()=>{
    it('should return status 200 and a welcome message', (done) => {
        request(app)
          .get('/')
          .end((err, res) => {
            expect(res.status).to.equal(200);
            expect(res.text).to.equal('Hello, Smoke Test!');
            done();
          });
      });
})
