<a name="module_sparkfunAdc"></a>
## sparkfunAdc
This module facilitates communication between a device host running the node.js mraa library
(such as an Intel Edison) and a Sparkfun ADC block.

Based on Python code at https://github.com/humberto-garza/SparkFunEdisonADC

**Author:** Tom Luczak  
**License**: Apache-2.0  

* [sparkfunAdc](#module_sparkfunAdc)
  * [.Adc](#module_sparkfunAdc.Adc)
    * [new exports.Adc([options])](#new_module_sparkfunAdc.Adc_new)
    * [.setConfig()](#module_sparkfunAdc.Adc+setConfig)
    * [.adcRead()](#module_sparkfunAdc.Adc+adcRead) ⇒ <code>number</code>
  * [.OP_STATUS_ZERO](#module_sparkfunAdc.OP_STATUS_ZERO) : <code>number</code>
  * [.OP_STATUS_ONE](#module_sparkfunAdc.OP_STATUS_ONE) : <code>number</code>
  * [.IN_MUX_AIN0_MINUS_AIN1](#module_sparkfunAdc.IN_MUX_AIN0_MINUS_AIN1) : <code>number</code>
  * [.IN_MUX_AIN0_MINUS_AIN3](#module_sparkfunAdc.IN_MUX_AIN0_MINUS_AIN3) : <code>number</code>
  * [.IN_MUX_AIN1_MINUS_AIN3](#module_sparkfunAdc.IN_MUX_AIN1_MINUS_AIN3) : <code>number</code>
  * [.IN_MUX_AIN2_MINUS_AIN3](#module_sparkfunAdc.IN_MUX_AIN2_MINUS_AIN3) : <code>number</code>
  * [.IN_MUX_AIN0_GND](#module_sparkfunAdc.IN_MUX_AIN0_GND) : <code>number</code>
  * [.IN_MUX_AIN1_GND](#module_sparkfunAdc.IN_MUX_AIN1_GND) : <code>number</code>
  * [.IN_MUX_AIN2_GND](#module_sparkfunAdc.IN_MUX_AIN2_GND) : <code>number</code>
  * [.IN_MUX_AIN3_GND](#module_sparkfunAdc.IN_MUX_AIN3_GND) : <code>number</code>
  * [.PGA_6_144V](#module_sparkfunAdc.PGA_6_144V) : <code>number</code>
  * [.PGA_4_096V](#module_sparkfunAdc.PGA_4_096V) : <code>number</code>
  * [.PGA_2_048V](#module_sparkfunAdc.PGA_2_048V) : <code>number</code>
  * [.PGA_1_024V](#module_sparkfunAdc.PGA_1_024V) : <code>number</code>
  * [.PGA_0_512V](#module_sparkfunAdc.PGA_0_512V) : <code>number</code>
  * [.OP_MODE_CONT](#module_sparkfunAdc.OP_MODE_CONT) : <code>number</code>
  * [.OP_MODE_SINGLE](#module_sparkfunAdc.OP_MODE_SINGLE) : <code>number</code>
  * [.RATE_128](#module_sparkfunAdc.RATE_128) : <code>number</code>
  * [.RATE_250](#module_sparkfunAdc.RATE_250) : <code>number</code>
  * [.RATE_490](#module_sparkfunAdc.RATE_490) : <code>number</code>
  * [.RATE_920](#module_sparkfunAdc.RATE_920) : <code>number</code>
  * [.RATE_1600](#module_sparkfunAdc.RATE_1600) : <code>number</code>
  * [.RATE_2400](#module_sparkfunAdc.RATE_2400) : <code>number</code>
  * [.RATE_3300](#module_sparkfunAdc.RATE_3300) : <code>number</code>
  * [.COMP_MODE_TRAD](#module_sparkfunAdc.COMP_MODE_TRAD) : <code>number</code>
  * [.COMP_MODE_WINDOW](#module_sparkfunAdc.COMP_MODE_WINDOW) : <code>number</code>
  * [.COMP_POL_LOW](#module_sparkfunAdc.COMP_POL_LOW) : <code>number</code>
  * [.COMP_POL_HIGH](#module_sparkfunAdc.COMP_POL_HIGH) : <code>number</code>
  * [.COMP_LATCH_LOW](#module_sparkfunAdc.COMP_LATCH_LOW) : <code>number</code>
  * [.COMP_LATCH_HIGH](#module_sparkfunAdc.COMP_LATCH_HIGH) : <code>number</code>
  * [.COMP_QD_DISABLE](#module_sparkfunAdc.COMP_QD_DISABLE) : <code>number</code>
  * [.COMP_QD_A1](#module_sparkfunAdc.COMP_QD_A1) : <code>number</code>
  * [.COMP_QD_A2](#module_sparkfunAdc.COMP_QD_A2) : <code>number</code>
  * [.COMP_QD_A4](#module_sparkfunAdc.COMP_QD_A4) : <code>number</code>

<a name="module_sparkfunAdc.Adc"></a>
### sparkfunAdc.Adc
**Kind**: static class of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  

* [.Adc](#module_sparkfunAdc.Adc)
  * [new exports.Adc([options])](#new_module_sparkfunAdc.Adc_new)
  * [.setConfig()](#module_sparkfunAdc.Adc+setConfig)
  * [.adcRead()](#module_sparkfunAdc.Adc+adcRead) ⇒ <code>number</code>

<a name="new_module_sparkfunAdc.Adc_new"></a>
#### new exports.Adc([options])
ADC Connection Object, by default will enable reading from AIN0 - GND


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [options] | <code>Object</code> |  | Options Object |
| [options.i2cBus] | <code>number</code> | <code>1</code> | i2c bus |
| [options.address] | <code>number</code> | <code>0x48</code> | i2c address |
| [options.opStat] | <code>number</code> | <code>sparkfunAdc.OP_STATUS_ZERO</code> | OpStatus |
| [options.inMux] | <code>number</code> | <code>sparkfunAdc.IN_MUX_AIN0_GND</code> | Input Select |
| [options.pga] | <code>number</code> | <code>sparkfunAdc.PGA_4_096V</code> | Amp Range |
| [options.opMode] | <code>number</code> | <code>sparkfunAdc.OP_MODE_CONT</code> | Operating Mode |
| [options.rate] | <code>number</code> | <code>sparkfunAdc.RATE_1600</code> | Data Rate |
| [options.compMode] | <code>number</code> | <code>sparkfunAdc.COMP_MODE_TRAD</code> | Comparator Mode |
| [options.compPol] | <code>number</code> | <code>sparkfunAdc.COMP_POL_LOW</code> | Comparator Polarity |
| [options.compLatchl] | <code>number</code> | <code>sparkfunAdc.COMP_LATCH_LOW</code> | Comparator Latch |
| [options.compQd] | <code>number</code> | <code>sparkfunAdc.COMP_QD_DISABLE</code> | Comparator Queue and Disable |
| [options.debug] | <code>boolean</code> | <code>false</code> | log reads and writes to console |

<a name="module_sparkfunAdc.Adc+setConfig"></a>
#### adc.setConfig()
Sets internal configuration command based on current values

**Kind**: instance method of <code>[Adc](#module_sparkfunAdc.Adc)</code>  
<a name="module_sparkfunAdc.Adc+adcRead"></a>
#### adc.adcRead() ⇒ <code>number</code>
Sends internal configuration command and immediately reads result

**Kind**: instance method of <code>[Adc](#module_sparkfunAdc.Adc)</code>  
**Returns**: <code>number</code> - - value from read operation  
<a name="module_sparkfunAdc.OP_STATUS_ZERO"></a>
### sparkfunAdc.OP_STATUS_ZERO : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0000</code>  
<a name="module_sparkfunAdc.OP_STATUS_ONE"></a>
### sparkfunAdc.OP_STATUS_ONE : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0080</code>  
<a name="module_sparkfunAdc.IN_MUX_AIN0_MINUS_AIN1"></a>
### sparkfunAdc.IN_MUX_AIN0_MINUS_AIN1 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0000</code>  
<a name="module_sparkfunAdc.IN_MUX_AIN0_MINUS_AIN3"></a>
### sparkfunAdc.IN_MUX_AIN0_MINUS_AIN3 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0010</code>  
<a name="module_sparkfunAdc.IN_MUX_AIN1_MINUS_AIN3"></a>
### sparkfunAdc.IN_MUX_AIN1_MINUS_AIN3 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0020</code>  
<a name="module_sparkfunAdc.IN_MUX_AIN2_MINUS_AIN3"></a>
### sparkfunAdc.IN_MUX_AIN2_MINUS_AIN3 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0030</code>  
<a name="module_sparkfunAdc.IN_MUX_AIN0_GND"></a>
### sparkfunAdc.IN_MUX_AIN0_GND : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0040</code>  
<a name="module_sparkfunAdc.IN_MUX_AIN1_GND"></a>
### sparkfunAdc.IN_MUX_AIN1_GND : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0050</code>  
<a name="module_sparkfunAdc.IN_MUX_AIN2_GND"></a>
### sparkfunAdc.IN_MUX_AIN2_GND : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0060</code>  
<a name="module_sparkfunAdc.IN_MUX_AIN3_GND"></a>
### sparkfunAdc.IN_MUX_AIN3_GND : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0070</code>  
<a name="module_sparkfunAdc.PGA_6_144V"></a>
### sparkfunAdc.PGA_6_144V : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0000</code>  
<a name="module_sparkfunAdc.PGA_4_096V"></a>
### sparkfunAdc.PGA_4_096V : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0002</code>  
<a name="module_sparkfunAdc.PGA_2_048V"></a>
### sparkfunAdc.PGA_2_048V : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0004</code>  
<a name="module_sparkfunAdc.PGA_1_024V"></a>
### sparkfunAdc.PGA_1_024V : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0006</code>  
<a name="module_sparkfunAdc.PGA_0_512V"></a>
### sparkfunAdc.PGA_0_512V : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0008</code>  
<a name="module_sparkfunAdc.OP_MODE_CONT"></a>
### sparkfunAdc.OP_MODE_CONT : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0000</code>  
<a name="module_sparkfunAdc.OP_MODE_SINGLE"></a>
### sparkfunAdc.OP_MODE_SINGLE : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0001</code>  
<a name="module_sparkfunAdc.RATE_128"></a>
### sparkfunAdc.RATE_128 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0000</code>  
<a name="module_sparkfunAdc.RATE_250"></a>
### sparkfunAdc.RATE_250 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x2000</code>  
<a name="module_sparkfunAdc.RATE_490"></a>
### sparkfunAdc.RATE_490 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x4000</code>  
<a name="module_sparkfunAdc.RATE_920"></a>
### sparkfunAdc.RATE_920 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x6000</code>  
<a name="module_sparkfunAdc.RATE_1600"></a>
### sparkfunAdc.RATE_1600 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x8000</code>  
<a name="module_sparkfunAdc.RATE_2400"></a>
### sparkfunAdc.RATE_2400 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0xA000</code>  
<a name="module_sparkfunAdc.RATE_3300"></a>
### sparkfunAdc.RATE_3300 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0xC000</code>  
<a name="module_sparkfunAdc.COMP_MODE_TRAD"></a>
### sparkfunAdc.COMP_MODE_TRAD : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0000</code>  
<a name="module_sparkfunAdc.COMP_MODE_WINDOW"></a>
### sparkfunAdc.COMP_MODE_WINDOW : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x1000</code>  
<a name="module_sparkfunAdc.COMP_POL_LOW"></a>
### sparkfunAdc.COMP_POL_LOW : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0000</code>  
<a name="module_sparkfunAdc.COMP_POL_HIGH"></a>
### sparkfunAdc.COMP_POL_HIGH : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0800</code>  
<a name="module_sparkfunAdc.COMP_LATCH_LOW"></a>
### sparkfunAdc.COMP_LATCH_LOW : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0000</code>  
<a name="module_sparkfunAdc.COMP_LATCH_HIGH"></a>
### sparkfunAdc.COMP_LATCH_HIGH : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0400</code>  
<a name="module_sparkfunAdc.COMP_QD_DISABLE"></a>
### sparkfunAdc.COMP_QD_DISABLE : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0300</code>  
<a name="module_sparkfunAdc.COMP_QD_A1"></a>
### sparkfunAdc.COMP_QD_A1 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0000</code>  
<a name="module_sparkfunAdc.COMP_QD_A2"></a>
### sparkfunAdc.COMP_QD_A2 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0000</code>  
<a name="module_sparkfunAdc.COMP_QD_A4"></a>
### sparkfunAdc.COMP_QD_A4 : <code>number</code>
**Kind**: static constant of <code>[sparkfunAdc](#module_sparkfunAdc)</code>  
**Default**: <code>0x0200</code>  
