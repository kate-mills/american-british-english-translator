const chai = require('chai')
const chaiHttp = require('chai-http')
const assert = chai.assert
const server = require('../server.js')

chai.use(chaiHttp)

let Translator = require('../components/translator.js')

suite('Functional Tests', () => {
  // #1
  test('POST /api/translate with text and locale fields', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .send({
        locale: 'british-to-american',
        text: 'Mangoes are my favourite fruit.',
      })
      .end(function (err, res) {
        assert.equal(res.status, 200)
        assert.equal(
          res.body.translation,
          'Mangoes are my <span class="highlight">favorite</span> fruit.'
        )
        done()
      })
  })

  // #2
  test('POST /api/translate with text and invalid locale field', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .send({
        locale: 'british-2-american',
        text: 'Mangoes are my favorite fruit.',
      })
      .end(function (err, res) {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Invalid value for locale field')
        done()
      })
  })
  // #3
  test('POST /api/translate with missing text field', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .send({ locale: 'british-to-american' })
      .end(function (err, res) {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Required field(s) missing')
        done()
      })
  })

  // #4
  test('POST /api/translate with missing locale field', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .send({ locale: '', text: 'Mangoes are great.' })
      .end(function (err, res) {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'Required field(s) missing')
        done()
      })
  })

  // #5
  test('POST /api/translate with empty text', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .send({ locale: 'british-to-american', text: '' })
      .end(function (err, res) {
        assert.equal(res.status, 200)
        assert.equal(res.body.error, 'No text to translate')
        done()
      })
  })
  // #6
  test('POST /api/translate with text that needs no translation', function (done) {
    chai
      .request(server)
      .post('/api/translate')
      .send({
        locale: 'british-to-american',
        text: 'Tea time is usually around 4 or 4:30.',
      })
      .end(function (err, res) {
        assert.equal(res.status, 200)
        assert.equal(res.body.translation, 'Everything looks good to me!')
        done()
      })
  })
})
