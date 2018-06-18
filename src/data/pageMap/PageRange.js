/**
 * conjoon
 * (c) 2007-2018 conjoon.org
 * licensing@conjoon.org
 *
 * lib-cn_core
 * Copyright (C) 2018 Thorsten Suckow-Homberg/conjoon.org
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
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * A value object containing a range of ordered, subsequent pages.
 * The data is not mutable after instantiating it.
 *
 *      @example
 *          // throws, since the passed argument is not an ordered list
 *          Ext.create('conjoon.cn_core.data.pageMap.PageRange', {
 *              pages : [1, 2, 5]
 *          });
 *
 *          // throws, since a page range must not start with 0
 *          Ext.create('conjoon.cn_core.data.pageMap.PageRange', {
 *              pages : [0, 1, 2]
 *          });
 *
 *          var range = Ext.create('conjoon.cn_core.data.pageMap.PageRange', {
 *              pages : [3, 4, 5]
 *          });
 *          range.getPages(); // [3, 4, 5]
 *          range.getFirst(); // 3
 *          range.getLast(); // 5
 *          range.getLength(); // 3
 *
 *          // throws, pages was already set
 *          range.setPages([6,7,8]);
 *
 */
Ext.define('conjoon.cn_core.data.pageMap.PageRange', {


    config : {
        pages : undefined
    },


    /**
     * Creates a new instance of conjoon.cn_core.data.pageMap.PageRange.
     *
     * @param {Object} cfg
     * @param [Array} cfg.pages An array of pages to be represented by this instance
     *
     * @throws if pages is not specified
     */
    constructor : function(cfg) {

        cfg = cfg || {};

        if (!cfg.hasOwnProperty('pages')) {
            Ext.raise({
                msg : '\'pages\' must be specified',
                cfg : cfg
            });
        }

        this.initConfig(cfg);
    },


    /**
     * Sets the pages property of this object to the specified argument.
     *
     * @param {Array} pages
     *
     * @returns {Array}
     *
     * @throws if pages was already set, if pages is not an array or if it is
     * not a sequentially ordered list of numeric values, or if the first page is
     * less than 1
     */
    applyPages : function(pages) {

        var me = this;

        if (me.getPages() !== undefined) {
            Ext.raise({
                msg   : '\'pages\' was already defined',
                pages : me.getPages()
            })
        }

        if (!Ext.isArray(pages)) {
            Ext.raise({
                msg   : '\'pages\' must be an array',
                pages : pages
            })
        }

        pages = pages.map(function(v){return parseInt(v, 10)});

        if (pages[0] < 1) {
            Ext.raise({
                msg   : 'a page range\'s first page must not be less than 1',
                pages : pages
            })
        }

        for (var i = 1, len = pages.length; i < len; i++) {
            if (pages[i] - pages[i - 1] !== 1) {
                Ext.raise({
                    msg   : '\'pages\' was converted to a numeric list but it ' +
                            'seems to be not an ordered list of numeric data',
                    pages : pages
                })
            }
        }


        return pages;
    },

    /**
     * Returns the first page of this PageRange.
     *
     *  @return {Number}
     */
    getFirst : function() {
        return this.getPages()[0];
    },


    /**
     * Returns the last page of this PageRange.
     *
     *  @return {Number}
     */
    getLast : function() {
        return this.getPages()[this.getPages().length - 1];
    },


    /**
     * Returns the number of entries for this PageRange.
     *
     * @return {Number}
     */
    getLength : function() {
        return this.getPages().length;
    },


    /**
     * Checks if target's pages are the same pages from "this" PageRange.
     *
     * @param {conjoon.cn_core.data.pageMap.PageRange} target
     *
     * @return {Boolean} true if target represents the same PageRange as "this",
     * otherwise false
     *
     * @throws if target is not an instance of {conjoon.cn_core.data.pageMap.PageRange}
     */
    equalTo : function(target) {

        var me = this,
            tF, tL;

        if (!(target instanceof conjoon.cn_core.data.pageMap.PageRange)) {
            Ext.raise({
                msg    : '\'target\' must be an instance of conjoon.cn_core.data.pageMap.PageRange',
                target : target
            })
        }

        tF = target.getPages();
        tL = me.getLength();

        return me === target ||
               this.getPages().filter(function(v, index) {
                    return tF[index] && tF[index] === v;
               }).length === tL;

    },


    /**
     * Returns an array representation of this PageRange.
     *
     * @return {Array}
     */
    toArray : function() {

        // 0? see https://jsperf.com/cloning-arrays/3
        return this.getPages().slice(0);

    }


});