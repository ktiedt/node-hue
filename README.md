# EARLY VERSION

This is an early version of the node-hue module. You can use this to get a first impression of accessing the hue hub with node.js. It is still far away from completion, but you can use it already to get the state of your hue bulbs and change their basic attributes. More features are planned and will be added in the next days and weeks. Also the module will be ported from JavaScript to CoffeeScript.

# What is Phillips hue

Philips hue is a LED lamp with a network hub which is controlled over the http protocol e.g. with an iOS app. You can find more information about this product at [http://www.meethue.com/en-US/](http://www.meethue.com/en-US/).

# Information about this module

<pre>
authors: 'Michel Bonkowski (mb@newscope.com) and Katharina Wittkowsky (kw@newscope.com)
company: 'newscope GmbH (dev@newscope.com)
website: <a href="http://www.newscope.com/">http://www.newscope.com/</a>
version: '0.0.2 alpha'
date: '08/11/2012'
</pre>


## Description

node-hue is a node module to access your hue hub and its bulbs with your node.js application. You can get the state of the hub and its bulbs and change e.g. color and brightness. Later you will be able to set all known options. At the moment for further information please take a look into the hueTest.js file.

## Thanks 

Thanks to Ross McKillop ([http://rsmck.co.uk/hue/](http://rsmck.co.uk/hue/)) for providing information about Phillips hue protocol. And also thanks to the authors of [async](https://github.com/caolan/async) and [request](https://github.com/caolan/async) which have been used in this node module.

## Disclaimer

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.