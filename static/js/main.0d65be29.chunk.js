(this["webpackJsonpshoppingcart-sg"]=this["webpackJsonpshoppingcart-sg"]||[]).push([[0],{13:function(e,t,a){e.exports={card:"Home_card__38A32",container:"Home_container__2Utx8",cardText:"Home_cardText__2A8pv",btn:"Home_btn__38nU-",searchBox:"Home_searchBox__1fU7r",loading:"Home_loading__185ov",products:"Home_products__2xIsz",headerCont:"Home_headerCont__HNqE3",p__grid:"Home_p__grid__2HgkA"}},25:function(e,t,a){e.exports={header:"Header_header__8MgwI",headerLeft:"Header_headerLeft__2TfKN",headerRight:"Header_headerRight__1NcRW"}},32:function(e,t,a){e.exports={loginContainer:"Login_loginContainer__3Z-_c",signUpForm:"Login_signUpForm__SQBM9"}},4:function(e,t,a){e.exports={cardText:"Carts_cardText__dv9qW",cardTextAlignCenter:"Carts_cardTextAlignCenter__2s0um",cardItem:"Carts_cardItem__VjL1C",imgWidth:"Carts_imgWidth__2REik",cartItem:"Carts_cartItem__2_TnE",cardContainer:"Carts_cardContainer__3NyKs",visaContainer:"Carts_visaContainer__1Ggae",prodAction:"Carts_prodAction__1mR45",cartTotalItems:"Carts_cartTotalItems__3Q_R-"}},45:function(e,t,a){e.exports={footer:"Footer_footer__CDTIp"}},47:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},58:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"handleLogin",(function(){return f})),a.d(n,"handleLogout",(function(){return _})),a.d(n,"increase",(function(){return b})),a.d(n,"decrease",(function(){return v})),a.d(n,"addProduct",(function(){return C})),a.d(n,"removeProduct",(function(){return I})),a.d(n,"clearCart",(function(){return O})),a.d(n,"handleCheckout",(function(){return N}));var r=a(0),c=a.n(r),l=a(18),o=a.n(l);a(52),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var s=a(10),i=a(12),m=a(29),u=a.n(m),d=a(44),p=a(26),E=(a(58),a(13)),h=a.n(E),g=function(e){return new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(e)},f=function(){return{type:"LOGIN"}},_=function(){return{type:"LOG_OUT"}},b=function(e){return{type:"INCREASE",payload:e}},v=function(e){return{type:"DECREASE",payload:e}},C=function(e){return{type:"ADD_ITEM",payload:e}},I=function(e){return{type:"REMOVE_ITEM",payload:e}},O=function(){return{type:"CLEAR"}},N=function(){return{type:"CHECKOUT"}},y=function(e){var t=e.width;return c.a.createElement("svg",{height:"auto",viewBox:"0 -10 511.98685 511",width:t,xmlns:"http://www.w3.org/2000/svg"},c.a.createElement("path",{d:"m510.652344 185.902344c-3.351563-10.367188-12.546875-17.730469-23.425782-18.710938l-147.773437-13.417968-58.433594-136.769532c-4.308593-10.023437-14.121093-16.511718-25.023437-16.511718s-20.714844 6.488281-25.023438 16.535156l-58.433594 136.746094-147.796874 13.417968c-10.859376 1.003906-20.03125 8.34375-23.402344 18.710938-3.371094 10.367187-.257813 21.738281 7.957031 28.90625l111.699219 97.960937-32.9375 145.089844c-2.410156 10.667969 1.730468 21.695313 10.582031 28.09375 4.757813 3.4375 10.324219 5.1875 15.9375 5.1875 4.839844 0 9.640625-1.304687 13.949219-3.882813l127.46875-76.183593 127.421875 76.183593c9.324219 5.609376 21.078125 5.097657 29.910156-1.304687 8.855469-6.417969 12.992187-17.449219 10.582031-28.09375l-32.9375-145.089844 111.699219-97.941406c8.214844-7.1875 11.351563-18.539063 7.980469-28.925781zm0 0",fill:"#ffc107"}))},j=function(e){var t=e.width;return c.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},c.a.createElement("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd",fillRule:"evenodd"}))},x=function(e){var t=e.width;return c.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},c.a.createElement("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"}))},w=function(e){var t=e.width;return c.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},c.a.createElement("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"}))},R=function(e){var t=e.width;return c.a.createElement("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20"},c.a.createElement("path",{d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd",fillRule:"evenodd"}))},L=function(e){var t=e.width;return c.a.createElement("svg",{width:t,viewBox:"0 0 512.001 512.001"}," ",c.a.createElement("path",{d:"M488.001,472.001h-304c-13.254,0-24-10.746-24-24V352c0-13.256,10.746-24,24-24s24,10.744,24,24 v72.002h256V88h-256v72c0,13.254-10.746,24-24,24s-24-10.746-24-24V64c0-13.256,10.746-24,24-24h304c13.254,0,24,10.744,24,24 v384.002C512.001,461.256,501.256,472.001,488.001,472.001z"})," ",c.a.createElement("path",{d:"M359.995,232.001H81.939l31.03-31.03c9.373-9.373,9.373-24.568,0-33.941 c-9.371-9.373-24.57-9.373-33.941,0l-72,72c-0.005,0.005-0.008,0.01-0.014,0.014c-0.554,0.555-1.078,1.138-1.574,1.744 c-0.23,0.282-0.43,0.578-0.648,0.867c-0.251,0.338-0.514,0.667-0.749,1.018c-0.232,0.347-0.432,0.706-0.645,1.062 c-0.189,0.317-0.387,0.626-0.562,0.952c-0.195,0.363-0.36,0.736-0.534,1.107c-0.16,0.339-0.33,0.672-0.474,1.019 c-0.15,0.363-0.272,0.733-0.403,1.101c-0.133,0.371-0.275,0.736-0.389,1.115c-0.112,0.371-0.197,0.749-0.291,1.125 c-0.096,0.384-0.203,0.762-0.282,1.152c-0.088,0.438-0.139,0.88-0.202,1.322c-0.046,0.334-0.11,0.662-0.146,1.002 c-0.155,1.578-0.155,3.166,0,4.744c0.034,0.342,0.099,0.675,0.147,1.013c0.062,0.437,0.114,0.875,0.2,1.309 c0.078,0.395,0.187,0.778,0.285,1.165c0.094,0.371,0.174,0.744,0.286,1.112c0.117,0.382,0.261,0.754,0.395,1.128 c0.13,0.365,0.25,0.73,0.397,1.088c0.147,0.352,0.318,0.69,0.482,1.032c0.171,0.366,0.334,0.736,0.525,1.094 c0.178,0.331,0.381,0.646,0.571,0.968c0.21,0.35,0.408,0.704,0.635,1.045c0.242,0.362,0.509,0.701,0.768,1.046 c0.211,0.28,0.405,0.566,0.627,0.838c0.504,0.613,1.034,1.205,1.597,1.765l71.995,71.998c4.686,4.686,10.829,7.03,16.97,7.03 c6.141-0.002,12.285-2.344,16.971-7.03c9.373-9.373,9.373-24.568,0-33.941l-31.03-31.032h278.056c13.254,0,24-10.746,24-24 C383.995,242.745,373.251,232.001,359.995,232.001z"}),c.a.createElement("g",null)," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ",c.a.createElement("g",null," ")," ")},k=function(e){var t=e.product,a=e.cartItems,n=Object(s.c)(),r=function(e){return a.some((function(t){return t.id===e.id}))};return c.a.createElement("div",{className:h.a.card},c.a.createElement("img",{style:{display:"block",margin:"0 auto 10px",maxHeight:"200px"},className:"img-fluid",src:t.url+"?v="+t.id,alt:""}),c.a.createElement("p",null,t.name),c.a.createElement("span",null,"Rating: ",function(e){for(var t=[],a=0;a<e;a++)t.push(c.a.createElement(y,{width:"12px"}));return t}(t.star)),c.a.createElement("h3",{className:"text-left"},"Price: ",g(t.price)),c.a.createElement("div",{className:h.a.cardText},r(t)&&c.a.createElement("button",{onClick:function(){return n(b(t))},className:"btn btn-outline-primary btn-sm"},"Add more"),!r(t)&&c.a.createElement("button",{onClick:function(){return n(C(t))},className:"btn btn-primary btn-sm"},"Add to cart")))},A=function(e){var t=e.products,a=e.cartItems,n=e.searchItem;return t.length<=0?c.a.createElement("div",{className:h.a.loading},c.a.createElement("strong",null,"Loading...")):c.a.createElement("div",{className:h.a.container},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:h.a.headerCont},c.a.createElement("div",{className:h.a.products},t.length," Record(s)"),c.a.createElement("div",{className:h.a.searchBox},c.a.createElement("input",{type:"text",name:"",onChange:n,placeholder:"Search items",className:"form-control",id:""})))),c.a.createElement("div",{className:h.a.p__grid},t.map((function(e){return c.a.createElement(k,{key:e.id,product:e,cartItems:a})}))))},H=a(9),T=a(25),U=a.n(T),M=function(e){var t=e.itemCount,a=e.isUserLoggedIn,n=e.logout,r=Object(s.c)();return c.a.createElement("header",{className:U.a.header},c.a.createElement("span",{className:U.a.headerLeft},"Shopping Cart"),c.a.createElement("span",{className:U.a.headerRight},c.a.createElement(H.b,{to:"/shoppingcart-sg/"},"Home/App Store"),a?c.a.createElement("span",null,c.a.createElement(H.b,{to:"/shoppingcart-sg/cart"},c.a.createElement(w,null)," Cart (",t,")"," "),c.a.createElement(H.b,{to:"/shoppingcart-sg/"},c.a.createElement(L,null),c.a.createElement("span",{onClick:function(){return r(n())}},"Logout")," ")):c.a.createElement(H.b,{to:"/shoppingcart-sg/login"},"Sign in")))},S=a(45),z=a.n(S),B=function(){return c.a.createElement("footer",{className:z.a.footer},"2020 \xa9 Assignment App with React/Redux")},V=a(46),P=a.n(V),q=function(){var e=Object(r.useState)([]),t=Object(p.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(""),o=Object(p.a)(l,2),i=o[0],m=o[1],E=Object(r.useState)([]),h=Object(p.a)(E,2),g=h[0],f=h[1],b=function(){var e=Object(d.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.a.get(t).then((function(e){n(e.data)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(r.useEffect)((function(){b("https://my-json-server.typicode.com/Laxman2015/productLists/Products")}),[]);Object(r.useEffect)((function(){if(f([]),i.length>0){var e=a.filter((function(e){return e.name.toLowerCase().match(i)}));f(e)}}),[i,a]);var v=Object(s.d)((function(e){return{cartItems:e.CartReducer.cartItems,isUserLoggedIn:e.CartReducer.isUserLoggedIn}})),C=v.cartItems,I=v.isUserLoggedIn;return c.a.createElement("div",{className:"App"},c.a.createElement(M,{itemCount:C.length,isUserLoggedIn:I,logout:_}),c.a.createElement(A,{products:g.length>0?g:a,cartItems:C,searchItem:function(e){var t=e.target.value;m(t)}}),c.a.createElement(B,null))},D=a(3),F=a(21),W=a(22),G=a(24),K=a(23),J=a(4),Q=a.n(J),Y=function(e){var t=e.product,a=e.actions,n=a.increase,r=a.decrease,l=a.removeProduct;return c.a.createElement("div",{className:Q.a.cartItem},c.a.createElement("div",{className:Q.a.imgWidth},c.a.createElement("img",{alt:t.name,style:{margin:"0 auto",maxHeight:"100px"},src:t.url,className:"img-fluid d-block"})),c.a.createElement("div",{className:Q.a.prodInfo},c.a.createElement("h5",{className:"mb-1"},t.name),c.a.createElement("p",{className:"mb-1"},"Price: ",g(t.price)," ")),c.a.createElement("div",null,c.a.createElement("p",{className:"mb-0"},"Qty: ",t.quantity)),c.a.createElement("div",{className:Q.a.prodAction},c.a.createElement("button",{onClick:function(){return n(t)}},c.a.createElement(x,{width:"20px"})),c.a.createElement("button",{onClick:function(){return r(t)}},c.a.createElement(j,{width:"20px"})),c.a.createElement("button",{onClick:function(){return l(t)}},c.a.createElement(R,{width:"20px"}))))},Z=function(e){var t=e.cartItems,a=e.actions;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:Q.a.cardContainer},t.map((function(e){return c.a.createElement(Y,{key:e.id,product:e,actions:a})}))),c.a.createElement("div",{className:Q.a.visaContainer},c.a.createElement("h2",null,"VISA/MASTER CARD"),c.a.createElement("h2",null,"Payment"),c.a.createElement("p",null,"Card Number"),c.a.createElement("p",null,"_________________________"),c.a.createElement("p",null,"Expiary Date"),c.a.createElement("p",null,"___/___/________")))},$=function(e){Object(G.a)(a,e);var t=Object(K.a)(a);function a(e){var n;return Object(F.a)(this,a),(n=t.call(this,e)).state={persons:[]},n}return Object(W.a)(a,[{key:"render",value:function(){var e=this.props.actions,t=e.clearCart,a=e.handleCheckout,n=this.props,r=n.total,l=n.itemCount,o=n.checkout;return c.a.createElement("div",{title:"Cart",description:"Cart Items"},c.a.createElement(M,{itemCount:l,isUserLoggedIn:this.props.isUserLoggedIn,logout:this.props.actions.handleLogout}),c.a.createElement("div",null,c.a.createElement("div",{className:Q.a.cardTextAlignCenter},o?c.a.createElement("h1",null,"Thank you for shopping"):c.a.createElement("h1",null,"Cart Lists"),!o&&c.a.createElement("p",null,"Cart Items please proceed to checkout")),c.a.createElement("div",{className:"row no-gutters justify-content-center"},c.a.createElement("div",{className:Q.a.cardItem},this.props.cartItems.length>0?c.a.createElement(Z,{actions:this.props.actions,cartItems:this.props.cartItems}):!o&&c.a.createElement("div",{className:Q.a.cardTextAlignCenter},"Your cart is empty, Please select some item from store."),o&&c.a.createElement("div",{className:"p-3 text-center text-success"},c.a.createElement("p",null,"Checkout successfull"),c.a.createElement(H.b,{to:"/shoppingcart-sg/",className:"btn btn-outline-success btn-sm"},c.a.createElement("span",{onClick:t},"BUY MORE ")))),this.props.cartItems.length>0&&c.a.createElement("div",{className:Q.a.cardItem},c.a.createElement("div",{className:Q.a.cartTotalItems},c.a.createElement("p",{className:"mb-1"},"Total Items"),c.a.createElement("h4",{className:" mb-3 txt-right"},l)),c.a.createElement("div",{className:Q.a.cartTotalPrice},c.a.createElement("p",{className:"mb-1"},"Total Payment"),c.a.createElement("h3",{className:"m-0 txt-right"},g(r))),c.a.createElement("hr",{className:"my-4"}),c.a.createElement("div",{className:"text-center"},c.a.createElement("button",{type:"button",className:"btn btn-primary mb-2",onClick:a},"CHECKOUT"),c.a.createElement("button",{type:"button",className:"btn btn-outlineprimary btn-sm",onClick:t},"CLEAR"))))),c.a.createElement(B,null))}}]),a}(c.a.Component);var X=Object(D.f)(Object(s.b)((function(e,t){return{cartItems:e.CartReducer.cartItems,total:e.CartReducer.total,itemCount:e.CartReducer.itemCount,checkout:e.CartReducer.checkout,isUserLoggedIn:e.CartReducer.isUserLoggedIn}}),(function(e){return{actions:Object(i.a)(n,e)}}))($)),ee=a(32),te=a.n(ee),ae=function(e){Object(G.a)(a,e);var t=Object(K.a)(a);function a(e){var n;return Object(F.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){n.props.history.push("/shoppingcart-sg/"),n.props.actions.handleLogin()},n.state={loginMessage:""},n}return Object(W.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:te.a.loginContainer},c.a.createElement("form",{onSubmit:this.handleSubmit,noValidate:!0,ref:"formSignUp",className:te.a.signUpForm},c.a.createElement("h2",null,"Log In"),c.a.createElement("div",{className:"imgcontainer"}),c.a.createElement("div",{className:"signup-container"},c.a.createElement("label",null,c.a.createElement("b",null,"UserName: ")),c.a.createElement("input",{type:"text",placeholder:"admin",name:"email",required:!0}),c.a.createElement("label",null,c.a.createElement("b",null,"Password: ")),c.a.createElement("input",{type:"password",placeholder:"1234",name:"password",required:!0}),c.a.createElement("button",{className:"btn btn-primary btn-sm"},"Login"))),this.state.loginMessage&&c.a.createElement("span",{className:"wrong-cred-text"},this.state.loginMessage," "))}}]),a}(c.a.Component);var ne=Object(D.f)(Object(s.b)((function(e,t){return{cartItems:e.CartReducer.cartItems}}),(function(e){return{actions:Object(i.a)(n,e)}}))(ae)),re=function(){return c.a.createElement(D.c,null,c.a.createElement(D.a,{exact:!0,path:"/shoppingcart-sg/",component:q}),c.a.createElement(D.a,{exact:!0,path:"/shoppingcart-sg/cart",component:X}),c.a.createElement(D.a,{exact:!0,path:"/shoppingcart-sg/login",component:ne}))},ce=a(17),le=a(2),oe=function(e){return function(e){localStorage.setItem("cart",JSON.stringify(e.length>0?e:[]))}(e),{itemCount:e.reduce((function(e,t){return e+t.quantity}),0),total:e.reduce((function(e,t){return e+t.price*t.quantity}),0).toFixed(2)}},se=Object(le.a)({cartItems:[]},oe([]));var ie=Object(i.b)({CartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ITEM":return e.cartItems.find((function(e){return e.id===t.payload.id}))||e.cartItems.push(Object(le.a)(Object(le.a)({},t.payload),{},{quantity:1})),Object(le.a)(Object(le.a)(Object(le.a)({},e),oe(e.cartItems)),{},{cartItems:Object(ce.a)(e.cartItems)});case"REMOVE_ITEM":return Object(le.a)(Object(le.a)(Object(le.a)({},e),oe(e.cartItems.filter((function(e){return e.id!==t.payload.id})))),{},{cartItems:Object(ce.a)(e.cartItems.filter((function(e){return e.id!==t.payload.id})))});case"INCREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity++,Object(le.a)(Object(le.a)(Object(le.a)({},e),oe(e.cartItems)),{},{cartItems:Object(ce.a)(e.cartItems)});case"DECREASE":return e.cartItems[e.cartItems.findIndex((function(e){return e.id===t.payload.id}))].quantity--,Object(le.a)(Object(le.a)(Object(le.a)({},e),oe(e.cartItems)),{},{cartItems:Object(ce.a)(e.cartItems)});case"CHECKOUT":return Object(le.a)({cartItems:[],checkout:!0},oe([]));case"CLEAR":return Object(le.a)({cartItems:[]},oe([]));case"LOGIN":return Object(le.a)(Object(le.a)({},e),{},{isUserLoggedIn:!0});case"LOG_OUT":return Object(le.a)(Object(le.a)({},e),{},{isUserLoggedIn:!1});default:return e}}}),me=Object(i.c)(ie);o.a.render(c.a.createElement(s.a,{store:me},c.a.createElement(H.a,null,re())),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.0d65be29.chunk.js.map