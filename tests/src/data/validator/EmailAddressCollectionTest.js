/**
 * coon.js
 * lib-cn_core
 * Copyright (C) 2019 Thorsten Suckow-Homberg https://github.com/coon-js/lib-cn_core
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

describe('coon.core.data.validator.EmailAddressCollectionTest', function(t) {


// +----------------------------------------------------------------------------
// |                    =~. Tests .~=
// +----------------------------------------------------------------------------

    t.it('Make sure class definition is as expected', function(t) {

        var vtor = Ext.create('coon.core.data.validator.EmailAddressCollection');

        // sanitize
        t.expect(vtor instanceof Ext.data.validator.Validator).toBe(true);
        t.expect(typeof(vtor.getMessage())).toBe('string');
        t.expect(vtor.alias).toContain('data.validator.cn_core-datavalidatoremailaddresscollection');

        vtor = null;
    });

    t.it('Make sure the validator works as expected', function(t) {

        var tests = [{
            config   : {allowEmpty : true},
            data     : [],
            expected : true
        }, {
            config   : {allowEmpty : true},
            data     : null,
            expected : false
        }, {
            data     : [],
            expected : false
        }, {
            data     : [{test : 'test'}],
            expected : false
        }, {
            data     : [{test : 'test'}, {address : 'mymailaddress'}],
            expected : false
        }, {
            data     : [{address : 'test'}, {address : 'mymailaddress'}],
            expected : true
        }, {
            data     : [null, {address : 'test'}, {address : 'mymailaddress'}],
            expected : false
        }];

        for (var i = 0, len = tests.length; i < len; i++) {
            var test   = tests[i],
                config = test.config ? test.config : undefined,
                vtor   = Ext.create(
                    'coon.core.data.validator.EmailAddressCollection',
                    config
                );

            if (test.expected === false) {
                t.expect(vtor.validate(test.data)).toContain('Must be');
            } else {
                t.expect(vtor.validate(test.data)).toBe(test.expected);
            }

            vtor = null;
        }

    });


});
