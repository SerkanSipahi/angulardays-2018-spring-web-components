(function () {
  /*

Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt

Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
  'use strict';
  var hb = 'undefined' != typeof window && window === this ? this : 'undefined' != typeof global && null != global ? global : this;
  (function () {
    function k() {
      var a = this;
      this.u = {};
      this.g = document.documentElement;
      var b = new ra;
      b.rules = [];
      this.h = r.set(this.g, new r(b));
      this.i = !1;
      this.b = this.a = null;
      ib(function () {
        a.c();
      });
    }

    function D() {
      this.customStyles = [];
      this.enqueued = !1;
    }

    function jb() {
    }

    function ba(a) {
      this.cache = {};
      this.c = void 0 === a ? 100 : a;
    }

    function p() {
    }

    function r(a, b, c, d, e) {
      this.D = a || null;
      this.b = b || null;
      this.qa = c || [];
      this.L = null;
      this.T = e || '';
      this.a = this.B = this.F = null;
    }

    function q() {
    }

    function ra() {
      this.end = this.start = 0;
      this.rules = this.parent =
        this.previous = null;
      this.cssText = this.parsedCssText = '';
      this.atRule = !1;
      this.type = 0;
      this.parsedSelector = this.selector = this.keyframesName = '';
    }

    function Oc(a) {
      function b(b, c) {
        Object.defineProperty(b, 'innerHTML', {
          enumerable: c.enumerable, configurable: !0, get: c.get, set: function (b) {
            var d = this, e = void 0;
            m(this) && (e = [], L(this, function (a) {
              a !== d && e.push(a);
            }));
            c.set.call(this, b);
            if (e) for (var f = 0; f < e.length; f++) {
              var g = e[f];
              1 === g.__CE_state && a.disconnectedCallback(g);
            }
            this.ownerDocument.__CE_hasRegistry ? a.c(this) : a.j(this);
            return b;
          }
        });
      }

      function c(b, c) {
        x(b, 'insertAdjacentElement', function (b, d) {
          var e = m(d);
          b = c.call(this, b, d);
          e && a.a(d);
          m(b) && a.b(d);
          return b;
        });
      }

      lb ? x(Element.prototype, 'attachShadow', function (a) {
        return this.__CE_shadowRoot = a = lb.call(this, a);
      }) : console.warn('Custom Elements: `Element#attachShadow` was not patched.');
      if (sa && sa.get) b(Element.prototype, sa); else if (ta && ta.get) b(HTMLElement.prototype, ta); else {
        var d = ua.call(document, 'div');
        a.v(function (a) {
          b(a, {
            enumerable: !0, configurable: !0, get: function () {
              return mb.call(this,
                !0).innerHTML;
            }, set: function (a) {
              var b = 'template' === this.localName ? this.content : this;
              for (d.innerHTML = a; 0 < b.childNodes.length;) va.call(b, b.childNodes[0]);
              for (; 0 < d.childNodes.length;) ca.call(b, d.childNodes[0]);
            }
          });
        });
      }
      x(Element.prototype, 'setAttribute', function (b, c) {
        if (1 !== this.__CE_state) return nb.call(this, b, c);
        var d = wa.call(this, b);
        nb.call(this, b, c);
        c = wa.call(this, b);
        a.attributeChangedCallback(this, b, d, c, null);
      });
      x(Element.prototype, 'setAttributeNS', function (b, c, d) {
        if (1 !== this.__CE_state) return ob.call(this,
          b, c, d);
        var e = da.call(this, b, c);
        ob.call(this, b, c, d);
        d = da.call(this, b, c);
        a.attributeChangedCallback(this, c, e, d, b);
      });
      x(Element.prototype, 'removeAttribute', function (b) {
        if (1 !== this.__CE_state) return pb.call(this, b);
        var c = wa.call(this, b);
        pb.call(this, b);
        null !== c && a.attributeChangedCallback(this, b, c, null, null);
      });
      x(Element.prototype, 'removeAttributeNS', function (b, c) {
        if (1 !== this.__CE_state) return qb.call(this, b, c);
        var d = da.call(this, b, c);
        qb.call(this, b, c);
        var e = da.call(this, b, c);
        d !== e && a.attributeChangedCallback(this,
          c, d, e, b);
      });
      rb ? c(HTMLElement.prototype, rb) : sb ? c(Element.prototype, sb) : console.warn('Custom Elements: `Element#insertAdjacentElement` was not patched.');
      tb(a, Element.prototype, { Da: Pc, append: Qc });
      Rc(a, { Ta: Sc, Sa: Tc, bb: Uc, remove: Vc });
    }

    function Rc(a, b) {
      var c = Element.prototype;
      c.before = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f];
        f = d.filter(function (a) {
          return a instanceof Node && m(a);
        });
        b.Ta.apply(this, d);
        for (var g = 0; g < f.length; g++) a.a(f[g]);
        if (m(this)) for (f = 0; f < d.length; f++) g = d[f],
        g instanceof Element && a.b(g);
      };
      c.after = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f];
        f = d.filter(function (a) {
          return a instanceof Node && m(a);
        });
        b.Sa.apply(this, d);
        for (var g = 0; g < f.length; g++) a.a(f[g]);
        if (m(this)) for (f = 0; f < d.length; f++) g = d[f], g instanceof Element && a.b(g);
      };
      c.replaceWith = function (c) {
        for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f];
        var f = d.filter(function (a) {
          return a instanceof Node && m(a);
        }), g = m(this);
        b.bb.apply(this, d);
        for (var h = 0; h < f.length; h++) a.a(f[h]);
        if (g) for (a.a(this), f = 0; f < d.length; f++) g = d[f], g instanceof Element && a.b(g);
      };
      c.remove = function () {
        var c = m(this);
        b.remove.call(this);
        c && a.a(this);
      };
    }

    function Wc(a) {
      function b(b, d) {
        Object.defineProperty(b, 'textContent', {
          enumerable: d.enumerable, configurable: !0, get: d.get, set: function (b) {
            if (this.nodeType === Node.TEXT_NODE) d.set.call(this, b); else {
              var c = void 0;
              if (this.firstChild) {
                var e = this.childNodes, h = e.length;
                if (0 < h && m(this)) for (var c = Array(h), l = 0; l < h; l++) c[l] = e[l];
              }
              d.set.call(this, b);
              if (c) for (b = 0; b < c.length; b++) a.a(c[b]);
            }
          }
        });
      }

      x(Node.prototype, 'insertBefore', function (b, d) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);
          b = ub.call(this, b, d);
          if (m(this)) for (d = 0; d < c.length; d++) a.b(c[d]);
          return b;
        }
        c = m(b);
        d = ub.call(this, b, d);
        c && a.a(b);
        m(this) && a.b(b);
        return d;
      });
      x(Node.prototype, 'appendChild', function (b) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);
          b = ca.call(this, b);
          if (m(this)) for (var e = 0; e < c.length; e++) a.b(c[e]);
          return b;
        }
        c = m(b);
        e = ca.call(this, b);
        c && a.a(b);
        m(this) &&
        a.b(b);
        return e;
      });
      x(Node.prototype, 'cloneNode', function (b) {
        b = mb.call(this, b);
        this.ownerDocument.__CE_hasRegistry ? a.c(b) : a.j(b);
        return b;
      });
      x(Node.prototype, 'removeChild', function (b) {
        var c = m(b), e = va.call(this, b);
        c && a.a(b);
        return e;
      });
      x(Node.prototype, 'replaceChild', function (b, d) {
        if (b instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(b.childNodes);
          b = vb.call(this, b, d);
          if (m(this)) for (a.a(d), d = 0; d < c.length; d++) a.b(c[d]);
          return b;
        }
        var c = m(b), f = vb.call(this, b, d), g = m(this);
        g && a.a(d);
        c && a.a(b);
        g &&
        a.b(b);
        return f;
      });
      xa && xa.get ? b(Node.prototype, xa) : a.v(function (a) {
        b(a, {
          enumerable: !0, configurable: !0, get: function () {
            for (var a = [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);
            return a.join('');
          }, set: function (a) {
            for (; this.firstChild;) va.call(this, this.firstChild);
            ca.call(this, document.createTextNode(a));
          }
        });
      });
    }

    function Xc(a) {
      x(Document.prototype, 'createElement', function (b) {
        if (this.__CE_hasRegistry) {
          var c = a.f(b);
          if (c) return new c.constructor;
        }
        b = ua.call(this, b);
        a.g(b);
        return b;
      });
      x(Document.prototype, 'importNode', function (b, c) {
        b = Yc.call(this, b, c);
        this.__CE_hasRegistry ? a.c(b) : a.j(b);
        return b;
      });
      x(Document.prototype, 'createElementNS', function (b, c) {
        if (this.__CE_hasRegistry && (null === b || 'http://www.w3.org/1999/xhtml' === b)) {
          var d = a.f(c);
          if (d) return new d.constructor;
        }
        b = Zc.call(this, b, c);
        a.g(b);
        return b;
      });
      tb(a, Document.prototype, { Da: $c, append: ad });
    }

    function tb(a, b, c) {
      b.prepend = function (b) {
        for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f];
        f = d.filter(function (a) {
          return a instanceof
            Node && m(a);
        });
        c.Da.apply(this, d);
        for (var g = 0; g < f.length; g++) a.a(f[g]);
        if (m(this)) for (f = 0; f < d.length; f++) g = d[f], g instanceof Element && a.b(g);
      };
      b.append = function (b) {
        for (var d = [], f = 0; f < arguments.length; ++f) d[f - 0] = arguments[f];
        f = d.filter(function (a) {
          return a instanceof Node && m(a);
        });
        c.append.apply(this, d);
        for (var g = 0; g < f.length; g++) a.a(f[g]);
        if (m(this)) for (f = 0; f < d.length; f++) g = d[f], g instanceof Element && a.b(g);
      };
    }

    function bd(a) {
      window.HTMLElement = function () {
        function b() {
          var b = this.constructor, d = a.G(b);
          if (!d) throw Error('The custom element being constructed was not registered with `customElements`.');
          var e = d.constructionStack;
          if (!e.length) return e = ua.call(document, d.localName), Object.setPrototypeOf(e, b.prototype), e.__CE_state = 1, e.__CE_definition = d, a.g(e), e;
          var d = e.length - 1, f = e[d];
          if (f === wb) throw Error('The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.');
          e[d] = wb;
          Object.setPrototypeOf(f, b.prototype);
          a.g(f);
          return f;
        }

        b.prototype = cd.prototype;
        return b;
      }();
    }

    function w(a) {
      this.f = !1;
      this.a = a;
      this.h = new Map;
      this.g = function (a) {
        return a();
      };
      this.b = !1;
      this.c =
        [];
      this.i = new ya(a, document);
    }

    function xb() {
      var a = this;
      this.b = this.a = void 0;
      this.f = new Promise(function (b) {
        a.b = b;
        a.a && b(a.a);
      });
    }

    function ya(a, b) {
      this.b = a;
      this.a = b;
      this.I = void 0;
      this.b.c(this.a);
      'loading' === this.a.readyState && (this.I = new MutationObserver(this.f.bind(this)), this.I.observe(this.a, { childList: !0, subtree: !0 }));
    }

    function y() {
      this.u = new Map;
      this.l = new Map;
      this.i = [];
      this.h = !1;
    }

    function n(a, b) {
      if (a !== yb) throw new TypeError('Illegal constructor');
      a = document.createDocumentFragment();
      a.__proto__ =
        n.prototype;
      a.i(b);
      return a;
    }

    function z(a) {
      this.root = a;
      this.Z = 'slot';
    }

    function Q(a) {
      if (!a.__shady || void 0 === a.__shady.firstChild) {
        a.__shady = a.__shady || {};
        a.__shady.firstChild = za(a);
        a.__shady.lastChild = Aa(a);
        zb(a);
        for (var b = a.__shady.childNodes = W(a), c = 0, d; c < b.length && (d = b[c]); c++) d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, Ab(d);
      }
    }

    function dd(a) {
      var b = a && a.I;
      b && (b.Y.delete(a.Pa), b.Y.size || (a.Qa.__shady.R = null));
    }

    function ed(a,
                b) {
      a.__shady = a.__shady || {};
      a.__shady.R || (a.__shady.R = new ea);
      a.__shady.R.Y.add(b);
      var c = a.__shady.R;
      return {
        Pa: b, I: c, Qa: a, takeRecords: function () {
          return c.takeRecords();
        }
      };
    }

    function ea() {
      this.a = !1;
      this.addedNodes = [];
      this.removedNodes = [];
      this.Y = new Set;
    }

    function E(a) {
      return 'ShadyRoot' === a.Na;
    }

    function R(a) {
      a = a.getRootNode();
      if (E(a)) return a;
    }

    function Ba(a, b) {
      if (a && b) for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]); d++) {
        var f = Object.getOwnPropertyDescriptor(b, e);
        f && Object.defineProperty(a,
          e, f);
      }
    }

    function Ca(a, b) {
      for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];
      for (d = 0; d < c.length; d++) Ba(a, c[d]);
      return a;
    }

    function fd(a, b) {
      for (var c in b) a[c] = b[c];
    }

    function Bb(a) {
      Da.push(a);
      Ea.textContent = Cb++;
    }

    function Db(a) {
      Fa || (Fa = !0, Bb(fa));
      X.push(a);
    }

    function fa() {
      Fa = !1;
      for (var a = !!X.length; X.length;) X.shift()();
      return a;
    }

    function gd(a, b) {
      var c = b.getRootNode();
      return a.map(function (a) {
        var b = c === a.target.getRootNode();
        if (b && a.addedNodes) {
          if (b = Array.from(a.addedNodes).filter(function (a) {
            return c ===
              a.getRootNode();
          }), b.length) return a = Object.create(a), Object.defineProperty(a, 'addedNodes', { value: b, configurable: !0 }), a;
        } else if (b) return a;
      }).filter(function (a) {
        return a;
      });
    }

    function Eb(a) {
      switch (a) {
        case '&':
          return '&amp;';
        case '<':
          return '&lt;';
        case '>':
          return '&gt;';
        case '"':
          return '&quot;';
        case '\u00a0':
          return '&nbsp;';
      }
    }

    function Fb(a) {
      for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;
      return b;
    }

    function Ga(a, b) {
      'template' === a.localName && (a = a.content);
      for (var c = '', d = b ? b(a) : a.childNodes, e = 0, f = d.length, g; e < f && (g = d[e]); e++) {
        var h;
        a:{
          var l;
          h = g;
          l = a;
          var kb = b;
          switch (h.nodeType) {
            case Node.ELEMENT_NODE:
              for (var k = h.localName, m = '<' + k, p = h.attributes, n = 0; l = p[n]; n++) m += ' ' + l.name + '="' + l.value.replace(hd, Eb) + '"';
              m += '>';
              h = id[k] ? m : m + Ga(h, kb) + '</' + k + '>';
              break a;
            case Node.TEXT_NODE:
              h = h.data;
              h = l && jd[l.localName] ? h : h.replace(kd, Eb);
              break a;
            case Node.COMMENT_NODE:
              h = '\x3c!--' + h.data + '--\x3e';
              break a;
            default:
              throw window.console.error(h), Error('not implemented');
          }
        }
        c += h;
      }
      return c;
    }

    function M(a) {
      A.currentNode = a;
      return A.parentNode();
    }

    function za(a) {
      A.currentNode =
        a;
      return A.firstChild();
    }

    function Aa(a) {
      A.currentNode = a;
      return A.lastChild();
    }

    function Gb(a) {
      A.currentNode = a;
      return A.previousSibling();
    }

    function Hb(a) {
      A.currentNode = a;
      return A.nextSibling();
    }

    function W(a) {
      var b = [];
      A.currentNode = a;
      for (a = A.firstChild(); a;) b.push(a), a = A.nextSibling();
      return b;
    }

    function Ib(a) {
      B.currentNode = a;
      return B.parentNode();
    }

    function Jb(a) {
      B.currentNode = a;
      return B.firstChild();
    }

    function Kb(a) {
      B.currentNode = a;
      return B.lastChild();
    }

    function Lb(a) {
      B.currentNode = a;
      return B.previousSibling();
    }

    function Mb(a) {
      B.currentNode = a;
      return B.nextSibling();
    }

    function Nb(a) {
      var b = [];
      B.currentNode = a;
      for (a = B.firstChild(); a;) b.push(a), a = B.nextSibling();
      return b;
    }

    function Ob(a) {
      return Ga(a, function (a) {
        return W(a);
      });
    }

    function Pb(a) {
      if (a.nodeType !== Node.ELEMENT_NODE) return a.nodeValue;
      a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);
      for (var b = '', c; c = a.nextNode();) b += c.nodeValue;
      return b;
    }

    function I(a, b, c) {
      for (var d in b) {
        var e = Object.getOwnPropertyDescriptor(a, d);
        e && e.configurable || !e && c ? Object.defineProperty(a,
          d, b[d]) : c && console.warn('Could not define', d, 'on', a);
      }
    }

    function N(a) {
      I(a, Qb);
      I(a, Ha);
      I(a, Ia);
    }

    function Rb(a, b, c) {
      Ab(a);
      c = c || null;
      a.__shady = a.__shady || {};
      b.__shady = b.__shady || {};
      c && (c.__shady = c.__shady || {});
      a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild;
      var d = a.__shady.previousSibling;
      d && d.__shady && (d.__shady.nextSibling = a);
      (d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a);
      a.__shady.parentNode = b;
      c ? c === b.__shady.firstChild && (b.__shady.firstChild = a) : (b.__shady.lastChild =
        a, b.__shady.firstChild || (b.__shady.firstChild = a));
      b.__shady.childNodes = null;
    }

    function Sb(a) {
      var b = a.__shady && a.__shady.parentNode, c, d = R(a);
      if (b || d) {
        c = Tb(a);
        if (b) {
          a.__shady = a.__shady || {};
          b.__shady = b.__shady || {};
          a === b.__shady.firstChild && (b.__shady.firstChild = a.__shady.nextSibling);
          a === b.__shady.lastChild && (b.__shady.lastChild = a.__shady.previousSibling);
          var e = a.__shady.previousSibling, f = a.__shady.nextSibling;
          e && (e.__shady = e.__shady || {}, e.__shady.nextSibling = f);
          f && (f.__shady = f.__shady || {}, f.__shady.previousSibling =
            e);
          a.__shady.parentNode = a.__shady.previousSibling = a.__shady.nextSibling = void 0;
          void 0 !== b.__shady.childNodes && (b.__shady.childNodes = null);
        }
        if (e = d) {
          for (var g, e = d.la(), f = 0; f < e.length; f++) {
            var h = e[f], l;
            a:{
              for (l = h; l;) {
                if (l == a) {
                  l = !0;
                  break a;
                }
                l = l.parentNode;
              }
              l = void 0;
            }
            if (l) for (h = h.assignedNodes({ flatten: !0 }), l = 0; l < h.length; l++) {
              g = !0;
              var k = h[l], m = M(k);
              m && S.call(m, k);
            }
          }
          e = g;
        }
        b = b && d && b.localName === d.s.Z;
        if (e || b) d.W = !1, ga(d);
      }
      Ja(a);
      return c;
    }

    function Ka(a, b, c) {
      if (a = a.__shady && a.__shady.R) b && a.addedNodes.push(b), c &&
      a.removedNodes.push(c), a.eb();
    }

    function La(a) {
      if (a && a.nodeType) {
        a.__shady = a.__shady || {};
        var b = a.__shady.ra;
        void 0 === b && (E(a) ? b = a : b = (b = a.parentNode) ? La(b) : a, document.documentElement.contains(a) && (a.__shady.ra = b));
        return b;
      }
    }

    function Ub(a, b, c) {
      var d, e = c.s.Z;
      if (a.nodeType !== Node.DOCUMENT_FRAGMENT_NODE || a.__noInsertionPoint) a.localName === e && (Q(b), Q(a), d = !0); else for (var e = a.querySelectorAll(e), f = 0, g, h; f < e.length && (g = e[f]); f++) h = g.parentNode, h === a && (h = b), h = Ub(g, h, c), d = d || h;
      return d;
    }

    function Vb(a) {
      return (a =
        a && a.__shady && a.__shady.root) && a.oa();
    }

    function Ja(a) {
      if (a.__shady && void 0 !== a.__shady.ra) for (var b = a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]); c++) Ja(e);
      a.__shady = a.__shady || {};
      a.__shady.ra = void 0;
    }

    function Tb(a) {
      a = a.parentNode;
      if (Vb(a)) return ga(a.__shady.root), !0;
    }

    function ga(a) {
      a.ka = !0;
      a.update();
    }

    function Wb(a, b) {
      'slot' === b ? Tb(a) : 'slot' === a.localName && 'name' === b && (a = R(a)) && a.update();
    }

    function Xb(a, b, c) {
      var d = [];
      Yb(a.childNodes, b, c, d);
      return d;
    }

    function Yb(a, b, c, d) {
      for (var e = 0, f = a.length, g; e < f && (g =
        a[e]); e++) {
        var h;
        if (h = g.nodeType === Node.ELEMENT_NODE) {
          h = g;
          var l = b, k = c, m = d, n = l(h);
          n && m.push(h);
          k && k(n) ? h = n : (Yb(h.childNodes, l, k, m), h = void 0);
        }
        if (h) break;
      }
    }

    function Zb(a) {
      a = a.getRootNode();
      E(a) && a.Ea();
    }

    function $b(a, b, c) {
      if (c) {
        var d = c.__shady && c.__shady.parentNode;
        if (void 0 !== d && d !== a || void 0 === d && M(c) !== a) throw Error('Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.');
      }
      if (c === b) return b;
      b.nodeType !== Node.DOCUMENT_FRAGMENT_NODE &&
      ((d = b.__shady && b.__shady.parentNode) ? (Ka(d, null, b), Sb(b)) : (b.parentNode && S.call(b.parentNode, b), Ja(b)));
      var d = c, e = R(a), f;
      e && (b.__noInsertionPoint && !e.ka && (e.W = !0), f = Ub(b, a, e)) && (e.W = !1);
      if (a.__shady && void 0 !== a.__shady.firstChild) if (zb(a), a.__shady = a.__shady || {}, void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null), b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        for (var g = b.childNodes, h = 0; h < g.length; h++) Rb(g[h], a, d);
        b.__shady = b.__shady || {};
        g = void 0 !== b.__shady.firstChild ? null : void 0;
        b.__shady.firstChild =
          b.__shady.lastChild = g;
        b.__shady.childNodes = g;
      } else Rb(b, a, d);
      var g = f, h = e && e.s.Z || '', l = b.nodeType === Node.DOCUMENT_FRAGMENT_NODE && !b.__noInsertionPoint && h && b.querySelector(h);
      f = l && l.parentNode.nodeType !== Node.DOCUMENT_FRAGMENT_NODE;
      ((l = l || b.localName === h) || a.localName === h || g) && e && ga(e);
      (e = Vb(a)) && ga(a.__shady && a.__shady.root);
      if (!(e || l && !f || a.__shady.root || d && E(d.parentNode) && d.parentNode.J)) {
        if (c && (d = R(c))) {
          var k;
          if (c.localName === d.s.Z) a:{
            d = c.assignedNodes({ flatten: !0 });
            e = La(c);
            f = 0;
            for (g = d.length; f <
            g && (k = d[f]); f++) if (e.$(c, k)) break a;
            k = void 0;
          } else k = c;
          c = k;
        }
        k = E(a) ? a.host : a;
        c ? Ma.call(k, b, c) : ac.call(k, b);
      }
      Ka(a, b);
      return b;
    }

    function bc(a, b) {
      if (a.ownerDocument !== document) return Na.call(document, a, b);
      var c = Na.call(document, a, !1);
      if (b) {
        a = a.childNodes;
        b = 0;
        for (var d; b < a.length; b++) d = bc(a[b], !0), c.appendChild(d);
      }
      return c;
    }

    function Oa(a, b) {
      var c = [], d = a;
      for (a = a === window ? window : a.getRootNode(); d;) c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;
      c[c.length - 1] === document && c.push(window);
      return c;
    }

    function cc(a, b) {
      if (!E) return a;
      a = Oa(a, !0);
      for (var c = 0, d, e, f, g; c < b.length; c++) if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (g = a.indexOf(f), e = f), !E(f) || -1 < g) return d;
    }

    function Pa(a) {
      function b(b, d) {
        b = new a(b, d);
        b.ha = d && !!d.composed;
        return b;
      }

      fd(b, a);
      b.prototype = a.prototype;
      return b;
    }

    function dc(a, b, c) {
      if (c = b.o && b.o[a.type] && b.o[a.type][c]) for (var d = 0, e; (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), !a.La); d++) ;
    }

    function ld(a) {
      var b = a.composedPath(),
        c;
      Object.defineProperty(a, 'currentTarget', {
        get: function () {
          return c;
        }, configurable: !0
      });
      for (var d = b.length - 1; 0 <= d; d--) if (c = b[d], dc(a, c, 'capture'), a.ia) return;
      Object.defineProperty(a, 'eventPhase', {
        get: function () {
          return Event.AT_TARGET;
        }
      });
      for (var e, d = 0; d < b.length; d++) if (c = b[d], !d || c.shadowRoot && c.shadowRoot === e) if (dc(a, c, 'bubble'), c !== window && (e = c.getRootNode()), a.ia) break;
    }

    function ec(a, b, c, d, e, f) {
      for (var g = 0; g < a.length; g++) {
        var h = a[g], l = h.type, k = h.capture, m = h.once, n = h.passive;
        if (b === h.node && c === l && d ===
          k && e === m && f === n) return g;
      }
      return -1;
    }

    function fc(a, b, c) {
      if (b) {
        var d, e, f;
        'object' === typeof c ? (d = !!c.capture, e = !!c.once, f = !!c.passive) : (d = !!c, f = e = !1);
        var g = c && c.ja || this, h = b.V;
        if (h) {
          if (-1 < ec(h, g, a, d, e, f)) return;
        } else b.V = [];
        h = function (d) {
          e && this.removeEventListener(a, b, c);
          d.__target || gc(d);
          var f;
          g !== this && (f = Object.getOwnPropertyDescriptor(d, 'currentTarget'), Object.defineProperty(d, 'currentTarget', {
            get: function () {
              return g;
            }, configurable: !0
          }));
          if (d.composed || -1 < d.composedPath().indexOf(g)) if (d.target === d.relatedTarget) d.eventPhase ===
          Event.BUBBLING_PHASE && d.stopImmediatePropagation(); else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === g) {
            var h = 'object' === typeof b && b.handleEvent ? b.handleEvent(d) : b.call(g, d);
            g !== this && (f ? (Object.defineProperty(d, 'currentTarget', f), f = null) : delete d.currentTarget);
            return h;
          }
        };
        b.V.push({ node: this, type: a, capture: d, once: e, passive: f, hb: h });
        Qa[a] ? (this.o = this.o || {}, this.o[a] = this.o[a] || {
          capture: [],
          bubble: []
        }, this.o[a][d ? 'capture' : 'bubble'].push(h)) : (this instanceof Window ? hc : ic).call(this,
          a, h, c);
      }
    }

    function jc(a, b, c) {
      if (b) {
        var d, e, f;
        'object' === typeof c ? (d = !!c.capture, e = !!c.once, f = !!c.passive) : (d = !!c, f = e = !1);
        var g = c && c.ja || this, h = void 0, l;
        l = null;
        try {
          l = b.V;
        } catch (kb) {
        }
        l && (e = ec(l, g, a, d, e, f), -1 < e && (h = l.splice(e, 1)[0].hb, l.length || (b.V = void 0)));
        (this instanceof Window ? kc : lc).call(this, a, h || b, c);
        h && Qa[a] && this.o && this.o[a] && (a = this.o[a][d ? 'capture' : 'bubble'], h = a.indexOf(h), -1 < h && a.splice(h, 1));
      }
    }

    function md() {
      for (var a in Qa) window.addEventListener(a, function (a) {
          a.__target || (gc(a), ld(a));
        },
        !0);
    }

    function gc(a) {
      a.__target = a.target;
      a.ua = a.relatedTarget;
      if (C.P) {
        var b = mc, c = Object.getPrototypeOf(a);
        if (!c.hasOwnProperty('__patchProto')) {
          var d = Object.create(c);
          d.jb = c;
          Ba(d, b);
          c.__patchProto = d;
        }
        a.__proto__ = c.__patchProto;
      } else Ba(a, mc);
    }

    function Y(a, b) {
      return { index: a, S: [], X: b };
    }

    function nd(a, b, c, d) {
      var e = 0, f = 0, g = 0, h = 0, l = Math.min(b - e, d - f);
      if (0 == e && 0 == f) a:{
        for (g = 0; g < l; g++) if (a[g] !== c[g]) break a;
        g = l;
      }
      if (b == a.length && d == c.length) {
        for (var h = a.length, k = c.length, m = 0; m < l - g && od(a[--h], c[--k]);) m++;
        h = m;
      }
      e += g;
      f += g;
      b -= h;
      d -= h;
      if (!(b - e || d - f)) return [];
      if (e == b) {
        for (b = Y(e, 0); f < d;) b.S.push(c[f++]);
        return [b];
      }
      if (f == d) return [Y(e, b - e)];
      l = e;
      g = f;
      d = d - g + 1;
      h = b - l + 1;
      b = Array(d);
      for (k = 0; k < d; k++) b[k] = Array(h), b[k][0] = k;
      for (k = 0; k < h; k++) b[0][k] = k;
      for (k = 1; k < d; k++) for (m = 1; m < h; m++) if (a[l + m - 1] === c[g + k - 1]) b[k][m] = b[k - 1][m - 1]; else {
        var n = b[k - 1][m] + 1, p = b[k][m - 1] + 1;
        b[k][m] = n < p ? n : p;
      }
      l = b.length - 1;
      g = b[0].length - 1;
      d = b[l][g];
      for (a = []; 0 < l || 0 < g;) l ? g ? (h = b[l - 1][g - 1], k = b[l - 1][g], m = b[l][g - 1], n = k < m ? k < h ? k : h : m < h ? m : h, n == h ? (h == d ? a.push(0) : (a.push(1),
        d = h), l--, g--) : n == k ? (a.push(3), l--, d = k) : (a.push(2), g--, d = m)) : (a.push(3), l--) : (a.push(2), g--);
      a.reverse();
      b = void 0;
      l = [];
      for (g = 0; g < a.length; g++) switch (a[g]) {
        case 0:
          b && (l.push(b), b = void 0);
          e++;
          f++;
          break;
        case 1:
          b || (b = Y(e, 0));
          b.X++;
          e++;
          b.S.push(c[f]);
          f++;
          break;
        case 2:
          b || (b = Y(e, 0));
          b.X++;
          e++;
          break;
        case 3:
          b || (b = Y(e, 0)), b.S.push(c[f]), f++;
      }
      b && l.push(b);
      return l;
    }

    function od(a, b) {
      return a === b;
    }

    function nc(a) {
      Zb(a);
      return a.__shady && a.__shady.assignedSlot || null;
    }

    function J(a, b) {
      for (var c = Object.getOwnPropertyNames(b),
             d = 0; d < c.length; d++) {
        var e = c[d], f = Object.getOwnPropertyDescriptor(b, e);
        f.value ? a[e] = f.value : Object.defineProperty(a, e, f);
      }
    }

    function pd() {
      var a = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;
      J(window.Node.prototype, qd);
      J(window.Window.prototype, rd);
      J(window.Text.prototype, sd);
      J(window.DocumentFragment.prototype, Ra);
      J(window.Element.prototype, oc);
      J(window.Document.prototype, pc);
      window.HTMLSlotElement && J(window.HTMLSlotElement.prototype, qc);
      J(a.prototype, td);
      C.P && (N(window.Node.prototype),
        N(window.Text.prototype), N(window.DocumentFragment.prototype), N(window.Element.prototype), N(a.prototype), N(window.Document.prototype), window.HTMLSlotElement && N(window.HTMLSlotElement.prototype));
    }

    function rc(a) {
      var b = ud.has(a);
      a = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(a);
      return !b && a;
    }

    function m(a) {
      var b = a.isConnected;
      if (void 0 !== b) return b;
      for (; a && !(a.__CE_isImportDocument || a instanceof Document);) a = a.parentNode || (window.ShadowRoot && a instanceof ShadowRoot ? a.host : void 0);
      return !(!a || !(a.__CE_isImportDocument ||
        a instanceof Document));
    }

    function Sa(a, b) {
      for (; b && b !== a && !b.nextSibling;) b = b.parentNode;
      return b && b !== a ? b.nextSibling : null;
    }

    function L(a, b, c) {
      c = c ? c : new Set;
      for (var d = a; d;) {
        if (d.nodeType === Node.ELEMENT_NODE) {
          var e = d;
          b(e);
          var f = e.localName;
          if ('link' === f && 'import' === e.getAttribute('rel')) {
            d = e.import;
            if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) L(d, b, c);
            d = Sa(a, e);
            continue;
          } else if ('template' === f) {
            d = Sa(a, e);
            continue;
          }
          if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) L(e,
            b, c);
        }
        d = d.firstChild ? d.firstChild : Sa(a, d);
      }
    }

    function x(a, b, c) {
      a[b] = c;
    }

    function Ta(a) {
      a = a.replace(F.Va, '').replace(F.port, '');
      var b = sc, c = a, d = new ra;
      d.start = 0;
      d.end = c.length;
      for (var e = d, f = 0, g = c.length; f < g; f++) if ('{' === c[f]) {
        e.rules || (e.rules = []);
        var h = e, k = h.rules[h.rules.length - 1] || null, e = new ra;
        e.start = f + 1;
        e.parent = h;
        e.previous = k;
        h.rules.push(e);
      } else '}' === c[f] && (e.end = f + 1, e = e.parent || d);
      return b(d, a);
    }

    function sc(a, b) {
      var c = b.substring(a.start, a.end - 1);
      a.parsedCssText = a.cssText = c.trim();
      a.parent && ((c =
        b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = vd(c), c = c.replace(F.Ca, ' '), c = c.substring(c.lastIndexOf(';') + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = !c.indexOf('@'), a.atRule) ? c.indexOf('@media') ? c.match(F.$a) && (a.type = H.ga, a.keyframesName = a.selector.split(F.Ca).pop()) : a.type = H.MEDIA_RULE : a.type = c.indexOf('--') ? H.STYLE_RULE : H.sa);
      if (c = a.rules) for (var d = 0, e = c.length, f; d < e && (f = c[d]); d++) sc(f, b);
      return a;
    }

    function vd(a) {
      return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
        a =
          c;
        for (c = 6 - a.length; c--;) a = '0' + a;
        return '\\' + a;
      });
    }

    function tc(a, b, c) {
      c = void 0 === c ? '' : c;
      var d = '';
      if (a.cssText || a.rules) {
        var e = a.rules, f;
        if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf('--'));
        if (f) {
          f = 0;
          for (var g = e.length, h; f < g && (h = e[f]); f++) d = tc(h, b, d);
        } else b ? b = a.cssText : (b = a.cssText, b = b.replace(F.xa, '').replace(F.Ba, ''), b = b.replace(F.ab, '').replace(F.gb, '')), (d = b.trim()) && (d = '  ' + d + '\n');
      }
      d && (a.selector && (c += a.selector + ' {\n'), c += d, a.selector && (c += '}\n\n'));
      return c;
    }

    function uc(a) {
      v = a && a.shimcssproperties ?
        !1 : u || !(navigator.userAgent.match('AppleWebKit/601') || !window.CSS || !CSS.supports || !CSS.supports('box-shadow', '0 0 0 var(--foo)'));
    }

    function T(a, b) {
      if (!a) return '';
      'string' === typeof a && (a = Ta(a));
      b && U(a, b);
      return tc(a, v);
    }

    function ha(a) {
      !a.__cssRules && a.textContent && (a.__cssRules = Ta(a.textContent));
      return a.__cssRules || null;
    }

    function vc(a) {
      return !!a.parent && a.parent.type === H.ga;
    }

    function U(a, b, c, d) {
      if (a) {
        var e = !1, f = a.type;
        if (d && f === H.MEDIA_RULE) {
          var g = a.selector.match(wd);
          g && (window.matchMedia(g[1]).matches ||
            (e = !0));
        }
        f === H.STYLE_RULE ? b(a) : c && f === H.ga ? c(a) : f === H.sa && (e = !0);
        if ((a = a.rules) && !e) for (var e = 0, f = a.length, h; e < f && (h = a[e]); e++) U(h, b, c, d);
      }
    }

    function Ua(a, b, c, d) {
      var e = document.createElement('style');
      b && e.setAttribute('scope', b);
      e.textContent = a;
      wc(e, c, d);
      return e;
    }

    function wc(a, b, c) {
      b = b || document.head;
      b.insertBefore(a, c && c.nextSibling || b.firstChild);
      O ? a.compareDocumentPosition(O) === Node.DOCUMENT_POSITION_PRECEDING && (O = a) : O = a;
    }

    function xc(a, b) {
      var c = a.indexOf('var(');
      if (-1 === c) return b(a, '', '', '');
      var d;
      a:{
        var e = 0;
        d = c + 3;
        for (var f = a.length; d < f; d++) if ('(' === a[d]) e++; else if (')' === a[d] && !--e) break a;
        d = -1;
      }
      e = a.substring(c + 4, d);
      c = a.substring(0, c);
      a = xc(a.substring(d + 1), b);
      d = e.indexOf(',');
      return -1 === d ? b(c, e.trim(), '', a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
    }

    function ia(a, b) {
      u ? a.setAttribute('class', b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, 'class', b);
    }

    function P(a) {
      var b = a.localName, c = '';
      b ? -1 < b.indexOf('-') || (c = b, b = a.getAttribute && a.getAttribute('is') || '') : (b = a.is, c = a.extends);
      return { is: b, T: c };
    }

    function yc(a) {
      for (var b = 0; b < a.length; b++) {
        var c = a[b];
        if (c.target !== document.documentElement && c.target !== document.head) for (var d = 0; d < c.addedNodes.length; d++) {
          var e = c.addedNodes[d];
          if (e.nodeType === Node.ELEMENT_NODE) {
            var f = e.getRootNode(), g;
            g = e;
            var h = [];
            g.classList ? h = Array.from(g.classList) : g instanceof window.SVGElement && g.hasAttribute('class') && (h = g.getAttribute('class').split(/\s+/));
            g = h;
            h = g.indexOf(t.c);
            (g = -1 < h ? g[h + 1] : '') && f === e.ownerDocument ? t.a(e, g, !0) : f.nodeType === Node.DOCUMENT_FRAGMENT_NODE &&
              (f = f.host) && (f = P(f).is, g !== f && (g && t.a(e, g, !0), t.a(e, f)));
          }
        }
      }
    }

    function xd(a) {
      if (a = ja[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
    }

    function zc(a) {
      return a._applyShimCurrentVersion === a._applyShimNextVersion;
    }

    function yd(a) {
      a._applyShimValidatingVersion = a._applyShimNextVersion;
      a.b || (a.b = !0, zd.then(function () {
        a._applyShimCurrentVersion = a._applyShimNextVersion;
        a.b = !1;
      }));
    }

    function ib(a) {
      requestAnimationFrame(function () {
        Ac ?
          Ac(a) : (Va || (Va = new Promise(function (a) {
            Wa = a;
          }), 'complete' === document.readyState ? Wa() : document.addEventListener('readystatechange', function () {
            'complete' === document.readyState && Wa();
          })), Va.then(function () {
            a && a();
          }));
      });
    }

    var C = window.ShadyDOM || {};
    C.Xa = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);
    var Xa = Object.getOwnPropertyDescriptor(Node.prototype, 'firstChild');
    C.P = !!(Xa && Xa.configurable && Xa.get);
    C.Aa = C.force || !C.Xa;
    var V = Element.prototype, Bc = V.matches || V.matchesSelector || V.mozMatchesSelector ||
      V.msMatchesSelector || V.oMatchesSelector || V.webkitMatchesSelector, Ea = document.createTextNode(''), Cb = 0, Da = [];
    (new MutationObserver(function () {
      for (; Da.length;) try {
        Da.shift()();
      } catch (a) {
        throw Ea.textContent = Cb++, a;
      }
    })).observe(Ea, { characterData: !0 });
    var X = [], Fa;
    fa.list = X;
    ea.prototype.eb = function () {
      var a = this;
      this.a || (this.a = !0, Bb(function () {
        a.b();
      }));
    };
    ea.prototype.b = function () {
      if (this.a) {
        this.a = !1;
        var a = this.takeRecords();
        a.length && this.Y.forEach(function (b) {
          b(a);
        });
      }
    };
    ea.prototype.takeRecords = function () {
      if (this.addedNodes.length ||
        this.removedNodes.length) {
        var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];
        this.addedNodes = [];
        this.removedNodes = [];
        return a;
      }
      return [];
    };
    var ac = Element.prototype.appendChild, Ma = Element.prototype.insertBefore, S = Element.prototype.removeChild, Cc = Element.prototype.setAttribute,
      Dc = Element.prototype.removeAttribute, Ya = Element.prototype.cloneNode, Na = Document.prototype.importNode, ic = Element.prototype.addEventListener,
      lc = Element.prototype.removeEventListener, hc = Window.prototype.addEventListener,
      kc = Window.prototype.removeEventListener, Za = Element.prototype.dispatchEvent, Ad = Object.freeze({
        appendChild: ac,
        insertBefore: Ma,
        removeChild: S,
        setAttribute: Cc,
        removeAttribute: Dc,
        cloneNode: Ya,
        importNode: Na,
        addEventListener: ic,
        removeEventListener: lc,
        nb: hc,
        ob: kc,
        dispatchEvent: Za
      }), hd = /[&\u00A0"]/g, kd = /[&\u00A0<>]/g, id = Fb('area base br col command embed hr img input keygen link meta param source track wbr'.split(' ')),
      jd = Fb('style script xmp iframe noembed noframes plaintext noscript'.split(' ')), A = document.createTreeWalker(document,
      NodeFilter.SHOW_ALL, null, !1), B = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1), Bd = Object.freeze({
        parentNode: M,
        firstChild: za,
        lastChild: Aa,
        previousSibling: Gb,
        nextSibling: Hb,
        childNodes: W,
        parentElement: Ib,
        firstElementChild: Jb,
        lastElementChild: Kb,
        previousElementSibling: Lb,
        nextElementSibling: Mb,
        children: Nb,
        innerHTML: Ob,
        textContent: Pb
      }), $a = Object.getOwnPropertyDescriptor(Element.prototype, 'innerHTML') || Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'innerHTML'),
      ka = document.implementation.createHTMLDocument('inert').createElement('div'),
      ab = Object.getOwnPropertyDescriptor(Document.prototype, 'activeElement'), Qb = {
        parentElement: {
          get: function () {
            var a = this.__shady && this.__shady.parentNode;
            a && a.nodeType !== Node.ELEMENT_NODE && (a = null);
            return void 0 !== a ? a : Ib(this);
          }, configurable: !0
        }, parentNode: {
          get: function () {
            var a = this.__shady && this.__shady.parentNode;
            return void 0 !== a ? a : M(this);
          }, configurable: !0
        }, nextSibling: {
          get: function () {
            var a = this.__shady && this.__shady.nextSibling;
            return void 0 !== a ? a : Hb(this);
          }, configurable: !0
        }, previousSibling: {
          get: function () {
            var a =
              this.__shady && this.__shady.previousSibling;
            return void 0 !== a ? a : Gb(this);
          }, configurable: !0
        }, className: {
          get: function () {
            return this.getAttribute('class') || '';
          }, set: function (a) {
            this.setAttribute('class', a);
          }, configurable: !0
        }, nextElementSibling: {
          get: function () {
            if (this.__shady && void 0 !== this.__shady.nextSibling) {
              for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;
              return a;
            }
            return Mb(this);
          }, configurable: !0
        }, previousElementSibling: {
          get: function () {
            if (this.__shady && void 0 !== this.__shady.previousSibling) {
              for (var a =
                this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;
              return a;
            }
            return Lb(this);
          }, configurable: !0
        }
      }, Ha = {
        childNodes: {
          get: function () {
            var a;
            if (this.__shady && void 0 !== this.__shady.firstChild) {
              if (!this.__shady.childNodes) {
                this.__shady.childNodes = [];
                for (var b = this.firstChild; b; b = b.nextSibling) this.__shady.childNodes.push(b);
              }
              a = this.__shady.childNodes;
            } else a = W(this);
            a.item = function (b) {
              return a[b];
            };
            return a;
          }, configurable: !0
        }, childElementCount: {
          get: function () {
            return this.children.length;
          },
          configurable: !0
        }, firstChild: {
          get: function () {
            var a = this.__shady && this.__shady.firstChild;
            return void 0 !== a ? a : za(this);
          }, configurable: !0
        }, lastChild: {
          get: function () {
            var a = this.__shady && this.__shady.lastChild;
            return void 0 !== a ? a : Aa(this);
          }, configurable: !0
        }, textContent: {
          get: function () {
            if (this.__shady && void 0 !== this.__shady.firstChild) {
              for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);
              return a.join('');
            }
            return Pb(this);
          }, set: function (a) {
            if (this.nodeType !==
              Node.ELEMENT_NODE) this.nodeValue = a; else {
              for (; this.firstChild;) this.removeChild(this.firstChild);
              this.appendChild(document.createTextNode(a));
            }
          }, configurable: !0
        }, firstElementChild: {
          get: function () {
            if (this.__shady && void 0 !== this.__shady.firstChild) {
              for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;
              return a;
            }
            return Jb(this);
          }, configurable: !0
        }, lastElementChild: {
          get: function () {
            if (this.__shady && void 0 !== this.__shady.lastChild) {
              for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a =
                a.previousSibling;
              return a;
            }
            return Kb(this);
          }, configurable: !0
        }, children: {
          get: function () {
            var a;
            this.__shady && void 0 !== this.__shady.firstChild ? a = Array.prototype.filter.call(this.childNodes, function (a) {
              return a.nodeType === Node.ELEMENT_NODE;
            }) : a = Nb(this);
            a.item = function (b) {
              return a[b];
            };
            return a;
          }, configurable: !0
        }, innerHTML: {
          get: function () {
            var a = 'template' === this.localName ? this.content : this;
            return this.__shady && void 0 !== this.__shady.firstChild ? Ga(a) : Ob(a);
          }, set: function (a) {
            for (var b = 'template' === this.localName ?
              this.content : this; b.firstChild;) b.removeChild(b.firstChild);
            for ($a && $a.set ? $a.set.call(ka, a) : ka.innerHTML = a; ka.firstChild;) b.appendChild(ka.firstChild);
          }, configurable: !0
        }
      }, Ec = {
        shadowRoot: {
          get: function () {
            return this.__shady && this.__shady.root || null;
          }, set: function (a) {
            this.__shady = this.__shady || {};
            this.__shady.root = a;
          }, configurable: !0
        }
      }, Ia = {
        activeElement: {
          get: function () {
            var a;
            a = ab && ab.get ? ab.get.call(document) : C.P ? void 0 : document.activeElement;
            if (a && a.nodeType) {
              var b = !!E(this);
              if (this === document || b && this.host !==
                a && this.host.contains(a)) {
                for (b = R(a); b && b !== this;) a = b.host, b = R(a);
                a = this === document ? b ? null : a : b === this ? a : null;
              } else a = null;
            } else a = null;
            return a;
          }, set: function () {
          }, configurable: !0
        }
      }, Ab = C.P ? function () {
      } : function (a) {
        a.__shady && a.__shady.Oa || (a.__shady = a.__shady || {}, a.__shady.Oa = !0, I(a, Qb, !0));
      }, zb = C.P ? function () {
      } : function (a) {
        a.__shady && a.__shady.Ma || (a.__shady = a.__shady || {}, a.__shady.Ma = !0, I(a, Ha, !0), I(a, Ec, !0));
      }, la = null, Cd = {
        blur: !0,
        focus: !0,
        focusin: !0,
        focusout: !0,
        click: !0,
        dblclick: !0,
        mousedown: !0,
        mouseenter: !0,
        mouseleave: !0,
        mousemove: !0,
        mouseout: !0,
        mouseover: !0,
        mouseup: !0,
        wheel: !0,
        beforeinput: !0,
        input: !0,
        keydown: !0,
        keyup: !0,
        compositionstart: !0,
        compositionupdate: !0,
        compositionend: !0,
        touchstart: !0,
        touchend: !0,
        touchmove: !0,
        touchcancel: !0,
        pointerover: !0,
        pointerenter: !0,
        pointerdown: !0,
        pointermove: !0,
        pointerup: !0,
        pointercancel: !0,
        pointerout: !0,
        pointerleave: !0,
        gotpointercapture: !0,
        lostpointercapture: !0,
        dragstart: !0,
        drag: !0,
        dragenter: !0,
        dragleave: !0,
        dragover: !0,
        drop: !0,
        dragend: !0,
        DOMActivate: !0,
        DOMFocusIn: !0,
        DOMFocusOut: !0,
        keypress: !0
      }, mc = {
        get composed() {
          !1 !== this.isTrusted && void 0 === this.ha && (this.ha = Cd[this.type]);
          return this.ha || !1;
        }, composedPath: function () {
          this.ta || (this.ta = Oa(this.__target, this.composed));
          return this.ta;
        }, get target() {
          return cc(this.currentTarget, this.composedPath());
        }, get relatedTarget() {
          if (!this.ua) return null;
          this.va || (this.va = Oa(this.ua, !0));
          return cc(this.currentTarget, this.va);
        }, stopPropagation: function () {
          Event.prototype.stopPropagation.call(this);
          this.ia = !0;
        }, stopImmediatePropagation: function () {
          Event.prototype.stopImmediatePropagation.call(this);
          this.ia = this.La = !0;
        }
      }, Qa = { focus: !0, blur: !0 }, Dd = Pa(window.Event), Ed = Pa(window.CustomEvent), Fd = Pa(window.MouseEvent), Gd = 'function' === typeof Event ? Event : function (a, b) {
        b = b || {};
        var c = document.createEvent('Event');
        c.initEvent(a, !!b.bubbles, !!b.cancelable);
        return c;
      };
    z.prototype.Wa = function () {
      return this.root.querySelectorAll('slot');
    };
    z.prototype.pa = function (a) {
      return a.localName && 'slot' == a.localName;
    };
    z.prototype.na = function () {
      return this.root.oa() ? this.g(this.c()) : [];
    };
    z.prototype.c = function () {
      for (var a = [],
             b = 0, c = this.root.host.firstChild; c; c = c.nextSibling) a[b++] = c;
      return a;
    };
    z.prototype.g = function (a) {
      for (var b = [], c = this.root.la(), d = 0, e = c.length, f; d < e && (f = c[d]); d++) {
        this.f(f, a);
        var g = f.parentNode;
        (g = g && g.__shady && g.__shady.root) && g.oa() && b.push(g);
      }
      for (c = 0; c < a.length; c++) if (d = a[c]) d.__shady = d.__shady || {}, d.__shady.assignedSlot = void 0, (e = M(d)) && S.call(e, d);
      return b;
    };
    z.prototype.f = function (a, b) {
      var c = a.__shady.assignedNodes;
      c && this.wa(a, !0);
      a.__shady.assignedNodes = [];
      for (var d = !1, e = !1, f = 0, g = b.length, h; f <
      g; f++) (h = b[f]) && this.h(h, a) && (h.__shady.ma != a && (d = !0), this.b(h, a), b[f] = void 0, e = !0);
      if (!e) for (b = a.childNodes, e = 0; e < b.length; e++) h = b[e], h.__shady.ma != a && (d = !0), this.b(h, a);
      if (c) {
        for (h = 0; h < c.length; h++) c[h].__shady.ma = null;
        a.__shady.assignedNodes.length < c.length && (d = !0);
      }
      this.i(a);
      d && this.a(a);
    };
    z.prototype.wa = function (a, b) {
      var c = a.__shady.assignedNodes;
      if (c) for (var d = 0; d < c.length; d++) {
        var e = c[d];
        b && (e.__shady.ma = e.__shady.assignedSlot);
        e.__shady.assignedSlot === a && (e.__shady.assignedSlot = null);
      }
    };
    z.prototype.h =
      function (a, b) {
        b = (b = b.getAttribute('name')) ? b.trim() : '';
        a = (a = a.getAttribute && a.getAttribute('slot')) ? a.trim() : '';
        return a == b;
      };
    z.prototype.b = function (a, b) {
      b.__shady.assignedNodes.push(a);
      a.__shady.assignedSlot = b;
    };
    z.prototype.i = function (a) {
      var b = a.__shady.assignedNodes;
      a.__shady.K = [];
      for (var c = 0, d; c < b.length && (d = b[c]); c++) if (this.pa(d)) {
        var e = d.__shady.K;
        if (e) for (var f = 0; f < e.length; f++) a.__shady.K.push(e[f]);
      } else a.__shady.K.push(b[c]);
    };
    z.prototype.a = function (a) {
      Za.call(a, new Gd('slotchange'));
      a.__shady.assignedSlot &&
      this.a(a.__shady.assignedSlot);
    };
    z.prototype.$ = function (a) {
      return !a.__shady.assignedSlot;
    };
    var yb = {};
    n.prototype = Object.create(DocumentFragment.prototype);
    n.prototype.i = function (a) {
      this.Na = 'ShadyRoot';
      Q(a);
      Q(this);
      a.shadowRoot = this;
      this.host = a;
      this.ka = this.J = !1;
      this.s = new z(this);
      this.update();
    };
    n.prototype.update = function () {
      var a = this;
      this.J || (this.J = !0, Db(function () {
        return a.Ea();
      }));
    };
    n.prototype.h = function () {
      for (var a = this, b = this; b;) b.J && (a = b), b = b.Ra();
      return a;
    };
    n.prototype.Ra = function () {
      var a = this.host.getRootNode();
      if (E(a)) for (var b = this.host.childNodes, c = 0, d; c < b.length; c++) if (d = b[c], this.s.pa(d)) return a;
    };
    n.prototype.Ea = function () {
      this.J && this.h()._render();
    };
    n.prototype._render = function () {
      this.ka = this.J = !1;
      this.W || this.f();
      this.W = !1;
      this.na();
      this.j();
    };
    n.prototype.na = function () {
      for (var a = this.s.na(), b = 0; b < a.length; b++) a[b]._render();
    };
    n.prototype.f = function () {
      var a = this.a;
      if (a) for (var b = 0, c; b < a.length; b++) c = a[b], c.getRootNode() !== this && this.s.wa(c);
      a = this.a = this.s.Wa();
      for (b = 0; b < a.length; b++) c = a[b], c.__shady =
        c.__shady || {}, Q(c), Q(c.parentNode);
    };
    n.prototype.j = function () {
      this.g();
    };
    n.prototype.g = function () {
      this.c(this.host, this.b(this.host));
      for (var a = this.la(), b = 0, c = a.length, d, e; b < c && (d = a[b]); b++) e = d.parentNode, e !== this.host && e !== this && this.c(e, this.b(e));
    };
    n.prototype.b = function (a) {
      var b = [];
      a = (a.__shady && a.__shady.root || a).childNodes;
      for (var c = 0; c < a.length; c++) {
        var d = a[c];
        if (this.s.pa(d)) for (var e = d.__shady.K || (d.__shady.K = []), f = 0; f < e.length; f++) {
          var g = e[f];
          this.$(d, g) && b.push(g);
        } else b.push(d);
      }
      return b;
    };
    n.prototype.$ = function (a, b) {
      return this.s.$(a, b);
    };
    n.prototype.c = function (a, b) {
      for (var c = W(a), d = nd(b, b.length, c, c.length), e = 0, f = 0, g; e < d.length && (g = d[e]); e++) {
        for (var h = 0, k; h < g.S.length && (k = g.S[h]); h++) M(k) === a && S.call(a, k), c.splice(g.index + f, 1);
        f -= g.X;
      }
      for (e = 0; e < d.length && (g = d[e]); e++) for (f = c[g.index], h = g.index; h < g.index + g.X; h++) k = b[h], Ma.call(a, k, f), c.splice(h, 0, k);
    };
    n.prototype.oa = function () {
      return !(!this.a || !this.a.length);
    };
    n.prototype.la = function () {
      this.a || this.f();
      return this.a;
    };
    n.prototype.addEventListener =
      function (a, b, c) {
        'object' !== typeof c && (c = { capture: !!c });
        c.ja = this;
        this.host.addEventListener(a, b, c);
      };
    n.prototype.removeEventListener = function (a, b, c) {
      'object' !== typeof c && (c = { capture: !!c });
      c.ja = this;
      this.host.removeEventListener(a, b, c);
    };
    n.prototype.getElementById = function (a) {
      return this.querySelector('#' + a);
    };
    (function (a) {
      I(a, Ha, !0);
      I(a, Ia, !0);
    })(n.prototype);
    var rd = { addEventListener: fc.bind(window), removeEventListener: jc.bind(window) }, qd = {
      addEventListener: fc, removeEventListener: jc, appendChild: function (a) {
        return $b(this,
          a);
      }, insertBefore: function (a, b) {
        return $b(this, a, b);
      }, removeChild: function (a) {
        if (a.parentNode !== this) throw Error('The node to be removed is not a child of this node: ' + a);
        if (!Sb(a)) {
          var b = E(this) ? this.host : this, c = M(a);
          b === c && S.call(b, a);
        }
        Ka(this, null, a);
        return a;
      }, replaceChild: function (a, b) {
        this.insertBefore(a, b);
        this.removeChild(b);
        return a;
      }, cloneNode: function (a) {
        var b;
        if ('template' == this.localName) b = Ya.call(this, a); else if (b = Ya.call(this, !1), a) {
          a = this.childNodes;
          for (var c = 0, d; c < a.length; c++) d = a[c].cloneNode(!0),
            b.appendChild(d);
        }
        return b;
      }, getRootNode: function () {
        return La(this);
      }, get isConnected() {
        var a = this.ownerDocument;
        if (a && a.contains && a.contains(this) || (a = a.documentElement) && a.contains && a.contains(this)) return !0;
        for (a = this; a && !(a instanceof Document);) a = a.parentNode || (a instanceof n ? a.host : void 0);
        return !!(a && a instanceof Document);
      }, dispatchEvent: function (a) {
        fa();
        return Za.call(this, a);
      }
    }, sd = {
      get assignedSlot() {
        return nc(this);
      }
    }, Ra = {
      querySelector: function (a) {
        return Xb(this, function (b) {
          return Bc.call(b,
            a);
        }, function (a) {
          return !!a;
        })[0] || null;
      }, querySelectorAll: function (a) {
        return Xb(this, function (b) {
          return Bc.call(b, a);
        });
      }
    }, qc = {
      assignedNodes: function (a) {
        if ('slot' === this.localName) return Zb(this), this.__shady ? (a && a.flatten ? this.__shady.K : this.__shady.assignedNodes) || [] : [];
      }
    }, oc = Ca({
      setAttribute: function (a, b) {
        la || (la = window.ShadyCSS && window.ShadyCSS.ScopingShim);
        la && 'class' === a ? la.setElementClass(this, b) : (Cc.call(this, a, b), Wb(this, a));
      }, removeAttribute: function (a) {
        Dc.call(this, a);
        Wb(this, a);
      }, attachShadow: function (a) {
        if (!this) throw'Must provide a host.';
        if (!a) throw'Not enough arguments.';
        return new n(yb, this);
      }, get slot() {
        return this.getAttribute('slot');
      }, set slot(a) {
        this.setAttribute('slot', a);
      }, get assignedSlot() {
        return nc(this);
      }
    }, Ra, qc);
    Object.defineProperties(oc, Ec);
    var pc = Ca({
      importNode: function (a, b) {
        return bc(a, b);
      }, getElementById: function (a) {
        return this.querySelector('#' + a);
      }
    }, Ra);
    Object.defineProperties(pc, { _activeElement: Ia.activeElement });
    var Hd = HTMLElement.prototype.blur, td = Ca({
      blur: function () {
        var a = this.shadowRoot;
        (a = a && a.activeElement) ?
          a.blur() : Hd.call(this);
      }
    });
    C.Aa && (window.ShadyDOM = {
      inUse: C.Aa, patch: function (a) {
        return a;
      }, isShadyRoot: E, enqueue: Db, flush: fa, settings: C, filterMutations: gd, observeChildren: ed, unobserveChildren: dd, nativeMethods: Ad, nativeTree: Bd
    }, window.Event = Dd, window.CustomEvent = Ed, window.MouseEvent = Fd, md(), pd(), window.ShadowRoot = n);
    var ud = new Set('annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph'.split(' '));
    y.prototype.H = function (a, b) {
      this.u.set(a, b);
      this.l.set(b.constructor, b);
    };
    y.prototype.f = function (a) {
      return this.u.get(a);
    };
    y.prototype.G = function (a) {
      return this.l.get(a);
    };
    y.prototype.v = function (a) {
      this.h = !0;
      this.i.push(a);
    };
    y.prototype.j = function (a) {
      var b = this;
      this.h && L(a, function (a) {
        return b.g(a);
      });
    };
    y.prototype.g = function (a) {
      if (this.h && !a.__CE_patched) {
        a.__CE_patched = !0;
        for (var b = 0; b < this.i.length; b++) this.i[b](a);
      }
    };
    y.prototype.b = function (a) {
      var b = [];
      L(a, function (a) {
        return b.push(a);
      });
      for (a = 0; a < b.length; a++) {
        var c = b[a];
        1 === c.__CE_state ? this.connectedCallback(c) :
          this.A(c);
      }
    };
    y.prototype.a = function (a) {
      var b = [];
      L(a, function (a) {
        return b.push(a);
      });
      for (a = 0; a < b.length; a++) {
        var c = b[a];
        1 === c.__CE_state && this.disconnectedCallback(c);
      }
    };
    y.prototype.c = function (a, b) {
      b = b ? b : new Set;
      var c = this, d = [];
      L(a, function (a) {
        if ('link' === a.localName && 'import' === a.getAttribute('rel')) {
          var e = a.import;
          e instanceof Node && 'complete' === e.readyState ? (e.__CE_isImportDocument = !0, e.__CE_hasRegistry = !0) : a.addEventListener('load', function () {
            var d = a.import;
            d.__CE_documentLoadHandled || (d.__CE_documentLoadHandled =
              !0, d.__CE_isImportDocument = !0, d.__CE_hasRegistry = !0, b.delete(d), c.c(d, b));
          });
        } else d.push(a);
      }, b);
      if (this.h) for (a = 0; a < d.length; a++) this.g(d[a]);
      for (a = 0; a < d.length; a++) this.A(d[a]);
    };
    y.prototype.A = function (a) {
      if (void 0 === a.__CE_state) {
        var b = this.f(a.localName);
        if (b) {
          b.constructionStack.push(a);
          var c = b.constructor;
          try {
            try {
              if (new c !== a) throw Error('The custom element constructor did not produce the element being upgraded.');
            } finally {
              b.constructionStack.pop();
            }
          } catch (f) {
            throw a.__CE_state = 2, f;
          }
          a.__CE_state =
            1;
          a.__CE_definition = b;
          if (b.attributeChangedCallback) for (b = b.observedAttributes, c = 0; c < b.length; c++) {
            var d = b[c], e = a.getAttribute(d);
            null !== e && this.attributeChangedCallback(a, d, null, e, null);
          }
          m(a) && this.connectedCallback(a);
        }
      }
    };
    y.prototype.connectedCallback = function (a) {
      var b = a.__CE_definition;
      b.connectedCallback && b.connectedCallback.call(a);
    };
    y.prototype.disconnectedCallback = function (a) {
      var b = a.__CE_definition;
      b.disconnectedCallback && b.disconnectedCallback.call(a);
    };
    y.prototype.attributeChangedCallback = function (a,
                                                     b, c, d, e) {
      var f = a.__CE_definition;
      f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(b) && f.attributeChangedCallback.call(a, b, c, d, e);
    };
    ya.prototype.c = function () {
      this.I && this.I.disconnect();
    };
    ya.prototype.f = function (a) {
      var b = this.a.readyState;
      'interactive' !== b && 'complete' !== b || this.c();
      for (b = 0; b < a.length; b++) for (var c = a[b].addedNodes, d = 0; d < c.length; d++) this.b.c(c[d]);
    };
    xb.prototype.c = function () {
      if (this.a) throw Error('Already resolved.');
      this.a = void 0;
      this.b && this.b(void 0);
    };
    w.prototype.define =
      function (a, b) {
        var c = this;
        if (!(b instanceof Function)) throw new TypeError('Custom element constructors must be functions.');
        if (!rc(a)) throw new SyntaxError('The element name \'' + a + '\' is not valid.');
        if (this.a.f(a)) throw Error('A custom element with name \'' + a + '\' has already been defined.');
        if (this.f) throw Error('A custom element is already being defined.');
        this.f = !0;
        var d, e, f, g, h;
        try {
          var k = function (a) {
            var b = m[a];
            if (void 0 !== b && !(b instanceof Function)) throw Error('The \'' + a + '\' callback must be a function.');
            return b;
          }, m = b.prototype;
          if (!(m instanceof Object)) throw new TypeError('The custom element constructor\'s prototype is not an object.');
          d = k('connectedCallback');
          e = k('disconnectedCallback');
          f = k('adoptedCallback');
          g = k('attributeChangedCallback');
          h = b.observedAttributes || [];
        } catch (Xd) {
          return;
        } finally {
          this.f = !1;
        }
        this.a.H(a, {
          localName: a,
          constructor: b,
          connectedCallback: d,
          disconnectedCallback: e,
          adoptedCallback: f,
          attributeChangedCallback: g,
          observedAttributes: h,
          constructionStack: []
        });
        this.c.push(a);
        this.b || (this.b =
          !0, this.g(function () {
          return c.j();
        }));
      };
    w.prototype.j = function () {
      if (!1 !== this.b) for (this.b = !1, this.a.c(document); 0 < this.c.length;) {
        var a = this.c.shift();
        (a = this.h.get(a)) && a.c();
      }
    };
    w.prototype.get = function (a) {
      if (a = this.a.f(a)) return a.constructor;
    };
    w.prototype.whenDefined = function (a) {
      if (!rc(a)) return Promise.reject(new SyntaxError('\'' + a + '\' is not a valid custom element name.'));
      var b = this.h.get(a);
      if (b) return b.f;
      b = new xb;
      this.h.set(a, b);
      this.a.f(a) && -1 === this.c.indexOf(a) && b.c();
      return b.f;
    };
    w.prototype.l =
      function (a) {
        this.i.c();
        var b = this.g;
        this.g = function (c) {
          return a(function () {
            return b(c);
          });
        };
      };
    window.CustomElementRegistry = w;
    w.prototype.define = w.prototype.define;
    w.prototype.get = w.prototype.get;
    w.prototype.whenDefined = w.prototype.whenDefined;
    w.prototype.polyfillWrapFlushCallback = w.prototype.l;
    var ua = window.Document.prototype.createElement, Zc = window.Document.prototype.createElementNS, Yc = window.Document.prototype.importNode,
      $c = window.Document.prototype.prepend, ad = window.Document.prototype.append, mb = window.Node.prototype.cloneNode,
      ca = window.Node.prototype.appendChild, ub = window.Node.prototype.insertBefore, va = window.Node.prototype.removeChild, vb = window.Node.prototype.replaceChild,
      xa = Object.getOwnPropertyDescriptor(window.Node.prototype, 'textContent'), lb = window.Element.prototype.attachShadow,
      sa = Object.getOwnPropertyDescriptor(window.Element.prototype, 'innerHTML'), wa = window.Element.prototype.getAttribute, nb = window.Element.prototype.setAttribute,
      pb = window.Element.prototype.removeAttribute, da = window.Element.prototype.getAttributeNS,
      ob = window.Element.prototype.setAttributeNS, qb = window.Element.prototype.removeAttributeNS, sb = window.Element.prototype.insertAdjacentElement,
      Pc = window.Element.prototype.prepend, Qc = window.Element.prototype.append, Sc = window.Element.prototype.before, Tc = window.Element.prototype.after,
      Uc = window.Element.prototype.replaceWith, Vc = window.Element.prototype.remove, cd = window.HTMLElement,
      ta = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, 'innerHTML'), rb = window.HTMLElement.prototype.insertAdjacentElement,
      wb = new function () {
      }, ma = window.customElements;
    if (!ma || ma.forcePolyfill || 'function' != typeof ma.define || 'function' != typeof ma.get) {
      var Z = new y;
      bd(Z);
      Xc(Z);
      Wc(Z);
      Oc(Z);
      document.__CE_hasRegistry = !0;
      var Id = new w(Z);
      Object.defineProperty(window, 'customElements', { configurable: !0, enumerable: !0, value: Id });
    }
    var H = { STYLE_RULE: 1, ga: 7, MEDIA_RULE: 4, sa: 1E3 }, F = {
      Va: /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
      port: /@import[^;]*;/gim,
      xa: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
      Ba: /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
      ab: /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
      gb: /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
      $a: /^@[^\s]*keyframes/,
      Ca: /\s+/g
    }, u = !(window.ShadyDOM && window.ShadyDOM.inUse), v;
    window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? v = window.ShadyCSS.nativeCss : window.ShadyCSS ? (uc(window.ShadyCSS), window.ShadyCSS = void 0) : uc(window.WebComponents && window.WebComponents.flags);
    var na = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^\)]*?\)|[^};{])+)|\{([^\}]*)\}(?:(?=[;\s}])|$))/gi,
      oa = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
      Jd = /(--[\w-]+)\s*([:,;)]|$)/gi, Kd = /(animation\s*:)|(animation-name\s*:)/, wd = /@media[^(]*(\([^)]*\))/, Ld = /\{[^}]*\}/g, O = null;
    q.prototype.a = function (a, b, c) {
      a.__styleScoped ? a.__styleScoped = null : this.i(a, b || '', c);
    };
    q.prototype.i = function (a, b, c) {
      a.nodeType === Node.ELEMENT_NODE && this.A(a, b, c);
      if (a = 'template' === a.localName ? (a.content || a.kb).childNodes : a.children || a.childNodes) for (var d = 0; d < a.length; d++) this.i(a[d], b, c);
    };
    q.prototype.A = function (a, b, c) {
      if (b) if (a.classList) c ? (a.classList.remove('style-scope'),
        a.classList.remove(b)) : (a.classList.add('style-scope'), a.classList.add(b)); else if (a.getAttribute) {
        var d = a.getAttribute(Md);
        c ? d && (b = d.replace('style-scope', '').replace(b, ''), ia(a, b)) : ia(a, (d ? d + ' ' : '') + 'style-scope ' + b);
      }
    };
    q.prototype.b = function (a, b, c) {
      var d = a.__cssBuild;
      u || 'shady' === d ? b = T(b, c) : (a = P(a), b = this.M(b, a.is, a.T, c) + '\n\n');
      return b.trim();
    };
    q.prototype.M = function (a, b, c, d) {
      var e = this.f(b, c);
      b = this.h(b);
      var f = this;
      return T(a, function (a) {
        a.c || (f.O(a, b, e), a.c = !0);
        d && d(a, b, e);
      });
    };
    q.prototype.h = function (a) {
      return a ?
        Nd + a : '';
    };
    q.prototype.f = function (a, b) {
      return b ? '[is=' + a + ']' : a;
    };
    q.prototype.O = function (a, b, c) {
      this.j(a, this.g, b, c);
    };
    q.prototype.j = function (a, b, c, d) {
      a.selector = a.w = this.l(a, b, c, d);
    };
    q.prototype.l = function (a, b, c, d) {
      var e = a.selector.split(Fc);
      if (!vc(a)) {
        a = 0;
        for (var f = e.length, g; a < f && (g = e[a]); a++) e[a] = b.call(this, g, c, d);
      }
      return e.join(Fc);
    };
    q.prototype.g = function (a, b, c) {
      var d = this, e = !1;
      a = a.trim();
      a = a.replace(Od, function (a, b, c) {
        return ':' + b + '(' + c.replace(/\s/g, '') + ')';
      });
      a = a.replace(Pd, bb + ' $1');
      return a = a.replace(Qd,
        function (a, g, h) {
          e || (a = d.G(h, g, b, c), e = e || a.stop, g = a.Ua, h = a.value);
          return g + h;
        });
    };
    q.prototype.G = function (a, b, c, d) {
      var e = a.indexOf(cb);
      0 <= a.indexOf(bb) ? a = this.U(a, d) : 0 !== e && (a = c ? this.u(a, c) : a);
      c = !1;
      0 <= e && (b = '', c = !0);
      var f;
      c && (f = !0, c && (a = a.replace(Rd, function (a, b) {
        return ' > ' + b;
      })));
      a = a.replace(Sd, function (a, b, c) {
        return '[dir="' + c + '"] ' + b + ', ' + b + '[dir="' + c + '"]';
      });
      return { value: a, Ua: b, stop: f };
    };
    q.prototype.u = function (a, b) {
      a = a.split(Gc);
      a[0] += b;
      return a.join(Gc);
    };
    q.prototype.U = function (a, b) {
      var c = a.match(Hc);
      return (c = c && c[2].trim() || '') ? c[0].match(Ic) ? a.replace(Hc, function (a, c, f) {
        return b + f;
      }) : c.split(Ic)[0] === b ? c : Td : a.replace(bb, b);
    };
    q.prototype.N = function (a) {
      a.selector = a.parsedSelector;
      this.v(a);
      this.j(a, this.H);
    };
    q.prototype.v = function (a) {
      a.selector === Ud && (a.selector = 'html');
    };
    q.prototype.H = function (a) {
      return a.match(cb) ? this.g(a, Jc) : this.u(a.trim(), Jc);
    };
    hb.Object.defineProperties(q.prototype, {
      c: {
        configurable: !0, enumerable: !0, get: function () {
          return 'style-scope';
        }
      }
    });
    var Od = /:(nth[-\w]+)\(([^)]+)\)/, Jc = ':not(.style-scope)',
      Fc = ',', Qd = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=\[])+)/g, Ic = /[[.:#*]/, bb = ':host', Ud = ':root', cb = '::slotted', Pd = new RegExp('^(' + cb + ')'),
      Hc = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Rd = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/, Sd = /(.*):dir\((?:(ltr|rtl))\)/, Nd = '.', Gc = ':', Md = 'class',
      Td = 'should_not_match', t = new q;
    r.get = function (a) {
      return a ? a.__styleInfo : null;
    };
    r.set = function (a, b) {
      return a.__styleInfo = b;
    };
    r.prototype.c = function () {
      return this.D;
    };
    r.prototype._getStyleRules = r.prototype.c;
    var Kc = function (a) {
      return a.matches ||
        a.matchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector || a.webkitMatchesSelector;
    }(window.Element.prototype), Vd = navigator.userAgent.match('Trident');
    p.prototype.O = function (a) {
      var b = this, c = {}, d = [], e = 0;
      U(a, function (a) {
        b.c(a);
        a.index = e++;
        b.N(a.m.cssText, c);
      }, function (a) {
        d.push(a);
      });
      a.b = d;
      a = [];
      for (var f in c) a.push(f);
      return a;
    };
    p.prototype.c = function (a) {
      if (!a.m) {
        var b = {}, c = {};
        this.b(a, c) && (b.C = c, a.rules = null);
        b.cssText = this.M(a);
        a.m = b;
      }
    };
    p.prototype.b = function (a, b) {
      var c = a.m;
      if (c) {
        if (c.C) return Object.assign(b,
          c.C), !0;
      } else {
        for (var c = a.parsedCssText, d; a = na.exec(c);) {
          d = (a[2] || a[3]).trim();
          if ('inherit' !== d || 'unset' !== d) b[a[1].trim()] = d;
          d = !0;
        }
        return d;
      }
    };
    p.prototype.M = function (a) {
      return this.U(a.parsedCssText);
    };
    p.prototype.U = function (a) {
      return a.replace(Ld, '').replace(na, '');
    };
    p.prototype.N = function (a, b) {
      for (var c; c = Jd.exec(a);) {
        var d = c[1];
        ':' !== c[2] && (b[d] = !0);
      }
    };
    p.prototype.da = function (a) {
      for (var b = Object.getOwnPropertyNames(a), c = 0, d; c < b.length; c++) d = b[c], a[d] = this.a(a[d], a);
    };
    p.prototype.a = function (a, b) {
      if (a) if (0 <=
        a.indexOf(';')) a = this.f(a, b); else {
        var c = this;
        a = xc(a, function (a, e, f, g) {
          if (!e) return a + g;
          (e = c.a(b[e], b)) && 'initial' !== e ? 'apply-shim-inherit' === e && (e = 'inherit') : e = c.a(b[f] || f, b) || f;
          return a + (e || '') + g;
        });
      }
      return a && a.trim() || '';
    };
    p.prototype.f = function (a, b) {
      a = a.split(';');
      for (var c = 0, d, e; c < a.length; c++) if (d = a[c]) {
        oa.lastIndex = 0;
        if (e = oa.exec(d)) d = this.a(b[e[1]], b); else if (e = d.indexOf(':'), -1 !== e) {
          var f = d.substring(e), f = f.trim(), f = this.a(f, b) || f;
          d = d.substring(0, e) + f;
        }
        a[c] = d && d.lastIndexOf(';') === d.length - 1 ?
          d.slice(0, -1) : d || '';
      }
      return a.join(';');
    };
    p.prototype.H = function (a, b) {
      var c = '';
      a.m || this.c(a);
      a.m.cssText && (c = this.f(a.m.cssText, b));
      a.cssText = c;
    };
    p.prototype.G = function (a, b) {
      var c = a.cssText, d = a.cssText;
      null == a.za && (a.za = Kd.test(c));
      if (a.za) if (null == a.aa) {
        a.aa = [];
        for (var e in b) d = b[e], d = d(c), c !== d && (c = d, a.aa.push(e));
      } else {
        for (e = 0; e < a.aa.length; ++e) d = b[a.aa[e]], c = d(c);
        d = c;
      }
      a.cssText = d;
    };
    p.prototype.ca = function (a, b) {
      var c = {}, d = this, e = [];
      U(a, function (a) {
        a.m || d.c(a);
        var f = a.w || a.parsedSelector;
        b && a.m.C && f &&
        Kc.call(b, f) && (d.b(a, c), a = a.index, f = parseInt(a / 32, 10), e[f] = (e[f] || 0) | 1 << a % 32);
      }, null, !0);
      return { C: c, key: e };
    };
    p.prototype.fa = function (a, b, c, d) {
      b.m || this.c(b);
      if (b.m.C) {
        var e = P(a);
        a = e.is;
        var e = e.T, e = a ? t.f(a, e) : 'html', f = b.parsedSelector, g = ':host > *' === f || 'html' === f, h = 0 === f.indexOf(':host') && !g;
        'shady' === c && (g = f === e + ' > *.' + e || -1 !== f.indexOf('html'), h = !g && 0 === f.indexOf(e));
        'shadow' === c && (g = ':host > *' === f || 'html' === f, h = h && !g);
        if (g || h) c = e, h && (u && !b.w && (b.w = t.l(b, t.g, t.h(a), e)), c = b.w || e), d({ fb: c, Za: h, mb: g });
      }
    };
    p.prototype.ba = function (a, b) {
      var c = {}, d = {}, e = this, f = b && b.__cssBuild;
      U(b, function (b) {
        e.fa(a, b, f, function (f) {
          Kc.call(a.lb || a, f.fb) && (f.Za ? e.b(b, c) : e.b(b, d));
        });
      }, null, !0);
      return { cb: d, Ya: c };
    };
    p.prototype.ea = function (a, b, c) {
      var d = this, e = P(a), f = t.f(e.is, e.T), g = new RegExp('(?:^|[^.#[:])' + (a.extends ? '\\' + f.slice(0, -1) + '\\]' : f) + '($|[.:[\\s>+~])'), e = r.get(a).D,
        h = this.h(e, c);
      return t.b(a, e, function (a) {
        d.H(a, b);
        u || vc(a) || !a.cssText || (d.G(a, h), d.l(a, g, f, c));
      });
    };
    p.prototype.h = function (a, b) {
      a = a.b;
      var c = {};
      if (!u && a) for (var d =
        0, e = a[d]; d < a.length; e = a[++d]) this.j(e, b), c[e.keyframesName] = this.i(e);
      return c;
    };
    p.prototype.i = function (a) {
      return function (b) {
        return b.replace(a.f, a.a);
      };
    };
    p.prototype.j = function (a, b) {
      a.f = new RegExp(a.keyframesName, 'g');
      a.a = a.keyframesName + '-' + b;
      a.w = a.w || a.selector;
      a.selector = a.w.replace(a.keyframesName, a.a);
    };
    p.prototype.l = function (a, b, c, d) {
      a.w = a.w || a.selector;
      d = '.' + d;
      for (var e = a.w.split(','), f = 0, g = e.length, h; f < g && (h = e[f]); f++) e[f] = h.match(b) ? h.replace(c, d) : d + ' ' + h;
      a.selector = e.join(',');
    };
    p.prototype.v =
      function (a, b, c) {
        var d = a.getAttribute('class') || '', e = d;
        c && (e = d.replace(new RegExp('\\s*x-scope\\s*' + c + '\\s*', 'g'), ' '));
        e += (e ? ' ' : '') + 'x-scope ' + b;
        d !== e && ia(a, e);
      };
    p.prototype.A = function (a, b, c, d) {
      b = d ? d.textContent || '' : this.ea(a, b, c);
      var e = r.get(a), f = e.a;
      f && !u && f !== d && (f._useCount--, 0 >= f._useCount && f.parentNode && f.parentNode.removeChild(f));
      u ? e.a ? (e.a.textContent = b, d = e.a) : b && (d = Ua(b, c, a.shadowRoot, e.b)) : d ? d.parentNode || (Vd && -1 < b.indexOf('@media') && (d.textContent = b), wc(d, null, e.b)) : b && (d = Ua(b, c, null,
        e.b));
      d && (d._useCount = d._useCount || 0, e.a != d && d._useCount++, e.a = d);
      return d;
    };
    p.prototype.u = function (a, b) {
      var c = ha(a), d = this;
      a.textContent = T(c, function (a) {
        var c = a.cssText = a.parsedCssText;
        a.m && a.m.cssText && (c = c.replace(F.xa, '').replace(F.Ba, ''), a.cssText = d.f(c, b));
      });
    };
    hb.Object.defineProperties(p.prototype, {
      g: {
        configurable: !0, enumerable: !0, get: function () {
          return 'x-scope';
        }
      }
    });
    var K = new p, db = {}, pa = window.customElements;
    if (pa && !u) {
      var Wd = pa.define;
      pa.define = function (a, b, c) {
        var d = document.createComment(' Shady DOM styles for ' +
          a + ' '), e = document.head;
        e.insertBefore(d, (O ? O.nextSibling : null) || e.firstChild);
        O = d;
        db[a] = d;
        return Wd.call(pa, a, b, c);
      };
    }
    ba.prototype.a = function (a, b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d];
        if (a.C[e] !== b[e]) return !1;
      }
      return !0;
    };
    ba.prototype.b = function (a, b, c, d) {
      var e = this.cache[a] || [];
      e.push({ C: b, styleElement: c, B: d });
      e.length > this.c && e.shift();
      this.cache[a] = e;
    };
    ba.prototype.fetch = function (a, b, c) {
      if (a = this.cache[a]) for (var d = a.length - 1; 0 <= d; d--) {
        var e = a[d];
        if (this.a(e, b, c)) return e;
      }
    };
    if (!u) {
      var Lc = new MutationObserver(yc),
        Mc = function (a) {
          Lc.observe(a, { childList: !0, subtree: !0 });
        };
      if (window.customElements && !window.customElements.polyfillWrapFlushCallback) Mc(document); else {
        var eb = function () {
          Mc(document.body);
        };
        window.HTMLImports ? window.HTMLImports.whenReady(eb) : requestAnimationFrame(function () {
          if ('loading' === document.readyState) {
            var a = function () {
              eb();
              document.removeEventListener('readystatechange', a);
            };
            document.addEventListener('readystatechange', a);
          } else eb();
        });
      }
      jb = function () {
        yc(Lc.takeRecords());
      };
    }
    var ja = {}, zd = Promise.resolve(),
      Va = null, Ac = window.HTMLImports && window.HTMLImports.whenReady || null, Wa, qa = null, aa = null;
    D.prototype.ya = function () {
      !this.enqueued && aa && (this.enqueued = !0, ib(aa));
    };
    D.prototype.b = function (a) {
      a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), this.ya());
    };
    D.prototype.a = function (a) {
      return a.__shadyCSSCachedStyle ? a.__shadyCSSCachedStyle : a.getStyle ? a.getStyle() : a;
    };
    D.prototype.c = function () {
      for (var a = this.customStyles, b = 0; b < a.length; b++) {
        var c = a[b];
        if (!c.__shadyCSSCachedStyle) {
          var d = this.a(c);
          if (d) {
            var e = d.__appliedElement;
            if (e) for (var f = 0; f < d.attributes.length; f++) {
              var g = d.attributes[f];
              e.setAttribute(g.name, g.value);
            }
            d = e || d;
            qa && qa(d);
            c.__shadyCSSCachedStyle = d;
          }
        }
      }
      return a;
    };
    D.prototype.addCustomStyle = D.prototype.b;
    D.prototype.getStyleForCustomStyle = D.prototype.a;
    D.prototype.processStyles = D.prototype.c;
    Object.defineProperties(D.prototype, {
      transformCallback: {
        get: function () {
          return qa;
        }, set: function (a) {
          qa = a;
        }
      }, validateCallback: {
        get: function () {
          return aa;
        }, set: function (a) {
          var b = !1;
          aa || (b = !0);
          aa =
            a;
          b && this.ya();
        }
      }
    });
    var Nc = new ba;
    k.prototype.G = function () {
      jb();
    };
    k.prototype.ba = function (a) {
      var b = this.u[a] = (this.u[a] || 0) + 1;
      return a + '-' + b;
    };
    k.prototype.Ia = function (a) {
      return ha(a);
    };
    k.prototype.Ka = function (a) {
      return T(a);
    };
    k.prototype.O = function (a) {
      a = a.content.querySelectorAll('style');
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        b.push(d.textContent);
        d.parentNode.removeChild(d);
      }
      return b.join('').trim();
    };
    k.prototype.da = function (a) {
      return (a = a.content.querySelector('style')) ? a.getAttribute('css-build') ||
        '' : '';
    };
    k.prototype.prepareTemplate = function (a, b, c) {
      if (!a.f) {
        a.f = !0;
        a.name = b;
        a.extends = c;
        ja[b] = a;
        var d = this.da(a), e = this.O(a);
        c = { is: b, extends: c, ib: d };
        u || t.a(a.content, b);
        this.c();
        var f = oa.test(e) || na.test(e);
        oa.lastIndex = 0;
        na.lastIndex = 0;
        e = Ta(e);
        f && v && this.a && this.a.transformRules(e, b);
        a._styleAst = e;
        a.g = d;
        d = [];
        v || (d = K.O(a._styleAst));
        if (!d.length || v) b = this.ca(c, a._styleAst, u ? a.content : null, db[b]), a.a = b;
        a.c = d;
      }
    };
    k.prototype.ca = function (a, b, c, d) {
      b = t.b(a, b);
      if (b.length) return Ua(b, a.is, c, d);
    };
    k.prototype.fa =
      function (a) {
        var b = P(a), c = b.is, b = b.T, d = db[c], c = ja[c], e, f;
        c && (e = c._styleAst, f = c.c);
        return r.set(a, new r(e, d, f, 0, b));
      };
    k.prototype.M = function () {
      !this.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (this.a = window.ShadyCSS.ApplyShim, this.a.invalidCallback = xd);
    };
    k.prototype.N = function () {
      var a = this;
      !this.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (this.b = window.ShadyCSS.CustomStyleInterface, this.b.transformCallback = function (b) {
        a.A(b);
      }, this.b.validateCallback = function () {
        requestAnimationFrame(function () {
          (a.b.enqueued ||
            a.i) && a.f();
        });
      });
    };
    k.prototype.c = function () {
      this.M();
      this.N();
    };
    k.prototype.f = function () {
      this.c();
      if (this.b) {
        var a = this.b.processStyles();
        this.b.enqueued && (v ? this.Ga(a) : (this.v(this.g, this.h), this.H(a)), this.b.enqueued = !1, this.i && !v && this.styleDocument());
      }
    };
    k.prototype.styleElement = function (a, b) {
      var c = P(a).is, d = r.get(a);
      d || (d = this.fa(a));
      this.j(a) || (this.i = !0);
      b && (d.L = d.L || {}, Object.assign(d.L, b));
      if (v) {
        if (d.L) {
          b = d.L;
          for (var e in b) null === e ? a.style.removeProperty(e) : a.style.setProperty(e, b[e]);
        }
        if (((e =
          ja[c]) || this.j(a)) && e && e.a && !zc(e)) {
          if (zc(e) || e._applyShimValidatingVersion !== e._applyShimNextVersion) this.c(), this.a && this.a.transformRules(e._styleAst, c), e.a.textContent = t.b(a, d.D), yd(e);
          u && (c = a.shadowRoot) && (c.querySelector('style').textContent = t.b(a, d.D));
          d.D = e._styleAst;
        }
      } else this.v(a, d), d.qa && d.qa.length && this.U(a, d);
    };
    k.prototype.l = function (a) {
      return (a = a.getRootNode().host) ? r.get(a) ? a : this.l(a) : this.g;
    };
    k.prototype.j = function (a) {
      return a === this.g;
    };
    k.prototype.U = function (a, b) {
      var c = P(a).is, d =
        Nc.fetch(c, b.F, b.qa), e = d ? d.styleElement : null, f = b.B;
      b.B = d && d.B || this.ba(c);
      e = K.A(a, b.F, b.B, e);
      u || K.v(a, b.B, f);
      d || Nc.b(c, b.F, e, b.B);
    };
    k.prototype.v = function (a, b) {
      var c = this.l(a), d = r.get(c), c = Object.create(d.F || null), e = K.ba(a, b.D);
      a = K.ca(d.D, a).C;
      Object.assign(c, e.Ya, a, e.cb);
      this.ea(c, b.L);
      K.da(c);
      b.F = c;
    };
    k.prototype.ea = function (a, b) {
      for (var c in b) {
        var d = b[c];
        if (d || 0 === d) a[c] = d;
      }
    };
    k.prototype.styleDocument = function (a) {
      this.styleSubtree(this.g, a);
    };
    k.prototype.styleSubtree = function (a, b) {
      var c = a.shadowRoot;
      (c || this.j(a)) && this.styleElement(a, b);
      if (b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++) this.styleSubtree(b[a]); else if (a = a.children || a.childNodes) for (b = 0; b < a.length; b++) this.styleSubtree(a[b]);
    };
    k.prototype.Ga = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = this.b.getStyleForCustomStyle(a[b]);
        c && this.Fa(c);
      }
    };
    k.prototype.H = function (a) {
      for (var b = 0; b < a.length; b++) {
        var c = this.b.getStyleForCustomStyle(a[b]);
        c && K.u(c, this.h.F);
      }
    };
    k.prototype.A = function (a) {
      var b = this, c = ha(a);
      U(c, function (a) {
        u ? t.v(a) :
          t.N(a);
        v && (b.c(), b.a && b.a.transformRule(a));
      });
      v ? a.textContent = T(c) : this.h.D.rules.push(c);
    };
    k.prototype.Fa = function (a) {
      if (v && this.a) {
        var b = ha(a);
        this.c();
        this.a.transformRules(b);
        a.textContent = T(b);
      }
    };
    k.prototype.getComputedStyleValue = function (a, b) {
      var c;
      v || (c = (r.get(a) || r.get(this.l(a))).F[b]);
      return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : '';
    };
    k.prototype.Ja = function (a, b) {
      var c = a.getRootNode();
      b = b ? b.split(/\s/) : [];
      c = c.host && c.host.localName;
      if (!c) {
        var d = a.getAttribute('class');
        if (d) for (var d = d.split(/\s/), e = 0; e < d.length; e++) if (d[e] === t.c) {
          c = d[e + 1];
          break;
        }
      }
      c && b.push(t.c, c);
      v || (c = r.get(a)) && c.B && b.push(K.g, c.B);
      ia(a, b.join(' '));
    };
    k.prototype.Ha = function (a) {
      return r.get(a);
    };
    k.prototype.flush = k.prototype.G;
    k.prototype.prepareTemplate = k.prototype.prepareTemplate;
    k.prototype.styleElement = k.prototype.styleElement;
    k.prototype.styleDocument = k.prototype.styleDocument;
    k.prototype.styleSubtree = k.prototype.styleSubtree;
    k.prototype.getComputedStyleValue = k.prototype.getComputedStyleValue;
    k.prototype.setElementClass = k.prototype.Ja;
    k.prototype._styleInfoForNode = k.prototype.Ha;
    k.prototype.transformCustomStyleForDocument = k.prototype.A;
    k.prototype.getStyleAst = k.prototype.Ia;
    k.prototype.styleAstToString = k.prototype.Ka;
    k.prototype.flushCustomStyles = k.prototype.f;
    Object.defineProperties(k.prototype, {
      nativeShadow: {
        get: function () {
          return u;
        }
      }, nativeCss: {
        get: function () {
          return v;
        }
      }
    });
    var G = new k, fb, gb;
    window.ShadyCSS && (fb = window.ShadyCSS.ApplyShim, gb = window.ShadyCSS.CustomStyleInterface);
    window.ShadyCSS =
      {
        ScopingShim: G, prepareTemplate: function (a, b, c) {
          G.f();
          G.prepareTemplate(a, b, c);
        }, styleSubtree: function (a, b) {
          G.f();
          G.styleSubtree(a, b);
        }, styleElement: function (a) {
          G.f();
          G.styleElement(a);
        }, styleDocument: function (a) {
          G.f();
          G.styleDocument(a);
        }, getComputedStyleValue: function (a, b) {
          return G.getComputedStyleValue(a, b);
        }, nativeCss: v, nativeShadow: u
      };
    fb && (window.ShadyCSS.ApplyShim = fb);
    gb && (window.ShadyCSS.CustomStyleInterface = gb);
    (function () {
      function a() {
        requestAnimationFrame(function () {
          window.WebComponents.ready =
            !0;
          window.document.dispatchEvent(new CustomEvent('WebComponentsReady', { bubbles: !0 }));
        });
      }

      function b() {
        a();
        c.removeEventListener('readystatechange', b);
      }

      var c = window.document;
      window.WebComponents = window.WebComponents || {};
      'loading' !== c.readyState ? a() : c.addEventListener('readystatechange', b);
    })();
  })();
}).call(self);

//# sourceMappingURL=webcomponents-sd-ce.js.map
