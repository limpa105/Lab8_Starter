// unit.test.js

const { unregisterCustomQueryHandler } = require('puppeteer');
const functions = require('../code-to-unit-test/unit-test-me.js');


test('isPhoneNumber 1: valid phone number', () => {
    expect(functions.isPhoneNumber("650-766-2901")).toBe(true)
  });

test("isPhoneNumber 2: valid phone number with ()", () => {
    expect(functions.isPhoneNumber("(650)-766-2901")).toBe(true)
})
  
test('isPhoneNumber 3: invalid phone number too short', () => {
    expect(functions.isPhoneNumber("650-766")).toBe(false)
  });

test('isPhoneNumber 4: invalid phone number with letters', () => {
    expect(functions.isPhoneNumber("650-abc-2901")).toBe(false)
  });
  
test('isEmail 1: valid email 1', () => {
    expect(functions.isEmail("epertsev@ucsd.edu")).toBe(true)
  });

test('isEmail 2: valid email 2 with numbers', () => {
    expect(functions.isEmail("epertsev231@ucsd.edu")).toBe(true )
  });

test('isEmail 3: invalid email without @', () => {
    expect(functions.isEmail("epertsevucsd.edu")).toBe(false)
  });

test('isEmail 4: invalid email without .', () => {
    expect(functions.isEmail("epertsev@ucsd")).toBe(false)
  });

  test('isStrongPassword 1: valid Password', () => {
    expect(functions.isStrongPassword("Password")).toBe(true)
  });

  test('isStrongPassword 2: valid Password with numbers', () => {
    expect(functions.isStrongPassword("Password234")).toBe(true)
  });

  test('isStrongPassword 3: invalid Password to short', () => {
    expect(functions.isStrongPassword("why")).toBe(false)
  });

  test('isStrongPassword 4: invalid Password with @', () => {
    expect(functions.isStrongPassword("Password@")).toBe(false)
  });


  test('isDate 1: valid Date', () => {
    expect(functions.isDate('11/10/2001')).toBe(true)
  });

  test('isDate 2: valid Date with XX 1', () => {
    expect(functions.isDate('1/1/2001')).toBe(true)
  });

  test('isDate 3: invalid Date too short', () => {
    expect(functions.isDate('1/2001')).toBe(false)
  });

  test('isDate 4: invalid Date with letters', () => {
    expect(functions.isDate('1x/11/2001')).toBe(false)
  });

  test('isHexColor 1: valid HTML', () => {
    expect(functions.isHexColor('#00ff00')).toBe(true)
  });

  test('isHexColor 2: valid CSS 3 digit without #', () => {
    expect(functions.isHexColor('0FF')).toBe(true)
  });

  test('isHexColor 3: invalid too Short', () => {
    expect(functions.isHexColor('#0F')).toBe(false)
  });

  test('isHexColor 4: invalid too long', () => {
    expect(functions.isHexColor('00FF00F')).toBe(false)
  });

 