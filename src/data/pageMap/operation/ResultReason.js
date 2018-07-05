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
 * Static class serves as collection for status codes for PageMap operations.
 *
 * @example
 *     conjoon.cn_core.data.pageMap.operation.ResultReason.RECORD_NOT_FOUND // 404
 */
Ext.define('conjoon.cn_core.data.pageMap.operation.ResultReason', {

    statics : {

        RECORD_NOT_FOUND : 404,

        OK : 200,

        FEED_INDEXES_NOT_AVAILABLE : 500
    }

});