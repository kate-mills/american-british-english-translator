const chai = require('chai')
const assert = chai.assert

const Translator = require('../components/translator.js')
let translator = new Translator()

let locale = ['american-to-british', 'british-to-american']

suite('Unit Tests', () => {
  suite('From American To British English', () => {

    test('Translate Mangoes are my favorite fruit.', function () {
      assert.equal(
        'Mangoes are my <span class="highlight">favourite</span> fruit.',
        translator.translate('Mangoes are my favorite fruit.', locale[0])
      )
    })

    test('I ate yogurt for breakfast.', function () {
      assert.equal(
        'I ate <span class="highlight">yoghurt</span> for breakfast.',
        translator.translate('I ate yogurt for breakfast.', locale[0])
      )
    })

    test('We had a party at my friend\'s condo.', function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate('We had a party at my friend\'s condo.', locale[0])
      )
    })

    test('Can you toss this in the trashcan for me?', function () {
      assert.equal(
        'Can you toss this in the <span class="highlight">bin</span> for me?',
        translator.translate('Can you toss this in the trashcan for me?', locale[0])
      )
    })

    test('The parking lot was full.', function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate('The parking lot was full.', locale[0])
      )
    })

    test('Like a high tech Rube Goldberg machine. ', function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate('Like a high tech Rube Goldberg machine. ', locale[0])
      )
    })

    test('To play hooky means to skip class or work.', function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate('To play hooky means to skip class or work.', locale[0])
      )
    })

    test('No Mr. Bond, I expect you to die. ', function () {
      assert.equal(
        'No <span class="highlight">Mr</span> Bond, I expect you to die.',
        translator.translate('No Mr. Bond, I expect you to die.', locale[0])
      )
    })
    test('Dr. Grosh will see you now.', function () {
      assert.equal(
        '<span class="highlight">Dr</span> Grosh will see you now.',
        translator.translate('Dr. Grosh will see you now.', locale[0])
      )
    })
    test('Lunch is at 12:15 today.', function () {
      assert.equal(
        'Everything looks good to me!',
        translator.translate('Lunch is at 12:15 today.', locale[0])
      )
    })
  })
  suite('From British To American English', () => {

    test('We watched the footie match for a while.', function () {
      assert.equal(
        'We watched the <span class="highlight">soccer</span> match for a while.',
        translator.translate('We watched the footie match for a while.',locale[1])
      )
    })

    //test('Paracetamol takes up to an hour to work.',function(){assert.equal('Tylenol takes up to an hour to work.',translator.translate('Paracetamol takes up to an hour to work.',locale[1]))})

    /*test('', function () { assert.equal( '', translator.translate('',locale[1]))})
    test('', function () { assert.equal( '', translator.translate('',locale[1])) })
    test('', function () { assert.equal( '', translator.translate('',locale[1])) })
    test('', function () { assert.equal( '', translator.translate('',locale[1])) })
    test('', function () { assert.equal( '', translator.translate('',locale[1])) })
    test('', function () { assert.equal( '', translator.translate('',locale[1])) })
    test('', function () { assert.equal( '', translator.translate('',locale[1])) })
    test('', function () { assert.equal( '', translator.translate('',locale[1])) })
    test('', function () { assert.equal( '', translator.translate('',locale[1])) })*/

  })
})
