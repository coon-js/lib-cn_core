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
 * The PackageControllerMock used in this tests returns falsy when
 * its prelaunchHook() is called for the first time, after this it returns
 * always truthy.
 * This is needed since an Application tries to call launch() the first time
 * it is executed - checking the preLaunchHook of each controller if it returns
 * true, the initiates the main view if that is the case.
 * In most of the test cases we rely on the fact that there is no main view
 * created until we call launch() by hand.
 */
describe("coon.core.app.ApplicationTest", function (t) {

    let app = null;


    t.beforeEach(function () {
        Ext.isModern && Ext.viewport.Viewport.setup();
    });

    t.afterEach(function () {

        if (app) {
            app.destroy();
            app = null;
        }

        if (Ext.isModern && Ext.Viewport) {
            Ext.Viewport.destroy();
            Ext.Viewport = null;
        }

        coon.core.ConfigManager.configs = {};

    });

    // +----------------------------------------------------------------------------
    // |                    =~. Unit Tests .~=
    // +----------------------------------------------------------------------------
    t.requireOk("coon.core.app.PackageController", "coon.core.app.Application",  function () {


        t.it("Should create mainView based on ObjectConfig (classic only).", function (t) {

            let w;


            try {
                w = Ext.create("coon.core.app.Application", {
                    name        : "test",
                    mainView    : {
                        xtype : "panel",
                        viewModel : {
                            data : {
                                myTitle : "foo"
                            }
                        },
                        bind : {
                            title : "{myTitle}"
                        }
                    },
                    controllers : [
                        "coon.core.app.PackageController"
                    ]
                });
            } catch(exc) {
                if (Ext.isModern) {
                    t.expect(exc).toBeDefined();
                    return;
                }
            }
            w.getMainView().getViewModel().notify();
            t.expect(w.getMainView() instanceof Ext.Panel).toBeTruthy();
            t.expect(w.getMainView().getTitle()).toBe("foo");
            w.destroy();
            w = null;
        });


    });});
