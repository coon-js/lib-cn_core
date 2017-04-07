/**
 * conjoon
 * (c) 2007-2017 conjoon.org
 * licensing@conjoon.org
 *
 * lib-cn_core
 * Copyright (C) 2017 Thorsten Suckow-Homberg/conjoon.org
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

/**
 * Utility class for handling mime types.
 */
Ext.define('conjoon.cn_core.util.Mime', {


    singleton : true,

    /**
     * Returns true if the passed argument is a Mime-type representing an image
     * file, otherwise false.
     *
     * @param {String} mimeType
     *
     * @return {Boolean}
     */
    isImage : function(mimeType) {

        var mimeType = mimeType + '',
            reg      = /image\/./i;

        return mimeType.match(reg) !== null;
    }

});
