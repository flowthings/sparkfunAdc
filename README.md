# node.js library for Sparkfun Intel Edison ADC Block

## Overview

This library facilitates communication with the [SparkFun Block for Intel® Edison - ADC](https://www.sparkfun.com/products/13046) but should reasonably support any I<sup>2</sup>C interface to the TI [ADS1015](http://www.ti.com/product/ads1015) utilizing Intel’s [mraa](http://iotdk.intel.com/docs/master/mraa/) library.

## Examples

### Read Analog 0 to Ground using single shot mode with 4.096V setting on the PGA (default), with debug on:

```
var sparkfunAdc = require('sparkfunAdc');

var a0_4v = new sparkfunAdc.Adc({
  debug: true,
});

var theReading = a0_4v.adcRead();

console.log("The reading is: " + theReading);
```

Debug is very granular, the above will yield:

```
Config binary : 1000001111000011
Config hex    : 83c3
Wrote 0x83c3 to configuration register
Read 0x83c3 from configuration register
Read 0x902c from ADC
Converted Read Hex: 0x2c9
Converted Read Int: 713
The reading is: 713
```

Conversion of 12 bit readings to voltage is left up to the user.

### Read from multiple inputs

```
var sparkfunAdc = require('sparkfunAdc');

var a0_4v = new sparkfunAdc.Adc();

var a1_2v = new sparkfunAdc.Adc({
  inMux: sparkfunAdc.IN_MUX_AIN1_GND,
  pga: sparkfunAdc.PGA_2_048V
});

console.log("A0->GND, 4.096 Volt PGA = " + a0_4v.adcRead());
console.log("A1->GND, 2.048 Volt PGA = " + a1_2v.adcRead());

```

Yields

```
A0->GND, 4.098 Volt PGA = 717
A1->GND, 2.048 Volt PGA = 2047
```

## Configuration Options

A full list of configuration options and defaults can be found in the [docs](https://github.com/flowthings/sparkfunAdc/blob/master/docs/sparkfunAdc.md).
