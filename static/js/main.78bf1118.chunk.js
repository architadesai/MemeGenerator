(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},16:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),m=a(3),r=a.n(m);var o=function(){return l.a.createElement("div",null,l.a.createElement("header",null,l.a.createElement("img",{src:"http://www.stickpng.com/assets/thumbs/580b585b2edbce24c47b2a2c.png",alt:"Problem?"}),l.a.createElement("p",null,"Meme generator")))},c=a(4),i=a(5),s=a(6),u=a(8),h=a(7),b=a(9),d=a(1),p=function(e){function t(){var e;return Object(i.a)(this,t),(e=Object(u.a)(this,Object(h.a)(t).call(this))).state={topText:"",bottomText:"",randomImg:"http://i.imgflip.com/1bij.jpg",allMemeImgs:[]},e.handleChange=e.handleChange.bind(Object(d.a)(Object(d.a)(e))),e.handleSubmit=e.handleSubmit.bind(Object(d.a)(Object(d.a)(e))),e}return Object(b.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.imgflip.com/get_memes").then(function(e){return e.json()}).then(function(t){var a=t.data.memes;e.setState({allMemeImgs:a})})}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(c.a)({},a,n))}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=Math.floor(100*Math.random());this.setState({randomImg:this.state.allMemeImgs[t].url})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("form",{className:"meme-form",onSubmit:this.handleSubmit},l.a.createElement("input",{type:"text",value:this.state.topText,name:"topText",placeholder:"Top text",onChange:this.handleChange}),l.a.createElement("input",{type:"text",value:this.state.bottomText,name:"bottomText",placeholder:"Bottom text",onChange:this.handleChange}),l.a.createElement("button",null,"Generate!")),l.a.createElement("div",{className:"meme"},l.a.createElement("img",{src:this.state.randomImg,className:"generated-img"}),l.a.createElement("h2",{className:"top"},this.state.topText),l.a.createElement("h2",{className:"bottom"},this.state.bottomText)))}}]),t}(n.Component);var g=function(){return l.a.createElement("div",null,l.a.createElement(o,null),l.a.createElement(p,null))};r.a.render(l.a.createElement(g,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.78bf1118.chunk.js.map