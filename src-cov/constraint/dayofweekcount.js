/* automatically generated by JSCoverage - do not edit */
try {
  if (typeof top === 'object' && top !== null && typeof top.opener === 'object' && top.opener !== null) {
    // this is a browser window that was opened from another window

    if (! top.opener._$jscoverage) {
      top.opener._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null) {
    // this is a browser window

    try {
      if (typeof top.opener === 'object' && top.opener !== null && top.opener._$jscoverage) {
        top._$jscoverage = top.opener._$jscoverage;
      }
    }
    catch (e) {}

    if (! top._$jscoverage) {
      top._$jscoverage = {};
    }
  }
}
catch (e) {}

try {
  if (typeof top === 'object' && top !== null && top._$jscoverage) {
    _$jscoverage = top._$jscoverage;
  }
}
catch (e) {}
if (typeof _$jscoverage !== 'object') {
  _$jscoverage = {};
}
if (! _$jscoverage['constraint/dayofweekcount.js']) {
  _$jscoverage['constraint/dayofweekcount.js'] = [];
  _$jscoverage['constraint/dayofweekcount.js'][12] = 0;
  _$jscoverage['constraint/dayofweekcount.js'][31] = 0;
  _$jscoverage['constraint/dayofweekcount.js'][41] = 0;
  _$jscoverage['constraint/dayofweekcount.js'][51] = 0;
  _$jscoverage['constraint/dayofweekcount.js'][65] = 0;
  _$jscoverage['constraint/dayofweekcount.js'][79] = 0;
  _$jscoverage['constraint/dayofweekcount.js'][82] = 0;
  _$jscoverage['constraint/dayofweekcount.js'][84] = 0;
  _$jscoverage['constraint/dayofweekcount.js'][98] = 0;
  _$jscoverage['constraint/dayofweekcount.js'][101] = 0;
  _$jscoverage['constraint/dayofweekcount.js'][103] = 0;
}
_$jscoverage['constraint/dayofweekcount.js'].source = ["/**","* Day of Week Count Constraint (dc)","* (c) 2013 Bill, BunKat LLC.","*","* Definition for a day of week count constraint type. This constraint is used","* to specify schedules like '2nd Tuesday of every month'.","*","* Later is freely distributable under the MIT license.","* For all details and documentation:","*     http://github.com/bunkat/later","*/","later.dayOfWeekCount = later.dc = {","","  /**","  * The name of this constraint.","  */","  name: 'day of week count',","","  /**","  * The rough amount of seconds between start and end for this constraint.","  * (doesn't need to be exact)","  */","  range: 604800,","","  /**","  * The day of week count value of the specified date.","  *","  * @param {Date} d: The date to calculate the value of","  */","  val: function(d) {","    return d.dc || (d.dc = Math.floor((later.D.val(d)-1)/7)+1);","  },","","  /**","  * The minimum and maximum valid day values of the month specified.","  * Zero to specify the last day of week count of the month.","  *","  * @param {Date} d: The date indicating the month to find the extent of","  */","  extent: function(d) {","    return d.dcExtent || (d.dcExtent = [1, Math.ceil(later.D.extent(d)[1] /7)]);","  },","","  /**","  * The first day of the month with the same day of week count as the date","  * specified.","  *","  * @param {Date} d: The specified date","  */","  start: function(d) {","    return d.dcStart || (d.dcStart =","      later.date.next(","        later.Y.val(d),","        later.M.val(d),","        Math.max(1, ((later.dc.val(d) - 1) * 7) + 1 || 1)));","  },","","  /**","  * The last day of the month with the same day of week count as the date","  * specified.","  *","  * @param {Date} d: The specified date","  */","  end: function(d) {","    return d.dcEnd || (d.dcEnd =","      later.date.prev(","        later.Y.val(d),","        later.M.val(d),","        Math.min(later.dc.val(d) * 7, later.D.extent(d)[1])));","  },","","  /**","  * Returns the next earliest date with the day of week count specified.","  *","  * @param {Date} d: The starting date","  * @param {int} val: The desired value, must be within extent","  */","  next: function(d, val) {","    var month = later.date.nextRollover(d, val, later.dc, later.M),","        dcMax = later.dc.extent(month)[1];","","    val = val &gt; dcMax ? 1 : val || dcMax;","","    return later.date.next(","      later.Y.val(month),","      later.M.val(month),","      1 + (7 * (val - 1))","    );","  },","","  /**","  * Returns the closest previous date with the day of week count specified.","  *","  * @param {Date} d: The starting date","  * @param {int} val: The desired value, must be within extent","  */","  prev: function(d, val) {","    var month = later.date.prevRollover(d, val, later.dc, later.M),","        dcMax = later.dc.extent(month)[1];","","    val = val &gt; dcMax ? dcMax : val || dcMax;","","    return later.dc.end(later.date.prev(","      later.Y.val(month),","      later.M.val(month),","      1 + (7 * (val - 1))","    ));","  }","","};"];
_$jscoverage['constraint/dayofweekcount.js'][12]++;
later.dayOfWeekCount = (later.dc = {name: "day of week count", range: 604800, val: (function (d) {
  _$jscoverage['constraint/dayofweekcount.js'][31]++;
  return (d.dc || (d.dc = (Math.floor(((later.D.val(d) - 1) / 7)) + 1)));
}), extent: (function (d) {
  _$jscoverage['constraint/dayofweekcount.js'][41]++;
  return (d.dcExtent || (d.dcExtent = [1, Math.ceil((later.D.extent(d)[1] / 7))]));
}), start: (function (d) {
  _$jscoverage['constraint/dayofweekcount.js'][51]++;
  return (d.dcStart || (d.dcStart = later.date.next(later.Y.val(d), later.M.val(d), Math.max(1, ((((later.dc.val(d) - 1) * 7) + 1) || 1)))));
}), end: (function (d) {
  _$jscoverage['constraint/dayofweekcount.js'][65]++;
  return (d.dcEnd || (d.dcEnd = later.date.prev(later.Y.val(d), later.M.val(d), Math.min((later.dc.val(d) * 7), later.D.extent(d)[1]))));
}), next: (function (d, val) {
  _$jscoverage['constraint/dayofweekcount.js'][79]++;
  var month = later.date.nextRollover(d, val, later.dc, later.M), dcMax = later.dc.extent(month)[1];
  _$jscoverage['constraint/dayofweekcount.js'][82]++;
  val = ((val > dcMax)? 1: (val || dcMax));
  _$jscoverage['constraint/dayofweekcount.js'][84]++;
  return later.date.next(later.Y.val(month), later.M.val(month), (1 + (7 * (val - 1))));
}), prev: (function (d, val) {
  _$jscoverage['constraint/dayofweekcount.js'][98]++;
  var month = later.date.prevRollover(d, val, later.dc, later.M), dcMax = later.dc.extent(month)[1];
  _$jscoverage['constraint/dayofweekcount.js'][101]++;
  val = ((val > dcMax)? dcMax: (val || dcMax));
  _$jscoverage['constraint/dayofweekcount.js'][103]++;
  return later.dc.end(later.date.prev(later.Y.val(month), later.M.val(month), (1 + (7 * (val - 1)))));
})});
