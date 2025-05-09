import { defineComponent as g, createElementBlock as c, openBlock as a, normalizeClass as $, createCommentVNode as m, createElementVNode as r, renderSlot as V, ref as h, onMounted as z, createBlock as N, Transition as D, withCtx as C, normalizeStyle as M, toDisplayString as f, createVNode as w, render as x, resolveComponent as Z, Fragment as A, renderList as G, computed as J, Teleport as K, withModifiers as Q, unref as F, createTextVNode as H, onUnmounted as ee, nextTick as W, withDirectives as te, vShow as oe } from "vue";
import se from "highlight.js";
const ne = ["disabled"], le = {
  key: 0,
  class: "button__loading"
}, ae = {
  key: 1,
  class: "button__icon"
}, ie = { class: "button__text" }, de = /* @__PURE__ */ g({
  __name: "Button",
  props: {
    type: {},
    size: {},
    disabled: { type: Boolean },
    loading: { type: Boolean },
    round: { type: Boolean },
    plain: { type: Boolean }
  },
  emits: ["click"],
  setup(e, { emit: i }) {
    const s = e, l = i, n = (t) => {
      !s.disabled && !s.loading && l("click", t);
    };
    return (t, u) => (a(), c("button", {
      class: $(["button", [
        `button--${t.type}`,
        `button--${t.size}`,
        { "is-disabled": t.disabled },
        { "is-loading": t.loading },
        { "is-round": t.round },
        { "is-plain": t.plain }
      ]]),
      disabled: t.disabled || t.loading,
      onClick: n
    }, [
      t.loading ? (a(), c("span", le, u[0] || (u[0] = [
        r("span", { class: "button__loading-spinner" }, null, -1)
      ]))) : m("", !0),
      t.$slots.icon ? (a(), c("span", ae, [
        V(t.$slots, "icon", {}, void 0, !0)
      ])) : m("", !0),
      r("span", ie, [
        V(t.$slots, "default", {}, void 0, !0)
      ])
    ], 10, ne));
  }
}), y = (e, i) => {
  const s = e.__vccOpts || e;
  for (const [l, n] of i)
    s[l] = n;
  return s;
}, T = /* @__PURE__ */ y(de, [["__scopeId", "data-v-8123d97f"]]), ce = {
  name: "VButton",
  ...T,
  install: (e) => {
    e.component("VButton", T);
  }
}, re = { class: "input-wrapper" }, ue = ["type", "value", "placeholder", "disabled"], pe = /* @__PURE__ */ g({
  __name: "Input",
  props: {
    modelValue: {},
    type: {},
    size: {},
    placeholder: {},
    disabled: { type: Boolean },
    round: { type: Boolean }
  },
  emits: ["update:modelValue", "change", "focus", "blur"],
  setup(e, { expose: i, emit: s }) {
    const l = s, n = h(), t = (o) => {
      const b = o.target;
      l("update:modelValue", b.value);
    }, u = (o) => {
      const b = o.target;
      l("change", b.value);
    }, _ = (o) => {
      l("focus", o);
    }, d = (o) => {
      l("blur", o);
    };
    return i({
      focus: () => {
        var o;
        return (o = n.value) == null ? void 0 : o.focus();
      },
      blur: () => {
        var o;
        return (o = n.value) == null ? void 0 : o.blur();
      }
    }), (o, b) => (a(), c("div", re, [
      r("input", {
        class: $(["input", [
          `input--${o.size}`,
          {
            "is-disabled": o.disabled,
            "is-round": o.round
          }
        ]]),
        type: o.type,
        value: o.modelValue,
        placeholder: o.placeholder,
        disabled: o.disabled,
        onInput: t,
        onChange: u,
        onFocus: _,
        onBlur: d
      }, null, 42, ue)
    ]));
  }
}), j = /* @__PURE__ */ y(pe, [["__scopeId", "data-v-6ba89409"]]), _e = {
  name: "VInput",
  ...j,
  install: (e) => {
    e.component("VInput", j);
  }
}, me = { class: "message__content" }, ve = { class: "message__text" }, fe = /* @__PURE__ */ g({
  __name: "Message",
  props: {
    message: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "info"
    },
    duration: {
      type: Number,
      default: 3e3
    },
    showClose: {
      type: Boolean,
      default: !1
    },
    top: {
      type: Number,
      default: 20
    }
  },
  setup(e, { expose: i }) {
    const s = e, l = h(!1);
    let n = null;
    const t = () => {
      l.value = !1, n && (clearTimeout(n), n = null);
    };
    return z(() => {
      l.value = !0, s.duration > 0 && (n = window.setTimeout(() => {
        t();
      }, s.duration));
    }), i({
      close: t
    }), (u, _) => (a(), N(D, { name: "message-fade" }, {
      default: C(() => [
        l.value ? (a(), c("div", {
          key: 0,
          class: $(["message", [e.type ? `message--${e.type}` : ""]]),
          style: M({ top: `${e.top}px` })
        }, [
          r("div", me, [
            r("span", ve, f(e.message), 1),
            e.showClose ? (a(), c("button", {
              key: 0,
              class: "message__close",
              onClick: t
            }, "×")) : m("", !0)
          ])
        ], 6)) : m("", !0)
      ]),
      _: 1
    }));
  }
}), he = /* @__PURE__ */ y(fe, [["__scopeId", "data-v-0a5cb3c6"]]);
let B = null;
const U = document.createElement("div"), I = (e) => {
  typeof e == "string" && (e = {
    message: e
  }), B && B.component.exposed.close();
  const i = w(he, {
    ...e,
    onClose: () => {
      x(null, U), B = null;
    }
  });
  return x(i, U), B = i, i.component;
};
I.install = (e) => {
  e.config.globalProperties.$message = I;
};
const ge = { class: "tree" }, ye = {
  class: "tree-node__content",
  style: { paddingLeft: "20px" }
}, be = ["onClick"], ke = ["onClick"], we = {
  key: 0,
  class: "tree-node__children"
}, $e = /* @__PURE__ */ g({
  __name: "Tree",
  props: {
    data: {}
  },
  emits: ["node-click", "node-check"],
  setup(e, { emit: i }) {
    const s = i, l = (t) => {
      t.disabled || s("node-click", t);
    }, n = (t) => {
      t.disabled || (t.expanded = !t.expanded);
    };
    return (t, u) => {
      const _ = Z("Tree", !0);
      return a(), c("div", ge, [
        (a(!0), c(A, null, G(t.data, (d) => (a(), c("div", {
          key: d.label,
          class: "tree-node"
        }, [
          r("div", ye, [
            d.children && d.children.length ? (a(), c("span", {
              key: 0,
              class: $(["tree-node__expand-icon", { "is-expanded": d.expanded }]),
              onClick: (o) => n(d)
            }, u[0] || (u[0] = [
              r("i", { class: "arrow" }, null, -1)
            ]), 10, be)) : m("", !0),
            r("span", {
              class: "tree-node__label",
              onClick: (o) => l(d)
            }, f(d.label), 9, ke)
          ]),
          d.children && d.children.length && d.expanded ? (a(), c("div", we, [
            w(_, {
              data: d.children
            }, null, 8, ["data"])
          ])) : m("", !0)
        ]))), 128))
      ]);
    };
  }
}), q = /* @__PURE__ */ y($e, [["__scopeId", "data-v-4c66776b"]]), Ce = {
  name: "VTree",
  ...q,
  install: (e) => {
    e.component("VTree", q);
  }
}, Ve = { class: "dialog__header" }, Be = { class: "dialog__title" }, Te = { class: "dialog__body" }, Ie = {
  key: 0,
  class: "dialog__footer"
}, Ee = /* @__PURE__ */ g({
  __name: "Dialog",
  props: {
    modelValue: { type: Boolean },
    title: {},
    width: {},
    showClose: { type: Boolean },
    closeOnClickOverlay: { type: Boolean }
  },
  emits: ["update:modelValue", "close", "confirm"],
  setup(e, { emit: i }) {
    const s = e, l = i, n = J(() => s.width ? {
      width: typeof s.width == "number" ? `${s.width}px` : s.width
    } : {}), t = () => {
      l("update:modelValue", !1), l("close");
    }, u = () => {
      l("confirm"), t();
    }, _ = () => {
      s.closeOnClickOverlay && t();
    };
    return (d, o) => (a(), N(K, { to: "body" }, [
      w(D, { name: "dialog-fade" }, {
        default: C(() => [
          d.modelValue ? (a(), c("div", {
            key: 0,
            class: "dialog-overlay",
            onClick: _
          }, [
            r("div", {
              class: "dialog",
              style: M(n.value),
              onClick: o[0] || (o[0] = Q(() => {
              }, ["stop"]))
            }, [
              r("div", Ve, [
                r("h3", Be, f(d.title), 1),
                d.showClose ? (a(), c("button", {
                  key: 0,
                  class: "dialog__close",
                  onClick: t
                }, "×")) : m("", !0)
              ]),
              r("div", Te, [
                V(d.$slots, "default", {}, void 0, !0)
              ]),
              d.$slots.footer ? (a(), c("div", Ie, [
                V(d.$slots, "footer", {}, () => [
                  w(F(T), { onClick: t }, {
                    default: C(() => o[1] || (o[1] = [
                      H("取消")
                    ])),
                    _: 1
                  }),
                  w(F(T), {
                    type: "primary",
                    onClick: u
                  }, {
                    default: C(() => o[2] || (o[2] = [
                      H("确定")
                    ])),
                    _: 1
                  })
                ], !0)
              ])) : m("", !0)
            ], 4)
          ])) : m("", !0)
        ]),
        _: 3
      })
    ]));
  }
}), S = /* @__PURE__ */ y(Ee, [["__scopeId", "data-v-6ce1ceac"]]);
S.install = (e) => {
  e.component("Dialog", S);
};
const Se = { class: "select__value" }, Le = { key: 0 }, Oe = {
  key: 1,
  class: "select__placeholder"
}, ze = ["onClick"], Ne = /* @__PURE__ */ g({
  __name: "Select",
  props: {
    modelValue: {},
    options: {},
    placeholder: {}
  },
  emits: ["update:modelValue", "change"],
  setup(e, { emit: i }) {
    const s = e, l = i, n = h(!1), t = h(null), u = h({
      top: "0px",
      left: "0px",
      width: "0px"
    }), _ = J(() => s.options.find((p) => p.value === s.modelValue)), d = () => {
      n.value = !n.value, n.value && W(o);
    }, o = () => {
      if (!t.value) return;
      const p = t.value.getBoundingClientRect(), v = document.documentElement.scrollTop, k = document.documentElement.scrollLeft, R = document.documentElement.clientHeight;
      let E = p.bottom + v;
      const X = p.left + k, Y = p.width;
      E + 200 > R + v && (E = p.top + v - 200), u.value = {
        top: `${E}px`,
        left: `${X}px`,
        width: `${Y}px`
      };
    }, b = (p) => {
      l("update:modelValue", p.value), l("change", p.value), n.value = !1;
    }, P = (p) => {
      n.value && !p.target.closest(".select") && (n.value = !1);
    };
    return z(() => {
      document.addEventListener("click", P), window.addEventListener("resize", o), window.addEventListener("scroll", o);
    }), ee(() => {
      document.removeEventListener("click", P), window.removeEventListener("resize", o), window.removeEventListener("scroll", o);
    }), (p, v) => (a(), c("div", {
      class: $(["select", { "is-open": n.value }])
    }, [
      r("div", {
        class: "select__trigger",
        onClick: d
      }, [
        r("div", Se, [
          _.value ? (a(), c("span", Le, f(_.value.label), 1)) : (a(), c("span", Oe, f(p.placeholder), 1))
        ]),
        v[1] || (v[1] = r("span", { class: "select__arrow" }, "▼", -1))
      ]),
      (a(), N(K, { to: "body" }, [
        w(D, { name: "select-dropdown" }, {
          default: C(() => [
            n.value ? (a(), c("div", {
              key: 0,
              class: "select__dropdown",
              style: M(u.value),
              onClick: v[0] || (v[0] = Q(() => {
              }, ["stop"]))
            }, [
              (a(!0), c(A, null, G(p.options, (k) => (a(), c("div", {
                key: k.value,
                class: $(["select__option", { "is-selected": k.value === p.modelValue }]),
                onClick: (R) => b(k)
              }, f(k.label), 11, ze))), 128))
            ], 4)) : m("", !0)
          ]),
          _: 1
        })
      ]))
    ], 2));
  }
}), L = /* @__PURE__ */ y(Ne, [["__scopeId", "data-v-5b86b600"]]);
L.install = (e) => {
  e.component("Select", L);
};
const De = { class: "preview" }, Me = { class: "preview__demo" }, Pe = { class: "preview__actions" }, Re = { class: "preview__code" }, xe = /* @__PURE__ */ g({
  __name: "Preview",
  props: {
    code: {}
  },
  setup(e) {
    const i = e, s = h(!1), l = h(), n = () => {
      s.value = !s.value, s.value && W(() => {
        u();
      });
    }, t = () => {
      navigator.clipboard.writeText(i.code).then(() => {
        I({
          type: "success",
          message: "代码已复制到剪贴板"
        });
      });
    }, u = () => {
      l.value && se.highlightElement(l.value);
    };
    return z(() => {
      s.value && u();
    }), (_, d) => (a(), c("div", De, [
      r("div", Me, [
        V(_.$slots, "default", {}, void 0, !0)
      ]),
      r("div", Pe, [
        r("button", {
          class: "preview__action",
          onClick: n
        }, f(s.value ? "隐藏代码" : "显示代码"), 1),
        s.value ? (a(), c("button", {
          key: 0,
          class: "preview__action",
          onClick: t
        }, " 复制代码 ")) : m("", !0)
      ]),
      te(r("div", Re, [
        r("pre", null, [
          r("code", {
            class: "language-vue",
            ref_key: "codeRef",
            ref: l
          }, f(_.code), 513)
        ])
      ], 512), [
        [oe, s.value]
      ])
    ]));
  }
}), O = /* @__PURE__ */ y(xe, [["__scopeId", "data-v-5d773fa1"]]);
O.install = (e) => {
  e.component("Preview", O);
};
const Fe = [
  ce,
  _e,
  I,
  Ce,
  S,
  L,
  O
], He = (e) => {
  Fe.forEach((i) => {
    i.name && e.component(i.name, i);
  });
}, qe = {
  install: He
};
export {
  ce as Button,
  S as Dialog,
  _e as Input,
  I as Message,
  O as Preview,
  L as Select,
  Ce as Tree,
  qe as default
};
