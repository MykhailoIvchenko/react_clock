(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),i=n(3),l=n(5),r=n(4),s=n(1),u=n.n(s),h=(n(12),n(0)),d=function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={date:new Date},t.timerId=void 0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=setInterval((function(){t.tick(),console.log(t.state.date.toLocaleTimeString())}),1e3),console.log(this.timerId)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.log("The Clock was renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){this.timerId&&clearInterval(this.timerId)}},{key:"tick",value:function(){this.setState({date:new Date})}},{key:"render",value:function(){var t=this.state.date;return Object(h.jsxs)("p",{className:"clockText",children:["Current time:"," ".concat(t.toLocaleTimeString())]})}}]),n}(u.a.Component),m=d,k=(n(14),function(t){Object(l.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={isClockVisible:!0,clockName:Math.round(1e4*Math.random())},t.handleShowButtonClick=function(){t.setState({isClockVisible:!0})},t.handleHideButtonClick=function(){t.setState({isClockVisible:!1})},t.handleSetRandomNameClick=function(){t.setState({clockName:Math.round(1e4*Math.random())})},t}return Object(i.a)(n,[{key:"render",value:function(){var t=this.state.isClockVisible;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"React clock"}),t&&Object(h.jsx)(m,{name:this.state.clockName}),Object(h.jsx)("button",{type:"button",onClick:this.handleShowButtonClick,children:"Show Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.handleHideButtonClick,children:"Hide Clock"}),Object(h.jsx)("button",{type:"button",onClick:this.handleSetRandomNameClick,children:"Set random name"})]})}}]),n}(u.a.Component)),b=k;a.a.render(Object(h.jsx)(b,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b1fed234.chunk.js.map