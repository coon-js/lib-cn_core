/**
 * coon.js
 * lib-cn_core
 * Copyright (C) 2020 Thorsten Suckow-Homberg https://github.com/coon-js/lib-cn_core
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without restriction,
 * including without limitation the rights to use, copy, modify, merge,
 * publish, distribute, sublicense, and/or sell copies of the Software,
 * and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 * DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
 * OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
 * USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

/**
 * Transformer for transforming plain text containing line breaks (\r, \r\n, \n)
 * into text that replaces the line breaks with "<br />"-tags.
 *
 * @example
 *  let text = "Please\n don't\n\n wrap\nme";
 *
 *  let transformer = Ext.create("coon.core.text.transformer.html.LineBreakTransformer");
 *
 *  transformer.transform(text);
 *
 *  // returns:
 *  // Please<br /> don't<br /><br /> wrap<br />me
 *
 */
Ext.define("coon.core.text.transformer.html.LineBreakTransformer", {


    /**
     * Invokes transforming the passed string.
     *
     * @param {String} value
     *
     * @return {String}
     */
    transform : function (text) {

        const regex = /(\r\n|\n|\r)/gm;

        text = text.replace(regex, matches => ("<br />"));

        return text;

    }

});
