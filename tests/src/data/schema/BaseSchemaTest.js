/**
 * conjoon
 * (c) 2007-2016 conjoon.org
 * licensing@conjoon.org
 *
 * lib-cn_core
 * Copyright (C) 2016 Thorsten Suckow-Homberg/conjoon.org
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

describe('conjoon.cn_core.data.schema.BaseSchemaTest', function(t) {


// +----------------------------------------------------------------------------
// |                    =~. Unit Tests .~=
// +----------------------------------------------------------------------------

    t.it('Should throw exception when no id configured', function(t) {

        var exc;

        try {
            Ext.create('conjoon.cn_core.data.schema.BaseSchema', {
                namespace : 'mynamespace'
            });
        } catch (e) {
            exc = e;
        }

        t.expect(exc).toBeDefined();
        t.expect(exc.msg).toBeDefined();
        t.expect(exc.namespace).toBeUndefined();
        t.expect(exc.id).toBeUndefined();
    });

    t.it('Should throw exception when id configured to \"default\"', function(t) {

        var exc;

        try {
            Ext.create('conjoon.cn_core.data.schema.BaseSchema', {
                id        : 'default',
                namespace : 'mynamespace'
            });
        } catch (e) {
            exc = e;
        }

        t.expect(exc).toBeDefined();
        t.expect(exc.msg).toBeDefined();
        t.expect(exc.id).toBe("default");
    });

    t.it('Should throw exception when namespace is not configured', function(t) {

        var exc;

        try {
            Ext.create('conjoon.cn_core.data.schema.BaseSchema', {
                id : 'myId'
            });
        } catch (e) {
            exc = e;
        }

        t.expect(exc).toBeDefined();
        t.expect(exc.msg).toBeDefined();
        t.expect(exc.namespace).toBeUndefined();
        t.expect(exc.id).toBeUndefined();
    });

    /**
     * Test create
     */
    t.it('Should create an instance of conjoon.cn_core.data.schema.BaseSchema', function(t) {

        var schema = Ext.create('conjoon.cn_core.data.schema.BaseSchema', {
            id        : 'myId',
            namespace : 'myNamespace'
        });

        t.expect(schema instanceof conjoon.cn_core.data.schema.BaseSchema).toBeTruthy();

        t.expect(schema.id).toBe('myId');
        t.expect(schema.getNamespace()).toBe('myNamespace.');
    });


});
