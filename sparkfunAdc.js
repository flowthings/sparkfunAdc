/**
 * This module facilitates communication between a device host running the node.js mraa library
 * (such as an Intel Edison) and a Sparkfun ADC block.
 *
 * Based on Python code at https://github.com/humberto-garza/SparkFunEdisonADC
 *
 * @module sparkfunAdc
 * @author Tom Luczak
 * @license Apache-2.0
 */

var mraa = require('mraa');

/**
 * ADC Connection Object, by default will enable reading from AIN0 - GND
 * @constructor
 * @param {Object} [options] - Options Object
 * @param {number} [options.i2cBus=1] - i2c bus
 * @param {number} [options.address=0x48] - i2c address
 * @param {number} [options.opStat=sparkfunAdc.OP_STATUS_ZERO] - OpStatus
 * @param {number} [options.inMux=sparkfunAdc.IN_MUX_AIN0_GND] - Input Select
 * @param {number} [options.pga=sparkfunAdc.PGA_4_096V] - Amp Range
 * @param {number} [options.opMode=sparkfunAdc.OP_MODE_CONT] - Operating Mode
 * @param {number} [options.rate=sparkfunAdc.RATE_1600] - Data Rate
 * @param {number} [options.compMode=sparkfunAdc.COMP_MODE_TRAD] - Comparator Mode
 * @param {number} [options.compPol=sparkfunAdc.COMP_POL_LOW] - Comparator Polarity
 * @param {number} [options.compLatchl=sparkfunAdc.COMP_LATCH_LOW] - Comparator Latch
 * @param {number} [options.compQd=sparkfunAdc.COMP_QD_DISABLE] - Comparator Queue and Disable
 * @param {boolean} [options.debug=false] - log reads and writes to console
 */

exports.Adc = function(o) {

  if (o === undefined) o = {};

  if (o.i2cBus === undefined) this.i2cBus = 1;
  else this.i2cBus = o.i2cBus;

  if (o.address === undefined) this.address = 0x48;
  else this.address = o.address;

  if (o.opStat === undefined) this.opStat = exports.OP_STATUS_ONE;
  else this.opStat = o.opStat;

  if (o.inMux === undefined) this.inMux = exports.IN_MUX_AIN0_GND;
  else this.inMux = o.inMux;

  if (o.pga === undefined) this.pga = exports.PGA_4_096V;
  else this.pga = o.pga;

  if (o.opMode === undefined) this.opMode = exports.OP_MODE_SINGLE;
  else this.opMode = o.opMode;

  if (o.rate === undefined) this.rate = exports.RATE_1600;
  else this.rate = o.rate;

  if (o.compMode === undefined) this.compMode = exports.COMP_MODE_TRAD;
  else this.compMode = o.compMode;

  if (o.compPol === undefined) this.compPol = exports.COMP_POL_LOW;
  else this.compPol = o.compPol;

  if (o.compLatch === undefined) this.compLatch = exports.COMP_LATCH_LOW;
  else this.compLatch = o.compLatch;

  if (o.compQd === undefined) this.compQd = exports.COMP_QD_DISABLE;
  else this.compQd = o.compQd;

  if (o.debug === undefined) this.debug = false;
  else this.debug = !!o.debug;

  this.adc = new mraa.I2c(this.i2cBus);
  this.adc.address(this.address);
  this.setConfig();
}

/**
 * Sets internal configuration command based on current values
 */

exports.Adc.prototype.setConfig = function() {
  this.config = this.opStat    |
                this.inMux     |
                this.pga       |
                this.opMode    |
                this.rate      |
                this.compMode  |
                this.compPol   |
                this.compLatch |
                this.compQd;
  if (this.debug) {
    console.log('Config binary : ' + this.config.toString(2));
    console.log('Config hex    : ' + this.config.toString(16));
  }
}

/**
 * Sends internal configuration command and immediately reads result
 * @returns {number} - value from read operation
 */

exports.Adc.prototype.adcRead = function() {

  var writeStatus = this.adc.writeWordReg(0x01, this.config);
  if (writeStatus !== mraa.SUCCESS) throw("Unable to configure ADC");
  if (this.debug) {
    console.log('Wrote 0x' + this.config.toString(16) + ' to configuration register');
  }

  var readConfig = this.adc.readWordReg(0x01);
  if (this.debug) console.log('Read 0x' + readConfig.toString(16) + ' from configuration register');

  var rawData = this.adc.readWordReg(0);
  if (this.debug) console.log('Read 0x' + rawData.toString(16) + ' from ADC');
  var result = 0x0000;
  result = (rawData & 0xF000) >> 12;
  result = result | (rawData & 0x00F0) << 4;
  result = result | (rawData & 0x000F) << 4;
  if (result > 32767) result -= 65536;
  if (this.debug) {
    console.log('Converted Read Hex: 0x' + result.toString(16));
    console.log('Converted Read Int: ' + result);
  }
  return result;
}


/** @constant
 *  @type {number}
 *  @default 0x0000
 */

exports.OP_STATUS_ZERO = 0x0000;

/** @constant
 *  @type {number}
 *  @default 0x0080
 */

exports.OP_STATUS_ONE = 0x0080;

/** @constant
 *  @type {number}
 *  @default 0x0000
 */

exports.IN_MUX_AIN0_MINUS_AIN1 = 0x0000;

/** @constant
 *  @type {number}
 *  @default 0x0010
 */

exports.IN_MUX_AIN0_MINUS_AIN3 = 0x0010;

/** @constant
 *  @type {number}
 *  @default 0x0020
 */

exports.IN_MUX_AIN1_MINUS_AIN3 = 0x0020;

/** @constant
 *  @type {number}
 *  @default 0x0030
 */

exports.IN_MUX_AIN2_MINUS_AIN3 = 0x0030;

/** @constant
 *  @type {number}
 *  @default 0x0040
 */

exports.IN_MUX_AIN0_GND = 0x0040;

/** @constant
 *  @type {number}
 *  @default 0x0050
 */

exports.IN_MUX_AIN1_GND = 0x0050;

/** @constant
 *  @type {number}
 *  @default 0x0060
 */

exports.IN_MUX_AIN2_GND = 0x0060;

/** @constant
 *  @type {number}
 *  @default 0x0070
 */

exports.IN_MUX_AIN3_GND = 0x0070;

/** @constant
 *  @type {number}
 *  @default 0x0000
 */

exports.PGA_6_144V = 0x0000;

/** @constant
 *  @type {number}
 *  @default 0x0002
 */

exports.PGA_4_096V = 0x0002;

/** @constant
 *  @type {number}
 *  @default 0x0004
 */

exports.PGA_2_048V = 0x0004;

/** @constant
 *  @type {number}
 *  @default 0x0006
 */

exports.PGA_1_024V = 0x0006;

/** @constant
 *  @type {number}
 *  @default 0x0008
 */

exports.PGA_0_512V = 0x0008;

/** @constant
 *  @type {number}
 *  @default 0x0000
 */

exports.OP_MODE_CONT= 0x0000;

/** @constant
 *  @type {number}
 *  @default 0x0001
 */

exports.OP_MODE_SINGLE= 0x0001;

/** @constant
 *  @type {number}
 *  @default 0x0000
 */

exports.RATE_128 = 0x0000;

/** @constant
 *  @type {number}
 *  @default 0x2000
 */

exports.RATE_250 = 0x2000;

/** @constant
 *  @type {number}
 *  @default 0x4000
 */

exports.RATE_490 = 0x4000;

/** @constant
 *  @type {number}
 *  @default 0x6000
 */

exports.RATE_920 = 0x6000;

/** @constant
 *  @type {number}
 *  @default 0x8000
 */

exports.RATE_1600 = 0x8000;

/** @constant
 *  @type {number}
 *  @default 0xA000
 */

exports.RATE_2400 = 0xA000;

/** @constant
 *  @type {number}
 *  @default 0xC000
 */

exports.RATE_3300 = 0xC000;

/** @constant
 *  @type {number}
 *  @default 0x0000
 */

exports.COMP_MODE_TRAD = 0x0000;

/** @constant
 *  @type {number}
 *  @default 0x1000
 */

exports.COMP_MODE_WINDOW = 0x1000;

/** @constant
 *  @type {number}
 *  @default 0x0000
 */

exports.COMP_POL_LOW = 0x0000;

/** @constant
 *  @type {number}
 *  @default 0x0800
 */

exports.COMP_POL_HIGH = 0x0800;

/** @constant
 *  @type {number}
 *  @default 0x0000
 */

exports.COMP_LATCH_LOW = 0x0000;

/** @constant
 *  @type {number}
 *  @default 0x0400
 */

exports.COMP_LATCH_HIGH = 0x0400;

/** @constant
 *  @type {number}
 *  @default 0x0300
 */

exports.COMP_QD_DISABLE = 0x0300;

/** @constant
 *  @type {number}
 *  @default 0x0000
 */

exports.COMP_QD_A1 = 0x0000;

/** @constant
 *  @type {number}
 *  @default 0x0000
 */

exports.COMP_QD_A2 = 0x0100;

/** @constant
 *  @type {number}
 *  @default 0x0200
 */

exports.COMP_QD_A4 = 0x0200;

