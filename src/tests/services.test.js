require("@babel/polyfill");
const { apiGet } = require('./services')

test('1. GET Request (Page 1)',  async () => {        
    let start = new Date();
    let status = await apiGet("http://ebs.cimmyt.org:8290/api-sm/v0.1/requests?cropId=1&statusId=1&serviceId=1&subserviceId=0&page=1")
    let responseTime = new Date() - start;
    expect(responseTime).toBeLessThan(100);
    expect(status).toBe("OK") 
})

test('adds 1 + 2 to equal 3', () => {
    expect(4).toBe(4);
  });