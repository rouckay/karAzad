/* ========================
	jquery.min.js
========================= */
/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  'use strict'
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error('jQuery requires a window with a document')
            return t(e)
          })
    : t(e)
})('undefined' != typeof window ? window : this, function (C, e) {
  'use strict'
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e)
        }
      : function (e) {
          return t.concat.apply([], e)
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return (
        'function' == typeof e &&
        'number' != typeof e.nodeType &&
        'function' != typeof e.item
      )
    },
    x = function (e) {
      return null != e && e === e.window
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 }
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement('script')
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i)
    n.head.appendChild(o).parentNode.removeChild(o)
  }
  function w(e) {
    return null == e
      ? e + ''
      : 'object' == typeof e || 'function' == typeof e
      ? n[o.call(e)] || 'object'
      : typeof e
  }
  var f = '3.6.0',
    S = function (e, t) {
      return new S.fn.init(e, t)
    }
  function p(e) {
    var t = !!e && 'length' in e && e.length,
      n = w(e)
    return (
      !m(e) &&
      !x(e) &&
      ('array' === n ||
        0 === t ||
        ('number' == typeof t && 0 < t && t - 1 in e))
    )
  }
  ;(S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this)
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e]
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e)
        return (t.prevObject = this), t
      },
      each: function (e) {
        return S.each(this, e)
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e)
          })
        )
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments))
      },
      first: function () {
        return this.eq(0)
      },
      last: function () {
        return this.eq(-1)
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2
          })
        )
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2
          })
        )
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0)
        return this.pushStack(0 <= n && n < t ? [this[n]] : [])
      },
      end: function () {
        return this.prevObject || this.constructor()
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1
        for (
          'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            'object' == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r))
        return a
      }),
    S.extend({
      expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e)
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n
        return (
          !(!e || '[object Object]' !== o.call(e)) &&
          (!(t = r(e)) ||
            ('function' ==
              typeof (n = v.call(t, 'constructor') && t.constructor) &&
              a.call(n) === l))
        )
      },
      isEmptyObject: function (e) {
        var t
        for (t in e) return !1
        return !0
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n)
      },
      each: function (e, t) {
        var n,
          r = 0
        if (p(e)) {
          for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break
        return e
      },
      makeArray: function (e, t) {
        var n = t || []
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, 'string' == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        )
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n)
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]
        return (e.length = i), e
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i])
        return r
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = []
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i)
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i)
        return g(a)
      },
      guid: 1,
      support: y,
    }),
    'function' == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
        ' '
      ),
      function (e, t) {
        n['[object ' + t + ']'] = t.toLowerCase()
      }
    )
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = 'sizzle' + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n
        return -1
      },
      R =
        'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      I =
        '(?:\\\\[\\da-fA-F]{1,6}' +
        M +
        '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      W =
        '\\[' +
        M +
        '*(' +
        I +
        ')(?:' +
        M +
        '*([*^$|!~]?=)' +
        M +
        '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
        I +
        '))|)' +
        M +
        '*\\]',
      F =
        ':(' +
        I +
        ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
        W +
        ')*)|.*)\\)|)',
      B = new RegExp(M + '+', 'g'),
      $ = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      _ = new RegExp('^' + M + '*,' + M + '*'),
      z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      U = new RegExp(M + '|>'),
      X = new RegExp(F),
      V = new RegExp('^' + I + '$'),
      G = {
        ID: new RegExp('^#(' + I + ')'),
        CLASS: new RegExp('^\\.(' + I + ')'),
        TAG: new RegExp('^(' + I + '|[*])'),
        ATTR: new RegExp('^' + W),
        PSEUDO: new RegExp('^' + F),
        CHILD: new RegExp(
          '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
            M +
            '*(even|odd|(([+-]|)(\\d*)n|)' +
            M +
            '*(?:([+-]|)' +
            M +
            '*(\\d+)|))' +
            M +
            '*\\)|)',
          'i'
        ),
        bool: new RegExp('^(?:' + R + ')$', 'i'),
        needsContext: new RegExp(
          '^' +
            M +
            '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
            M +
            '*((?:-\\d)?\\d*)' +
            M +
            '*\\)|)(?=[^-]|$)',
          'i'
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'),
      ne = function (e, t) {
        var n = '0x' + e.slice(1) - 65536
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        )
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? '\0' === e
            ? '\ufffd'
            : e.slice(0, -1) +
              '\\' +
              e.charCodeAt(e.length - 1).toString(16) +
              ' '
          : '\\' + e
      },
      oe = function () {
        T()
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase()
        },
        { dir: 'parentNode', next: 'legend' }
      )
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t))
            }
          : function (e, t) {
              var n = e.length,
                r = 0
              while ((e[n++] = t[r++]));
              e.length = n - 1
            },
      }
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9
      if (
        ((n = n || []),
        'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n
              if (a.id === i) return n.push(a), n
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n
          }
        if (
          d.qsa &&
          !N[t + ' '] &&
          (!v || !v.test(t)) &&
          (1 !== p || 'object' !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ;((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute('id'))
                ? (s = s.replace(re, ie))
                : e.setAttribute('id', (s = S))),
              (o = (l = h(t)).length)
            while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + xe(l[o])
            c = l.join(',')
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n
          } catch (e) {
            N(t, !0)
          } finally {
            s === S && e.removeAttribute('id')
          }
        }
      }
      return g(t.replace($, '$1'), e, n, r)
    }
    function ue() {
      var r = []
      return function e(t, n) {
        return (
          r.push(t + ' ') > b.cacheLength && delete e[r.shift()],
          (e[t + ' '] = n)
        )
      }
    }
    function le(e) {
      return (e[S] = !0), e
    }
    function ce(e) {
      var t = C.createElement('fieldset')
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null)
      }
    }
    function fe(e, t) {
      var n = e.split('|'),
        r = n.length
      while (r--) b.attrHandle[n[r]] = t
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex
      if (r) return r
      if (n) while ((n = n.nextSibling)) if (n === t) return -1
      return e ? 1 : -1
    }
    function de(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t
      }
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase()
        return ('input' === t || 'button' === t) && e.type === n
      }
    }
    function ge(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t
      }
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]))
          })
        )
      })
    }
    function ye(e) {
      return e && 'undefined' != typeof e.getElementsByTagName && e
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement
        return !Y.test(t || (n && n.nodeName) || 'HTML')
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener('unload', oe, !1)
                : n.attachEvent && n.attachEvent('onunload', oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement('div')),
                'undefined' != typeof e.querySelectorAll &&
                  !e.querySelectorAll(':scope fieldset div').length
              )
            })),
            (d.attributes = ce(function (e) {
              return (e.className = 'i'), !e.getAttribute('className')
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment('')),
                !e.getElementsByTagName('*').length
              )
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              )
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne)
                  return function (e) {
                    return e.getAttribute('id') === t
                  }
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n = t.getElementById(e)
                    return n ? [n] : []
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne)
                  return function (e) {
                    var t =
                      'undefined' != typeof e.getAttributeNode &&
                      e.getAttributeNode('id')
                    return t && t.value === n
                  }
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e)
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e)
                        return [o]
                      ;(i = t.getElementsByName(e)), (r = 0)
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode('id')) && n.value === e)
                          return [o]
                    }
                    return []
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return 'undefined' != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e)
                  if ('*' === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n)
                    return r
                  }
                  return o
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ('undefined' != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e)
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t
                ;(a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length ||
                    v.push('\\[' + M + '*(?:value|' + R + ')'),
                  e.querySelectorAll('[id~=' + S + '-]').length || v.push('~='),
                  (t = C.createElement('input')).setAttribute('name', ''),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll(':checked').length || v.push(':checked'),
                  e.querySelectorAll('a#' + S + '+*').length ||
                    v.push('.#.+[+~]'),
                  e.querySelectorAll('\\\f'),
                  v.push('[\\r\\n\\f]')
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>"
                var t = C.createElement('input')
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length &&
                    v.push('name' + M + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length &&
                    v.push(':enabled', ':disabled'),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length &&
                    v.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  v.push(',.*:')
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                ;(d.disconnectedMatch = c.call(e, '*')),
                  c.call(e, "[s!='']:x"),
                  s.push('!=', F)
              }),
            (v = v.length && new RegExp(v.join('|'))),
            (s = s.length && new RegExp(s.join('|'))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    )
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0
                    return !1
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  )
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t]
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0
                  if (i === o) return pe(e, t)
                  n = e
                  while ((n = n.parentNode)) a.unshift(n)
                  n = t
                  while ((n = n.parentNode)) s.unshift(n)
                  while (a[r] === s[r]) r++
                  return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                })),
          C
        )
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t)
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + ' '] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t)
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n
        } catch (e) {
          N(t, !0)
        }
      return 0 < se(t, C, null, [e]).length
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t)
    }),
    (se.attr = function (e, t) {
      ;(e.ownerDocument || e) != C && T(e)
      var n = b.attrHandle[t.toLowerCase()],
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null
    }),
    (se.escape = function (e) {
      return (e + '').replace(re, ie)
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e)
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(j),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i))
        while (r--) e.splice(n[r], 1)
      }
      return (u = null), e
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ('string' == typeof e.textContent) return e.textContent
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e)
          } else if (3 === i || 4 === i) return e.nodeValue
        } else while ((t = e[r++])) n += o(t)
        return n
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          '>': { dir: 'parentNode', first: !0 },
          ' ': { dir: 'parentNode' },
          '+': { dir: 'previousSibling', first: !0 },
          '~': { dir: 'previousSibling' },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)),
              '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
              e.slice(0, 4)
            )
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ('even' === e[3] || 'odd' === e[3]))),
                  (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                : e[3] && se.error(e[0]),
              e
            )
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2]
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || '')
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(')', n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3))
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase()
            return '*' === e
              ? function () {
                  return !0
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t
                }
          },
          CLASS: function (e) {
            var t = m[e + ' ']
            return (
              t ||
              ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                m(e, function (e) {
                  return t.test(
                    ('string' == typeof e.className && e.className) ||
                      ('undefined' != typeof e.getAttribute &&
                        e.getAttribute('class')) ||
                      ''
                  )
                }))
            )
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n)
              return null == t
                ? '!=' === r
                : !r ||
                    ((t += ''),
                    '=' === r
                      ? t === i
                      : '!=' === r
                      ? t !== i
                      : '^=' === r
                      ? i && 0 === t.indexOf(i)
                      : '*=' === r
                      ? i && -1 < t.indexOf(i)
                      : '$=' === r
                      ? i && t.slice(-i.length) === i
                      : '~=' === r
                      ? -1 < (' ' + t.replace(B, ' ') + ' ').indexOf(i)
                      : '|=' === r &&
                        (t === i || t.slice(0, i.length + 1) === i + '-'))
            }
          },
          CHILD: function (h, e, t, g, v) {
            var y = 'nth' !== h.slice(0, 3),
              m = 'last' !== h.slice(-4),
              x = 'of-type' === e
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? 'nextSibling' : 'previousSibling',
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1
                        u = l = 'only' === h && !u && 'nextSibling'
                      }
                      return !0
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      ;(d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s])
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d]
                          break
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g)
                  }
                }
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error('unsupported pseudo: ' + e)
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, '', o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i])
                    })
                  : function (e) {
                      return a(e, 0, t)
                    })
              : a
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, '$1'))
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i))
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop()
                }
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length
            }
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t)
              }
            )
          }),
          lang: le(function (n) {
            return (
              V.test(n || '') || se.error('unsupported lang: ' + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute('xml:lang') || e.getAttribute('lang'))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-')
                    )
                } while ((e = e.parentNode) && 1 === e.nodeType)
                return !1
              }
            )
          }),
          target: function (e) {
            var t = n.location && n.location.hash
            return t && t.slice(1) === e.id
          },
          root: function (e) {
            return e === a
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            )
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase()
            return (
              ('input' === t && !!e.checked) || ('option' === t && !!e.selected)
            )
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1
            return !0
          },
          parent: function (e) {
            return !b.pseudos.empty(e)
          },
          header: function (e) {
            return J.test(e.nodeName)
          },
          input: function (e) {
            return Q.test(e.nodeName)
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase()
            return ('input' === t && 'button' === e.type) || 'button' === t
          },
          text: function (e) {
            var t
            return (
              'input' === e.nodeName.toLowerCase() &&
              'text' === e.type &&
              (null == (t = e.getAttribute('type')) ||
                'text' === t.toLowerCase())
            )
          },
          first: ve(function () {
            return [0]
          }),
          last: ve(function (e, t) {
            return [t - 1]
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n]
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n)
            return e
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n)
            return e
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r)
            return e
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
            return e
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e)
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e)
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value
      return r
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && 'parentNode' === c,
        p = r++
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n)
            return !1
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p]
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2])
                    if (((i[c] = a)[2] = s(e, t, n))) return !0
                  }
            return !1
          }
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length
            while (r--) if (!i[r](e, t, n)) return !1
            return !0
          }
        : i[0]
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)))
      return a
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n)
                return n
              })(h || '*', n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f
          if ((g && g(f, p, n, r), v)) {
            ;(i = Te(p, u)), v(i, [], n, r), (o = i.length)
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
          }
          if (e) {
            if (y || d) {
              if (y) {
                ;(i = []), (o = p.length)
                while (o--) (a = p[o]) && i.push((f[o] = a))
                y(null, (p = []), i, r)
              }
              o = p.length
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a))
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p)
        })
      )
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[' '],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e)
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n))
              return (i = null), r
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)]
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: ' ' === e[s - 2].type ? '*' : '' })
                ).replace($, '$1'),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            )
          }
          c.push(t)
        }
      return we(c)
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + ' ']
          if (l) return t ? 0 : l.slice(0)
          ;(a = e), (s = []), (u = b.preFilter)
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, ' ') }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)))
            if (!n) break
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + ' ']
          if (!a) {
            t || (t = h(e)), (n = t.length)
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a)
            ;(a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = '0',
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG('*', i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    ;(a = 0), t || o.ownerDocument == C || (T(o), (n = !E))
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o)
                        break
                      }
                    i && (k = h)
                  }
                  m && ((o = !s && o) && u--, e && c.push(o))
                }
                if (((u += l), m && l !== u)) {
                  a = 0
                  while ((s = y[a++])) s(c, f, t, n)
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r))
                    f = Te(f)
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r)
                }
                return i && ((k = h), (w = p)), c
              }),
              m ? le(r) : r)
            )).selector = e
          }
          return a
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = 'function' == typeof e && e,
            c = !r && h((e = l.selector || e))
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              'ID' === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length))
            }
            i = G.needsContext.test(e) ? 0 : o.length
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n
                break
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          )
        }),
      (d.sortStable = S.split('').sort(j).join('') === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement('fieldset'))
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          '#' === e.firstChild.getAttribute('href')
        )
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2)
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = '<input/>'),
            e.firstChild.setAttribute('value', ''),
            '' === e.firstChild.getAttribute('value')
          )
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled')
      }) ||
        fe(R, function (e, t, n) {
          var r
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null
        }),
      se
    )
  })(C)
  ;(S.find = d),
    (S.expr = d.selectors),
    (S.expr[':'] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape)
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break
          r.push(e)
        }
      return r
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e)
      return n
    },
    k = S.expr.match.needsContext
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r
        })
      : 'string' != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r
        })
      : S.filter(n, e, r)
  }
  ;(S.filter = function (e, t, n) {
    var r = t[0]
    return (
      n && (e = ':not(' + e + ')'),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType
            })
          )
    )
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this
        if ('string' != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0
            })
          )
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n)
        return 1 < r ? S.uniqueSort(n) : n
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1))
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0))
      },
      is: function (e) {
        return !!j(this, 'string' == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length
      },
    })
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
  ;((S.fn.init = function (e, t, n) {
    var r, i
    if (!e) return this
    if (((n = n || D), 'string' == typeof e)) {
      if (
        !(r =
          '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
        return this
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      )
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this)
  }).prototype = S.fn),
    (D = S(E))
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 }
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0
      })
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = 'string' != typeof e && S(e)
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n)
              break
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
    },
    index: function (e) {
      return e
        ? 'string' == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode
          return t && 11 !== t.nodeType ? t : null
        },
        parents: function (e) {
          return h(e, 'parentNode')
        },
        parentsUntil: function (e, t, n) {
          return h(e, 'parentNode', n)
        },
        next: function (e) {
          return O(e, 'nextSibling')
        },
        prev: function (e) {
          return O(e, 'previousSibling')
        },
        nextAll: function (e) {
          return h(e, 'nextSibling')
        },
        prevAll: function (e) {
          return h(e, 'previousSibling')
        },
        nextUntil: function (e, t, n) {
          return h(e, 'nextSibling', n)
        },
        prevUntil: function (e, t, n) {
          return h(e, 'previousSibling', n)
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e)
        },
        children: function (e) {
          return T(e.firstChild)
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, 'template') && (e = e.content || e),
              S.merge([], e.childNodes))
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e)
          return (
            'Until' !== r.slice(-5) && (t = e),
            t && 'string' == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          )
        }
      }
    )
  var P = /[^\x20\t\r\n\f]+/g
  function R(e) {
    return e
  }
  function M(e) {
    throw e
  }
  function I(e, t, n, r) {
    var i
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r))
    } catch (e) {
      n.apply(void 0, [e])
    }
  }
  ;(S.Callbacks = function (r) {
    var e, n
    r =
      'string' == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0
          }),
          n)
        : S.extend({}, r)
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift()
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1))
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : '')
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && 'string' !== w(t) && n(t)
                })
              })(arguments),
              t && !i && c()),
            this
          )
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--
            }),
            this
          )
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length
        },
        empty: function () {
          return s && (s = []), this
        },
        disable: function () {
          return (a = u = []), (s = t = ''), this
        },
        disabled: function () {
          return !s
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ''), this
        },
        locked: function () {
          return !!a
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          )
        },
        fire: function () {
          return f.fireWith(this, arguments), this
        },
        fired: function () {
          return !!o
        },
      }
    return f
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              'notify',
              'progress',
              S.Callbacks('memory'),
              S.Callbacks('memory'),
              2,
            ],
            [
              'resolve',
              'done',
              S.Callbacks('once memory'),
              S.Callbacks('once memory'),
              0,
              'resolved',
            ],
            [
              'reject',
              'fail',
              S.Callbacks('once memory'),
              S.Callbacks('once memory'),
              1,
              'rejected',
            ],
          ],
          i = 'pending',
          a = {
            state: function () {
              return i
            },
            always: function () {
              return s.done(arguments).fail(arguments), this
            },
            catch: function (e) {
              return a.then(null, e)
            },
            pipe: function () {
              var i = arguments
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]]
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments)
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + 'With'](this, n ? [e] : arguments)
                  })
                }),
                  (i = null)
              }).promise()
            },
            then: function (t, n, r) {
              var u = 0
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError('Thenable self-resolution')
                        ;(t =
                          e &&
                          ('object' == typeof e || 'function' == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r))
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e()
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r))
                          }
                        }
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t))
                }
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M))
              }).promise()
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a
            },
          },
          s = {}
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5]
            ;(a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + 'With'](this === s ? void 0 : this, arguments), this
                )
              }),
              (s[t[0] + 'With'] = n.fireWith)
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        )
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              ;(r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i)
            }
          }
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          'pending' === o.state() || m(i[t] && i[t].then))
        )
          return o.then()
        while (t--) I(i[t], a(t), o.reject)
        return o.promise()
      },
    })
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
  ;(S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t)
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e
      })
    })
  var F = S.Deferred()
  function B() {
    E.removeEventListener('DOMContentLoaded', B),
      C.removeEventListener('load', B),
      S.ready()
  }
  ;(S.fn.ready = function (e) {
    return (
      F.then(e)['catch'](function (e) {
        S.readyException(e)
      }),
      this
    )
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        ;(!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S])
      },
    }),
    (S.ready.then = F.then),
    'complete' === E.readyState ||
    ('loading' !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener('DOMContentLoaded', B),
        C.addEventListener('load', B))
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n
      if ('object' === w(n)) for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a)
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n)
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
    },
    _ = /^-ms-/,
    z = /-([a-z])/g
  function U(e, t) {
    return t.toUpperCase()
  }
  function X(e) {
    return e.replace(_, 'ms-').replace(z, U)
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }
  function G() {
    this.expando = S.expando + G.uid++
  }
  ;(G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando]
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        )
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e)
        if ('string' == typeof t) i[X(t)] = n
        else for (r in t) i[X(r)] = t[r]
        return i
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)]
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t)
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando]
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length
            while (n--) delete r[t[n]]
          }
          ;(void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando])
        }
      },
      hasData: function (e) {
        var t = e[this.expando]
        return void 0 !== t && !S.isEmptyObject(t)
      },
    })
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g
  function Z(e, t, n) {
    var r, i
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = 'data-' + t.replace(K, '-$&').toLowerCase()),
        'string' == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            'true' === (i = n) ||
            ('false' !== i &&
              ('null' === i
                ? null
                : i === +i + ''
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i))
        } catch (e) {}
        Q.set(e, t, n)
      } else n = void 0
    return n
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e)
    },
    data: function (e, t, n) {
      return Q.access(e, t, n)
    },
    removeData: function (e, t) {
      Q.remove(e, t)
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n)
    },
    _removeData: function (e, t) {
      Y.remove(e, t)
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))
          ) {
            t = a.length
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf('data-') &&
                ((r = X(r.slice(5))), Z(o, r, i[r]))
            Y.set(o, 'hasDataAttrs', !0)
          }
          return i
        }
        return 'object' == typeof n
          ? this.each(function () {
              Q.set(this, n)
            })
          : $(
              this,
              function (e) {
                var t
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0
                this.each(function () {
                  Q.set(this, n, e)
                })
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            )
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e)
        })
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r
        if (e)
          return (
            (t = (t || 'fx') + 'queue'),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          )
      },
      dequeue: function (e, t) {
        t = t || 'fx'
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t)
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t)
              },
              o
            )),
          !r && o && o.empty.fire()
      },
      _queueHooks: function (e, t) {
        var n = t + 'queueHooks'
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks('once memory').add(function () {
              Y.remove(e, [t + 'queue', n])
            }),
          })
        )
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n)
                S._queueHooks(this, t),
                  'fx' === t && 'inprogress' !== e[0] && S.dequeue(this, t)
              })
        )
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e)
        })
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', [])
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o])
          }
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx')
        while (a--)
          (n = Y.get(o[a], e + 'queueHooks')) &&
            n.empty &&
            (r++, n.empty.add(s))
        return s(), i.promise(t)
      },
    })
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e)
    },
    oe = { composed: !0 }
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      )
    })
  var ae = function (e, t) {
    return (
      'none' === (e = t || e).style.display ||
      ('' === e.style.display && ie(e) && 'none' === S.css(e, 'display'))
    )
  }
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur()
          }
        : function () {
            return S.css(e, t, '')
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ('px' !== l && +u)) &&
        te.exec(S.css(e, t))
    if (c && c[3] !== l) {
      ;(u /= 2), (l = l || c[3]), (c = +u || 1)
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o)
      ;(c *= 2), S.style(e, t, c + l), (n = n || [])
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    )
  }
  var ue = {}
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n &&
              ((l[c] = Y.get(r, 'display') || null),
              l[c] || (r.style.display = '')),
            '' === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, 'display')),
                  o.parentNode.removeChild(o),
                  'none' === u && (u = 'block'),
                  (ue[s] = u)))))
          : 'none' !== n && ((l[c] = 'none'), Y.set(r, 'display', n)))
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c])
    return e
  }
  S.fn.extend({
    show: function () {
      return le(this, !0)
    },
    hide: function () {
      return le(this)
    },
    toggle: function (e) {
      return 'boolean' == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide()
          })
    },
  })
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i
  ;(ce = E.createDocumentFragment().appendChild(E.createElement('div'))),
    (fe = E.createElement('input')).setAttribute('type', 'radio'),
    fe.setAttribute('checked', 'checked'),
    fe.setAttribute('name', 't'),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = '<textarea>x</textarea>'),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = '<option></option>'),
    (y.option = !!ce.lastChild)
  var ge = {
    thead: [1, '<table>', '</table>'],
    col: [2, '<table><colgroup>', '</colgroup></table>'],
    tr: [2, '<table><tbody>', '</tbody></table>'],
    td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
    _default: [0, '', ''],
  }
  function ve(e, t) {
    var n
    return (
      (n =
        'undefined' != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || '*')
          : 'undefined' != typeof e.querySelectorAll
          ? e.querySelectorAll(t || '*')
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    )
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'))
  }
  ;(ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", '</select>'])
  var me = /<|&#?\w+;/
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ('object' === w(o)) S.merge(p, o.nodeType ? [o] : o)
        else if (me.test(o)) {
          ;(a = a || f.appendChild(t.createElement('div'))),
            (s = (de.exec(o) || ['', ''])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0])
          while (c--) a = a.lastChild
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = '')
        } else p.push(t.createTextNode(o))
    ;(f.textContent = ''), (d = 0)
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o)
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), 'script')), l && ye(a), n)
      ) {
        c = 0
        while ((o = a[c++])) he.test(o.type || '') && n.push(o)
      }
    return f
  }
  var be = /^([^.]*)(?:\.(.+)|)/
  function we() {
    return !0
  }
  function Te() {
    return !1
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement
          } catch (e) {}
        })()) ==
      ('focus' === t)
    )
  }
  function Ee(e, t, n, r, i, o) {
    var a, s
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
        Ee(e, s, n, r, t[s], o)
      return e
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ('string' == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Te
    else if (!i) return e
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments)
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n)
      })
    )
  }
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i)
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation()
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n && n.value
                )
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation())
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we)
  }
  ;(S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t)
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return 'undefined' != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0
              }),
          (l = (e = (e || '').match(P) || ['']).length)
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join('.'),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0))
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e)
      if (v && (u = v.events)) {
        l = (t = (t || '').match(P) || ['']).length
        while (l--)
          if (
            ((d = g = (s = be.exec(t[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d)
          ) {
            ;(f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')),
              (a = o = p.length)
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c))
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d])
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0)
        S.isEmptyObject(u) && Y.remove(e, 'handle events')
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, 'events') || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {}
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        ;(a = S.event.handlers.call(this, u, l)), (t = 0)
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          ;(u.currentTarget = i.elem), (n = 0)
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()))
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r)
            o.length && s.push({ elem: l, handlers: o })
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      )
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent)
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t]
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          })
        },
      })
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e)
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e
          return (
            pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click', we),
            !1
          )
        },
        trigger: function (e) {
          var t = this || e
          return (
            pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click'), !0
          )
        },
        _default: function (e) {
          var t = e.target
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, 'input') &&
              Y.get(t, 'click')) ||
            A(t, 'a')
          )
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result)
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n)
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t)
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? we
              : Te),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0)
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent
        ;(this.isDefaultPrevented = we),
          e && !this.isSimulated && e.preventDefault()
      },
      stopPropagation: function () {
        var e = this.originalEvent
        ;(this.isPropagationStopped = we),
          e && !this.isSimulated && e.stopPropagation()
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent
        ;(this.isImmediatePropagationStopped = we),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation()
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1
        },
        trigger: function () {
          return Se(this, e), !0
        },
        _default: function () {
          return !0
        },
        delegateType: t,
      }
    }),
    S.each(
      {
        mouseenter: 'mouseover',
        mouseleave: 'mouseout',
        pointerenter: 'pointerover',
        pointerleave: 'pointerout',
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            )
          },
        }
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r)
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1)
      },
      off: function (e, t, n) {
        var r, i
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + '.' + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          )
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i])
          return this
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t)
          })
        )
      },
    })
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
  function je(e, t) {
    return (
      (A(e, 'table') &&
        A(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
        S(e).children('tbody')[0]) ||
      e
    )
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
  }
  function qe(e) {
    return (
      'true/' === (e.type || '').slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute('type'),
      e
    )
  }
  function Le(e, t) {
    var n, r, i, o, a, s
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, 'handle events'), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n])
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a))
    }
  }
  function He(n, r, i, o) {
    r = g(r)
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d)
    if (h || (1 < f && 'string' == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e)
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o)
      })
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, 'script'), De)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, 'script'))),
          i.call(n[c], u, c)
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || '') &&
              !Y.access(u, 'globalEval') &&
              S.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute('nonce') },
                    l
                  )
                : b(u.textContent.replace(Ne, ''), u, l))
    }
    return n
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r))
    return e
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e)
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ('input' !== l && 'textarea' !== l) ||
                (u.defaultValue = s.defaultValue)
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Le(o[r], a[r])
        else Le(e, c)
      return 0 < (a = ve(c, 'script')).length && ye(a, !f && ve(e, 'script')), c
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle)
            n[Y.expando] = void 0
          }
          n[Q.expando] && (n[Q.expando] = void 0)
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0)
      },
      remove: function (e) {
        return Oe(this, e)
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  ;(1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e)
                })
          },
          null,
          e,
          arguments.length
        )
      },
      append: function () {
        return He(this, arguments, function (e) {
          ;(1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            je(this, e).appendChild(e)
        })
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = je(this, e)
            t.insertBefore(e, t.firstChild)
          }
        })
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this)
        })
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ''))
        return this
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t)
          })
        )
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML
            if (
              'string' == typeof e &&
              !ke.test(e) &&
              !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e)
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e))
                t = 0
              } catch (e) {}
            }
            t && this.empty().append(e)
          },
          null,
          e,
          arguments.length
        )
      },
      replaceWith: function () {
        var n = []
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this))
          },
          n
        )
      },
    }),
    S.each(
      {
        appendTo: 'append',
        prependTo: 'prepend',
        insertBefore: 'before',
        insertAfter: 'after',
        replaceAll: 'replaceWith',
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get())
          return this.pushStack(n)
        }
      }
    )
  var Pe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    Re = function (e) {
      var t = e.ownerDocument.defaultView
      return (t && t.opener) || (t = C), t.getComputedStyle(e)
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {}
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i])
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i]
      return r
    },
    Ie = new RegExp(ne.join('|'), 'i')
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style
    return (
      (n = n || Re(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Pe.test(a) &&
          Ie.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    )
  }
  function Fe(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments)
        delete this.get
      },
    }
  }
  !(function () {
    function e() {
      if (l) {
        ;(u.style.cssText =
          'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (l.style.cssText =
            'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          re.appendChild(u).appendChild(l)
        var e = C.getComputedStyle(l)
        ;(n = '1%' !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = '60%'),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = 'absolute'),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null)
      }
    }
    function t(e) {
      return Math.round(parseFloat(e))
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement('div'),
      l = E.createElement('div')
    l.style &&
      ((l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (y.clearCloneStyle = 'content-box' === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r
        },
        pixelBoxStyles: function () {
          return e(), o
        },
        pixelPosition: function () {
          return e(), n
        },
        reliableMarginLeft: function () {
          return e(), s
        },
        scrollboxSize: function () {
          return e(), i
        },
        reliableTrDimensions: function () {
          var e, t, n, r
          return (
            null == a &&
              ((e = E.createElement('table')),
              (t = E.createElement('tr')),
              (n = E.createElement('div')),
              (e.style.cssText =
                'position:absolute;left:-11111px;border-collapse:separate'),
              (t.style.cssText = 'border:1px solid'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              (n.style.display = 'block'),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a =
                parseInt(r.height, 10) +
                  parseInt(r.borderTopWidth, 10) +
                  parseInt(r.borderBottomWidth, 10) ===
                t.offsetHeight),
              re.removeChild(e)),
            a
          )
        },
      }))
  })()
  var Be = ['Webkit', 'Moz', 'ms'],
    $e = E.createElement('div').style,
    _e = {}
  function ze(e) {
    var t = S.cssProps[e] || _e[e]
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length
              while (n--) if ((e = Be[n] + t) in $e) return e
            })(e) || e))
    )
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ge = { letterSpacing: '0', fontWeight: '400' }
  function Ye(e, t, n) {
    var r = te.exec(t)
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t
  }
  function Qe(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0
    if (n === (r ? 'border' : 'content')) return 0
    for (; a < 4; a += 2)
      'margin' === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ('content' === n && (u -= S.css(e, 'padding' + ne[a], !0, i)),
            'margin' !== n &&
              (u -= S.css(e, 'border' + ne[a] + 'Width', !0, i)))
          : ((u += S.css(e, 'padding' + ne[a], !0, i)),
            'padding' !== n
              ? (u += S.css(e, 'border' + ne[a] + 'Width', !0, i))
              : (s += S.css(e, 'border' + ne[a] + 'Width', !0, i)))
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    )
  }
  function Je(e, t, n) {
    var r = Re(e),
      i =
        (!y.boxSizingReliable() || n) &&
        'border-box' === S.css(e, 'boxSizing', !1, r),
      o = i,
      a = We(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1)
    if (Pe.test(a)) {
      if (!n) return a
      a = 'auto'
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, 'tr')) ||
        'auto' === a ||
        (!parseFloat(a) && 'inline' === S.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === S.css(e, 'boxSizing', !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Qe(e, t, n || (i ? 'border' : 'content'), o, r, a) +
        'px'
    )
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i)
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, 'opacity')
            return '' === n ? '1' : n
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Xe.test(t),
          l = e.style
        if (
          (u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]
        'string' === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? '' : 'px')),
            y.clearCloneStyle ||
              '' !== n ||
              0 !== t.indexOf('background') ||
              (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)))
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t)
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          'get' in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        'normal' === i && t in Ge && (i = Ge[t]),
        '' === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      )
    },
  }),
    S.each(['height', 'width'], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, 'display')) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n)
                })
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === S.css(e, 'boxSizing', !1, i),
            s = n ? Qe(e, u, n, a, i) : 0
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e['offset' + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Qe(e, u, 'border', !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              'px' !== (r[3] || 'px') &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          )
        },
      }
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left
              })) + 'px'
        )
    })),
    S.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
      ;(S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0]
          return n
        },
      }),
        'margin' !== i && (S.cssHooks[i + o].set = Ye)
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0
            if (Array.isArray(t)) {
              for (r = Re(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r)
              return o
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
          },
          e,
          t,
          1 < arguments.length
        )
      },
    }),
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        ;(this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? '' : 'px'))
      },
      cur: function () {
        var e = Ke.propHooks[this.prop]
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop]
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        )
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
            ? t
            : 0
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit)
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2
      },
      _default: 'swing',
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {})
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/
  function ot() {
    et &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(ot)
        : C.setTimeout(ot, S.fx.interval),
      S.fx.tick())
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0
      }),
      (Ze = Date.now())
    )
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e }
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i['margin' + (n = ne[r])] = i['padding' + n] = e
    return t && (i.opacity = i.width = e), i
  }
  function ut(e, t, n) {
    for (
      var r,
        i = (lt.tweeners[t] || []).concat(lt.tweeners['*']),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem
      }),
      u = function () {
        if (a) return !1
        for (
          var e = Ze || at(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n)
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        )
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          )
          return l.tweens.push(n), n
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0
          if (a) return this
          for (a = !0; t < n; t++) l.tweens[t].run(1)
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          )
        },
      }),
      c = l.props
    for (
      !(function (e, t) {
        var n, r, i, o, a
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ('expand' in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i))
          else t[r] = i
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        )
    return (
      S.map(c, ut, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    )
  }
  ;(S.Animation = S.extend(lt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t)
          return se(n.elem, e, te.exec(t), n), n
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ['*'])) : (e = e.match(P))
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (lt.tweeners[n] = lt.tweeners[n] || []),
          lt.tweeners[n].unshift(t)
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, 'fxshow')
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s()
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, 'fx').length || a.empty.fire()
            })
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if (
              (delete t[r],
              (o = o || 'toggle' === i),
              i === (g ? 'hide' : 'show'))
            ) {
              if ('show' !== i || !v || void 0 === v[r]) continue
              g = !0
            }
            d[r] = (v && v[r]) || S.style(e, r)
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, 'display')),
            'none' === (c = S.css(e, 'display')) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, 'display')),
                  le([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === S.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              ;(h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2])
            })),
          (u = !1),
          d))
            u ||
              (v
                ? 'hidden' in v && (g = v.hidden)
                : (v = Y.access(e, 'fxshow', { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, 'fxshow'), d))
                  S.style(e, r, d[r])
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)))
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && 'object' == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            }
      return (
        S.fx.off
          ? (r.duration = 0)
          : 'number' != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
        }),
        r
      )
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css('opacity', 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r)
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o)
            ;(i || Y.get(this, 'finish')) && e.stop(!0)
          }
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        )
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop
          delete e.stop, t(o)
        }
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = S.timers,
              r = Y.get(this)
            if (t) r[t] && r[t].stop && a(r[t])
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t])
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1))
            ;(!e && o) || S.dequeue(this, i)
          })
        )
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = S.timers,
              o = n ? n.length : 0
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1))
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this)
            delete t.finish
          })
        )
      },
    }),
    S.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = S.fn[r]
      S.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e
          ? i.apply(this, arguments)
          : this.animate(st(r, !0), e, t, n)
      }
    }),
    S.each(
      {
        slideDown: st('show'),
        slideUp: st('hide'),
        slideToggle: st('toggle'),
        fadeIn: { opacity: 'show' },
        fadeOut: { opacity: 'hide' },
        fadeToggle: { opacity: 'toggle' },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n)
        }
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers
      for (Ze = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1)
      n.length || S.fx.stop(), (Ze = void 0)
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start()
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot())
    }),
    (S.fx.stop = function () {
      et = null
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r)
          t.stop = function () {
            C.clearTimeout(n)
          }
        })
      )
    }),
    (tt = E.createElement('input')),
    (nt = E.createElement('select').appendChild(E.createElement('option'))),
    (tt.type = 'checkbox'),
    (y.checkOn = '' !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement('input')).value = 't'),
    (tt.type = 'radio'),
    (y.radioValue = 't' === tt.value)
  var ct,
    ft = S.expr.attrHandle
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e)
      })
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType
        if (3 !== o && 8 !== o && 2 !== o)
          return 'undefined' == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r)
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value
              return e.setAttribute('type', t), n && (e.value = n), t
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P)
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n)
      },
    }),
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase()
        return (
          n ||
            ((i = ft[o]),
            (ft[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (ft[o] = i)),
          r
        )
      }
    })
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i
  function ht(e) {
    return (e.match(P) || []).join(' ')
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute('class')) || ''
  }
  function vt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || []
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length)
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e]
      })
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && 'get' in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          )
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, 'tabindex')
            return t
              ? parseInt(t, 10)
              : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href)
              ? 0
              : -1
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode
          return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function (e) {
          var t = e.parentNode
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        },
      }),
    S.each(
      [
        'tabIndex',
        'readOnly',
        'maxLength',
        'cellSpacing',
        'cellPadding',
        'rowSpan',
        'colSpan',
        'useMap',
        'frameBorder',
        'contentEditable',
      ],
      function () {
        S.propFix[this.toLowerCase()] = this
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, gt(this)))
          })
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0
              while ((o = e[a++]))
                r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ')
              i !== (s = ht(r)) && n.setAttribute('class', s)
            }
        return this
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, gt(this)))
          })
        if (!arguments.length) return this.attr('class', '')
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0
              while ((o = e[a++]))
                while (-1 < r.indexOf(' ' + o + ' '))
                  r = r.replace(' ' + o + ' ', ' ')
              i !== (s = ht(r)) && n.setAttribute('class', s)
            }
        return this
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = 'string' === o || Array.isArray(i)
        return 'boolean' == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t)
            })
          : this.each(function () {
              var e, t, n, r
              if (a) {
                ;(t = 0), (n = S(this)), (r = vt(i))
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
              } else (void 0 !== i && 'boolean' !== o) || ((e = gt(this)) && Y.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Y.get(this, '__className__') || ''))
            })
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0
        t = ' ' + e + ' '
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (' ' + ht(gt(n)) + ' ').indexOf(t))
            return !0
        return !1
      },
    })
  var yt = /\r/g
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0]
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? '' : e + ''
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                'set' in r &&
                void 0 !== r.set(this, t, 'value')) ||
                (this.value = t))
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          'get' in r &&
          void 0 !== (e = r.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(yt, '')
          : null == e
          ? ''
          : e
        : void 0
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, 'value')
            return null != t ? t : ht(S.text(e))
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))
              ) {
                if (((t = S(n).val()), a)) return t
                s.push(t)
              }
            return s
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0)
            return n || (e.selectedIndex = -1), o
          },
        },
      },
    }),
    S.each(['radio', 'checkbox'], function () {
      ;(S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t))
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value
          })
    }),
    (y.focusin = 'onfocusin' in C)
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
      e.stopPropagation()
    }
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, 'type') ? e.type : e,
        h = v.call(e, 'namespace') ? e.namespace.split('.') : []
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
          (u = d.indexOf(':') < 0 && 'on' + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join('.')),
          (e.rnamespace = e.namespace
            ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o)
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C)
        }
        i = 0
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, 'events') || Object.create(null))[e.type] &&
              Y.get(o, 'handle')) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault())
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, xt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, xt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        )
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 })
      S.event.trigger(r, null, t)
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this)
        })
      },
      triggerHandler: function (e, t) {
        var n = this[0]
        if (n) return S.event.trigger(e, t, n, !0)
      },
    }),
    y.focusin ||
      S.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e))
        }
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r)
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1)
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r))
          },
        }
      })
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/
  S.parseXML = function (e) {
    var t, n
    if (!e || 'string' != typeof e) return null
    try {
      t = new C.DOMParser().parseFromString(e, 'text/xml')
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName('parsererror')[0]),
      (t && !n) ||
        S.error(
          'Invalid XML: ' +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent
                }).join('\n')
              : e)
        ),
      t
    )
  }
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i
  function At(n, e, r, i) {
    var t
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n)
          ? i(n, t)
          : At(
              n + '[' + ('object' == typeof t && null != t ? e : '') + ']',
              t,
              r,
              i
            )
      })
    else if (r || 'object' !== w(e)) i(n, e)
    else for (t in e) At(n + '[' + t + ']', e[t], r, i)
  }
  ;(S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t
        r[r.length] =
          encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n)
      }
    if (null == e) return ''
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value)
      })
    else for (n in e) At(n, e[n], t, i)
    return r.join('&')
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray())
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, 'elements')
          return e ? S.makeArray(e) : this
        })
          .filter(function () {
            var e = this.type
            return (
              this.name &&
              !S(this).is(':disabled') &&
              kt.test(this.nodeName) &&
              !St.test(e) &&
              (this.checked || !pe.test(e))
            )
          })
          .map(function (e, t) {
            var n = S(this).val()
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, '\r\n') }
                })
              : { name: t.name, value: n.replace(Et, '\r\n') }
          })
          .get()
      },
    })
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = '*/'.concat('*'),
    Mt = E.createElement('a')
  function It(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'))
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || []
      if (m(t))
        while ((n = i[r++]))
          '+' === n[0]
            ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t)
    }
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt
    function l(e) {
      var r
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a)
          return 'string' != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1)
        }),
        r
      )
    }
    return l(i.dataTypes[0]) || (!s['*'] && l('*'))
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {}
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n])
    return r && S.extend(!0, e, r), e
  }
  ;(Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: 'GET',
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            bt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: {
          '*': Rt,
          text: 'text/plain',
          html: 'text/html',
          xml: 'application/xml, text/xml',
          json: 'application/json, text/javascript',
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: 'responseXML',
          text: 'responseText',
          json: 'responseJSON',
        },
        converters: {
          '* text': String,
          'text html': !0,
          'text json': JSON.parse,
          'text xml': S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {})
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks('once memory'),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t
              if (h) {
                if (!n) {
                  n = {}
                  while ((t = qt.exec(p)))
                    n[t[1].toLowerCase() + ' '] = (
                      n[t[1].toLowerCase() + ' '] || []
                    ).concat(t[2])
                }
                t = n[e.toLowerCase() + ' ']
              }
              return null == t ? null : t.join(', ')
            },
            getAllResponseHeaders: function () {
              return h ? p : null
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              )
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this
            },
            statusCode: function (e) {
              var t
              if (e)
                if (h) T.always(e[T.status])
                else for (t in e) w[t] = [w[t], e[t]]
              return this
            },
            abort: function (e) {
              var t = e || u
              return c && c.abort(t), l(0, t), this
            },
          }
        if (
          (x.promise(T),
          (v.url = ((e || v.url || bt.href) + '').replace(
            Ht,
            bt.protocol + '//'
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || '*').toLowerCase().match(P) || ['']),
          null == v.crossDomain)
        ) {
          r = E.createElement('a')
          try {
            ;(r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Mt.protocol + '//' + Mt.host != r.protocol + '//' + r.host)
          } catch (e) {
            v.crossDomain = !0
          }
        }
        if (
          (v.data &&
            v.processData &&
            'string' != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Wt(Ot, v, t, T),
          h)
        )
          return T
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger('ajaxStart'),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, '')),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || '').indexOf(
                'application/x-www-form-urlencoded'
              ) &&
            (v.data = v.data.replace(Nt, '+'))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || 'string' == typeof v.data) &&
              ((f += (Tt.test(f) ? '&' : '?') + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Dt, '$1')),
              (o = (Tt.test(f) ? '&' : '?') + '_=' + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader('If-Modified-Since', S.lastModified[f]),
          S.etag[f] && T.setRequestHeader('If-None-Match', S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader('Content-Type', v.contentType),
        T.setRequestHeader(
          'Accept',
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ('*' !== v.dataTypes[0] ? ', ' + Rt + '; q=0.01' : '')
            : v.accepts['*']
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i])
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort()
        if (
          ((u = 'abort'),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Wt(Pt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h))
            return T
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort('timeout')
            }, v.timeout))
          try {
            ;(h = !1), c.send(a, l)
          } catch (e) {
            if (h) throw e
            l(-1, e)
          }
        } else l(-1, 'No Transport')
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ''),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes
                while ('*' === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader('Content-Type'))
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i)
                      break
                    }
                if (u[0] in n) o = u[0]
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i
                      break
                    }
                    a || (a = i)
                  }
                  o = o || a
                }
                if (o) return o !== u[0] && u.unshift(o), n[o]
              })(v, T, n)),
            !i &&
              -1 < S.inArray('script', v.dataTypes) &&
              S.inArray('json', v.dataTypes) < 0 &&
              (v.converters['text script'] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice()
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a]
              o = c.shift()
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ('*' === o) o = u
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if (
                          (s = i.split(' '))[1] === o &&
                          (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]))
                          break
                        }
                    if (!0 !== a)
                      if (a && e['throws']) t = a(t)
                      else
                        try {
                          t = a(t)
                        } catch (e) {
                          return {
                            state: 'parsererror',
                            error: a
                              ? e
                              : 'No conversion from ' + u + ' to ' + o,
                          }
                        }
                  }
              return { state: 'success', data: t }
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader('Last-Modified')) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader('etag')) && (S.etag[f] = u)),
                204 === e || 'HEAD' === v.type
                  ? (l = 'nocontent')
                  : 304 === e
                  ? (l = 'notmodified')
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger('ajaxComplete', [T, v]),
              --S.active || S.event.trigger('ajaxStop')))
        }
        return T
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, 'json')
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, 'script')
      },
    }),
    S.each(['get', 'post'], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        )
      }
    }),
    S.ajaxPrefilter(function (e) {
      var t
      for (t in e.headers)
        'content-type' === t.toLowerCase() &&
          (e.contentType = e.headers[t] || '')
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n)
        },
      })
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this
                while (e.firstElementChild) e = e.firstElementChild
                return e
              })
              .append(this)),
          this
        )
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e))
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents()
              t.length ? t.wrapAll(n) : e.append(n)
            })
      },
      wrap: function (t) {
        var n = m(t)
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t)
        })
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not('body')
            .each(function () {
              S(this).replaceWith(this.childNodes)
            }),
          this
        )
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e)
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest()
      } catch (e) {}
    })
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr()
  ;(y.cors = !!$t && 'withCredentials' in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr()
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n]
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e['X-Requested-With'] ||
              (e['X-Requested-With'] = 'XMLHttpRequest'),
            e))
              r.setRequestHeader(n, e[n])
            ;(o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                    ? 'number' != typeof r.status
                      ? t(0, 'error')
                      : t(r.status, r.statusText)
                    : t(
                        Bt[r.status] || r.status,
                        r.statusText,
                        'text' !== (r.responseType || 'text') ||
                          'string' != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ))
              }
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a()
                      })
                  }),
              (o = o('abort'))
            try {
              r.send((i.hasContent && i.data) || null)
            } catch (e) {
              if (o) throw e
            }
          },
          abort: function () {
            o && o()
          },
        }
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1)
    }),
    S.ajaxSetup({
      accepts: {
        script:
          'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript',
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return S.globalEval(e), e
        },
      },
    }),
    S.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET')
    }),
    S.ajaxTransport('script', function (n) {
      var r, i
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            ;(r = S('<script>')
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t('error' === e.type ? 404 : 200, e.type)
                })
              )),
              E.head.appendChild(r[0])
          },
          abort: function () {
            i && i()
          },
        }
    })
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/
  S.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + '_' + wt.guid++
      return (this[e] = !0), e
    },
  }),
    S.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Ut.test(e.url)
            ? 'url'
            : 'string' == typeof e.data &&
              0 ===
                (e.contentType || '').indexOf(
                  'application/x-www-form-urlencoded'
                ) &&
              Ut.test(e.data) &&
              'data')
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ut, '$1' + r))
            : !1 !== e.jsonp &&
              (e.url += (Tt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || S.error(r + ' was not called'), o[0]
          }),
          (e.dataTypes[0] = 'json'),
          (i = C[r]),
          (C[r] = function () {
            o = arguments
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0)
          }),
          'script'
        )
    }),
    (y.createHTMLDocument =
      (((_t = E.implementation.createHTMLDocument('').body).innerHTML =
        '<form></form><form></form>'),
      2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument('')).createElement(
                  'base'
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)))
      var r, i, o
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ')
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          S.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              ;(o = arguments),
                a.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e)
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e])
                  })
                }
            ),
        this
      )
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem
      }).length
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, 'position'),
          c = S(e),
          f = {}
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = S.css(e, 'top')),
          (u = S.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto')
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f)
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e)
              })
        var e,
          n,
          r = this[0]
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 }
          if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect()
          else {
            ;(t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement)
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              'static' === S.css(e, 'position')
            )
              e = e.parentNode
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0)),
              (i.left += S.css(e, 'borderLeftWidth', !0)))
          }
          return {
            top: t.top - i.top - S.css(r, 'marginTop', !0),
            left: t.left - i.left - S.css(r, 'marginLeft', !0),
          }
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent
          while (e && 'static' === S.css(e, 'position')) e = e.offsetParent
          return e || re
        })
      },
    }),
    S.each(
      { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
      function (t, i) {
        var o = 'pageYOffset' === i
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t]
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n)
            },
            t,
            e,
            arguments.length
          )
        }
      }
    ),
    S.each(['top', 'left'], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t) return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + 'px' : t
      })
    }),
    S.each({ Height: 'height', Width: 'width' }, function (a, s) {
      S.each(
        { padding: 'inner' + a, content: s, '': 'outer' + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || 'boolean' != typeof e),
              i = r || (!0 === e || !0 === t ? 'margin' : 'border')
            return $(
              this,
              function (e, t, n) {
                var r
                return x(e)
                  ? 0 === o.indexOf('outer')
                    ? e['inner' + a]
                    : e.document.documentElement['client' + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body['scroll' + a],
                      r['scroll' + a],
                      e.body['offset' + a],
                      r['offset' + a],
                      r['client' + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i)
              },
              s,
              n ? e : void 0,
              n
            )
          }
        }
      )
    }),
    S.each(
      [
        'ajaxStart',
        'ajaxStop',
        'ajaxComplete',
        'ajaxError',
        'ajaxSuccess',
        'ajaxSend',
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e)
        }
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n)
      },
      unbind: function (e, t) {
        return this.off(e, null, t)
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r)
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, '**')
          : this.off(t, e || '**', n)
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e)
      },
    }),
    S.each(
      'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
        ' '
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
        }
      }
    )
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
  ;(S.proxy = function (e, t) {
    var n, r, i
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)))
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      )
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0)
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e)
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
    }),
    (S.trim = function (e) {
      return null == e ? '' : (e + '').replace(Xt, '')
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return S
      })
  var Vt = C.jQuery,
    Gt = C.$
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S
    }),
    'undefined' == typeof e && (C.jQuery = C.$ = S),
    S
  )
})

/* ========================
	popper.min.js
========================= */
/*
 Copyright (C) Federico Zivolo 2018
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */ ;(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : (e.Popper = t())
})(this, function () {
  'use strict'
  function e(e) {
    return e && '[object Function]' === {}.toString.call(e)
  }
  function t(e, t) {
    if (1 !== e.nodeType) return []
    var o = getComputedStyle(e, null)
    return t ? o[t] : o
  }
  function o(e) {
    return 'HTML' === e.nodeName ? e : e.parentNode || e.host
  }
  function n(e) {
    if (!e) return document.body
    switch (e.nodeName) {
      case 'HTML':
      case 'BODY':
        return e.ownerDocument.body
      case '#document':
        return e.body
    }
    var i = t(e),
      r = i.overflow,
      p = i.overflowX,
      s = i.overflowY
    return /(auto|scroll|overlay)/.test(r + s + p) ? e : n(o(e))
  }
  function r(e) {
    if (!e) return document.documentElement
    for (
      var o = ie(10) ? document.body : null, n = e.offsetParent;
      n === o && e.nextElementSibling;

    )
      n = (e = e.nextElementSibling).offsetParent
    var i = n && n.nodeName
    return i && 'BODY' !== i && 'HTML' !== i
      ? -1 !== ['TD', 'TABLE'].indexOf(n.nodeName) &&
        'static' === t(n, 'position')
        ? r(n)
        : n
      : e
      ? e.ownerDocument.documentElement
      : document.documentElement
  }
  function p(e) {
    var t = e.nodeName
    return 'BODY' !== t && ('HTML' === t || r(e.firstElementChild) === e)
  }
  function s(e) {
    return null === e.parentNode ? e : s(e.parentNode)
  }
  function d(e, t) {
    if (!e || !e.nodeType || !t || !t.nodeType) return document.documentElement
    var o = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING,
      n = o ? e : t,
      i = o ? t : e,
      a = document.createRange()
    a.setStart(n, 0), a.setEnd(i, 0)
    var l = a.commonAncestorContainer
    if ((e !== l && t !== l) || n.contains(i)) return p(l) ? l : r(l)
    var f = s(e)
    return f.host ? d(f.host, t) : d(e, s(t).host)
  }
  function a(e) {
    var t =
        1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'top',
      o = 'top' === t ? 'scrollTop' : 'scrollLeft',
      n = e.nodeName
    if ('BODY' === n || 'HTML' === n) {
      var i = e.ownerDocument.documentElement,
        r = e.ownerDocument.scrollingElement || i
      return r[o]
    }
    return e[o]
  }
  function l(e, t) {
    var o = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      n = a(t, 'top'),
      i = a(t, 'left'),
      r = o ? -1 : 1
    return (
      (e.top += n * r),
      (e.bottom += n * r),
      (e.left += i * r),
      (e.right += i * r),
      e
    )
  }
  function f(e, t) {
    var o = 'x' === t ? 'Left' : 'Top',
      n = 'Left' == o ? 'Right' : 'Bottom'
    return (
      parseFloat(e['border' + o + 'Width'], 10) +
      parseFloat(e['border' + n + 'Width'], 10)
    )
  }
  function m(e, t, o, n) {
    return Q(
      t['offset' + e],
      t['scroll' + e],
      o['client' + e],
      o['offset' + e],
      o['scroll' + e],
      ie(10)
        ? o['offset' + e] +
            n['margin' + ('Height' === e ? 'Top' : 'Left')] +
            n['margin' + ('Height' === e ? 'Bottom' : 'Right')]
        : 0
    )
  }
  function h() {
    var e = document.body,
      t = document.documentElement,
      o = ie(10) && getComputedStyle(t)
    return { height: m('Height', e, t, o), width: m('Width', e, t, o) }
  }
  function c(e) {
    return de({}, e, { right: e.left + e.width, bottom: e.top + e.height })
  }
  function g(e) {
    var o = {}
    try {
      if (ie(10)) {
        o = e.getBoundingClientRect()
        var n = a(e, 'top'),
          i = a(e, 'left')
        ;(o.top += n), (o.left += i), (o.bottom += n), (o.right += i)
      } else o = e.getBoundingClientRect()
    } catch (t) {}
    var r = {
        left: o.left,
        top: o.top,
        width: o.right - o.left,
        height: o.bottom - o.top,
      },
      p = 'HTML' === e.nodeName ? h() : {},
      s = p.width || e.clientWidth || r.right - r.left,
      d = p.height || e.clientHeight || r.bottom - r.top,
      l = e.offsetWidth - s,
      m = e.offsetHeight - d
    if (l || m) {
      var g = t(e)
      ;(l -= f(g, 'x')), (m -= f(g, 'y')), (r.width -= l), (r.height -= m)
    }
    return c(r)
  }
  function u(e, o) {
    var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2],
      r = ie(10),
      p = 'HTML' === o.nodeName,
      s = g(e),
      d = g(o),
      a = n(e),
      f = t(o),
      m = parseFloat(f.borderTopWidth, 10),
      h = parseFloat(f.borderLeftWidth, 10)
    i &&
      'HTML' === o.nodeName &&
      ((d.top = Q(d.top, 0)), (d.left = Q(d.left, 0)))
    var u = c({
      top: s.top - d.top - m,
      left: s.left - d.left - h,
      width: s.width,
      height: s.height,
    })
    if (((u.marginTop = 0), (u.marginLeft = 0), !r && p)) {
      var b = parseFloat(f.marginTop, 10),
        y = parseFloat(f.marginLeft, 10)
      ;(u.top -= m - b),
        (u.bottom -= m - b),
        (u.left -= h - y),
        (u.right -= h - y),
        (u.marginTop = b),
        (u.marginLeft = y)
    }
    return (
      (r && !i ? o.contains(a) : o === a && 'BODY' !== a.nodeName) &&
        (u = l(u, o)),
      u
    )
  }
  function b(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = e.ownerDocument.documentElement,
      n = u(e, o),
      i = Q(o.clientWidth, window.innerWidth || 0),
      r = Q(o.clientHeight, window.innerHeight || 0),
      p = t ? 0 : a(o),
      s = t ? 0 : a(o, 'left'),
      d = {
        top: p - n.top + n.marginTop,
        left: s - n.left + n.marginLeft,
        width: i,
        height: r,
      }
    return c(d)
  }
  function y(e) {
    var n = e.nodeName
    return 'BODY' === n || 'HTML' === n
      ? !1
      : 'fixed' === t(e, 'position') || y(o(e))
  }
  function w(e) {
    if (!e || !e.parentElement || ie()) return document.documentElement
    for (var o = e.parentElement; o && 'none' === t(o, 'transform'); )
      o = o.parentElement
    return o || document.documentElement
  }
  function E(e, t, i, r) {
    var p = 4 < arguments.length && void 0 !== arguments[4] && arguments[4],
      s = { top: 0, left: 0 },
      a = p ? w(e) : d(e, t)
    if ('viewport' === r) s = b(a, p)
    else {
      var l
      'scrollParent' === r
        ? ((l = n(o(t))),
          'BODY' === l.nodeName && (l = e.ownerDocument.documentElement))
        : 'window' === r
        ? (l = e.ownerDocument.documentElement)
        : (l = r)
      var f = u(l, a, p)
      if ('HTML' === l.nodeName && !y(a)) {
        var m = h(),
          c = m.height,
          g = m.width
        ;(s.top += f.top - f.marginTop),
          (s.bottom = c + f.top),
          (s.left += f.left - f.marginLeft),
          (s.right = g + f.left)
      } else s = f
    }
    return (s.left += i), (s.top += i), (s.right -= i), (s.bottom -= i), s
  }
  function v(e) {
    var t = e.width,
      o = e.height
    return t * o
  }
  function x(e, t, o, n, i) {
    var r = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0
    if (-1 === e.indexOf('auto')) return e
    var p = E(o, n, r, i),
      s = {
        top: { width: p.width, height: t.top - p.top },
        right: { width: p.right - t.right, height: p.height },
        bottom: { width: p.width, height: p.bottom - t.bottom },
        left: { width: t.left - p.left, height: p.height },
      },
      d = Object.keys(s)
        .map(function (e) {
          return de({ key: e }, s[e], { area: v(s[e]) })
        })
        .sort(function (e, t) {
          return t.area - e.area
        }),
      a = d.filter(function (e) {
        var t = e.width,
          n = e.height
        return t >= o.clientWidth && n >= o.clientHeight
      }),
      l = 0 < a.length ? a[0].key : d[0].key,
      f = e.split('-')[1]
    return l + (f ? '-' + f : '')
  }
  function O(e, t, o) {
    var n =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null,
      i = n ? w(t) : d(t, o)
    return u(o, i, n)
  }
  function L(e) {
    var t = getComputedStyle(e),
      o = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
      n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
      i = { width: e.offsetWidth + n, height: e.offsetHeight + o }
    return i
  }
  function S(e) {
    var t = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
    return e.replace(/left|right|bottom|top/g, function (e) {
      return t[e]
    })
  }
  function T(e, t, o) {
    o = o.split('-')[0]
    var n = L(e),
      i = { width: n.width, height: n.height },
      r = -1 !== ['right', 'left'].indexOf(o),
      p = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      d = r ? 'height' : 'width',
      a = r ? 'width' : 'height'
    return (
      (i[p] = t[p] + t[d] / 2 - n[d] / 2),
      (i[s] = o === s ? t[s] - n[a] : t[S(s)]),
      i
    )
  }
  function D(e, t) {
    return Array.prototype.find ? e.find(t) : e.filter(t)[0]
  }
  function C(e, t, o) {
    if (Array.prototype.findIndex)
      return e.findIndex(function (e) {
        return e[t] === o
      })
    var n = D(e, function (e) {
      return e[t] === o
    })
    return e.indexOf(n)
  }
  function N(t, o, n) {
    var i = void 0 === n ? t : t.slice(0, C(t, 'name', n))
    return (
      i.forEach(function (t) {
        t['function'] &&
          console.warn('`modifier.function` is deprecated, use `modifier.fn`!')
        var n = t['function'] || t.fn
        t.enabled &&
          e(n) &&
          ((o.offsets.popper = c(o.offsets.popper)),
          (o.offsets.reference = c(o.offsets.reference)),
          (o = n(o, t)))
      }),
      o
    )
  }
  function k() {
    if (!this.state.isDestroyed) {
      var e = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      }
      ;(e.offsets.reference = O(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (e.placement = x(
          this.options.placement,
          e.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (e.originalPlacement = e.placement),
        (e.positionFixed = this.options.positionFixed),
        (e.offsets.popper = T(this.popper, e.offsets.reference, e.placement)),
        (e.offsets.popper.position = this.options.positionFixed
          ? 'fixed'
          : 'absolute'),
        (e = N(this.modifiers, e)),
        this.state.isCreated
          ? this.options.onUpdate(e)
          : ((this.state.isCreated = !0), this.options.onCreate(e))
    }
  }
  function P(e, t) {
    return e.some(function (e) {
      var o = e.name,
        n = e.enabled
      return n && o === t
    })
  }
  function W(e) {
    for (
      var t = [!1, 'ms', 'Webkit', 'Moz', 'O'],
        o = e.charAt(0).toUpperCase() + e.slice(1),
        n = 0;
      n < t.length;
      n++
    ) {
      var i = t[n],
        r = i ? '' + i + o : e
      if ('undefined' != typeof document.body.style[r]) return r
    }
    return null
  }
  function B() {
    return (
      (this.state.isDestroyed = !0),
      P(this.modifiers, 'applyStyle') &&
        (this.popper.removeAttribute('x-placement'),
        (this.popper.style.position = ''),
        (this.popper.style.top = ''),
        (this.popper.style.left = ''),
        (this.popper.style.right = ''),
        (this.popper.style.bottom = ''),
        (this.popper.style.willChange = ''),
        (this.popper.style[W('transform')] = '')),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    )
  }
  function H(e) {
    var t = e.ownerDocument
    return t ? t.defaultView : window
  }
  function A(e, t, o, i) {
    var r = 'BODY' === e.nodeName,
      p = r ? e.ownerDocument.defaultView : e
    p.addEventListener(t, o, { passive: !0 }),
      r || A(n(p.parentNode), t, o, i),
      i.push(p)
  }
  function I(e, t, o, i) {
    ;(o.updateBound = i),
      H(e).addEventListener('resize', o.updateBound, { passive: !0 })
    var r = n(e)
    return (
      A(r, 'scroll', o.updateBound, o.scrollParents),
      (o.scrollElement = r),
      (o.eventsEnabled = !0),
      o
    )
  }
  function M() {
    this.state.eventsEnabled ||
      (this.state = I(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ))
  }
  function F(e, t) {
    return (
      H(e).removeEventListener('resize', t.updateBound),
      t.scrollParents.forEach(function (e) {
        e.removeEventListener('scroll', t.updateBound)
      }),
      (t.updateBound = null),
      (t.scrollParents = []),
      (t.scrollElement = null),
      (t.eventsEnabled = !1),
      t
    )
  }
  function R() {
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state = F(this.reference, this.state)))
  }
  function U(e) {
    return '' !== e && !isNaN(parseFloat(e)) && isFinite(e)
  }
  function Y(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = ''
      ;-1 !==
        ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(o) &&
        U(t[o]) &&
        (n = 'px'),
        (e.style[o] = t[o] + n)
    })
  }
  function j(e, t) {
    Object.keys(t).forEach(function (o) {
      var n = t[o]
      !1 === n ? e.removeAttribute(o) : e.setAttribute(o, t[o])
    })
  }
  function q(e, t, o) {
    var n = D(e, function (e) {
        var o = e.name
        return o === t
      }),
      i =
        !!n &&
        e.some(function (e) {
          return e.name === o && e.enabled && e.order < n.order
        })
    if (!i) {
      var r = '`' + t + '`'
      console.warn(
        '`' +
          o +
          '`' +
          ' modifier is required by ' +
          r +
          ' modifier in order to work, be sure to include it before ' +
          r +
          '!'
      )
    }
    return i
  }
  function K(e) {
    return 'end' === e ? 'start' : 'start' === e ? 'end' : e
  }
  function V(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1],
      o = le.indexOf(e),
      n = le.slice(o + 1).concat(le.slice(0, o))
    return t ? n.reverse() : n
  }
  function z(e, t, o, n) {
    var i = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
      r = +i[1],
      p = i[2]
    if (!r) return e
    if (0 === p.indexOf('%')) {
      var s
      switch (p) {
        case '%p':
          s = o
          break
        case '%':
        case '%r':
        default:
          s = n
      }
      var d = c(s)
      return (d[t] / 100) * r
    }
    if ('vh' === p || 'vw' === p) {
      var a
      return (
        (a =
          'vh' === p
            ? Q(document.documentElement.clientHeight, window.innerHeight || 0)
            : Q(document.documentElement.clientWidth, window.innerWidth || 0)),
        (a / 100) * r
      )
    }
    return r
  }
  function G(e, t, o, n) {
    var i = [0, 0],
      r = -1 !== ['right', 'left'].indexOf(n),
      p = e.split(/(\+|\-)/).map(function (e) {
        return e.trim()
      }),
      s = p.indexOf(
        D(p, function (e) {
          return -1 !== e.search(/,|\s/)
        })
      )
    p[s] &&
      -1 === p[s].indexOf(',') &&
      console.warn(
        'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
      )
    var d = /\s*,\s*|\s+/,
      a =
        -1 === s
          ? [p]
          : [
              p.slice(0, s).concat([p[s].split(d)[0]]),
              [p[s].split(d)[1]].concat(p.slice(s + 1)),
            ]
    return (
      (a = a.map(function (e, n) {
        var i = (1 === n ? !r : r) ? 'height' : 'width',
          p = !1
        return e
          .reduce(function (e, t) {
            return '' === e[e.length - 1] && -1 !== ['+', '-'].indexOf(t)
              ? ((e[e.length - 1] = t), (p = !0), e)
              : p
              ? ((e[e.length - 1] += t), (p = !1), e)
              : e.concat(t)
          }, [])
          .map(function (e) {
            return z(e, i, t, o)
          })
      })),
      a.forEach(function (e, t) {
        e.forEach(function (o, n) {
          U(o) && (i[t] += o * ('-' === e[n - 1] ? -1 : 1))
        })
      }),
      i
    )
  }
  function _(e, t) {
    var o,
      n = t.offset,
      i = e.placement,
      r = e.offsets,
      p = r.popper,
      s = r.reference,
      d = i.split('-')[0]
    return (
      (o = U(+n) ? [+n, 0] : G(n, p, s, d)),
      'left' === d
        ? ((p.top += o[0]), (p.left -= o[1]))
        : 'right' === d
        ? ((p.top += o[0]), (p.left += o[1]))
        : 'top' === d
        ? ((p.left += o[0]), (p.top -= o[1]))
        : 'bottom' === d && ((p.left += o[0]), (p.top += o[1])),
      (e.popper = p),
      e
    )
  }
  for (
    var X = Math.min,
      J = Math.floor,
      Q = Math.max,
      Z = 'undefined' != typeof window && 'undefined' != typeof document,
      $ = ['Edge', 'Trident', 'Firefox'],
      ee = 0,
      te = 0;
    te < $.length;
    te += 1
  )
    if (Z && 0 <= navigator.userAgent.indexOf($[te])) {
      ee = 1
      break
    }
  var i = Z && window.Promise,
    oe = i
      ? function (e) {
          var t = !1
          return function () {
            t ||
              ((t = !0),
              window.Promise.resolve().then(function () {
                ;(t = !1), e()
              }))
          }
        }
      : function (e) {
          var t = !1
          return function () {
            t ||
              ((t = !0),
              setTimeout(function () {
                ;(t = !1), e()
              }, ee))
          }
        },
    ne = {},
    ie = function () {
      var e =
        0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'all'
      return ((e = e.toString()), ne.hasOwnProperty(e))
        ? ne[e]
        : ('11' === e
            ? (ne[e] = -1 !== navigator.userAgent.indexOf('Trident'))
            : '10' === e
            ? (ne[e] = -1 !== navigator.appVersion.indexOf('MSIE 10'))
            : 'all' === e
            ? (ne[e] =
                -1 !== navigator.userAgent.indexOf('Trident') ||
                -1 !== navigator.userAgent.indexOf('MSIE'))
            : void 0,
          (ne.all =
            ne.all ||
            Object.keys(ne).some(function (e) {
              return ne[e]
            })),
          ne[e])
    },
    re = function (e, t) {
      if (!(e instanceof t))
        throw new TypeError('Cannot call a class as a function')
    },
    pe = (function () {
      function e(e, t) {
        for (var o, n = 0; n < t.length; n++)
          (o = t[n]),
            (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o)
      }
      return function (t, o, n) {
        return o && e(t.prototype, o), n && e(t, n), t
      }
    })(),
    se = function (e, t, o) {
      return (
        t in e
          ? Object.defineProperty(e, t, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[t] = o),
        e
      )
    },
    de =
      Object.assign ||
      function (e) {
        for (var t, o = 1; o < arguments.length; o++)
          for (var n in ((t = arguments[o]), t))
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        return e
      },
    ae = [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ],
    le = ae.slice(3),
    fe = {
      FLIP: 'flip',
      CLOCKWISE: 'clockwise',
      COUNTERCLOCKWISE: 'counterclockwise',
    },
    me = (function () {
      function t(o, n) {
        var i = this,
          r =
            2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
        re(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update)
          }),
          (this.update = oe(this.update.bind(this))),
          (this.options = de({}, t.Defaults, r)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = o && o.jquery ? o[0] : o),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(de({}, t.Defaults.modifiers, r.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = de(
                {},
                t.Defaults.modifiers[e] || {},
                r.modifiers ? r.modifiers[e] : {}
              )
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (e) {
              return de({ name: e }, i.options.modifiers[e])
            })
            .sort(function (e, t) {
              return e.order - t.order
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              e(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state)
          }),
          this.update()
        var p = this.options.eventsEnabled
        p && this.enableEventListeners(), (this.state.eventsEnabled = p)
      }
      return (
        pe(t, [
          {
            key: 'update',
            value: function () {
              return k.call(this)
            },
          },
          {
            key: 'destroy',
            value: function () {
              return B.call(this)
            },
          },
          {
            key: 'enableEventListeners',
            value: function () {
              return M.call(this)
            },
          },
          {
            key: 'disableEventListeners',
            value: function () {
              return R.call(this)
            },
          },
        ]),
        t
      )
    })()
  return (
    (me.Utils = ('undefined' == typeof window ? global : window).PopperUtils),
    (me.placements = ae),
    (me.Defaults = {
      placement: 'bottom',
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (e) {
            var t = e.placement,
              o = t.split('-')[0],
              n = t.split('-')[1]
            if (n) {
              var i = e.offsets,
                r = i.reference,
                p = i.popper,
                s = -1 !== ['bottom', 'top'].indexOf(o),
                d = s ? 'left' : 'top',
                a = s ? 'width' : 'height',
                l = {
                  start: se({}, d, r[d]),
                  end: se({}, d, r[d] + r[a] - p[a]),
                }
              e.offsets.popper = de({}, p, l[n])
            }
            return e
          },
        },
        offset: { order: 200, enabled: !0, fn: _, offset: 0 },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (e, t) {
            var o = t.boundariesElement || r(e.instance.popper)
            e.instance.reference === o && (o = r(o))
            var n = E(
              e.instance.popper,
              e.instance.reference,
              t.padding,
              o,
              e.positionFixed
            )
            t.boundaries = n
            var i = t.priority,
              p = e.offsets.popper,
              s = {
                primary: function (e) {
                  var o = p[e]
                  return (
                    p[e] < n[e] &&
                      !t.escapeWithReference &&
                      (o = Q(p[e], n[e])),
                    se({}, e, o)
                  )
                },
                secondary: function (e) {
                  var o = 'right' === e ? 'left' : 'top',
                    i = p[o]
                  return (
                    p[e] > n[e] &&
                      !t.escapeWithReference &&
                      (i = X(
                        p[o],
                        n[e] - ('right' === e ? p.width : p.height)
                      )),
                    se({}, o, i)
                  )
                },
              }
            return (
              i.forEach(function (e) {
                var t =
                  -1 === ['left', 'top'].indexOf(e) ? 'secondary' : 'primary'
                p = de({}, p, s[t](e))
              }),
              (e.offsets.popper = p),
              e
            )
          },
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent',
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (e) {
            var t = e.offsets,
              o = t.popper,
              n = t.reference,
              i = e.placement.split('-')[0],
              r = J,
              p = -1 !== ['top', 'bottom'].indexOf(i),
              s = p ? 'right' : 'bottom',
              d = p ? 'left' : 'top',
              a = p ? 'width' : 'height'
            return (
              o[s] < r(n[d]) && (e.offsets.popper[d] = r(n[d]) - o[a]),
              o[d] > r(n[s]) && (e.offsets.popper[d] = r(n[s])),
              e
            )
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (e, o) {
            var n
            if (!q(e.instance.modifiers, 'arrow', 'keepTogether')) return e
            var i = o.element
            if ('string' == typeof i) {
              if (((i = e.instance.popper.querySelector(i)), !i)) return e
            } else if (!e.instance.popper.contains(i))
              return (
                console.warn(
                  'WARNING: `arrow.element` must be child of its popper element!'
                ),
                e
              )
            var r = e.placement.split('-')[0],
              p = e.offsets,
              s = p.popper,
              d = p.reference,
              a = -1 !== ['left', 'right'].indexOf(r),
              l = a ? 'height' : 'width',
              f = a ? 'Top' : 'Left',
              m = f.toLowerCase(),
              h = a ? 'left' : 'top',
              g = a ? 'bottom' : 'right',
              u = L(i)[l]
            d[g] - u < s[m] && (e.offsets.popper[m] -= s[m] - (d[g] - u)),
              d[m] + u > s[g] && (e.offsets.popper[m] += d[m] + u - s[g]),
              (e.offsets.popper = c(e.offsets.popper))
            var b = d[m] + d[l] / 2 - u / 2,
              y = t(e.instance.popper),
              w = parseFloat(y['margin' + f], 10),
              E = parseFloat(y['border' + f + 'Width'], 10),
              v = b - e.offsets.popper[m] - w - E
            return (
              (v = Q(X(s[l] - u, v), 0)),
              (e.arrowElement = i),
              (e.offsets.arrow =
                ((n = {}), se(n, m, Math.round(v)), se(n, h, ''), n)),
              e
            )
          },
          element: '[x-arrow]',
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (e, t) {
            if (P(e.instance.modifiers, 'inner')) return e
            if (e.flipped && e.placement === e.originalPlacement) return e
            var o = E(
                e.instance.popper,
                e.instance.reference,
                t.padding,
                t.boundariesElement,
                e.positionFixed
              ),
              n = e.placement.split('-')[0],
              i = S(n),
              r = e.placement.split('-')[1] || '',
              p = []
            switch (t.behavior) {
              case fe.FLIP:
                p = [n, i]
                break
              case fe.CLOCKWISE:
                p = V(n)
                break
              case fe.COUNTERCLOCKWISE:
                p = V(n, !0)
                break
              default:
                p = t.behavior
            }
            return (
              p.forEach(function (s, d) {
                if (n !== s || p.length === d + 1) return e
                ;(n = e.placement.split('-')[0]), (i = S(n))
                var a = e.offsets.popper,
                  l = e.offsets.reference,
                  f = J,
                  m =
                    ('left' === n && f(a.right) > f(l.left)) ||
                    ('right' === n && f(a.left) < f(l.right)) ||
                    ('top' === n && f(a.bottom) > f(l.top)) ||
                    ('bottom' === n && f(a.top) < f(l.bottom)),
                  h = f(a.left) < f(o.left),
                  c = f(a.right) > f(o.right),
                  g = f(a.top) < f(o.top),
                  u = f(a.bottom) > f(o.bottom),
                  b =
                    ('left' === n && h) ||
                    ('right' === n && c) ||
                    ('top' === n && g) ||
                    ('bottom' === n && u),
                  y = -1 !== ['top', 'bottom'].indexOf(n),
                  w =
                    !!t.flipVariations &&
                    ((y && 'start' === r && h) ||
                      (y && 'end' === r && c) ||
                      (!y && 'start' === r && g) ||
                      (!y && 'end' === r && u))
                ;(m || b || w) &&
                  ((e.flipped = !0),
                  (m || b) && (n = p[d + 1]),
                  w && (r = K(r)),
                  (e.placement = n + (r ? '-' + r : '')),
                  (e.offsets.popper = de(
                    {},
                    e.offsets.popper,
                    T(e.instance.popper, e.offsets.reference, e.placement)
                  )),
                  (e = N(e.instance.modifiers, e, 'flip')))
              }),
              e
            )
          },
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport',
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (e) {
            var t = e.placement,
              o = t.split('-')[0],
              n = e.offsets,
              i = n.popper,
              r = n.reference,
              p = -1 !== ['left', 'right'].indexOf(o),
              s = -1 === ['top', 'left'].indexOf(o)
            return (
              (i[p ? 'left' : 'top'] =
                r[o] - (s ? i[p ? 'width' : 'height'] : 0)),
              (e.placement = S(t)),
              (e.offsets.popper = c(i)),
              e
            )
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (e) {
            if (!q(e.instance.modifiers, 'hide', 'preventOverflow')) return e
            var t = e.offsets.reference,
              o = D(e.instance.modifiers, function (e) {
                return 'preventOverflow' === e.name
              }).boundaries
            if (
              t.bottom < o.top ||
              t.left > o.right ||
              t.top > o.bottom ||
              t.right < o.left
            ) {
              if (!0 === e.hide) return e
              ;(e.hide = !0), (e.attributes['x-out-of-boundaries'] = '')
            } else {
              if (!1 === e.hide) return e
              ;(e.hide = !1), (e.attributes['x-out-of-boundaries'] = !1)
            }
            return e
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (e, t) {
            var o = t.x,
              n = t.y,
              i = e.offsets.popper,
              p = D(e.instance.modifiers, function (e) {
                return 'applyStyle' === e.name
              }).gpuAcceleration
            void 0 !== p &&
              console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
              )
            var s,
              d,
              a = void 0 === p ? t.gpuAcceleration : p,
              l = r(e.instance.popper),
              f = g(l),
              m = { position: i.position },
              h = {
                left: J(i.left),
                top: J(i.top),
                bottom: J(i.bottom),
                right: J(i.right),
              },
              c = 'bottom' === o ? 'top' : 'bottom',
              u = 'right' === n ? 'left' : 'right',
              b = W('transform')
            if (
              ((d = 'bottom' == c ? -f.height + h.bottom : h.top),
              (s = 'right' == u ? -f.width + h.right : h.left),
              a && b)
            )
              (m[b] = 'translate3d(' + s + 'px, ' + d + 'px, 0)'),
                (m[c] = 0),
                (m[u] = 0),
                (m.willChange = 'transform')
            else {
              var y = 'bottom' == c ? -1 : 1,
                w = 'right' == u ? -1 : 1
              ;(m[c] = d * y), (m[u] = s * w), (m.willChange = c + ', ' + u)
            }
            var E = { 'x-placement': e.placement }
            return (
              (e.attributes = de({}, E, e.attributes)),
              (e.styles = de({}, m, e.styles)),
              (e.arrowStyles = de({}, e.offsets.arrow, e.arrowStyles)),
              e
            )
          },
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right',
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (e) {
            return (
              Y(e.instance.popper, e.styles),
              j(e.instance.popper, e.attributes),
              e.arrowElement &&
                Object.keys(e.arrowStyles).length &&
                Y(e.arrowElement, e.arrowStyles),
              e
            )
          },
          onLoad: function (e, t, o, n, i) {
            var r = O(i, t, e, o.positionFixed),
              p = x(
                o.placement,
                r,
                t,
                e,
                o.modifiers.flip.boundariesElement,
                o.modifiers.flip.padding
              )
            return (
              t.setAttribute('x-placement', p),
              Y(t, { position: o.positionFixed ? 'fixed' : 'absolute' }),
              o
            )
          },
          gpuAcceleration: void 0,
        },
      },
    }),
    me
  )
})
//# sourceMappingURL=popper.min.js.map

/* ========================
	bootstrap.min.js
========================= */
/*!
 * Bootstrap v4.1.0 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'), require('popper.js'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery', 'popper.js'], e)
    : e((t.bootstrap = {}), t.jQuery, t.Popper)
})(this, function (t, e, c) {
  'use strict'
  function i(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n]
      ;(i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i)
    }
  }
  function o(t, e, n) {
    return e && i(t.prototype, e), n && i(t, n), t
  }
  function h(r) {
    for (var t = 1; t < arguments.length; t++) {
      var s = null != arguments[t] ? arguments[t] : {},
        e = Object.keys(s)
      'function' == typeof Object.getOwnPropertySymbols &&
        (e = e.concat(
          Object.getOwnPropertySymbols(s).filter(function (t) {
            return Object.getOwnPropertyDescriptor(s, t).enumerable
          })
        )),
        e.forEach(function (t) {
          var e, n, i
          ;(e = r),
            (i = s[(n = t)]),
            n in e
              ? Object.defineProperty(e, n, {
                  value: i,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (e[n] = i)
        })
    }
    return r
  }
  ;(e = e && e.hasOwnProperty('default') ? e.default : e),
    (c = c && c.hasOwnProperty('default') ? c.default : c)
  var r,
    n,
    s,
    a,
    l,
    u,
    f,
    d,
    _,
    g,
    m,
    p,
    v,
    E,
    y,
    T,
    C,
    I,
    A,
    D,
    b,
    S,
    w,
    N,
    O,
    k,
    P,
    L,
    j,
    R,
    H,
    W,
    M,
    x,
    U,
    K,
    F,
    V,
    Q,
    B,
    Y,
    G,
    q,
    z,
    X,
    J,
    Z,
    $,
    tt,
    et,
    nt,
    it,
    rt,
    st,
    ot,
    at,
    lt,
    ht,
    ct,
    ut,
    ft,
    dt,
    _t,
    gt,
    mt,
    pt,
    vt,
    Et,
    yt,
    Tt,
    Ct,
    It,
    At,
    Dt,
    bt,
    St,
    wt,
    Nt,
    Ot,
    kt,
    Pt,
    Lt,
    jt,
    Rt,
    Ht,
    Wt,
    Mt,
    xt,
    Ut,
    Kt,
    Ft,
    Vt,
    Qt,
    Bt,
    Yt,
    Gt,
    qt,
    zt,
    Xt,
    Jt,
    Zt,
    $t,
    te,
    ee,
    ne,
    ie,
    re,
    se,
    oe,
    ae,
    le,
    he,
    ce,
    ue,
    fe,
    de,
    _e,
    ge,
    me,
    pe,
    ve,
    Ee,
    ye,
    Te,
    Ce,
    Ie,
    Ae,
    De,
    be,
    Se,
    we,
    Ne,
    Oe,
    ke,
    Pe,
    Le,
    je,
    Re,
    He,
    We,
    Me,
    xe,
    Ue,
    Ke,
    Fe,
    Ve,
    Qe,
    Be,
    Ye,
    Ge,
    qe,
    ze,
    Xe,
    Je,
    Ze,
    $e,
    tn,
    en,
    nn,
    rn,
    sn,
    on,
    an,
    ln,
    hn,
    cn,
    un,
    fn,
    dn,
    _n,
    gn,
    mn,
    pn,
    vn,
    En,
    yn,
    Tn,
    Cn = (function (i) {
      var e = 'transitionend'
      function t(t) {
        var e = this,
          n = !1
        return (
          i(this).one(l.TRANSITION_END, function () {
            n = !0
          }),
          setTimeout(function () {
            n || l.triggerTransitionEnd(e)
          }, t),
          this
        )
      }
      var l = {
        TRANSITION_END: 'bsTransitionEnd',
        getUID: function (t) {
          for (; (t += ~~(1e6 * Math.random())), document.getElementById(t); );
          return t
        },
        getSelectorFromElement: function (t) {
          var e = t.getAttribute('data-target')
          ;(e && '#' !== e) || (e = t.getAttribute('href') || '')
          try {
            return 0 < i(document).find(e).length ? e : null
          } catch (t) {
            return null
          }
        },
        getTransitionDurationFromElement: function (t) {
          if (!t) return 0
          var e = i(t).css('transition-duration')
          return parseFloat(e)
            ? ((e = e.split(',')[0]), 1e3 * parseFloat(e))
            : 0
        },
        reflow: function (t) {
          return t.offsetHeight
        },
        triggerTransitionEnd: function (t) {
          i(t).trigger(e)
        },
        supportsTransitionEnd: function () {
          return Boolean(e)
        },
        isElement: function (t) {
          return (t[0] || t).nodeType
        },
        typeCheckConfig: function (t, e, n) {
          for (var i in n)
            if (Object.prototype.hasOwnProperty.call(n, i)) {
              var r = n[i],
                s = e[i],
                o =
                  s && l.isElement(s)
                    ? 'element'
                    : ((a = s),
                      {}.toString
                        .call(a)
                        .match(/\s([a-z]+)/i)[1]
                        .toLowerCase())
              if (!new RegExp(r).test(o))
                throw new Error(
                  t.toUpperCase() +
                    ': Option "' +
                    i +
                    '" provided type "' +
                    o +
                    '" but expected type "' +
                    r +
                    '".'
                )
            }
          var a
        },
      }
      return (
        (i.fn.emulateTransitionEnd = t),
        (i.event.special[l.TRANSITION_END] = {
          bindType: e,
          delegateType: e,
          handle: function (t) {
            if (i(t.target).is(this))
              return t.handleObj.handler.apply(this, arguments)
          },
        }),
        l
      )
    })(e),
    In =
      ((n = 'alert'),
      (a = '.' + (s = 'bs.alert')),
      (l = (r = e).fn[n]),
      (u = {
        CLOSE: 'close' + a,
        CLOSED: 'closed' + a,
        CLICK_DATA_API: 'click' + a + '.data-api',
      }),
      (f = 'alert'),
      (d = 'fade'),
      (_ = 'show'),
      (g = (function () {
        function i(t) {
          this._element = t
        }
        var t = i.prototype
        return (
          (t.close = function (t) {
            t = t || this._element
            var e = this._getRootElement(t)
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e)
          }),
          (t.dispose = function () {
            r.removeData(this._element, s), (this._element = null)
          }),
          (t._getRootElement = function (t) {
            var e = Cn.getSelectorFromElement(t),
              n = !1
            return e && (n = r(e)[0]), n || (n = r(t).closest('.' + f)[0]), n
          }),
          (t._triggerCloseEvent = function (t) {
            var e = r.Event(u.CLOSE)
            return r(t).trigger(e), e
          }),
          (t._removeElement = function (e) {
            var n = this
            if ((r(e).removeClass(_), r(e).hasClass(d))) {
              var t = Cn.getTransitionDurationFromElement(e)
              r(e)
                .one(Cn.TRANSITION_END, function (t) {
                  return n._destroyElement(e, t)
                })
                .emulateTransitionEnd(t)
            } else this._destroyElement(e)
          }),
          (t._destroyElement = function (t) {
            r(t).detach().trigger(u.CLOSED).remove()
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = r(this),
                e = t.data(s)
              e || ((e = new i(this)), t.data(s, e)),
                'close' === n && e[n](this)
            })
          }),
          (i._handleDismiss = function (e) {
            return function (t) {
              t && t.preventDefault(), e.close(this)
            }
          }),
          o(i, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.1.0'
              },
            },
          ]),
          i
        )
      })()),
      r(document).on(
        u.CLICK_DATA_API,
        '[data-dismiss="alert"]',
        g._handleDismiss(new g())
      ),
      (r.fn[n] = g._jQueryInterface),
      (r.fn[n].Constructor = g),
      (r.fn[n].noConflict = function () {
        return (r.fn[n] = l), g._jQueryInterface
      }),
      g),
    An =
      ((p = 'button'),
      (E = '.' + (v = 'bs.button')),
      (y = '.data-api'),
      (T = (m = e).fn[p]),
      (C = 'active'),
      (I = 'btn'),
      (D = '[data-toggle^="button"]'),
      (b = '[data-toggle="buttons"]'),
      (S = 'input'),
      (w = '.active'),
      (N = '.btn'),
      (O = {
        CLICK_DATA_API: 'click' + E + y,
        FOCUS_BLUR_DATA_API: (A = 'focus') + E + y + ' blur' + E + y,
      }),
      (k = (function () {
        function n(t) {
          this._element = t
        }
        var t = n.prototype
        return (
          (t.toggle = function () {
            var t = !0,
              e = !0,
              n = m(this._element).closest(b)[0]
            if (n) {
              var i = m(this._element).find(S)[0]
              if (i) {
                if ('radio' === i.type)
                  if (i.checked && m(this._element).hasClass(C)) t = !1
                  else {
                    var r = m(n).find(w)[0]
                    r && m(r).removeClass(C)
                  }
                if (t) {
                  if (
                    i.hasAttribute('disabled') ||
                    n.hasAttribute('disabled') ||
                    i.classList.contains('disabled') ||
                    n.classList.contains('disabled')
                  )
                    return
                  ;(i.checked = !m(this._element).hasClass(C)),
                    m(i).trigger('change')
                }
                i.focus(), (e = !1)
              }
            }
            e &&
              this._element.setAttribute(
                'aria-pressed',
                !m(this._element).hasClass(C)
              ),
              t && m(this._element).toggleClass(C)
          }),
          (t.dispose = function () {
            m.removeData(this._element, v), (this._element = null)
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = m(this).data(v)
              t || ((t = new n(this)), m(this).data(v, t)),
                'toggle' === e && t[e]()
            })
          }),
          o(n, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.1.0'
              },
            },
          ]),
          n
        )
      })()),
      m(document)
        .on(O.CLICK_DATA_API, D, function (t) {
          t.preventDefault()
          var e = t.target
          m(e).hasClass(I) || (e = m(e).closest(N)),
            k._jQueryInterface.call(m(e), 'toggle')
        })
        .on(O.FOCUS_BLUR_DATA_API, D, function (t) {
          var e = m(t.target).closest(N)[0]
          m(e).toggleClass(A, /^focus(in)?$/.test(t.type))
        }),
      (m.fn[p] = k._jQueryInterface),
      (m.fn[p].Constructor = k),
      (m.fn[p].noConflict = function () {
        return (m.fn[p] = T), k._jQueryInterface
      }),
      k),
    Dn =
      ((L = 'carousel'),
      (R = '.' + (j = 'bs.carousel')),
      (H = '.data-api'),
      (W = (P = e).fn[L]),
      (M = {
        interval: 5e3,
        keyboard: !0,
        slide: !1,
        pause: 'hover',
        wrap: !0,
      }),
      (x = {
        interval: '(number|boolean)',
        keyboard: 'boolean',
        slide: '(boolean|string)',
        pause: '(string|boolean)',
        wrap: 'boolean',
      }),
      (U = 'next'),
      (K = 'prev'),
      (F = 'left'),
      (V = 'right'),
      (Q = {
        SLIDE: 'slide' + R,
        SLID: 'slid' + R,
        KEYDOWN: 'keydown' + R,
        MOUSEENTER: 'mouseenter' + R,
        MOUSELEAVE: 'mouseleave' + R,
        TOUCHEND: 'touchend' + R,
        LOAD_DATA_API: 'load' + R + H,
        CLICK_DATA_API: 'click' + R + H,
      }),
      (B = 'carousel'),
      (Y = 'active'),
      (G = 'slide'),
      (q = 'carousel-item-right'),
      (z = 'carousel-item-left'),
      (X = 'carousel-item-next'),
      (J = 'carousel-item-prev'),
      (Z = {
        ACTIVE: '.active',
        ACTIVE_ITEM: '.active.carousel-item',
        ITEM: '.carousel-item',
        NEXT_PREV: '.carousel-item-next, .carousel-item-prev',
        INDICATORS: '.carousel-indicators',
        DATA_SLIDE: '[data-slide], [data-slide-to]',
        DATA_RIDE: '[data-ride="carousel"]',
      }),
      ($ = (function () {
        function s(t, e) {
          ;(this._items = null),
            (this._interval = null),
            (this._activeElement = null),
            (this._isPaused = !1),
            (this._isSliding = !1),
            (this.touchTimeout = null),
            (this._config = this._getConfig(e)),
            (this._element = P(t)[0]),
            (this._indicatorsElement = P(this._element).find(Z.INDICATORS)[0]),
            this._addEventListeners()
        }
        var t = s.prototype
        return (
          (t.next = function () {
            this._isSliding || this._slide(U)
          }),
          (t.nextWhenVisible = function () {
            !document.hidden &&
              P(this._element).is(':visible') &&
              'hidden' !== P(this._element).css('visibility') &&
              this.next()
          }),
          (t.prev = function () {
            this._isSliding || this._slide(K)
          }),
          (t.pause = function (t) {
            t || (this._isPaused = !0),
              P(this._element).find(Z.NEXT_PREV)[0] &&
                (Cn.triggerTransitionEnd(this._element), this.cycle(!0)),
              clearInterval(this._interval),
              (this._interval = null)
          }),
          (t.cycle = function (t) {
            t || (this._isPaused = !1),
              this._interval &&
                (clearInterval(this._interval), (this._interval = null)),
              this._config.interval &&
                !this._isPaused &&
                (this._interval = setInterval(
                  (document.visibilityState
                    ? this.nextWhenVisible
                    : this.next
                  ).bind(this),
                  this._config.interval
                ))
          }),
          (t.to = function (t) {
            var e = this
            this._activeElement = P(this._element).find(Z.ACTIVE_ITEM)[0]
            var n = this._getItemIndex(this._activeElement)
            if (!(t > this._items.length - 1 || t < 0))
              if (this._isSliding)
                P(this._element).one(Q.SLID, function () {
                  return e.to(t)
                })
              else {
                if (n === t) return this.pause(), void this.cycle()
                var i = n < t ? U : K
                this._slide(i, this._items[t])
              }
          }),
          (t.dispose = function () {
            P(this._element).off(R),
              P.removeData(this._element, j),
              (this._items = null),
              (this._config = null),
              (this._element = null),
              (this._interval = null),
              (this._isPaused = null),
              (this._isSliding = null),
              (this._activeElement = null),
              (this._indicatorsElement = null)
          }),
          (t._getConfig = function (t) {
            return (t = h({}, M, t)), Cn.typeCheckConfig(L, t, x), t
          }),
          (t._addEventListeners = function () {
            var e = this
            this._config.keyboard &&
              P(this._element).on(Q.KEYDOWN, function (t) {
                return e._keydown(t)
              }),
              'hover' === this._config.pause &&
                (P(this._element)
                  .on(Q.MOUSEENTER, function (t) {
                    return e.pause(t)
                  })
                  .on(Q.MOUSELEAVE, function (t) {
                    return e.cycle(t)
                  }),
                'ontouchstart' in document.documentElement &&
                  P(this._element).on(Q.TOUCHEND, function () {
                    e.pause(),
                      e.touchTimeout && clearTimeout(e.touchTimeout),
                      (e.touchTimeout = setTimeout(function (t) {
                        return e.cycle(t)
                      }, 500 + e._config.interval))
                  }))
          }),
          (t._keydown = function (t) {
            if (!/input|textarea/i.test(t.target.tagName))
              switch (t.which) {
                case 37:
                  t.preventDefault(), this.prev()
                  break
                case 39:
                  t.preventDefault(), this.next()
              }
          }),
          (t._getItemIndex = function (t) {
            return (
              (this._items = P.makeArray(P(t).parent().find(Z.ITEM))),
              this._items.indexOf(t)
            )
          }),
          (t._getItemByDirection = function (t, e) {
            var n = t === U,
              i = t === K,
              r = this._getItemIndex(e),
              s = this._items.length - 1
            if (((i && 0 === r) || (n && r === s)) && !this._config.wrap)
              return e
            var o = (r + (t === K ? -1 : 1)) % this._items.length
            return -1 === o
              ? this._items[this._items.length - 1]
              : this._items[o]
          }),
          (t._triggerSlideEvent = function (t, e) {
            var n = this._getItemIndex(t),
              i = this._getItemIndex(P(this._element).find(Z.ACTIVE_ITEM)[0]),
              r = P.Event(Q.SLIDE, {
                relatedTarget: t,
                direction: e,
                from: i,
                to: n,
              })
            return P(this._element).trigger(r), r
          }),
          (t._setActiveIndicatorElement = function (t) {
            if (this._indicatorsElement) {
              P(this._indicatorsElement).find(Z.ACTIVE).removeClass(Y)
              var e = this._indicatorsElement.children[this._getItemIndex(t)]
              e && P(e).addClass(Y)
            }
          }),
          (t._slide = function (t, e) {
            var n,
              i,
              r,
              s = this,
              o = P(this._element).find(Z.ACTIVE_ITEM)[0],
              a = this._getItemIndex(o),
              l = e || (o && this._getItemByDirection(t, o)),
              h = this._getItemIndex(l),
              c = Boolean(this._interval)
            if (
              (t === U
                ? ((n = z), (i = X), (r = F))
                : ((n = q), (i = J), (r = V)),
              l && P(l).hasClass(Y))
            )
              this._isSliding = !1
            else if (
              !this._triggerSlideEvent(l, r).isDefaultPrevented() &&
              o &&
              l
            ) {
              ;(this._isSliding = !0),
                c && this.pause(),
                this._setActiveIndicatorElement(l)
              var u = P.Event(Q.SLID, {
                relatedTarget: l,
                direction: r,
                from: a,
                to: h,
              })
              if (P(this._element).hasClass(G)) {
                P(l).addClass(i),
                  Cn.reflow(l),
                  P(o).addClass(n),
                  P(l).addClass(n)
                var f = Cn.getTransitionDurationFromElement(o)
                P(o)
                  .one(Cn.TRANSITION_END, function () {
                    P(l)
                      .removeClass(n + ' ' + i)
                      .addClass(Y),
                      P(o).removeClass(Y + ' ' + i + ' ' + n),
                      (s._isSliding = !1),
                      setTimeout(function () {
                        return P(s._element).trigger(u)
                      }, 0)
                  })
                  .emulateTransitionEnd(f)
              } else
                P(o).removeClass(Y),
                  P(l).addClass(Y),
                  (this._isSliding = !1),
                  P(this._element).trigger(u)
              c && this.cycle()
            }
          }),
          (s._jQueryInterface = function (i) {
            return this.each(function () {
              var t = P(this).data(j),
                e = h({}, M, P(this).data())
              'object' == typeof i && (e = h({}, e, i))
              var n = 'string' == typeof i ? i : e.slide
              if (
                (t || ((t = new s(this, e)), P(this).data(j, t)),
                'number' == typeof i)
              )
                t.to(i)
              else if ('string' == typeof n) {
                if ('undefined' == typeof t[n])
                  throw new TypeError('No method named "' + n + '"')
                t[n]()
              } else e.interval && (t.pause(), t.cycle())
            })
          }),
          (s._dataApiClickHandler = function (t) {
            var e = Cn.getSelectorFromElement(this)
            if (e) {
              var n = P(e)[0]
              if (n && P(n).hasClass(B)) {
                var i = h({}, P(n).data(), P(this).data()),
                  r = this.getAttribute('data-slide-to')
                r && (i.interval = !1),
                  s._jQueryInterface.call(P(n), i),
                  r && P(n).data(j).to(r),
                  t.preventDefault()
              }
            }
          }),
          o(s, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.1.0'
              },
            },
            {
              key: 'Default',
              get: function () {
                return M
              },
            },
          ]),
          s
        )
      })()),
      P(document).on(Q.CLICK_DATA_API, Z.DATA_SLIDE, $._dataApiClickHandler),
      P(window).on(Q.LOAD_DATA_API, function () {
        P(Z.DATA_RIDE).each(function () {
          var t = P(this)
          $._jQueryInterface.call(t, t.data())
        })
      }),
      (P.fn[L] = $._jQueryInterface),
      (P.fn[L].Constructor = $),
      (P.fn[L].noConflict = function () {
        return (P.fn[L] = W), $._jQueryInterface
      }),
      $),
    bn =
      ((et = 'collapse'),
      (it = '.' + (nt = 'bs.collapse')),
      (rt = (tt = e).fn[et]),
      (st = { toggle: !0, parent: '' }),
      (ot = { toggle: 'boolean', parent: '(string|element)' }),
      (at = {
        SHOW: 'show' + it,
        SHOWN: 'shown' + it,
        HIDE: 'hide' + it,
        HIDDEN: 'hidden' + it,
        CLICK_DATA_API: 'click' + it + '.data-api',
      }),
      (lt = 'show'),
      (ht = 'collapse'),
      (ct = 'collapsing'),
      (ut = 'collapsed'),
      (ft = 'width'),
      (dt = 'height'),
      (_t = {
        ACTIVES: '.show, .collapsing',
        DATA_TOGGLE: '[data-toggle="collapse"]',
      }),
      (gt = (function () {
        function a(t, e) {
          ;(this._isTransitioning = !1),
            (this._element = t),
            (this._config = this._getConfig(e)),
            (this._triggerArray = tt.makeArray(
              tt(
                '[data-toggle="collapse"][href="#' +
                  t.id +
                  '"],[data-toggle="collapse"][data-target="#' +
                  t.id +
                  '"]'
              )
            ))
          for (var n = tt(_t.DATA_TOGGLE), i = 0; i < n.length; i++) {
            var r = n[i],
              s = Cn.getSelectorFromElement(r)
            null !== s &&
              0 < tt(s).filter(t).length &&
              ((this._selector = s), this._triggerArray.push(r))
          }
          ;(this._parent = this._config.parent ? this._getParent() : null),
            this._config.parent ||
              this._addAriaAndCollapsedClass(this._element, this._triggerArray),
            this._config.toggle && this.toggle()
        }
        var t = a.prototype
        return (
          (t.toggle = function () {
            tt(this._element).hasClass(lt) ? this.hide() : this.show()
          }),
          (t.show = function () {
            var t,
              e,
              n = this
            if (
              !this._isTransitioning &&
              !tt(this._element).hasClass(lt) &&
              (this._parent &&
                0 ===
                  (t = tt.makeArray(
                    tt(this._parent)
                      .find(_t.ACTIVES)
                      .filter('[data-parent="' + this._config.parent + '"]')
                  )).length &&
                (t = null),
              !(
                t &&
                (e = tt(t).not(this._selector).data(nt)) &&
                e._isTransitioning
              ))
            ) {
              var i = tt.Event(at.SHOW)
              if ((tt(this._element).trigger(i), !i.isDefaultPrevented())) {
                t &&
                  (a._jQueryInterface.call(tt(t).not(this._selector), 'hide'),
                  e || tt(t).data(nt, null))
                var r = this._getDimension()
                tt(this._element).removeClass(ht).addClass(ct),
                  (this._element.style[r] = 0) < this._triggerArray.length &&
                    tt(this._triggerArray)
                      .removeClass(ut)
                      .attr('aria-expanded', !0),
                  this.setTransitioning(!0)
                var s = 'scroll' + (r[0].toUpperCase() + r.slice(1)),
                  o = Cn.getTransitionDurationFromElement(this._element)
                tt(this._element)
                  .one(Cn.TRANSITION_END, function () {
                    tt(n._element).removeClass(ct).addClass(ht).addClass(lt),
                      (n._element.style[r] = ''),
                      n.setTransitioning(!1),
                      tt(n._element).trigger(at.SHOWN)
                  })
                  .emulateTransitionEnd(o),
                  (this._element.style[r] = this._element[s] + 'px')
              }
            }
          }),
          (t.hide = function () {
            var t = this
            if (!this._isTransitioning && tt(this._element).hasClass(lt)) {
              var e = tt.Event(at.HIDE)
              if ((tt(this._element).trigger(e), !e.isDefaultPrevented())) {
                var n = this._getDimension()
                if (
                  ((this._element.style[n] =
                    this._element.getBoundingClientRect()[n] + 'px'),
                  Cn.reflow(this._element),
                  tt(this._element)
                    .addClass(ct)
                    .removeClass(ht)
                    .removeClass(lt),
                  0 < this._triggerArray.length)
                )
                  for (var i = 0; i < this._triggerArray.length; i++) {
                    var r = this._triggerArray[i],
                      s = Cn.getSelectorFromElement(r)
                    if (null !== s)
                      tt(s).hasClass(lt) ||
                        tt(r).addClass(ut).attr('aria-expanded', !1)
                  }
                this.setTransitioning(!0)
                this._element.style[n] = ''
                var o = Cn.getTransitionDurationFromElement(this._element)
                tt(this._element)
                  .one(Cn.TRANSITION_END, function () {
                    t.setTransitioning(!1),
                      tt(t._element)
                        .removeClass(ct)
                        .addClass(ht)
                        .trigger(at.HIDDEN)
                  })
                  .emulateTransitionEnd(o)
              }
            }
          }),
          (t.setTransitioning = function (t) {
            this._isTransitioning = t
          }),
          (t.dispose = function () {
            tt.removeData(this._element, nt),
              (this._config = null),
              (this._parent = null),
              (this._element = null),
              (this._triggerArray = null),
              (this._isTransitioning = null)
          }),
          (t._getConfig = function (t) {
            return (
              ((t = h({}, st, t)).toggle = Boolean(t.toggle)),
              Cn.typeCheckConfig(et, t, ot),
              t
            )
          }),
          (t._getDimension = function () {
            return tt(this._element).hasClass(ft) ? ft : dt
          }),
          (t._getParent = function () {
            var n = this,
              t = null
            Cn.isElement(this._config.parent)
              ? ((t = this._config.parent),
                'undefined' != typeof this._config.parent.jquery &&
                  (t = this._config.parent[0]))
              : (t = tt(this._config.parent)[0])
            var e =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]'
            return (
              tt(t)
                .find(e)
                .each(function (t, e) {
                  n._addAriaAndCollapsedClass(a._getTargetFromElement(e), [e])
                }),
              t
            )
          }),
          (t._addAriaAndCollapsedClass = function (t, e) {
            if (t) {
              var n = tt(t).hasClass(lt)
              0 < e.length && tt(e).toggleClass(ut, !n).attr('aria-expanded', n)
            }
          }),
          (a._getTargetFromElement = function (t) {
            var e = Cn.getSelectorFromElement(t)
            return e ? tt(e)[0] : null
          }),
          (a._jQueryInterface = function (i) {
            return this.each(function () {
              var t = tt(this),
                e = t.data(nt),
                n = h({}, st, t.data(), 'object' == typeof i && i)
              if (
                (!e && n.toggle && /show|hide/.test(i) && (n.toggle = !1),
                e || ((e = new a(this, n)), t.data(nt, e)),
                'string' == typeof i)
              ) {
                if ('undefined' == typeof e[i])
                  throw new TypeError('No method named "' + i + '"')
                e[i]()
              }
            })
          }),
          o(a, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.1.0'
              },
            },
            {
              key: 'Default',
              get: function () {
                return st
              },
            },
          ]),
          a
        )
      })()),
      tt(document).on(at.CLICK_DATA_API, _t.DATA_TOGGLE, function (t) {
        'A' === t.currentTarget.tagName && t.preventDefault()
        var n = tt(this),
          e = Cn.getSelectorFromElement(this)
        tt(e).each(function () {
          var t = tt(this),
            e = t.data(nt) ? 'toggle' : n.data()
          gt._jQueryInterface.call(t, e)
        })
      }),
      (tt.fn[et] = gt._jQueryInterface),
      (tt.fn[et].Constructor = gt),
      (tt.fn[et].noConflict = function () {
        return (tt.fn[et] = rt), gt._jQueryInterface
      }),
      gt),
    Sn =
      ((pt = 'dropdown'),
      (Et = '.' + (vt = 'bs.dropdown')),
      (yt = '.data-api'),
      (Tt = (mt = e).fn[pt]),
      (Ct = new RegExp('38|40|27')),
      (It = {
        HIDE: 'hide' + Et,
        HIDDEN: 'hidden' + Et,
        SHOW: 'show' + Et,
        SHOWN: 'shown' + Et,
        CLICK: 'click' + Et,
        CLICK_DATA_API: 'click' + Et + yt,
        KEYDOWN_DATA_API: 'keydown' + Et + yt,
        KEYUP_DATA_API: 'keyup' + Et + yt,
      }),
      (At = 'disabled'),
      (Dt = 'show'),
      (bt = 'dropup'),
      (St = 'dropright'),
      (wt = 'dropleft'),
      (Nt = 'dropdown-menu-right'),
      (Ot = 'position-static'),
      (kt = '[data-toggle="dropdown"]'),
      (Pt = '.dropdown form'),
      (Lt = '.dropdown-menu'),
      (jt = '.navbar-nav'),
      (Rt = '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'),
      (Ht = 'top-start'),
      (Wt = 'top-end'),
      (Mt = 'bottom-start'),
      (xt = 'bottom-end'),
      (Ut = 'right-start'),
      (Kt = 'left-start'),
      (Ft = {
        offset: 0,
        flip: !0,
        boundary: 'scrollParent',
        reference: 'toggle',
        display: 'dynamic',
      }),
      (Vt = {
        offset: '(number|string|function)',
        flip: 'boolean',
        boundary: '(string|element)',
        reference: '(string|element)',
        display: 'string',
      }),
      (Qt = (function () {
        function l(t, e) {
          ;(this._element = t),
            (this._popper = null),
            (this._config = this._getConfig(e)),
            (this._menu = this._getMenuElement()),
            (this._inNavbar = this._detectNavbar()),
            this._addEventListeners()
        }
        var t = l.prototype
        return (
          (t.toggle = function () {
            if (!this._element.disabled && !mt(this._element).hasClass(At)) {
              var t = l._getParentFromElement(this._element),
                e = mt(this._menu).hasClass(Dt)
              if ((l._clearMenus(), !e)) {
                var n = { relatedTarget: this._element },
                  i = mt.Event(It.SHOW, n)
                if ((mt(t).trigger(i), !i.isDefaultPrevented())) {
                  if (!this._inNavbar) {
                    if ('undefined' == typeof c)
                      throw new TypeError(
                        'Bootstrap dropdown require Popper.js (https://popper.js.org)'
                      )
                    var r = this._element
                    'parent' === this._config.reference
                      ? (r = t)
                      : Cn.isElement(this._config.reference) &&
                        ((r = this._config.reference),
                        'undefined' != typeof this._config.reference.jquery &&
                          (r = this._config.reference[0])),
                      'scrollParent' !== this._config.boundary &&
                        mt(t).addClass(Ot),
                      (this._popper = new c(
                        r,
                        this._menu,
                        this._getPopperConfig()
                      ))
                  }
                  'ontouchstart' in document.documentElement &&
                    0 === mt(t).closest(jt).length &&
                    mt(document.body).children().on('mouseover', null, mt.noop),
                    this._element.focus(),
                    this._element.setAttribute('aria-expanded', !0),
                    mt(this._menu).toggleClass(Dt),
                    mt(t).toggleClass(Dt).trigger(mt.Event(It.SHOWN, n))
                }
              }
            }
          }),
          (t.dispose = function () {
            mt.removeData(this._element, vt),
              mt(this._element).off(Et),
              (this._element = null),
              (this._menu = null) !== this._popper &&
                (this._popper.destroy(), (this._popper = null))
          }),
          (t.update = function () {
            ;(this._inNavbar = this._detectNavbar()),
              null !== this._popper && this._popper.scheduleUpdate()
          }),
          (t._addEventListeners = function () {
            var e = this
            mt(this._element).on(It.CLICK, function (t) {
              t.preventDefault(), t.stopPropagation(), e.toggle()
            })
          }),
          (t._getConfig = function (t) {
            return (
              (t = h(
                {},
                this.constructor.Default,
                mt(this._element).data(),
                t
              )),
              Cn.typeCheckConfig(pt, t, this.constructor.DefaultType),
              t
            )
          }),
          (t._getMenuElement = function () {
            if (!this._menu) {
              var t = l._getParentFromElement(this._element)
              this._menu = mt(t).find(Lt)[0]
            }
            return this._menu
          }),
          (t._getPlacement = function () {
            var t = mt(this._element).parent(),
              e = Mt
            return (
              t.hasClass(bt)
                ? ((e = Ht), mt(this._menu).hasClass(Nt) && (e = Wt))
                : t.hasClass(St)
                ? (e = Ut)
                : t.hasClass(wt)
                ? (e = Kt)
                : mt(this._menu).hasClass(Nt) && (e = xt),
              e
            )
          }),
          (t._detectNavbar = function () {
            return 0 < mt(this._element).closest('.navbar').length
          }),
          (t._getPopperConfig = function () {
            var e = this,
              t = {}
            'function' == typeof this._config.offset
              ? (t.fn = function (t) {
                  return (
                    (t.offsets = h(
                      {},
                      t.offsets,
                      e._config.offset(t.offsets) || {}
                    )),
                    t
                  )
                })
              : (t.offset = this._config.offset)
            var n = {
              placement: this._getPlacement(),
              modifiers: {
                offset: t,
                flip: { enabled: this._config.flip },
                preventOverflow: { boundariesElement: this._config.boundary },
              },
            }
            return (
              'static' === this._config.display &&
                (n.modifiers.applyStyle = { enabled: !1 }),
              n
            )
          }),
          (l._jQueryInterface = function (e) {
            return this.each(function () {
              var t = mt(this).data(vt)
              if (
                (t ||
                  ((t = new l(this, 'object' == typeof e ? e : null)),
                  mt(this).data(vt, t)),
                'string' == typeof e)
              ) {
                if ('undefined' == typeof t[e])
                  throw new TypeError('No method named "' + e + '"')
                t[e]()
              }
            })
          }),
          (l._clearMenus = function (t) {
            if (!t || (3 !== t.which && ('keyup' !== t.type || 9 === t.which)))
              for (var e = mt.makeArray(mt(kt)), n = 0; n < e.length; n++) {
                var i = l._getParentFromElement(e[n]),
                  r = mt(e[n]).data(vt),
                  s = { relatedTarget: e[n] }
                if (r) {
                  var o = r._menu
                  if (
                    mt(i).hasClass(Dt) &&
                    !(
                      t &&
                      (('click' === t.type &&
                        /input|textarea/i.test(t.target.tagName)) ||
                        ('keyup' === t.type && 9 === t.which)) &&
                      mt.contains(i, t.target)
                    )
                  ) {
                    var a = mt.Event(It.HIDE, s)
                    mt(i).trigger(a),
                      a.isDefaultPrevented() ||
                        ('ontouchstart' in document.documentElement &&
                          mt(document.body)
                            .children()
                            .off('mouseover', null, mt.noop),
                        e[n].setAttribute('aria-expanded', 'false'),
                        mt(o).removeClass(Dt),
                        mt(i).removeClass(Dt).trigger(mt.Event(It.HIDDEN, s)))
                  }
                }
              }
          }),
          (l._getParentFromElement = function (t) {
            var e,
              n = Cn.getSelectorFromElement(t)
            return n && (e = mt(n)[0]), e || t.parentNode
          }),
          (l._dataApiKeydownHandler = function (t) {
            if (
              (/input|textarea/i.test(t.target.tagName)
                ? !(
                    32 === t.which ||
                    (27 !== t.which &&
                      ((40 !== t.which && 38 !== t.which) ||
                        mt(t.target).closest(Lt).length))
                  )
                : Ct.test(t.which)) &&
              (t.preventDefault(),
              t.stopPropagation(),
              !this.disabled && !mt(this).hasClass(At))
            ) {
              var e = l._getParentFromElement(this),
                n = mt(e).hasClass(Dt)
              if (
                (n || (27 === t.which && 32 === t.which)) &&
                (!n || (27 !== t.which && 32 !== t.which))
              ) {
                var i = mt(e).find(Rt).get()
                if (0 !== i.length) {
                  var r = i.indexOf(t.target)
                  38 === t.which && 0 < r && r--,
                    40 === t.which && r < i.length - 1 && r++,
                    r < 0 && (r = 0),
                    i[r].focus()
                }
              } else {
                if (27 === t.which) {
                  var s = mt(e).find(kt)[0]
                  mt(s).trigger('focus')
                }
                mt(this).trigger('click')
              }
            }
          }),
          o(l, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.1.0'
              },
            },
            {
              key: 'Default',
              get: function () {
                return Ft
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return Vt
              },
            },
          ]),
          l
        )
      })()),
      mt(document)
        .on(It.KEYDOWN_DATA_API, kt, Qt._dataApiKeydownHandler)
        .on(It.KEYDOWN_DATA_API, Lt, Qt._dataApiKeydownHandler)
        .on(It.CLICK_DATA_API + ' ' + It.KEYUP_DATA_API, Qt._clearMenus)
        .on(It.CLICK_DATA_API, kt, function (t) {
          t.preventDefault(),
            t.stopPropagation(),
            Qt._jQueryInterface.call(mt(this), 'toggle')
        })
        .on(It.CLICK_DATA_API, Pt, function (t) {
          t.stopPropagation()
        }),
      (mt.fn[pt] = Qt._jQueryInterface),
      (mt.fn[pt].Constructor = Qt),
      (mt.fn[pt].noConflict = function () {
        return (mt.fn[pt] = Tt), Qt._jQueryInterface
      }),
      Qt),
    wn =
      ((Yt = 'modal'),
      (qt = '.' + (Gt = 'bs.modal')),
      (zt = (Bt = e).fn[Yt]),
      (Xt = { backdrop: !0, keyboard: !0, focus: !0, show: !0 }),
      (Jt = {
        backdrop: '(boolean|string)',
        keyboard: 'boolean',
        focus: 'boolean',
        show: 'boolean',
      }),
      (Zt = {
        HIDE: 'hide' + qt,
        HIDDEN: 'hidden' + qt,
        SHOW: 'show' + qt,
        SHOWN: 'shown' + qt,
        FOCUSIN: 'focusin' + qt,
        RESIZE: 'resize' + qt,
        CLICK_DISMISS: 'click.dismiss' + qt,
        KEYDOWN_DISMISS: 'keydown.dismiss' + qt,
        MOUSEUP_DISMISS: 'mouseup.dismiss' + qt,
        MOUSEDOWN_DISMISS: 'mousedown.dismiss' + qt,
        CLICK_DATA_API: 'click' + qt + '.data-api',
      }),
      ($t = 'modal-scrollbar-measure'),
      (te = 'modal-backdrop'),
      (ee = 'modal-open'),
      (ne = 'fade'),
      (ie = 'show'),
      (re = {
        DIALOG: '.modal-dialog',
        DATA_TOGGLE: '[data-toggle="modal"]',
        DATA_DISMISS: '[data-dismiss="modal"]',
        FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
        STICKY_CONTENT: '.sticky-top',
        NAVBAR_TOGGLER: '.navbar-toggler',
      }),
      (se = (function () {
        function r(t, e) {
          ;(this._config = this._getConfig(e)),
            (this._element = t),
            (this._dialog = Bt(t).find(re.DIALOG)[0]),
            (this._backdrop = null),
            (this._isShown = !1),
            (this._isBodyOverflowing = !1),
            (this._ignoreBackdropClick = !1),
            (this._scrollbarWidth = 0)
        }
        var t = r.prototype
        return (
          (t.toggle = function (t) {
            return this._isShown ? this.hide() : this.show(t)
          }),
          (t.show = function (t) {
            var e = this
            if (!this._isTransitioning && !this._isShown) {
              Bt(this._element).hasClass(ne) && (this._isTransitioning = !0)
              var n = Bt.Event(Zt.SHOW, { relatedTarget: t })
              Bt(this._element).trigger(n),
                this._isShown ||
                  n.isDefaultPrevented() ||
                  ((this._isShown = !0),
                  this._checkScrollbar(),
                  this._setScrollbar(),
                  this._adjustDialog(),
                  Bt(document.body).addClass(ee),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  Bt(this._element).on(
                    Zt.CLICK_DISMISS,
                    re.DATA_DISMISS,
                    function (t) {
                      return e.hide(t)
                    }
                  ),
                  Bt(this._dialog).on(Zt.MOUSEDOWN_DISMISS, function () {
                    Bt(e._element).one(Zt.MOUSEUP_DISMISS, function (t) {
                      Bt(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0)
                    })
                  }),
                  this._showBackdrop(function () {
                    return e._showElement(t)
                  }))
            }
          }),
          (t.hide = function (t) {
            var e = this
            if (
              (t && t.preventDefault(), !this._isTransitioning && this._isShown)
            ) {
              var n = Bt.Event(Zt.HIDE)
              if (
                (Bt(this._element).trigger(n),
                this._isShown && !n.isDefaultPrevented())
              ) {
                this._isShown = !1
                var i = Bt(this._element).hasClass(ne)
                if (
                  (i && (this._isTransitioning = !0),
                  this._setEscapeEvent(),
                  this._setResizeEvent(),
                  Bt(document).off(Zt.FOCUSIN),
                  Bt(this._element).removeClass(ie),
                  Bt(this._element).off(Zt.CLICK_DISMISS),
                  Bt(this._dialog).off(Zt.MOUSEDOWN_DISMISS),
                  i)
                ) {
                  var r = Cn.getTransitionDurationFromElement(this._element)
                  Bt(this._element)
                    .one(Cn.TRANSITION_END, function (t) {
                      return e._hideModal(t)
                    })
                    .emulateTransitionEnd(r)
                } else this._hideModal()
              }
            }
          }),
          (t.dispose = function () {
            Bt.removeData(this._element, Gt),
              Bt(window, document, this._element, this._backdrop).off(qt),
              (this._config = null),
              (this._element = null),
              (this._dialog = null),
              (this._backdrop = null),
              (this._isShown = null),
              (this._isBodyOverflowing = null),
              (this._ignoreBackdropClick = null),
              (this._scrollbarWidth = null)
          }),
          (t.handleUpdate = function () {
            this._adjustDialog()
          }),
          (t._getConfig = function (t) {
            return (t = h({}, Xt, t)), Cn.typeCheckConfig(Yt, t, Jt), t
          }),
          (t._showElement = function (t) {
            var e = this,
              n = Bt(this._element).hasClass(ne)
            ;(this._element.parentNode &&
              this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
              document.body.appendChild(this._element),
              (this._element.style.display = 'block'),
              this._element.removeAttribute('aria-hidden'),
              (this._element.scrollTop = 0),
              n && Cn.reflow(this._element),
              Bt(this._element).addClass(ie),
              this._config.focus && this._enforceFocus()
            var i = Bt.Event(Zt.SHOWN, { relatedTarget: t }),
              r = function () {
                e._config.focus && e._element.focus(),
                  (e._isTransitioning = !1),
                  Bt(e._element).trigger(i)
              }
            if (n) {
              var s = Cn.getTransitionDurationFromElement(this._element)
              Bt(this._dialog).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
            } else r()
          }),
          (t._enforceFocus = function () {
            var e = this
            Bt(document)
              .off(Zt.FOCUSIN)
              .on(Zt.FOCUSIN, function (t) {
                document !== t.target &&
                  e._element !== t.target &&
                  0 === Bt(e._element).has(t.target).length &&
                  e._element.focus()
              })
          }),
          (t._setEscapeEvent = function () {
            var e = this
            this._isShown && this._config.keyboard
              ? Bt(this._element).on(Zt.KEYDOWN_DISMISS, function (t) {
                  27 === t.which && (t.preventDefault(), e.hide())
                })
              : this._isShown || Bt(this._element).off(Zt.KEYDOWN_DISMISS)
          }),
          (t._setResizeEvent = function () {
            var e = this
            this._isShown
              ? Bt(window).on(Zt.RESIZE, function (t) {
                  return e.handleUpdate(t)
                })
              : Bt(window).off(Zt.RESIZE)
          }),
          (t._hideModal = function () {
            var t = this
            ;(this._element.style.display = 'none'),
              this._element.setAttribute('aria-hidden', !0),
              (this._isTransitioning = !1),
              this._showBackdrop(function () {
                Bt(document.body).removeClass(ee),
                  t._resetAdjustments(),
                  t._resetScrollbar(),
                  Bt(t._element).trigger(Zt.HIDDEN)
              })
          }),
          (t._removeBackdrop = function () {
            this._backdrop &&
              (Bt(this._backdrop).remove(), (this._backdrop = null))
          }),
          (t._showBackdrop = function (t) {
            var e = this,
              n = Bt(this._element).hasClass(ne) ? ne : ''
            if (this._isShown && this._config.backdrop) {
              if (
                ((this._backdrop = document.createElement('div')),
                (this._backdrop.className = te),
                n && Bt(this._backdrop).addClass(n),
                Bt(this._backdrop).appendTo(document.body),
                Bt(this._element).on(Zt.CLICK_DISMISS, function (t) {
                  e._ignoreBackdropClick
                    ? (e._ignoreBackdropClick = !1)
                    : t.target === t.currentTarget &&
                      ('static' === e._config.backdrop
                        ? e._element.focus()
                        : e.hide())
                }),
                n && Cn.reflow(this._backdrop),
                Bt(this._backdrop).addClass(ie),
                !t)
              )
                return
              if (!n) return void t()
              var i = Cn.getTransitionDurationFromElement(this._backdrop)
              Bt(this._backdrop)
                .one(Cn.TRANSITION_END, t)
                .emulateTransitionEnd(i)
            } else if (!this._isShown && this._backdrop) {
              Bt(this._backdrop).removeClass(ie)
              var r = function () {
                e._removeBackdrop(), t && t()
              }
              if (Bt(this._element).hasClass(ne)) {
                var s = Cn.getTransitionDurationFromElement(this._backdrop)
                Bt(this._backdrop)
                  .one(Cn.TRANSITION_END, r)
                  .emulateTransitionEnd(s)
              } else r()
            } else t && t()
          }),
          (t._adjustDialog = function () {
            var t =
              this._element.scrollHeight > document.documentElement.clientHeight
            !this._isBodyOverflowing &&
              t &&
              (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
              this._isBodyOverflowing &&
                !t &&
                (this._element.style.paddingRight = this._scrollbarWidth + 'px')
          }),
          (t._resetAdjustments = function () {
            ;(this._element.style.paddingLeft = ''),
              (this._element.style.paddingRight = '')
          }),
          (t._checkScrollbar = function () {
            var t = document.body.getBoundingClientRect()
            ;(this._isBodyOverflowing = t.left + t.right < window.innerWidth),
              (this._scrollbarWidth = this._getScrollbarWidth())
          }),
          (t._setScrollbar = function () {
            var r = this
            if (this._isBodyOverflowing) {
              Bt(re.FIXED_CONTENT).each(function (t, e) {
                var n = Bt(e)[0].style.paddingRight,
                  i = Bt(e).css('padding-right')
                Bt(e)
                  .data('padding-right', n)
                  .css(
                    'padding-right',
                    parseFloat(i) + r._scrollbarWidth + 'px'
                  )
              }),
                Bt(re.STICKY_CONTENT).each(function (t, e) {
                  var n = Bt(e)[0].style.marginRight,
                    i = Bt(e).css('margin-right')
                  Bt(e)
                    .data('margin-right', n)
                    .css(
                      'margin-right',
                      parseFloat(i) - r._scrollbarWidth + 'px'
                    )
                }),
                Bt(re.NAVBAR_TOGGLER).each(function (t, e) {
                  var n = Bt(e)[0].style.marginRight,
                    i = Bt(e).css('margin-right')
                  Bt(e)
                    .data('margin-right', n)
                    .css(
                      'margin-right',
                      parseFloat(i) + r._scrollbarWidth + 'px'
                    )
                })
              var t = document.body.style.paddingRight,
                e = Bt(document.body).css('padding-right')
              Bt(document.body)
                .data('padding-right', t)
                .css(
                  'padding-right',
                  parseFloat(e) + this._scrollbarWidth + 'px'
                )
            }
          }),
          (t._resetScrollbar = function () {
            Bt(re.FIXED_CONTENT).each(function (t, e) {
              var n = Bt(e).data('padding-right')
              'undefined' != typeof n &&
                Bt(e).css('padding-right', n).removeData('padding-right')
            }),
              Bt(re.STICKY_CONTENT + ', ' + re.NAVBAR_TOGGLER).each(function (
                t,
                e
              ) {
                var n = Bt(e).data('margin-right')
                'undefined' != typeof n &&
                  Bt(e).css('margin-right', n).removeData('margin-right')
              })
            var t = Bt(document.body).data('padding-right')
            'undefined' != typeof t &&
              Bt(document.body)
                .css('padding-right', t)
                .removeData('padding-right')
          }),
          (t._getScrollbarWidth = function () {
            var t = document.createElement('div')
            ;(t.className = $t), document.body.appendChild(t)
            var e = t.getBoundingClientRect().width - t.clientWidth
            return document.body.removeChild(t), e
          }),
          (r._jQueryInterface = function (n, i) {
            return this.each(function () {
              var t = Bt(this).data(Gt),
                e = h({}, r.Default, Bt(this).data(), 'object' == typeof n && n)
              if (
                (t || ((t = new r(this, e)), Bt(this).data(Gt, t)),
                'string' == typeof n)
              ) {
                if ('undefined' == typeof t[n])
                  throw new TypeError('No method named "' + n + '"')
                t[n](i)
              } else e.show && t.show(i)
            })
          }),
          o(r, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.1.0'
              },
            },
            {
              key: 'Default',
              get: function () {
                return Xt
              },
            },
          ]),
          r
        )
      })()),
      Bt(document).on(Zt.CLICK_DATA_API, re.DATA_TOGGLE, function (t) {
        var e,
          n = this,
          i = Cn.getSelectorFromElement(this)
        i && (e = Bt(i)[0])
        var r = Bt(e).data(Gt) ? 'toggle' : h({}, Bt(e).data(), Bt(this).data())
        ;('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault()
        var s = Bt(e).one(Zt.SHOW, function (t) {
          t.isDefaultPrevented() ||
            s.one(Zt.HIDDEN, function () {
              Bt(n).is(':visible') && n.focus()
            })
        })
        se._jQueryInterface.call(Bt(e), r, this)
      }),
      (Bt.fn[Yt] = se._jQueryInterface),
      (Bt.fn[Yt].Constructor = se),
      (Bt.fn[Yt].noConflict = function () {
        return (Bt.fn[Yt] = zt), se._jQueryInterface
      }),
      se),
    Nn =
      ((ae = 'tooltip'),
      (he = '.' + (le = 'bs.tooltip')),
      (ce = (oe = e).fn[ae]),
      (ue = 'bs-tooltip'),
      (fe = new RegExp('(^|\\s)' + ue + '\\S+', 'g')),
      (ge = {
        animation: !0,
        template:
          '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: 'hover focus',
        title: '',
        delay: 0,
        html: !(_e = {
          AUTO: 'auto',
          TOP: 'top',
          RIGHT: 'right',
          BOTTOM: 'bottom',
          LEFT: 'left',
        }),
        selector: !(de = {
          animation: 'boolean',
          template: 'string',
          title: '(string|element|function)',
          trigger: 'string',
          delay: '(number|object)',
          html: 'boolean',
          selector: '(string|boolean)',
          placement: '(string|function)',
          offset: '(number|string)',
          container: '(string|element|boolean)',
          fallbackPlacement: '(string|array)',
          boundary: '(string|element)',
        }),
        placement: 'top',
        offset: 0,
        container: !1,
        fallbackPlacement: 'flip',
        boundary: 'scrollParent',
      }),
      (pe = 'out'),
      (ve = {
        HIDE: 'hide' + he,
        HIDDEN: 'hidden' + he,
        SHOW: (me = 'show') + he,
        SHOWN: 'shown' + he,
        INSERTED: 'inserted' + he,
        CLICK: 'click' + he,
        FOCUSIN: 'focusin' + he,
        FOCUSOUT: 'focusout' + he,
        MOUSEENTER: 'mouseenter' + he,
        MOUSELEAVE: 'mouseleave' + he,
      }),
      (Ee = 'fade'),
      (ye = 'show'),
      (Te = '.tooltip-inner'),
      (Ce = '.arrow'),
      (Ie = 'hover'),
      (Ae = 'focus'),
      (De = 'click'),
      (be = 'manual'),
      (Se = (function () {
        function i(t, e) {
          if ('undefined' == typeof c)
            throw new TypeError(
              'Bootstrap tooltips require Popper.js (https://popper.js.org)'
            )
          ;(this._isEnabled = !0),
            (this._timeout = 0),
            (this._hoverState = ''),
            (this._activeTrigger = {}),
            (this._popper = null),
            (this.element = t),
            (this.config = this._getConfig(e)),
            (this.tip = null),
            this._setListeners()
        }
        var t = i.prototype
        return (
          (t.enable = function () {
            this._isEnabled = !0
          }),
          (t.disable = function () {
            this._isEnabled = !1
          }),
          (t.toggleEnabled = function () {
            this._isEnabled = !this._isEnabled
          }),
          (t.toggle = function (t) {
            if (this._isEnabled)
              if (t) {
                var e = this.constructor.DATA_KEY,
                  n = oe(t.currentTarget).data(e)
                n ||
                  ((n = new this.constructor(
                    t.currentTarget,
                    this._getDelegateConfig()
                  )),
                  oe(t.currentTarget).data(e, n)),
                  (n._activeTrigger.click = !n._activeTrigger.click),
                  n._isWithActiveTrigger()
                    ? n._enter(null, n)
                    : n._leave(null, n)
              } else {
                if (oe(this.getTipElement()).hasClass(ye))
                  return void this._leave(null, this)
                this._enter(null, this)
              }
          }),
          (t.dispose = function () {
            clearTimeout(this._timeout),
              oe.removeData(this.element, this.constructor.DATA_KEY),
              oe(this.element).off(this.constructor.EVENT_KEY),
              oe(this.element).closest('.modal').off('hide.bs.modal'),
              this.tip && oe(this.tip).remove(),
              (this._isEnabled = null),
              (this._timeout = null),
              (this._hoverState = null),
              (this._activeTrigger = null) !== this._popper &&
                this._popper.destroy(),
              (this._popper = null),
              (this.element = null),
              (this.config = null),
              (this.tip = null)
          }),
          (t.show = function () {
            var e = this
            if ('none' === oe(this.element).css('display'))
              throw new Error('Please use show on visible elements')
            var t = oe.Event(this.constructor.Event.SHOW)
            if (this.isWithContent() && this._isEnabled) {
              oe(this.element).trigger(t)
              var n = oe.contains(
                this.element.ownerDocument.documentElement,
                this.element
              )
              if (t.isDefaultPrevented() || !n) return
              var i = this.getTipElement(),
                r = Cn.getUID(this.constructor.NAME)
              i.setAttribute('id', r),
                this.element.setAttribute('aria-describedby', r),
                this.setContent(),
                this.config.animation && oe(i).addClass(Ee)
              var s =
                  'function' == typeof this.config.placement
                    ? this.config.placement.call(this, i, this.element)
                    : this.config.placement,
                o = this._getAttachment(s)
              this.addAttachmentClass(o)
              var a =
                !1 === this.config.container
                  ? document.body
                  : oe(this.config.container)
              oe(i).data(this.constructor.DATA_KEY, this),
                oe.contains(
                  this.element.ownerDocument.documentElement,
                  this.tip
                ) || oe(i).appendTo(a),
                oe(this.element).trigger(this.constructor.Event.INSERTED),
                (this._popper = new c(this.element, i, {
                  placement: o,
                  modifiers: {
                    offset: { offset: this.config.offset },
                    flip: { behavior: this.config.fallbackPlacement },
                    arrow: { element: Ce },
                    preventOverflow: {
                      boundariesElement: this.config.boundary,
                    },
                  },
                  onCreate: function (t) {
                    t.originalPlacement !== t.placement &&
                      e._handlePopperPlacementChange(t)
                  },
                  onUpdate: function (t) {
                    e._handlePopperPlacementChange(t)
                  },
                })),
                oe(i).addClass(ye),
                'ontouchstart' in document.documentElement &&
                  oe(document.body).children().on('mouseover', null, oe.noop)
              var l = function () {
                e.config.animation && e._fixTransition()
                var t = e._hoverState
                ;(e._hoverState = null),
                  oe(e.element).trigger(e.constructor.Event.SHOWN),
                  t === pe && e._leave(null, e)
              }
              if (oe(this.tip).hasClass(Ee)) {
                var h = Cn.getTransitionDurationFromElement(this.tip)
                oe(this.tip).one(Cn.TRANSITION_END, l).emulateTransitionEnd(h)
              } else l()
            }
          }),
          (t.hide = function (t) {
            var e = this,
              n = this.getTipElement(),
              i = oe.Event(this.constructor.Event.HIDE),
              r = function () {
                e._hoverState !== me &&
                  n.parentNode &&
                  n.parentNode.removeChild(n),
                  e._cleanTipClass(),
                  e.element.removeAttribute('aria-describedby'),
                  oe(e.element).trigger(e.constructor.Event.HIDDEN),
                  null !== e._popper && e._popper.destroy(),
                  t && t()
              }
            if ((oe(this.element).trigger(i), !i.isDefaultPrevented())) {
              if (
                (oe(n).removeClass(ye),
                'ontouchstart' in document.documentElement &&
                  oe(document.body).children().off('mouseover', null, oe.noop),
                (this._activeTrigger[De] = !1),
                (this._activeTrigger[Ae] = !1),
                (this._activeTrigger[Ie] = !1),
                oe(this.tip).hasClass(Ee))
              ) {
                var s = Cn.getTransitionDurationFromElement(n)
                oe(n).one(Cn.TRANSITION_END, r).emulateTransitionEnd(s)
              } else r()
              this._hoverState = ''
            }
          }),
          (t.update = function () {
            null !== this._popper && this._popper.scheduleUpdate()
          }),
          (t.isWithContent = function () {
            return Boolean(this.getTitle())
          }),
          (t.addAttachmentClass = function (t) {
            oe(this.getTipElement()).addClass(ue + '-' + t)
          }),
          (t.getTipElement = function () {
            return (
              (this.tip = this.tip || oe(this.config.template)[0]), this.tip
            )
          }),
          (t.setContent = function () {
            var t = oe(this.getTipElement())
            this.setElementContent(t.find(Te), this.getTitle()),
              t.removeClass(Ee + ' ' + ye)
          }),
          (t.setElementContent = function (t, e) {
            var n = this.config.html
            'object' == typeof e && (e.nodeType || e.jquery)
              ? n
                ? oe(e).parent().is(t) || t.empty().append(e)
                : t.text(oe(e).text())
              : t[n ? 'html' : 'text'](e)
          }),
          (t.getTitle = function () {
            var t = this.element.getAttribute('data-original-title')
            return (
              t ||
                (t =
                  'function' == typeof this.config.title
                    ? this.config.title.call(this.element)
                    : this.config.title),
              t
            )
          }),
          (t._getAttachment = function (t) {
            return _e[t.toUpperCase()]
          }),
          (t._setListeners = function () {
            var i = this
            this.config.trigger.split(' ').forEach(function (t) {
              if ('click' === t)
                oe(i.element).on(
                  i.constructor.Event.CLICK,
                  i.config.selector,
                  function (t) {
                    return i.toggle(t)
                  }
                )
              else if (t !== be) {
                var e =
                    t === Ie
                      ? i.constructor.Event.MOUSEENTER
                      : i.constructor.Event.FOCUSIN,
                  n =
                    t === Ie
                      ? i.constructor.Event.MOUSELEAVE
                      : i.constructor.Event.FOCUSOUT
                oe(i.element)
                  .on(e, i.config.selector, function (t) {
                    return i._enter(t)
                  })
                  .on(n, i.config.selector, function (t) {
                    return i._leave(t)
                  })
              }
              oe(i.element)
                .closest('.modal')
                .on('hide.bs.modal', function () {
                  return i.hide()
                })
            }),
              this.config.selector
                ? (this.config = h({}, this.config, {
                    trigger: 'manual',
                    selector: '',
                  }))
                : this._fixTitle()
          }),
          (t._fixTitle = function () {
            var t = typeof this.element.getAttribute('data-original-title')
            ;(this.element.getAttribute('title') || 'string' !== t) &&
              (this.element.setAttribute(
                'data-original-title',
                this.element.getAttribute('title') || ''
              ),
              this.element.setAttribute('title', ''))
          }),
          (t._enter = function (t, e) {
            var n = this.constructor.DATA_KEY
            ;(e = e || oe(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              oe(t.currentTarget).data(n, e)),
              t && (e._activeTrigger['focusin' === t.type ? Ae : Ie] = !0),
              oe(e.getTipElement()).hasClass(ye) || e._hoverState === me
                ? (e._hoverState = me)
                : (clearTimeout(e._timeout),
                  (e._hoverState = me),
                  e.config.delay && e.config.delay.show
                    ? (e._timeout = setTimeout(function () {
                        e._hoverState === me && e.show()
                      }, e.config.delay.show))
                    : e.show())
          }),
          (t._leave = function (t, e) {
            var n = this.constructor.DATA_KEY
            ;(e = e || oe(t.currentTarget).data(n)) ||
              ((e = new this.constructor(
                t.currentTarget,
                this._getDelegateConfig()
              )),
              oe(t.currentTarget).data(n, e)),
              t && (e._activeTrigger['focusout' === t.type ? Ae : Ie] = !1),
              e._isWithActiveTrigger() ||
                (clearTimeout(e._timeout),
                (e._hoverState = pe),
                e.config.delay && e.config.delay.hide
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === pe && e.hide()
                    }, e.config.delay.hide))
                  : e.hide())
          }),
          (t._isWithActiveTrigger = function () {
            for (var t in this._activeTrigger)
              if (this._activeTrigger[t]) return !0
            return !1
          }),
          (t._getConfig = function (t) {
            return (
              'number' ==
                typeof (t = h(
                  {},
                  this.constructor.Default,
                  oe(this.element).data(),
                  t
                )).delay && (t.delay = { show: t.delay, hide: t.delay }),
              'number' == typeof t.title && (t.title = t.title.toString()),
              'number' == typeof t.content &&
                (t.content = t.content.toString()),
              Cn.typeCheckConfig(ae, t, this.constructor.DefaultType),
              t
            )
          }),
          (t._getDelegateConfig = function () {
            var t = {}
            if (this.config)
              for (var e in this.config)
                this.constructor.Default[e] !== this.config[e] &&
                  (t[e] = this.config[e])
            return t
          }),
          (t._cleanTipClass = function () {
            var t = oe(this.getTipElement()),
              e = t.attr('class').match(fe)
            null !== e && 0 < e.length && t.removeClass(e.join(''))
          }),
          (t._handlePopperPlacementChange = function (t) {
            this._cleanTipClass(),
              this.addAttachmentClass(this._getAttachment(t.placement))
          }),
          (t._fixTransition = function () {
            var t = this.getTipElement(),
              e = this.config.animation
            null === t.getAttribute('x-placement') &&
              (oe(t).removeClass(Ee),
              (this.config.animation = !1),
              this.hide(),
              this.show(),
              (this.config.animation = e))
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = oe(this).data(le),
                e = 'object' == typeof n && n
              if (
                (t || !/dispose|hide/.test(n)) &&
                (t || ((t = new i(this, e)), oe(this).data(le, t)),
                'string' == typeof n)
              ) {
                if ('undefined' == typeof t[n])
                  throw new TypeError('No method named "' + n + '"')
                t[n]()
              }
            })
          }),
          o(i, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.1.0'
              },
            },
            {
              key: 'Default',
              get: function () {
                return ge
              },
            },
            {
              key: 'NAME',
              get: function () {
                return ae
              },
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return le
              },
            },
            {
              key: 'Event',
              get: function () {
                return ve
              },
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return he
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return de
              },
            },
          ]),
          i
        )
      })()),
      (oe.fn[ae] = Se._jQueryInterface),
      (oe.fn[ae].Constructor = Se),
      (oe.fn[ae].noConflict = function () {
        return (oe.fn[ae] = ce), Se._jQueryInterface
      }),
      Se),
    On =
      ((Ne = 'popover'),
      (ke = '.' + (Oe = 'bs.popover')),
      (Pe = (we = e).fn[Ne]),
      (Le = 'bs-popover'),
      (je = new RegExp('(^|\\s)' + Le + '\\S+', 'g')),
      (Re = h({}, Nn.Default, {
        placement: 'right',
        trigger: 'click',
        content: '',
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
      })),
      (He = h({}, Nn.DefaultType, { content: '(string|element|function)' })),
      (We = 'fade'),
      (xe = '.popover-header'),
      (Ue = '.popover-body'),
      (Ke = {
        HIDE: 'hide' + ke,
        HIDDEN: 'hidden' + ke,
        SHOW: (Me = 'show') + ke,
        SHOWN: 'shown' + ke,
        INSERTED: 'inserted' + ke,
        CLICK: 'click' + ke,
        FOCUSIN: 'focusin' + ke,
        FOCUSOUT: 'focusout' + ke,
        MOUSEENTER: 'mouseenter' + ke,
        MOUSELEAVE: 'mouseleave' + ke,
      }),
      (Fe = (function (t) {
        var e, n
        function i() {
          return t.apply(this, arguments) || this
        }
        ;(n = t),
          ((e = i).prototype = Object.create(n.prototype)),
          ((e.prototype.constructor = e).__proto__ = n)
        var r = i.prototype
        return (
          (r.isWithContent = function () {
            return this.getTitle() || this._getContent()
          }),
          (r.addAttachmentClass = function (t) {
            we(this.getTipElement()).addClass(Le + '-' + t)
          }),
          (r.getTipElement = function () {
            return (
              (this.tip = this.tip || we(this.config.template)[0]), this.tip
            )
          }),
          (r.setContent = function () {
            var t = we(this.getTipElement())
            this.setElementContent(t.find(xe), this.getTitle())
            var e = this._getContent()
            'function' == typeof e && (e = e.call(this.element)),
              this.setElementContent(t.find(Ue), e),
              t.removeClass(We + ' ' + Me)
          }),
          (r._getContent = function () {
            return (
              this.element.getAttribute('data-content') || this.config.content
            )
          }),
          (r._cleanTipClass = function () {
            var t = we(this.getTipElement()),
              e = t.attr('class').match(je)
            null !== e && 0 < e.length && t.removeClass(e.join(''))
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = we(this).data(Oe),
                e = 'object' == typeof n ? n : null
              if (
                (t || !/destroy|hide/.test(n)) &&
                (t || ((t = new i(this, e)), we(this).data(Oe, t)),
                'string' == typeof n)
              ) {
                if ('undefined' == typeof t[n])
                  throw new TypeError('No method named "' + n + '"')
                t[n]()
              }
            })
          }),
          o(i, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.1.0'
              },
            },
            {
              key: 'Default',
              get: function () {
                return Re
              },
            },
            {
              key: 'NAME',
              get: function () {
                return Ne
              },
            },
            {
              key: 'DATA_KEY',
              get: function () {
                return Oe
              },
            },
            {
              key: 'Event',
              get: function () {
                return Ke
              },
            },
            {
              key: 'EVENT_KEY',
              get: function () {
                return ke
              },
            },
            {
              key: 'DefaultType',
              get: function () {
                return He
              },
            },
          ]),
          i
        )
      })(Nn)),
      (we.fn[Ne] = Fe._jQueryInterface),
      (we.fn[Ne].Constructor = Fe),
      (we.fn[Ne].noConflict = function () {
        return (we.fn[Ne] = Pe), Fe._jQueryInterface
      }),
      Fe),
    kn =
      ((Qe = 'scrollspy'),
      (Ye = '.' + (Be = 'bs.scrollspy')),
      (Ge = (Ve = e).fn[Qe]),
      (qe = { offset: 10, method: 'auto', target: '' }),
      (ze = { offset: 'number', method: 'string', target: '(string|element)' }),
      (Xe = {
        ACTIVATE: 'activate' + Ye,
        SCROLL: 'scroll' + Ye,
        LOAD_DATA_API: 'load' + Ye + '.data-api',
      }),
      (Je = 'dropdown-item'),
      (Ze = 'active'),
      ($e = {
        DATA_SPY: '[data-spy="scroll"]',
        ACTIVE: '.active',
        NAV_LIST_GROUP: '.nav, .list-group',
        NAV_LINKS: '.nav-link',
        NAV_ITEMS: '.nav-item',
        LIST_ITEMS: '.list-group-item',
        DROPDOWN: '.dropdown',
        DROPDOWN_ITEMS: '.dropdown-item',
        DROPDOWN_TOGGLE: '.dropdown-toggle',
      }),
      (tn = 'offset'),
      (en = 'position'),
      (nn = (function () {
        function n(t, e) {
          var n = this
          ;(this._element = t),
            (this._scrollElement = 'BODY' === t.tagName ? window : t),
            (this._config = this._getConfig(e)),
            (this._selector =
              this._config.target +
              ' ' +
              $e.NAV_LINKS +
              ',' +
              this._config.target +
              ' ' +
              $e.LIST_ITEMS +
              ',' +
              this._config.target +
              ' ' +
              $e.DROPDOWN_ITEMS),
            (this._offsets = []),
            (this._targets = []),
            (this._activeTarget = null),
            (this._scrollHeight = 0),
            Ve(this._scrollElement).on(Xe.SCROLL, function (t) {
              return n._process(t)
            }),
            this.refresh(),
            this._process()
        }
        var t = n.prototype
        return (
          (t.refresh = function () {
            var e = this,
              t = this._scrollElement === this._scrollElement.window ? tn : en,
              r = 'auto' === this._config.method ? t : this._config.method,
              s = r === en ? this._getScrollTop() : 0
            ;(this._offsets = []),
              (this._targets = []),
              (this._scrollHeight = this._getScrollHeight()),
              Ve.makeArray(Ve(this._selector))
                .map(function (t) {
                  var e,
                    n = Cn.getSelectorFromElement(t)
                  if ((n && (e = Ve(n)[0]), e)) {
                    var i = e.getBoundingClientRect()
                    if (i.width || i.height) return [Ve(e)[r]().top + s, n]
                  }
                  return null
                })
                .filter(function (t) {
                  return t
                })
                .sort(function (t, e) {
                  return t[0] - e[0]
                })
                .forEach(function (t) {
                  e._offsets.push(t[0]), e._targets.push(t[1])
                })
          }),
          (t.dispose = function () {
            Ve.removeData(this._element, Be),
              Ve(this._scrollElement).off(Ye),
              (this._element = null),
              (this._scrollElement = null),
              (this._config = null),
              (this._selector = null),
              (this._offsets = null),
              (this._targets = null),
              (this._activeTarget = null),
              (this._scrollHeight = null)
          }),
          (t._getConfig = function (t) {
            if ('string' != typeof (t = h({}, qe, t)).target) {
              var e = Ve(t.target).attr('id')
              e || ((e = Cn.getUID(Qe)), Ve(t.target).attr('id', e)),
                (t.target = '#' + e)
            }
            return Cn.typeCheckConfig(Qe, t, ze), t
          }),
          (t._getScrollTop = function () {
            return this._scrollElement === window
              ? this._scrollElement.pageYOffset
              : this._scrollElement.scrollTop
          }),
          (t._getScrollHeight = function () {
            return (
              this._scrollElement.scrollHeight ||
              Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
              )
            )
          }),
          (t._getOffsetHeight = function () {
            return this._scrollElement === window
              ? window.innerHeight
              : this._scrollElement.getBoundingClientRect().height
          }),
          (t._process = function () {
            var t = this._getScrollTop() + this._config.offset,
              e = this._getScrollHeight(),
              n = this._config.offset + e - this._getOffsetHeight()
            if ((this._scrollHeight !== e && this.refresh(), n <= t)) {
              var i = this._targets[this._targets.length - 1]
              this._activeTarget !== i && this._activate(i)
            } else {
              if (
                this._activeTarget &&
                t < this._offsets[0] &&
                0 < this._offsets[0]
              )
                return (this._activeTarget = null), void this._clear()
              for (var r = this._offsets.length; r--; ) {
                this._activeTarget !== this._targets[r] &&
                  t >= this._offsets[r] &&
                  ('undefined' == typeof this._offsets[r + 1] ||
                    t < this._offsets[r + 1]) &&
                  this._activate(this._targets[r])
              }
            }
          }),
          (t._activate = function (e) {
            ;(this._activeTarget = e), this._clear()
            var t = this._selector.split(',')
            t = t.map(function (t) {
              return t + '[data-target="' + e + '"],' + t + '[href="' + e + '"]'
            })
            var n = Ve(t.join(','))
            n.hasClass(Je)
              ? (n.closest($e.DROPDOWN).find($e.DROPDOWN_TOGGLE).addClass(Ze),
                n.addClass(Ze))
              : (n.addClass(Ze),
                n
                  .parents($e.NAV_LIST_GROUP)
                  .prev($e.NAV_LINKS + ', ' + $e.LIST_ITEMS)
                  .addClass(Ze),
                n
                  .parents($e.NAV_LIST_GROUP)
                  .prev($e.NAV_ITEMS)
                  .children($e.NAV_LINKS)
                  .addClass(Ze)),
              Ve(this._scrollElement).trigger(Xe.ACTIVATE, { relatedTarget: e })
          }),
          (t._clear = function () {
            Ve(this._selector).filter($e.ACTIVE).removeClass(Ze)
          }),
          (n._jQueryInterface = function (e) {
            return this.each(function () {
              var t = Ve(this).data(Be)
              if (
                (t ||
                  ((t = new n(this, 'object' == typeof e && e)),
                  Ve(this).data(Be, t)),
                'string' == typeof e)
              ) {
                if ('undefined' == typeof t[e])
                  throw new TypeError('No method named "' + e + '"')
                t[e]()
              }
            })
          }),
          o(n, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.1.0'
              },
            },
            {
              key: 'Default',
              get: function () {
                return qe
              },
            },
          ]),
          n
        )
      })()),
      Ve(window).on(Xe.LOAD_DATA_API, function () {
        for (var t = Ve.makeArray(Ve($e.DATA_SPY)), e = t.length; e--; ) {
          var n = Ve(t[e])
          nn._jQueryInterface.call(n, n.data())
        }
      }),
      (Ve.fn[Qe] = nn._jQueryInterface),
      (Ve.fn[Qe].Constructor = nn),
      (Ve.fn[Qe].noConflict = function () {
        return (Ve.fn[Qe] = Ge), nn._jQueryInterface
      }),
      nn),
    Pn =
      ((on = '.' + (sn = 'bs.tab')),
      (an = (rn = e).fn.tab),
      (ln = {
        HIDE: 'hide' + on,
        HIDDEN: 'hidden' + on,
        SHOW: 'show' + on,
        SHOWN: 'shown' + on,
        CLICK_DATA_API: 'click' + on + '.data-api',
      }),
      (hn = 'dropdown-menu'),
      (cn = 'active'),
      (un = 'disabled'),
      (fn = 'fade'),
      (dn = 'show'),
      (_n = '.dropdown'),
      (gn = '.nav, .list-group'),
      (mn = '.active'),
      (pn = '> li > .active'),
      (vn = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]'),
      (En = '.dropdown-toggle'),
      (yn = '> .dropdown-menu .active'),
      (Tn = (function () {
        function i(t) {
          this._element = t
        }
        var t = i.prototype
        return (
          (t.show = function () {
            var n = this
            if (
              !(
                (this._element.parentNode &&
                  this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                  rn(this._element).hasClass(cn)) ||
                rn(this._element).hasClass(un)
              )
            ) {
              var t,
                i,
                e = rn(this._element).closest(gn)[0],
                r = Cn.getSelectorFromElement(this._element)
              if (e) {
                var s = 'UL' === e.nodeName ? pn : mn
                i = (i = rn.makeArray(rn(e).find(s)))[i.length - 1]
              }
              var o = rn.Event(ln.HIDE, { relatedTarget: this._element }),
                a = rn.Event(ln.SHOW, { relatedTarget: i })
              if (
                (i && rn(i).trigger(o),
                rn(this._element).trigger(a),
                !a.isDefaultPrevented() && !o.isDefaultPrevented())
              ) {
                r && (t = rn(r)[0]), this._activate(this._element, e)
                var l = function () {
                  var t = rn.Event(ln.HIDDEN, { relatedTarget: n._element }),
                    e = rn.Event(ln.SHOWN, { relatedTarget: i })
                  rn(i).trigger(t), rn(n._element).trigger(e)
                }
                t ? this._activate(t, t.parentNode, l) : l()
              }
            }
          }),
          (t.dispose = function () {
            rn.removeData(this._element, sn), (this._element = null)
          }),
          (t._activate = function (t, e, n) {
            var i = this,
              r = (
                'UL' === e.nodeName ? rn(e).find(pn) : rn(e).children(mn)
              )[0],
              s = n && r && rn(r).hasClass(fn),
              o = function () {
                return i._transitionComplete(t, r, n)
              }
            if (r && s) {
              var a = Cn.getTransitionDurationFromElement(r)
              rn(r).one(Cn.TRANSITION_END, o).emulateTransitionEnd(a)
            } else o()
          }),
          (t._transitionComplete = function (t, e, n) {
            if (e) {
              rn(e).removeClass(dn + ' ' + cn)
              var i = rn(e.parentNode).find(yn)[0]
              i && rn(i).removeClass(cn),
                'tab' === e.getAttribute('role') &&
                  e.setAttribute('aria-selected', !1)
            }
            if (
              (rn(t).addClass(cn),
              'tab' === t.getAttribute('role') &&
                t.setAttribute('aria-selected', !0),
              Cn.reflow(t),
              rn(t).addClass(dn),
              t.parentNode && rn(t.parentNode).hasClass(hn))
            ) {
              var r = rn(t).closest(_n)[0]
              r && rn(r).find(En).addClass(cn),
                t.setAttribute('aria-expanded', !0)
            }
            n && n()
          }),
          (i._jQueryInterface = function (n) {
            return this.each(function () {
              var t = rn(this),
                e = t.data(sn)
              if (
                (e || ((e = new i(this)), t.data(sn, e)), 'string' == typeof n)
              ) {
                if ('undefined' == typeof e[n])
                  throw new TypeError('No method named "' + n + '"')
                e[n]()
              }
            })
          }),
          o(i, null, [
            {
              key: 'VERSION',
              get: function () {
                return '4.1.0'
              },
            },
          ]),
          i
        )
      })()),
      rn(document).on(ln.CLICK_DATA_API, vn, function (t) {
        t.preventDefault(), Tn._jQueryInterface.call(rn(this), 'show')
      }),
      (rn.fn.tab = Tn._jQueryInterface),
      (rn.fn.tab.Constructor = Tn),
      (rn.fn.tab.noConflict = function () {
        return (rn.fn.tab = an), Tn._jQueryInterface
      }),
      Tn)
  !(function (t) {
    if ('undefined' == typeof t)
      throw new TypeError(
        "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
      )
    var e = t.fn.jquery.split(' ')[0].split('.')
    if (
      (e[0] < 2 && e[1] < 9) ||
      (1 === e[0] && 9 === e[1] && e[2] < 1) ||
      4 <= e[0]
    )
      throw new Error(
        "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
      )
  })(e),
    (t.Util = Cn),
    (t.Alert = In),
    (t.Button = An),
    (t.Carousel = Dn),
    (t.Collapse = bn),
    (t.Dropdown = Sn),
    (t.Modal = wn),
    (t.Popover = On),
    (t.Scrollspy = kn),
    (t.Tab = Pn),
    (t.Tooltip = Nn),
    Object.defineProperty(t, '__esModule', { value: !0 })
})
//# sourceMappingURL=bootstrap.min.js.map

/* ========================
	bootstrap-select.min.js
========================= */
/* Bootstrap-select v1.7.2 (http://silviomoreto.github.io/bootstrap-select) 

 * Copyright 2013-2015 bootstrap-select

 * Licensed under MIT (https://github.com/silviomoreto/bootstrap-select/blob/master/LICENSE) */

!(function (a, b) {
  'function' == typeof define && define.amd
    ? define(['jquery'], function (a) {
        return b(a)
      })
    : 'object' == typeof exports
    ? (module.exports = b(require('jquery')))
    : b(jQuery)
})(this, function () {
  !(function (a) {
    'use strict'
    function b(b) {
      var c = [
        { re: /[\xC0-\xC6]/g, ch: 'A' },
        { re: /[\xE0-\xE6]/g, ch: 'a' },
        { re: /[\xC8-\xCB]/g, ch: 'E' },
        { re: /[\xE8-\xEB]/g, ch: 'e' },
        { re: /[\xCC-\xCF]/g, ch: 'I' },
        { re: /[\xEC-\xEF]/g, ch: 'i' },
        { re: /[\xD2-\xD6]/g, ch: 'O' },
        { re: /[\xF2-\xF6]/g, ch: 'o' },
        { re: /[\xD9-\xDC]/g, ch: 'U' },
        { re: /[\xF9-\xFC]/g, ch: 'u' },
        { re: /[\xC7-\xE7]/g, ch: 'c' },
        { re: /[\xD1]/g, ch: 'N' },
        { re: /[\xF1]/g, ch: 'n' },
      ]
      return (
        a.each(c, function () {
          b = b.replace(this.re, this.ch)
        }),
        b
      )
    }
    function c(a) {
      var b = {
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          '"': '&quot;',
          "'": '&#x27;',
          '`': '&#x60;',
        },
        c = '(?:' + Object.keys(b).join('|') + ')',
        d = new RegExp(c),
        e = new RegExp(c, 'g'),
        f = null == a ? '' : '' + a
      return d.test(f)
        ? f.replace(e, function (a) {
            return b[a]
          })
        : f
    }
    function d(b, c) {
      var d = arguments,
        f = b,
        g = c
      ;[].shift.apply(d)
      var h,
        i = this.each(function () {
          var b = a(this)
          if (b.is('select')) {
            var c = b.data('selectpicker'),
              i = 'object' == typeof f && f
            if (c) {
              if (i)
                for (var j in i) i.hasOwnProperty(j) && (c.options[j] = i[j])
            } else {
              var k = a.extend(
                {},
                e.DEFAULTS,
                a.fn.selectpicker.defaults || {},
                b.data(),
                i
              )
              b.data('selectpicker', (c = new e(this, k, g)))
            }
            'string' == typeof f &&
              (h = c[f] instanceof Function ? c[f].apply(c, d) : c.options[f])
          }
        })
      return 'undefined' != typeof h ? h : i
    }
    String.prototype.includes ||
      !(function () {
        var a = {}.toString,
          b = (function () {
            try {
              var a = {},
                b = Object.defineProperty,
                c = b(a, a, a) && b
            } catch (d) {}
            return c
          })(),
          c = ''.indexOf,
          d = function (b) {
            if (null == this) throw TypeError()
            var d = String(this)
            if (b && '[object RegExp]' == a.call(b)) throw TypeError()
            var e = d.length,
              f = String(b),
              g = f.length,
              h = arguments.length > 1 ? arguments[1] : void 0,
              i = h ? Number(h) : 0
            i != i && (i = 0)
            var j = Math.min(Math.max(i, 0), e)
            return g + j > e ? !1 : -1 != c.call(d, f, i)
          }
        b
          ? b(String.prototype, 'includes', {
              value: d,
              configurable: !0,
              writable: !0,
            })
          : (String.prototype.includes = d)
      })(),
      String.prototype.startsWith ||
        !(function () {
          var a = (function () {
              try {
                var a = {},
                  b = Object.defineProperty,
                  c = b(a, a, a) && b
              } catch (d) {}
              return c
            })(),
            b = {}.toString,
            c = function (a) {
              if (null == this) throw TypeError()
              var c = String(this)
              if (a && '[object RegExp]' == b.call(a)) throw TypeError()
              var d = c.length,
                e = String(a),
                f = e.length,
                g = arguments.length > 1 ? arguments[1] : void 0,
                h = g ? Number(g) : 0
              h != h && (h = 0)
              var i = Math.min(Math.max(h, 0), d)
              if (f + i > d) return !1
              for (var j = -1; ++j < f; )
                if (c.charCodeAt(i + j) != e.charCodeAt(j)) return !1
              return !0
            }
          a
            ? a(String.prototype, 'startsWith', {
                value: c,
                configurable: !0,
                writable: !0,
              })
            : (String.prototype.startsWith = c)
        })(),
      Object.keys ||
        (Object.keys = function (a, b, c) {
          c = []
          for (b in a) c.hasOwnProperty.call(a, b) && c.push(b)
          return c
        }),
      (a.expr[':'].icontains = function (b, c, d) {
        var e = a(b),
          f = (e.data('tokens') || e.text()).toUpperCase()
        return f.includes(d[3].toUpperCase())
      }),
      (a.expr[':'].ibegins = function (b, c, d) {
        var e = a(b),
          f = (e.data('tokens') || e.text()).toUpperCase()
        return f.startsWith(d[3].toUpperCase())
      }),
      (a.expr[':'].aicontains = function (b, c, d) {
        var e = a(b),
          f = (
            e.data('tokens') ||
            e.data('normalizedText') ||
            e.text()
          ).toUpperCase()
        return f.includes(d[3].toUpperCase())
      }),
      (a.expr[':'].aibegins = function (b, c, d) {
        var e = a(b),
          f = (
            e.data('tokens') ||
            e.data('normalizedText') ||
            e.text()
          ).toUpperCase()
        return f.startsWith(d[3].toUpperCase())
      })
    var e = function (b, c, d) {
      d && (d.stopPropagation(), d.preventDefault()),
        (this.$element = a(b)),
        (this.$newElement = null),
        (this.$button = null),
        (this.$menu = null),
        (this.$lis = null),
        (this.options = c),
        null === this.options.title &&
          (this.options.title = this.$element.attr('title')),
        (this.val = e.prototype.val),
        (this.render = e.prototype.render),
        (this.refresh = e.prototype.refresh),
        (this.setStyle = e.prototype.setStyle),
        (this.selectAll = e.prototype.selectAll),
        (this.deselectAll = e.prototype.deselectAll),
        (this.destroy = e.prototype.remove),
        (this.remove = e.prototype.remove),
        (this.show = e.prototype.show),
        (this.hide = e.prototype.hide),
        this.init()
    }
    ;(e.VERSION = '1.7.2'),
      (e.DEFAULTS = {
        noneSelectedText: 'Nothing selected',
        noneResultsText: 'No results matched {0}',
        countSelectedText: function (a, b) {
          return 1 == a ? '{0} item selected' : '{0} items selected'
        },
        maxOptionsText: function (a, b) {
          return [
            1 == a
              ? 'Limit reached ({n} item max)'
              : 'Limit reached ({n} items max)',
            1 == b
              ? 'Group limit reached ({n} item max)'
              : 'Group limit reached ({n} items max)',
          ]
        },
        selectAllText: 'Select All',
        deselectAllText: 'Deselect All',
        doneButton: !1,
        doneButtonText: 'Close',
        multipleSeparator: ', ',
        styleBase: 'btn',
        style: 'btn-default',
        size: 'auto',
        title: null,
        selectedTextFormat: 'values',
        width: !1,
        container: !1,
        hideDisabled: !1,
        showSubtext: !1,
        showIcon: !0,
        showContent: !0,
        dropupAuto: !0,
        header: !1,
        liveSearch: !1,
        liveSearchPlaceholder: null,
        liveSearchNormalize: !1,
        liveSearchStyle: 'contains',
        actionsBox: !1,
        iconBase: 'glyphicon',
        tickIcon: 'glyphicon-ok',
        maxOptions: !1,
        mobile: !1,
        selectOnTab: !1,
        dropdownAlignRight: !1,
      }),
      (e.prototype = {
        constructor: e,
        init: function () {
          var b = this,
            c = this.$element.attr('id')
          this.$element.addClass('bs-select-hidden'),
            (this.liObj = {}),
            (this.multiple = this.$element.prop('multiple')),
            (this.autofocus = this.$element.prop('autofocus')),
            (this.$newElement = this.createView()),
            this.$element.after(this.$newElement),
            (this.$button = this.$newElement.children('button')),
            (this.$menu = this.$newElement.children('.dropdown-menu')),
            (this.$menuInner = this.$menu.children('.inner')),
            (this.$searchbox = this.$menu.find('input')),
            this.options.dropdownAlignRight &&
              this.$menu.addClass('dropdown-menu-right'),
            'undefined' != typeof c &&
              (this.$button.attr('data-id', c),
              a('label[for="' + c + '"]').click(function (a) {
                a.preventDefault(), b.$button.focus()
              })),
            this.checkDisabled(),
            this.clickListener(),
            this.options.liveSearch && this.liveSearchListener(),
            this.render(),
            this.setStyle(),
            this.setWidth(),
            this.options.container && this.selectPosition(),
            this.$menu.data('this', this),
            this.$newElement.data('this', this),
            this.options.mobile && this.mobile(),
            this.$newElement.on('hide.bs.dropdown', function (a) {
              b.$element.trigger('hide.bs.select', a)
            }),
            this.$newElement.on('hidden.bs.dropdown', function (a) {
              b.$element.trigger('hidden.bs.select', a)
            }),
            this.$newElement.on('show.bs.dropdown', function (a) {
              b.$element.trigger('show.bs.select', a)
            }),
            this.$newElement.on('shown.bs.dropdown', function (a) {
              b.$element.trigger('shown.bs.select', a)
            }),
            setTimeout(function () {
              b.$element.trigger('loaded.bs.select')
            })
        },
        createDropdown: function () {
          var b = this.multiple ? ' show-tick' : '',
            d = this.$element.parent().hasClass('input-group')
              ? ' input-group-btn'
              : '',
            e = this.autofocus ? ' autofocus' : '',
            f = this.options.header
              ? '<div class="popover-title"><button type="button" class="close" aria-hidden="true">&times;</button>' +
                this.options.header +
                '</div>'
              : '',
            g = this.options.liveSearch
              ? '<div class="bs-searchbox"><input type="text" class="form-control" autocomplete="off"' +
                (null === this.options.liveSearchPlaceholder
                  ? ''
                  : ' placeholder="' +
                    c(this.options.liveSearchPlaceholder) +
                    '"') +
                '></div>'
              : '',
            h =
              this.multiple && this.options.actionsBox
                ? '<div class="bs-actionsbox"><div class="btn-group btn-group-sm btn-block"><button type="button" class="actions-btn bs-select-all btn btn-default">' +
                  this.options.selectAllText +
                  '</button><button type="button" class="actions-btn bs-deselect-all btn btn-default">' +
                  this.options.deselectAllText +
                  '</button></div></div>'
                : '',
            i =
              this.multiple && this.options.doneButton
                ? '<div class="bs-donebutton"><div class="btn-group btn-block"><button type="button" class="btn btn-sm btn-default">' +
                  this.options.doneButtonText +
                  '</button></div></div>'
                : '',
            j =
              '<div class="btn-group bootstrap-select' +
              b +
              d +
              '"><button type="button" class="' +
              this.options.styleBase +
              ' dropdown-toggle" data-toggle="dropdown"' +
              e +
              '><span class="filter-option pull-left"></span>&nbsp;<span class="caret fa fa-caret-down"></span></button><div class="dropdown-menu open">' +
              f +
              g +
              h +
              '<ul class="dropdown-menu inner" role="menu"></ul>' +
              i +
              '</div></div>'
          return a(j)
        },
        createView: function () {
          var a = this.createDropdown(),
            b = this.createLi()
          return (a.find('ul')[0].innerHTML = b), a
        },
        reloadLi: function () {
          this.destroyLi()
          var a = this.createLi()
          this.$menuInner[0].innerHTML = a
        },
        destroyLi: function () {
          this.$menu.find('li').remove()
        },
        createLi: function () {
          var d = this,
            e = [],
            f = 0,
            g = document.createElement('option'),
            h = -1,
            i = function (a, b, c, d) {
              return (
                '<li' +
                (('undefined' != typeof c) & ('' !== c)
                  ? ' class="' + c + '"'
                  : '') +
                (('undefined' != typeof b) & (null !== b)
                  ? ' data-original-index="' + b + '"'
                  : '') +
                (('undefined' != typeof d) & (null !== d)
                  ? 'data-optgroup="' + d + '"'
                  : '') +
                '>' +
                a +
                '</li>'
              )
            },
            j = function (a, e, f, g) {
              return (
                '<a tabindex="0"' +
                ('undefined' != typeof e ? ' class="' + e + '"' : '') +
                ('undefined' != typeof f ? ' style="' + f + '"' : '') +
                (d.options.liveSearchNormalize
                  ? ' data-normalized-text="' + b(c(a)) + '"'
                  : '') +
                ('undefined' != typeof g || null !== g
                  ? ' data-tokens="' + g + '"'
                  : '') +
                '>' +
                a +
                '<span class="' +
                d.options.iconBase +
                ' ' +
                d.options.tickIcon +
                ' check-mark"></span></a>'
              )
            }
          if (
            this.options.title &&
            !this.multiple &&
            (h--, !this.$element.find('.bs-title-option').length)
          ) {
            var k = this.$element[0]
            ;(g.className = 'bs-title-option'),
              g.appendChild(document.createTextNode(this.options.title)),
              (g.value = ''),
              k.insertBefore(g, k.firstChild),
              null === k.options[k.selectedIndex].getAttribute('selected') &&
                (g.selected = !0)
          }
          return (
            this.$element.find('option').each(function (b) {
              var c = a(this)
              if ((h++, !c.hasClass('bs-title-option'))) {
                var g = this.className || '',
                  k = this.style.cssText,
                  l = c.data('content') ? c.data('content') : c.html(),
                  m = c.data('tokens') ? c.data('tokens') : null,
                  n =
                    'undefined' != typeof c.data('subtext')
                      ? '<small class="text-muted">' +
                        c.data('subtext') +
                        '</small>'
                      : '',
                  o =
                    'undefined' != typeof c.data('icon')
                      ? '<span class="' +
                        d.options.iconBase +
                        ' ' +
                        c.data('icon') +
                        '"></span> '
                      : '',
                  p =
                    this.disabled ||
                    ('OPTGROUP' === this.parentElement.tagName &&
                      this.parentElement.disabled)
                if (
                  ('' !== o && p && (o = '<span>' + o + '</span>'),
                  d.options.hideDisabled && p)
                )
                  return void h--
                if (
                  (c.data('content') ||
                    (l = o + '<span class="text">' + l + n + '</span>'),
                  'OPTGROUP' === this.parentElement.tagName &&
                    c.data('divider') !== !0)
                ) {
                  if (0 === c.index()) {
                    f += 1
                    var q = this.parentElement.label,
                      r =
                        'undefined' != typeof c.parent().data('subtext')
                          ? '<small class="text-muted">' +
                            c.parent().data('subtext') +
                            '</small>'
                          : '',
                      s = c.parent().data('icon')
                        ? '<span class="' +
                          d.options.iconBase +
                          ' ' +
                          c.parent().data('icon') +
                          '"></span> '
                        : '',
                      t = ' ' + this.parentElement.className || ''
                    ;(q = s + '<span class="text">' + q + r + '</span>'),
                      0 !== b &&
                        e.length > 0 &&
                        (h++, e.push(i('', null, 'divider', f + 'div'))),
                      h++,
                      e.push(i(q, null, 'dropdown-header' + t, f))
                  }
                  e.push(i(j(l, 'opt ' + g + t, k, m), b, '', f))
                } else
                  c.data('divider') === !0
                    ? e.push(i('', b, 'divider'))
                    : c.data('hidden') === !0
                    ? e.push(i(j(l, g, k, m), b, 'hidden is-hidden'))
                    : (this.previousElementSibling &&
                        'OPTGROUP' === this.previousElementSibling.tagName &&
                        (h++, e.push(i('', null, 'divider', f + 'div'))),
                      e.push(i(j(l, g, k, m), b)))
                d.liObj[b] = h
              }
            }),
            this.multiple ||
              0 !== this.$element.find('option:selected').length ||
              this.options.title ||
              this.$element
                .find('option')
                .eq(0)
                .prop('selected', !0)
                .attr('selected', 'selected'),
            e.join('')
          )
        },
        findLis: function () {
          return (
            null == this.$lis && (this.$lis = this.$menu.find('li')), this.$lis
          )
        },
        render: function (b) {
          var c,
            d = this
          b !== !1 &&
            this.$element.find('option').each(function (a) {
              var b = d.findLis().eq(d.liObj[a])
              d.setDisabled(
                a,
                this.disabled ||
                  ('OPTGROUP' === this.parentElement.tagName &&
                    this.parentElement.disabled),
                b
              ),
                d.setSelected(a, this.selected, b)
            }),
            this.tabIndex()
          var e = this.$element
              .find('option')
              .map(function () {
                if (this.selected) {
                  if (
                    d.options.hideDisabled &&
                    (this.disabled ||
                      ('OPTGROUP' === this.parentElement.tagName &&
                        this.parentElement.disabled))
                  )
                    return !1
                  var b,
                    c = a(this),
                    e =
                      c.data('icon') && d.options.showIcon
                        ? '<i class="' +
                          d.options.iconBase +
                          ' ' +
                          c.data('icon') +
                          '"></i> '
                        : ''
                  return (
                    (b =
                      d.options.showSubtext && c.data('subtext') && !d.multiple
                        ? ' <small class="text-muted">' +
                          c.data('subtext') +
                          '</small>'
                        : ''),
                    'undefined' != typeof c.attr('title')
                      ? c.attr('title')
                      : c.data('content') && d.options.showContent
                      ? c.data('content')
                      : e + c.html() + b
                  )
                }
              })
              .toArray(),
            f = this.multiple ? e.join(this.options.multipleSeparator) : e[0]
          if (
            this.multiple &&
            this.options.selectedTextFormat.indexOf('count') > -1
          ) {
            var g = this.options.selectedTextFormat.split('>')
            if (
              (g.length > 1 && e.length > g[1]) ||
              (1 == g.length && e.length >= 2)
            ) {
              c = this.options.hideDisabled ? ', [disabled]' : ''
              var h = this.$element
                  .find('option')
                  .not(
                    '[data-divider="true"], [data-hidden="true"]' + c
                  ).length,
                i =
                  'function' == typeof this.options.countSelectedText
                    ? this.options.countSelectedText(e.length, h)
                    : this.options.countSelectedText
              f = i
                .replace('{0}', e.length.toString())
                .replace('{1}', h.toString())
            }
          }
          void 0 == this.options.title &&
            (this.options.title = this.$element.attr('title')),
            'static' == this.options.selectedTextFormat &&
              (f = this.options.title),
            f ||
              (f =
                'undefined' != typeof this.options.title
                  ? this.options.title
                  : this.options.noneSelectedText),
            this.$button.attr('title', a.trim(f.replace(/<[^>]*>?/g, ''))),
            this.$button.children('.filter-option').html(f),
            this.$element.trigger('rendered.bs.select')
        },
        setStyle: function (a, b) {
          this.$element.attr('class') &&
            this.$newElement.addClass(
              this.$element
                .attr('class')
                .replace(
                  /selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi,
                  ''
                )
            )
          var c = a ? a : this.options.style
          'add' == b
            ? this.$button.addClass(c)
            : 'remove' == b
            ? this.$button.removeClass(c)
            : (this.$button.removeClass(this.options.style),
              this.$button.addClass(c))
        },
        liHeight: function (b) {
          if (b || (this.options.size !== !1 && !this.sizeInfo)) {
            var c = document.createElement('div'),
              d = document.createElement('div'),
              e = document.createElement('ul'),
              f = document.createElement('li'),
              g = document.createElement('li'),
              h = document.createElement('a'),
              i = document.createElement('span'),
              j = this.options.header
                ? this.$menu.find('.popover-title')[0].cloneNode(!0)
                : null,
              k = this.options.liveSearch
                ? document.createElement('div')
                : null,
              l =
                this.options.actionsBox && this.multiple
                  ? this.$menu.find('.bs-actionsbox')[0].cloneNode(!0)
                  : null,
              m =
                this.options.doneButton && this.multiple
                  ? this.$menu.find('.bs-donebutton')[0].cloneNode(!0)
                  : null
            if (
              ((i.className = 'text'),
              (c.className = this.$menu[0].parentNode.className + ' open'),
              (d.className = 'dropdown-menu open'),
              (e.className = 'dropdown-menu inner'),
              (f.className = 'divider'),
              i.appendChild(document.createTextNode('Inner text')),
              h.appendChild(i),
              g.appendChild(h),
              e.appendChild(g),
              e.appendChild(f),
              j && d.appendChild(j),
              k)
            ) {
              var n = document.createElement('span')
              ;(k.className = 'bs-searchbox'),
                (n.className = 'form-control'),
                k.appendChild(n),
                d.appendChild(k)
            }
            l && d.appendChild(l),
              d.appendChild(e),
              m && d.appendChild(m),
              c.appendChild(d),
              document.body.appendChild(c)
            var o = h.offsetHeight,
              p = j ? j.offsetHeight : 0,
              q = k ? k.offsetHeight : 0,
              r = l ? l.offsetHeight : 0,
              s = m ? m.offsetHeight : 0,
              t = a(f).outerHeight(!0),
              u = getComputedStyle ? getComputedStyle(d) : !1,
              v = u ? a(d) : null,
              w =
                parseInt(u ? u.paddingTop : v.css('paddingTop')) +
                parseInt(u ? u.paddingBottom : v.css('paddingBottom')) +
                parseInt(u ? u.borderTopWidth : v.css('borderTopWidth')) +
                parseInt(u ? u.borderBottomWidth : v.css('borderBottomWidth')),
              x =
                w +
                parseInt(u ? u.marginTop : v.css('marginTop')) +
                parseInt(u ? u.marginBottom : v.css('marginBottom')) +
                2
            document.body.removeChild(c),
              (this.sizeInfo = {
                liHeight: o,
                headerHeight: p,
                searchHeight: q,
                actionsHeight: r,
                doneButtonHeight: s,
                dividerHeight: t,
                menuPadding: w,
                menuExtras: x,
              })
          }
        },
        setSize: function () {
          this.findLis(), this.liHeight()
          var b,
            c,
            d,
            e,
            f = this,
            g = this.$menu,
            h = this.$menuInner,
            i = a(window),
            j = this.$newElement[0].offsetHeight,
            k = this.sizeInfo.liHeight,
            l = this.sizeInfo.headerHeight,
            m = this.sizeInfo.searchHeight,
            n = this.sizeInfo.actionsHeight,
            o = this.sizeInfo.doneButtonHeight,
            p = this.sizeInfo.dividerHeight,
            q = this.sizeInfo.menuPadding,
            r = this.sizeInfo.menuExtras,
            s = this.options.hideDisabled ? '.disabled' : '',
            t = function () {
              ;(d = f.$newElement.offset().top - i.scrollTop()),
                (e = i.height() - d - j)
            }
          if (
            (t(),
            this.options.header && g.css('padding-top', 0),
            'auto' === this.options.size)
          ) {
            var u = function () {
              var i,
                j = function (b, c) {
                  return function (d) {
                    return c
                      ? d.classList
                        ? d.classList.contains(b)
                        : a(d).hasClass(b)
                      : !(d.classList
                          ? d.classList.contains(b)
                          : a(d).hasClass(b))
                  }
                },
                p = f.$menuInner[0].getElementsByTagName('li'),
                s = Array.prototype.filter
                  ? Array.prototype.filter.call(p, j('hidden', !1))
                  : f.$lis.not('.hidden'),
                u = Array.prototype.filter
                  ? Array.prototype.filter.call(s, j('dropdown-header', !0))
                  : s.filter('.dropdown-header')
              t(),
                (b = e - r),
                f.options.container
                  ? (g.data('height') || g.data('height', g.height()),
                    (c = g.data('height')))
                  : (c = g.height()),
                f.options.dropupAuto &&
                  f.$newElement.toggleClass('dropup', d > e && c > b - r),
                f.$newElement.hasClass('dropup') && (b = d - r),
                (i = s.length + u.length > 3 ? 3 * k + r - 2 : 0),
                g.css({
                  'max-height': b + 'px',
                  overflow: 'hidden',
                  'min-height': i + l + m + n + o + 'px',
                }),
                h.css({
                  'max-height': b - l - m - n - o - q + 'px',
                  'overflow-y': 'auto',
                  'min-height': Math.max(i - q, 0) + 'px',
                })
            }
            u(),
              this.$searchbox
                .off('input.getSize propertychange.getSize')
                .on('input.getSize propertychange.getSize', u),
              i
                .off('resize.getSize scroll.getSize')
                .on('resize.getSize scroll.getSize', u)
          } else if (
            this.options.size &&
            'auto' != this.options.size &&
            this.$lis.not(s).length > this.options.size
          ) {
            var v = this.$lis
                .not('.divider')
                .not(s)
                .children()
                .slice(0, this.options.size)
                .last()
                .parent()
                .index(),
              w = this.$lis.slice(0, v + 1).filter('.divider').length
            ;(b = k * this.options.size + w * p + q),
              f.options.container
                ? (g.data('height') || g.data('height', g.height()),
                  (c = g.data('height')))
                : (c = g.height()),
              f.options.dropupAuto &&
                this.$newElement.toggleClass('dropup', d > e && c > b - r),
              g.css({
                'max-height': b + l + m + n + o + 'px',
                overflow: 'hidden',
                'min-height': '',
              }),
              h.css({
                'max-height': b - q + 'px',
                'overflow-y': 'auto',
                'min-height': '',
              })
          }
        },
        setWidth: function () {
          if ('auto' === this.options.width) {
            this.$menu.css('min-width', '0')
            var a = this.$menu.parent().clone().appendTo('body'),
              b = this.options.container
                ? this.$newElement.clone().appendTo('body')
                : a,
              c = a.children('.dropdown-menu').outerWidth(),
              d = b.css('width', 'auto').children('button').outerWidth()
            a.remove(),
              b.remove(),
              this.$newElement.css('width', Math.max(c, d) + 'px')
          } else
            'fit' === this.options.width
              ? (this.$menu.css('min-width', ''),
                this.$newElement.css('width', '').addClass('fit-width'))
              : this.options.width
              ? (this.$menu.css('min-width', ''),
                this.$newElement.css('width', this.options.width))
              : (this.$menu.css('min-width', ''),
                this.$newElement.css('width', ''))
          this.$newElement.hasClass('fit-width') &&
            'fit' !== this.options.width &&
            this.$newElement.removeClass('fit-width')
        },
        selectPosition: function () {
          var b,
            c,
            d = this,
            e = '<div />',
            f = a(e),
            g = function (a) {
              f
                .addClass(
                  a.attr('class').replace(/form-control|fit-width/gi, '')
                )
                .toggleClass('dropup', a.hasClass('dropup')),
                (b = a.offset()),
                (c = a.hasClass('dropup') ? 0 : a[0].offsetHeight),
                f.css({
                  top: b.top + c,
                  left: b.left,
                  width: a[0].offsetWidth,
                  position: 'absolute',
                })
            }
          this.$newElement.on('click', function () {
            d.isDisabled() ||
              (g(a(this)),
              f.appendTo(d.options.container),
              f.toggleClass('open', !a(this).hasClass('open')),
              f.append(d.$menu))
          }),
            a(window).on('resize scroll', function () {
              g(d.$newElement)
            }),
            this.$element.on('hide.bs.select', function () {
              d.$menu.data('height', d.$menu.height()), f.detach()
            })
        },
        setSelected: function (a, b, c) {
          if (!c) var c = this.findLis().eq(this.liObj[a])
          c.toggleClass('selected', b)
        },
        setDisabled: function (a, b, c) {
          if (!c) var c = this.findLis().eq(this.liObj[a])
          b
            ? c
                .addClass('disabled')
                .children('a')
                .attr('href', '#')
                .attr('tabindex', -1)
            : c
                .removeClass('disabled')
                .children('a')
                .removeAttr('href')
                .attr('tabindex', 0)
        },
        isDisabled: function () {
          return this.$element[0].disabled
        },
        checkDisabled: function () {
          var a = this
          this.isDisabled()
            ? (this.$newElement.addClass('disabled'),
              this.$button.addClass('disabled').attr('tabindex', -1))
            : (this.$button.hasClass('disabled') &&
                (this.$newElement.removeClass('disabled'),
                this.$button.removeClass('disabled')),
              -1 != this.$button.attr('tabindex') ||
                this.$element.data('tabindex') ||
                this.$button.removeAttr('tabindex')),
            this.$button.click(function () {
              return !a.isDisabled()
            })
        },
        tabIndex: function () {
          this.$element.is('[tabindex]') &&
            (this.$element.data('tabindex', this.$element.attr('tabindex')),
            this.$button.attr('tabindex', this.$element.data('tabindex')))
        },
        clickListener: function () {
          var b = this,
            c = a(document)
          this.$newElement.on(
            'touchstart.dropdown',
            '.dropdown-menu',
            function (a) {
              a.stopPropagation()
            }
          ),
            c.data('spaceSelect', !1),
            this.$button.on('keyup', function (a) {
              ;/(32)/.test(a.keyCode.toString(10)) &&
                c.data('spaceSelect') &&
                (a.preventDefault(), c.data('spaceSelect', !1))
            }),
            this.$newElement.on('click', function () {
              b.setSize(),
                b.$element.on('shown.bs.select', function () {
                  if (b.options.liveSearch || b.multiple) {
                    if (!b.multiple) {
                      var a = b.liObj[b.$element[0].selectedIndex]
                      if ('number' != typeof a) return
                      var c =
                        b.$lis.eq(a)[0].offsetTop - b.$menuInner[0].offsetTop
                      ;(c =
                        c -
                        b.$menuInner[0].offsetHeight / 2 +
                        b.sizeInfo.liHeight / 2),
                        (b.$menuInner[0].scrollTop = c)
                    }
                  } else b.$menu.find('.selected a').focus()
                })
            }),
            this.$menu.on('click', 'li a', function (c) {
              var d = a(this),
                e = d.parent().data('originalIndex'),
                f = b.$element.val(),
                g = b.$element.prop('selectedIndex')
              if (
                (b.multiple && c.stopPropagation(),
                c.preventDefault(),
                !b.isDisabled() && !d.parent().hasClass('disabled'))
              ) {
                var h = b.$element.find('option'),
                  i = h.eq(e),
                  j = i.prop('selected'),
                  k = i.parent('optgroup'),
                  l = b.options.maxOptions,
                  m = k.data('maxOptions') || !1
                if (b.multiple) {
                  if (
                    (i.prop('selected', !j),
                    b.setSelected(e, !j),
                    d.blur(),
                    l !== !1 || m !== !1)
                  ) {
                    var n = l < h.filter(':selected').length,
                      o = m < k.find('option:selected').length
                    if ((l && n) || (m && o))
                      if (l && 1 == l)
                        h.prop('selected', !1),
                          i.prop('selected', !0),
                          b.$menu.find('.selected').removeClass('selected'),
                          b.setSelected(e, !0)
                      else if (m && 1 == m) {
                        k.find('option:selected').prop('selected', !1),
                          i.prop('selected', !0)
                        var p = d.parent().data('optgroup')
                        b.$menu
                          .find('[data-optgroup="' + p + '"]')
                          .removeClass('selected'),
                          b.setSelected(e, !0)
                      } else {
                        var q =
                            'function' == typeof b.options.maxOptionsText
                              ? b.options.maxOptionsText(l, m)
                              : b.options.maxOptionsText,
                          r = q[0].replace('{n}', l),
                          s = q[1].replace('{n}', m),
                          t = a('<div class="notify"></div>')
                        q[2] &&
                          ((r = r.replace('{var}', q[2][l > 1 ? 0 : 1])),
                          (s = s.replace('{var}', q[2][m > 1 ? 0 : 1]))),
                          i.prop('selected', !1),
                          b.$menu.append(t),
                          l &&
                            n &&
                            (t.append(a('<div>' + r + '</div>')),
                            b.$element.trigger('maxReached.bs.select')),
                          m &&
                            o &&
                            (t.append(a('<div>' + s + '</div>')),
                            b.$element.trigger('maxReachedGrp.bs.select')),
                          setTimeout(function () {
                            b.setSelected(e, !1)
                          }, 10),
                          t.delay(750).fadeOut(300, function () {
                            a(this).remove()
                          })
                      }
                  }
                } else
                  h.prop('selected', !1),
                    i.prop('selected', !0),
                    b.$menu.find('.selected').removeClass('selected'),
                    b.setSelected(e, !0)
                b.multiple
                  ? b.options.liveSearch && b.$searchbox.focus()
                  : b.$button.focus(),
                  ((f != b.$element.val() && b.multiple) ||
                    (g != b.$element.prop('selectedIndex') && !b.multiple)) &&
                    (b.$element.change(),
                    b.$element.trigger('changed.bs.select', [
                      e,
                      i.prop('selected'),
                      j,
                    ]))
              }
            }),
            this.$menu.on(
              'click',
              'li.disabled a, .popover-title, .popover-title :not(.close)',
              function (c) {
                c.currentTarget == this &&
                  (c.preventDefault(),
                  c.stopPropagation(),
                  b.options.liveSearch && !a(c.target).hasClass('close')
                    ? b.$searchbox.focus()
                    : b.$button.focus())
              }
            ),
            this.$menu.on(
              'click',
              'li.divider, li.dropdown-header',
              function (a) {
                a.preventDefault(),
                  a.stopPropagation(),
                  b.options.liveSearch
                    ? b.$searchbox.focus()
                    : b.$button.focus()
              }
            ),
            this.$menu.on('click', '.popover-title .close', function () {
              b.$button.click()
            }),
            this.$searchbox.on('click', function (a) {
              a.stopPropagation()
            }),
            this.$menu.on('click', '.actions-btn', function (c) {
              b.options.liveSearch ? b.$searchbox.focus() : b.$button.focus(),
                c.preventDefault(),
                c.stopPropagation(),
                a(this).hasClass('bs-select-all')
                  ? b.selectAll()
                  : b.deselectAll(),
                b.$element.change()
            }),
            this.$element.change(function () {
              b.render(!1)
            })
        },
        liveSearchListener: function () {
          var d = this,
            e = a('<li class="no-results"></li>')
          this.$newElement.on(
            'click.dropdown.data-api touchstart.dropdown.data-api',
            function () {
              d.$menuInner.find('.active').removeClass('active'),
                d.$searchbox.val() &&
                  (d.$searchbox.val(''),
                  d.$lis.not('.is-hidden').removeClass('hidden'),
                  e.parent().length && e.remove()),
                d.multiple || d.$menuInner.find('.selected').addClass('active'),
                setTimeout(function () {
                  d.$searchbox.focus()
                }, 10)
            }
          ),
            this.$searchbox.on(
              'click.dropdown.data-api focus.dropdown.data-api touchend.dropdown.data-api',
              function (a) {
                a.stopPropagation()
              }
            ),
            this.$searchbox.on('input propertychange', function () {
              if (d.$searchbox.val()) {
                var f = d.$lis
                  .not('.is-hidden')
                  .removeClass('hidden')
                  .children('a')
                ;(f = d.options.liveSearchNormalize
                  ? f.not(
                      ':a' +
                        d._searchStyle() +
                        '(' +
                        b(d.$searchbox.val()) +
                        ')'
                    )
                  : f.not(
                      ':' + d._searchStyle() + '(' + d.$searchbox.val() + ')'
                    )),
                  f.parent().addClass('hidden'),
                  d.$lis.filter('.dropdown-header').each(function () {
                    var b = a(this),
                      c = b.data('optgroup')
                    0 ===
                      d.$lis
                        .filter('[data-optgroup=' + c + ']')
                        .not(b)
                        .not('.hidden').length &&
                      (b.addClass('hidden'),
                      d.$lis
                        .filter('[data-optgroup=' + c + 'div]')
                        .addClass('hidden'))
                  })
                var g = d.$lis.not('.hidden')
                g.each(function (b) {
                  var c = a(this)
                  c.hasClass('divider') &&
                    (c.index() === g.eq(0).index() ||
                      c.index() === g.last().index() ||
                      g.eq(b + 1).hasClass('divider')) &&
                    c.addClass('hidden')
                }),
                  d.$lis.not('.hidden, .no-results').length
                    ? e.parent().length && e.remove()
                    : (e.parent().length && e.remove(),
                      e
                        .html(
                          d.options.noneResultsText.replace(
                            '{0}',
                            '"' + c(d.$searchbox.val()) + '"'
                          )
                        )
                        .show(),
                      d.$menuInner.append(e))
              } else d.$lis.not('.is-hidden').removeClass('hidden'), e.parent().length && e.remove()
              d.$lis.filter('.active').removeClass('active'),
                d.$lis
                  .not('.hidden, .divider, .dropdown-header')
                  .eq(0)
                  .addClass('active')
                  .children('a')
                  .focus(),
                a(this).focus()
            })
        },
        _searchStyle: function () {
          var a = 'icontains'
          switch (this.options.liveSearchStyle) {
            case 'begins':
            case 'startsWith':
              a = 'ibegins'
              break
            case 'contains':
          }
          return a
        },
        val: function (a) {
          return 'undefined' != typeof a
            ? (this.$element.val(a), this.render(), this.$element)
            : this.$element.val()
        },
        selectAll: function () {
          this.findLis(),
            this.$element
              .find('option:enabled')
              .not('[data-divider], [data-hidden]')
              .prop('selected', !0),
            this.$lis
              .not('.divider, .dropdown-header, .disabled, .hidden')
              .addClass('selected'),
            this.render(!1)
        },
        deselectAll: function () {
          this.findLis(),
            this.$element
              .find('option:enabled')
              .not('[data-divider], [data-hidden]')
              .prop('selected', !1),
            this.$lis
              .not('.divider, .dropdown-header, .disabled, .hidden')
              .removeClass('selected'),
            this.render(!1)
        },
        keydown: function (c) {
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m = a(this),
            n = m.is('input') ? m.parent().parent() : m.parent(),
            o = n.data('this'),
            p = ':not(.disabled, .hidden, .dropdown-header, .divider)',
            q = {
              32: ' ',
              48: '0',
              49: '1',
              50: '2',
              51: '3',
              52: '4',
              53: '5',
              54: '6',
              55: '7',
              56: '8',
              57: '9',
              59: ';',
              65: 'a',
              66: 'b',
              67: 'c',
              68: 'd',
              69: 'e',
              70: 'f',
              71: 'g',
              72: 'h',
              73: 'i',
              74: 'j',
              75: 'k',
              76: 'l',
              77: 'm',
              78: 'n',
              79: 'o',
              80: 'p',
              81: 'q',
              82: 'r',
              83: 's',
              84: 't',
              85: 'u',
              86: 'v',
              87: 'w',
              88: 'x',
              89: 'y',
              90: 'z',
              96: '0',
              97: '1',
              98: '2',
              99: '3',
              100: '4',
              101: '5',
              102: '6',
              103: '7',
              104: '8',
              105: '9',
            }
          if (
            (o.options.liveSearch && (n = m.parent().parent()),
            o.options.container && (n = o.$menu),
            (d = a('[role=menu] li a', n)),
            (l = o.$menu.parent().hasClass('open')),
            !l &&
              ((c.keyCode >= 48 && c.keyCode <= 57) ||
                (event.keyCode >= 65 && event.keyCode <= 90)) &&
              (o.options.container
                ? o.$newElement.trigger('click')
                : (o.setSize(), o.$menu.parent().addClass('open'), (l = !0)),
              o.$searchbox.focus()),
            o.options.liveSearch &&
              (/(^9$|27)/.test(c.keyCode.toString(10)) &&
                l &&
                0 === o.$menu.find('.active').length &&
                (c.preventDefault(),
                o.$menu.parent().removeClass('open'),
                o.options.container && o.$newElement.removeClass('open'),
                o.$button.focus()),
              (d = a(
                '[role=menu] li:not(.disabled, .hidden, .dropdown-header, .divider)',
                n
              )),
              m.val() ||
                /(38|40)/.test(c.keyCode.toString(10)) ||
                (0 === d.filter('.active').length &&
                  ((d = o.$newElement.find('li')),
                  (d = o.options.liveSearchNormalize
                    ? d.filter(
                        ':a' + o._searchStyle() + '(' + b(q[c.keyCode]) + ')'
                      )
                    : d.filter(
                        ':' + o._searchStyle() + '(' + q[c.keyCode] + ')'
                      ))))),
            d.length)
          ) {
            if (/(38|40)/.test(c.keyCode.toString(10)))
              (e = d.index(d.filter(':focus'))),
                (g = d.parent(p).first().data('originalIndex')),
                (h = d.parent(p).last().data('originalIndex')),
                (f = d.eq(e).parent().nextAll(p).eq(0).data('originalIndex')),
                (i = d.eq(e).parent().prevAll(p).eq(0).data('originalIndex')),
                (j = d.eq(f).parent().prevAll(p).eq(0).data('originalIndex')),
                o.options.liveSearch &&
                  (d.each(function (b) {
                    a(this).hasClass('disabled') || a(this).data('index', b)
                  }),
                  (e = d.index(d.filter('.active'))),
                  (g = d.first().data('index')),
                  (h = d.last().data('index')),
                  (f = d.eq(e).nextAll().eq(0).data('index')),
                  (i = d.eq(e).prevAll().eq(0).data('index')),
                  (j = d.eq(f).prevAll().eq(0).data('index'))),
                (k = m.data('prevIndex')),
                38 == c.keyCode
                  ? (o.options.liveSearch && (e -= 1),
                    e != j && e > i && (e = i),
                    g > e && (e = g),
                    e == k && (e = h))
                  : 40 == c.keyCode &&
                    (o.options.liveSearch && (e += 1),
                    -1 == e && (e = 0),
                    e != j && f > e && (e = f),
                    e > h && (e = h),
                    e == k && (e = g)),
                m.data('prevIndex', e),
                o.options.liveSearch
                  ? (c.preventDefault(),
                    m.hasClass('dropdown-toggle') ||
                      (d
                        .removeClass('active')
                        .eq(e)
                        .addClass('active')
                        .children('a')
                        .focus(),
                      m.focus()))
                  : d.eq(e).focus()
            else if (!m.is('input')) {
              var r,
                s,
                t = []
              d.each(function () {
                a(this).parent().hasClass('disabled') ||
                  (a.trim(a(this).text().toLowerCase()).substring(0, 1) ==
                    q[c.keyCode] &&
                    t.push(a(this).parent().index()))
              }),
                (r = a(document).data('keycount')),
                r++,
                a(document).data('keycount', r),
                (s = a.trim(a(':focus').text().toLowerCase()).substring(0, 1)),
                s != q[c.keyCode]
                  ? ((r = 1), a(document).data('keycount', r))
                  : r >= t.length &&
                    (a(document).data('keycount', 0), r > t.length && (r = 1)),
                d.eq(t[r - 1]).focus()
            }
            if (
              (/(13|32)/.test(c.keyCode.toString(10)) ||
                (/(^9$)/.test(c.keyCode.toString(10)) &&
                  o.options.selectOnTab)) &&
              l
            ) {
              if (
                (/(32)/.test(c.keyCode.toString(10)) || c.preventDefault(),
                o.options.liveSearch)
              )
                /(32)/.test(c.keyCode.toString(10)) ||
                  (o.$menu.find('.active a').click(), m.focus())
              else {
                var u = a(':focus')
                u.click(),
                  u.focus(),
                  c.preventDefault(),
                  a(document).data('spaceSelect', !0)
              }
              a(document).data('keycount', 0)
            }
            ;((/(^9$|27)/.test(c.keyCode.toString(10)) &&
              l &&
              (o.multiple || o.options.liveSearch)) ||
              (/(27)/.test(c.keyCode.toString(10)) && !l)) &&
              (o.$menu.parent().removeClass('open'),
              o.options.container && o.$newElement.removeClass('open'),
              o.$button.focus())
          }
        },
        mobile: function () {
          this.$element.addClass('mobile-device').appendTo(this.$newElement),
            this.options.container && this.$menu.hide()
        },
        refresh: function () {
          ;(this.$lis = null),
            this.reloadLi(),
            this.render(),
            this.checkDisabled(),
            this.liHeight(!0),
            this.setStyle(),
            this.setWidth(),
            this.$lis && this.$searchbox.trigger('propertychange'),
            this.$element.trigger('refreshed.bs.select')
        },
        hide: function () {
          this.$newElement.hide()
        },
        show: function () {
          this.$newElement.show()
        },
        remove: function () {
          this.$newElement.remove(), this.$element.remove()
        },
      })
    var f = a.fn.selectpicker
    ;(a.fn.selectpicker = d),
      (a.fn.selectpicker.Constructor = e),
      (a.fn.selectpicker.noConflict = function () {
        return (a.fn.selectpicker = f), this
      }),
      a(document)
        .data('keycount', 0)
        .on(
          'keydown',
          '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',
          e.prototype.keydown
        )
        .on(
          'focusin.modal',
          '.bootstrap-select [data-toggle=dropdown], .bootstrap-select [role="menu"], .bs-searchbox input',
          function (a) {
            a.stopPropagation()
          }
        ),
      a(window).on('load.bs.select.data-api', function () {
        a('.selectpicker').each(function () {
          var b = a(this)
          d.call(b, b.data())
        })
      })
  })(jQuery)
})

//# sourceMappingURL=bootstrap-select.js.map

/* ========================
	jquery.bootstrap-touchspin.js
========================= */
!(function (t) {
  'use strict'
  function o(t, o) {
    return t + '.touchspin_' + o
  }
  function n(n, s) {
    return t.map(n, function (t) {
      return o(t, s)
    })
  }
  var s = 0
  t.fn.TouchSpin = function (o) {
    if ('destroy' === o)
      return void this.each(function () {
        var o = t(this),
          s = o.data()
        t(document).off(
          n(
            [
              'mouseup',
              'touchend',
              'touchcancel',
              'mousemove',
              'touchmove',
              'scroll',
              'scrollstart',
            ],
            s.spinnerid
          ).join(' ')
        )
      })
    var e = {
        min: 0,
        max: 100,
        initval: '',
        replacementval: '',
        step: 1,
        decimals: 0,
        stepinterval: 100,
        forcestepdivisibility: 'round',
        stepintervaldelay: 500,
        verticalbuttons: !1,
        verticalupclass: 'fa fa-angle-up',
        verticaldownclass: 'fa fa-angle-down',
        prefix: '',
        postfix: '',
        prefix_extraclass: '',
        postfix_extraclass: '',
        booster: !0,
        boostat: 10,
        maxboostedstep: !1,
        mousewheel: !0,
        buttondown_class: 'btn btn-default',
        buttonup_class: 'btn btn-default',
        buttondown_txt: '-',
        buttonup_txt: '+',
      },
      i = {
        min: 'min',
        max: 'max',
        initval: 'init-val',
        replacementval: 'replacement-val',
        step: 'step',
        decimals: 'decimals',
        stepinterval: 'step-interval',
        verticalbuttons: 'vertical-buttons',
        verticalupclass: 'vertical-up-class',
        verticaldownclass: 'vertical-down-class',
        forcestepdivisibility: 'force-step-divisibility',
        stepintervaldelay: 'step-interval-delay',
        prefix: 'prefix',
        postfix: 'postfix',
        prefix_extraclass: 'prefix-extra-class',
        postfix_extraclass: 'postfix-extra-class',
        booster: 'booster',
        boostat: 'boostat',
        maxboostedstep: 'max-boosted-step',
        mousewheel: 'mouse-wheel',
        buttondown_class: 'button-down-class',
        buttonup_class: 'button-up-class',
        buttondown_txt: 'button-down-txt',
        buttonup_txt: 'button-up-txt',
      }
    return this.each(function () {
      function a() {
        if (!E.data('alreadyinitialized')) {
          if (
            (E.data('alreadyinitialized', !0),
            (s += 1),
            E.data('spinnerid', s),
            !E.is('input'))
          )
            return void console.log('Must be an input.')
          r(),
            u(),
            w(),
            d(),
            h(),
            v(),
            m(),
            x(),
            P.input.css('display', 'block')
        }
      }
      function u() {
        '' !== M.initval && '' === E.val() && E.val(M.initval)
      }
      function p(t) {
        l(t), w()
        var o = P.input.val()
        '' !== o &&
          ((o = Number(P.input.val())), P.input.val(o.toFixed(M.decimals)))
      }
      function r() {
        M = t.extend({}, e, z, c(), o)
      }
      function c() {
        var o = {}
        return (
          t.each(i, function (t, n) {
            var s = 'bts-' + n
            E.is('[data-' + s + ']') && (o[t] = E.data(s))
          }),
          o
        )
      }
      function l(o) {
        M = t.extend({}, M, o)
      }
      function d() {
        var t = E.val(),
          o = E.parent()
        '' !== t && (t = Number(t).toFixed(M.decimals)),
          E.data('initvalue', t).val(t),
          E.addClass('form-control'),
          o.hasClass('input-group') ? f(o) : b()
      }
      function f(o) {
        o.addClass('bootstrap-touchspin')
        var n,
          s,
          e = E.prev(),
          i = E.next(),
          a =
            '<span class="input-group-addon bootstrap-touchspin-prefix">' +
            M.prefix +
            '</span>',
          u =
            '<span class="input-group-addon bootstrap-touchspin-postfix">' +
            M.postfix +
            '</span>'
        e.hasClass('input-group-btn')
          ? ((n =
              '<button class="' +
              M.buttondown_class +
              ' bootstrap-touchspin-down" type="button">' +
              M.buttondown_txt +
              '</button>'),
            e.append(n))
          : ((n =
              '<span class="input-group-btn"><button class="' +
              M.buttondown_class +
              ' bootstrap-touchspin-down" type="button">' +
              M.buttondown_txt +
              '</button></span>'),
            t(n).insertBefore(E)),
          i.hasClass('input-group-btn')
            ? ((s =
                '<button class="' +
                M.buttonup_class +
                ' bootstrap-touchspin-up" type="button">' +
                M.buttonup_txt +
                '</button>'),
              i.prepend(s))
            : ((s =
                '<span class="input-group-btn"><button class="' +
                M.buttonup_class +
                ' bootstrap-touchspin-up" type="button">' +
                M.buttonup_txt +
                '</button></span>'),
              t(s).insertAfter(E)),
          t(a).insertBefore(E),
          t(u).insertAfter(E),
          (N = o)
      }
      function b() {
        var o
        ;(o = M.verticalbuttons
          ? '<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">' +
            M.prefix +
            '</span><span class="input-group-addon bootstrap-touchspin-postfix">' +
            M.postfix +
            '</span><span class="input-group-btn-vertical"><button class="' +
            M.buttondown_class +
            ' bootstrap-touchspin-up" type="button"><i class="' +
            M.verticalupclass +
            '"></i></button><button class="' +
            M.buttonup_class +
            ' bootstrap-touchspin-down" type="button"><i class="' +
            M.verticaldownclass +
            '"></i></button></span></div>'
          : '<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="' +
            M.buttondown_class +
            ' bootstrap-touchspin-down" type="button">' +
            M.buttondown_txt +
            '</button></span><span class="input-group-addon bootstrap-touchspin-prefix">' +
            M.prefix +
            '</span><span class="input-group-addon bootstrap-touchspin-postfix">' +
            M.postfix +
            '</span><span class="input-group-btn"><button class="' +
            M.buttonup_class +
            ' bootstrap-touchspin-up" type="button">' +
            M.buttonup_txt +
            '</button></span></div>'),
          (N = t(o).insertBefore(E)),
          t('.bootstrap-touchspin-prefix', N).after(E),
          E.hasClass('input-sm')
            ? N.addClass('input-group-sm')
            : E.hasClass('input-lg') && N.addClass('input-group-lg')
      }
      function h() {
        P = {
          down: t('.bootstrap-touchspin-down', N),
          up: t('.bootstrap-touchspin-up', N),
          input: t('input', N),
          prefix: t('.bootstrap-touchspin-prefix', N).addClass(
            M.prefix_extraclass
          ),
          postfix: t('.bootstrap-touchspin-postfix', N).addClass(
            M.postfix_extraclass
          ),
        }
      }
      function v() {
        '' === M.prefix && P.prefix.hide(), '' === M.postfix && P.postfix.hide()
      }
      function m() {
        E.on('keydown', function (t) {
          var o = t.keyCode || t.which
          38 === o
            ? ('up' !== O && (_(), k()), t.preventDefault())
            : 40 === o && ('down' !== O && (C(), D()), t.preventDefault())
        }),
          E.on('keyup', function (t) {
            var o = t.keyCode || t.which
            38 === o ? F() : 40 === o && F()
          }),
          E.on('blur', function () {
            w()
          }),
          P.down.on('keydown', function (t) {
            var o = t.keyCode || t.which
            ;(32 === o || 13 === o) &&
              ('down' !== O && (C(), D()), t.preventDefault())
          }),
          P.down.on('keyup', function (t) {
            var o = t.keyCode || t.which
            ;(32 === o || 13 === o) && F()
          }),
          P.up.on('keydown', function (t) {
            var o = t.keyCode || t.which
            ;(32 === o || 13 === o) &&
              ('up' !== O && (_(), k()), t.preventDefault())
          }),
          P.up.on('keyup', function (t) {
            var o = t.keyCode || t.which
            ;(32 === o || 13 === o) && F()
          }),
          P.down.on('mousedown.touchspin', function (t) {
            P.down.off('touchstart.touchspin'),
              E.is(':disabled') ||
                (C(), D(), t.preventDefault(), t.stopPropagation())
          }),
          P.down.on('touchstart.touchspin', function (t) {
            P.down.off('mousedown.touchspin'),
              E.is(':disabled') ||
                (C(), D(), t.preventDefault(), t.stopPropagation())
          }),
          P.up.on('mousedown.touchspin', function (t) {
            P.up.off('touchstart.touchspin'),
              E.is(':disabled') ||
                (_(), k(), t.preventDefault(), t.stopPropagation())
          }),
          P.up.on('touchstart.touchspin', function (t) {
            P.up.off('mousedown.touchspin'),
              E.is(':disabled') ||
                (_(), k(), t.preventDefault(), t.stopPropagation())
          }),
          P.up.on('mouseout touchleave touchend touchcancel', function (t) {
            O && (t.stopPropagation(), F())
          }),
          P.down.on('mouseout touchleave touchend touchcancel', function (t) {
            O && (t.stopPropagation(), F())
          }),
          P.down.on('mousemove touchmove', function (t) {
            O && (t.stopPropagation(), t.preventDefault())
          }),
          P.up.on('mousemove touchmove', function (t) {
            O && (t.stopPropagation(), t.preventDefault())
          }),
          t(document).on(
            n(['mouseup', 'touchend', 'touchcancel'], s).join(' '),
            function (t) {
              O && (t.preventDefault(), F())
            }
          ),
          t(document).on(
            n(['mousemove', 'touchmove', 'scroll', 'scrollstart'], s).join(' '),
            function (t) {
              O && (t.preventDefault(), F())
            }
          ),
          E.on('mousewheel DOMMouseScroll', function (t) {
            if (M.mousewheel && E.is(':focus')) {
              var o =
                t.originalEvent.wheelDelta ||
                -t.originalEvent.deltaY ||
                -t.originalEvent.detail
              t.stopPropagation(), t.preventDefault(), 0 > o ? C() : _()
            }
          })
      }
      function x() {
        E.on('touchspin.uponce', function () {
          F(), _()
        }),
          E.on('touchspin.downonce', function () {
            F(), C()
          }),
          E.on('touchspin.startupspin', function () {
            k()
          }),
          E.on('touchspin.startdownspin', function () {
            D()
          }),
          E.on('touchspin.stopspin', function () {
            F()
          }),
          E.on('touchspin.updatesettings', function (t, o) {
            p(o)
          })
      }
      function g(t) {
        switch (M.forcestepdivisibility) {
          case 'round':
            return (Math.round(t / M.step) * M.step).toFixed(M.decimals)
          case 'floor':
            return (Math.floor(t / M.step) * M.step).toFixed(M.decimals)
          case 'ceil':
            return (Math.ceil(t / M.step) * M.step).toFixed(M.decimals)
          default:
            return t
        }
      }
      function w() {
        var t, o, n
        return (
          (t = E.val()),
          '' === t
            ? void (
                '' !== M.replacementval &&
                (E.val(M.replacementval), E.trigger('change'))
              )
            : void (
                (M.decimals > 0 && '.' === t) ||
                ((o = parseFloat(t)),
                isNaN(o) &&
                  (o = '' !== M.replacementval ? M.replacementval : 0),
                (n = o),
                o.toString() !== t && (n = o),
                o < M.min && (n = M.min),
                o > M.max && (n = M.max),
                (n = g(n)),
                Number(t).toString() !== n.toString() &&
                  (E.val(n), E.trigger('change')))
              )
        )
      }
      function y() {
        if (M.booster) {
          var t = Math.pow(2, Math.floor(A / M.boostat)) * M.step
          return (
            M.maxboostedstep &&
              t > M.maxboostedstep &&
              ((t = M.maxboostedstep), (S = Math.round(S / t) * t)),
            Math.max(M.step, t)
          )
        }
        return M.step
      }
      function _() {
        w(), (S = parseFloat(P.input.val())), isNaN(S) && (S = 0)
        var t = S,
          o = y()
        ;(S += o),
          S > M.max && ((S = M.max), E.trigger('touchspin.on.max'), F()),
          P.input.val(Number(S).toFixed(M.decimals)),
          t !== S && E.trigger('change')
      }
      function C() {
        w(), (S = parseFloat(P.input.val())), isNaN(S) && (S = 0)
        var t = S,
          o = y()
        ;(S -= o),
          S < M.min && ((S = M.min), E.trigger('touchspin.on.min'), F()),
          P.input.val(S.toFixed(M.decimals)),
          t !== S && E.trigger('change')
      }
      function D() {
        F(),
          (A = 0),
          (O = 'down'),
          E.trigger('touchspin.on.startspin'),
          E.trigger('touchspin.on.startdownspin'),
          (I = setTimeout(function () {
            T = setInterval(function () {
              A++, C()
            }, M.stepinterval)
          }, M.stepintervaldelay))
      }
      function k() {
        F(),
          (A = 0),
          (O = 'up'),
          E.trigger('touchspin.on.startspin'),
          E.trigger('touchspin.on.startupspin'),
          (B = setTimeout(function () {
            j = setInterval(function () {
              A++, _()
            }, M.stepinterval)
          }, M.stepintervaldelay))
      }
      function F() {
        switch (
          (clearTimeout(I),
          clearTimeout(B),
          clearInterval(T),
          clearInterval(j),
          O)
        ) {
          case 'up':
            E.trigger('touchspin.on.stopupspin'),
              E.trigger('touchspin.on.stopspin')
            break
          case 'down':
            E.trigger('touchspin.on.stopdownspin'),
              E.trigger('touchspin.on.stopspin')
        }
        ;(A = 0), (O = !1)
      }
      var M,
        N,
        P,
        S,
        T,
        j,
        I,
        B,
        E = t(this),
        z = E.data(),
        A = 0,
        O = !1
      a()
    })
  }
})(jQuery)

/* ========================
	magnific-popup.js
========================= */
/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : a(
        'object' == typeof exports
          ? require('jquery')
          : window.jQuery || window.Zepto
      )
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = 'Close',
    i = 'BeforeClose',
    j = 'AfterClose',
    k = 'BeforeAppend',
    l = 'MarkupParse',
    m = 'Open',
    n = 'Change',
    o = 'mfp',
    p = '.' + o,
    q = 'mfp-ready',
    r = 'mfp-removing',
    s = 'mfp-prevent-close',
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c)
    },
    x = function (b, c, d, e) {
      var f = document.createElement('div')
      return (
        (f.className = 'mfp-' + b),
        d && (f.innerHTML = d),
        e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)),
        f
      )
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d),
        b.st.callbacks &&
          ((c = c.charAt(0).toLowerCase() + c.slice(1)),
          b.st.callbacks[c] &&
            b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
    },
    z = function (c) {
      return (
        (c === g && b.currTemplate.closeBtn) ||
          ((b.currTemplate.closeBtn = a(
            b.st.closeMarkup.replace('%title%', b.st.tClose)
          )),
          (g = c)),
        b.currTemplate.closeBtn
      )
    },
    A = function () {
      a.magnificPopup.instance ||
        ((b = new t()), b.init(), (a.magnificPopup.instance = b))
    },
    B = function () {
      var a = document.createElement('p').style,
        b = ['ms', 'O', 'Moz', 'Webkit']
      if (void 0 !== a.transition) return !0
      for (; b.length; ) if (b.pop() + 'Transition' in a) return !0
      return !1
    }
  ;(t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion
      ;(b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile =
          b.isAndroid ||
          b.isIOS ||
          /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
            navigator.userAgent
          )),
        (d = a(document)),
        (b.popupsCache = {})
    },
    open: function (c) {
      var e
      if (c.isObj === !1) {
        ;(b.items = c.items.toArray()), (b.index = 0)
        var g,
          h = c.items
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e
            break
          }
      } else
        (b.items = a.isArray(c.items) ? c.items : [c.items]),
          (b.index = c.index || 0)
      if (b.isOpen) return void b.updateItemHTML()
      ;(b.types = []),
        (f = ''),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key
          ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}),
            (b.currTemplate = b.popupsCache[c.key]))
          : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos =
          'auto' === b.st.fixedContentPos
            ? !b.probablyMobile
            : b.st.fixedContentPos),
        b.st.modal &&
          ((b.st.closeOnContentClick = !1),
          (b.st.closeOnBgClick = !1),
          (b.st.showCloseBtn = !1),
          (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x('bg').on('click' + p, function () {
            b.close()
          })),
          (b.wrap = x('wrap')
            .attr('tabindex', -1)
            .on('click' + p, function (a) {
              b._checkIfClose(a.target) && b.close()
            })),
          (b.container = x('container', b.wrap))),
        (b.contentContainer = x('content')),
        b.st.preloader &&
          (b.preloader = x('preloader', b.container, b.st.tLoading))
      var i = a.magnificPopup.modules
      for (e = 0; e < i.length; e++) {
        var j = i[e]
        ;(j = j.charAt(0).toUpperCase() + j.slice(1)), b['init' + j].call(b)
      }
      y('BeforeOpen'),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type)
              }),
              (f += ' mfp-close-btn-in'))
            : b.wrap.append(z())),
        b.st.alignTop && (f += ' mfp-align-top'),
        b.fixedContentPos
          ? b.wrap.css({
              overflow: b.st.overflowY,
              overflowX: 'hidden',
              overflowY: b.st.overflowY,
            })
          : b.wrap.css({ top: v.scrollTop(), position: 'absolute' }),
        (b.st.fixedBgPos === !1 ||
          ('auto' === b.st.fixedBgPos && !b.fixedContentPos)) &&
          b.bgOverlay.css({ height: d.height(), position: 'absolute' }),
        b.st.enableEscapeKey &&
          d.on('keyup' + p, function (a) {
            27 === a.keyCode && b.close()
          }),
        v.on('resize' + p, function () {
          b.updateSize()
        }),
        b.st.closeOnContentClick || (f += ' mfp-auto-cursor'),
        f && b.wrap.addClass(f)
      var k = (b.wH = v.height()),
        n = {}
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize()
        o && (n.marginRight = o)
      }
      b.fixedContentPos &&
        (b.isIE7
          ? a('body, html').css('overflow', 'hidden')
          : (n.overflow = 'hidden'))
      var r = b.st.mainClass
      return (
        b.isIE7 && (r += ' mfp-ie7'),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y('BuildControls'),
        a('html').css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content
            ? (b._addClassToMFP(q), b._setFocus())
            : b.bgOverlay.addClass(q),
            d.on('focusin' + p, b._onFocusIn)
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      )
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close()
            }, b.st.removalDelay))
          : b._close())
    },
    _close: function () {
      y(h)
      var c = r + ' ' + q + ' '
      if (
        (b.bgOverlay.detach(),
        b.wrap.detach(),
        b.container.empty(),
        b.st.mainClass && (c += b.st.mainClass + ' '),
        b._removeClassFromMFP(c),
        b.fixedContentPos)
      ) {
        var e = { marginRight: '' }
        b.isIE7 ? a('body, html').css('overflow', '') : (e.overflow = ''),
          a('html').css(e)
      }
      d.off('keyup' + p + ' focusin' + p),
        b.ev.off(p),
        b.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
        b.bgOverlay.attr('class', 'mfp-bg'),
        b.container.attr('class', 'mfp-container'),
        !b.st.showCloseBtn ||
          (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) ||
          (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j)
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c
        b.wrap.css('height', d), (b.wH = d)
      } else b.wH = a || v.height()
      b.fixedContentPos || b.wrap.css('height', b.wH), y('Resize')
    },
    updateItemHTML: function () {
      var c = b.items[b.index]
      b.contentContainer.detach(),
        b.content && b.content.detach(),
        c.parsed || (c = b.parseEl(b.index))
      var d = c.type
      if (
        (y('BeforeChange', [b.currItem ? b.currItem.type : '', d]),
        (b.currItem = c),
        !b.currTemplate[d])
      ) {
        var f = b.st[d] ? b.st[d].markup : !1
        y('FirstMarkupParse', f),
          f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0)
      }
      e && e !== c.type && b.container.removeClass('mfp-' + e + '-holder')
      var g = b['get' + d.charAt(0).toUpperCase() + d.slice(1)](
        c,
        b.currTemplate[d]
      )
      b.appendContent(g, d),
        (c.preloaded = !0),
        y(n, c),
        (e = c.type),
        b.container.prepend(b.contentContainer),
        y('AfterChange')
    },
    appendContent: function (a, c) {
      ;(b.content = a),
        a
          ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0
            ? b.content.find('.mfp-close').length || b.content.append(z())
            : (b.content = a)
          : (b.content = ''),
        y(k),
        b.container.addClass('mfp-' + c + '-holder'),
        b.contentContainer.append(b.content)
    },
    parseEl: function (c) {
      var d,
        e = b.items[c]
      if (
        (e.tagName
          ? (e = { el: a(e) })
          : ((d = e.type), (e = { data: e, src: e.src })),
        e.el)
      ) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass('mfp-' + f[g])) {
            d = f[g]
            break
          }
        ;(e.src = e.el.attr('data-mfp-src')),
          e.src || (e.src = e.el.attr('href'))
      }
      return (
        (e.type = d || b.st.type || 'inline'),
        (e.index = c),
        (e.parsed = !0),
        (b.items[c] = e),
        y('ElementParse', e),
        b.items[c]
      )
    },
    addGroup: function (a, c) {
      var d = function (d) {
        ;(d.mfpEl = this), b._openClick(d, a, c)
      }
      c || (c = {})
      var e = 'click.magnificPopup'
      ;(c.mainEl = a),
        c.items
          ? ((c.isObj = !0), a.off(e).on(e, d))
          : ((c.isObj = !1),
            c.delegate
              ? a.off(e).on(e, c.delegate, d)
              : ((c.items = a), a.off(e).on(e, d)))
    },
    _openClick: function (c, d, e) {
      var f =
        void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick
      if (
        f ||
        !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)
      ) {
        var g =
          void 0 !== e.disableOn
            ? e.disableOn
            : a.magnificPopup.defaults.disableOn
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0
          } else if (v.width() < g) return !0
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()),
          (e.el = a(c.mfpEl)),
          e.delegate && (e.items = d.find(e.delegate)),
          b.open(e)
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass('mfp-s-' + c),
          d || 'loading' !== a || (d = b.st.tLoading)
        var e = { status: a, text: d }
        y('UpdateStatus', e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find('a').on('click', function (a) {
            a.stopImmediatePropagation()
          }),
          b.container.addClass('mfp-s-' + a),
          (c = a)
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick
        if (d && e) return !0
        if (
          !b.content ||
          a(c).hasClass('mfp-close') ||
          (b.preloader && c === b.preloader[0])
        )
          return !0
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0
        } else if (e && a.contains(document, c)) return !0
        return !1
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a)
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
    },
    _hasScrollBar: function (a) {
      return (
        (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
      )
    },
    _setFocus: function () {
      ;(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target)
        ? void 0
        : (b._setFocus(), !1)
    },
    _parseMarkup: function (b, c, d) {
      var e
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0
          if (((e = c.split('_')), e.length > 1)) {
            var f = b.find(p + '-' + e[0])
            if (f.length > 0) {
              var g = e[1]
              'replaceWith' === g
                ? f[0] !== d[0] && f.replaceWith(d)
                : 'img' === g
                ? f.is('img')
                  ? f.attr('src', d)
                  : f.replaceWith(
                      a('<img>').attr('src', d).attr('class', f.attr('class'))
                    )
                : f.attr(e[1], d)
            }
          } else b.find(p + '-' + c).html(d)
        })
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement('div')
        ;(a.style.cssText =
          'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'),
          document.body.appendChild(a),
          (b.scrollbarSize = a.offsetWidth - a.clientWidth),
          document.body.removeChild(a)
      }
      return b.scrollbarSize
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return (
          A(),
          (b = b ? a.extend(!0, {}, b) : {}),
          (b.isObj = !0),
          (b.index = c || 0),
          this.instance.open(b)
        )
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close()
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options),
          a.extend(this.proto, c.proto),
          this.modules.push(b)
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: '',
        preloader: !0,
        focus: '',
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: 'auto',
        fixedBgPos: 'auto',
        overflowY: 'auto',
        closeMarkup:
          '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: 'Close (Esc)',
        tLoading: 'Loading...',
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A()
      var d = a(this)
      if ('string' == typeof c)
        if ('open' === c) {
          var e,
            f = u ? d.data('magnificPopup') : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0
          f.items
            ? (e = f.items[g])
            : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))),
            b._openClick({ mfpEl: e }, d, f)
        } else
          b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1))
      else
        (c = a.extend(!0, {}, c)),
          u ? d.data('magnificPopup', c) : (d[0].magnificPopup = c),
          b.addGroup(d, c)
      return d
    })
  var C,
    D,
    E,
    F = 'inline',
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null))
    }
  a.magnificPopup.registerModule(F, {
    options: {
      hiddenClass: 'hide',
      markup: '',
      tNotFound: 'Content not found',
    },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + '.' + F, function () {
            G()
          })
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src)
          if (f.length) {
            var g = f[0].parentNode
            g &&
              g.tagName &&
              (D || ((C = e.hiddenClass), (D = x(C)), (C = 'mfp-' + C)),
              (E = f.after(D).detach().removeClass(C))),
              b.updateStatus('ready')
          } else b.updateStatus('error', e.tNotFound), (f = a('<div>'))
          return (c.inlineElement = f), f
        }
        return b.updateStatus('ready'), b._parseMarkup(d, {}, c), d
      },
    },
  })
  var H,
    I = 'ajax',
    J = function () {
      H && a(document.body).removeClass(H)
    },
    K = function () {
      J(), b.req && b.req.abort()
    }
  a.magnificPopup.registerModule(I, {
    options: {
      settings: null,
      cursor: 'mfp-ajax-cur',
      tError: '<a href="%url%">The content</a> could not be loaded.',
    },
    proto: {
      initAjax: function () {
        b.types.push(I),
          (H = b.st.ajax.cursor),
          w(h + '.' + I, K),
          w('BeforeChange.' + I, K)
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus('loading')
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f }
              y('ParseAjax', g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q)
                }, 16),
                b.updateStatus('ready'),
                y('AjaxContentAdded')
            },
            error: function () {
              J(),
                (c.finished = c.loadError = !0),
                b.updateStatus(
                  'error',
                  b.st.ajax.tError.replace('%url%', c.src)
                )
            },
          },
          b.st.ajax.settings
        )
        return (b.req = a.ajax(d)), ''
      },
    },
  })
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title
      var d = b.st.image.titleSrc
      if (d) {
        if (a.isFunction(d)) return d.call(b, c)
        if (c.el) return c.el.attr(d) || ''
      }
      return ''
    }
  a.magnificPopup.registerModule('image', {
    options: {
      markup:
        '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = '.image'
        b.types.push('image'),
          w(m + d, function () {
            'image' === b.currItem.type &&
              c.cursor &&
              a(document.body).addClass(c.cursor)
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor),
              v.off('resize' + p)
          }),
          w('Resize' + d, b.resizeImage),
          b.isLowIE && w('AfterChange', b.resizeImage)
      },
      resizeImage: function () {
        var a = b.currItem
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0
          b.isLowIE &&
            (c =
              parseInt(a.img.css('padding-top'), 10) +
              parseInt(a.img.css('padding-bottom'), 10)),
            a.img.css('max-height', b.wH - c)
        }
      },
      _onImageHasSize: function (a) {
        a.img &&
          ((a.hasSize = !0),
          L && clearInterval(L),
          (a.isCheckingImgSize = !1),
          y('ImageHasSize', a),
          a.imgHidden &&
            (b.content && b.content.removeClass('mfp-loading'),
            (a.imgHidden = !1)))
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0
                  ? void b._onImageHasSize(a)
                  : (c > 200 && clearInterval(L),
                    c++,
                    void (3 === c
                      ? e(10)
                      : 40 === c
                      ? e(50)
                      : 100 === c && e(500)))
              }, f))
          }
        e(1)
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c &&
              (c.img[0].complete
                ? (c.img.off('.mfploader'),
                  c === b.currItem &&
                    (b._onImageHasSize(c), b.updateStatus('ready')),
                  (c.hasSize = !0),
                  (c.loaded = !0),
                  y('ImageLoadComplete'))
                : (e++, 200 > e ? setTimeout(f, 100) : g()))
          },
          g = function () {
            c &&
              (c.img.off('.mfploader'),
              c === b.currItem &&
                (b._onImageHasSize(c),
                b.updateStatus('error', h.tError.replace('%url%', c.src))),
              (c.hasSize = !0),
              (c.loaded = !0),
              (c.loadError = !0))
          },
          h = b.st.image,
          i = d.find('.mfp-img')
        if (i.length) {
          var j = document.createElement('img')
          ;(j.className = 'mfp-img'),
            c.el &&
              c.el.find('img').length &&
              (j.alt = c.el.find('img').attr('alt')),
            (c.img = a(j).on('load.mfploader', f).on('error.mfploader', g)),
            (j.src = c.src),
            i.is('img') && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1)
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L),
              c.loadError
                ? (d.addClass('mfp-loading'),
                  b.updateStatus('error', h.tError.replace('%url%', c.src)))
                : (d.removeClass('mfp-loading'), b.updateStatus('ready')),
              d)
            : (b.updateStatus('loading'),
              (c.loading = !0),
              c.hasSize ||
                ((c.imgHidden = !0),
                d.addClass('mfp-loading'),
                b.findImageSize(c)),
              d)
        )
      },
    },
  })
  var N,
    O = function () {
      return (
        void 0 === N &&
          (N = void 0 !== document.createElement('p').style.MozTransform),
        N
      )
    }
  a.magnificPopup.registerModule('zoom', {
    options: {
      enabled: !1,
      easing: 'ease-in-out',
      duration: 300,
      opener: function (a) {
        return a.is('img') ? a : a.find('img')
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = '.zoom'
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a
                  .clone()
                  .removeAttr('style')
                  .removeAttr('class')
                  .addClass('mfp-animated-image'),
                d = 'all ' + c.duration / 1e3 + 's ' + c.easing,
                e = {
                  position: 'fixed',
                  zIndex: 9999,
                  left: 0,
                  top: 0,
                  '-webkit-backface-visibility': 'hidden',
                },
                f = 'transition'
              return (
                (e['-webkit-' + f] = e['-moz-' + f] = e['-o-' + f] = e[f] = d),
                b.css(e),
                b
              )
            },
            k = function () {
              b.content.css('visibility', 'visible')
            }
          w('BuildControls' + d, function () {
            if (b._allowZoom()) {
              if (
                (clearTimeout(e),
                b.content.css('visibility', 'hidden'),
                (a = b._getItemToZoom()),
                !a)
              )
                return void k()
              ;(f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y('ZoomAnimationEnded')
                        }, 16)
                    }, g))
                }, 16))
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return
                  f = j(a)
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css('visibility', 'hidden'),
                  setTimeout(function () {
                    f.css(b._getOffset())
                  }, 16)
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null))
            })
        }
      },
      _allowZoom: function () {
        return 'image' === b.currItem.type
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1
      },
      _getOffset: function (c) {
        var d
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem)
        var e = d.offset(),
          f = parseInt(d.css('padding-top'), 10),
          g = parseInt(d.css('padding-bottom'), 10)
        e.top -= a(window).scrollTop() - f
        var h = {
          width: d.width(),
          height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f,
        }
        return (
          O()
            ? (h['-moz-transform'] = h.transform =
                'translate(' + e.left + 'px,' + e.top + 'px)')
            : ((h.left = e.left), (h.top = e.top)),
          h
        )
      },
    },
  })
  var P = 'iframe',
    Q = '//about:blank',
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find('iframe')
        c.length &&
          (a || (c[0].src = Q),
          b.isIE8 && c.css('display', a ? 'block' : 'none'))
      }
    }
  a.magnificPopup.registerModule(P, {
    options: {
      markup:
        '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: 'iframe_src',
      patterns: {
        youtube: {
          index: 'youtube.com',
          id: 'v=',
          src: '//www.youtube.com/embed/%id%?autoplay=1',
        },
        vimeo: {
          index: 'vimeo.com/',
          id: '/',
          src: '//player.vimeo.com/video/%id%?autoplay=1',
        },
        gmaps: { index: '//maps.google.', src: '%id%&output=embed' },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w('BeforeChange', function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0))
          }),
          w(h + '.' + P, function () {
            R()
          })
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1
            ? (this.id &&
                (e =
                  'string' == typeof this.id
                    ? e.substr(
                        e.lastIndexOf(this.id) + this.id.length,
                        e.length
                      )
                    : this.id.call(this, e)),
              (e = this.src.replace('%id%', e)),
              !1)
            : void 0
        })
        var g = {}
        return (
          f.srcAction && (g[f.srcAction] = e),
          b._parseMarkup(d, g, c),
          b.updateStatus('ready'),
          d
        )
      },
    },
  })
  var S = function (a) {
      var c = b.items.length
      return a > c - 1 ? a - c : 0 > a ? c + a : a
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
    }
  a.magnificPopup.registerModule('gallery', {
    options: {
      enabled: !1,
      arrowMarkup:
        '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '%curr% of %total%',
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = '.mfp-gallery'
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += ' mfp-gallery'),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on('click' + e, '.mfp-img', function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0
                  }),
                  d.on('keydown' + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
                  })
              }),
              w('UpdateStatus' + e, function (a, c) {
                c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : ''
              }),
              w('BuildControls' + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(
                      d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, 'left')
                    ).addClass(s)),
                    f = (b.arrowRight = a(
                      d
                        .replace(/%title%/gi, c.tNext)
                        .replace(/%dir%/gi, 'right')
                    ).addClass(s))
                  e.click(function () {
                    b.prev()
                  }),
                    f.click(function () {
                      b.next()
                    }),
                    b.container.append(e.add(f))
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null)
                  }, 16))
              }),
              void w(h + e, function () {
                d.off(e),
                  b.wrap.off('click' + e),
                  (b.arrowRight = b.arrowLeft = null)
              }))
            : !1
        )
      },
      next: function () {
        ;(b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML()
      },
      prev: function () {
        ;(b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML()
      },
      goTo: function (a) {
        ;(b.direction = a >= b.index), (b.index = a), b.updateItemHTML()
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length)
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a)
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c]
          d.parsed || (d = b.parseEl(c)),
            y('LazyLoad', d),
            'image' === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on('load.mfploader', function () {
                  d.hasSize = !0
                })
                .on('error.mfploader', function () {
                  ;(d.hasSize = !0), (d.loadError = !0), y('LazyLoadError', d)
                })
                .attr('src', d.src)),
            (d.preloaded = !0)
        }
      },
    },
  })
  var U = 'retina'
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return '@2x' + a
        })
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio
          ;(c = isNaN(c) ? c() : c),
            c > 1 &&
              (w('ImageHasSize.' + U, function (a, b) {
                b.img.css({
                  'max-width': b.img[0].naturalWidth / c,
                  width: '100%',
                })
              }),
              w('ElementParse.' + U, function (b, d) {
                d.src = a.replaceSrc(d, c)
              }))
        }
      },
    },
  }),
    A()
})

/* ========================
	waypoints-min.js
========================= */
!(function () {
  'use strict'
  var t = 0,
    e = {}
  function i(o) {
    if (!o) throw new Error('No options passed to Waypoint constructor')
    if (!o.element)
      throw new Error('No element option passed to Waypoint constructor')
    if (!o.handler)
      throw new Error('No handler option passed to Waypoint constructor')
    ;(this.key = 'waypoint-' + t),
      (this.options = i.Adapter.extend({}, i.defaults, o)),
      (this.element = this.options.element),
      (this.adapter = new i.Adapter(this.element)),
      (this.callback = o.handler),
      (this.axis = this.options.horizontal ? 'horizontal' : 'vertical'),
      (this.enabled = this.options.enabled),
      (this.triggerPoint = null),
      (this.group = i.Group.findOrCreate({
        name: this.options.group,
        axis: this.axis,
      })),
      (this.context = i.Context.findOrCreateByElement(this.options.context)),
      i.offsetAliases[this.options.offset] &&
        (this.options.offset = i.offsetAliases[this.options.offset]),
      this.group.add(this),
      this.context.add(this),
      (e[this.key] = this),
      (t += 1)
  }
  ;(i.prototype.queueTrigger = function (t) {
    this.group.queueTrigger(this, t)
  }),
    (i.prototype.trigger = function (t) {
      this.enabled && this.callback && this.callback.apply(this, t)
    }),
    (i.prototype.destroy = function () {
      this.context.remove(this), this.group.remove(this), delete e[this.key]
    }),
    (i.prototype.disable = function () {
      return (this.enabled = !1), this
    }),
    (i.prototype.enable = function () {
      return this.context.refresh(), (this.enabled = !0), this
    }),
    (i.prototype.next = function () {
      return this.group.next(this)
    }),
    (i.prototype.previous = function () {
      return this.group.previous(this)
    }),
    (i.invokeAll = function (t) {
      var i = []
      for (var o in e) i.push(e[o])
      for (var n = 0, r = i.length; n < r; n++) i[n][t]()
    }),
    (i.destroyAll = function () {
      i.invokeAll('destroy')
    }),
    (i.disableAll = function () {
      i.invokeAll('disable')
    }),
    (i.enableAll = function () {
      i.Context.refreshAll()
      for (var t in e) e[t].enabled = !0
      return this
    }),
    (i.refreshAll = function () {
      i.Context.refreshAll()
    }),
    (i.viewportHeight = function () {
      return window.innerHeight || document.documentElement.clientHeight
    }),
    (i.viewportWidth = function () {
      return document.documentElement.clientWidth
    }),
    (i.adapters = []),
    (i.defaults = {
      context: window,
      continuous: !0,
      enabled: !0,
      group: 'default',
      horizontal: !1,
      offset: 0,
    }),
    (i.offsetAliases = {
      'bottom-in-view': function () {
        return this.context.innerHeight() - this.adapter.outerHeight()
      },
      'right-in-view': function () {
        return this.context.innerWidth() - this.adapter.outerWidth()
      },
    }),
    (window.Waypoint = i)
})(),
  (function () {
    'use strict'
    function t(t) {
      window.setTimeout(t, 1e3 / 60)
    }
    var e = 0,
      i = {},
      o = window.Waypoint,
      n = window.onload
    function r(t) {
      ;(this.element = t),
        (this.Adapter = o.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = 'waypoint-context-' + e),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (i[t.waypointContextKey] = this),
        (e += 1),
        o.windowContext ||
          ((o.windowContext = !0), (o.windowContext = new r(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler()
    }
    ;(r.prototype.add = function (t) {
      var e = t.options.horizontal ? 'horizontal' : 'vertical'
      ;(this.waypoints[e][t.key] = t), this.refresh()
    }),
      (r.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          o = this.element == this.element.window
        t && e && !o && (this.adapter.off('.waypoints'), delete i[this.key])
      }),
      (r.prototype.createThrottledResizeHandler = function () {
        var t = this
        function e() {
          t.handleResize(), (t.didResize = !1)
        }
        this.adapter.on('resize.waypoints', function () {
          t.didResize || ((t.didResize = !0), o.requestAnimationFrame(e))
        })
      }),
      (r.prototype.createThrottledScrollHandler = function () {
        var t = this
        function e() {
          t.handleScroll(), (t.didScroll = !1)
        }
        this.adapter.on('scroll.waypoints', function () {
          ;(t.didScroll && !o.isTouch) ||
            ((t.didScroll = !0), o.requestAnimationFrame(e))
        })
      }),
      (r.prototype.handleResize = function () {
        o.Context.refreshAll()
      }),
      (r.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
            },
          }
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll ? o.forward : o.backward
          for (var r in this.waypoints[i]) {
            var s = this.waypoints[i][r]
            if (null !== s.triggerPoint) {
              var a = o.oldScroll < s.triggerPoint,
                l = o.newScroll >= s.triggerPoint
              ;((a && l) || (!a && !l)) &&
                (s.queueTrigger(n), (t[s.group.id] = s.group))
            }
          }
        }
        for (var h in t) t[h].flushTriggers()
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll }
      }),
      (r.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? o.viewportHeight()
          : this.adapter.innerHeight()
      }),
      (r.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
      }),
      (r.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? o.viewportWidth()
          : this.adapter.innerWidth()
      }),
      (r.prototype.destroy = function () {
        var t = []
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i])
        for (var o = 0, n = t.length; o < n; o++) t[o].destroy()
      }),
      (r.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          n = {}
        this.handleScroll(),
          (t = {
            horizontal: {
              contextOffset: e ? 0 : i.left,
              contextScroll: e ? 0 : this.oldScroll.x,
              contextDimension: this.innerWidth(),
              oldScroll: this.oldScroll.x,
              forward: 'right',
              backward: 'left',
              offsetProp: 'left',
            },
            vertical: {
              contextOffset: e ? 0 : i.top,
              contextScroll: e ? 0 : this.oldScroll.y,
              contextDimension: this.innerHeight(),
              oldScroll: this.oldScroll.y,
              forward: 'down',
              backward: 'up',
              offsetProp: 'top',
            },
          })
        for (var r in t) {
          var s = t[r]
          for (var a in this.waypoints[r]) {
            var l,
              h,
              p,
              u,
              c = this.waypoints[r][a],
              d = c.options.offset,
              f = c.triggerPoint,
              w = 0,
              y = null == f
            c.element !== c.element.window &&
              (w = c.adapter.offset()[s.offsetProp]),
              'function' == typeof d
                ? (d = d.apply(c))
                : 'string' == typeof d &&
                  ((d = parseFloat(d)),
                  c.options.offset.indexOf('%') > -1 &&
                    (d = Math.ceil((s.contextDimension * d) / 100))),
              (l = s.contextScroll - s.contextOffset),
              (c.triggerPoint = Math.floor(w + l - d)),
              (h = f < s.oldScroll),
              (p = c.triggerPoint >= s.oldScroll),
              (u = !h && !p),
              !y && h && p
                ? (c.queueTrigger(s.backward), (n[c.group.id] = c.group))
                : !y && u
                ? (c.queueTrigger(s.forward), (n[c.group.id] = c.group))
                : y &&
                  s.oldScroll >= c.triggerPoint &&
                  (c.queueTrigger(s.forward), (n[c.group.id] = c.group))
          }
        }
        return (
          o.requestAnimationFrame(function () {
            for (var t in n) n[t].flushTriggers()
          }),
          this
        )
      }),
      (r.findOrCreateByElement = function (t) {
        return r.findByElement(t) || new r(t)
      }),
      (r.refreshAll = function () {
        for (var t in i) i[t].refresh()
      }),
      (r.findByElement = function (t) {
        return i[t.waypointContextKey]
      }),
      (window.onload = function () {
        n && n(), r.refreshAll()
      }),
      (o.requestAnimationFrame = function (e) {
        ;(
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t
        ).call(window, e)
      }),
      (o.Context = r)
  })(),
  (function () {
    'use strict'
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint
    }
    var i = { vertical: {}, horizontal: {} },
      o = window.Waypoint
    function n(t) {
      ;(this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + '-' + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (i[this.axis][this.name] = this)
    }
    ;(n.prototype.add = function (t) {
      this.waypoints.push(t)
    }),
      (n.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] }
      }),
      (n.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = 'up' === i || 'left' === i
          o.sort(n ? e : t)
          for (var r = 0, s = o.length; r < s; r += 1) {
            var a = o[r]
            ;(a.options.continuous || r === o.length - 1) && a.trigger([i])
          }
        }
        this.clearTriggerQueues()
      }),
      (n.prototype.next = function (e) {
        this.waypoints.sort(t)
        var i = o.Adapter.inArray(e, this.waypoints)
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
      }),
      (n.prototype.previous = function (e) {
        this.waypoints.sort(t)
        var i = o.Adapter.inArray(e, this.waypoints)
        return i ? this.waypoints[i - 1] : null
      }),
      (n.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
      }),
      (n.prototype.remove = function (t) {
        var e = o.Adapter.inArray(t, this.waypoints)
        e > -1 && this.waypoints.splice(e, 1)
      }),
      (n.prototype.first = function () {
        return this.waypoints[0]
      }),
      (n.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
      }),
      (n.findOrCreate = function (t) {
        return i[t.axis][t.name] || new n(t)
      }),
      (o.Group = n)
  })(),
  (function () {
    'use strict'
    var t = window.jQuery,
      e = window.Waypoint
    function i(e) {
      this.$element = t(e)
    }
    t.each(
      [
        'innerHeight',
        'innerWidth',
        'off',
        'offset',
        'on',
        'outerHeight',
        'outerWidth',
        'scrollLeft',
        'scrollTop',
      ],
      function (t, e) {
        i.prototype[e] = function () {
          var t = Array.prototype.slice.call(arguments)
          return this.$element[e].apply(this.$element, t)
        }
      }
    ),
      t.each(['extend', 'inArray', 'isEmptyObject'], function (e, o) {
        i[o] = t[o]
      }),
      e.adapters.push({ name: 'jquery', Adapter: i }),
      (e.Adapter = i)
  })(),
  (function () {
    'use strict'
    var t = window.Waypoint
    function e(e) {
      return function () {
        var i = [],
          o = arguments[0]
        return (
          e.isFunction(arguments[0]) &&
            ((o = e.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var n = e.extend({}, o, { element: this })
            'string' == typeof n.context &&
              (n.context = e(this).closest(n.context)[0]),
              i.push(new t(n))
          }),
          i
        )
      }
    }
    window.jQuery && (window.jQuery.fn.waypoint = e(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = e(window.Zepto))
  })()

/* ========================
	counterup.min.js
========================= */
;(function ($) {
  'use strict'
  $.fn.counterUp = function (options) {
    var settings = $.extend(
        {
          time: 400,
          delay: 10,
          offset: 100,
          beginAt: 0,
          formatter: false,
          context: 'window',
          callback: function () {},
        },
        options
      ),
      s
    return this.each(function () {
      var $this = $(this),
        counter = {
          time: $(this).data('counterup-time') || settings.time,
          delay: $(this).data('counterup-delay') || settings.delay,
          offset: $(this).data('counterup-offset') || settings.offset,
          beginAt: $(this).data('counterup-beginat') || settings.beginAt,
          context: $(this).data('counterup-context') || settings.context,
        }
      var counterUpper = function () {
        var nums = []
        var divisions = counter.time / counter.delay
        var num = $(this).attr('data-num')
          ? $(this).attr('data-num')
          : $this.text()
        var isComma = /[0-9]+,[0-9]+/.test(num)
        num = num.replace(/,/g, '')
        var decimalPlaces = (num.split('.')[1] || []).length
        if (counter.beginAt > num) counter.beginAt = num
        var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num)
        if (isTime) {
          var times = num.split(':'),
            m = 1
          s = 0
          while (times.length > 0) {
            s += m * parseInt(times.pop(), 10)
            m *= 60
          }
        }
        for (var i = divisions; i >= (counter.beginAt / num) * divisions; i--) {
          var newNum = parseFloat((num / divisions) * i).toFixed(decimalPlaces)
          if (isTime) {
            newNum = parseInt((s / divisions) * i)
            var hours = parseInt(newNum / 3600) % 24
            var minutes = parseInt(newNum / 60) % 60
            var seconds = parseInt(newNum % 60, 10)
            newNum =
              (hours < 10 ? '0' + hours : hours) +
              ':' +
              (minutes < 10 ? '0' + minutes : minutes) +
              ':' +
              (seconds < 10 ? '0' + seconds : seconds)
          }
          if (isComma) {
            while (/(\d+)(\d{3})/.test(newNum.toString())) {
              newNum = newNum
                .toString()
                .replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
            }
          }
          if (settings.formatter) {
            newNum = settings.formatter.call(this, newNum)
          }
          nums.unshift(newNum)
        }
        $this.data('counterup-nums', nums)
        $this.text(counter.beginAt)
        var f = function () {
          if (!$this.data('counterup-nums')) {
            settings.callback.call(this)
            return
          }
          $this.html($this.data('counterup-nums').shift())
          if ($this.data('counterup-nums').length) {
            setTimeout($this.data('counterup-func'), counter.delay)
          } else {
            $this.data('counterup-nums', null)
            $this.data('counterup-func', null)
            settings.callback.call(this)
          }
        }
        $this.data('counterup-func', f)
        setTimeout($this.data('counterup-func'), counter.delay)
      }
      $this.waypoint(
        function (direction) {
          counterUpper()
          this.destroy()
        },
        { offset: counter.offset + '%', context: counter.context }
      )
    })
  }
})(jQuery)

/* ========================
	imagesloaded.js
========================= */
/*!
 * imagesLoaded PACKAGED v3.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
;(function () {
  function e() {}
  function t(e, t) {
    for (var n = e.length; n--; ) if (e[n].listener === t) return n
    return -1
  }
  function n(e) {
    return function () {
      return this[e].apply(this, arguments)
    }
  }
  var i = e.prototype,
    r = this,
    o = r.EventEmitter
  ;(i.getListeners = function (e) {
    var t,
      n,
      i = this._getEvents()
    if ('object' == typeof e) {
      t = {}
      for (n in i) i.hasOwnProperty(n) && e.test(n) && (t[n] = i[n])
    } else t = i[e] || (i[e] = [])
    return t
  }),
    (i.flattenListeners = function (e) {
      var t,
        n = []
      for (t = 0; t < e.length; t += 1) n.push(e[t].listener)
      return n
    }),
    (i.getListenersAsObject = function (e) {
      var t,
        n = this.getListeners(e)
      return n instanceof Array && ((t = {}), (t[e] = n)), t || n
    }),
    (i.addListener = function (e, n) {
      var i,
        r = this.getListenersAsObject(e),
        o = 'object' == typeof n
      for (i in r)
        r.hasOwnProperty(i) &&
          -1 === t(r[i], n) &&
          r[i].push(o ? n : { listener: n, once: !1 })
      return this
    }),
    (i.on = n('addListener')),
    (i.addOnceListener = function (e, t) {
      return this.addListener(e, { listener: t, once: !0 })
    }),
    (i.once = n('addOnceListener')),
    (i.defineEvent = function (e) {
      return this.getListeners(e), this
    }),
    (i.defineEvents = function (e) {
      for (var t = 0; t < e.length; t += 1) this.defineEvent(e[t])
      return this
    }),
    (i.removeListener = function (e, n) {
      var i,
        r,
        o = this.getListenersAsObject(e)
      for (r in o)
        o.hasOwnProperty(r) && ((i = t(o[r], n)), -1 !== i && o[r].splice(i, 1))
      return this
    }),
    (i.off = n('removeListener')),
    (i.addListeners = function (e, t) {
      return this.manipulateListeners(!1, e, t)
    }),
    (i.removeListeners = function (e, t) {
      return this.manipulateListeners(!0, e, t)
    }),
    (i.manipulateListeners = function (e, t, n) {
      var i,
        r,
        o = e ? this.removeListener : this.addListener,
        s = e ? this.removeListeners : this.addListeners
      if ('object' != typeof t || t instanceof RegExp)
        for (i = n.length; i--; ) o.call(this, t, n[i])
      else
        for (i in t)
          t.hasOwnProperty(i) &&
            (r = t[i]) &&
            ('function' == typeof r ? o.call(this, i, r) : s.call(this, i, r))
      return this
    }),
    (i.removeEvent = function (e) {
      var t,
        n = typeof e,
        i = this._getEvents()
      if ('string' === n) delete i[e]
      else if ('object' === n)
        for (t in i) i.hasOwnProperty(t) && e.test(t) && delete i[t]
      else delete this._events
      return this
    }),
    (i.removeAllListeners = n('removeEvent')),
    (i.emitEvent = function (e, t) {
      var n,
        i,
        r,
        o,
        s = this.getListenersAsObject(e)
      for (r in s)
        if (s.hasOwnProperty(r))
          for (i = s[r].length; i--; )
            (n = s[r][i]),
              n.once === !0 && this.removeListener(e, n.listener),
              (o = n.listener.apply(this, t || [])),
              o === this._getOnceReturnValue() &&
                this.removeListener(e, n.listener)
      return this
    }),
    (i.trigger = n('emitEvent')),
    (i.emit = function (e) {
      var t = Array.prototype.slice.call(arguments, 1)
      return this.emitEvent(e, t)
    }),
    (i.setOnceReturnValue = function (e) {
      return (this._onceReturnValue = e), this
    }),
    (i._getOnceReturnValue = function () {
      return this.hasOwnProperty('_onceReturnValue')
        ? this._onceReturnValue
        : !0
    }),
    (i._getEvents = function () {
      return this._events || (this._events = {})
    }),
    (e.noConflict = function () {
      return (r.EventEmitter = o), e
    }),
    'function' == typeof define && define.amd
      ? define('eventEmitter/EventEmitter', [], function () {
          return e
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = e)
      : (this.EventEmitter = e)
}.call(this),
  (function (e) {
    function t(t) {
      var n = e.event
      return (n.target = n.target || n.srcElement || t), n
    }
    var n = document.documentElement,
      i = function () {}
    n.addEventListener
      ? (i = function (e, t, n) {
          e.addEventListener(t, n, !1)
        })
      : n.attachEvent &&
        (i = function (e, n, i) {
          ;(e[n + i] = i.handleEvent
            ? function () {
                var n = t(e)
                i.handleEvent.call(i, n)
              }
            : function () {
                var n = t(e)
                i.call(e, n)
              }),
            e.attachEvent('on' + n, e[n + i])
        })
    var r = function () {}
    n.removeEventListener
      ? (r = function (e, t, n) {
          e.removeEventListener(t, n, !1)
        })
      : n.detachEvent &&
        (r = function (e, t, n) {
          e.detachEvent('on' + t, e[t + n])
          try {
            delete e[t + n]
          } catch (i) {
            e[t + n] = void 0
          }
        })
    var o = { bind: i, unbind: r }
    'function' == typeof define && define.amd
      ? define('eventie/eventie', o)
      : (e.eventie = o)
  })(this),
  (function (e, t) {
    'function' == typeof define && define.amd
      ? define(
          ['eventEmitter/EventEmitter', 'eventie/eventie'],
          function (n, i) {
            return t(e, n, i)
          }
        )
      : 'object' == typeof exports
      ? (module.exports = t(e, require('eventEmitter'), require('eventie')))
      : (e.imagesLoaded = t(e, e.EventEmitter, e.eventie))
  })(this, function (e, t, n) {
    function i(e, t) {
      for (var n in t) e[n] = t[n]
      return e
    }
    function r(e) {
      return '[object Array]' === d.call(e)
    }
    function o(e) {
      var t = []
      if (r(e)) t = e
      else if ('number' == typeof e.length)
        for (var n = 0, i = e.length; i > n; n++) t.push(e[n])
      else t.push(e)
      return t
    }
    function s(e, t, n) {
      if (!(this instanceof s)) return new s(e, t)
      'string' == typeof e && (e = document.querySelectorAll(e)),
        (this.elements = o(e)),
        (this.options = i({}, this.options)),
        'function' == typeof t ? (n = t) : i(this.options, t),
        n && this.on('always', n),
        this.getImages(),
        u && (this.jqDeferred = new u.Deferred())
      var r = this
      setTimeout(function () {
        r.check()
      })
    }
    function f(e) {
      this.img = e
    }
    function c(e) {
      ;(this.src = e), (v[e] = this)
    }
    var u = e.jQuery,
      a = e.console,
      h = 'undefined' != typeof a,
      d = Object.prototype.toString
    ;(s.prototype = new t()),
      (s.prototype.options = {}),
      (s.prototype.getImages = function () {
        this.images = []
        for (var e = 0, t = this.elements.length; t > e; e++) {
          var n = this.elements[e]
          'IMG' === n.nodeName && this.addImage(n)
          for (
            var i = n.querySelectorAll('img'), r = 0, o = i.length;
            o > r;
            r++
          ) {
            var s = i[r]
            this.addImage(s)
          }
        }
      }),
      (s.prototype.addImage = function (e) {
        var t = new f(e)
        this.images.push(t)
      }),
      (s.prototype.check = function () {
        function e(e, r) {
          return (
            t.options.debug && h && a.log('confirm', e, r),
            t.progress(e),
            n++,
            n === i && t.complete(),
            !0
          )
        }
        var t = this,
          n = 0,
          i = this.images.length
        if (((this.hasAnyBroken = !1), !i)) return void this.complete()
        for (var r = 0; i > r; r++) {
          var o = this.images[r]
          o.on('confirm', e), o.check()
        }
      }),
      (s.prototype.progress = function (e) {
        this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded
        var t = this
        setTimeout(function () {
          t.emit('progress', t, e),
            t.jqDeferred && t.jqDeferred.notify && t.jqDeferred.notify(t, e)
        })
      }),
      (s.prototype.complete = function () {
        var e = this.hasAnyBroken ? 'fail' : 'done'
        this.isComplete = !0
        var t = this
        setTimeout(function () {
          if ((t.emit(e, t), t.emit('always', t), t.jqDeferred)) {
            var n = t.hasAnyBroken ? 'reject' : 'resolve'
            t.jqDeferred[n](t)
          }
        })
      }),
      u &&
        (u.fn.imagesLoaded = function (e, t) {
          var n = new s(this, e, t)
          return n.jqDeferred.promise(u(this))
        }),
      (f.prototype = new t()),
      (f.prototype.check = function () {
        var e = v[this.img.src] || new c(this.img.src)
        if (e.isConfirmed)
          return void this.confirm(e.isLoaded, 'cached was confirmed')
        if (this.img.complete && void 0 !== this.img.naturalWidth)
          return void this.confirm(0 !== this.img.naturalWidth, 'naturalWidth')
        var t = this
        e.on('confirm', function (e, n) {
          return t.confirm(e.isLoaded, n), !0
        }),
          e.check()
      }),
      (f.prototype.confirm = function (e, t) {
        ;(this.isLoaded = e), this.emit('confirm', this, t)
      })
    var v = {}
    return (
      (c.prototype = new t()),
      (c.prototype.check = function () {
        if (!this.isChecked) {
          var e = new Image()
          n.bind(e, 'load', this),
            n.bind(e, 'error', this),
            (e.src = this.src),
            (this.isChecked = !0)
        }
      }),
      (c.prototype.handleEvent = function (e) {
        var t = 'on' + e.type
        this[t] && this[t](e)
      }),
      (c.prototype.onload = function (e) {
        this.confirm(!0, 'onload'), this.unbindProxyEvents(e)
      }),
      (c.prototype.onerror = function (e) {
        this.confirm(!1, 'onerror'), this.unbindProxyEvents(e)
      }),
      (c.prototype.confirm = function (e, t) {
        ;(this.isConfirmed = !0),
          (this.isLoaded = e),
          this.emit('confirm', this, t)
      }),
      (c.prototype.unbindProxyEvents = function (e) {
        n.unbind(e.target, 'load', this), n.unbind(e.target, 'error', this)
      }),
      s
    )
  }))

/* ========================
	masonry-3.1.4.js
========================= */
/*Masonry PACKAGED v3.1.4

* Cascading grid layout library

* http://masonry.desandro.com

* MIT License

* by David DeSandro*/

/*Mike Davis - Added "getItems" method

- Fixed bug in "measureColumns" method which didn't take into

account hidden items.

2/28/2014 */

/*Bridget makes jQuery widgets

v1.0.1*/

!(function (t) {
  function e() {}
  function i(t) {
    function i(e) {
      e.prototype.option ||
        (e.prototype.option = function (e) {
          t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e))
        })
    }
    function o(e, i) {
      t.fn[e] = function (o) {
        if ('string' == typeof o) {
          for (
            var s = n.call(arguments, 1), a = 0, h = this.length;
            h > a;
            a++
          ) {
            var p = this[a],
              u = t.data(p, e)
            if (u)
              if (t.isFunction(u[o]) && '_' !== o.charAt(0)) {
                var f = u[o].apply(u, s)
                if (void 0 !== f) return f
              } else r("no such method '" + o + "' for " + e + ' instance')
            else
              r(
                'cannot call methods on ' +
                  e +
                  " prior to initialization; attempted to call '" +
                  o +
                  "'"
              )
          }
          return this
        }
        return this.each(function () {
          var n = t.data(this, e)
          n
            ? (n.option(o), n._init())
            : ((n = new i(this, o)), t.data(this, e, n))
        })
      }
    }
    if (t) {
      var r =
        'undefined' == typeof console
          ? e
          : function (t) {
              console.error(t)
            }
      return (
        (t.bridget = function (t, e) {
          i(e), o(t, e)
        }),
        t.bridget
      )
    }
  }
  var n = Array.prototype.slice
  'function' == typeof define && define.amd
    ? define('jquery-bridget/jquery.bridget', ['jquery'], i)
    : i(t.jQuery)
})(window),
  (function (t) {
    function e(e) {
      var i = t.event
      return (i.target = i.target || i.srcElement || e), i
    }
    var i = document.documentElement,
      n = function () {}
    i.addEventListener
      ? (n = function (t, e, i) {
          t.addEventListener(e, i, !1)
        })
      : i.attachEvent &&
        (n = function (t, i, n) {
          ;(t[i + n] = n.handleEvent
            ? function () {
                var i = e(t)
                n.handleEvent.call(n, i)
              }
            : function () {
                var i = e(t)
                n.call(t, i)
              }),
            t.attachEvent('on' + i, t[i + n])
        })
    var o = function () {}
    i.removeEventListener
      ? (o = function (t, e, i) {
          t.removeEventListener(e, i, !1)
        })
      : i.detachEvent &&
        (o = function (t, e, i) {
          t.detachEvent('on' + e, t[e + i])
          try {
            delete t[e + i]
          } catch (n) {
            t[e + i] = void 0
          }
        })
    var r = { bind: n, unbind: o }
    'function' == typeof define && define.amd
      ? define('eventie/eventie', r)
      : 'object' == typeof exports
      ? (module.exports = r)
      : (t.eventie = r)
  })(this),
  (function (t) {
    function e(t) {
      'function' == typeof t && (e.isReady ? t() : r.push(t))
    }
    function i(t) {
      var i = 'readystatechange' === t.type && 'complete' !== o.readyState
      if (!e.isReady && !i) {
        e.isReady = !0
        for (var n = 0, s = r.length; s > n; n++) {
          var a = r[n]
          a()
        }
      }
    }
    function n(n) {
      return (
        n.bind(o, 'DOMContentLoaded', i),
        n.bind(o, 'readystatechange', i),
        n.bind(t, 'load', i),
        e
      )
    }
    var o = t.document,
      r = []
    ;(e.isReady = !1),
      'function' == typeof define && define.amd
        ? ((e.isReady = 'function' == typeof requirejs),
          define('doc-ready/doc-ready', ['eventie/eventie'], n))
        : (t.docReady = n(t.eventie))
  })(this),
  function () {
    function t() {}
    function e(t, e) {
      for (var i = t.length; i--; ) if (t[i].listener === e) return i
      return -1
    }
    function i(t) {
      return function () {
        return this[t].apply(this, arguments)
      }
    }
    var n = t.prototype,
      o = this,
      r = o.EventEmitter
    ;(n.getListeners = function (t) {
      var e,
        i,
        n = this._getEvents()
      if (t instanceof RegExp) {
        e = {}
        for (i in n) n.hasOwnProperty(i) && t.test(i) && (e[i] = n[i])
      } else e = n[t] || (n[t] = [])
      return e
    }),
      (n.flattenListeners = function (t) {
        var e,
          i = []
        for (e = 0; e < t.length; e += 1) i.push(t[e].listener)
        return i
      }),
      (n.getListenersAsObject = function (t) {
        var e,
          i = this.getListeners(t)
        return i instanceof Array && ((e = {}), (e[t] = i)), e || i
      }),
      (n.addListener = function (t, i) {
        var n,
          o = this.getListenersAsObject(t),
          r = 'object' == typeof i
        for (n in o)
          o.hasOwnProperty(n) &&
            -1 === e(o[n], i) &&
            o[n].push(r ? i : { listener: i, once: !1 })
        return this
      }),
      (n.on = i('addListener')),
      (n.addOnceListener = function (t, e) {
        return this.addListener(t, { listener: e, once: !0 })
      }),
      (n.once = i('addOnceListener')),
      (n.defineEvent = function (t) {
        return this.getListeners(t), this
      }),
      (n.defineEvents = function (t) {
        for (var e = 0; e < t.length; e += 1) this.defineEvent(t[e])
        return this
      }),
      (n.removeListener = function (t, i) {
        var n,
          o,
          r = this.getListenersAsObject(t)
        for (o in r)
          r.hasOwnProperty(o) &&
            ((n = e(r[o], i)), -1 !== n && r[o].splice(n, 1))
        return this
      }),
      (n.off = i('removeListener')),
      (n.addListeners = function (t, e) {
        return this.manipulateListeners(!1, t, e)
      }),
      (n.removeListeners = function (t, e) {
        return this.manipulateListeners(!0, t, e)
      }),
      (n.manipulateListeners = function (t, e, i) {
        var n,
          o,
          r = t ? this.removeListener : this.addListener,
          s = t ? this.removeListeners : this.addListeners
        if ('object' != typeof e || e instanceof RegExp)
          for (n = i.length; n--; ) r.call(this, e, i[n])
        else
          for (n in e)
            e.hasOwnProperty(n) &&
              (o = e[n]) &&
              ('function' == typeof o ? r.call(this, n, o) : s.call(this, n, o))
        return this
      }),
      (n.removeEvent = function (t) {
        var e,
          i = typeof t,
          n = this._getEvents()
        if ('string' === i) delete n[t]
        else if (t instanceof RegExp)
          for (e in n) n.hasOwnProperty(e) && t.test(e) && delete n[e]
        else delete this._events
        return this
      }),
      (n.removeAllListeners = i('removeEvent')),
      (n.emitEvent = function (t, e) {
        var i,
          n,
          o,
          r,
          s = this.getListenersAsObject(t)
        for (o in s)
          if (s.hasOwnProperty(o))
            for (n = s[o].length; n--; )
              (i = s[o][n]),
                i.once === !0 && this.removeListener(t, i.listener),
                (r = i.listener.apply(this, e || [])),
                r === this._getOnceReturnValue() &&
                  this.removeListener(t, i.listener)
        return this
      }),
      (n.trigger = i('emitEvent')),
      (n.emit = function (t) {
        var e = Array.prototype.slice.call(arguments, 1)
        return this.emitEvent(t, e)
      }),
      (n.setOnceReturnValue = function (t) {
        return (this._onceReturnValue = t), this
      }),
      (n._getOnceReturnValue = function () {
        return this.hasOwnProperty('_onceReturnValue')
          ? this._onceReturnValue
          : !0
      }),
      (n._getEvents = function () {
        return this._events || (this._events = {})
      }),
      (t.noConflict = function () {
        return (o.EventEmitter = r), t
      }),
      'function' == typeof define && define.amd
        ? define('eventEmitter/EventEmitter', [], function () {
            return t
          })
        : 'object' == typeof module && module.exports
        ? (module.exports = t)
        : (this.EventEmitter = t)
  }.call(this),
  (function (t) {
    function e(t) {
      if (t) {
        if ('string' == typeof n[t]) return t
        t = t.charAt(0).toUpperCase() + t.slice(1)
        for (var e, o = 0, r = i.length; r > o; o++)
          if (((e = i[o] + t), 'string' == typeof n[e])) return e
      }
    }
    var i = 'Webkit Moz ms Ms O'.split(' '),
      n = document.documentElement.style
    'function' == typeof define && define.amd
      ? define('get-style-property/get-style-property', [], function () {
          return e
        })
      : 'object' == typeof exports
      ? (module.exports = e)
      : (t.getStyleProperty = e)
  })(window),
  (function (t, e) {
    function i(t) {
      var e = parseFloat(t),
        i = -1 === t.indexOf('%') && !isNaN(e)
      return i && e
    }
    function n() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0,
          i = a.length;
        i > e;
        e++
      ) {
        var n = a[e]
        t[n] = 0
      }
      return t
    }
    function o(t) {
      function e(t) {
        if (
          ('string' == typeof t && (t = document.querySelector(t)),
          t && 'object' == typeof t && t.nodeType)
        ) {
          var e = s(t)
          if ('none' === e.display) return n()
          var r = {}
          ;(r.width = t.offsetWidth), (r.height = t.offsetHeight)
          for (
            var u = (r.isBorderBox = !(!p || !e[p] || 'border-box' !== e[p])),
              f = 0,
              c = a.length;
            c > f;
            f++
          ) {
            var d = a[f],
              l = e[d]
            l = o(t, l)
            var m = parseFloat(l)
            r[d] = isNaN(m) ? 0 : m
          }
          var y = r.paddingLeft + r.paddingRight,
            g = r.paddingTop + r.paddingBottom,
            v = r.marginLeft + r.marginRight,
            b = r.marginTop + r.marginBottom,
            _ = r.borderLeftWidth + r.borderRightWidth,
            E = r.borderTopWidth + r.borderBottomWidth,
            L = u && h,
            x = i(e.width)
          x !== !1 && (r.width = x + (L ? 0 : y + _))
          var z = i(e.height)
          return (
            z !== !1 && (r.height = z + (L ? 0 : g + E)),
            (r.innerWidth = r.width - (y + _)),
            (r.innerHeight = r.height - (g + E)),
            (r.outerWidth = r.width + v),
            (r.outerHeight = r.height + b),
            r
          )
        }
      }
      function o(t, e) {
        if (r || -1 === e.indexOf('%')) return e
        var i = t.style,
          n = i.left,
          o = t.runtimeStyle,
          s = o && o.left
        return (
          s && (o.left = t.currentStyle.left),
          (i.left = e),
          (e = i.pixelLeft),
          (i.left = n),
          s && (o.left = s),
          e
        )
      }
      var h,
        p = t('boxSizing')
      return (
        (function () {
          if (p) {
            var t = document.createElement('div')
            ;(t.style.width = '200px'),
              (t.style.padding = '1px 2px 3px 4px'),
              (t.style.borderStyle = 'solid'),
              (t.style.borderWidth = '1px 2px 3px 4px'),
              (t.style[p] = 'border-box')
            var e = document.body || document.documentElement
            e.appendChild(t)
            var n = s(t)
            ;(h = 200 === i(n.width)), e.removeChild(t)
          }
        })(),
        e
      )
    }
    var r = t.getComputedStyle,
      s = r
        ? function (t) {
            return r(t, null)
          }
        : function (t) {
            return t.currentStyle
          },
      a = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth',
      ]
    'function' == typeof define && define.amd
      ? define(
          'get-size/get-size',
          ['get-style-property/get-style-property'],
          o
        )
      : 'object' == typeof exports
      ? (module.exports = o(require('get-style-property')))
      : (t.getSize = o(t.getStyleProperty))
  })(window),
  (function (t, e) {
    function i(t, e) {
      return t[a](e)
    }
    function n(t) {
      if (!t.parentNode) {
        var e = document.createDocumentFragment()
        e.appendChild(t)
      }
    }
    function o(t, e) {
      n(t)
      for (
        var i = t.parentNode.querySelectorAll(e), o = 0, r = i.length;
        r > o;
        o++
      )
        if (i[o] === t) return !0
      return !1
    }
    function r(t, e) {
      return n(t), i(t, e)
    }
    var s,
      a = (function () {
        if (e.matchesSelector) return 'matchesSelector'
        for (
          var t = ['webkit', 'moz', 'ms', 'o'], i = 0, n = t.length;
          n > i;
          i++
        ) {
          var o = t[i],
            r = o + 'MatchesSelector'
          if (e[r]) return r
        }
      })()
    if (a) {
      var h = document.createElement('div'),
        p = i(h, 'div')
      s = p ? i : r
    } else s = o
    'function' == typeof define && define.amd
      ? define('matches-selector/matches-selector', [], function () {
          return s
        })
      : (window.matchesSelector = s)
  })(this, Element.prototype),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i]
      return t
    }
    function i(t) {
      for (var e in t) return !1
      return (e = null), !0
    }
    function n(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return '-' + t.toLowerCase()
      })
    }
    function o(t, o, r) {
      function a(t, e) {
        t &&
          ((this.element = t),
          (this.layout = e),
          (this.position = { x: 0, y: 0 }),
          this._create())
      }
      var h = r('transition'),
        p = r('transform'),
        u = h && p,
        f = !!r('perspective'),
        c = {
          WebkitTransition: 'webkitTransitionEnd',
          MozTransition: 'transitionend',
          OTransition: 'otransitionend',
          transition: 'transitionend',
        }[h],
        d = [
          'transform',
          'transition',
          'transitionDuration',
          'transitionProperty',
        ],
        l = (function () {
          for (var t = {}, e = 0, i = d.length; i > e; e++) {
            var n = d[e],
              o = r(n)
            o && o !== n && (t[n] = o)
          }
          return t
        })()
      e(a.prototype, t.prototype),
        (a.prototype._create = function () {
          ;(this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
            this.css({ position: 'absolute' })
        }),
        (a.prototype.handleEvent = function (t) {
          var e = 'on' + t.type
          this[e] && this[e](t)
        }),
        (a.prototype.getSize = function () {
          this.size = o(this.element)
        }),
        (a.prototype.css = function (t) {
          var e = this.element.style
          for (var i in t) {
            var n = l[i] || i
            e[n] = t[i]
          }
        }),
        (a.prototype.getPosition = function () {
          var t = s(this.element),
            e = this.layout.options,
            i = e.isOriginLeft,
            n = e.isOriginTop,
            o = parseInt(t[i ? 'left' : 'right'], 10),
            r = parseInt(t[n ? 'top' : 'bottom'], 10)
          ;(o = isNaN(o) ? 0 : o), (r = isNaN(r) ? 0 : r)
          var a = this.layout.size
          ;(o -= i ? a.paddingLeft : a.paddingRight),
            (r -= n ? a.paddingTop : a.paddingBottom),
            (this.position.x = o),
            (this.position.y = r)
        }),
        (a.prototype.layoutPosition = function () {
          var t = this.layout.size,
            e = this.layout.options,
            i = {}
          e.isOriginLeft
            ? ((i.left = this.position.x + t.paddingLeft + 'px'),
              (i.right = ''))
            : ((i.right = this.position.x + t.paddingRight + 'px'),
              (i.left = '')),
            e.isOriginTop
              ? ((i.top = this.position.y + t.paddingTop + 'px'),
                (i.bottom = ''))
              : ((i.bottom = this.position.y + t.paddingBottom + 'px'),
                (i.top = '')),
            this.css(i),
            this.emitEvent('layout', [this])
        })
      var m = f
        ? function (t, e) {
            return 'translate3d(' + t + 'px, ' + e + 'px, 0)'
          }
        : function (t, e) {
            return 'translate(' + t + 'px, ' + e + 'px)'
          }
      ;(a.prototype._transitionTo = function (t, e) {
        this.getPosition()
        var i = this.position.x,
          n = this.position.y,
          o = parseInt(t, 10),
          r = parseInt(e, 10),
          s = o === this.position.x && r === this.position.y
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return void this.layoutPosition()
        var a = t - i,
          h = e - n,
          p = {},
          u = this.layout.options
        ;(a = u.isOriginLeft ? a : -a),
          (h = u.isOriginTop ? h : -h),
          (p.transform = m(a, h)),
          this.transition({
            to: p,
            onTransitionEnd: { transform: this.layoutPosition },
            isConstruction: !0,
          })
      }),
        (a.prototype.goTo = function (t, e) {
          this.setPosition(t, e), this.layoutPosition()
        }),
        (a.prototype.moveTo = u ? a.prototype._transitionTo : a.prototype.goTo),
        (a.prototype.setPosition = function (t, e) {
          ;(this.position.x = parseInt(t, 10)),
            (this.position.y = parseInt(e, 10))
        }),
        (a.prototype._nonTransition = function (t) {
          this.css(t.to), t.isConstruction && this._removeStyles(t.to)
          for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
        }),
        (a.prototype._transition = function (t) {
          if (!parseFloat(this.layout.options.transitionDuration))
            return void this._nonTransition(t)
          var e = this._transn
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i]
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isConstruction && (e.clean[i] = !0)
          if (t.from) {
            this.css(t.from)
            var n = this.element.offsetHeight
            n = null
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0)
        })
      var y = p && n(p) + ',opacity'
      ;(a.prototype.enableTransition = function () {
        this.isTransitioning ||
          (this.css({
            transitionProperty: y,
            transitionDuration: this.layout.options.transitionDuration,
          }),
          this.element.addEventListener(c, this, !1))
      }),
        (a.prototype.transition =
          a.prototype[h ? '_transition' : '_nonTransition']),
        (a.prototype.onwebkitTransitionEnd = function (t) {
          this.ontransitionend(t)
        }),
        (a.prototype.onotransitionend = function (t) {
          this.ontransitionend(t)
        })
      var g = {
        '-webkit-transform': 'transform',
        '-moz-transform': 'transform',
        '-o-transform': 'transform',
      }
      ;(a.prototype.ontransitionend = function (t) {
        if (t.target === this.element) {
          var e = this._transn,
            n = g[t.propertyName] || t.propertyName
          if (
            (delete e.ingProperties[n],
            i(e.ingProperties) && this.disableTransition(),
            n in e.clean &&
              ((this.element.style[t.propertyName] = ''), delete e.clean[n]),
            n in e.onEnd)
          ) {
            var o = e.onEnd[n]
            o.call(this), delete e.onEnd[n]
          }
          this.emitEvent('transitionEnd', [this])
        }
      }),
        (a.prototype.disableTransition = function () {
          this.removeTransitionStyles(),
            this.element.removeEventListener(c, this, !1),
            (this.isTransitioning = !1)
        }),
        (a.prototype._removeStyles = function (t) {
          var e = {}
          for (var i in t) e[i] = ''
          this.css(e)
        })
      var v = { transitionProperty: '', transitionDuration: '' }
      return (
        (a.prototype.removeTransitionStyles = function () {
          this.css(v)
        }),
        (a.prototype.removeElem = function () {
          this.element.parentNode.removeChild(this.element),
            this.emitEvent('remove', [this])
        }),
        (a.prototype.remove = function () {
          if (!h || !parseFloat(this.layout.options.transitionDuration))
            return void this.removeElem()
          var t = this
          this.on('transitionEnd', function () {
            return t.removeElem(), !0
          }),
            this.hide()
        }),
        (a.prototype.reveal = function () {
          delete this.isHidden, this.css({ display: '' })
          var t = this.layout.options
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isConstruction: !0,
          })
        }),
        (a.prototype.hide = function () {
          ;(this.isHidden = !0), this.css({ display: '' })
          var t = this.layout.options
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isConstruction: !0,
            onTransitionEnd: {
              opacity: function () {
                this.isHidden && this.css({ display: 'none' })
              },
            },
          })
        }),
        (a.prototype.destroy = function () {
          this.css({
            position: '',
            left: '',
            right: '',
            top: '',
            bottom: '',
            transition: '',
            transform: '',
          })
        }),
        a
      )
    }
    var r = document.defaultView,
      s =
        r && r.getComputedStyle
          ? function (t) {
              return r.getComputedStyle(t, null)
            }
          : function (t) {
              return t.currentStyle
            }
    'function' == typeof define && define.amd
      ? define(
          'outlayer/item',
          [
            'eventEmitter/EventEmitter',
            'get-size/get-size',
            'get-style-property/get-style-property',
          ],
          o
        )
      : ((t.Outlayer = {}),
        (t.Outlayer.Item = o(t.EventEmitter, t.getSize, t.getStyleProperty)))
  })(window),
  (function (t) {
    function e(t, e) {
      for (var i in e) t[i] = e[i]
      return t
    }
    function i(t) {
      return '[object Array]' === f.call(t)
    }
    function n(t) {
      var e = []
      if (i(t)) e = t
      else if (t && 'number' == typeof t.length)
        for (var n = 0, o = t.length; o > n; n++) e.push(t[n])
      else e.push(t)
      return e
    }
    function o(t, e) {
      var i = d(e, t)
      ;-1 !== i && e.splice(i, 1)
    }
    function r(t) {
      return t
        .replace(/(.)([A-Z])/g, function (t, e, i) {
          return e + '-' + i
        })
        .toLowerCase()
    }
    function s(i, s, f, d, l, m) {
      function y(t, i) {
        if (('string' == typeof t && (t = a.querySelector(t)), !t || !c(t)))
          return void (
            h && h.error('Bad ' + this.constructor.namespace + ' element: ' + t)
          )
        ;(this.element = t),
          (this.options = e({}, this.options)),
          this.option(i)
        var n = ++v
        ;(this.element.outlayerGUID = n),
          (b[n] = this),
          this._create(),
          this.options.isInitLayout && this.layout()
      }
      function g(t, i) {
        t.prototype[i] = e({}, y.prototype[i])
      }
      var v = 0,
        b = {}
      return (
        (y.namespace = 'outlayer'),
        (y.Item = m),
        (y.prototype.options = {
          containerStyle: { position: 'relative' },
          isInitLayout: !0,
          isOriginLeft: !0,
          isOriginTop: !0,
          isResizeBound: !0,
          transitionDuration: '0.4s',
          hiddenStyle: { opacity: 0, transform: 'scale(0.001)' },
          visibleStyle: { opacity: 1, transform: 'scale(1)' },
        }),
        e(y.prototype, f.prototype),
        (y.prototype.option = function (t) {
          e(this.options, t)
        }),
        (y.prototype._create = function () {
          this.reloadItems(),
            (this.stamps = []),
            this.stamp(this.options.stamp),
            e(this.element.style, this.options.containerStyle),
            this.options.isResizeBound && this.bindResize()
        }),
        (y.prototype.reloadItems = function () {
          this.items = this._itemize(this.element.children)
        }),
        (y.prototype._itemize = function (t) {
          for (
            var e = this._filterFindItemElements(t),
              i = this.constructor.Item,
              n = [],
              o = 0,
              r = e.length;
            r > o;
            o++
          ) {
            var s = e[o],
              a = new i(s, this)
            n.push(a)
          }
          return n
        }),
        (y.prototype._filterFindItemElements = function (t) {
          t = n(t)
          for (
            var e = this.options.itemSelector, i = [], o = 0, r = t.length;
            r > o;
            o++
          ) {
            var s = t[o]
            if (c(s))
              if (e) {
                l(s, e) && i.push(s)
                for (
                  var a = s.querySelectorAll(e), h = 0, p = a.length;
                  p > h;
                  h++
                )
                  i.push(a[h])
              } else i.push(s)
          }
          return i
        }),
        (y.prototype.getAllItems = function () {
          for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e])
          return t
        }),
        (y.prototype.getItemElements = function () {
          for (var t = [], e = 0, i = this.items.length; i > e; e++)
            t.push(this.items[e].element)
          return t
        }),
        (y.prototype.layout = function () {
          this._resetLayout(), this._manageStamps()
          var t =
            void 0 !== this.options.isLayoutInstant
              ? this.options.isLayoutInstant
              : !this._isLayoutInited
          this.layoutItems(this.items, t), (this._isLayoutInited = !0)
        }),
        (y.prototype._init = y.prototype.layout),
        (y.prototype._resetLayout = function () {
          this.getSize()
        }),
        (y.prototype.getSize = function () {
          this.size = d(this.element)
        }),
        (y.prototype._getMeasurement = function (t, e) {
          var i,
            n = this.options[t]
          n
            ? ('string' == typeof n
                ? (i = this.element.querySelector(n))
                : c(n) && (i = n),
              (this[t] = i ? d(i)[e] : n))
            : (this[t] = 0)
        }),
        (y.prototype.layoutItems = function (t, e) {
          ;(t = this._getItemsForLayout(t)),
            this._layoutItems(t, e),
            this._postLayout()
        }),
        (y.prototype._getItemsForLayout = function (t) {
          for (var e = [], i = 0, n = t.length; n > i; i++) {
            var o = t[i]
            o.isIgnored || e.push(o)
          }
          return e
        }),
        (y.prototype._layoutItems = function (t, e) {
          function i() {
            n.emitEvent('layoutComplete', [n, t])
          }
          var n = this
          if (!t || !t.length) return void i()
          this._itemsOn(t, 'layout', i)
          for (var o = [], r = 0, s = t.length; s > r; r++) {
            var a = t[r],
              h = this._getItemLayoutPosition(a)
            ;(h.item = a), (h.isInstant = e || a.isLayoutInstant), o.push(h)
          }
          this._processLayoutQueue(o)
        }),
        (y.prototype._getItemLayoutPosition = function () {
          return { x: 0, y: 0 }
        }),
        (y.prototype._processLayoutQueue = function (t) {
          for (var e = 0, i = t.length; i > e; e++) {
            var n = t[e]
            this._positionItem(n.item, n.x, n.y, n.isInstant)
          }
        }),
        (y.prototype._positionItem = function (t, e, i, n) {
          n ? t.goTo(e, i) : t.moveTo(e, i)
        }),
        (y.prototype._postLayout = function () {
          var t = this._getContainerSize()
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1))
        }),
        (y.prototype._getContainerSize = u),
        (y.prototype._setContainerMeasure = function (t, e) {
          if (void 0 !== t) {
            var i = this.size
            i.isBorderBox &&
              (t += e
                ? i.paddingLeft +
                  i.paddingRight +
                  i.borderLeftWidth +
                  i.borderRightWidth
                : i.paddingBottom +
                  i.paddingTop +
                  i.borderTopWidth +
                  i.borderBottomWidth),
              (t = Math.max(t, 0)),
              (this.element.style[e ? 'width' : 'height'] = t + 'px')
          }
        }),
        (y.prototype._itemsOn = function (t, e, i) {
          function n() {
            return o++, o === r && i.call(s), !0
          }
          for (
            var o = 0, r = t.length, s = this, a = 0, h = t.length;
            h > a;
            a++
          ) {
            var p = t[a]
            p.on(e, n)
          }
        }),
        (y.prototype.ignore = function (t) {
          var e = this.getItem(t)
          e && (e.isIgnored = !0)
        }),
        (y.prototype.unignore = function (t) {
          var e = this.getItem(t)
          e && delete e.isIgnored
        }),
        (y.prototype.stamp = function (t) {
          if ((t = this._find(t))) {
            this.stamps = this.stamps.concat(t)
            for (var e = 0, i = t.length; i > e; e++) {
              var n = t[e]
              this.ignore(n)
            }
          }
        }),
        (y.prototype.unstamp = function (t) {
          if ((t = this._find(t)))
            for (var e = 0, i = t.length; i > e; e++) {
              var n = t[e]
              o(n, this.stamps), this.unignore(n)
            }
        }),
        (y.prototype._find = function (t) {
          return t
            ? ('string' == typeof t && (t = this.element.querySelectorAll(t)),
              (t = n(t)))
            : void 0
        }),
        (y.prototype._manageStamps = function () {
          if (this.stamps && this.stamps.length) {
            this._getBoundingRect()
            for (var t = 0, e = this.stamps.length; e > t; t++) {
              var i = this.stamps[t]
              this._manageStamp(i)
            }
          }
        }),
        (y.prototype._getBoundingRect = function () {
          var t = this.element.getBoundingClientRect(),
            e = this.size
          this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
          }
        }),
        (y.prototype._manageStamp = u),
        (y.prototype._getElementOffset = function (t) {
          var e = t.getBoundingClientRect(),
            i = this._boundingRect,
            n = d(t),
            o = {
              left: e.left - i.left - n.marginLeft,
              top: e.top - i.top - n.marginTop,
              right: i.right - e.right - n.marginRight,
              bottom: i.bottom - e.bottom - n.marginBottom,
            }
          return o
        }),
        (y.prototype.handleEvent = function (t) {
          var e = 'on' + t.type
          this[e] && this[e](t)
        }),
        (y.prototype.bindResize = function () {
          this.isResizeBound ||
            (i.bind(t, 'resize', this), (this.isResizeBound = !0))
        }),
        (y.prototype.unbindResize = function () {
          i.unbind(t, 'resize', this), (this.isResizeBound = !1)
        }),
        (y.prototype.onresize = function () {
          function t() {
            e.resize(), delete e.resizeTimeout
          }
          this.resizeTimeout && clearTimeout(this.resizeTimeout)
          var e = this
          this.resizeTimeout = setTimeout(t, 100)
        }),
        (y.prototype.resize = function () {
          var t = d(this.element),
            e = this.size && t
          ;(e && t.innerWidth === this.size.innerWidth) || this.layout()
        }),
        (y.prototype.addItems = function (t) {
          var e = this._itemize(t)
          return e.length && (this.items = this.items.concat(e)), e
        }),
        (y.prototype.appended = function (t) {
          var e = this.addItems(t)
          e.length && (this.layoutItems(e, !0), this.reveal(e))
        }),
        (y.prototype.prepended = function (t) {
          var e = this._itemize(t)
          if (e.length) {
            var i = this.items.slice(0)
            ;(this.items = e.concat(i)),
              this._resetLayout(),
              this._manageStamps(),
              this.layoutItems(e, !0),
              this.reveal(e),
              this.layoutItems(i)
          }
        }),
        (y.prototype.reveal = function (t) {
          var e = t && t.length
          if (e)
            for (var i = 0; e > i; i++) {
              var n = t[i]
              n.reveal()
            }
        }),
        (y.prototype.hide = function (t) {
          var e = t && t.length
          if (e)
            for (var i = 0; e > i; i++) {
              var n = t[i]
              n.hide()
            }
        }),
        (y.prototype.getItem = function (t) {
          for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e]
            if (n.element === t) return n
          }
        }),
        (y.prototype.getItems = function (t) {
          if (t && t.length) {
            for (var e = [], i = 0, n = t.length; n > i; i++) {
              var o = t[i],
                r = this.getItem(o)
              r && e.push(r)
            }
            return e
          }
        }),
        (y.prototype.remove = function (t) {
          t = n(t)
          var e = this.getItems(t)
          if (e && e.length) {
            this._itemsOn(e, 'remove', function () {
              this.emitEvent('removeComplete', [this, e])
            })
            for (var i = 0, r = e.length; r > i; i++) {
              var s = e[i]
              s.remove(), o(s, this.items)
            }
          }
        }),
        (y.prototype.destroy = function () {
          var t = this.element.style
          ;(t.height = ''), (t.position = ''), (t.width = '')
          for (var e = 0, i = this.items.length; i > e; e++) {
            var n = this.items[e]
            n.destroy()
          }
          this.unbindResize(),
            delete this.element.outlayerGUID,
            p && p.removeData(this.element, this.constructor.namespace)
        }),
        (y.data = function (t) {
          var e = t && t.outlayerGUID
          return e && b[e]
        }),
        (y.create = function (t, i) {
          function n() {
            y.apply(this, arguments)
          }
          return (
            Object.create
              ? (n.prototype = Object.create(y.prototype))
              : e(n.prototype, y.prototype),
            (n.prototype.constructor = n),
            g(n, 'options'),
            e(n.prototype.options, i),
            (n.namespace = t),
            (n.data = y.data),
            (n.Item = function () {
              m.apply(this, arguments)
            }),
            (n.Item.prototype = new m()),
            s(function () {
              for (
                var e = r(t),
                  i = a.querySelectorAll('.js-' + e),
                  o = 'data-' + e + '-options',
                  s = 0,
                  u = i.length;
                u > s;
                s++
              ) {
                var f,
                  c = i[s],
                  d = c.getAttribute(o)
                try {
                  f = d && JSON.parse(d)
                } catch (l) {
                  h &&
                    h.error(
                      'Error parsing ' +
                        o +
                        ' on ' +
                        c.nodeName.toLowerCase() +
                        (c.id ? '#' + c.id : '') +
                        ': ' +
                        l
                    )
                  continue
                }
                var m = new n(c, f)
                p && p.data(c, t, m)
              }
            }),
            p && p.bridget && p.bridget(t, n),
            n
          )
        }),
        (y.Item = m),
        y
      )
    }
    var a = t.document,
      h = t.console,
      p = t.jQuery,
      u = function () {},
      f = Object.prototype.toString,
      c =
        'object' == typeof HTMLElement
          ? function (t) {
              return t instanceof HTMLElement
            }
          : function (t) {
              return (
                t &&
                'object' == typeof t &&
                1 === t.nodeType &&
                'string' == typeof t.nodeName
              )
            },
      d = Array.prototype.indexOf
        ? function (t, e) {
            return t.indexOf(e)
          }
        : function (t, e) {
            for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i
            return -1
          }
    'function' == typeof define && define.amd
      ? define(
          'outlayer/outlayer',
          [
            'eventie/eventie',
            'doc-ready/doc-ready',
            'eventEmitter/EventEmitter',
            'get-size/get-size',
            'matches-selector/matches-selector',
            './item',
          ],
          s
        )
      : (t.Outlayer = s(
          t.eventie,
          t.docReady,
          t.EventEmitter,
          t.getSize,
          t.matchesSelector,
          t.Outlayer.Item
        ))
  })(window),
  (function (t) {
    function e(t, e) {
      var n = t.create('masonry')
      return (
        (n.prototype._resetLayout = function () {
          this.getSize(),
            this._getMeasurement('columnWidth', 'outerWidth'),
            this._getMeasurement('gutter', 'outerWidth'),
            this.measureColumns()
          var t = this.cols
          for (this.colYs = []; t--; ) this.colYs.push(0)
          this.maxY = 0
        }),
        (n.prototype.measureColumns = function () {
          if ((this.getContainerWidth(), !this.columnWidth)) {
            for (var t, i = 0, n = this.items.length; n > i; i++)
              if (!this.items[i].isIgnored) {
                t = this.items[i]
                break
              }
            t || (t = this.items[0])
            var o = t && t.element
            this.columnWidth = (o && e(o).outerWidth) || this.containerWidth
          }
          ;(this.columnWidth += this.gutter),
            (this.cols = Math.floor(
              (this.containerWidth + this.gutter) / this.columnWidth
            )),
            (this.cols = Math.max(this.cols, 1))
        }),
        (n.prototype.getContainerWidth = function () {
          var t = this.options.isFitWidth
              ? this.element.parentNode
              : this.element,
            i = e(t)
          this.containerWidth = i && i.innerWidth
        }),
        (n.prototype._getItemLayoutPosition = function (t) {
          t.getSize()
          var e = t.size.outerWidth % this.columnWidth,
            n = e && 1 > e ? 'round' : 'ceil',
            o = Math[n](t.size.outerWidth / this.columnWidth)
          o = Math.min(o, this.cols)
          for (
            var r = this._getColGroup(o),
              s = Math.min.apply(Math, r),
              a = i(r, s),
              h = { x: this.columnWidth * a, y: s },
              p = s + t.size.outerHeight,
              u = this.cols + 1 - r.length,
              f = 0;
            u > f;
            f++
          )
            this.colYs[a + f] = p
          return h
        }),
        (n.prototype._getColGroup = function (t) {
          if (2 > t) return this.colYs
          for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
            var o = this.colYs.slice(n, n + t)
            e[n] = Math.max.apply(Math, o)
          }
          return e
        }),
        (n.prototype._manageStamp = function (t) {
          var i = e(t),
            n = this._getElementOffset(t),
            o = this.options.isOriginLeft ? n.left : n.right,
            r = o + i.outerWidth,
            s = Math.floor(o / this.columnWidth)
          s = Math.max(0, s)
          var a = Math.floor(r / this.columnWidth)
          ;(a -= r % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a))
          for (
            var h =
                (this.options.isOriginTop ? n.top : n.bottom) + i.outerHeight,
              p = s;
            a >= p;
            p++
          )
            this.colYs[p] = Math.max(h, this.colYs[p])
        }),
        (n.prototype._getContainerSize = function () {
          this.maxY = Math.max.apply(Math, this.colYs)
          var t = { height: this.maxY }
          return (
            this.options.isFitWidth && (t.width = this._getContainerFitWidth()),
            t
          )
        }),
        (n.prototype._getContainerFitWidth = function () {
          for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++
          return (this.cols - t) * this.columnWidth - this.gutter
        }),
        (n.prototype.resize = function () {
          var t = this.containerWidth
          this.getContainerWidth(), t !== this.containerWidth && this.layout()
        }),
        n
      )
    }
    var i = Array.prototype.indexOf
      ? function (t, e) {
          return t.indexOf(e)
        }
      : function (t, e) {
          for (var i = 0, n = t.length; n > i; i++) {
            var o = t[i]
            if (o === e) return i
          }
          return -1
        }
    'function' == typeof define && define.amd
      ? define(['outlayer/outlayer', 'get-size/get-size'], e)
      : (t.Masonry = e(t.Outlayer, t.getSize))
  })(window)

/* ========================
	masonry.filter.js
========================= */
/* -- Filter Plugin -- */

!(function (n) {
  'use strict'
  n.fn.masonryFilter = function (e) {
    var i = function (n) {
        setTimeout(function () {
          n.masonry('layout')
        }, 100)
      },
      t = function (t) {
        var r = t.masonry('getAllItems'),
          o = [],
          s = []
        n.each(r, function (i) {
          var t = r[i],
            a = n(t.element),
            u = e.filter && e.filter.call(a)
          u
            ? t.isHidden && ((t.isIgnored = !1), o.push(t))
            : t.isHidden || ((t.isIgnored = !0), s.push(t))
        }),
          t.masonry('hide', s),
          t.masonry('reveal', o),
          i(t)
      }
    return this.each(function () {
      var e = n(this)
      t(e)
    })
  }
})(window.jQuery)

/* ========================
	owl.carousel.js
========================= */
/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
!(function (a, b, c, d) {
  function e(b, c) {
    ;(this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = {
        time: null,
        target: null,
        pointer: null,
        stage: { start: null, current: null },
        direction: null,
      }),
      (this._states = {
        current: {},
        tags: {
          initializing: ['busy'],
          animating: ['busy'],
          dragging: ['interacting'],
        },
      }),
      a.each(
        ['onResize', 'onThrottledResize'],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this)
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) })
        }, this)
      ),
      this.setup(),
      this.initialize()
  }
  ;(e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: 'swing',
    info: !1,
    nestedItemSelector: !1,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab',
  }),
    (e.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
    (e.Type = { Event: 'event', State: 'state' }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ['width', 'settings'],
        run: function () {
          this._width = this.$element.width()
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)]
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          this.$stage.children('.cloned').remove()
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this.settings.margin || '',
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = {
              width: 'auto',
              'margin-left': d ? b : '',
              'margin-right': d ? '' : b,
            }
          !c && this.$stage.children().css(e), (a.css = e)
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b =
              (this.width() / this.settings.items).toFixed(3) -
              this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = []
          for (a.items = { merge: !1, width: b }; d--; )
            (c = this._mergers[d]),
              (c =
                (this.settings.mergeFit && Math.min(c, this.settings.items)) ||
                c),
              (a.items.merge = c > 1 || a.items.merge),
              (f[d] = e ? b * c : this._items[d].width())
          this._widths = f
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = '',
            i = ''
          for (g /= 2; g--; )
            b.push(this.normalize(b.length / 2, !0)),
              (h += c[b[b.length - 1]][0].outerHTML),
              b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
              (i = c[b[b.length - 1]][0].outerHTML + i)
          ;(this._clones = b),
            a(h).addClass('cloned').appendTo(this.$stage),
            a(i).addClass('cloned').prependTo(this.$stage)
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          for (
            var a = this.settings.rtl ? 1 : -1,
              b = this._clones.length + this._items.length,
              c = -1,
              d = 0,
              e = 0,
              f = [];
            ++c < b;

          )
            (d = f[c - 1] || 0),
              (e = this._widths[this.relative(c)] + this.settings.margin),
              f.push(d + e * a)
          this._coordinates = f
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = {
              width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
              'padding-left': a || '',
              'padding-right': a || '',
            }
          this.$stage.css(c)
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children()
          if (c && a.items.merge)
            for (; b--; )
              (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css)
          else c && ((a.css.width = a.items.width), d.css(a.css))
        },
      },
      {
        filter: ['items'],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr('style')
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          ;(a.current = a.current
            ? this.$stage.children().index(a.current)
            : 0),
            (a.current = Math.max(
              this.minimum(),
              Math.min(this.maximum(), a.current)
            )),
            this.reset(a.current)
        },
      },
      {
        filter: ['position'],
        run: function () {
          this.animate(this.coordinates(this._current))
        },
      },
      {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = []
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0),
              (b = Math.abs(this._coordinates[c]) + f * e),
              ((this.op(a, '<=', g) && this.op(a, '>', h)) ||
                (this.op(b, '<', g) && this.op(b, '>', h))) &&
                i.push(c)
          this.$stage.children('.active').removeClass('active'),
            this.$stage
              .children(':eq(' + i.join('), :eq(') + ')')
              .addClass('active'),
            this.settings.center &&
              (this.$stage.children('.center').removeClass('center'),
              this.$stage.children().eq(this.current()).addClass('center'))
        },
      },
    ]),
    (e.prototype.initialize = function () {
      if (
        (this.enter('initializing'),
        this.trigger('initialize'),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is('pre-loading'))
      ) {
        var b, c, e
        ;(b = this.$element.find('img')),
          (c = this.settings.nestedItemSelector
            ? '.' + this.settings.nestedItemSelector
            : d),
          (e = this.$element.children(c).width()),
          b.length && e <= 0 && this.preloadAutoWidthImages(b)
      }
      this.$element.addClass(this.options.loadingClass),
        (this.$stage = a(
          '<' +
            this.settings.stageElement +
            ' class="' +
            this.settings.stageClass +
            '"/>'
        ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
        this.$element.append(this.$stage.parent()),
        this.replace(this.$element.children().not(this.$stage.parent())),
        this.$element.is(':visible')
          ? this.refresh()
          : this.invalidate('width'),
        this.$element
          .removeClass(this.options.loadingClass)
          .addClass(this.options.loadedClass),
        this.registerEventHandlers(),
        this.leave('initializing'),
        this.trigger('initialized')
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a))
          }),
          (e = a.extend({}, this.options, c[d])),
          'function' == typeof e.stagePadding &&
            (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass &&
            this.$element.attr(
              'class',
              this.$element
                .attr('class')
                .replace(
                  new RegExp(
                    '(' + this.options.responsiveClass + '-)\\S+\\s',
                    'g'
                  ),
                  '$1' + d
                )
            ))
        : (e = a.extend({}, this.options)),
        this.trigger('change', { property: { name: 'settings', value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate('settings'),
        this.trigger('changed', {
          property: { name: 'settings', value: this.settings },
        })
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth &&
        ((this.settings.stagePadding = !1), (this.settings.merge = !1))
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger('prepare', { content: b })
      return (
        c.data ||
          (c.data = a('<' + this.settings.itemElement + '/>')
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger('prepared', { content: c.data }),
        c.data
      )
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a]
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) &&
          this._pipe[b].run(e),
          b++
      ;(this._invalidated = {}), !this.is('valid') && this.enter('valid')
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width
        default:
          return (
            this._width - 2 * this.settings.stagePadding + this.settings.margin
          )
      }
    }),
    (e.prototype.refresh = function () {
      this.enter('refreshing'),
        this.trigger('refresh'),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave('refreshing'),
        this.trigger('refreshed')
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer),
        (this.resizeTimer = b.setTimeout(
          this._handlers.onResize,
          this.settings.responsiveRefreshRate
        ))
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.$element.is(':visible') &&
        (this.enter('resizing'),
        this.trigger('resize').isDefaultPrevented()
          ? (this.leave('resizing'), !1)
          : (this.invalidate('width'),
            this.refresh(),
            this.leave('resizing'),
            void this.trigger('resized')))
      )
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition &&
        this.$stage.on(
          a.support.transition.end + '.owl.core',
          a.proxy(this.onTransitionEnd, this)
        ),
        this.settings.responsive !== !1 &&
          this.on(b, 'resize', this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)),
          this.$stage.on(
            'dragstart.owl.core selectstart.owl.core',
            function () {
              return !1
            }
          )),
        this.settings.touchDrag &&
          (this.$stage.on(
            'touchstart.owl.core',
            a.proxy(this.onDragStart, this)
          ),
          this.$stage.on('touchcancel.owl.core', a.proxy(this.onDragEnd, this)))
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css('transform')
              .replace(/.*\(|\)| /g, '')
              .split(',')),
            (d = {
              x: d[16 === d.length ? 12 : 4],
              y: d[16 === d.length ? 13 : 5],
            }))
          : ((d = this.$stage.position()),
            (d = {
              x: this.settings.rtl
                ? d.left +
                  this.$stage.width() -
                  this.width() +
                  this.settings.margin
                : d.left,
              y: d.top,
            })),
        this.is('animating') &&
          (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
          this.invalidate('position')),
        this.$element.toggleClass(
          this.options.grabClass,
          'mousedown' === b.type
        ),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on(
          'mouseup.owl.core touchend.owl.core',
          a.proxy(this.onDragEnd, this)
        ),
        a(c).one(
          'mousemove.owl.core touchmove.owl.core',
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b))
            a(c).on(
              'mousemove.owl.core touchmove.owl.core',
              a.proxy(this.onDragMove, this)
            ),
              (Math.abs(d.x) < Math.abs(d.y) && this.is('valid')) ||
                (b.preventDefault(),
                this.enter('dragging'),
                this.trigger('drag'))
          }, this)
        ))
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e)
      this.is('dragging') &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())),
            (c = this.coordinates(this.maximum() + 1) - b),
            (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl
              ? this.coordinates(this.maximum())
              : this.coordinates(this.minimum())),
            (c = this.settings.rtl
              ? this.coordinates(this.minimum())
              : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x))
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? 'left' : 'right'
      a(c).off('.owl.core'),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is('dragging')) || !this.is('valid')) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate('position'),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one('click.owl.core', function () {
              return !1
            })),
        this.is('dragging') && (this.leave('dragging'), this.trigger('dragged'))
    }),
    (e.prototype.closest = function (b, c) {
      var d = -1,
        e = 30,
        f = this.width(),
        g = this.coordinates()
      return (
        this.settings.freeDrag ||
          a.each(
            g,
            a.proxy(function (a, h) {
              return (
                'left' === c && b > h - e && b < h + e
                  ? (d = a)
                  : 'right' === c && b > h - f - e && b < h - f + e
                  ? (d = a + 1)
                  : this.op(b, '<', h) &&
                    this.op(b, '>', g[a + 1] || h - f) &&
                    (d = 'left' === c ? a + 1 : a),
                d === -1
              )
            }, this)
          ),
        this.settings.loop ||
          (this.op(b, '>', g[this.minimum()])
            ? (d = b = this.minimum())
            : this.op(b, '<', g[this.maximum()]) && (d = b = this.maximum())),
        d
      )
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0
      this.is('animating') && this.onTransitionEnd(),
        c && (this.enter('animating'), this.trigger('translate')),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({
              transform: 'translate3d(' + b + 'px,0px,0px)',
              transition: this.speed() / 1e3 + 's',
            })
          : c
          ? this.$stage.animate(
              { left: b + 'px' },
              this.speed(),
              this.settings.fallbackEasing,
              a.proxy(this.onTransitionEnd, this)
            )
          : this.$stage.css({ left: b + 'px' })
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current
      if (0 === this._items.length) return d
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger('change', {
          property: { name: 'position', value: a },
        })
        b.data !== d && (a = this.normalize(b.data)),
          (this._current = a),
          this.invalidate('position'),
          this.trigger('changed', {
            property: { name: 'position', value: this._current },
          })
      }
      return this._current
    }),
    (e.prototype.invalidate = function (b) {
      return (
        'string' === a.type(b) &&
          ((this._invalidated[b] = !0),
          this.is('valid') && this.leave('valid')),
        a.map(this._invalidated, function (a, b) {
          return b
        })
      )
    }),
    (e.prototype.reset = function (a) {
      ;(a = this.normalize(a)),
        a !== d &&
          ((this._speed = 0),
          (this._current = a),
          this.suppress(['translate', 'translated']),
          this.animate(this.coordinates(a)),
          this.release(['translate', 'translated']))
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length
      return (
        !this.isNumeric(a) || c < 1
          ? (a = d)
          : (a < 0 || a >= c + e) &&
            (a = ((((a - e / 2) % c) + c) % c) + e / 2),
        a
      )
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0)
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1
      else if (e.autoWidth || e.merge) {
        for (
          b = this._items.length,
            c = this._items[--b].width(),
            d = this.$element.width();
          b-- &&
          ((c += this._items[b].width() + this.settings.margin), !(c > d));

        );
        f = b + 1
      } else
        f = e.center ? this._items.length - 1 : this._items.length - e.items
      return a && (f -= this._clones.length / 2), Math.max(f, 0)
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2
    }),
    (e.prototype.items = function (a) {
      return a === d
        ? this._items.slice()
        : ((a = this.normalize(a, !0)), this._items[a])
    }),
    (e.prototype.mergers = function (a) {
      return a === d
        ? this._mergers.slice()
        : ((a = this.normalize(a, !0)), this._mergers[a])
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
        }
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b)
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null
          })
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b)
            }, this)
          )
        : (this.settings.center
            ? (this.settings.rtl && ((e = -1), (f = b + 1)),
              (c = this._coordinates[b]),
              (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e))
            : (c = this._coordinates[f] || 0),
          (c = Math.ceil(c)))
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c
        ? 0
        : Math.min(Math.max(Math.abs(b - a), 1), 6) *
            Math.abs(c || this.settings.smartSpeed)
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum()
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g),
          (a = c + e),
          (d = ((((a - h) % g) + g) % g) + h),
          d !== a &&
            d - e <= i &&
            d - e > 0 &&
            ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.$element.is(':visible') && this.update()
    }),
    (e.prototype.next = function (a) {
      ;(a = a || !1), this.to(this.relative(this.current()) + 1, a)
    }),
    (e.prototype.prev = function (a) {
      ;(a = a || !1), this.to(this.relative(this.current()) - 1, a)
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (
        a !== d &&
        (a.stopPropagation(),
        (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))
      )
        return !1
      this.leave('animating'), this.trigger('translated')
    }),
    (e.prototype.viewport = function () {
      var d
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn('Can not detect viewport width.'),
        d
      )
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector &&
          (b = b.find('.' + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType
          })
          .each(
            a.proxy(function (a, b) {
              ;(b = this.prepare(b)),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(
                  1 *
                    b
                      .find('[data-merge]')
                      .addBack('[data-merge]')
                      .attr('data-merge') || 1
                )
            }, this)
          ),
        this.reset(
          this.isNumeric(this.settings.startPosition)
            ? this.settings.startPosition
            : 0
        ),
        this.invalidate('items')
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current)
      ;(c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger('add', { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1
            ))
          : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(
              c,
              0,
              1 *
                b
                  .find('[data-merge]')
                  .addBack('[data-merge]')
                  .attr('data-merge') || 1
            )),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate('items'),
        this.trigger('added', { content: b, position: c })
    }),
    (e.prototype.remove = function (a) {
      ;(a = this.normalize(a, !0)),
        a !== d &&
          (this.trigger('remove', { content: this._items[a], position: a }),
          this._items[a].remove(),
          this._items.splice(a, 1),
          this._mergers.splice(a, 1),
          this.invalidate('items'),
          this.trigger('removed', { content: null, position: a }))
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter('pre-loading'),
            (c = a(c)),
            a(new Image())
              .one(
                'load',
                a.proxy(function (a) {
                  c.attr('src', a.target.src),
                    c.css('opacity', 1),
                    this.leave('pre-loading'),
                    !this.is('pre-loading') &&
                      !this.is('initializing') &&
                      this.refresh()
                }, this)
              )
              .attr(
                'src',
                c.attr('src') || c.attr('data-src') || c.attr('data-src-retina')
              )
        }, this)
      )
    }),
    (e.prototype.destroy = function () {
      this.$element.off('.owl.core'),
        this.$stage.off('.owl.core'),
        a(c).off('.owl.core'),
        this.settings.responsive !== !1 &&
          (b.clearTimeout(this.resizeTimer),
          this.off(b, 'resize', this._handlers.onThrottledResize))
      for (var d in this._plugins) this._plugins[d].destroy()
      this.$stage.children('.cloned').remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr(
            'class',
            this.$element
              .attr('class')
              .replace(
                new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'),
                ''
              )
          )
          .removeData('owl.carousel')
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl
      switch (b) {
        case '<':
          return d ? a > c : a < c
        case '>':
          return d ? a < c : a > c
        case '>=':
          return d ? a <= c : a >= c
        case '<=':
          return d ? a >= c : a <= c
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener
        ? a.addEventListener(b, c, d)
        : a.attachEvent && a.attachEvent('on' + b, c)
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener
        ? a.removeEventListener(b, c, d)
        : a.detachEvent && a.detachEvent('on' + b, c)
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(['on', b, d], function (a) {
              return a
            })
            .join('-')
            .toLowerCase()
        ),
        j = a.Event(
          [b, 'owl', d || 'carousel'].join('.').toLowerCase(),
          a.extend({ relatedTarget: this }, h, c)
        )
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j)
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings &&
            'function' == typeof this.settings[i] &&
            this.settings[i].call(this, j)),
        j
      )
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0),
            this._states.current[b]++
        }, this)
      )
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--
        }, this)
      )
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if (
          (a.event.special[b.name] || (a.event.special[b.name] = {}),
          !a.event.special[b.name].owl)
        ) {
          var c = a.event.special[b.name]._default
          ;(a.event.special[b.name]._default = function (a) {
            return !c ||
              !c.apply ||
              (a.namespace && a.namespace.indexOf('owl') !== -1)
              ? a.namespace && a.namespace.indexOf('owl') > -1
              : c.apply(this, arguments)
          }),
            (a.event.special[b.name].owl = !0)
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name]
            ? (this._states.tags[b.name] = this._states.tags[b.name].concat(
                b.tags
              ))
            : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d
            }, this)
          )))
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0
        }, this)
      )
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b]
        }, this)
      )
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null }
      return (
        (a = a.originalEvent || a || b.event),
        (a =
          a.touches && a.touches.length
            ? a.touches[0]
            : a.changedTouches && a.changedTouches.length
            ? a.changedTouches[0]
            : a),
        a.pageX
          ? ((c.x = a.pageX), (c.y = a.pageY))
          : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      )
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a))
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y }
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1)
      return this.each(function () {
        var d = a(this),
          f = d.data('owl.carousel')
        f ||
          ((f = new e(this, 'object' == typeof b && b)),
          d.data('owl.carousel', f),
          a.each(
            [
              'next',
              'prev',
              'to',
              'destroy',
              'refresh',
              'replace',
              'add',
              'remove',
            ],
            function (b, c) {
              f.register({ type: e.Type.Event, name: c }),
                f.$element.on(
                  c + '.owl.carousel.core',
                  a.proxy(function (a) {
                    a.namespace &&
                      a.relatedTarget !== this &&
                      (this.suppress([c]),
                      f[c].apply(this, [].slice.call(arguments, 1)),
                      this.release([c]))
                  }, f)
                )
            }
          )),
          'string' == typeof b && '_' !== b.charAt(0) && f[b].apply(f, c)
      })
    }),
    (a.fn.owlCarousel.Constructor = e)
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch()
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(':visible')),
          (this._interval = b.setInterval(
            a.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )))
      }),
      (e.prototype.refresh = function () {
        this._core.$element.is(':visible') !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass('owl-hidden', !this._visible),
          this._visible &&
            this._core.invalidate('width') &&
            this._core.refresh())
      }),
      (e.prototype.destroy = function () {
        var a, c
        b.clearInterval(this._interval)
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._loaded = []),
        (this._handlers = {
          'initialized.owl.carousel change.owl.carousel resized.owl.carousel':
            a.proxy(function (b) {
              if (
                b.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((b.property && 'position' == b.property.name) ||
                  'initialized' == b.type)
              )
                for (
                  var c = this._core.settings,
                    e = (c.center && Math.ceil(c.items / 2)) || c.items,
                    f = (c.center && e * -1) || 0,
                    g =
                      (b.property && b.property.value !== d
                        ? b.property.value
                        : this._core.current()) + f,
                    h = this._core.clones().length,
                    i = a.proxy(function (a, b) {
                      this.load(b)
                    }, this);
                  f++ < e;

                )
                  this.load(h / 2 + this._core.relative(g)),
                    h && a.each(this._core.clones(this._core.relative(g)), i),
                    g++
            }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(e.Defaults = { lazyLoad: !1 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find('.owl-lazy')
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g =
                  (b.devicePixelRatio > 1 && f.attr('data-src-retina')) ||
                  f.attr('data-src')
              this._core.trigger('load', { element: f, url: g }, 'lazy'),
                f.is('img')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          f.css('opacity', 1),
                            this._core.trigger(
                              'loaded',
                              { element: f, url: g },
                              'lazy'
                            )
                        }, this)
                      )
                      .attr('src', g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({
                        'background-image': 'url("' + g + '")',
                        opacity: '1',
                      }),
                        this._core.trigger(
                          'loaded',
                          { element: f, url: g },
                          'lazy'
                        )
                    }, this)),
                    (e.src = g))
            }, this)
          ),
          this._loaded.push(d.get(0)))
      }),
      (e.prototype.destroy = function () {
        var a, b
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._handlers = {
          'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function (
            a
          ) {
            a.namespace && this._core.settings.autoHeight && this.update()
          },
          this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              'position' == a.property.name &&
              this.update()
          }, this),
          'loaded.owl.lazy': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.autoHeight &&
              a.element.closest('.' + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update()
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers)
    }
    ;(e.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.$stage.children().toArray().slice(b, c),
          e = [],
          f = 0
        a.each(d, function (b, c) {
          e.push(a(c).height())
        }),
          (f = Math.max.apply(null, e)),
          this._core.$stage
            .parent()
            .height(f)
            .addClass(this._core.settings.autoHeightClass)
      }),
      (e.prototype.destroy = function () {
        var a, b
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.register({
                type: 'state',
                name: 'playing',
                tags: ['interacting'],
              })
          }, this),
          'resize.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              a.preventDefault()
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.is('resizing') &&
              this._core.$stage.find('.cloned .owl-video-frame').remove()
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              'position' === a.property.name &&
              this._playing &&
              this.stop()
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find('.owl-video')
              c.length &&
                (c.css('display', 'none'), this.fetch(c, a(b.content)))
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          'click.owl.video',
          '.owl-video-play-icon',
          a.proxy(function (a) {
            this.play(a)
          }, this)
        )
    }
    ;(e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr('data-vimeo-id')
              ? 'vimeo'
              : a.attr('data-vzaar-id')
              ? 'vzaar'
              : 'youtube'
          })(),
          d =
            a.attr('data-vimeo-id') ||
            a.attr('data-youtube-id') ||
            a.attr('data-vzaar-id'),
          e = a.attr('data-width') || this._core.settings.videoWidth,
          f = a.attr('data-height') || this._core.settings.videoHeight,
          g = a.attr('href')
        if (!g) throw new Error('Missing video URL.')
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf('youtu') > -1)
        )
          c = 'youtube'
        else if (d[3].indexOf('vimeo') > -1) c = 'vimeo'
        else {
          if (!(d[3].indexOf('vzaar') > -1))
            throw new Error('Video URL not supported.')
          c = 'vzaar'
        }
        ;(d = d[6]),
          (this._videos[g] = { type: c, id: d, width: e, height: f }),
          b.attr('data-video', g),
          this.thumbnail(a, this._videos[g])
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g =
            c.width && c.height
              ? 'style="width:' + c.width + 'px;height:' + c.height + 'px;"'
              : '',
          h = b.find('img'),
          i = 'src',
          j = '',
          k = this._core.settings,
          l = function (a) {
            ;(e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad
                ? '<div class="owl-video-tn ' +
                  j +
                  '" ' +
                  i +
                  '="' +
                  a +
                  '"></div>'
                : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                  a +
                  ')"></div>'),
              b.after(d),
              b.after(e)
          }
        if (
          (b.wrap('<div class="owl-video-wrapper"' + g + '></div>'),
          this._core.settings.lazyLoad && ((i = 'data-src'), (j = 'owl-lazy')),
          h.length)
        )
          return l(h.attr(i)), h.remove(), !1
        'youtube' === c.type
          ? ((f = '//img.youtube.com/vi/' + c.id + '/hqdefault.jpg'), l(f))
          : 'vimeo' === c.type
          ? a.ajax({
              type: 'GET',
              url: '//vimeo.com/api/v2/video/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                ;(f = a[0].thumbnail_large), l(f)
              },
            })
          : 'vzaar' === c.type &&
            a.ajax({
              type: 'GET',
              url: '//vzaar.com/api/videos/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                ;(f = a.framegrab_url), l(f)
              },
            })
      }),
      (e.prototype.stop = function () {
        this._core.trigger('stop', null, 'video'),
          this._playing.find('.owl-video-frame').remove(),
          this._playing.removeClass('owl-video-playing'),
          (this._playing = null),
          this._core.leave('playing'),
          this._core.trigger('stopped', null, 'video')
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest('.' + this._core.settings.itemClass),
          f = this._videos[e.attr('data-video')],
          g = f.width || '100%',
          h = f.height || this._core.$stage.height()
        this._playing ||
          (this._core.enter('playing'),
          this._core.trigger('play', null, 'video'),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          'youtube' === f.type
            ? (c =
                '<iframe width="' +
                g +
                '" height="' +
                h +
                '" src="//www.youtube.com/embed/' +
                f.id +
                '?autoplay=1&rel=0&v=' +
                f.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : 'vimeo' === f.type
            ? (c =
                '<iframe src="//player.vimeo.com/video/' +
                f.id +
                '?autoplay=1" width="' +
                g +
                '" height="' +
                h +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : 'vzaar' === f.type &&
              (c =
                '<iframe frameborder="0"height="' +
                h +
                '"width="' +
                g +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                f.id +
                '/player?autoplay=true"></iframe>'),
          a('<div class="owl-video-frame">' + c + '</div>').insertAfter(
            e.find('.owl-video')
          ),
          (this._playing = e.addClass('owl-video-playing')))
      }),
      (e.prototype.isInFullScreen = function () {
        var b =
          c.fullscreenElement ||
          c.mozFullScreenElement ||
          c.webkitFullscreenElement
        return b && a(b).parent().hasClass('owl-video-frame')
      }),
      (e.prototype.destroy = function () {
        var a, b
        this._core.$element.off('click.owl.video')
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          'change.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              'position' == a.property.name &&
              ((this.previous = this.core.current()),
              (this.next = a.property.value))
          }, this),
          'drag.owl.carousel dragged.owl.carousel translated.owl.carousel':
            a.proxy(function (a) {
              a.namespace && (this.swapping = 'translated' == a.type)
            }, this),
          'translate.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap()
          }, this),
        }),
        this.core.$element.on(this.handlers)
    }
    ;(e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          a.support.animation &&
          a.support.transition
        ) {
          this.core.speed(0)
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut
          this.core.current() !== this.previous &&
            (g &&
              ((b =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(g)),
            f &&
              e
                .one(a.support.animation.end, c)
                .addClass('animated owl-animated-in')
                .addClass(f))
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target)
          .css({ left: '' })
          .removeClass('animated owl-animated-out owl-animated-in')
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd()
      }),
      (e.prototype.destroy = function () {
        var a, b
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      ;(this._core = b),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'settings' === a.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : a.namespace &&
                'position' === a.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval()
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play()
          }, this),
          'play.owl.autoplay': a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c)
          }, this),
          'stop.owl.autoplay': a.proxy(function (a) {
            a.namespace && this.stop()
          }, this),
          'mouseover.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause()
          }, this),
          'mouseleave.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.play()
          }, this),
          'touchstart.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is('rotating') &&
              this.pause()
          }, this),
          'touchend.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play()
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options))
    }
    ;(e.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (e.prototype.play = function (a, b) {
        ;(this._paused = !1),
          this._core.is('rotating') ||
            (this._core.enter('rotating'), this._setAutoPlayInterval())
      }),
      (e.prototype._getNextTimeout = function (d, e) {
        return (
          this._timeout && b.clearTimeout(this._timeout),
          b.setTimeout(
            a.proxy(function () {
              this._paused ||
                this._core.is('busy') ||
                this._core.is('interacting') ||
                c.hidden ||
                this._core.next(e || this._core.settings.autoplaySpeed)
            }, this),
            d || this._core.settings.autoplayTimeout
          )
        )
      }),
      (e.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout()
      }),
      (e.prototype.stop = function () {
        this._core.is('rotating') &&
          (b.clearTimeout(this._timeout), this._core.leave('rotating'))
      }),
      (e.prototype.pause = function () {
        this._core.is('rotating') && (this._paused = !0)
      }),
      (e.prototype.destroy = function () {
        var a, b
        this.stop()
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a])
        for (b in Object.getOwnPropertyNames(this))
          'function' != typeof this[b] && (this[b] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict'
    var e = function (b) {
      ;(this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          'prepared.owl.carousel': a.proxy(function (b) {
            b.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  a(b.content)
                    .find('[data-dot]')
                    .addBack('[data-dot]')
                    .attr('data-dot') +
                  '</div>'
              )
          }, this),
          'added.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 0, this._templates.pop())
          }, this),
          'remove.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(a.position, 1)
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'position' == a.property.name && this.draw()
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              !this._initialized &&
              (this._core.trigger('initialize', null, 'navigation'),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger('initialized', null, 'navigation'))
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace &&
              this._initialized &&
              (this._core.trigger('refresh', null, 'navigation'),
              this.update(),
              this.draw(),
              this._core.trigger('refreshed', null, 'navigation'))
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers)
    }
    ;(e.Defaults = {
      nav: !1,
      navText: ['prev', 'next'],
      navSpeed: !1,
      navElement: 'div',
      navContainer: !1,
      navContainerClass: 'owl-nav',
      navClass: ['owl-prev', 'owl-next'],
      slideBy: 1,
      dotClass: 'owl-dot',
      dotsClass: 'owl-dots',
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings
        ;(this._controls.$relative = (
          c.navContainer
            ? a(c.navContainer)
            : a('<div>').addClass(c.navContainerClass).appendTo(this.$element)
        ).addClass('disabled')),
          (this._controls.$previous = a('<' + c.navElement + '>')
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.prev(c.navSpeed)
              }, this)
            )),
          (this._controls.$next = a('<' + c.navElement + '>')
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.next(c.navSpeed)
              }, this)
            )),
          c.dotsData ||
            (this._templates = [
              a('<div>')
                .addClass(c.dotClass)
                .append(a('<span>'))
                .prop('outerHTML'),
            ]),
          (this._controls.$absolute = (
            c.dotsContainer
              ? a(c.dotsContainer)
              : a('<div>').addClass(c.dotsClass).appendTo(this.$element)
          ).addClass('disabled')),
          this._controls.$absolute.on(
            'click',
            'div',
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute)
                ? a(b.target).index()
                : a(b.target).parent().index()
              b.preventDefault(), this.to(d, c.dotsSpeed)
            }, this)
          )
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this)
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d
        for (a in this._handlers) this.$element.off(a, this._handlers[a])
        for (b in this._controls) this._controls[b].remove()
        for (d in this.overides) this._core[d] = this._overrides[d]
        for (c in Object.getOwnPropertyNames(this))
          'function' != typeof this[c] && (this[c] = null)
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items
        if (
          ('page' !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
          g.dots || 'page' == g.slideBy)
        )
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if (
                (this._pages.push({
                  start: Math.min(f, a - d),
                  end: a - d + h - 1,
                }),
                Math.min(f, a - d) === f)
              )
                break
              ;(b = 0), ++c
            }
            b += this._core.mergers(this._core.relative(a))
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind
        this._controls.$relative.toggleClass('disabled', !c.nav || d),
          c.nav &&
            (this._controls.$previous.toggleClass(
              'disabled',
              !f && e <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              'disabled',
              !f && e >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass('disabled', !c.dots || d),
          c.dots &&
            ((b =
              this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(''))
              : b > 0
              ? this._controls.$absolute.append(
                  new Array(b + 1).join(this._templates[0])
                )
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find('.active').removeClass('active'),
            this._controls.$absolute
              .children()
              .eq(a.inArray(this.current(), this._pages))
              .addClass('active'))
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings
        b.page = {
          index: a.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            c &&
            (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items),
        }
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current())
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b
            }, this)
          )
          .pop()
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings
        return (
          'page' == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)),
              (d = this._pages.length),
              b ? ++c : --c,
              (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())),
              (d = this._core.items().length),
              b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        )
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
      }),
      (e.prototype.to = function (b, c, d) {
        var e
        !d && this._pages.length
          ? ((e = this._pages.length),
            a.proxy(this._overrides.to, this._core)(
              this._pages[((b % e) + e) % e].start,
              c
            ))
          : a.proxy(this._overrides.to, this._core)(b, c)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict'
    var e = function (c) {
      ;(this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (c) {
            c.namespace &&
              'URLHash' === this._core.settings.startPosition &&
              a(b).trigger('hashchange.owl.navigation')
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content)
                .find('[data-hash]')
                .addBack('[data-hash]')
                .attr('data-hash')
              if (!c) return
              this._hashes[c] = b.content
            }
          }, this),
          'changed.owl.carousel': a.proxy(function (c) {
            if (c.namespace && 'position' === c.property.name) {
              var d = this._core.items(
                  this._core.relative(this._core.current())
                ),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null
                  })
                  .join()
              if (!e || b.location.hash.slice(1) === e) return
              b.location.hash = e
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          'hashchange.owl.navigation',
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c])
            f !== d &&
              f !== this._core.current() &&
              this._core.to(this._core.relative(f), !1, !0)
          }, this)
        )
    }
    ;(e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d
        a(b).off('hashchange.owl.navigation')
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c])
        for (d in Object.getOwnPropertyNames(this))
          'function' != typeof this[d] && (this[d] = null)
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e)
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1)
      return (
        a.each((b + ' ' + h.join(f + ' ') + f).split(' '), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1
        }),
        e
      )
    }
    function f(a) {
      return e(a, !0)
    }
    var g = a('<support>').get(0).style,
      h = 'Webkit Moz O ms'.split(' '),
      i = {
        transition: {
          end: {
            WebkitTransition: 'webkitTransitionEnd',
            MozTransition: 'transitionend',
            OTransition: 'oTransitionEnd',
            transition: 'transitionend',
          },
        },
        animation: {
          end: {
            WebkitAnimation: 'webkitAnimationEnd',
            MozAnimation: 'animationend',
            OAnimation: 'oAnimationEnd',
            animation: 'animationend',
          },
        },
      },
      j = {
        csstransforms: function () {
          return !!e('transform')
        },
        csstransforms3d: function () {
          return !!e('perspective')
        },
        csstransitions: function () {
          return !!e('transition')
        },
        cssanimations: function () {
          return !!e('animation')
        },
      }
    j.csstransitions() &&
      ((a.support.transition = new String(f('transition'))),
      (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() &&
        ((a.support.animation = new String(f('animation'))),
        (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() &&
        ((a.support.transform = new String(f('transform'))),
        (a.support.transform3d = j.csstransforms3d()))
  })(window.Zepto || window.jQuery, window, document)

/* ========================
	dz.carousel.min.js
========================= */
jQuery(document).ready(function () {
  'use strict'
  jQuery('.blog-carousel').owlCarousel({
    loop: !0,
    autoplay: !0,
    margin: 30,
    nav: !0,
    rtl: !0,
    dots: !1,
    navText: [
      '<i class="ti-angle-left"></i>',
      '<i class="ti-angle-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      480: { items: 2 },
      991: { items: 2 },
      1000: { items: 3 },
    },
  }),
    jQuery('.blog-carousel-center').owlCarousel({
      loop: !0,
      center: !0,
      autoplay: !0,
      margin: 30,
      rtl: !0,
      nav: !0,
      dots: !1,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        991: { items: 2 },
        1000: { items: 3 },
      },
    })
})

/* ========================
	dz.ajax.js
========================= */
jQuery(document).ready(function () {
  'use strict'
  jQuery('.blog-carousel').owlCarousel({
    loop: !0,
    autoplay: !0,
    margin: 30,
    nav: !0,
    dots: !1,
    navText: [
      '<i class="ti-angle-left"></i>',
      '<i class="ti-angle-right"></i>',
    ],
    responsive: {
      0: { items: 1 },
      480: { items: 2 },
      991: { items: 2 },
      1000: { items: 3 },
    },
  }),
    jQuery('.blog-carousel-center').owlCarousel({
      loop: !0,
      center: !0,
      autoplay: !0,
      margin: 30,
      nav: !0,
      dots: !1,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        480: { items: 2 },
        991: { items: 2 },
        1000: { items: 3 },
      },
    })
})

/* ========================
	jquery mousewheel plugin
========================= */
/* == jquery mousewheel plugin == Version: 3.1.13, License: MIT License (MIT) */
!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : 'object' == typeof exports
    ? (module.exports = a)
    : a(jQuery)
})(function (a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0
    if (
      ((b = a.event.fix(g)),
      (b.type = 'mousewheel'),
      'detail' in g && (m = -1 * g.detail),
      'wheelDelta' in g && (m = g.wheelDelta),
      'wheelDeltaY' in g && (m = g.wheelDeltaY),
      'wheelDeltaX' in g && (l = -1 * g.wheelDeltaX),
      'axis' in g && g.axis === g.HORIZONTAL_AXIS && ((l = -1 * m), (m = 0)),
      (j = 0 === m ? l : m),
      'deltaY' in g && ((m = -1 * g.deltaY), (j = m)),
      'deltaX' in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
      0 !== m || 0 !== l)
    ) {
      if (1 === g.deltaMode) {
        var q = a.data(this, 'mousewheel-line-height')
        ;(j *= q), (m *= q), (l *= q)
      } else if (2 === g.deltaMode) {
        var r = a.data(this, 'mousewheel-page-height')
        ;(j *= r), (m *= r), (l *= r)
      }
      if (
        ((n = Math.max(Math.abs(m), Math.abs(l))),
        (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
        d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
        (j = Math[j >= 1 ? 'floor' : 'ceil'](j / f)),
        (l = Math[l >= 1 ? 'floor' : 'ceil'](l / f)),
        (m = Math[m >= 1 ? 'floor' : 'ceil'](m / f)),
        k.settings.normalizeOffset && this.getBoundingClientRect)
      ) {
        var s = this.getBoundingClientRect()
        ;(o = b.clientX - s.left), (p = b.clientY - s.top)
      }
      return (
        (b.deltaX = l),
        (b.deltaY = m),
        (b.deltaFactor = f),
        (b.offsetX = o),
        (b.offsetY = p),
        (b.deltaMode = 0),
        h.unshift(b, j, l, m),
        e && clearTimeout(e),
        (e = setTimeout(c, 200)),
        (a.event.dispatch || a.event.handle).apply(this, h)
      )
    }
  }
  function c() {
    f = null
  }
  function d(a, b) {
    return (
      k.settings.adjustOldDeltas && 'mousewheel' === a.type && b % 120 === 0
    )
  }
  var e,
    f,
    g = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
    h =
      'onwheel' in document || document.documentMode >= 9
        ? ['wheel']
        : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
    i = Array.prototype.slice
  if (a.event.fixHooks)
    for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks
  var k = (a.event.special.mousewheel = {
    version: '3.1.12',
    setup: function () {
      if (this.addEventListener)
        for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1)
      else this.onmousewheel = b
      a.data(this, 'mousewheel-line-height', k.getLineHeight(this)),
        a.data(this, 'mousewheel-page-height', k.getPageHeight(this))
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1)
      else this.onmousewheel = null
      a.removeData(this, 'mousewheel-line-height'),
        a.removeData(this, 'mousewheel-page-height')
    },
    getLineHeight: function (b) {
      var c = a(b),
        d = c['offsetParent' in a.fn ? 'offsetParent' : 'parent']()
      return (
        d.length || (d = a('body')),
        parseInt(d.css('fontSize'), 10) || parseInt(c.css('fontSize'), 10) || 16
      )
    },
    getPageHeight: function (b) {
      return a(b).height()
    },
    settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
  })
  a.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind('mousewheel', a) : this.trigger('mousewheel')
    },
    unmousewheel: function (a) {
      return this.unbind('mousewheel', a)
    },
  })
})
!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : 'object' == typeof exports
    ? (module.exports = a)
    : a(jQuery)
})(function (a) {
  function b(b) {
    var g = b || window.event,
      h = i.call(arguments, 1),
      j = 0,
      l = 0,
      m = 0,
      n = 0,
      o = 0,
      p = 0
    if (
      ((b = a.event.fix(g)),
      (b.type = 'mousewheel'),
      'detail' in g && (m = -1 * g.detail),
      'wheelDelta' in g && (m = g.wheelDelta),
      'wheelDeltaY' in g && (m = g.wheelDeltaY),
      'wheelDeltaX' in g && (l = -1 * g.wheelDeltaX),
      'axis' in g && g.axis === g.HORIZONTAL_AXIS && ((l = -1 * m), (m = 0)),
      (j = 0 === m ? l : m),
      'deltaY' in g && ((m = -1 * g.deltaY), (j = m)),
      'deltaX' in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
      0 !== m || 0 !== l)
    ) {
      if (1 === g.deltaMode) {
        var q = a.data(this, 'mousewheel-line-height')
        ;(j *= q), (m *= q), (l *= q)
      } else if (2 === g.deltaMode) {
        var r = a.data(this, 'mousewheel-page-height')
        ;(j *= r), (m *= r), (l *= r)
      }
      if (
        ((n = Math.max(Math.abs(m), Math.abs(l))),
        (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
        d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
        (j = Math[j >= 1 ? 'floor' : 'ceil'](j / f)),
        (l = Math[l >= 1 ? 'floor' : 'ceil'](l / f)),
        (m = Math[m >= 1 ? 'floor' : 'ceil'](m / f)),
        k.settings.normalizeOffset && this.getBoundingClientRect)
      ) {
        var s = this.getBoundingClientRect()
        ;(o = b.clientX - s.left), (p = b.clientY - s.top)
      }
      return (
        (b.deltaX = l),
        (b.deltaY = m),
        (b.deltaFactor = f),
        (b.offsetX = o),
        (b.offsetY = p),
        (b.deltaMode = 0),
        h.unshift(b, j, l, m),
        e && clearTimeout(e),
        (e = setTimeout(c, 200)),
        (a.event.dispatch || a.event.handle).apply(this, h)
      )
    }
  }
  function c() {
    f = null
  }
  function d(a, b) {
    return (
      k.settings.adjustOldDeltas && 'mousewheel' === a.type && b % 120 === 0
    )
  }
  var e,
    f,
    g = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
    h =
      'onwheel' in document || document.documentMode >= 9
        ? ['wheel']
        : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
    i = Array.prototype.slice
  if (a.event.fixHooks)
    for (var j = g.length; j; ) a.event.fixHooks[g[--j]] = a.event.mouseHooks
  var k = (a.event.special.mousewheel = {
    version: '3.1.12',
    setup: function () {
      if (this.addEventListener)
        for (var c = h.length; c; ) this.addEventListener(h[--c], b, !1)
      else this.onmousewheel = b
      a.data(this, 'mousewheel-line-height', k.getLineHeight(this)),
        a.data(this, 'mousewheel-page-height', k.getPageHeight(this))
    },
    teardown: function () {
      if (this.removeEventListener)
        for (var c = h.length; c; ) this.removeEventListener(h[--c], b, !1)
      else this.onmousewheel = null
      a.removeData(this, 'mousewheel-line-height'),
        a.removeData(this, 'mousewheel-page-height')
    },
    getLineHeight: function (b) {
      var c = a(b),
        d = c['offsetParent' in a.fn ? 'offsetParent' : 'parent']()
      return (
        d.length || (d = a('body')),
        parseInt(d.css('fontSize'), 10) || parseInt(c.css('fontSize'), 10) || 16
      )
    },
    getPageHeight: function (b) {
      return a(b).height()
    },
    settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
  })
  a.fn.extend({
    mousewheel: function (a) {
      return a ? this.bind('mousewheel', a) : this.trigger('mousewheel')
    },
    unmousewheel: function (a) {
      return this.unbind('mousewheel', a)
    },
  })
})
/* == malihu jquery custom scrollbar plugin == Version: 3.1.5, License: MIT License (MIT) */
!(function (e) {
  'function' == typeof define && define.amd
    ? define(['jquery'], e)
    : 'undefined' != typeof module && module.exports
    ? (module.exports = e)
    : e(jQuery, window, document)
})(function (e) {
  !(function (t) {
    var o = 'function' == typeof define && define.amd,
      a = 'undefined' != typeof module && module.exports,
      n = 'https:' == document.location.protocol ? 'https:' : 'http:',
      i =
        'cdnjs.cloudflare.com/ajax/libs/jquery-mousewheel/3.1.13/jquery.mousewheel.min.js'
    o ||
      (a
        ? require('jquery-mousewheel')(e)
        : e.event.special.mousewheel ||
          e('head').append(
            decodeURI('%3Cscript src=' + n + '//' + i + '%3E%3C/script%3E')
          )),
      t()
  })(function () {
    var t,
      o = 'mCustomScrollbar',
      a = 'mCS',
      n = '.mCustomScrollbar',
      i = {
        setTop: 0,
        setLeft: 0,
        axis: 'y',
        scrollbarPosition: 'inside',
        scrollInertia: 950,
        autoDraggerLength: !0,
        alwaysShowScrollbar: 0,
        snapOffset: 0,
        mouseWheel: {
          enable: !0,
          scrollAmount: 'auto',
          axis: 'y',
          deltaFactor: 'auto',
          disableOver: ['select', 'option', 'keygen', 'datalist', 'textarea'],
        },
        scrollButtons: { scrollType: 'stepless', scrollAmount: 'auto' },
        keyboard: { enable: !0, scrollType: 'stepless', scrollAmount: 'auto' },
        contentTouchScroll: 25,
        documentTouchScroll: !0,
        advanced: {
          autoScrollOnFocus:
            "input,textarea,select,button,datalist,keygen,a[tabindex],area,object,[contenteditable='true']",
          updateOnContentResize: !0,
          updateOnImageLoad: 'auto',
          autoUpdateTimeout: 60,
        },
        theme: 'light',
        callbacks: {
          onTotalScrollOffset: 0,
          onTotalScrollBackOffset: 0,
          alwaysTriggerOffsets: !0,
        },
      },
      r = 0,
      l = {},
      s = window.attachEvent && !window.addEventListener ? 1 : 0,
      c = !1,
      d = [
        'mCSB_dragger_onDrag',
        'mCSB_scrollTools_onDrag',
        'mCS_img_loaded',
        'mCS_disabled',
        'mCS_destroyed',
        'mCS_no_scrollbar',
        'mCS-autoHide',
        'mCS-dir-rtl',
        'mCS_no_scrollbar_y',
        'mCS_no_scrollbar_x',
        'mCS_y_hidden',
        'mCS_x_hidden',
        'mCSB_draggerContainer',
        'mCSB_buttonUp',
        'mCSB_buttonDown',
        'mCSB_buttonLeft',
        'mCSB_buttonRight',
      ],
      u = {
        init: function (t) {
          var t = e.extend(!0, {}, i, t),
            o = f.call(this)
          if (t.live) {
            var s = t.liveSelector || this.selector || n,
              c = e(s)
            if ('off' === t.live) return void m(s)
            l[s] = setTimeout(function () {
              c.mCustomScrollbar(t), 'once' === t.live && c.length && m(s)
            }, 500)
          } else m(s)
          return (
            (t.setWidth = t.set_width ? t.set_width : t.setWidth),
            (t.setHeight = t.set_height ? t.set_height : t.setHeight),
            (t.axis = t.horizontalScroll ? 'x' : p(t.axis)),
            (t.scrollInertia =
              t.scrollInertia > 0 && t.scrollInertia < 17
                ? 17
                : t.scrollInertia),
            'object' != typeof t.mouseWheel &&
              1 == t.mouseWheel &&
              (t.mouseWheel = {
                enable: !0,
                scrollAmount: 'auto',
                axis: 'y',
                preventDefault: !1,
                deltaFactor: 'auto',
                normalizeDelta: !1,
                invert: !1,
              }),
            (t.mouseWheel.scrollAmount = t.mouseWheelPixels
              ? t.mouseWheelPixels
              : t.mouseWheel.scrollAmount),
            (t.mouseWheel.normalizeDelta = t.advanced.normalizeMouseWheelDelta
              ? t.advanced.normalizeMouseWheelDelta
              : t.mouseWheel.normalizeDelta),
            (t.scrollButtons.scrollType = g(t.scrollButtons.scrollType)),
            h(t),
            e(o).each(function () {
              var o = e(this)
              if (!o.data(a)) {
                o.data(a, {
                  idx: ++r,
                  opt: t,
                  scrollRatio: { y: null, x: null },
                  overflowed: null,
                  contentReset: { y: null, x: null },
                  bindEvents: !1,
                  tweenRunning: !1,
                  sequential: {},
                  langDir: o.css('direction'),
                  cbOffsets: null,
                  trigger: null,
                  poll: {
                    size: { o: 0, n: 0 },
                    img: { o: 0, n: 0 },
                    change: { o: 0, n: 0 },
                  },
                })
                var n = o.data(a),
                  i = n.opt,
                  l = o.data('mcs-axis'),
                  s = o.data('mcs-scrollbar-position'),
                  c = o.data('mcs-theme')
                l && (i.axis = l),
                  s && (i.scrollbarPosition = s),
                  c && ((i.theme = c), h(i)),
                  v.call(this),
                  n &&
                    i.callbacks.onCreate &&
                    'function' == typeof i.callbacks.onCreate &&
                    i.callbacks.onCreate.call(this),
                  e(
                    '#mCSB_' + n.idx + '_container img:not(.' + d[2] + ')'
                  ).addClass(d[2]),
                  u.update.call(null, o)
              }
            })
          )
        },
        update: function (t, o) {
          var n = t || f.call(this)
          return e(n).each(function () {
            var t = e(this)
            if (t.data(a)) {
              var n = t.data(a),
                i = n.opt,
                r = e('#mCSB_' + n.idx + '_container'),
                l = e('#mCSB_' + n.idx),
                s = [
                  e('#mCSB_' + n.idx + '_dragger_vertical'),
                  e('#mCSB_' + n.idx + '_dragger_horizontal'),
                ]
              if (!r.length) return
              n.tweenRunning && Q(t),
                o &&
                  n &&
                  i.callbacks.onBeforeUpdate &&
                  'function' == typeof i.callbacks.onBeforeUpdate &&
                  i.callbacks.onBeforeUpdate.call(this),
                t.hasClass(d[3]) && t.removeClass(d[3]),
                t.hasClass(d[4]) && t.removeClass(d[4]),
                l.css('max-height', 'none'),
                l.height() !== t.height() && l.css('max-height', t.height()),
                _.call(this),
                'y' === i.axis ||
                  i.advanced.autoExpandHorizontalScroll ||
                  r.css('width', x(r)),
                (n.overflowed = y.call(this)),
                M.call(this),
                i.autoDraggerLength && S.call(this),
                b.call(this),
                T.call(this)
              var c = [Math.abs(r[0].offsetTop), Math.abs(r[0].offsetLeft)]
              'x' !== i.axis &&
                (n.overflowed[0]
                  ? s[0].height() > s[0].parent().height()
                    ? B.call(this)
                    : (G(t, c[0].toString(), {
                        dir: 'y',
                        dur: 0,
                        overwrite: 'none',
                      }),
                      (n.contentReset.y = null))
                  : (B.call(this),
                    'y' === i.axis
                      ? k.call(this)
                      : 'yx' === i.axis &&
                        n.overflowed[1] &&
                        G(t, c[1].toString(), {
                          dir: 'x',
                          dur: 0,
                          overwrite: 'none',
                        }))),
                'y' !== i.axis &&
                  (n.overflowed[1]
                    ? s[1].width() > s[1].parent().width()
                      ? B.call(this)
                      : (G(t, c[1].toString(), {
                          dir: 'x',
                          dur: 0,
                          overwrite: 'none',
                        }),
                        (n.contentReset.x = null))
                    : (B.call(this),
                      'x' === i.axis
                        ? k.call(this)
                        : 'yx' === i.axis &&
                          n.overflowed[0] &&
                          G(t, c[0].toString(), {
                            dir: 'y',
                            dur: 0,
                            overwrite: 'none',
                          }))),
                o &&
                  n &&
                  (2 === o &&
                  i.callbacks.onImageLoad &&
                  'function' == typeof i.callbacks.onImageLoad
                    ? i.callbacks.onImageLoad.call(this)
                    : 3 === o &&
                      i.callbacks.onSelectorChange &&
                      'function' == typeof i.callbacks.onSelectorChange
                    ? i.callbacks.onSelectorChange.call(this)
                    : i.callbacks.onUpdate &&
                      'function' == typeof i.callbacks.onUpdate &&
                      i.callbacks.onUpdate.call(this)),
                N.call(this)
            }
          })
        },
        scrollTo: function (t, o) {
          if ('undefined' != typeof t && null != t) {
            var n = f.call(this)
            return e(n).each(function () {
              var n = e(this)
              if (n.data(a)) {
                var i = n.data(a),
                  r = i.opt,
                  l = {
                    trigger: 'external',
                    scrollInertia: r.scrollInertia,
                    scrollEasing: 'mcsEaseInOut',
                    moveDragger: !1,
                    timeout: 60,
                    callbacks: !0,
                    onStart: !0,
                    onUpdate: !0,
                    onComplete: !0,
                  },
                  s = e.extend(!0, {}, l, o),
                  c = Y.call(this, t),
                  d =
                    s.scrollInertia > 0 && s.scrollInertia < 17
                      ? 17
                      : s.scrollInertia
                ;(c[0] = X.call(this, c[0], 'y')),
                  (c[1] = X.call(this, c[1], 'x')),
                  s.moveDragger &&
                    ((c[0] *= i.scrollRatio.y), (c[1] *= i.scrollRatio.x)),
                  (s.dur = ne() ? 0 : d),
                  setTimeout(function () {
                    null !== c[0] &&
                      'undefined' != typeof c[0] &&
                      'x' !== r.axis &&
                      i.overflowed[0] &&
                      ((s.rel = 'y'),
                      (s.overwrite = 'all'),
                      G(n, c[0].toString(), s)),
                      null !== c[1] &&
                        'undefined' != typeof c[1] &&
                        'y' !== r.axis &&
                        i.overflowed[1] &&
                        ((s.rel = 'x'),
                        (s.overwrite = 'none'),
                        G(n, c[1].toString(), s))
                  }, s.timeout)
              }
            })
          }
        },
        stop: function () {
          var t = f.call(this)
          return e(t).each(function () {
            var t = e(this)
            t.data(a) && Q(t)
          })
        },
        disable: function (t) {
          var o = f.call(this)
          return e(o).each(function () {
            var o = e(this)
            if (o.data(a)) {
              o.data(a)
              N.call(this, 'remove'),
                k.call(this),
                t && B.call(this),
                M.call(this, !0),
                o.addClass(d[3])
            }
          })
        },
        destroy: function () {
          var t = f.call(this)
          return e(t).each(function () {
            var n = e(this)
            if (n.data(a)) {
              var i = n.data(a),
                r = i.opt,
                l = e('#mCSB_' + i.idx),
                s = e('#mCSB_' + i.idx + '_container'),
                c = e('.mCSB_' + i.idx + '_scrollbar')
              r.live && m(r.liveSelector || e(t).selector),
                N.call(this, 'remove'),
                k.call(this),
                B.call(this),
                n.removeData(a),
                $(this, 'mcs'),
                c.remove(),
                s.find('img.' + d[2]).removeClass(d[2]),
                l.replaceWith(s.contents()),
                n
                  .removeClass(
                    o +
                      ' _' +
                      a +
                      '_' +
                      i.idx +
                      ' ' +
                      d[6] +
                      ' ' +
                      d[7] +
                      ' ' +
                      d[5] +
                      ' ' +
                      d[3]
                  )
                  .addClass(d[4])
            }
          })
        },
      },
      f = function () {
        return 'object' != typeof e(this) || e(this).length < 1 ? n : this
      },
      h = function (t) {
        var o = [
            'rounded',
            'rounded-dark',
            'rounded-dots',
            'rounded-dots-dark',
          ],
          a = [
            'rounded-dots',
            'rounded-dots-dark',
            '3d',
            '3d-dark',
            '3d-thick',
            '3d-thick-dark',
            'inset',
            'inset-dark',
            'inset-2',
            'inset-2-dark',
            'inset-3',
            'inset-3-dark',
          ],
          n = ['minimal', 'minimal-dark'],
          i = ['minimal', 'minimal-dark'],
          r = ['minimal', 'minimal-dark']
        ;(t.autoDraggerLength =
          e.inArray(t.theme, o) > -1 ? !1 : t.autoDraggerLength),
          (t.autoExpandScrollbar =
            e.inArray(t.theme, a) > -1 ? !1 : t.autoExpandScrollbar),
          (t.scrollButtons.enable =
            e.inArray(t.theme, n) > -1 ? !1 : t.scrollButtons.enable),
          (t.autoHideScrollbar =
            e.inArray(t.theme, i) > -1 ? !0 : t.autoHideScrollbar),
          (t.scrollbarPosition =
            e.inArray(t.theme, r) > -1 ? 'outside' : t.scrollbarPosition)
      },
      m = function (e) {
        l[e] && (clearTimeout(l[e]), $(l, e))
      },
      p = function (e) {
        return 'yx' === e || 'xy' === e || 'auto' === e
          ? 'yx'
          : 'x' === e || 'horizontal' === e
          ? 'x'
          : 'y'
      },
      g = function (e) {
        return 'stepped' === e ||
          'pixels' === e ||
          'step' === e ||
          'click' === e
          ? 'stepped'
          : 'stepless'
      },
      v = function () {
        var t = e(this),
          n = t.data(a),
          i = n.opt,
          r = i.autoExpandScrollbar ? ' ' + d[1] + '_expand' : '',
          l = [
            "<div id='mCSB_" +
              n.idx +
              "_scrollbar_vertical' class='mCSB_scrollTools mCSB_" +
              n.idx +
              '_scrollbar mCS-' +
              i.theme +
              ' mCSB_scrollTools_vertical' +
              r +
              "'><div class='" +
              d[12] +
              "'><div id='mCSB_" +
              n.idx +
              "_dragger_vertical' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
            "<div id='mCSB_" +
              n.idx +
              "_scrollbar_horizontal' class='mCSB_scrollTools mCSB_" +
              n.idx +
              '_scrollbar mCS-' +
              i.theme +
              ' mCSB_scrollTools_horizontal' +
              r +
              "'><div class='" +
              d[12] +
              "'><div id='mCSB_" +
              n.idx +
              "_dragger_horizontal' class='mCSB_dragger' style='position:absolute;'><div class='mCSB_dragger_bar' /></div><div class='mCSB_draggerRail' /></div></div>",
          ],
          s =
            'yx' === i.axis
              ? 'mCSB_vertical_horizontal'
              : 'x' === i.axis
              ? 'mCSB_horizontal'
              : 'mCSB_vertical',
          c = 'yx' === i.axis ? l[0] + l[1] : 'x' === i.axis ? l[1] : l[0],
          u =
            'yx' === i.axis
              ? "<div id='mCSB_" +
                n.idx +
                "_container_wrapper' class='mCSB_container_wrapper' />"
              : '',
          f = i.autoHideScrollbar ? ' ' + d[6] : '',
          h = 'x' !== i.axis && 'rtl' === n.langDir ? ' ' + d[7] : ''
        i.setWidth && t.css('width', i.setWidth),
          i.setHeight && t.css('height', i.setHeight),
          (i.setLeft =
            'y' !== i.axis && 'rtl' === n.langDir ? '989999px' : i.setLeft),
          t
            .addClass(o + ' _' + a + '_' + n.idx + f + h)
            .wrapInner(
              "<div id='mCSB_" +
                n.idx +
                "' class='mCustomScrollBox mCS-" +
                i.theme +
                ' ' +
                s +
                "'><div id='mCSB_" +
                n.idx +
                "_container' class='mCSB_container' style='position:relative; top:" +
                i.setTop +
                '; left:' +
                i.setLeft +
                ";' dir='" +
                n.langDir +
                "' /></div>"
            )
        var m = e('#mCSB_' + n.idx),
          p = e('#mCSB_' + n.idx + '_container')
        'y' === i.axis ||
          i.advanced.autoExpandHorizontalScroll ||
          p.css('width', x(p)),
          'outside' === i.scrollbarPosition
            ? ('static' === t.css('position') && t.css('position', 'relative'),
              t.css('overflow', 'visible'),
              m.addClass('mCSB_outside').after(c))
            : (m.addClass('mCSB_inside').append(c), p.wrap(u)),
          w.call(this)
        var g = [
          e('#mCSB_' + n.idx + '_dragger_vertical'),
          e('#mCSB_' + n.idx + '_dragger_horizontal'),
        ]
        g[0].css('min-height', g[0].height()),
          g[1].css('min-width', g[1].width())
      },
      x = function (t) {
        var o = [
            t[0].scrollWidth,
            Math.max.apply(
              Math,
              t
                .children()
                .map(function () {
                  return e(this).outerWidth(!0)
                })
                .get()
            ),
          ],
          a = t.parent().width()
        return o[0] > a ? o[0] : o[1] > a ? o[1] : '100%'
      },
      _ = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e('#mCSB_' + o.idx + '_container')
        if (n.advanced.autoExpandHorizontalScroll && 'y' !== n.axis) {
          i.css({ width: 'auto', 'min-width': 0, 'overflow-x': 'scroll' })
          var r = Math.ceil(i[0].scrollWidth)
          3 === n.advanced.autoExpandHorizontalScroll ||
          (2 !== n.advanced.autoExpandHorizontalScroll &&
            r > i.parent().width())
            ? i.css({ width: r, 'min-width': '100%', 'overflow-x': 'inherit' })
            : i
                .css({ 'overflow-x': 'inherit', position: 'absolute' })
                .wrap(
                  "<div class='mCSB_h_wrapper' style='position:relative; left:0; width:999999px;' />"
                )
                .css({
                  width:
                    Math.ceil(i[0].getBoundingClientRect().right + 0.4) -
                    Math.floor(i[0].getBoundingClientRect().left),
                  'min-width': '100%',
                  position: 'relative',
                })
                .unwrap()
        }
      },
      w = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e('.mCSB_' + o.idx + '_scrollbar:first'),
          r = oe(n.scrollButtons.tabindex)
            ? "tabindex='" + n.scrollButtons.tabindex + "'"
            : '',
          l = [
            "<a href='#' class='" + d[13] + "' " + r + ' />',
            "<a href='#' class='" + d[14] + "' " + r + ' />',
            "<a href='#' class='" + d[15] + "' " + r + ' />',
            "<a href='#' class='" + d[16] + "' " + r + ' />',
          ],
          s = [
            'x' === n.axis ? l[2] : l[0],
            'x' === n.axis ? l[3] : l[1],
            l[2],
            l[3],
          ]
        n.scrollButtons.enable &&
          i
            .prepend(s[0])
            .append(s[1])
            .next('.mCSB_scrollTools')
            .prepend(s[2])
            .append(s[3])
      },
      S = function () {
        var t = e(this),
          o = t.data(a),
          n = e('#mCSB_' + o.idx),
          i = e('#mCSB_' + o.idx + '_container'),
          r = [
            e('#mCSB_' + o.idx + '_dragger_vertical'),
            e('#mCSB_' + o.idx + '_dragger_horizontal'),
          ],
          l = [n.height() / i.outerHeight(!1), n.width() / i.outerWidth(!1)],
          c = [
            parseInt(r[0].css('min-height')),
            Math.round(l[0] * r[0].parent().height()),
            parseInt(r[1].css('min-width')),
            Math.round(l[1] * r[1].parent().width()),
          ],
          d = s && c[1] < c[0] ? c[0] : c[1],
          u = s && c[3] < c[2] ? c[2] : c[3]
        r[0]
          .css({ height: d, 'max-height': r[0].parent().height() - 10 })
          .find('.mCSB_dragger_bar')
          .css({ 'line-height': c[0] + 'px' }),
          r[1].css({ width: u, 'max-width': r[1].parent().width() - 10 })
      },
      b = function () {
        var t = e(this),
          o = t.data(a),
          n = e('#mCSB_' + o.idx),
          i = e('#mCSB_' + o.idx + '_container'),
          r = [
            e('#mCSB_' + o.idx + '_dragger_vertical'),
            e('#mCSB_' + o.idx + '_dragger_horizontal'),
          ],
          l = [i.outerHeight(!1) - n.height(), i.outerWidth(!1) - n.width()],
          s = [
            l[0] / (r[0].parent().height() - r[0].height()),
            l[1] / (r[1].parent().width() - r[1].width()),
          ]
        o.scrollRatio = { y: s[0], x: s[1] }
      },
      C = function (e, t, o) {
        var a = o ? d[0] + '_expanded' : '',
          n = e.closest('.mCSB_scrollTools')
        'active' === t
          ? (e.toggleClass(d[0] + ' ' + a),
            n.toggleClass(d[1]),
            (e[0]._draggable = e[0]._draggable ? 0 : 1))
          : e[0]._draggable ||
            ('hide' === t
              ? (e.removeClass(d[0]), n.removeClass(d[1]))
              : (e.addClass(d[0]), n.addClass(d[1])))
      },
      y = function () {
        var t = e(this),
          o = t.data(a),
          n = e('#mCSB_' + o.idx),
          i = e('#mCSB_' + o.idx + '_container'),
          r = null == o.overflowed ? i.height() : i.outerHeight(!1),
          l = null == o.overflowed ? i.width() : i.outerWidth(!1),
          s = i[0].scrollHeight,
          c = i[0].scrollWidth
        return (
          s > r && (r = s), c > l && (l = c), [r > n.height(), l > n.width()]
        )
      },
      B = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = e('#mCSB_' + o.idx),
          r = e('#mCSB_' + o.idx + '_container'),
          l = [
            e('#mCSB_' + o.idx + '_dragger_vertical'),
            e('#mCSB_' + o.idx + '_dragger_horizontal'),
          ]
        if (
          (Q(t),
          (('x' !== n.axis && !o.overflowed[0]) ||
            ('y' === n.axis && o.overflowed[0])) &&
            (l[0].add(r).css('top', 0), G(t, '_resetY')),
          ('y' !== n.axis && !o.overflowed[1]) ||
            ('x' === n.axis && o.overflowed[1]))
        ) {
          var s = (dx = 0)
          'rtl' === o.langDir &&
            ((s = i.width() - r.outerWidth(!1)),
            (dx = Math.abs(s / o.scrollRatio.x))),
            r.css('left', s),
            l[1].css('left', dx),
            G(t, '_resetX')
        }
      },
      T = function () {
        function t() {
          r = setTimeout(function () {
            e.event.special.mousewheel ? (clearTimeout(r), W.call(o[0])) : t()
          }, 100)
        }
        var o = e(this),
          n = o.data(a),
          i = n.opt
        if (!n.bindEvents) {
          if (
            (I.call(this),
            i.contentTouchScroll && D.call(this),
            E.call(this),
            i.mouseWheel.enable)
          ) {
            var r
            t()
          }
          P.call(this),
            U.call(this),
            i.advanced.autoScrollOnFocus && H.call(this),
            i.scrollButtons.enable && F.call(this),
            i.keyboard.enable && q.call(this),
            (n.bindEvents = !0)
        }
      },
      k = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = a + '_' + o.idx,
          r = '.mCSB_' + o.idx + '_scrollbar',
          l = e(
            '#mCSB_' +
              o.idx +
              ',#mCSB_' +
              o.idx +
              '_container,#mCSB_' +
              o.idx +
              '_container_wrapper,' +
              r +
              ' .' +
              d[12] +
              ',#mCSB_' +
              o.idx +
              '_dragger_vertical,#mCSB_' +
              o.idx +
              '_dragger_horizontal,' +
              r +
              '>a'
          ),
          s = e('#mCSB_' + o.idx + '_container')
        n.advanced.releaseDraggableSelectors &&
          l.add(e(n.advanced.releaseDraggableSelectors)),
          n.advanced.extraDraggableSelectors &&
            l.add(e(n.advanced.extraDraggableSelectors)),
          o.bindEvents &&
            (e(document)
              .add(e(!A() || top.document))
              .unbind('.' + i),
            l.each(function () {
              e(this).unbind('.' + i)
            }),
            clearTimeout(t[0]._focusTimeout),
            $(t[0], '_focusTimeout'),
            clearTimeout(o.sequential.step),
            $(o.sequential, 'step'),
            clearTimeout(s[0].onCompleteTimeout),
            $(s[0], 'onCompleteTimeout'),
            (o.bindEvents = !1))
      },
      M = function (t) {
        var o = e(this),
          n = o.data(a),
          i = n.opt,
          r = e('#mCSB_' + n.idx + '_container_wrapper'),
          l = r.length ? r : e('#mCSB_' + n.idx + '_container'),
          s = [
            e('#mCSB_' + n.idx + '_scrollbar_vertical'),
            e('#mCSB_' + n.idx + '_scrollbar_horizontal'),
          ],
          c = [s[0].find('.mCSB_dragger'), s[1].find('.mCSB_dragger')]
        'x' !== i.axis &&
          (n.overflowed[0] && !t
            ? (s[0].add(c[0]).add(s[0].children('a')).css('display', 'block'),
              l.removeClass(d[8] + ' ' + d[10]))
            : (i.alwaysShowScrollbar
                ? (2 !== i.alwaysShowScrollbar && c[0].css('display', 'none'),
                  l.removeClass(d[10]))
                : (s[0].css('display', 'none'), l.addClass(d[10])),
              l.addClass(d[8]))),
          'y' !== i.axis &&
            (n.overflowed[1] && !t
              ? (s[1].add(c[1]).add(s[1].children('a')).css('display', 'block'),
                l.removeClass(d[9] + ' ' + d[11]))
              : (i.alwaysShowScrollbar
                  ? (2 !== i.alwaysShowScrollbar && c[1].css('display', 'none'),
                    l.removeClass(d[11]))
                  : (s[1].css('display', 'none'), l.addClass(d[11])),
                l.addClass(d[9]))),
          n.overflowed[0] || n.overflowed[1]
            ? o.removeClass(d[5])
            : o.addClass(d[5])
      },
      O = function (t) {
        var o = t.type,
          a =
            t.target.ownerDocument !== document && null !== frameElement
              ? [e(frameElement).offset().top, e(frameElement).offset().left]
              : null,
          n =
            A() &&
            t.target.ownerDocument !== top.document &&
            null !== frameElement
              ? [
                  e(t.view.frameElement).offset().top,
                  e(t.view.frameElement).offset().left,
                ]
              : [0, 0]
        switch (o) {
          case 'pointerdown':
          case 'MSPointerDown':
          case 'pointermove':
          case 'MSPointerMove':
          case 'pointerup':
          case 'MSPointerUp':
            return a
              ? [
                  t.originalEvent.pageY - a[0] + n[0],
                  t.originalEvent.pageX - a[1] + n[1],
                  !1,
                ]
              : [t.originalEvent.pageY, t.originalEvent.pageX, !1]
          case 'touchstart':
          case 'touchmove':
          case 'touchend':
            var i =
                t.originalEvent.touches[0] || t.originalEvent.changedTouches[0],
              r =
                t.originalEvent.touches.length ||
                t.originalEvent.changedTouches.length
            return t.target.ownerDocument !== document
              ? [i.screenY, i.screenX, r > 1]
              : [i.pageY, i.pageX, r > 1]
          default:
            return a
              ? [t.pageY - a[0] + n[0], t.pageX - a[1] + n[1], !1]
              : [t.pageY, t.pageX, !1]
        }
      },
      I = function () {
        function t(e, t, a, n) {
          if (
            ((h[0].idleTimer = d.scrollInertia < 233 ? 250 : 0),
            o.attr('id') === f[1])
          )
            var i = 'x',
              s = (o[0].offsetLeft - t + n) * l.scrollRatio.x
          else
            var i = 'y',
              s = (o[0].offsetTop - e + a) * l.scrollRatio.y
          G(r, s.toString(), { dir: i, drag: !0 })
        }
        var o,
          n,
          i,
          r = e(this),
          l = r.data(a),
          d = l.opt,
          u = a + '_' + l.idx,
          f = [
            'mCSB_' + l.idx + '_dragger_vertical',
            'mCSB_' + l.idx + '_dragger_horizontal',
          ],
          h = e('#mCSB_' + l.idx + '_container'),
          m = e('#' + f[0] + ',#' + f[1]),
          p = d.advanced.releaseDraggableSelectors
            ? m.add(e(d.advanced.releaseDraggableSelectors))
            : m,
          g = d.advanced.extraDraggableSelectors
            ? e(!A() || top.document).add(e(d.advanced.extraDraggableSelectors))
            : e(!A() || top.document)
        m
          .bind('contextmenu.' + u, function (e) {
            e.preventDefault()
          })
          .bind(
            'mousedown.' +
              u +
              ' touchstart.' +
              u +
              ' pointerdown.' +
              u +
              ' MSPointerDown.' +
              u,
            function (t) {
              if ((t.stopImmediatePropagation(), t.preventDefault(), ee(t))) {
                ;(c = !0),
                  s &&
                    (document.onselectstart = function () {
                      return !1
                    }),
                  L.call(h, !1),
                  Q(r),
                  (o = e(this))
                var a = o.offset(),
                  l = O(t)[0] - a.top,
                  u = O(t)[1] - a.left,
                  f = o.height() + a.top,
                  m = o.width() + a.left
                f > l && l > 0 && m > u && u > 0 && ((n = l), (i = u)),
                  C(o, 'active', d.autoExpandScrollbar)
              }
            }
          )
          .bind('touchmove.' + u, function (e) {
            e.stopImmediatePropagation(), e.preventDefault()
            var a = o.offset(),
              r = O(e)[0] - a.top,
              l = O(e)[1] - a.left
            t(n, i, r, l)
          }),
          e(document)
            .add(g)
            .bind(
              'mousemove.' + u + ' pointermove.' + u + ' MSPointerMove.' + u,
              function (e) {
                if (o) {
                  var a = o.offset(),
                    r = O(e)[0] - a.top,
                    l = O(e)[1] - a.left
                  if (n === r && i === l) return
                  t(n, i, r, l)
                }
              }
            )
            .add(p)
            .bind(
              'mouseup.' +
                u +
                ' touchend.' +
                u +
                ' pointerup.' +
                u +
                ' MSPointerUp.' +
                u,
              function () {
                o && (C(o, 'active', d.autoExpandScrollbar), (o = null)),
                  (c = !1),
                  s && (document.onselectstart = null),
                  L.call(h, !0)
              }
            )
      },
      D = function () {
        function o(e) {
          if (!te(e) || c || O(e)[2]) return void (t = 0)
          ;(t = 1), (b = 0), (C = 0), (d = 1), y.removeClass('mCS_touch_action')
          var o = I.offset()
          ;(u = O(e)[0] - o.top),
            (f = O(e)[1] - o.left),
            (z = [O(e)[0], O(e)[1]])
        }
        function n(e) {
          if (
            te(e) &&
            !c &&
            !O(e)[2] &&
            (T.documentTouchScroll || e.preventDefault(),
            e.stopImmediatePropagation(),
            (!C || b) && d)
          ) {
            g = K()
            var t = M.offset(),
              o = O(e)[0] - t.top,
              a = O(e)[1] - t.left,
              n = 'mcsLinearOut'
            if (
              (E.push(o),
              W.push(a),
              (z[2] = Math.abs(O(e)[0] - z[0])),
              (z[3] = Math.abs(O(e)[1] - z[1])),
              B.overflowed[0])
            )
              var i = D[0].parent().height() - D[0].height(),
                r =
                  u - o > 0 &&
                  o - u > -(i * B.scrollRatio.y) &&
                  (2 * z[3] < z[2] || 'yx' === T.axis)
            if (B.overflowed[1])
              var l = D[1].parent().width() - D[1].width(),
                h =
                  f - a > 0 &&
                  a - f > -(l * B.scrollRatio.x) &&
                  (2 * z[2] < z[3] || 'yx' === T.axis)
            r || h
              ? (U || e.preventDefault(), (b = 1))
              : ((C = 1), y.addClass('mCS_touch_action')),
              U && e.preventDefault(),
              (w =
                'yx' === T.axis
                  ? [u - o, f - a]
                  : 'x' === T.axis
                  ? [null, f - a]
                  : [u - o, null]),
              (I[0].idleTimer = 250),
              B.overflowed[0] && s(w[0], R, n, 'y', 'all', !0),
              B.overflowed[1] && s(w[1], R, n, 'x', L, !0)
          }
        }
        function i(e) {
          if (!te(e) || c || O(e)[2]) return void (t = 0)
          ;(t = 1), e.stopImmediatePropagation(), Q(y), (p = K())
          var o = M.offset()
          ;(h = O(e)[0] - o.top), (m = O(e)[1] - o.left), (E = []), (W = [])
        }
        function r(e) {
          if (te(e) && !c && !O(e)[2]) {
            ;(d = 0), e.stopImmediatePropagation(), (b = 0), (C = 0), (v = K())
            var t = M.offset(),
              o = O(e)[0] - t.top,
              a = O(e)[1] - t.left
            if (!(v - g > 30)) {
              _ = 1e3 / (v - p)
              var n = 'mcsEaseOut',
                i = 2.5 > _,
                r = i ? [E[E.length - 2], W[W.length - 2]] : [0, 0]
              x = i ? [o - r[0], a - r[1]] : [o - h, a - m]
              var u = [Math.abs(x[0]), Math.abs(x[1])]
              _ = i ? [Math.abs(x[0] / 4), Math.abs(x[1] / 4)] : [_, _]
              var f = [
                Math.abs(I[0].offsetTop) - x[0] * l(u[0] / _[0], _[0]),
                Math.abs(I[0].offsetLeft) - x[1] * l(u[1] / _[1], _[1]),
              ]
              ;(w =
                'yx' === T.axis
                  ? [f[0], f[1]]
                  : 'x' === T.axis
                  ? [null, f[1]]
                  : [f[0], null]),
                (S = [4 * u[0] + T.scrollInertia, 4 * u[1] + T.scrollInertia])
              var y = parseInt(T.contentTouchScroll) || 0
              ;(w[0] = u[0] > y ? w[0] : 0),
                (w[1] = u[1] > y ? w[1] : 0),
                B.overflowed[0] && s(w[0], S[0], n, 'y', L, !1),
                B.overflowed[1] && s(w[1], S[1], n, 'x', L, !1)
            }
          }
        }
        function l(e, t) {
          var o = [1.5 * t, 2 * t, t / 1.5, t / 2]
          return e > 90
            ? t > 4
              ? o[0]
              : o[3]
            : e > 60
            ? t > 3
              ? o[3]
              : o[2]
            : e > 30
            ? t > 8
              ? o[1]
              : t > 6
              ? o[0]
              : t > 4
              ? t
              : o[2]
            : t > 8
            ? t
            : o[3]
        }
        function s(e, t, o, a, n, i) {
          e &&
            G(y, e.toString(), {
              dur: t,
              scrollEasing: o,
              dir: a,
              overwrite: n,
              drag: i,
            })
        }
        var d,
          u,
          f,
          h,
          m,
          p,
          g,
          v,
          x,
          _,
          w,
          S,
          b,
          C,
          y = e(this),
          B = y.data(a),
          T = B.opt,
          k = a + '_' + B.idx,
          M = e('#mCSB_' + B.idx),
          I = e('#mCSB_' + B.idx + '_container'),
          D = [
            e('#mCSB_' + B.idx + '_dragger_vertical'),
            e('#mCSB_' + B.idx + '_dragger_horizontal'),
          ],
          E = [],
          W = [],
          R = 0,
          L = 'yx' === T.axis ? 'none' : 'all',
          z = [],
          P = I.find('iframe'),
          H = [
            'touchstart.' + k + ' pointerdown.' + k + ' MSPointerDown.' + k,
            'touchmove.' + k + ' pointermove.' + k + ' MSPointerMove.' + k,
            'touchend.' + k + ' pointerup.' + k + ' MSPointerUp.' + k,
          ],
          U =
            void 0 !== document.body.style.touchAction &&
            '' !== document.body.style.touchAction
        I.bind(H[0], function (e) {
          o(e)
        }).bind(H[1], function (e) {
          n(e)
        }),
          M.bind(H[0], function (e) {
            i(e)
          }).bind(H[2], function (e) {
            r(e)
          }),
          P.length &&
            P.each(function () {
              e(this).bind('load', function () {
                A(this) &&
                  e(this.contentDocument || this.contentWindow.document)
                    .bind(H[0], function (e) {
                      o(e), i(e)
                    })
                    .bind(H[1], function (e) {
                      n(e)
                    })
                    .bind(H[2], function (e) {
                      r(e)
                    })
              })
            })
      },
      E = function () {
        function o() {
          return window.getSelection
            ? window.getSelection().toString()
            : document.selection && 'Control' != document.selection.type
            ? document.selection.createRange().text
            : 0
        }
        function n(e, t, o) {
          ;(d.type = o && i ? 'stepped' : 'stepless'),
            (d.scrollAmount = 10),
            j(r, e, t, 'mcsLinearOut', o ? 60 : null)
        }
        var i,
          r = e(this),
          l = r.data(a),
          s = l.opt,
          d = l.sequential,
          u = a + '_' + l.idx,
          f = e('#mCSB_' + l.idx + '_container'),
          h = f.parent()
        f.bind('mousedown.' + u, function () {
          t || i || ((i = 1), (c = !0))
        })
          .add(document)
          .bind('mousemove.' + u, function (e) {
            if (!t && i && o()) {
              var a = f.offset(),
                r = O(e)[0] - a.top + f[0].offsetTop,
                c = O(e)[1] - a.left + f[0].offsetLeft
              r > 0 && r < h.height() && c > 0 && c < h.width()
                ? d.step && n('off', null, 'stepped')
                : ('x' !== s.axis &&
                    l.overflowed[0] &&
                    (0 > r ? n('on', 38) : r > h.height() && n('on', 40)),
                  'y' !== s.axis &&
                    l.overflowed[1] &&
                    (0 > c ? n('on', 37) : c > h.width() && n('on', 39)))
            }
          })
          .bind('mouseup.' + u + ' dragend.' + u, function () {
            t || (i && ((i = 0), n('off', null)), (c = !1))
          })
      },
      W = function () {
        function t(t, a) {
          if ((Q(o), !z(o, t.target))) {
            var r =
                'auto' !== i.mouseWheel.deltaFactor
                  ? parseInt(i.mouseWheel.deltaFactor)
                  : s && t.deltaFactor < 100
                  ? 100
                  : t.deltaFactor || 100,
              d = i.scrollInertia
            if ('x' === i.axis || 'x' === i.mouseWheel.axis)
              var u = 'x',
                f = [
                  Math.round(r * n.scrollRatio.x),
                  parseInt(i.mouseWheel.scrollAmount),
                ],
                h =
                  'auto' !== i.mouseWheel.scrollAmount
                    ? f[1]
                    : f[0] >= l.width()
                    ? 0.9 * l.width()
                    : f[0],
                m = Math.abs(e('#mCSB_' + n.idx + '_container')[0].offsetLeft),
                p = c[1][0].offsetLeft,
                g = c[1].parent().width() - c[1].width(),
                v = 'y' === i.mouseWheel.axis ? t.deltaY || a : t.deltaX
            else
              var u = 'y',
                f = [
                  Math.round(r * n.scrollRatio.y),
                  parseInt(i.mouseWheel.scrollAmount),
                ],
                h =
                  'auto' !== i.mouseWheel.scrollAmount
                    ? f[1]
                    : f[0] >= l.height()
                    ? 0.9 * l.height()
                    : f[0],
                m = Math.abs(e('#mCSB_' + n.idx + '_container')[0].offsetTop),
                p = c[0][0].offsetTop,
                g = c[0].parent().height() - c[0].height(),
                v = t.deltaY || a
            ;('y' === u && !n.overflowed[0]) ||
              ('x' === u && !n.overflowed[1]) ||
              ((i.mouseWheel.invert || t.webkitDirectionInvertedFromDevice) &&
                (v = -v),
              i.mouseWheel.normalizeDelta && (v = 0 > v ? -1 : 1),
              ((v > 0 && 0 !== p) ||
                (0 > v && p !== g) ||
                i.mouseWheel.preventDefault) &&
                (t.stopImmediatePropagation(), t.preventDefault()),
              t.deltaFactor < 5 &&
                !i.mouseWheel.normalizeDelta &&
                ((h = t.deltaFactor), (d = 17)),
              G(o, (m - v * h).toString(), { dir: u, dur: d }))
          }
        }
        if (e(this).data(a)) {
          var o = e(this),
            n = o.data(a),
            i = n.opt,
            r = a + '_' + n.idx,
            l = e('#mCSB_' + n.idx),
            c = [
              e('#mCSB_' + n.idx + '_dragger_vertical'),
              e('#mCSB_' + n.idx + '_dragger_horizontal'),
            ],
            d = e('#mCSB_' + n.idx + '_container').find('iframe')
          d.length &&
            d.each(function () {
              e(this).bind('load', function () {
                A(this) &&
                  e(this.contentDocument || this.contentWindow.document).bind(
                    'mousewheel.' + r,
                    function (e, o) {
                      t(e, o)
                    }
                  )
              })
            }),
            l.bind('mousewheel.' + r, function (e, o) {
              t(e, o)
            })
        }
      },
      R = new Object(),
      A = function (t) {
        var o = !1,
          a = !1,
          n = null
        if (
          (void 0 === t
            ? (a = '#empty')
            : void 0 !== e(t).attr('id') && (a = e(t).attr('id')),
          a !== !1 && void 0 !== R[a])
        )
          return R[a]
        if (t) {
          try {
            var i = t.contentDocument || t.contentWindow.document
            n = i.body.innerHTML
          } catch (r) {}
          o = null !== n
        } else {
          try {
            var i = top.document
            n = i.body.innerHTML
          } catch (r) {}
          o = null !== n
        }
        return a !== !1 && (R[a] = o), o
      },
      L = function (e) {
        var t = this.find('iframe')
        if (t.length) {
          var o = e ? 'auto' : 'none'
          t.css('pointer-events', o)
        }
      },
      z = function (t, o) {
        var n = o.nodeName.toLowerCase(),
          i = t.data(a).opt.mouseWheel.disableOver,
          r = ['select', 'textarea']
        return (
          e.inArray(n, i) > -1 && !(e.inArray(n, r) > -1 && !e(o).is(':focus'))
        )
      },
      P = function () {
        var t,
          o = e(this),
          n = o.data(a),
          i = a + '_' + n.idx,
          r = e('#mCSB_' + n.idx + '_container'),
          l = r.parent(),
          s = e('.mCSB_' + n.idx + '_scrollbar .' + d[12])
        s.bind(
          'mousedown.' +
            i +
            ' touchstart.' +
            i +
            ' pointerdown.' +
            i +
            ' MSPointerDown.' +
            i,
          function (o) {
            ;(c = !0), e(o.target).hasClass('mCSB_dragger') || (t = 1)
          }
        )
          .bind(
            'touchend.' + i + ' pointerup.' + i + ' MSPointerUp.' + i,
            function () {
              c = !1
            }
          )
          .bind('click.' + i, function (a) {
            if (
              t &&
              ((t = 0),
              e(a.target).hasClass(d[12]) ||
                e(a.target).hasClass('mCSB_draggerRail'))
            ) {
              Q(o)
              var i = e(this),
                s = i.find('.mCSB_dragger')
              if (i.parent('.mCSB_scrollTools_horizontal').length > 0) {
                if (!n.overflowed[1]) return
                var c = 'x',
                  u = a.pageX > s.offset().left ? -1 : 1,
                  f = Math.abs(r[0].offsetLeft) - u * (0.9 * l.width())
              } else {
                if (!n.overflowed[0]) return
                var c = 'y',
                  u = a.pageY > s.offset().top ? -1 : 1,
                  f = Math.abs(r[0].offsetTop) - u * (0.9 * l.height())
              }
              G(o, f.toString(), { dir: c, scrollEasing: 'mcsEaseInOut' })
            }
          })
      },
      H = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = a + '_' + o.idx,
          r = e('#mCSB_' + o.idx + '_container'),
          l = r.parent()
        r.bind('focusin.' + i, function () {
          var o = e(document.activeElement),
            a = r.find('.mCustomScrollBox').length,
            i = 0
          o.is(n.advanced.autoScrollOnFocus) &&
            (Q(t),
            clearTimeout(t[0]._focusTimeout),
            (t[0]._focusTimer = a ? (i + 17) * a : 0),
            (t[0]._focusTimeout = setTimeout(function () {
              var e = [ae(o)[0], ae(o)[1]],
                a = [r[0].offsetTop, r[0].offsetLeft],
                s = [
                  a[0] + e[0] >= 0 &&
                    a[0] + e[0] < l.height() - o.outerHeight(!1),
                  a[1] + e[1] >= 0 &&
                    a[0] + e[1] < l.width() - o.outerWidth(!1),
                ],
                c = 'yx' !== n.axis || s[0] || s[1] ? 'all' : 'none'
              'x' === n.axis ||
                s[0] ||
                G(t, e[0].toString(), {
                  dir: 'y',
                  scrollEasing: 'mcsEaseInOut',
                  overwrite: c,
                  dur: i,
                }),
                'y' === n.axis ||
                  s[1] ||
                  G(t, e[1].toString(), {
                    dir: 'x',
                    scrollEasing: 'mcsEaseInOut',
                    overwrite: c,
                    dur: i,
                  })
            }, t[0]._focusTimer)))
        })
      },
      U = function () {
        var t = e(this),
          o = t.data(a),
          n = a + '_' + o.idx,
          i = e('#mCSB_' + o.idx + '_container').parent()
        i.bind('scroll.' + n, function () {
          ;(0 === i.scrollTop() && 0 === i.scrollLeft()) ||
            e('.mCSB_' + o.idx + '_scrollbar').css('visibility', 'hidden')
        })
      },
      F = function () {
        var t = e(this),
          o = t.data(a),
          n = o.opt,
          i = o.sequential,
          r = a + '_' + o.idx,
          l = '.mCSB_' + o.idx + '_scrollbar',
          s = e(l + '>a')
        s.bind('contextmenu.' + r, function (e) {
          e.preventDefault()
        }).bind(
          'mousedown.' +
            r +
            ' touchstart.' +
            r +
            ' pointerdown.' +
            r +
            ' MSPointerDown.' +
            r +
            ' mouseup.' +
            r +
            ' touchend.' +
            r +
            ' pointerup.' +
            r +
            ' MSPointerUp.' +
            r +
            ' mouseout.' +
            r +
            ' pointerout.' +
            r +
            ' MSPointerOut.' +
            r +
            ' click.' +
            r,
          function (a) {
            function r(e, o) {
              ;(i.scrollAmount = n.scrollButtons.scrollAmount), j(t, e, o)
            }
            if ((a.preventDefault(), ee(a))) {
              var l = e(this).attr('class')
              switch (((i.type = n.scrollButtons.scrollType), a.type)) {
                case 'mousedown':
                case 'touchstart':
                case 'pointerdown':
                case 'MSPointerDown':
                  if ('stepped' === i.type) return
                  ;(c = !0), (o.tweenRunning = !1), r('on', l)
                  break
                case 'mouseup':
                case 'touchend':
                case 'pointerup':
                case 'MSPointerUp':
                case 'mouseout':
                case 'pointerout':
                case 'MSPointerOut':
                  if ('stepped' === i.type) return
                  ;(c = !1), i.dir && r('off', l)
                  break
                case 'click':
                  if ('stepped' !== i.type || o.tweenRunning) return
                  r('on', l)
              }
            }
          }
        )
      },
      q = function () {
        function t(t) {
          function a(e, t) {
            ;(r.type = i.keyboard.scrollType),
              (r.scrollAmount = i.keyboard.scrollAmount),
              ('stepped' === r.type && n.tweenRunning) || j(o, e, t)
          }
          switch (t.type) {
            case 'blur':
              n.tweenRunning && r.dir && a('off', null)
              break
            case 'keydown':
            case 'keyup':
              var l = t.keyCode ? t.keyCode : t.which,
                s = 'on'
              if (
                ('x' !== i.axis && (38 === l || 40 === l)) ||
                ('y' !== i.axis && (37 === l || 39 === l))
              ) {
                if (
                  ((38 === l || 40 === l) && !n.overflowed[0]) ||
                  ((37 === l || 39 === l) && !n.overflowed[1])
                )
                  return
                'keyup' === t.type && (s = 'off'),
                  e(document.activeElement).is(u) ||
                    (t.preventDefault(), t.stopImmediatePropagation(), a(s, l))
              } else if (33 === l || 34 === l) {
                if (
                  ((n.overflowed[0] || n.overflowed[1]) &&
                    (t.preventDefault(), t.stopImmediatePropagation()),
                  'keyup' === t.type)
                ) {
                  Q(o)
                  var f = 34 === l ? -1 : 1
                  if (
                    'x' === i.axis ||
                    ('yx' === i.axis && n.overflowed[1] && !n.overflowed[0])
                  )
                    var h = 'x',
                      m = Math.abs(c[0].offsetLeft) - f * (0.9 * d.width())
                  else
                    var h = 'y',
                      m = Math.abs(c[0].offsetTop) - f * (0.9 * d.height())
                  G(o, m.toString(), { dir: h, scrollEasing: 'mcsEaseInOut' })
                }
              } else if (
                (35 === l || 36 === l) &&
                !e(document.activeElement).is(u) &&
                ((n.overflowed[0] || n.overflowed[1]) &&
                  (t.preventDefault(), t.stopImmediatePropagation()),
                'keyup' === t.type)
              ) {
                if (
                  'x' === i.axis ||
                  ('yx' === i.axis && n.overflowed[1] && !n.overflowed[0])
                )
                  var h = 'x',
                    m = 35 === l ? Math.abs(d.width() - c.outerWidth(!1)) : 0
                else
                  var h = 'y',
                    m = 35 === l ? Math.abs(d.height() - c.outerHeight(!1)) : 0
                G(o, m.toString(), { dir: h, scrollEasing: 'mcsEaseInOut' })
              }
          }
        }
        var o = e(this),
          n = o.data(a),
          i = n.opt,
          r = n.sequential,
          l = a + '_' + n.idx,
          s = e('#mCSB_' + n.idx),
          c = e('#mCSB_' + n.idx + '_container'),
          d = c.parent(),
          u = "input,textarea,select,datalist,keygen,[contenteditable='true']",
          f = c.find('iframe'),
          h = ['blur.' + l + ' keydown.' + l + ' keyup.' + l]
        f.length &&
          f.each(function () {
            e(this).bind('load', function () {
              A(this) &&
                e(this.contentDocument || this.contentWindow.document).bind(
                  h[0],
                  function (e) {
                    t(e)
                  }
                )
            })
          }),
          s.attr('tabindex', '0').bind(h[0], function (e) {
            t(e)
          })
      },
      j = function (t, o, n, i, r) {
        function l(e) {
          u.snapAmount &&
            (f.scrollAmount =
              u.snapAmount instanceof Array
                ? 'x' === f.dir[0]
                  ? u.snapAmount[1]
                  : u.snapAmount[0]
                : u.snapAmount)
          var o = 'stepped' !== f.type,
            a = r ? r : e ? (o ? p / 1.5 : g) : 1e3 / 60,
            n = e ? (o ? 7.5 : 40) : 2.5,
            s = [Math.abs(h[0].offsetTop), Math.abs(h[0].offsetLeft)],
            d = [
              c.scrollRatio.y > 10 ? 10 : c.scrollRatio.y,
              c.scrollRatio.x > 10 ? 10 : c.scrollRatio.x,
            ],
            m =
              'x' === f.dir[0]
                ? s[1] + f.dir[1] * (d[1] * n)
                : s[0] + f.dir[1] * (d[0] * n),
            v =
              'x' === f.dir[0]
                ? s[1] + f.dir[1] * parseInt(f.scrollAmount)
                : s[0] + f.dir[1] * parseInt(f.scrollAmount),
            x = 'auto' !== f.scrollAmount ? v : m,
            _ = i ? i : e ? (o ? 'mcsLinearOut' : 'mcsEaseInOut') : 'mcsLinear',
            w = !!e
          return (
            e && 17 > a && (x = 'x' === f.dir[0] ? s[1] : s[0]),
            G(t, x.toString(), {
              dir: f.dir[0],
              scrollEasing: _,
              dur: a,
              onComplete: w,
            }),
            e
              ? void (f.dir = !1)
              : (clearTimeout(f.step),
                void (f.step = setTimeout(function () {
                  l()
                }, a)))
          )
        }
        function s() {
          clearTimeout(f.step), $(f, 'step'), Q(t)
        }
        var c = t.data(a),
          u = c.opt,
          f = c.sequential,
          h = e('#mCSB_' + c.idx + '_container'),
          m = 'stepped' === f.type,
          p = u.scrollInertia < 26 ? 26 : u.scrollInertia,
          g = u.scrollInertia < 1 ? 17 : u.scrollInertia
        switch (o) {
          case 'on':
            if (
              ((f.dir = [
                n === d[16] || n === d[15] || 39 === n || 37 === n ? 'x' : 'y',
                n === d[13] || n === d[15] || 38 === n || 37 === n ? -1 : 1,
              ]),
              Q(t),
              oe(n) && 'stepped' === f.type)
            )
              return
            l(m)
            break
          case 'off':
            s(), (m || (c.tweenRunning && f.dir)) && l(!0)
        }
      },
      Y = function (t) {
        var o = e(this).data(a).opt,
          n = []
        return (
          'function' == typeof t && (t = t()),
          t instanceof Array
            ? (n =
                t.length > 1
                  ? [t[0], t[1]]
                  : 'x' === o.axis
                  ? [null, t[0]]
                  : [t[0], null])
            : ((n[0] = t.y ? t.y : t.x || 'x' === o.axis ? null : t),
              (n[1] = t.x ? t.x : t.y || 'y' === o.axis ? null : t)),
          'function' == typeof n[0] && (n[0] = n[0]()),
          'function' == typeof n[1] && (n[1] = n[1]()),
          n
        )
      },
      X = function (t, o) {
        if (null != t && 'undefined' != typeof t) {
          var n = e(this),
            i = n.data(a),
            r = i.opt,
            l = e('#mCSB_' + i.idx + '_container'),
            s = l.parent(),
            c = typeof t
          o || (o = 'x' === r.axis ? 'x' : 'y')
          var d =
              'x' === o
                ? l.outerWidth(!1) - s.width()
                : l.outerHeight(!1) - s.height(),
            f = 'x' === o ? l[0].offsetLeft : l[0].offsetTop,
            h = 'x' === o ? 'left' : 'top'
          switch (c) {
            case 'function':
              return t()
            case 'object':
              var m = t.jquery ? t : e(t)
              if (!m.length) return
              return 'x' === o ? ae(m)[1] : ae(m)[0]
            case 'string':
            case 'number':
              if (oe(t)) return Math.abs(t)
              if (-1 !== t.indexOf('%'))
                return Math.abs((d * parseInt(t)) / 100)
              if (-1 !== t.indexOf('-='))
                return Math.abs(f - parseInt(t.split('-=')[1]))
              if (-1 !== t.indexOf('+=')) {
                var p = f + parseInt(t.split('+=')[1])
                return p >= 0 ? 0 : Math.abs(p)
              }
              if (-1 !== t.indexOf('px') && oe(t.split('px')[0]))
                return Math.abs(t.split('px')[0])
              if ('top' === t || 'left' === t) return 0
              if ('bottom' === t)
                return Math.abs(s.height() - l.outerHeight(!1))
              if ('right' === t) return Math.abs(s.width() - l.outerWidth(!1))
              if ('first' === t || 'last' === t) {
                var m = l.find(':' + t)
                return 'x' === o ? ae(m)[1] : ae(m)[0]
              }
              return e(t).length
                ? 'x' === o
                  ? ae(e(t))[1]
                  : ae(e(t))[0]
                : (l.css(h, t), void u.update.call(null, n[0]))
          }
        }
      },
      N = function (t) {
        function o() {
          return (
            clearTimeout(f[0].autoUpdate),
            0 === l.parents('html').length
              ? void (l = null)
              : void (f[0].autoUpdate = setTimeout(function () {
                  return c.advanced.updateOnSelectorChange &&
                    ((s.poll.change.n = i()),
                    s.poll.change.n !== s.poll.change.o)
                    ? ((s.poll.change.o = s.poll.change.n), void r(3))
                    : c.advanced.updateOnContentResize &&
                      ((s.poll.size.n =
                        l[0].scrollHeight +
                        l[0].scrollWidth +
                        f[0].offsetHeight +
                        l[0].offsetHeight +
                        l[0].offsetWidth),
                      s.poll.size.n !== s.poll.size.o)
                    ? ((s.poll.size.o = s.poll.size.n), void r(1))
                    : !c.advanced.updateOnImageLoad ||
                      ('auto' === c.advanced.updateOnImageLoad &&
                        'y' === c.axis) ||
                      ((s.poll.img.n = f.find('img').length),
                      s.poll.img.n === s.poll.img.o)
                    ? void (
                        (c.advanced.updateOnSelectorChange ||
                          c.advanced.updateOnContentResize ||
                          c.advanced.updateOnImageLoad) &&
                        o()
                      )
                    : ((s.poll.img.o = s.poll.img.n),
                      void f.find('img').each(function () {
                        n(this)
                      }))
                }, c.advanced.autoUpdateTimeout))
          )
        }
        function n(t) {
          function o(e, t) {
            return function () {
              return t.apply(e, arguments)
            }
          }
          function a() {
            ;(this.onload = null), e(t).addClass(d[2]), r(2)
          }
          if (e(t).hasClass(d[2])) return void r()
          var n = new Image()
          ;(n.onload = o(n, a)), (n.src = t.src)
        }
        function i() {
          c.advanced.updateOnSelectorChange === !0 &&
            (c.advanced.updateOnSelectorChange = '*')
          var e = 0,
            t = f.find(c.advanced.updateOnSelectorChange)
          return (
            c.advanced.updateOnSelectorChange &&
              t.length > 0 &&
              t.each(function () {
                e += this.offsetHeight + this.offsetWidth
              }),
            e
          )
        }
        function r(e) {
          clearTimeout(f[0].autoUpdate), u.update.call(null, l[0], e)
        }
        var l = e(this),
          s = l.data(a),
          c = s.opt,
          f = e('#mCSB_' + s.idx + '_container')
        return t
          ? (clearTimeout(f[0].autoUpdate), void $(f[0], 'autoUpdate'))
          : void o()
      },
      V = function (e, t, o) {
        return Math.round(e / t) * t - o
      },
      Q = function (t) {
        var o = t.data(a),
          n = e(
            '#mCSB_' +
              o.idx +
              '_container,#mCSB_' +
              o.idx +
              '_container_wrapper,#mCSB_' +
              o.idx +
              '_dragger_vertical,#mCSB_' +
              o.idx +
              '_dragger_horizontal'
          )
        n.each(function () {
          Z.call(this)
        })
      },
      G = function (t, o, n) {
        function i(e) {
          return s && c.callbacks[e] && 'function' == typeof c.callbacks[e]
        }
        function r() {
          return [
            c.callbacks.alwaysTriggerOffsets || w >= S[0] + y,
            c.callbacks.alwaysTriggerOffsets || -B >= w,
          ]
        }
        function l() {
          var e = [h[0].offsetTop, h[0].offsetLeft],
            o = [x[0].offsetTop, x[0].offsetLeft],
            a = [h.outerHeight(!1), h.outerWidth(!1)],
            i = [f.height(), f.width()]
          t[0].mcs = {
            content: h,
            top: e[0],
            left: e[1],
            draggerTop: o[0],
            draggerLeft: o[1],
            topPct: Math.round(
              (100 * Math.abs(e[0])) / (Math.abs(a[0]) - i[0])
            ),
            leftPct: Math.round(
              (100 * Math.abs(e[1])) / (Math.abs(a[1]) - i[1])
            ),
            direction: n.dir,
          }
        }
        var s = t.data(a),
          c = s.opt,
          d = {
            trigger: 'internal',
            dir: 'y',
            scrollEasing: 'mcsEaseOut',
            drag: !1,
            dur: c.scrollInertia,
            overwrite: 'all',
            callbacks: !0,
            onStart: !0,
            onUpdate: !0,
            onComplete: !0,
          },
          n = e.extend(d, n),
          u = [n.dur, n.drag ? 0 : n.dur],
          f = e('#mCSB_' + s.idx),
          h = e('#mCSB_' + s.idx + '_container'),
          m = h.parent(),
          p = c.callbacks.onTotalScrollOffset
            ? Y.call(t, c.callbacks.onTotalScrollOffset)
            : [0, 0],
          g = c.callbacks.onTotalScrollBackOffset
            ? Y.call(t, c.callbacks.onTotalScrollBackOffset)
            : [0, 0]
        if (
          ((s.trigger = n.trigger),
          (0 === m.scrollTop() && 0 === m.scrollLeft()) ||
            (e('.mCSB_' + s.idx + '_scrollbar').css('visibility', 'visible'),
            m.scrollTop(0).scrollLeft(0)),
          '_resetY' !== o ||
            s.contentReset.y ||
            (i('onOverflowYNone') && c.callbacks.onOverflowYNone.call(t[0]),
            (s.contentReset.y = 1)),
          '_resetX' !== o ||
            s.contentReset.x ||
            (i('onOverflowXNone') && c.callbacks.onOverflowXNone.call(t[0]),
            (s.contentReset.x = 1)),
          '_resetY' !== o && '_resetX' !== o)
        ) {
          if (
            ((!s.contentReset.y && t[0].mcs) ||
              !s.overflowed[0] ||
              (i('onOverflowY') && c.callbacks.onOverflowY.call(t[0]),
              (s.contentReset.x = null)),
            (!s.contentReset.x && t[0].mcs) ||
              !s.overflowed[1] ||
              (i('onOverflowX') && c.callbacks.onOverflowX.call(t[0]),
              (s.contentReset.x = null)),
            c.snapAmount)
          ) {
            var v =
              c.snapAmount instanceof Array
                ? 'x' === n.dir
                  ? c.snapAmount[1]
                  : c.snapAmount[0]
                : c.snapAmount
            o = V(o, v, c.snapOffset)
          }
          switch (n.dir) {
            case 'x':
              var x = e('#mCSB_' + s.idx + '_dragger_horizontal'),
                _ = 'left',
                w = h[0].offsetLeft,
                S = [
                  f.width() - h.outerWidth(!1),
                  x.parent().width() - x.width(),
                ],
                b = [o, 0 === o ? 0 : o / s.scrollRatio.x],
                y = p[1],
                B = g[1],
                T = y > 0 ? y / s.scrollRatio.x : 0,
                k = B > 0 ? B / s.scrollRatio.x : 0
              break
            case 'y':
              var x = e('#mCSB_' + s.idx + '_dragger_vertical'),
                _ = 'top',
                w = h[0].offsetTop,
                S = [
                  f.height() - h.outerHeight(!1),
                  x.parent().height() - x.height(),
                ],
                b = [o, 0 === o ? 0 : o / s.scrollRatio.y],
                y = p[0],
                B = g[0],
                T = y > 0 ? y / s.scrollRatio.y : 0,
                k = B > 0 ? B / s.scrollRatio.y : 0
          }
          b[1] < 0 || (0 === b[0] && 0 === b[1])
            ? (b = [0, 0])
            : b[1] >= S[1]
            ? (b = [S[0], S[1]])
            : (b[0] = -b[0]),
            t[0].mcs || (l(), i('onInit') && c.callbacks.onInit.call(t[0])),
            clearTimeout(h[0].onCompleteTimeout),
            J(x[0], _, Math.round(b[1]), u[1], n.scrollEasing),
            (!s.tweenRunning &&
              ((0 === w && b[0] >= 0) || (w === S[0] && b[0] <= S[0]))) ||
              J(h[0], _, Math.round(b[0]), u[0], n.scrollEasing, n.overwrite, {
                onStart: function () {
                  n.callbacks &&
                    n.onStart &&
                    !s.tweenRunning &&
                    (i('onScrollStart') &&
                      (l(), c.callbacks.onScrollStart.call(t[0])),
                    (s.tweenRunning = !0),
                    C(x),
                    (s.cbOffsets = r()))
                },
                onUpdate: function () {
                  n.callbacks &&
                    n.onUpdate &&
                    i('whileScrolling') &&
                    (l(), c.callbacks.whileScrolling.call(t[0]))
                },
                onComplete: function () {
                  if (n.callbacks && n.onComplete) {
                    'yx' === c.axis && clearTimeout(h[0].onCompleteTimeout)
                    var e = h[0].idleTimer || 0
                    h[0].onCompleteTimeout = setTimeout(function () {
                      i('onScroll') && (l(), c.callbacks.onScroll.call(t[0])),
                        i('onTotalScroll') &&
                          b[1] >= S[1] - T &&
                          s.cbOffsets[0] &&
                          (l(), c.callbacks.onTotalScroll.call(t[0])),
                        i('onTotalScrollBack') &&
                          b[1] <= k &&
                          s.cbOffsets[1] &&
                          (l(), c.callbacks.onTotalScrollBack.call(t[0])),
                        (s.tweenRunning = !1),
                        (h[0].idleTimer = 0),
                        C(x, 'hide')
                    }, e)
                  }
                },
              })
        }
      },
      J = function (e, t, o, a, n, i, r) {
        function l() {
          S.stop ||
            (x || m.call(),
            (x = K() - v),
            s(),
            x >= S.time &&
              ((S.time = x > S.time ? x + f - (x - S.time) : x + f - 1),
              S.time < x + 1 && (S.time = x + 1)),
            S.time < a ? (S.id = h(l)) : g.call())
        }
        function s() {
          a > 0
            ? ((S.currVal = u(S.time, _, b, a, n)),
              (w[t] = Math.round(S.currVal) + 'px'))
            : (w[t] = o + 'px'),
            p.call()
        }
        function c() {
          ;(f = 1e3 / 60),
            (S.time = x + f),
            (h = window.requestAnimationFrame
              ? window.requestAnimationFrame
              : function (e) {
                  return s(), setTimeout(e, 0.01)
                }),
            (S.id = h(l))
        }
        function d() {
          null != S.id &&
            (window.requestAnimationFrame
              ? window.cancelAnimationFrame(S.id)
              : clearTimeout(S.id),
            (S.id = null))
        }
        function u(e, t, o, a, n) {
          switch (n) {
            case 'linear':
            case 'mcsLinear':
              return (o * e) / a + t
            case 'mcsLinearOut':
              return (e /= a), e--, o * Math.sqrt(1 - e * e) + t
            case 'easeInOutSmooth':
              return (
                (e /= a / 2),
                1 > e
                  ? (o / 2) * e * e + t
                  : (e--, (-o / 2) * (e * (e - 2) - 1) + t)
              )
            case 'easeInOutStrong':
              return (
                (e /= a / 2),
                1 > e
                  ? (o / 2) * Math.pow(2, 10 * (e - 1)) + t
                  : (e--, (o / 2) * (-Math.pow(2, -10 * e) + 2) + t)
              )
            case 'easeInOut':
            case 'mcsEaseInOut':
              return (
                (e /= a / 2),
                1 > e
                  ? (o / 2) * e * e * e + t
                  : ((e -= 2), (o / 2) * (e * e * e + 2) + t)
              )
            case 'easeOutSmooth':
              return (e /= a), e--, -o * (e * e * e * e - 1) + t
            case 'easeOutStrong':
              return o * (-Math.pow(2, (-10 * e) / a) + 1) + t
            case 'easeOut':
            case 'mcsEaseOut':
            default:
              var i = (e /= a) * e,
                r = i * e
              return (
                t +
                o *
                  (0.499999999999997 * r * i +
                    -2.5 * i * i +
                    5.5 * r +
                    -6.5 * i +
                    4 * e)
              )
          }
        }
        e._mTween || (e._mTween = { top: {}, left: {} })
        var f,
          h,
          r = r || {},
          m = r.onStart || function () {},
          p = r.onUpdate || function () {},
          g = r.onComplete || function () {},
          v = K(),
          x = 0,
          _ = e.offsetTop,
          w = e.style,
          S = e._mTween[t]
        'left' === t && (_ = e.offsetLeft)
        var b = o - _
        ;(S.stop = 0), 'none' !== i && d(), c()
      },
      K = function () {
        return window.performance && window.performance.now
          ? window.performance.now()
          : window.performance && window.performance.webkitNow
          ? window.performance.webkitNow()
          : Date.now
          ? Date.now()
          : new Date().getTime()
      },
      Z = function () {
        var e = this
        e._mTween || (e._mTween = { top: {}, left: {} })
        for (var t = ['top', 'left'], o = 0; o < t.length; o++) {
          var a = t[o]
          e._mTween[a].id &&
            (window.requestAnimationFrame
              ? window.cancelAnimationFrame(e._mTween[a].id)
              : clearTimeout(e._mTween[a].id),
            (e._mTween[a].id = null),
            (e._mTween[a].stop = 1))
        }
      },
      $ = function (e, t) {
        try {
          delete e[t]
        } catch (o) {
          e[t] = null
        }
      },
      ee = function (e) {
        return !(e.which && 1 !== e.which)
      },
      te = function (e) {
        var t = e.originalEvent.pointerType
        return !(t && 'touch' !== t && 2 !== t)
      },
      oe = function (e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
      },
      ae = function (e) {
        var t = e.parents('.mCSB_container')
        return [
          e.offset().top - t.offset().top,
          e.offset().left - t.offset().left,
        ]
      },
      ne = function () {
        function e() {
          var e = ['webkit', 'moz', 'ms', 'o']
          if ('hidden' in document) return 'hidden'
          for (var t = 0; t < e.length; t++)
            if (e[t] + 'Hidden' in document) return e[t] + 'Hidden'
          return null
        }
        var t = e()
        return t ? document[t] : !1
      }
    ;(e.fn[o] = function (t) {
      return u[t]
        ? u[t].apply(this, Array.prototype.slice.call(arguments, 1))
        : 'object' != typeof t && t
        ? void e.error('Method ' + t + ' does not exist')
        : u.init.apply(this, arguments)
    }),
      (e[o] = function (t) {
        return u[t]
          ? u[t].apply(this, Array.prototype.slice.call(arguments, 1))
          : 'object' != typeof t && t
          ? void e.error('Method ' + t + ' does not exist')
          : u.init.apply(this, arguments)
      }),
      (e[o].defaults = i),
      (window[o] = !0),
      e(window).bind('load', function () {
        e(n)[o](),
          e.extend(e.expr[':'], {
            mcsInView:
              e.expr[':'].mcsInView ||
              function (t) {
                var o,
                  a,
                  n = e(t),
                  i = n.parents('.mCSB_container')
                if (i.length)
                  return (
                    (o = i.parent()),
                    (a = [i[0].offsetTop, i[0].offsetLeft]),
                    a[0] + ae(n)[0] >= 0 &&
                      a[0] + ae(n)[0] < o.height() - n.outerHeight(!1) &&
                      a[1] + ae(n)[1] >= 0 &&
                      a[1] + ae(n)[1] < o.width() - n.outerWidth(!1)
                  )
              },
            mcsInSight:
              e.expr[':'].mcsInSight ||
              function (t, o, a) {
                var n,
                  i,
                  r,
                  l,
                  s = e(t),
                  c = s.parents('.mCSB_container'),
                  d =
                    'exact' === a[3]
                      ? [
                          [1, 0],
                          [1, 0],
                        ]
                      : [
                          [0.9, 0.1],
                          [0.6, 0.4],
                        ]
                if (c.length)
                  return (
                    (n = [s.outerHeight(!1), s.outerWidth(!1)]),
                    (r = [
                      c[0].offsetTop + ae(s)[0],
                      c[0].offsetLeft + ae(s)[1],
                    ]),
                    (i = [
                      c.parent()[0].offsetHeight,
                      c.parent()[0].offsetWidth,
                    ]),
                    (l = [
                      n[0] < i[0] ? d[0] : d[1],
                      n[1] < i[1] ? d[0] : d[1],
                    ]),
                    r[0] - i[0] * l[0][0] < 0 &&
                      r[0] + n[0] - i[0] * l[0][1] >= 0 &&
                      r[1] - i[1] * l[1][0] < 0 &&
                      r[1] + n[1] - i[1] * l[1][1] >= 0
                  )
              },
            mcsOverflow:
              e.expr[':'].mcsOverflow ||
              function (t) {
                var o = e(t).data(a)
                if (o) return o.overflowed[0] || o.overflowed[1]
              },
          })
      })
  })
})

/* ========================
	Lightgallery
========================= */
/*! lightgallery - v1.10.0 - 2020-11-07
 * http://sachinchoolur.github.io/lightGallery/
 * Copyright (c) 2020 Sachin N; Licensed GPLv3 */
!(function (a, b) {
  'function' == typeof define && define.amd
    ? define(['jquery'], function (a) {
        return b(a)
      })
    : 'object' == typeof module && module.exports
    ? (module.exports = b(require('jquery')))
    : b(a.jQuery)
})(this, function (a) {
  !(function () {
    'use strict'
    function b(b, d) {
      if (
        ((this.el = b),
        (this.$el = a(b)),
        (this.s = a.extend({}, c, d)),
        this.s.dynamic &&
          'undefined' !== this.s.dynamicEl &&
          this.s.dynamicEl.constructor === Array &&
          !this.s.dynamicEl.length)
      )
        throw 'When using dynamic mode, you must also define dynamicEl as an Array.'
      return (
        (this.modules = {}),
        (this.lGalleryOn = !1),
        (this.lgBusy = !1),
        (this.hideBarTimeout = !1),
        (this.isTouch = 'ontouchstart' in document.documentElement),
        this.s.slideEndAnimatoin && (this.s.hideControlOnEnd = !1),
        this.s.dynamic
          ? (this.$items = this.s.dynamicEl)
          : 'this' === this.s.selector
          ? (this.$items = this.$el)
          : '' !== this.s.selector
          ? this.s.selectWithin
            ? (this.$items = a(this.s.selectWithin).find(this.s.selector))
            : (this.$items = this.$el.find(a(this.s.selector)))
          : (this.$items = this.$el.children()),
        (this.$slide = ''),
        (this.$outer = ''),
        this.init(),
        this
      )
    }
    var c = {
      mode: 'lg-slide',
      cssEasing: 'ease',
      easing: 'linear',
      speed: 600,
      height: '100%',
      width: '100%',
      addClass: '',
      startClass: 'lg-start-zoom',
      backdropDuration: 150,
      hideBarsDelay: 6e3,
      useLeft: !1,
      ariaLabelledby: '',
      ariaDescribedby: '',
      closable: !0,
      loop: !0,
      escKey: !0,
      keyPress: !0,
      controls: !0,
      slideEndAnimatoin: !0,
      hideControlOnEnd: !1,
      mousewheel: !0,
      getCaptionFromTitleOrAlt: !0,
      appendSubHtmlTo: '.lg-sub-html',
      subHtmlSelectorRelative: !1,
      preload: 1,
      showAfterLoad: !0,
      selector: '',
      selectWithin: '',
      nextHtml: '',
      prevHtml: '',
      index: !1,
      iframeMaxWidth: '100%',
      download: !0,
      counter: !0,
      appendCounterTo: '.lg-toolbar',
      swipeThreshold: 50,
      enableSwipe: !0,
      enableDrag: !0,
      dynamic: !1,
      dynamicEl: [],
      galleryId: 1,
      supportLegacyBrowser: !0,
    }
    ;(b.prototype.init = function () {
      var b = this
      b.s.preload > b.$items.length && (b.s.preload = b.$items.length)
      var c = window.location.hash
      c.indexOf('lg=' + this.s.galleryId) > 0 &&
        ((b.index = parseInt(c.split('&slide=')[1], 10)),
        a('body').addClass('lg-from-hash'),
        a('body').hasClass('lg-on') ||
          (setTimeout(function () {
            b.build(b.index)
          }),
          a('body').addClass('lg-on'))),
        b.s.dynamic
          ? (b.$el.trigger('onBeforeOpen.lg'),
            (b.index = b.s.index || 0),
            a('body').hasClass('lg-on') ||
              setTimeout(function () {
                b.build(b.index), a('body').addClass('lg-on')
              }))
          : b.$items.on('click.lgcustom', function (c) {
              try {
                c.preventDefault(), c.preventDefault()
              } catch (a) {
                c.returnValue = !1
              }
              b.$el.trigger('onBeforeOpen.lg'),
                (b.index = b.s.index || b.$items.index(this)),
                a('body').hasClass('lg-on') ||
                  (b.build(b.index), a('body').addClass('lg-on'))
            })
    }),
      (b.prototype.build = function (b) {
        var c = this
        c.structure(),
          a.each(a.fn.lightGallery.modules, function (b) {
            c.modules[b] = new a.fn.lightGallery.modules[b](c.el)
          }),
          c.slide(b, !1, !1, !1),
          c.s.keyPress && c.keyPress(),
          c.$items.length > 1
            ? (c.arrow(),
              setTimeout(function () {
                c.enableDrag(), c.enableSwipe()
              }, 50),
              c.s.mousewheel && c.mousewheel())
            : c.$slide.on('click.lg', function () {
                c.$el.trigger('onSlideClick.lg')
              }),
          c.counter(),
          c.closeGallery(),
          c.$el.trigger('onAfterOpen.lg'),
          c.s.hideBarsDelay > 0 &&
            c.$outer.on('mousemove.lg click.lg touchstart.lg', function () {
              c.$outer.removeClass('lg-hide-items'),
                clearTimeout(c.hideBarTimeout),
                (c.hideBarTimeout = setTimeout(function () {
                  c.$outer.addClass('lg-hide-items')
                }, c.s.hideBarsDelay))
            }),
          c.$outer.trigger('mousemove.lg')
      }),
      (b.prototype.structure = function () {
        var b,
          c = '',
          d = '',
          e = 0,
          f = '',
          g = this
        for (
          a('body').append('<div class="lg-backdrop"></div>'),
            a('.lg-backdrop').css(
              'transition-duration',
              this.s.backdropDuration + 'ms'
            ),
            e = 0;
          e < this.$items.length;
          e++
        )
          c += '<div class="lg-item"></div>'
        if (
          (this.s.controls &&
            this.$items.length > 1 &&
            (d =
              '<div class="lg-actions"><button type="button" aria-label="Previous slide" class="lg-prev lg-icon">' +
              this.s.prevHtml +
              '</button><button type="button" aria-label="Next slide" class="lg-next lg-icon">' +
              this.s.nextHtml +
              '</button></div>'),
          '.lg-sub-html' === this.s.appendSubHtmlTo &&
            (f =
              '<div role="status" aria-live="polite" class="lg-sub-html"></div>'),
          (b =
            '<div tabindex="-1" aria-modal="true" ' +
            (this.s.ariaLabelledby
              ? 'aria-labelledby="' + this.s.ariaLabelledby + '"'
              : '') +
            ' ' +
            (this.s.ariaDescribedby
              ? 'aria-describedby="' + this.s.ariaDescribedby + '"'
              : '') +
            ' role="dialog" class="lg-outer ' +
            this.s.addClass +
            ' ' +
            this.s.startClass +
            '"><div class="lg" style="width:' +
            this.s.width +
            '; height:' +
            this.s.height +
            '"><div class="lg-inner">' +
            c +
            '</div><div class="lg-toolbar lg-group"><button type="button" aria-label="Close gallery" class="lg-close lg-icon"></button></div>' +
            d +
            f +
            '</div></div>'),
          a('body').append(b),
          (this.$outer = a('.lg-outer')),
          this.$outer.focus(),
          (this.$slide = this.$outer.find('.lg-item')),
          this.s.useLeft
            ? (this.$outer.addClass('lg-use-left'), (this.s.mode = 'lg-slide'))
            : this.$outer.addClass('lg-use-css3'),
          g.setTop(),
          a(window).on('resize.lg orientationchange.lg', function () {
            setTimeout(function () {
              g.setTop()
            }, 100)
          }),
          this.$slide.eq(this.index).addClass('lg-current'),
          this.doCss()
            ? this.$outer.addClass('lg-css3')
            : (this.$outer.addClass('lg-css'), (this.s.speed = 0)),
          this.$outer.addClass(this.s.mode),
          this.s.enableDrag &&
            this.$items.length > 1 &&
            this.$outer.addClass('lg-grab'),
          this.s.showAfterLoad && this.$outer.addClass('lg-show-after-load'),
          this.doCss())
        ) {
          var h = this.$outer.find('.lg-inner')
          h.css('transition-timing-function', this.s.cssEasing),
            h.css('transition-duration', this.s.speed + 'ms')
        }
        setTimeout(function () {
          a('.lg-backdrop').addClass('in')
        }),
          setTimeout(function () {
            g.$outer.addClass('lg-visible')
          }, this.s.backdropDuration),
          this.s.download &&
            this.$outer
              .find('.lg-toolbar')
              .append(
                '<a id="lg-download" aria-label="Download" target="_blank" download class="lg-download lg-icon"></a>'
              ),
          (this.prevScrollTop = a(window).scrollTop())
      }),
      (b.prototype.setTop = function () {
        if ('100%' !== this.s.height) {
          var b = a(window).height(),
            c = (b - parseInt(this.s.height, 10)) / 2,
            d = this.$outer.find('.lg')
          b >= parseInt(this.s.height, 10)
            ? d.css('top', c + 'px')
            : d.css('top', '0px')
        }
      }),
      (b.prototype.doCss = function () {
        return !!(function () {
          var a = [
              'transition',
              'MozTransition',
              'WebkitTransition',
              'OTransition',
              'msTransition',
              'KhtmlTransition',
            ],
            b = document.documentElement,
            c = 0
          for (c = 0; c < a.length; c++) if (a[c] in b.style) return !0
        })()
      }),
      (b.prototype.isVideo = function (a, b) {
        var c
        if (
          ((c = this.s.dynamic
            ? this.s.dynamicEl[b].html
            : this.$items.eq(b).attr('data-html')),
          !a)
        )
          return c
            ? { html5: !0 }
            : (console.error(
                'lightGallery :- data-src is not provided on slide item ' +
                  (b + 1) +
                  '. Please make sure the selector property is properly configured. More info - http://sachinchoolur.github.io/lightGallery/demos/html-markup.html'
              ),
              !1)
        var d = a.match(
            /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
          ),
          e = a.match(
            /\/\/(?:www\.)?(?:player\.)?vimeo.com\/(?:video\/)?([0-9a-z\-_]+)/i
          ),
          f = a.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
          g = a.match(
            /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
          )
        return d
          ? { youtube: d }
          : e
          ? { vimeo: e }
          : f
          ? { dailymotion: f }
          : g
          ? { vk: g }
          : void 0
      }),
      (b.prototype.counter = function () {
        this.s.counter &&
          a(this.s.appendCounterTo).append(
            '<div id="lg-counter" role="status" aria-live="polite"><span id="lg-counter-current">' +
              (parseInt(this.index, 10) + 1) +
              '</span> / <span id="lg-counter-all">' +
              this.$items.length +
              '</span></div>'
          )
      }),
      (b.prototype.addHtml = function (b) {
        var c,
          d,
          e = null
        if (
          (this.s.dynamic
            ? this.s.dynamicEl[b].subHtmlUrl
              ? (c = this.s.dynamicEl[b].subHtmlUrl)
              : (e = this.s.dynamicEl[b].subHtml)
            : ((d = this.$items.eq(b)),
              d.attr('data-sub-html-url')
                ? (c = d.attr('data-sub-html-url'))
                : ((e = d.attr('data-sub-html')),
                  this.s.getCaptionFromTitleOrAlt &&
                    !e &&
                    (e =
                      d.attr('title') || d.find('img').first().attr('alt')))),
          !c)
        )
          if (void 0 !== e && null !== e) {
            var f = e.substring(0, 1)
            ;('.' !== f && '#' !== f) ||
              (e =
                this.s.subHtmlSelectorRelative && !this.s.dynamic
                  ? d.find(e).html()
                  : a(e).html())
          } else e = ''
        '.lg-sub-html' === this.s.appendSubHtmlTo
          ? c
            ? this.$outer.find(this.s.appendSubHtmlTo).load(c)
            : this.$outer.find(this.s.appendSubHtmlTo).html(e)
          : c
          ? this.$slide.eq(b).load(c)
          : this.$slide.eq(b).append(e),
          void 0 !== e &&
            null !== e &&
            ('' === e
              ? this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .addClass('lg-empty-html')
              : this.$outer
                  .find(this.s.appendSubHtmlTo)
                  .removeClass('lg-empty-html')),
          this.$el.trigger('onAfterAppendSubHtml.lg', [b])
      }),
      (b.prototype.preload = function (a) {
        var b = 1,
          c = 1
        for (b = 1; b <= this.s.preload && !(b >= this.$items.length - a); b++)
          this.loadContent(a + b, !1, 0)
        for (c = 1; c <= this.s.preload && !(a - c < 0); c++)
          this.loadContent(a - c, !1, 0)
      }),
      (b.prototype.loadContent = function (b, c, d) {
        var e,
          f,
          g,
          h,
          i,
          j,
          k,
          l = this,
          m = !1,
          n = function (b) {
            for (var c = [], d = [], e = 0; e < b.length; e++) {
              var g = b[e].split(' ')
              '' === g[0] && g.splice(0, 1), d.push(g[0]), c.push(g[1])
            }
            for (var h = a(window).width(), i = 0; i < c.length; i++)
              if (parseInt(c[i], 10) > h) {
                f = d[i]
                break
              }
          }
        if (l.s.dynamic) {
          if (
            (l.s.dynamicEl[b].poster &&
              ((m = !0), (g = l.s.dynamicEl[b].poster)),
            (j = l.s.dynamicEl[b].html),
            (f = l.s.dynamicEl[b].src),
            (k = l.s.dynamicEl[b].alt),
            l.s.dynamicEl[b].responsive)
          ) {
            n(l.s.dynamicEl[b].responsive.split(','))
          }
          ;(h = l.s.dynamicEl[b].srcset), (i = l.s.dynamicEl[b].sizes)
        } else {
          var o = l.$items.eq(b)
          if (
            (o.attr('data-poster') && ((m = !0), (g = o.attr('data-poster'))),
            (j = o.attr('data-html')),
            (f = o.attr('href') || o.attr('data-src')),
            (k = o.attr('title') || o.find('img').first().attr('alt')),
            o.attr('data-responsive'))
          ) {
            n(o.attr('data-responsive').split(','))
          }
          ;(h = o.attr('data-srcset')), (i = o.attr('data-sizes'))
        }
        var p = !1
        l.s.dynamic
          ? l.s.dynamicEl[b].iframe && (p = !0)
          : 'true' === l.$items.eq(b).attr('data-iframe') && (p = !0)
        var q = l.isVideo(f, b)
        if (!l.$slide.eq(b).hasClass('lg-loaded')) {
          if (p)
            l.$slide
              .eq(b)
              .prepend(
                '<div class="lg-video-cont lg-has-iframe" style="max-width:' +
                  l.s.iframeMaxWidth +
                  '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                  f +
                  '"  allowfullscreen="true"></iframe></div></div>'
              )
          else if (m) {
            var r = ''
            ;(r =
              q && q.youtube
                ? 'lg-has-youtube'
                : q && q.vimeo
                ? 'lg-has-vimeo'
                : 'lg-has-html5'),
              l.$slide
                .eq(b)
                .prepend(
                  '<div class="lg-video-cont ' +
                    r +
                    ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                    g +
                    '" /></div></div>'
                )
          } else
            q
              ? (l.$slide
                  .eq(b)
                  .prepend(
                    '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                  ),
                l.$el.trigger('hasVideo.lg', [b, f, j]))
              : ((k = k ? 'alt="' + k + '"' : ''),
                l.$slide
                  .eq(b)
                  .prepend(
                    '<div class="lg-img-wrap"><img class="lg-object lg-image" ' +
                      k +
                      ' src="' +
                      f +
                      '" /></div>'
                  ))
          if (
            (l.$el.trigger('onAferAppendSlide.lg', [b]),
            (e = l.$slide.eq(b).find('.lg-object')),
            i && e.attr('sizes', i),
            h && (e.attr('srcset', h), this.s.supportLegacyBrowser))
          )
            try {
              picturefill({ elements: [e[0]] })
            } catch (a) {
              console.warn(
                'lightGallery :- If you want srcset to be supported for older browser please include picturefil version 2 javascript library in your document.'
              )
            }
          '.lg-sub-html' !== this.s.appendSubHtmlTo && l.addHtml(b),
            l.$slide.eq(b).addClass('lg-loaded')
        }
        l.$slide
          .eq(b)
          .find('.lg-object')
          .on('load.lg error.lg', function () {
            var c = 0
            d && !a('body').hasClass('lg-from-hash') && (c = d),
              setTimeout(function () {
                l.$slide.eq(b).addClass('lg-complete'),
                  l.$el.trigger('onSlideItemLoad.lg', [b, d || 0])
              }, c)
          }),
          q && q.html5 && !m && l.$slide.eq(b).addClass('lg-complete'),
          !0 === c &&
            (l.$slide.eq(b).hasClass('lg-complete')
              ? l.preload(b)
              : l.$slide
                  .eq(b)
                  .find('.lg-object')
                  .on('load.lg error.lg', function () {
                    l.preload(b)
                  }))
      }),
      (b.prototype.slide = function (b, c, d, e) {
        var f = this.$outer.find('.lg-current').index(),
          g = this
        if (!g.lGalleryOn || f !== b) {
          var h = this.$slide.length,
            i = g.lGalleryOn ? this.s.speed : 0
          if (!g.lgBusy) {
            if (this.s.download) {
              var j
              ;(j = g.s.dynamic
                ? !1 !== g.s.dynamicEl[b].downloadUrl &&
                  (g.s.dynamicEl[b].downloadUrl || g.s.dynamicEl[b].src)
                : 'false' !== g.$items.eq(b).attr('data-download-url') &&
                  (g.$items.eq(b).attr('data-download-url') ||
                    g.$items.eq(b).attr('href') ||
                    g.$items.eq(b).attr('data-src'))),
                j
                  ? (a('#lg-download').attr('href', j),
                    g.$outer.removeClass('lg-hide-download'))
                  : g.$outer.addClass('lg-hide-download')
            }
            if (
              (this.$el.trigger('onBeforeSlide.lg', [f, b, c, d]),
              (g.lgBusy = !0),
              clearTimeout(g.hideBarTimeout),
              '.lg-sub-html' === this.s.appendSubHtmlTo &&
                setTimeout(function () {
                  g.addHtml(b)
                }, i),
              this.arrowDisable(b),
              e || (b < f ? (e = 'prev') : b > f && (e = 'next')),
              c)
            ) {
              this.$slide.removeClass('lg-prev-slide lg-current lg-next-slide')
              var k, l
              h > 2
                ? ((k = b - 1),
                  (l = b + 1),
                  0 === b && f === h - 1
                    ? ((l = 0), (k = h - 1))
                    : b === h - 1 && 0 === f && ((l = 0), (k = h - 1)))
                : ((k = 0), (l = 1)),
                'prev' === e
                  ? g.$slide.eq(l).addClass('lg-next-slide')
                  : g.$slide.eq(k).addClass('lg-prev-slide'),
                g.$slide.eq(b).addClass('lg-current')
            } else
              g.$outer.addClass('lg-no-trans'),
                this.$slide.removeClass('lg-prev-slide lg-next-slide'),
                'prev' === e
                  ? (this.$slide.eq(b).addClass('lg-prev-slide'),
                    this.$slide.eq(f).addClass('lg-next-slide'))
                  : (this.$slide.eq(b).addClass('lg-next-slide'),
                    this.$slide.eq(f).addClass('lg-prev-slide')),
                setTimeout(function () {
                  g.$slide.removeClass('lg-current'),
                    g.$slide.eq(b).addClass('lg-current'),
                    g.$outer.removeClass('lg-no-trans')
                }, 50)
            g.lGalleryOn
              ? (setTimeout(function () {
                  g.loadContent(b, !0, 0)
                }, this.s.speed + 50),
                setTimeout(function () {
                  ;(g.lgBusy = !1),
                    g.$el.trigger('onAfterSlide.lg', [f, b, c, d])
                }, this.s.speed))
              : (g.loadContent(b, !0, g.s.backdropDuration),
                (g.lgBusy = !1),
                g.$el.trigger('onAfterSlide.lg', [f, b, c, d])),
              (g.lGalleryOn = !0),
              this.s.counter && a('#lg-counter-current').text(b + 1)
          }
          g.index = b
        }
      }),
      (b.prototype.goToNextSlide = function (a) {
        var b = this,
          c = b.s.loop
        a && b.$slide.length < 3 && (c = !1),
          b.lgBusy ||
            (b.index + 1 < b.$slide.length
              ? (b.index++,
                b.$el.trigger('onBeforeNextSlide.lg', [b.index]),
                b.slide(b.index, a, !1, 'next'))
              : c
              ? ((b.index = 0),
                b.$el.trigger('onBeforeNextSlide.lg', [b.index]),
                b.slide(b.index, a, !1, 'next'))
              : b.s.slideEndAnimatoin &&
                !a &&
                (b.$outer.addClass('lg-right-end'),
                setTimeout(function () {
                  b.$outer.removeClass('lg-right-end')
                }, 400)))
      }),
      (b.prototype.goToPrevSlide = function (a) {
        var b = this,
          c = b.s.loop
        a && b.$slide.length < 3 && (c = !1),
          b.lgBusy ||
            (b.index > 0
              ? (b.index--,
                b.$el.trigger('onBeforePrevSlide.lg', [b.index, a]),
                b.slide(b.index, a, !1, 'prev'))
              : c
              ? ((b.index = b.$items.length - 1),
                b.$el.trigger('onBeforePrevSlide.lg', [b.index, a]),
                b.slide(b.index, a, !1, 'prev'))
              : b.s.slideEndAnimatoin &&
                !a &&
                (b.$outer.addClass('lg-left-end'),
                setTimeout(function () {
                  b.$outer.removeClass('lg-left-end')
                }, 400)))
      }),
      (b.prototype.keyPress = function () {
        var b = this
        this.$items.length > 1 &&
          a(window).on('keyup.lg', function (a) {
            b.$items.length > 1 &&
              (37 === a.keyCode && (a.preventDefault(), b.goToPrevSlide()),
              39 === a.keyCode && (a.preventDefault(), b.goToNextSlide()))
          }),
          a(window).on('keydown.lg', function (a) {
            !0 === b.s.escKey &&
              27 === a.keyCode &&
              (a.preventDefault(),
              b.$outer.hasClass('lg-thumb-open')
                ? b.$outer.removeClass('lg-thumb-open')
                : b.destroy())
          })
      }),
      (b.prototype.arrow = function () {
        var a = this
        this.$outer.find('.lg-prev').on('click.lg', function () {
          a.goToPrevSlide()
        }),
          this.$outer.find('.lg-next').on('click.lg', function () {
            a.goToNextSlide()
          })
      }),
      (b.prototype.arrowDisable = function (a) {
        !this.s.loop &&
          this.s.hideControlOnEnd &&
          (a + 1 < this.$slide.length
            ? this.$outer
                .find('.lg-next')
                .removeAttr('disabled')
                .removeClass('disabled')
            : this.$outer
                .find('.lg-next')
                .attr('disabled', 'disabled')
                .addClass('disabled'),
          a > 0
            ? this.$outer
                .find('.lg-prev')
                .removeAttr('disabled')
                .removeClass('disabled')
            : this.$outer
                .find('.lg-prev')
                .attr('disabled', 'disabled')
                .addClass('disabled'))
      }),
      (b.prototype.setTranslate = function (a, b, c) {
        this.s.useLeft
          ? a.css('left', b)
          : a.css({ transform: 'translate3d(' + b + 'px, ' + c + 'px, 0px)' })
      }),
      (b.prototype.touchMove = function (b, c) {
        var d = c - b
        Math.abs(d) > 15 &&
          (this.$outer.addClass('lg-dragging'),
          this.setTranslate(this.$slide.eq(this.index), d, 0),
          this.setTranslate(
            a('.lg-prev-slide'),
            -this.$slide.eq(this.index).width() + d,
            0
          ),
          this.setTranslate(
            a('.lg-next-slide'),
            this.$slide.eq(this.index).width() + d,
            0
          ))
      }),
      (b.prototype.touchEnd = function (a) {
        var b = this
        'lg-slide' !== b.s.mode && b.$outer.addClass('lg-slide'),
          this.$slide
            .not('.lg-current, .lg-prev-slide, .lg-next-slide')
            .css('opacity', '0'),
          setTimeout(function () {
            b.$outer.removeClass('lg-dragging'),
              a < 0 && Math.abs(a) > b.s.swipeThreshold
                ? b.goToNextSlide(!0)
                : a > 0 && Math.abs(a) > b.s.swipeThreshold
                ? b.goToPrevSlide(!0)
                : Math.abs(a) < 5 && b.$el.trigger('onSlideClick.lg'),
              b.$slide.removeAttr('style')
          }),
          setTimeout(function () {
            b.$outer.hasClass('lg-dragging') ||
              'lg-slide' === b.s.mode ||
              b.$outer.removeClass('lg-slide')
          }, b.s.speed + 100)
      }),
      (b.prototype.enableSwipe = function () {
        var a = this,
          b = 0,
          c = 0,
          d = !1
        a.s.enableSwipe &&
          a.doCss() &&
          (a.$slide.on('touchstart.lg', function (c) {
            a.$outer.hasClass('lg-zoomed') ||
              a.lgBusy ||
              (c.preventDefault(),
              a.manageSwipeClass(),
              (b = c.originalEvent.targetTouches[0].pageX))
          }),
          a.$slide.on('touchmove.lg', function (e) {
            a.$outer.hasClass('lg-zoomed') ||
              (e.preventDefault(),
              (c = e.originalEvent.targetTouches[0].pageX),
              a.touchMove(b, c),
              (d = !0))
          }),
          a.$slide.on('touchend.lg', function () {
            a.$outer.hasClass('lg-zoomed') ||
              (d
                ? ((d = !1), a.touchEnd(c - b))
                : a.$el.trigger('onSlideClick.lg'))
          }))
      }),
      (b.prototype.enableDrag = function () {
        var b = this,
          c = 0,
          d = 0,
          e = !1,
          f = !1
        b.s.enableDrag &&
          b.doCss() &&
          (b.$slide.on('mousedown.lg', function (d) {
            b.$outer.hasClass('lg-zoomed') ||
              b.lgBusy ||
              a(d.target).text().trim() ||
              (d.preventDefault(),
              b.manageSwipeClass(),
              (c = d.pageX),
              (e = !0),
              (b.$outer.scrollLeft += 1),
              (b.$outer.scrollLeft -= 1),
              b.$outer.removeClass('lg-grab').addClass('lg-grabbing'),
              b.$el.trigger('onDragstart.lg'))
          }),
          a(window).on('mousemove.lg', function (a) {
            e &&
              ((f = !0),
              (d = a.pageX),
              b.touchMove(c, d),
              b.$el.trigger('onDragmove.lg'))
          }),
          a(window).on('mouseup.lg', function (g) {
            f
              ? ((f = !1), b.touchEnd(d - c), b.$el.trigger('onDragend.lg'))
              : (a(g.target).hasClass('lg-object') ||
                  a(g.target).hasClass('lg-video-play')) &&
                b.$el.trigger('onSlideClick.lg'),
              e &&
                ((e = !1),
                b.$outer.removeClass('lg-grabbing').addClass('lg-grab'))
          }))
      }),
      (b.prototype.manageSwipeClass = function () {
        var a = this.index + 1,
          b = this.index - 1
        this.s.loop &&
          this.$slide.length > 2 &&
          (0 === this.index
            ? (b = this.$slide.length - 1)
            : this.index === this.$slide.length - 1 && (a = 0)),
          this.$slide.removeClass('lg-next-slide lg-prev-slide'),
          b > -1 && this.$slide.eq(b).addClass('lg-prev-slide'),
          this.$slide.eq(a).addClass('lg-next-slide')
      }),
      (b.prototype.mousewheel = function () {
        var a = this
        a.$outer.on('mousewheel.lg', function (b) {
          b.deltaY &&
            (b.deltaY > 0 ? a.goToPrevSlide() : a.goToNextSlide(),
            b.preventDefault())
        })
      }),
      (b.prototype.closeGallery = function () {
        var b = this,
          c = !1
        this.$outer.find('.lg-close').on('click.lg', function () {
          b.destroy()
        }),
          b.s.closable &&
            (b.$outer.on('mousedown.lg', function (b) {
              c = !!(
                a(b.target).is('.lg-outer') ||
                a(b.target).is('.lg-item ') ||
                a(b.target).is('.lg-img-wrap')
              )
            }),
            b.$outer.on('mousemove.lg', function () {
              c = !1
            }),
            b.$outer.on('mouseup.lg', function (d) {
              ;(a(d.target).is('.lg-outer') ||
                a(d.target).is('.lg-item ') ||
                (a(d.target).is('.lg-img-wrap') && c)) &&
                (b.$outer.hasClass('lg-dragging') || b.destroy())
            }))
      }),
      (b.prototype.destroy = function (b) {
        var c = this
        b ||
          (c.$el.trigger('onBeforeClose.lg'),
          a(window).scrollTop(c.prevScrollTop)),
          b &&
            (c.s.dynamic || this.$items.off('click.lg click.lgcustom'),
            a.removeData(c.el, 'lightGallery')),
          this.$el.off('.lg.tm'),
          a.each(a.fn.lightGallery.modules, function (a) {
            c.modules[a] && c.modules[a].destroy()
          }),
          (this.lGalleryOn = !1),
          clearTimeout(c.hideBarTimeout),
          (this.hideBarTimeout = !1),
          a(window).off('.lg'),
          a('body').removeClass('lg-on lg-from-hash'),
          c.$outer && c.$outer.removeClass('lg-visible'),
          a('.lg-backdrop').removeClass('in'),
          setTimeout(function () {
            c.$outer && c.$outer.remove(),
              a('.lg-backdrop').remove(),
              b || c.$el.trigger('onCloseAfter.lg'),
              c.$el.focus()
          }, c.s.backdropDuration + 50)
      }),
      (a.fn.lightGallery = function (c) {
        return this.each(function () {
          if (a.data(this, 'lightGallery'))
            try {
              a(this).data('lightGallery').init()
            } catch (a) {
              console.error('lightGallery has not initiated properly', a)
            }
          else a.data(this, 'lightGallery', new b(this, c))
        })
      }),
      (a.fn.lightGallery.modules = {})
  })()
}),
  (function (a, b) {
    'function' == typeof define && define.amd
      ? define(['jquery'], function (a) {
          return b(a)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = b(require('jquery')))
      : b(a.jQuery)
  })(this, function (a) {
    !(function () {
      'use strict'
      var b = {
          autoplay: !1,
          pause: 5e3,
          progressBar: !0,
          fourceAutoplay: !1,
          autoplayControls: !0,
          appendAutoplayControlsTo: '.lg-toolbar',
        },
        c = function (c) {
          return (
            (this.core = a(c).data('lightGallery')),
            (this.$el = a(c)),
            !(this.core.$items.length < 2) &&
              ((this.core.s = a.extend({}, b, this.core.s)),
              (this.interval = !1),
              (this.fromAuto = !0),
              (this.canceledOnTouch = !1),
              (this.fourceAutoplayTemp = this.core.s.fourceAutoplay),
              this.core.doCss() || (this.core.s.progressBar = !1),
              this.init(),
              this)
          )
        }
      ;(c.prototype.init = function () {
        var a = this
        a.core.s.autoplayControls && a.controls(),
          a.core.s.progressBar &&
            a.core.$outer
              .find('.lg')
              .append(
                '<div class="lg-progress-bar"><div class="lg-progress"></div></div>'
              ),
          a.progress(),
          a.core.s.autoplay &&
            a.$el.one('onSlideItemLoad.lg.tm', function () {
              a.startlAuto()
            }),
          a.$el.on('onDragstart.lg.tm touchstart.lg.tm', function () {
            a.interval && (a.cancelAuto(), (a.canceledOnTouch = !0))
          }),
          a.$el.on(
            'onDragend.lg.tm touchend.lg.tm onSlideClick.lg.tm',
            function () {
              !a.interval &&
                a.canceledOnTouch &&
                (a.startlAuto(), (a.canceledOnTouch = !1))
            }
          )
      }),
        (c.prototype.progress = function () {
          var a,
            b,
            c = this
          c.$el.on('onBeforeSlide.lg.tm', function () {
            c.core.s.progressBar &&
              c.fromAuto &&
              ((a = c.core.$outer.find('.lg-progress-bar')),
              (b = c.core.$outer.find('.lg-progress')),
              c.interval &&
                (b.removeAttr('style'),
                a.removeClass('lg-start'),
                setTimeout(function () {
                  b.css(
                    'transition',
                    'width ' + (c.core.s.speed + c.core.s.pause) + 'ms ease 0s'
                  ),
                    a.addClass('lg-start')
                }, 20))),
              c.fromAuto || c.core.s.fourceAutoplay || c.cancelAuto(),
              (c.fromAuto = !1)
          })
        }),
        (c.prototype.controls = function () {
          var b = this
          a(this.core.s.appendAutoplayControlsTo).append(
            '<button type="button" aria-label="Toggle autoplay" class="lg-autoplay-button lg-icon"></button>'
          ),
            b.core.$outer
              .find('.lg-autoplay-button')
              .on('click.lg', function () {
                a(b.core.$outer).hasClass('lg-show-autoplay')
                  ? (b.cancelAuto(), (b.core.s.fourceAutoplay = !1))
                  : b.interval ||
                    (b.startlAuto(),
                    (b.core.s.fourceAutoplay = b.fourceAutoplayTemp))
              })
        }),
        (c.prototype.startlAuto = function () {
          var a = this
          a.core.$outer
            .find('.lg-progress')
            .css(
              'transition',
              'width ' + (a.core.s.speed + a.core.s.pause) + 'ms ease 0s'
            ),
            a.core.$outer.addClass('lg-show-autoplay'),
            a.core.$outer.find('.lg-progress-bar').addClass('lg-start'),
            (a.interval = setInterval(function () {
              a.core.index + 1 < a.core.$items.length
                ? a.core.index++
                : (a.core.index = 0),
                (a.fromAuto = !0),
                a.core.slide(a.core.index, !1, !1, 'next')
            }, a.core.s.speed + a.core.s.pause))
        }),
        (c.prototype.cancelAuto = function () {
          clearInterval(this.interval),
            (this.interval = !1),
            this.core.$outer.find('.lg-progress').removeAttr('style'),
            this.core.$outer.removeClass('lg-show-autoplay'),
            this.core.$outer.find('.lg-progress-bar').removeClass('lg-start')
        }),
        (c.prototype.destroy = function () {
          this.cancelAuto(), this.core.$outer.find('.lg-progress-bar').remove()
        }),
        (a.fn.lightGallery.modules.autoplay = c)
    })()
  }),
  (function (a, b) {
    'function' == typeof define && define.amd
      ? define(['jquery'], function (a) {
          return b(a)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = b(require('jquery')))
      : b(a.jQuery)
  })(this, function (a) {
    !(function () {
      'use strict'
      function b() {
        return (
          document.fullscreenElement ||
          document.mozFullScreenElement ||
          document.webkitFullscreenElement ||
          document.msFullscreenElement
        )
      }
      var c = { fullScreen: !0 },
        d = function (b) {
          return (
            (this.core = a(b).data('lightGallery')),
            (this.$el = a(b)),
            (this.core.s = a.extend({}, c, this.core.s)),
            this.init(),
            this
          )
        }
      ;(d.prototype.init = function () {
        var a = ''
        if (this.core.s.fullScreen) {
          if (
            !(
              document.fullscreenEnabled ||
              document.webkitFullscreenEnabled ||
              document.mozFullScreenEnabled ||
              document.msFullscreenEnabled
            )
          )
            return
          ;(a =
            '<button type="button" aria-label="Toggle fullscreen" class="lg-fullscreen lg-icon"></button>'),
            this.core.$outer.find('.lg-toolbar').append(a),
            this.fullScreen()
        }
      }),
        (d.prototype.requestFullscreen = function () {
          var a = document.documentElement
          a.requestFullscreen
            ? a.requestFullscreen()
            : a.msRequestFullscreen
            ? a.msRequestFullscreen()
            : a.mozRequestFullScreen
            ? a.mozRequestFullScreen()
            : a.webkitRequestFullscreen && a.webkitRequestFullscreen()
        }),
        (d.prototype.exitFullscreen = function () {
          document.exitFullscreen
            ? document.exitFullscreen()
            : document.msExitFullscreen
            ? document.msExitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitExitFullscreen && document.webkitExitFullscreen()
        }),
        (d.prototype.fullScreen = function () {
          var c = this
          a(document).on(
            'fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg',
            function () {
              c.core.$outer.toggleClass('lg-fullscreen-on')
            }
          ),
            this.core.$outer.find('.lg-fullscreen').on('click.lg', function () {
              b() ? c.exitFullscreen() : c.requestFullscreen()
            })
        }),
        (d.prototype.destroy = function () {
          b() && this.exitFullscreen(),
            a(document).off(
              'fullscreenchange.lg webkitfullscreenchange.lg mozfullscreenchange.lg MSFullscreenChange.lg'
            )
        }),
        (a.fn.lightGallery.modules.fullscreen = d)
    })()
  }),
  (function (a, b) {
    'function' == typeof define && define.amd
      ? define(['jquery'], function (a) {
          return b(a)
        })
      : 'object' == typeof exports
      ? (module.exports = b(require('jquery')))
      : b(jQuery)
  })(0, function (a) {
    !(function () {
      'use strict'
      var b = { pager: !1 },
        c = function (c) {
          return (
            (this.core = a(c).data('lightGallery')),
            (this.$el = a(c)),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.pager && this.core.$items.length > 1 && this.init(),
            this
          )
        }
      ;(c.prototype.init = function () {
        var b,
          c,
          d,
          e = this,
          f = ''
        if (
          (e.core.$outer
            .find('.lg')
            .append('<div class="lg-pager-outer"></div>'),
          e.core.s.dynamic)
        )
          for (var g = 0; g < e.core.s.dynamicEl.length; g++)
            f +=
              '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
              e.core.s.dynamicEl[g].thumb +
              '" /></div></span>'
        else
          e.core.$items.each(function () {
            e.core.s.exThumbImage
              ? (f +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  a(this).attr(e.core.s.exThumbImage) +
                  '" /></div></span>')
              : (f +=
                  '<span class="lg-pager-cont"> <span class="lg-pager"></span><div class="lg-pager-thumb-cont"><span class="lg-caret"></span> <img src="' +
                  a(this).find('img').attr('src') +
                  '" /></div></span>')
          })
        ;(c = e.core.$outer.find('.lg-pager-outer')),
          c.html(f),
          (b = e.core.$outer.find('.lg-pager-cont')),
          b.on('click.lg touchend.lg', function () {
            var b = a(this)
            ;(e.core.index = b.index()), e.core.slide(e.core.index, !1, !0, !1)
          }),
          c.on('mouseover.lg', function () {
            clearTimeout(d), c.addClass('lg-pager-hover')
          }),
          c.on('mouseout.lg', function () {
            d = setTimeout(function () {
              c.removeClass('lg-pager-hover')
            })
          }),
          e.core.$el.on('onBeforeSlide.lg.tm', function (a, c, d) {
            b.removeClass('lg-pager-active'),
              b.eq(d).addClass('lg-pager-active')
          })
      }),
        (c.prototype.destroy = function () {}),
        (a.fn.lightGallery.modules.pager = c)
    })()
  }),
  (function (a, b) {
    'function' == typeof define && define.amd
      ? define(['jquery'], function (a) {
          return b(a)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = b(require('jquery')))
      : b(a.jQuery)
  })(this, function (a) {
    !(function () {
      'use strict'
      var b = {
          thumbnail: !0,
          animateThumb: !0,
          currentPagerPosition: 'middle',
          thumbWidth: 100,
          thumbHeight: '80px',
          thumbContHeight: 100,
          thumbMargin: 5,
          exThumbImage: !1,
          showThumbByDefault: !0,
          toogleThumb: !0,
          pullCaptionUp: !0,
          enableThumbDrag: !0,
          enableThumbSwipe: !0,
          swipeThreshold: 50,
          loadYoutubeThumbnail: !0,
          youtubeThumbSize: 1,
          loadVimeoThumbnail: !0,
          vimeoThumbSize: 'thumbnail_small',
          loadDailymotionThumbnail: !0,
        },
        c = function (c) {
          return (
            (this.core = a(c).data('lightGallery')),
            (this.core.s = a.extend({}, b, this.core.s)),
            (this.$el = a(c)),
            (this.$thumbOuter = null),
            (this.thumbOuterWidth = 0),
            (this.thumbTotalWidth =
              this.core.$items.length *
              (this.core.s.thumbWidth + this.core.s.thumbMargin)),
            (this.thumbIndex = this.core.index),
            this.core.s.animateThumb && (this.core.s.thumbHeight = '100%'),
            (this.left = 0),
            this.init(),
            this
          )
        }
      ;(c.prototype.init = function () {
        var a = this
        this.core.s.thumbnail &&
          this.core.$items.length > 1 &&
          (this.core.s.showThumbByDefault &&
            setTimeout(function () {
              a.core.$outer.addClass('lg-thumb-open')
            }, 700),
          this.core.s.pullCaptionUp &&
            this.core.$outer.addClass('lg-pull-caption-up'),
          this.build(),
          this.core.s.animateThumb && this.core.doCss()
            ? (this.core.s.enableThumbDrag && this.enableThumbDrag(),
              this.core.s.enableThumbSwipe && this.enableThumbSwipe(),
              (this.thumbClickable = !1))
            : (this.thumbClickable = !0),
          this.toogle(),
          this.thumbkeyPress())
      }),
        (c.prototype.build = function () {
          function b(a, b, c) {
            var g,
              h = d.core.isVideo(a, c) || {},
              i = ''
            h.youtube || h.vimeo || h.dailymotion
              ? h.youtube
                ? (g = d.core.s.loadYoutubeThumbnail
                    ? '//img.youtube.com/vi/' +
                      h.youtube[1] +
                      '/' +
                      d.core.s.youtubeThumbSize +
                      '.jpg'
                    : b)
                : h.vimeo
                ? d.core.s.loadVimeoThumbnail
                  ? ((g = '//i.vimeocdn.com/video/error_' + f + '.jpg'),
                    (i = h.vimeo[1]))
                  : (g = b)
                : h.dailymotion &&
                  (g = d.core.s.loadDailymotionThumbnail
                    ? '//www.dailymotion.com/thumbnail/video/' +
                      h.dailymotion[1]
                    : b)
              : (g = b),
              (e +=
                '<div data-vimeo-id="' +
                i +
                '" class="lg-thumb-item" style="width:' +
                d.core.s.thumbWidth +
                'px; height: ' +
                d.core.s.thumbHeight +
                '; margin-right: ' +
                d.core.s.thumbMargin +
                'px"><img src="' +
                g +
                '" /></div>'),
              (i = '')
          }
          var c,
            d = this,
            e = '',
            f = '',
            g =
              '<div class="lg-thumb-outer"><div class="lg-thumb lg-group"></div></div>'
          switch (this.core.s.vimeoThumbSize) {
            case 'thumbnail_large':
              f = '640'
              break
            case 'thumbnail_medium':
              f = '200x150'
              break
            case 'thumbnail_small':
              f = '100x75'
          }
          if (
            (d.core.$outer.addClass('lg-has-thumb'),
            d.core.$outer.find('.lg').append(g),
            (d.$thumbOuter = d.core.$outer.find('.lg-thumb-outer')),
            (d.thumbOuterWidth = d.$thumbOuter.width()),
            d.core.s.animateThumb &&
              d.core.$outer
                .find('.lg-thumb')
                .css({ width: d.thumbTotalWidth + 'px', position: 'relative' }),
            this.core.s.animateThumb &&
              d.$thumbOuter.css('height', d.core.s.thumbContHeight + 'px'),
            d.core.s.dynamic)
          )
            for (var h = 0; h < d.core.s.dynamicEl.length; h++)
              b(d.core.s.dynamicEl[h].src, d.core.s.dynamicEl[h].thumb, h)
          else
            d.core.$items.each(function (c) {
              d.core.s.exThumbImage
                ? b(
                    a(this).attr('href') || a(this).attr('data-src'),
                    a(this).attr(d.core.s.exThumbImage),
                    c
                  )
                : b(
                    a(this).attr('href') || a(this).attr('data-src'),
                    a(this).find('img').attr('src'),
                    c
                  )
            })
          d.core.$outer.find('.lg-thumb').html(e),
            (c = d.core.$outer.find('.lg-thumb-item')),
            c.each(function () {
              var b = a(this),
                c = b.attr('data-vimeo-id')
              c &&
                a.getJSON(
                  '//www.vimeo.com/api/v2/video/' + c + '.json?callback=?',
                  { format: 'json' },
                  function (a) {
                    b.find('img').attr('src', a[0][d.core.s.vimeoThumbSize])
                  }
                )
            }),
            c.eq(d.core.index).addClass('active'),
            d.core.$el.on('onBeforeSlide.lg.tm', function () {
              c.removeClass('active'), c.eq(d.core.index).addClass('active')
            }),
            c.on('click.lg touchend.lg', function () {
              var b = a(this)
              setTimeout(function () {
                ;((d.thumbClickable && !d.core.lgBusy) || !d.core.doCss()) &&
                  ((d.core.index = b.index()),
                  d.core.slide(d.core.index, !1, !0, !1))
              }, 50)
            }),
            d.core.$el.on('onBeforeSlide.lg.tm', function () {
              d.animateThumb(d.core.index)
            }),
            a(window).on(
              'resize.lg.thumb orientationchange.lg.thumb',
              function () {
                setTimeout(function () {
                  d.animateThumb(d.core.index),
                    (d.thumbOuterWidth = d.$thumbOuter.width())
                }, 200)
              }
            )
        }),
        (c.prototype.setTranslate = function (a) {
          this.core.$outer
            .find('.lg-thumb')
            .css({ transform: 'translate3d(-' + a + 'px, 0px, 0px)' })
        }),
        (c.prototype.animateThumb = function (a) {
          var b = this.core.$outer.find('.lg-thumb')
          if (this.core.s.animateThumb) {
            var c
            switch (this.core.s.currentPagerPosition) {
              case 'left':
                c = 0
                break
              case 'middle':
                c = this.thumbOuterWidth / 2 - this.core.s.thumbWidth / 2
                break
              case 'right':
                c = this.thumbOuterWidth - this.core.s.thumbWidth
            }
            ;(this.left =
              (this.core.s.thumbWidth + this.core.s.thumbMargin) * a - 1 - c),
              this.left > this.thumbTotalWidth - this.thumbOuterWidth &&
                (this.left = this.thumbTotalWidth - this.thumbOuterWidth),
              this.left < 0 && (this.left = 0),
              this.core.lGalleryOn
                ? (b.hasClass('on') ||
                    this.core.$outer
                      .find('.lg-thumb')
                      .css('transition-duration', this.core.s.speed + 'ms'),
                  this.core.doCss() ||
                    b.animate({ left: -this.left + 'px' }, this.core.s.speed))
                : this.core.doCss() || b.css('left', -this.left + 'px'),
              this.setTranslate(this.left)
          }
        }),
        (c.prototype.enableThumbDrag = function () {
          var b = this,
            c = 0,
            d = 0,
            e = !1,
            f = !1,
            g = 0
          b.$thumbOuter.addClass('lg-grab'),
            b.core.$outer
              .find('.lg-thumb')
              .on('mousedown.lg.thumb', function (a) {
                b.thumbTotalWidth > b.thumbOuterWidth &&
                  (a.preventDefault(),
                  (c = a.pageX),
                  (e = !0),
                  (b.core.$outer.scrollLeft += 1),
                  (b.core.$outer.scrollLeft -= 1),
                  (b.thumbClickable = !1),
                  b.$thumbOuter.removeClass('lg-grab').addClass('lg-grabbing'))
              }),
            a(window).on('mousemove.lg.thumb', function (a) {
              e &&
                ((g = b.left),
                (f = !0),
                (d = a.pageX),
                b.$thumbOuter.addClass('lg-dragging'),
                (g -= d - c),
                g > b.thumbTotalWidth - b.thumbOuterWidth &&
                  (g = b.thumbTotalWidth - b.thumbOuterWidth),
                g < 0 && (g = 0),
                b.setTranslate(g))
            }),
            a(window).on('mouseup.lg.thumb', function () {
              f
                ? ((f = !1),
                  b.$thumbOuter.removeClass('lg-dragging'),
                  (b.left = g),
                  Math.abs(d - c) < b.core.s.swipeThreshold &&
                    (b.thumbClickable = !0))
                : (b.thumbClickable = !0),
                e &&
                  ((e = !1),
                  b.$thumbOuter.removeClass('lg-grabbing').addClass('lg-grab'))
            })
        }),
        (c.prototype.enableThumbSwipe = function () {
          var a = this,
            b = 0,
            c = 0,
            d = !1,
            e = 0
          a.core.$outer.find('.lg-thumb').on('touchstart.lg', function (c) {
            a.thumbTotalWidth > a.thumbOuterWidth &&
              (c.preventDefault(),
              (b = c.originalEvent.targetTouches[0].pageX),
              (a.thumbClickable = !1))
          }),
            a.core.$outer.find('.lg-thumb').on('touchmove.lg', function (f) {
              a.thumbTotalWidth > a.thumbOuterWidth &&
                (f.preventDefault(),
                (c = f.originalEvent.targetTouches[0].pageX),
                (d = !0),
                a.$thumbOuter.addClass('lg-dragging'),
                (e = a.left),
                (e -= c - b),
                e > a.thumbTotalWidth - a.thumbOuterWidth &&
                  (e = a.thumbTotalWidth - a.thumbOuterWidth),
                e < 0 && (e = 0),
                a.setTranslate(e))
            }),
            a.core.$outer.find('.lg-thumb').on('touchend.lg', function () {
              a.thumbTotalWidth > a.thumbOuterWidth && d
                ? ((d = !1),
                  a.$thumbOuter.removeClass('lg-dragging'),
                  Math.abs(c - b) < a.core.s.swipeThreshold &&
                    (a.thumbClickable = !0),
                  (a.left = e))
                : (a.thumbClickable = !0)
            })
        }),
        (c.prototype.toogle = function () {
          var a = this
          a.core.s.toogleThumb &&
            (a.core.$outer.addClass('lg-can-toggle'),
            a.$thumbOuter.append(
              '<button type="button" aria-label="Toggle thumbnails" class="lg-toogle-thumb lg-icon"></button>'
            ),
            a.core.$outer.find('.lg-toogle-thumb').on('click.lg', function () {
              a.core.$outer.toggleClass('lg-thumb-open')
            }))
        }),
        (c.prototype.thumbkeyPress = function () {
          var b = this
          a(window).on('keydown.lg.thumb', function (a) {
            38 === a.keyCode
              ? (a.preventDefault(), b.core.$outer.addClass('lg-thumb-open'))
              : 40 === a.keyCode &&
                (a.preventDefault(), b.core.$outer.removeClass('lg-thumb-open'))
          })
        }),
        (c.prototype.destroy = function () {
          this.core.s.thumbnail &&
            this.core.$items.length > 1 &&
            (a(window).off(
              'resize.lg.thumb orientationchange.lg.thumb keydown.lg.thumb'
            ),
            this.$thumbOuter.remove(),
            this.core.$outer.removeClass('lg-has-thumb'))
        }),
        (a.fn.lightGallery.modules.Thumbnail = c)
    })()
  }),
  (function (a, b) {
    'function' == typeof define && define.amd
      ? define(['jquery'], function (a) {
          return b(a)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = b(require('jquery')))
      : b(a.jQuery)
  })(this, function (a) {
    !(function () {
      'use strict'
      function b(a, b, c, d) {
        var e = this
        if (
          (e.core.$slide
            .eq(b)
            .find('.lg-video')
            .append(e.loadVideo(c, 'lg-object', !0, b, d)),
          d)
        )
          if (e.core.s.videojs)
            try {
              videojs(
                e.core.$slide.eq(b).find('.lg-html5').get(0),
                e.core.s.videojsOptions,
                function () {
                  !e.videoLoaded && e.core.s.autoplayFirstVideo && this.play()
                }
              )
            } catch (a) {
              console.error(
                'lightGallery:- Make sure you have included videojs'
              )
            }
          else
            !e.videoLoaded &&
              e.core.s.autoplayFirstVideo &&
              e.core.$slide.eq(b).find('.lg-html5').get(0).play()
      }
      function c(a, b) {
        var c = this.core.$slide.eq(b).find('.lg-video-cont')
        c.hasClass('lg-has-iframe') ||
          (c.css('max-width', this.core.s.videoMaxWidth),
          (this.videoLoaded = !0))
      }
      function d(b, c, d) {
        var e = this,
          f = e.core.$slide.eq(c),
          g = f.find('.lg-youtube').get(0),
          h = f.find('.lg-vimeo').get(0),
          i = f.find('.lg-dailymotion').get(0),
          j = f.find('.lg-vk').get(0),
          k = f.find('.lg-html5').get(0)
        if (g)
          g.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            '*'
          )
        else if (h)
          try {
            new Vimeo.Player(h).pause().catch(function (a) {
              console.error('Unable to pause the video:', a.name)
            })
          } catch (a) {
            console.warn(
              'lightGallery:- Make sure you have included https://github.com/vimeo/player.js'
            )
          }
        else if (i) i.contentWindow.postMessage('pause', '*')
        else if (k)
          if (e.core.s.videojs)
            try {
              videojs(k).pause()
            } catch (a) {
              console.error(
                'lightGallery:- Make sure you have included videojs'
              )
            }
          else k.pause()
        j && a(j).attr('src', a(j).attr('src').replace('&autoplay', '&noplay'))
        var l
        l = e.core.s.dynamic
          ? e.core.s.dynamicEl[d].src
          : e.core.$items.eq(d).attr('href') ||
            e.core.$items.eq(d).attr('data-src')
        var m = e.core.isVideo(l, d) || {}
        ;(m.youtube || m.vimeo || m.dailymotion || m.vk) &&
          e.core.$outer.addClass('lg-hide-download')
      }
      var e = {
          videoMaxWidth: '855px',
          autoplayFirstVideo: !0,
          youtubePlayerParams: !1,
          vimeoPlayerParams: !1,
          dailymotionPlayerParams: !1,
          vkPlayerParams: !1,
          videojs: !1,
          videojsOptions: {},
        },
        f = function (b) {
          return (
            (this.core = a(b).data('lightGallery')),
            (this.$el = a(b)),
            (this.core.s = a.extend({}, e, this.core.s)),
            (this.videoLoaded = !1),
            this.init(),
            this
          )
        }
      ;(f.prototype.init = function () {
        var e = this
        e.core.$el.on('hasVideo.lg.tm', b.bind(this)),
          e.core.$el.on('onAferAppendSlide.lg.tm', c.bind(this)),
          e.core.doCss() &&
          e.core.$items.length > 1 &&
          (e.core.s.enableSwipe || e.core.s.enableDrag)
            ? e.core.$el.on('onSlideClick.lg.tm', function () {
                var a = e.core.$slide.eq(e.core.index)
                e.loadVideoOnclick(a)
              })
            : e.core.$slide.on('click.lg', function () {
                e.loadVideoOnclick(a(this))
              }),
          e.core.$el.on('onBeforeSlide.lg.tm', d.bind(this)),
          e.core.$el.on('onAfterSlide.lg.tm', function (a, b) {
            e.core.$slide.eq(b).removeClass('lg-video-playing')
          }),
          e.core.s.autoplayFirstVideo &&
            e.core.$el.on('onAferAppendSlide.lg.tm', function (a, b) {
              if (!e.core.lGalleryOn) {
                var c = e.core.$slide.eq(b)
                setTimeout(function () {
                  e.loadVideoOnclick(c)
                }, 100)
              }
            })
      }),
        (f.prototype.loadVideo = function (b, c, d, e, f) {
          var g,
            h = this,
            i = '',
            j = 1,
            k = '',
            l = this.core.isVideo(b, e) || {}
          if (
            ((g = h.core.s.dynamic
              ? h.core.s.dynamicEl[h.core.index].title
              : h.core.$items.eq(h.core.index).attr('title') ||
                h.core.$items.eq(h.core.index).find('img').first().attr('alt')),
            (g = g ? 'title="' + g + '"' : ''),
            d &&
              (j = this.videoLoaded
                ? 0
                : this.core.s.autoplayFirstVideo
                ? 1
                : 0),
            l.youtube)
          )
            (k = '?wmode=opaque&autoplay=' + j + '&enablejsapi=1'),
              this.core.s.youtubePlayerParams &&
                (k = k + '&' + a.param(this.core.s.youtubePlayerParams)),
              (i =
                '<iframe allow="autoplay" class="lg-video-object lg-youtube ' +
                c +
                '" ' +
                g +
                ' width="560" height="315" src="//www.youtube.com/embed/' +
                l.youtube[1] +
                k +
                '" frameborder="0" allowfullscreen></iframe>')
          else if (l.vimeo)
            (k = '?autoplay=' + j),
              this.core.s.vimeoPlayerParams &&
                (k = k + '&' + a.param(this.core.s.vimeoPlayerParams)),
              (i =
                '<iframe allow="autoplay" class="lg-video-object lg-vimeo ' +
                c +
                '" ' +
                g +
                ' width="560" height="315"  src="//player.vimeo.com/video/' +
                l.vimeo[1] +
                k +
                '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>')
          else if (l.dailymotion)
            (k = '?wmode=opaque&autoplay=' + j + '&api=postMessage'),
              this.core.s.dailymotionPlayerParams &&
                (k = k + '&' + a.param(this.core.s.dailymotionPlayerParams)),
              (i =
                '<iframe allow="autoplay" class="lg-video-object lg-dailymotion ' +
                c +
                '" ' +
                g +
                ' width="560" height="315" src="//www.dailymotion.com/embed/video/' +
                l.dailymotion[1] +
                k +
                '" frameborder="0" allowfullscreen></iframe>')
          else if (l.html5) {
            var m = f.substring(0, 1)
            ;('.' !== m && '#' !== m) || (f = a(f).html()), (i = f)
          } else
            l.vk &&
              ((k = '&autoplay=' + j),
              this.core.s.vkPlayerParams &&
                (k = k + '&' + a.param(this.core.s.vkPlayerParams)),
              (i =
                '<iframe allow="autoplay" class="lg-video-object lg-vk ' +
                c +
                '" ' +
                g +
                ' width="560" height="315" src="//vk.com/video_ext.php?' +
                l.vk[1] +
                k +
                '" frameborder="0" allowfullscreen></iframe>'))
          return i
        }),
        (f.prototype.loadVideoOnclick = function (a) {
          var b = this
          if (
            a.find('.lg-object').hasClass('lg-has-poster') &&
            a.find('.lg-object').is(':visible')
          )
            if (a.hasClass('lg-has-video')) {
              var c = a.find('.lg-youtube').get(0),
                d = a.find('.lg-vimeo').get(0),
                e = a.find('.lg-dailymotion').get(0),
                f = a.find('.lg-html5').get(0)
              if (c)
                c.contentWindow.postMessage(
                  '{"event":"command","func":"playVideo","args":""}',
                  '*'
                )
              else if (d)
                try {
                  new Vimeo.Player(d).play().catch(function (a) {
                    console.error('error playing the video:', a.name)
                  })
                } catch (a) {
                  console.warn(
                    'lightGallery:- Make sure you have included https://github.com/vimeo/player.js'
                  )
                }
              else if (e) e.contentWindow.postMessage('play', '*')
              else if (f)
                if (b.core.s.videojs)
                  try {
                    videojs(f).play()
                  } catch (a) {
                    console.error(
                      'lightGallery:- Make sure you have included videojs'
                    )
                  }
                else f.play()
              a.addClass('lg-video-playing')
            } else {
              a.addClass('lg-video-playing lg-has-video')
              var g,
                h,
                i = function (c, d) {
                  if (
                    (a
                      .find('.lg-video')
                      .append(b.loadVideo(c, '', !1, b.core.index, d)),
                    d)
                  )
                    if (b.core.s.videojs)
                      try {
                        videojs(
                          b.core.$slide
                            .eq(b.core.index)
                            .find('.lg-html5')
                            .get(0),
                          b.core.s.videojsOptions,
                          function () {
                            this.play()
                          }
                        )
                      } catch (a) {
                        console.error(
                          'lightGallery:- Make sure you have included videojs'
                        )
                      }
                    else
                      b.core.$slide
                        .eq(b.core.index)
                        .find('.lg-html5')
                        .get(0)
                        .play()
                }
              b.core.s.dynamic
                ? ((g = b.core.s.dynamicEl[b.core.index].src),
                  (h = b.core.s.dynamicEl[b.core.index].html),
                  i(g, h))
                : ((g =
                    b.core.$items.eq(b.core.index).attr('href') ||
                    b.core.$items.eq(b.core.index).attr('data-src')),
                  (h = b.core.$items.eq(b.core.index).attr('data-html')),
                  i(g, h))
              var j = a.find('.lg-object')
              a.find('.lg-video').append(j),
                a.find('.lg-video-object').hasClass('lg-html5') ||
                  (a.removeClass('lg-complete'),
                  a
                    .find('.lg-video-object')
                    .on('load.lg error.lg', function () {
                      a.addClass('lg-complete')
                    }))
            }
        }),
        (f.prototype.destroy = function () {
          this.videoLoaded = !1
        }),
        (a.fn.lightGallery.modules.video = f)
    })()
  }),
  (function (a, b) {
    'function' == typeof define && define.amd
      ? define(['jquery'], function (a) {
          return b(a)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = b(require('jquery')))
      : b(a.jQuery)
  })(this, function (a) {
    !(function () {
      'use strict'
      var b = function () {
          var a = !1,
            b = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./)
          return b && parseInt(b[2], 10) < 54 && (a = !0), a
        },
        c = {
          scale: 1,
          zoom: !0,
          actualSize: !0,
          enableZoomAfter: 300,
          useLeftForZoom: b(),
        },
        d = function (b) {
          return (
            (this.core = a(b).data('lightGallery')),
            (this.core.s = a.extend({}, c, this.core.s)),
            this.core.s.zoom &&
              this.core.doCss() &&
              (this.init(),
              (this.zoomabletimeout = !1),
              (this.pageX = a(window).width() / 2),
              (this.pageY = a(window).height() / 2 + a(window).scrollTop())),
            this
          )
        }
      ;(d.prototype.init = function () {
        var b = this,
          c =
            '<button type="button" aria-label="Zoom in" id="lg-zoom-in" class="lg-icon"></button><button type="button" aria-label="Zoom out" id="lg-zoom-out" class="lg-icon"></button>'
        b.core.s.actualSize &&
          (c +=
            '<button type="button" aria-label="Actual size" id="lg-actual-size" class="lg-icon"></button>'),
          b.core.s.useLeftForZoom
            ? b.core.$outer.addClass('lg-use-left-for-zoom')
            : b.core.$outer.addClass('lg-use-transition-for-zoom'),
          this.core.$outer.find('.lg-toolbar').append(c),
          b.core.$el.on('onSlideItemLoad.lg.tm.zoom', function (c, d, e) {
            var f = b.core.s.enableZoomAfter + e
            a('body').hasClass('lg-from-hash') && e
              ? (f = 0)
              : a('body').removeClass('lg-from-hash'),
              (b.zoomabletimeout = setTimeout(function () {
                b.core.$slide.eq(d).addClass('lg-zoomable')
              }, f + 30))
          })
        var d = 1,
          e = function (c) {
            var d,
              e,
              f = b.core.$outer.find('.lg-current .lg-image'),
              g = (a(window).width() - f.prop('offsetWidth')) / 2,
              h =
                (a(window).height() - f.prop('offsetHeight')) / 2 +
                a(window).scrollTop()
            ;(d = b.pageX - g), (e = b.pageY - h)
            var i = (c - 1) * d,
              j = (c - 1) * e
            f
              .css('transform', 'scale3d(' + c + ', ' + c + ', 1)')
              .attr('data-scale', c),
              b.core.s.useLeftForZoom
                ? f
                    .parent()
                    .css({ left: -i + 'px', top: -j + 'px' })
                    .attr('data-x', i)
                    .attr('data-y', j)
                : f
                    .parent()
                    .css(
                      'transform',
                      'translate3d(-' + i + 'px, -' + j + 'px, 0)'
                    )
                    .attr('data-x', i)
                    .attr('data-y', j)
          },
          f = function () {
            d > 1 ? b.core.$outer.addClass('lg-zoomed') : b.resetZoom(),
              d < 1 && (d = 1),
              e(d)
          },
          g = function (c, e, g, h) {
            var i,
              j = e.prop('offsetWidth')
            i = b.core.s.dynamic
              ? b.core.s.dynamicEl[g].width || e[0].naturalWidth || j
              : b.core.$items.eq(g).attr('data-width') || e[0].naturalWidth || j
            var k
            b.core.$outer.hasClass('lg-zoomed')
              ? (d = 1)
              : i > j && ((k = i / j), (d = k || 2)),
              h
                ? ((b.pageX = a(window).width() / 2),
                  (b.pageY = a(window).height() / 2 + a(window).scrollTop()))
                : ((b.pageX =
                    c.pageX || c.originalEvent.targetTouches[0].pageX),
                  (b.pageY =
                    c.pageY || c.originalEvent.targetTouches[0].pageY)),
              f(),
              setTimeout(function () {
                b.core.$outer.removeClass('lg-grabbing').addClass('lg-grab')
              }, 10)
          },
          h = !1
        b.core.$el.on('onAferAppendSlide.lg.tm.zoom', function (a, c) {
          var d = b.core.$slide.eq(c).find('.lg-image')
          d.on('dblclick', function (a) {
            g(a, d, c)
          }),
            d.on('touchstart', function (a) {
              h
                ? (clearTimeout(h), (h = null), g(a, d, c))
                : (h = setTimeout(function () {
                    h = null
                  }, 300)),
                a.preventDefault()
            })
        }),
          a(window).on(
            'resize.lg.zoom scroll.lg.zoom orientationchange.lg.zoom',
            function () {
              ;(b.pageX = a(window).width() / 2),
                (b.pageY = a(window).height() / 2 + a(window).scrollTop()),
                e(d)
            }
          ),
          a('#lg-zoom-out').on('click.lg', function () {
            b.core.$outer.find('.lg-current .lg-image').length &&
              ((d -= b.core.s.scale), f())
          }),
          a('#lg-zoom-in').on('click.lg', function () {
            b.core.$outer.find('.lg-current .lg-image').length &&
              ((d += b.core.s.scale), f())
          }),
          a('#lg-actual-size').on('click.lg', function (a) {
            g(
              a,
              b.core.$slide.eq(b.core.index).find('.lg-image'),
              b.core.index,
              !0
            )
          }),
          b.core.$el.on('onBeforeSlide.lg.tm', function () {
            ;(d = 1), b.resetZoom()
          }),
          b.zoomDrag(),
          b.zoomSwipe()
      }),
        (d.prototype.getCurrentTransform = function (a) {
          if (!a) return 0
          var b = window.getComputedStyle(a, null),
            c =
              b.getPropertyValue('-webkit-transform') ||
              b.getPropertyValue('-moz-transform') ||
              b.getPropertyValue('-ms-transform') ||
              b.getPropertyValue('-o-transform') ||
              b.getPropertyValue('transform') ||
              'none'
          return 'none' !== c ? c.split('(')[1].split(')')[0].split(',') : 0
        }),
        (d.prototype.getCurrentRotation = function (a) {
          if (!a) return 0
          var b = this.getCurrentTransform(a)
          return b ? Math.round(Math.atan2(b[1], b[0]) * (180 / Math.PI)) : 0
        }),
        (d.prototype.getModifier = function (a, b, c) {
          var d = a
          a = Math.abs(a)
          var e = this.getCurrentTransform(c)
          if (!e) return 1
          var f = 1
          if ('X' === b) {
            var g = Math.sign(parseFloat(e[0]))
            0 === a || 180 === a
              ? (f = 1)
              : 90 === a &&
                (f = (-90 === d && 1 === g) || (90 === d && -1 === g) ? -1 : 1),
              (f *= g)
          } else {
            var h = Math.sign(parseFloat(e[3]))
            if (0 === a || 180 === a) f = 1
            else if (90 === a) {
              var i = parseFloat(e[1]),
                j = parseFloat(e[2])
              f = Math.sign(i * j * d * h)
            }
            f *= h
          }
          return f
        }),
        (d.prototype.getImageSize = function (a, b, c) {
          var d = { y: 'offsetHeight', x: 'offsetWidth' }
          return 90 === b && (c = 'x' === c ? 'y' : 'x'), a.prop(d[c])
        }),
        (d.prototype.getDragCords = function (a, b) {
          return 90 === b
            ? { x: a.pageY, y: a.pageX }
            : { x: a.pageX, y: a.pageY }
        }),
        (d.prototype.getSwipeCords = function (a, b) {
          var c = a.originalEvent.targetTouches[0].pageX,
            d = a.originalEvent.targetTouches[0].pageY
          return 90 === b ? { x: d, y: c } : { x: c, y: d }
        }),
        (d.prototype.getPossibleDragCords = function (a, b) {
          var c =
              (this.core.$outer.find('.lg').height() -
                this.getImageSize(a, b, 'y')) /
              2,
            d = Math.abs(
              this.getImageSize(a, b, 'y') * Math.abs(a.attr('data-scale')) -
                this.core.$outer.find('.lg').height() +
                c
            ),
            e =
              (this.core.$outer.find('.lg').width() -
                this.getImageSize(a, b, 'x')) /
              2,
            f = Math.abs(
              this.getImageSize(a, b, 'x') * Math.abs(a.attr('data-scale')) -
                this.core.$outer.find('.lg').width() +
                e
            )
          return 90 === b
            ? { minY: e, maxY: f, minX: c, maxX: d }
            : { minY: c, maxY: d, minX: e, maxX: f }
        }),
        (d.prototype.getDragAllowedAxises = function (a, b) {
          var c =
              this.getImageSize(a, b, 'y') * a.attr('data-scale') >
              this.core.$outer.find('.lg').height(),
            d =
              this.getImageSize(a, b, 'x') * a.attr('data-scale') >
              this.core.$outer.find('.lg').width()
          return 90 === b ? { allowX: c, allowY: d } : { allowX: d, allowY: c }
        }),
        (d.prototype.resetZoom = function () {
          this.core.$outer.removeClass('lg-zoomed'),
            this.core.$slide
              .find('.lg-img-wrap')
              .removeAttr('style data-x data-y'),
            this.core.$slide.find('.lg-image').removeAttr('style data-scale'),
            (this.pageX = a(window).width() / 2),
            (this.pageY = a(window).height() / 2 + a(window).scrollTop())
        }),
        (d.prototype.zoomSwipe = function () {
          var a,
            b = this,
            c = {},
            d = {},
            e = !1,
            f = !1,
            g = !1,
            h = 0
          b.core.$slide.on('touchstart.lg', function (d) {
            if (b.core.$outer.hasClass('lg-zoomed')) {
              var e = b.core.$slide.eq(b.core.index).find('.lg-object')
              ;(a = b.core.$slide.eq(b.core.index).find('.lg-img-rotate')[0]),
                (h = b.getCurrentRotation(a))
              var i = b.getDragAllowedAxises(e, Math.abs(h))
              ;(g = i.allowY),
                (f = i.allowX),
                (f || g) &&
                  (d.preventDefault(), (c = b.getSwipeCords(d, Math.abs(h))))
            }
          }),
            b.core.$slide.on('touchmove.lg', function (i) {
              if (b.core.$outer.hasClass('lg-zoomed')) {
                var j,
                  k,
                  l = b.core.$slide.eq(b.core.index).find('.lg-img-wrap')
                i.preventDefault(),
                  (e = !0),
                  (d = b.getSwipeCords(i, Math.abs(h))),
                  b.core.$outer.addClass('lg-zoom-dragging'),
                  (k = g
                    ? -Math.abs(l.attr('data-y')) +
                      (d.y - c.y) * b.getModifier(h, 'Y', a)
                    : -Math.abs(l.attr('data-y'))),
                  (j = f
                    ? -Math.abs(l.attr('data-x')) +
                      (d.x - c.x) * b.getModifier(h, 'X', a)
                    : -Math.abs(l.attr('data-x'))),
                  (Math.abs(d.x - c.x) > 15 || Math.abs(d.y - c.y) > 15) &&
                    (b.core.s.useLeftForZoom
                      ? l.css({ left: j + 'px', top: k + 'px' })
                      : l.css(
                          'transform',
                          'translate3d(' + j + 'px, ' + k + 'px, 0)'
                        ))
              }
            }),
            b.core.$slide.on('touchend.lg', function () {
              b.core.$outer.hasClass('lg-zoomed') &&
                e &&
                ((e = !1),
                b.core.$outer.removeClass('lg-zoom-dragging'),
                b.touchendZoom(c, d, f, g, h))
            })
        }),
        (d.prototype.zoomDrag = function () {
          var b,
            c = this,
            d = {},
            e = {},
            f = !1,
            g = !1,
            h = !1,
            i = !1,
            j = 0
          c.core.$slide.on('mousedown.lg.zoom', function (e) {
            ;(b = c.core.$slide.eq(c.core.index).find('.lg-img-rotate')[0]),
              (j = c.getCurrentRotation(b))
            var g = c.core.$slide.eq(c.core.index).find('.lg-object'),
              k = c.getDragAllowedAxises(g, Math.abs(j))
            ;(i = k.allowY),
              (h = k.allowX),
              c.core.$outer.hasClass('lg-zoomed') &&
                a(e.target).hasClass('lg-object') &&
                (h || i) &&
                (e.preventDefault(),
                (d = c.getDragCords(e, Math.abs(j))),
                (f = !0),
                (c.core.$outer.scrollLeft += 1),
                (c.core.$outer.scrollLeft -= 1),
                c.core.$outer.removeClass('lg-grab').addClass('lg-grabbing'))
          }),
            a(window).on('mousemove.lg.zoom', function (a) {
              if (f) {
                var k,
                  l,
                  m = c.core.$slide.eq(c.core.index).find('.lg-img-wrap')
                ;(g = !0),
                  (e = c.getDragCords(a, Math.abs(j))),
                  c.core.$outer.addClass('lg-zoom-dragging'),
                  (l = i
                    ? -Math.abs(m.attr('data-y')) +
                      (e.y - d.y) * c.getModifier(j, 'Y', b)
                    : -Math.abs(m.attr('data-y'))),
                  (k = h
                    ? -Math.abs(m.attr('data-x')) +
                      (e.x - d.x) * c.getModifier(j, 'X', b)
                    : -Math.abs(m.attr('data-x'))),
                  c.core.s.useLeftForZoom
                    ? m.css({ left: k + 'px', top: l + 'px' })
                    : m.css(
                        'transform',
                        'translate3d(' + k + 'px, ' + l + 'px, 0)'
                      )
              }
            }),
            a(window).on('mouseup.lg.zoom', function (a) {
              f &&
                ((f = !1),
                c.core.$outer.removeClass('lg-zoom-dragging'),
                !g ||
                  (d.x === e.x && d.y === e.y) ||
                  ((e = c.getDragCords(a, Math.abs(j))),
                  c.touchendZoom(d, e, h, i, j)),
                (g = !1)),
                c.core.$outer.removeClass('lg-grabbing').addClass('lg-grab')
            })
        }),
        (d.prototype.touchendZoom = function (a, b, c, d, e) {
          var f = this,
            g = f.core.$slide.eq(f.core.index).find('.lg-img-wrap'),
            h = f.core.$slide.eq(f.core.index).find('.lg-object'),
            i = f.core.$slide.eq(f.core.index).find('.lg-img-rotate')[0],
            j =
              -Math.abs(g.attr('data-x')) +
              (b.x - a.x) * f.getModifier(e, 'X', i),
            k =
              -Math.abs(g.attr('data-y')) +
              (b.y - a.y) * f.getModifier(e, 'Y', i),
            l = f.getPossibleDragCords(h, Math.abs(e))
          ;(Math.abs(b.x - a.x) > 15 || Math.abs(b.y - a.y) > 15) &&
            (d &&
              (k <= -l.maxY ? (k = -l.maxY) : k >= -l.minY && (k = -l.minY)),
            c && (j <= -l.maxX ? (j = -l.maxX) : j >= -l.minX && (j = -l.minX)),
            d
              ? g.attr('data-y', Math.abs(k))
              : (k = -Math.abs(g.attr('data-y'))),
            c
              ? g.attr('data-x', Math.abs(j))
              : (j = -Math.abs(g.attr('data-x'))),
            f.core.s.useLeftForZoom
              ? g.css({ left: j + 'px', top: k + 'px' })
              : g.css('transform', 'translate3d(' + j + 'px, ' + k + 'px, 0)'))
        }),
        (d.prototype.destroy = function () {
          var b = this
          b.core.$el.off('.lg.zoom'),
            a(window).off('.lg.zoom'),
            b.core.$slide.off('.lg.zoom'),
            b.core.$el.off('.lg.tm.zoom'),
            b.resetZoom(),
            clearTimeout(b.zoomabletimeout),
            (b.zoomabletimeout = !1)
        }),
        (a.fn.lightGallery.modules.zoom = d)
    })()
  }),
  (function (a, b) {
    'function' == typeof define && define.amd
      ? define(['jquery'], function (a) {
          return b(a)
        })
      : 'object' == typeof exports
      ? (module.exports = b(require('jquery')))
      : b(jQuery)
  })(0, function (a) {
    !(function () {
      'use strict'
      var b = { hash: !0 },
        c = function (c) {
          return (
            (this.core = a(c).data('lightGallery')),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.hash &&
              ((this.oldHash = window.location.hash), this.init()),
            this
          )
        }
      ;(c.prototype.init = function () {
        var b,
          c = this
        c.core.$el.on('onAfterSlide.lg.tm', function (a, b, d) {
          history.replaceState
            ? history.replaceState(
                null,
                null,
                window.location.pathname +
                  window.location.search +
                  '#lg=' +
                  c.core.s.galleryId +
                  '&slide=' +
                  d
              )
            : (window.location.hash =
                'lg=' + c.core.s.galleryId + '&slide=' + d)
        }),
          a(window).on('hashchange.lg.hash', function () {
            b = window.location.hash
            var a = parseInt(b.split('&slide=')[1], 10)
            b.indexOf('lg=' + c.core.s.galleryId) > -1
              ? c.core.slide(a, !1, !1)
              : c.core.lGalleryOn && c.core.destroy()
          })
      }),
        (c.prototype.destroy = function () {
          this.core.s.hash &&
            (this.oldHash &&
            this.oldHash.indexOf('lg=' + this.core.s.galleryId) < 0
              ? history.replaceState
                ? history.replaceState(null, null, this.oldHash)
                : (window.location.hash = this.oldHash)
              : history.replaceState
              ? history.replaceState(
                  null,
                  document.title,
                  window.location.pathname + window.location.search
                )
              : (window.location.hash = ''),
            this.core.$el.off('.lg.hash'))
        }),
        (a.fn.lightGallery.modules.hash = c)
    })()
  }),
  (function (a, b) {
    'function' == typeof define && define.amd
      ? define(['jquery'], function (a) {
          return b(a)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = b(require('jquery')))
      : b(a.jQuery)
  })(this, function (a) {
    !(function () {
      'use strict'
      var b = {
          share: !0,
          facebook: !0,
          facebookDropdownText: 'Facebook',
          twitter: !0,
          twitterDropdownText: 'Twitter',
          googlePlus: !0,
          googlePlusDropdownText: 'GooglePlus',
          pinterest: !0,
          pinterestDropdownText: 'Pinterest',
        },
        c = function (c) {
          return (
            (this.core = a(c).data('lightGallery')),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.share && this.init(),
            this
          )
        }
      ;(c.prototype.init = function () {
        var b = this,
          c =
            '<button type="button" aria-label="Share" id="lg-share" class="lg-icon" aria-haspopup="true" aria-expanded="false"><ul class="lg-dropdown" style="position: absolute;">'
        ;(c += b.core.s.facebook
          ? '<li><a id="lg-share-facebook" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
            this.core.s.facebookDropdownText +
            '</span></a></li>'
          : ''),
          (c += b.core.s.twitter
            ? '<li><a id="lg-share-twitter" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.twitterDropdownText +
              '</span></a></li>'
            : ''),
          (c += b.core.s.googlePlus
            ? '<li><a id="lg-share-googleplus" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.googlePlusDropdownText +
              '</span></a></li>'
            : ''),
          (c += b.core.s.pinterest
            ? '<li><a id="lg-share-pinterest" target="_blank"><span class="lg-icon"></span><span class="lg-dropdown-text">' +
              this.core.s.pinterestDropdownText +
              '</span></a></li>'
            : ''),
          (c += '</ul></button>'),
          this.core.$outer.find('.lg-toolbar').append(c),
          this.core.$outer
            .find('.lg')
            .append('<div id="lg-dropdown-overlay"></div>'),
          a('#lg-share').on('click.lg', function () {
            b.core.$outer.toggleClass('lg-dropdown-active')
            var c = a('#lg-share').attr('aria-expanded')
            a('#lg-share').attr('aria-expanded', 'true' !== c)
          }),
          a('#lg-dropdown-overlay').on('click.lg', function () {
            b.core.$outer.removeClass('lg-dropdown-active'),
              a('#lg-share').attr('aria-expanded', !1)
          }),
          b.core.$el.on('onAfterSlide.lg.tm', function (c, d, e) {
            setTimeout(function () {
              a('#lg-share-facebook').attr(
                'href',
                'https://www.facebook.com/sharer/sharer.php?u=' +
                  encodeURIComponent(
                    b.getSahreProps(e, 'facebookShareUrl') ||
                      window.location.href
                  )
              ),
                a('#lg-share-twitter').attr(
                  'href',
                  'https://twitter.com/intent/tweet?text=' +
                    b.getSahreProps(e, 'tweetText') +
                    '&url=' +
                    encodeURIComponent(
                      b.getSahreProps(e, 'twitterShareUrl') ||
                        window.location.href
                    )
                ),
                a('#lg-share-googleplus').attr(
                  'href',
                  'https://plus.google.com/share?url=' +
                    encodeURIComponent(
                      b.getSahreProps(e, 'googleplusShareUrl') ||
                        window.location.href
                    )
                ),
                a('#lg-share-pinterest').attr(
                  'href',
                  'http://www.pinterest.com/pin/create/button/?url=' +
                    encodeURIComponent(
                      b.getSahreProps(e, 'pinterestShareUrl') ||
                        window.location.href
                    ) +
                    '&media=' +
                    encodeURIComponent(b.getSahreProps(e, 'src')) +
                    '&description=' +
                    b.getSahreProps(e, 'pinterestText')
                )
            }, 100)
          })
      }),
        (c.prototype.getSahreProps = function (a, b) {
          var c = ''
          if (this.core.s.dynamic) c = this.core.s.dynamicEl[a][b]
          else {
            var d = this.core.$items.eq(a).attr('href'),
              e = this.core.$items.eq(a).data(b)
            c = 'src' === b ? d || e : e
          }
          return c
        }),
        (c.prototype.destroy = function () {}),
        (a.fn.lightGallery.modules.share = c)
    })()
  }),
  (function (a, b) {
    'function' == typeof define && define.amd
      ? define(['jquery'], function (a) {
          return b(a)
        })
      : 'object' == typeof module && module.exports
      ? (module.exports = b(require('jquery')))
      : b(a.jQuery)
  })(this, function (a) {
    !(function () {
      'use strict'
      var b = {
          rotate: !0,
          rotateLeft: !0,
          rotateRight: !0,
          flipHorizontal: !0,
          flipVertical: !0,
        },
        c = function (c) {
          return (
            (this.core = a(c).data('lightGallery')),
            (this.core.s = a.extend({}, b, this.core.s)),
            this.core.s.rotate && this.core.doCss() && this.init(),
            this
          )
        }
      ;(c.prototype.buildTemplates = function () {
        var a = ''
        this.core.s.flipVertical &&
          (a +=
            '<button aria-label="Flip vertical" class="lg-flip-ver lg-icon"></button>'),
          this.core.s.flipHorizontal &&
            (a +=
              '<button aria-label="flip horizontal" class="lg-flip-hor lg-icon"></button>'),
          this.core.s.rotateLeft &&
            (a +=
              '<button aria-label="Rotate left" class="lg-rotate-left lg-icon"></button>'),
          this.core.s.rotateRight &&
            (a +=
              '<button aria-label="Rotate right" class="lg-rotate-right lg-icon"></button>'),
          this.core.$outer.find('.lg-toolbar').append(a)
      }),
        (c.prototype.init = function () {
          var a = this
          this.buildTemplates(),
            (this.rotateValuesList = {}),
            this.core.$el.on('onAferAppendSlide.lg.tm.rotate', function (b, c) {
              a.core.$slide
                .eq(c)
                .find('.lg-img-wrap')
                .wrap('<div class="lg-img-rotate"></div>')
            }),
            this.core.$outer
              .find('.lg-rotate-left')
              .on('click.lg', this.rotateLeft.bind(this)),
            this.core.$outer
              .find('.lg-rotate-right')
              .on('click.lg', this.rotateRight.bind(this)),
            this.core.$outer
              .find('.lg-flip-hor')
              .on('click.lg', this.flipHorizontal.bind(this)),
            this.core.$outer
              .find('.lg-flip-ver')
              .on('click.lg', this.flipVertical.bind(this)),
            this.core.$el.on('onBeforeSlide.lg.tm.rotate', function (b, c, d) {
              a.rotateValuesList[d] ||
                (a.rotateValuesList[d] = {
                  rotate: 0,
                  flipHorizontal: 1,
                  flipVertical: 1,
                })
            })
        }),
        (c.prototype.applyStyles = function () {
          this.core.$slide
            .eq(this.core.index)
            .find('.lg-img-rotate')
            .css(
              'transform',
              'rotate(' +
                this.rotateValuesList[this.core.index].rotate +
                'deg) scale3d(' +
                this.rotateValuesList[this.core.index].flipHorizontal +
                ', ' +
                this.rotateValuesList[this.core.index].flipVertical +
                ', 1)'
            )
        }),
        (c.prototype.getCurrentRotation = function (a) {
          if (!a) return 0
          var b = window.getComputedStyle(a, null),
            c =
              b.getPropertyValue('-webkit-transform') ||
              b.getPropertyValue('-moz-transform') ||
              b.getPropertyValue('-ms-transform') ||
              b.getPropertyValue('-o-transform') ||
              b.getPropertyValue('transform') ||
              'none'
          if ('none' !== c) {
            var d = c.split('(')[1].split(')')[0].split(',')
            if (d) {
              var e = Math.round(Math.atan2(d[1], d[0]) * (180 / Math.PI))
              return e < 0 ? e + 360 : e
            }
          }
          return 0
        }),
        (c.prototype.rotateLeft = function () {
          ;(this.rotateValuesList[this.core.index].rotate -= 90),
            this.applyStyles()
        }),
        (c.prototype.rotateRight = function () {
          ;(this.rotateValuesList[this.core.index].rotate += 90),
            this.applyStyles()
        }),
        (c.prototype.flipHorizontal = function () {
          var a = this.core.$slide
              .eq(this.core.index)
              .find('.lg-img-rotate')[0],
            b = this.getCurrentRotation(a),
            c = 'flipHorizontal'
          ;(90 !== b && 270 !== b) || (c = 'flipVertical'),
            (this.rotateValuesList[this.core.index][c] *= -1),
            this.applyStyles()
        }),
        (c.prototype.flipVertical = function () {
          var a = this.core.$slide
              .eq(this.core.index)
              .find('.lg-img-rotate')[0],
            b = this.getCurrentRotation(a),
            c = 'flipVertical'
          ;(90 !== b && 270 !== b) || (c = 'flipHorizontal'),
            (this.rotateValuesList[this.core.index][c] *= -1),
            this.applyStyles()
        }),
        (c.prototype.destroy = function () {
          this.core.$el.off('.lg.tm.rotate'), (this.rotateValuesList = {})
        }),
        (a.fn.lightGallery.modules.rotate = c)
    })()
  })



/* ========================
	custom.js
========================= */
var JobBoard = (function () {
  siteUrl = ''
  var e = $(window).width()
  function t(e, t, r) {
    var i = new Date()
    i.setTime(i.getTime() + 18e5)
    var a = 'expires=' + i.toString()
    document.cookie = e + '=' + t + ';' + a + ';path=/'
  }
  var r = function () {
      'use strict'
      jQuery('.dzload').each(function () {
        var e = siteUrl + $(this).attr('dzsrc')
        jQuery(this).hide(function () {
          jQuery(this).load(e, function () {
            jQuery(this).fadeIn('slow')
          })
        })
      }),
        e <= 991 &&
          jQuery('.navbar-nav > li > a, .sub-menu > li > a')
            .unbind()
            .on('click', function (e) {
              jQuery(this).parent().hasClass('open')
                ? jQuery(this).parent().removeClass('open')
                : (jQuery(this)
                    .parent()
                    .parent()
                    .find('li')
                    .removeClass('open'),
                  jQuery(this).parent().addClass('open'))
            })
    },
    i = function () {
      $('.openbtn').on('click', function (e) {
        e.preventDefault(),
          $('#mySidenav').length > 0 &&
            (document.getElementById('mySidenav').style.left = '0'),
          $('#mySidenav1').length > 0 &&
            (document.getElementById('mySidenav1').style.right = '0')
      }),
        $('.closebtn').on('click', function (e) {
          e.preventDefault(),
            $('#mySidenav').length > 0 &&
              (document.getElementById('mySidenav').style.left = '-300px'),
            $('#mySidenav1').length > 0 &&
              (document.getElementById('mySidenav1').style.right = '-820px')
        })
    },
    a = function () {
      $('.header-nav li')
        .unbind()
        .each(function (e) {
          if ($('ul', this).length) {
            var t = $('ul:first', this),
              r = t.offset().right,
              i = t.width()
            $('body').height()
            r + i <= $('body').width()
              ? $(this).find('.sub-menu:first').removeClass('right')
              : $(this).find('.sub-menu:first').addClass('right')
          }
        })
    },
    n = function () {
      'use strict'
      var e = jQuery(this),
        t = e.find('.modal-dialog')
      e.css('display', 'block'),
        t.css(
          'margin-top',
          Math.max(0, (jQuery(window).height() - t.height()) / 2)
        )
    },
    o = function () {
      if (
        void 0 ===
        (e = (function (e) {
          var t,
            r,
            i = window.location.search.substring(1).split('&')
          for (r = 0; r < i.length; r++)
            if ((t = i[r].split('='))[0] === e)
              return void 0 === t[1] || decodeURIComponent(t[1])
        })('version'))
      )
        var e = (function (e) {
          for (
            var t = e + '=',
              r = decodeURIComponent(document.cookie).split(';'),
              i = 0;
            i < r.length;
            i++
          ) {
            for (var a = r[i]; ' ' == a.charAt(0); ) a = a.substring(1)
            if (0 == a.indexOf(t)) return a.substring(t.length, a.length)
          }
          return ''
        })('version')
      'dark' == e
        ? (jQuery('.layout-btn').addClass('active'),
          jQuery('.layout-btn input').attr('checked', 'checked'),
          jQuery('body').addClass('dark-theme'))
        : (jQuery('.layout-btn').removeClass('active'),
          jQuery('body').removeClass('dark-theme'),
          jQuery('.layout-btn input').removeAttr('checked', 'checked')),
        jQuery('.layout-btn').length &&
          jQuery('.layout-btn').on('click', function () {
            jQuery(this).toggleClass('active'),
              jQuery(this).hasClass('active')
                ? (jQuery('body').addClass('dark-theme'), t('version', 'dark'))
                : (jQuery('body').removeClass('dark-theme'),
                  t('version', 'light'))
                })
    }
    
  return {
    init: function () {
      $('.wow').length > 0 &&
        new WOW({
          boxClass: 'wow',
          animateClass: 'animated',
          offset: 50,
          mobile: !1,
        }).init(),
        (function () {
          'use strict'
          var e = parseInt($('.onepage').css('height'), 10)
          $('.scroll')
            .unbind()
            .on('click', function (e) {
              if ((e.preventDefault(), '' !== this.hash)) {
                var t = this.hash,
                  r = $(t).offset().top,
                  i = parseInt($('.onepage').css('height'), 10)
                $('body').scrollspy({ target: '.navbar', offset: i + 2 })
                var a = r - i
                $('html, body').animate({ scrollTop: a }, 800, function () {})
              }
            }),
            jQuery('.scroll-bar').length > 0 &&
              $('.scroll-bar')
                .unbind()
                .on('click', function (e) {
                  if ((e.preventDefault(), '' !== this.hash)) {
                    var t = this.hash,
                      r = $(t).offset().top,
                      i = parseInt($('.onepage').css('height'), 10)
                    $('body').scrollspy({ target: '.navbar', offset: i + 2 })
                    var a = r - i + 500
                    $('html, body').animate(
                      { scrollTop: a },
                      800,
                      function () {}
                    )
                  }
                }),
            $('body').scrollspy({ target: '.navbar', offset: e + 2 })
        })(),
        r(),
        (function () {
          'use strict'
          jQuery('.mfp-gallery').magnificPopup({
            delegate: '.mfp-link',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: { enabled: !0, navigateByImgClick: !0, preload: [0, 1] },
            image: {
              tError:
                '<a href="%url%">The image #%curr%</a> could not be loaded.',
              titleSrc: function (e) {
                return e.el.attr('title') + '<small></small>'
              },
            },
          }),
            jQuery('.video').magnificPopup({
              type: 'iframe',
              iframe: {
                markup:
                  '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title">Some caption</div></div>',
              },
              callbacks: {
                markupParse: function (e, t, r) {
                  t.title = r.el.attr('title')
                },
              },
            }),
            $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
              disableOn: 700,
              type: 'iframe',
              mainClass: 'mfp-fade',
              removalDelay: 160,
              preloader: !1,
              fixedContentPos: !1,
            })
        })(),
        (function () {
          'use strict'
          jQuery('button.scroltop').on('click', function () {
            return jQuery('html, body').animate({ scrollTop: 0 }, 1e3), !1
          }),
            jQuery(window).bind('scroll', function () {
              jQuery(window).scrollTop() > 900
                ? jQuery('button.scroltop').fadeIn(1e3)
                : jQuery('button.scroltop').fadeOut(1e3)
            })
        })(),
        (jQuery.support.placeholder =
          'placeholder' in document.createElement('input')),
        jQuery.support.placeholder ||
          (jQuery('[placeholder]')
            .focus(function () {
              jQuery(this).val() == jQuery(this).attr('placeholder') &&
                jQuery(this).val('')
            })
            .blur(function () {
              '' == jQuery(this).val() &&
                jQuery(this).val(jQuery(this).attr('placeholder'))
            })
            .blur(),
          jQuery('[placeholder]')
            .parents('form')
            .submit(function () {
              jQuery(this)
                .find('[placeholder]')
                .each(function () {
                  jQuery(this).val() == jQuery(this).attr('placeholder') &&
                    jQuery(this).val('')
                })
            })),
        jQuery('.dezPlaceAni').length &&
          ($('input, textarea').focus(function () {
            $(this).parents('.form-group').addClass('focused')
          }),
          $('input, textarea').blur(function () {
            '' == $(this).val()
              ? ($(this).removeClass('filled'),
                $(this).parents('.form-group').removeClass('focused'))
              : $(this).addClass('filled')
          })),
        (function () {
          'use strict'
          jQuery('.site-footer').css('display', 'block'),
            jQuery('.site-footer').css('height', 'auto')
          var e = jQuery('.site-footer').outerHeight()
          jQuery('.footer-fixed > .page-wraper').css('padding-bottom', e),
            jQuery('.site-footer').css('height', e)
        })(),
        (function () {
          'use strict'
          jQuery(document).on('change', '.btn-file :file', function () {
            var e = jQuery(this),
              t = e.get(0).files ? e.get(0).files.length : 1,
              r = e.val().replace(/\\/g, '/').replace(/.*\//, '')
            e.trigger('fileselect', [t, r])
          }),
            jQuery('.btn-file :file').on('fileselect', function (e, t, r) {
              input = jQuery(this).parents('.input-group').find(':text')
              var i = t > 10 ? t + ' files selected' : r
              input.length ? input.val(i) : i && alert(i)
            })
        })(),
        jQuery('iframe[src*="youtube.com"]').wrap(
          '<div class="embed-responsive embed-responsive-16by9"></div>'
        ),
        jQuery('iframe[src*="vimeo.com"]').wrap(
          '<div class="embed-responsive embed-responsive-16by9"></div>'
        ),
        jQuery('#image-gallery-mix').length &&
          (jQuery('.gallery-filter')
            .find('li')
            .each(function () {
              $(this).addClass('filter')
            }),
          jQuery('#image-gallery-mix').mixItUp()),
        jQuery('.gallery-filter.masonary').length &&
          jQuery('.gallery-filter.masonary').on('click', 'span', function () {
            var e = $(this).parent().attr('data-filter')
            return (
              jQuery('.gallery-filter.masonary span')
                .parent()
                .removeClass('active'),
              jQuery(this).parent().addClass('active'),
              jQuery('#image-gallery-isotope').isotope({ filter: e }),
              !1
            )
          }),
        i(),
        (function () {
          'use strict'
          jQuery(window).on('scroll', function () {
            if (jQuery('.sticky-header').length > 0) {
              var e = jQuery('.sticky-header')
              $(window).scrollTop() > e.offset().top
                ? e.addClass('is-fixed')
                : e.removeClass('is-fixed')
            }
          })
        })(),
        o(),
        jQuery('.repeater').length &&
          $('.repeater').repeater({
            repeaters: [{ selector: '.inner-repeater' }],
          }),
        jQuery('.nav-link').length &&
          jQuery('.nav-link').on('click', function () {
            jQuery('.nav-link').removeClass('active'),
              jQuery(this).addClass('active')
          }),
        $('#lightgallery, .lightgallery').length > 0 &&
          $('#lightgallery, .lightgallery').lightGallery({
            selector: '.lightimg',
            loop: !0,
            thumbnail: !0,
            exThumbImage: 'data-exthumbimage',
            download: !1,
            share: !1,
          }),
        $('.content-scroll').length > 0 &&
          $('.content-scroll').mCustomScrollbar({
            setWidth: !1,
            setHeight: !1,
            axis: 'y',
          }),
        jQuery('.selectAllCheckBox').length &&
          $('.selectAllCheckBox').click(function (e) {
            var t = $(e.target).closest('table')
            $('td input:checkbox', t).prop('checked', this.checked)
          }),
        jQuery('.modal').on('show.bs.modal', n),
        $('[data-toggle="tooltip"]').tooltip()
    },
    load: function () {
      jQuery('select').length && jQuery('select').selectpicker(),
        jQuery('.counter').length &&
          jQuery('.counter').counterUp({ delay: 10, time: 3e3 }),
        a(),
        (function () {
          'use strict'
          if (jQuery('#masonry, .masonry').length) {
            var e = $('#masonry, .masonry')
            jQuery('.card-container').length &&
              e.imagesLoaded(function () {
                e.masonry({
                  gutterWidth: 15,
                  isAnimated: !0,
                  itemSelector: '.card-container',
                })
              })
          }
          jQuery('.filters').length &&
            jQuery('.filters').on('click', 'li', function (t) {
              t.preventDefault()
              var r = $(this).attr('data-filter')
              e.masonryFilter({
                filter: function () {
                  return !r || $(this).hasClass(r)
                },
              })
            })
        })()
    },
    resize: function () {
      ;(e = $(window).width()),
        r(),
        (function () {
          $('.header').css('height', '')
          var e = $('.header').height()
          $('.header').css('height', e)
        })(),
        i(),
        a()
    },
  }

})()
jQuery(document).ready(function () {
  JobBoard.init(),
    jQuery('.navicon').on('click', function () {
      $(this).toggleClass('open')
    }),
    $('a[data-toggle="tab"]').click(function () {
      $('a[data-toggle="tab"]').click(function () {
        $($(this).attr('href')).show().addClass('show active').siblings().hide()
      })
    })
}),
  jQuery(window).on('load', function (e) {
    JobBoard.load(),
      setTimeout(function () {
        jQuery('#loading-area').remove()
      }, 0)
  }),
  jQuery(window).on('resize', function () {
    'use strict'
    JobBoard.resize()
  })
