(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[33],{1005:function(e,t,o){"use strict";o.r(t);o(1);var r=o(626),a=o(637),n=o(712),s=o(804),c=o(17);t.default=function(){return Object(c.jsxs)(r.wb,{children:[Object(c.jsx)(r.u,{sm:"6",lg:"3",children:Object(c.jsx)(r.Ub,{color:"gradient-primary",header:"576",text:"Alumnos",footerSlot:Object(c.jsx)(n.a,{pointed:!0,className:"c-chart-wrapper mt-3 mx-3",style:{height:"70px"},dataPoints:[65,59,84,84,51,55,40],pointHoverBackgroundColor:"primary",label:"Members",labels:"meses"}),children:Object(c.jsxs)(r.z,{children:[Object(c.jsx)(r.E,{color:"transparent",children:Object(c.jsx)(a.a,{name:"cil-settings"})}),Object(c.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.C,{children:"Action"}),Object(c.jsx)(r.C,{children:"Another action"}),Object(c.jsx)(r.C,{children:"Something else here..."}),Object(c.jsx)(r.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(c.jsx)(r.u,{sm:"6",lg:"3",children:Object(c.jsx)(r.Ub,{color:"gradient-info",header:"16",text:"Profesores",footerSlot:Object(c.jsx)(n.a,{pointed:!0,className:"mt-3 mx-3",style:{height:"70px"},dataPoints:[1,18,9,17,34,22,11],pointHoverBackgroundColor:"info",options:{elements:{line:{tension:1e-5}}},label:"Members",labels:"meses"}),children:Object(c.jsxs)(r.z,{children:[Object(c.jsx)(r.E,{caret:!1,color:"transparent",children:Object(c.jsx)(a.a,{name:"cil-location-pin"})}),Object(c.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.C,{children:"Action"}),Object(c.jsx)(r.C,{children:"Another action"}),Object(c.jsx)(r.C,{children:"Something else here..."}),Object(c.jsx)(r.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(c.jsx)(r.u,{sm:"6",lg:"3",children:Object(c.jsx)(r.Ub,{color:"gradient-warning",header:"449",text:"Rendimiento esperado",footerSlot:Object(c.jsx)(n.a,{className:"mt-3",style:{height:"70px"},backgroundColor:"rgba(255,255,255,.2)",dataPoints:[78,81,80,45,34,12,40],options:{elements:{line:{borderWidth:2.5}}},pointHoverBackgroundColor:"warning",label:"Members",labels:"meses"}),children:Object(c.jsxs)(r.z,{children:[Object(c.jsx)(r.E,{color:"transparent",children:Object(c.jsx)(a.a,{name:"cil-settings"})}),Object(c.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.C,{children:"Action"}),Object(c.jsx)(r.C,{children:"Another action"}),Object(c.jsx)(r.C,{children:"Something else here..."}),Object(c.jsx)(r.C,{disabled:!0,children:"Disabled action"})]})]})})}),Object(c.jsx)(r.u,{sm:"6",lg:"3",children:Object(c.jsx)(r.Ub,{color:"gradient-danger",header:"127",text:"Rendimiento Bajo",footerSlot:Object(c.jsx)(s.a,{className:"mt-3 mx-3",style:{height:"70px"},backgroundColor:"rgb(250, 152, 152)",label:"Members",labels:"meses"}),children:Object(c.jsxs)(r.z,{children:[Object(c.jsx)(r.E,{caret:!0,className:"text-white",color:"transparent",children:Object(c.jsx)(a.a,{name:"cil-settings"})}),Object(c.jsxs)(r.D,{className:"pt-0",placement:"bottom-end",children:[Object(c.jsx)(r.C,{children:"Action"}),Object(c.jsx)(r.C,{children:"Another action"}),Object(c.jsx)(r.C,{children:"Something else here..."}),Object(c.jsx)(r.C,{disabled:!0,children:"Disabled action"})]})]})})})]})}},712:function(e,t,o){"use strict";var r=o(40),a=o(159),n=(o(1),o(689)),s=o(717),c=o(17),l=function(e){var t=e.borderColor,o=e.backgroundColor,l=e.pointHoverBackgroundColor,i=e.dataPoints,d=e.label,b=e.pointed,j=Object(a.a)(e,["borderColor","backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"]),h=l||("transparent"!==o?o:t),p=[{data:i,borderColor:Object(n.getColor)(t),backgroundColor:Object(n.getColor)(o),pointBackgroundColor:Object(n.getColor)(h),pointHoverBackgroundColor:Object(n.getColor)(h),label:d}],x={scales:{xAxes:[{offset:!0,gridLines:{color:"transparent",zeroLineColor:"transparent"},ticks:{fontSize:2,fontColor:"transparent"}}],yAxes:[{display:!1,ticks:{display:!1,min:Math.min.apply(Math,i)-5,max:Math.max.apply(Math,i)+5}}]},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}},O={scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]},elements:{line:{borderWidth:2},point:{radius:0,hitRadius:10,hoverRadius:4}}},m=function(){var e=b?x:O;return Object.assign({},e,{maintainAspectRatio:!1,legend:{display:!1}})}(),g=Object(n.deepObjectsMerge)(p,j.datasets||{}),u=Object(n.deepObjectsMerge)(m,j.options||{});return Object(c.jsx)(s.c,Object(r.a)(Object(r.a)({},j),{},{datasets:g,options:u,labels:d}))};l.defaultProps={borderColor:"rgba(255,255,255,.55)",backgroundColor:"transparent",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=l},804:function(e,t,o){"use strict";var r=o(40),a=o(159),n=(o(1),o(689)),s=o(717),c=o(17),l=function(e){var t=e.backgroundColor,o=e.pointHoverBackgroundColor,l=e.dataPoints,i=e.label,d=(e.pointed,Object(a.a)(e,["backgroundColor","pointHoverBackgroundColor","dataPoints","label","pointed"])),b=[{data:l,backgroundColor:Object(n.getColor)(t),pointHoverBackgroundColor:Object(n.getColor)(o),label:i,barPercentage:.5,categoryPercentage:1}],j={maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{display:!1}],yAxes:[{display:!1}]}};return Object(c.jsx)(s.a,Object(r.a)(Object(r.a)({},d),{},{datasets:b,options:j,labels:i}))};l.defaultProps={backgroundColor:"rgba(0,0,0,.2)",dataPoints:[10,22,34,46,58,70,46,23,45,78,34,12],label:"Sales"},t.a=l}}]);
//# sourceMappingURL=33.c83c73d9.chunk.js.map