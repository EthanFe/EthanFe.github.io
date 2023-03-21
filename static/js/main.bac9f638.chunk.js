(this["webpackJsonppiano-squid"]=this["webpackJsonppiano-squid"]||[]).push([[0],{10:function(t,e,n){"use strict";n.r(e),n.d(e,"usePrevious",(function(){return u})),n.d(e,"useIncrementer",(function(){return s})),n.d(e,"useDelay",(function(){return l})),n.d(e,"useSequence",(function(){return f})),n.d(e,"useAwait",(function(){return h})),n.d(e,"useReusableDelay",(function(){return d})),n.d(e,"useStabilizedValue",(function(){return v}));var o=n(22),r=n.n(o),i=n(30),a=n(5),c=n(0),u=function(t){var e=Object(c.useRef)();return Object(c.useEffect)((function(){e.current=t})),e.current},s=function(t,e,n){var o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=Object(c.useState)(t),i=Object(a.a)(r,2),u=i[0],s=i[1];return Object(c.useEffect)((function(){if(o)var t=u,r=setInterval((function(){t++,s(t),t>=e&&clearInterval(r)}),n)}),[n,e,o]),u},l=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(c.useState)(!1),o=Object(a.a)(n,2),r=o[0],i=o[1];return Object(c.useEffect)((function(){e&&setTimeout((function(){i(!0)}),t)}),[t,e]),r},f=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(c.useState)(0),o=Object(a.a)(n,2),r=o[0],i=o[1];return Object(c.useEffect)((function(){e&&r<t.length&&setTimeout((function(){i(r+1)}),t[r])}),[t,e,r]),t.map((function(t,e){return r>e}))},h=function(t){var e=Object(c.useState)(null),n=Object(a.a)(e,2),o=n[0],u=n[1];return Object(c.useEffect)((function(){Object(i.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,t;case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})))()}),[]),o},d=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Object(c.useState)(!1),o=Object(a.a)(n,2),r=o[0],i=o[1],u=Object(c.useState)(null),s=Object(a.a)(u,2),l=s[0],f=s[1],h=Object(c.useRef)(null),d=function(){null!==h.current&&clearTimeout(h.current)};Object(c.useEffect)((function(){return null!==h.current&&clearTimeout(h.current),e?h.current=setTimeout((function(){i(!0),h.current=null}),t):i(!1),d}),[t,e,l]);var v=function(){i(!1),f(Date.now())};return[r,v,d]},v=function(t,e){var n=Object(c.useState)(t),o=Object(a.a)(n,2),r=o[0],i=o[1],u=d(e),s=Object(a.a)(u,2),l=s[0],f=s[1];return Object(c.useEffect)((function(){f()}),[t]),Object(c.useEffect)((function(){l&&i(t)}),[l]),r}},33:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},45:function(t,e,n){t.exports=n(85)},50:function(t,e,n){},51:function(t,e,n){},53:function(t,e,n){},58:function(t,e,n){},75:function(t,e,n){},85:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),i=n(42),a=n.n(i),c=(n(50),n(31),n(3)),u=n(4),s=n(2),l=n(1),f=n(8),h=n(11),d=n(5),v=n(26),p=n.n(v),b=["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"],y=["Db","Eb","Gb","Ab","Bb"],m={C:0,"C#":1,Db:1,D:2,"D#":3,Eb:3,E:4,F:5,"F#":6,Gb:6,G:7,"G#":8,Ab:8,A:9,"A#":10,Bb:10,B:11},j=/([a-g])([#b]?)(\d+)/;var O=p()(12,128).reduce((function(t,e){return t[e]=function(t){var e=(t-12)%12,n=Math.floor((t-12)/12),o=b[e];return{note:"".concat(o).concat(n),pitchName:o,octave:n,midiNumber:t,isAccidental:y.includes(o)}}(e),t}),{});function g(t){var e=O[t];if(!e)throw Error("Invalid MIDI number");return e}var N,w=p()(12,128).filter((function(t){return!g(t).isAccidental})),k={fromNote:function(t){if(!t)throw Error("Invalid note argument");var e=j.exec(t.toLowerCase());if(!e)throw Error("Invalid note argument");var n=Object(d.a)(e,4),o=n[1],r=n[2],i=n[3],a="".concat(o.toUpperCase()).concat(r),c=m[a];if(null==c)throw Error("Invalid note argument");return 12+c+12*parseInt(i,10)},getAttributes:g,MIN_MIDI_NUMBER:12,MAX_MIDI_NUMBER:127,NATURAL_MIDI_NUMBERS:w},E="A",S="B",x="C",M="D",C="E",A="F",P="G",I=["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"],D=(N={},Object(h.a)(N,"Db","C#"),Object(h.a)(N,"Eb","D#"),Object(h.a)(N,"Gb","F#"),Object(h.a)(N,"Ab","G#"),Object(h.a)(N,"Bb","A#"),Object(h.a)(N,"C#","Db"),Object(h.a)(N,"D#","Eb"),Object(h.a)(N,"F#","Gb"),Object(h.a)(N,"G#","Ab"),Object(h.a)(N,"A#","Bb"),N),_="Major",R="Minor",T="Diminished",K=function(t){return-1!==I.indexOf(t)?I.indexOf(t):I.indexOf(D[t])},F=function(t,e){for(var n=K(t)+e;n<0;)n+=12;return n>=I.length&&(n-=I.length*Math.floor(n/I.length)),I[n]},L=function(t){return t.map((function(e,n){return G(e,n,t)})).map((function(t){return k.fromNote(t)}))},G=function(t,e,n){return W(t,e,n)?t+"3":t+"4"},W=function(t,e,n){return n.slice(e+1).some((function(e){return B(e,t)}))},B=function(t,e){return K(t)<K(e)},H=(I.filter((function(t){return 1===t.length})),_),U=R,V=T,z=["i","ii","iii","iv","v","vi","vii"],q=function t(e,n,o){var r=this;Object(s.a)(this,t),this.intervalLetterInKey=function(t){var e=z[rt(t,r)-1];switch(r.type){case H:return e.toUpperCase();case U:return e;case V:return e+"\xb0"}};var i=[e,F(e,n===H?4:3),F(e,n===V?6:7)];o&&i.push(F(e,n===H?11:10)),i=L(i),this.name="".concat(e," ").concat(n).concat(o?" 7th":""),this.notes=i,this.root=e,this.type=n,this.keyCount=o?"7th":"Triad"},J=[];I.forEach((function(t){[H,U,V].forEach((function(e){J.push(new q(t,e,!1))}))}));var X=x,$=_,Q=R,Y={Major:[$,Q,Q,$,$,Q,T],Minor:[Q,T,$,Q,Q,$,$]},Z={Major:[0,2,4,5,7,9,11],Minor:[0,2,3,5,7,8,10]},tt=function(t,e){return Y[e].map((function(n,o){return J.find((function(r){return r.root===F(t,Z[e][o])&&r.type===n}))}))},et=function(){function t(e,n){Object(s.a)(this,t),this.root=e,this.type=n,this.chords=tt(e,n)}return Object(l.a)(t,[{key:"chordsAsIntervals",get:function(){var t=this;return this.chords.map((function(e){return e.intervalLetterInKey(t)}))}},{key:"name",get:function(){return"".concat(this.root," ").concat(this.type)}}]),t}(),nt=[$,Q],ot=[];I.forEach((function(t){nt.forEach((function(e){ot.push(new et(t,e))}))}));var rt=function(t,e){return t.chords.indexOf(e)+1},it=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:12,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=[],o=0;o<t;o++)n.push(F(X,(e?5:7)*o));return n},at=it(8).slice(1),ct=it(7,!0).slice(1),ut={Major:{C:{type:"#",count:0}},Minor:{C:{type:"b",count:3}}};at.forEach((function(t,e){ut.Major[t]={type:"#",count:e+1}})),ct.forEach((function(t,e){ut.Major[t]={type:"b",count:e+1}})),at.forEach((function(t){ut.Minor[t]=ut[$][F(t,3)]})),ct.forEach((function(t){ut.Minor[t]=ut[$][F(t,3)]}));n(27),n(51);var st=function(t){var e=t.diffData,n=t.children,i=t.scale,a=t.transitionTime,c=t.transitionType,u=Object(o.useState)(null),s=Object(d.a)(u,2),l=s[0],f=s[1],h=Object(o.useState)(null),v=Object(d.a)(h,2),p=v[0],b=v[1],y=Object(o.useState)("active"),m=Object(d.a)(y,2),j=m[0],O=m[1];return Object(o.useEffect)((function(){p!==e?(b(e),O("inactive"),setTimeout((function(){f(n),O("active")}),1e3*a/2)):"active"===j&&f(n)})),r.a.createElement("div",{style:{transform:"scale(".concat(i,")")}},r.a.createElement("div",{className:"transition-wrapper "+{slideRight:"slide-right",fade:"fade",fadeOutOnly:"fade-out-only"}[c]+" "+j,style:{animationDuration:"".concat(a/2,"s")}},l))},lt=n(6),ft=(n(39),n(40),n(44)),ht=n(20),dt=n.n(ht),vt=n(34),pt=n.n(vt);function bt(t){return"".concat(100*t,"%")}var yt=function(t){var e=t.naturalKeyWidth,n=t.accidentalWidthRatio,i=void 0===n?.65:n,a=t.midiNumber,c=t.gliss,u=t.useTouchEvents,s=t.accidental,l=t.active,f=t.confirmedCorrect,h=t.incorrect,v=t.highlighted,p=t.velocity,b=t.keyPlayPulses,y=t.disabled,m=t.children,j=t.pitchPositions,O=void 0===j?{C:0,Db:.55,D:1,Eb:1.8,E:2,F:3,Gb:3.5,G:4,Ab:4.7,A:5,Bb:5.85,B:6}:j,g=function(){t.onPlayNoteInput(a)},N=function(){t.onStopNoteInput(a)};function w(t){var e=k.getAttributes(t),n=e.octave,o=e.pitchName;return O[o]+7*n}var E=h?"255, 0, 47":"0, 170, 255",S=Object(o.useState)(0),x=Object(d.a)(S,2),M=x[0],C=x[1],A=Object(o.useState)({}),P=Object(d.a)(A,2),I=P[0],D=P[1];return l&&M<p?(C(p),D({boxShadow:"0 0 0 0 rgba(".concat(E,", 0.7)"),transition:"box-shadow 0ms, background-color 500ms"}),setTimeout((function(){D({boxShadow:"0 0 20px ".concat(20*p/60,"px rgba(").concat(E,", 0)"),transition:"box-shadow 400ms, background-color 500ms"})}),0)):!l&&M>0&&(C(0),D({transition:"box-shadow 400ms, background-color 500ms"})),r.a.createElement("div",{className:dt()("ReactPiano__Key",{"ReactPiano__Key--accidental":s,"ReactPiano__Key--natural":!s,"ReactPiano__Key--disabled":y,"ReactPiano__Key--active":l,"ReactPiano__Key--correct":f,"ReactPiano__Key--incorrect":h&&l,"ReactPiano__Key--highlighted":v}),style:Object(lt.a)({left:bt(function(e){return w(e)-w(t.noteRange.first)}(a)*e),width:bt(s?i*e:e)},b?I:{}),onMouseDown:u?null:g,onMouseUp:u?null:N,onMouseEnter:c?g:null,onMouseLeave:N,onTouchStart:u?g:null,onTouchCancel:u?N:null,onTouchEnd:u?N:null},r.a.createElement("div",{className:"ReactPiano__NoteLabelContainer"},m))},mt=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"getMidiNumbers",value:function(){return p()(this.props.noteRange.first,this.props.noteRange.last+1)}},{key:"getNaturalKeyCount",value:function(){return this.getMidiNumbers().filter((function(t){return!k.getAttributes(t).isAccidental})).length}},{key:"getNaturalKeyWidth",value:function(){return 1/this.getNaturalKeyCount()}},{key:"getWidth",value:function(){return this.props.width?this.props.width:"100%"}},{key:"getHeight",value:function(){if(!this.props.width)return"100%";var t=this.props.width*this.getNaturalKeyWidth();return"".concat(t/this.props.keyWidthToHeight,"px")}},{key:"render",value:function(){var t=this,e=this.getNaturalKeyWidth();return r.a.createElement("div",{className:dt()("ReactPiano__Keyboard",this.props.className),style:{width:this.getWidth(),height:this.getHeight()}},this.getMidiNumbers().map((function(n){var o=t.props.activeNotesTutorial.find((function(t){return t.key===n})),i=o||t.props.activeNotes.find((function(t){return t.key===n})),a=k.getAttributes(n),c=(a.note,a.isAccidental),u=!t.props.disabled&&void 0!==i,s=!t.props.disabled&&!t.props.correctNotes.includes(n),l=!t.props.disabled&&t.props.correctNotes.includes(n)&&(t.props.keysAreCorrect||void 0!==o),f=!t.props.disabled&&!u&&t.props.highlightedNotes.includes(n),h=t.props.highlightedNotes.indexOf(n),d=-1!==h&&h<t.props.intervalOfChord&&t.props.intervalMarkersToShow>=h;return r.a.createElement(yt,{naturalKeyWidth:e,midiNumber:n,noteRange:t.props.noteRange,active:u,incorrect:s,confirmedCorrect:l,highlighted:f,accidental:c,disabled:t.props.disabled,onPlayNoteInput:t.props.onPlayNoteInput,onStopNoteInput:t.props.onStopNoteInput,gliss:t.props.gliss,useTouchEvents:t.props.useTouchEvents,key:n,velocity:void 0!==i?i.velocity:null,keyPlayPulses:t.props.keyPlayPulses},r.a.createElement(st,{diffData:d,scale:1,transitionTime:.85,transitionType:"fadeOutOnly"},d?r.a.createElement(jt,{keyboardWidth:t.getWidth(),interval:h,isActive:u,isAccidental:c}):null))})))}}]),n}(r.a.Component);mt.defaultProps={disabled:!1,gliss:!1,useTouchEvents:!1,keyWidthToHeight:.33,renderNoteLabel:function(){},highlightedNotes:[]};var jt=function(t){var e=t.interval,n=t.isActive,o=t.isAccidental,i=t.keyboardWidth;return r.a.createElement("div",{className:dt()("ReactPiano__NoteLabel",{"ReactPiano__NoteLabel--active":n,"ReactPiano__NoteLabel--accidental":o,"ReactPiano__NoteLabel--natural":!o}),style:{fontSize:1e3===i?"22px":"16px"}},e+1)};var Ot=mt,gt=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={isMouseDown:!1,useTouchEvents:!1},t.handleNoteChanges=function(e){var n=e.prevActiveNotes,o=e.nextActiveNotes;if(!t.props.disabled){var r=pt()(n,o);pt()(o,n).forEach((function(e){t.props.playNote(e)})),r.forEach((function(e){t.props.stopNote(e)}))}},t.getMidiNumberForKey=function(e){if(!t.props.keyboardShortcuts)return null;var n=t.props.keyboardShortcuts.find((function(t){return t.key===e}));return n&&n.midiNumber},t.getKeyForMidiNumber=function(e){if(!t.props.keyboardShortcuts)return null;var n=t.props.keyboardShortcuts.find((function(t){return t.midiNumber===e}));return n&&n.key},t.onKeyDown=function(e){if(!(e.ctrlKey||e.metaKey||e.shiftKey)){var n=t.getMidiNumberForKey(e.key);n&&t.onPlayNoteInput(n)}},t.onKeyUp=function(e){var n=t.getMidiNumberForKey(e.key);n&&t.onStopNoteInput(n)},t.onPlayNoteInput=function(e){t.props.disabled||t.props.onPlayNoteInput(e,t.props.activeNotes)},t.onStopNoteInput=function(e){t.props.disabled||t.props.onStopNoteInput(e,t.props.activeNotes)},t.onMouseDown=function(){t.setState({isMouseDown:!0})},t.onMouseUp=function(){t.setState({isMouseDown:!1})},t.onTouchStart=function(){t.setState({useTouchEvents:!0})},t.renderNoteLabel=function(e){var n=e.midiNumber,o=e.isActive,r=e.isAccidental,i=t.getKeyForMidiNumber(n);return t.props.renderNoteLabel({keyboardShortcut:i,midiNumber:n,isActive:o,isAccidental:r})},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp)}},{key:"componentDidUpdate",value:function(t,e){this.props.activeNotes!==t.activeNotes&&this.handleNoteChanges({prevActiveNotes:t.activeNotes||[],nextActiveNotes:this.props.activeNotes||[]})}},{key:"render",value:function(){return r.a.createElement("div",{style:{width:"100%",height:"100%"},onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchStart:this.onTouchStart,"data-testid":"container"},r.a.createElement(Ot,{noteRange:this.props.noteRange,onPlayNoteInput:this.onPlayNoteInput,onStopNoteInput:this.onStopNoteInput,activeNotes:this.props.activeNotes,correctNotes:this.props.correctNotes,keysAreCorrect:this.props.keysAreCorrect,highlightedNotes:this.props.highlightedNotes,className:this.props.className,disabled:this.props.disabled,width:this.props.width,keyWidthToHeight:this.props.keyWidthToHeight,gliss:this.state.isMouseDown,useTouchEvents:this.state.useTouchEvents,renderNoteLabel:this.renderNoteLabel,keyPlayPulses:this.props.keyPlayPulses,intervalOfChord:this.props.intervalOfChord,intervalMarkersToShow:this.props.intervalMarkersToShow,activeNotesTutorial:this.props.activeNotesTutorial}))}}]),n}(r.a.Component);gt.defaultProps={renderNoteLabel:function(t){var e=t.keyboardShortcut,n=(t.midiNumber,t.isActive),o=t.isAccidental;return e?r.a.createElement("div",{className:dt()("ReactPiano__NoteLabel",{"ReactPiano__NoteLabel--active":n,"ReactPiano__NoteLabel--accidental":o,"ReactPiano__NoteLabel--natural":!o})},e):null}};var Nt=gt,wt=function(t){Object(c.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(s.a)(this,n);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(t=e.call.apply(e,[this].concat(r))).state={activeNotes:t.props.activeNotes||[]},t.handlePlayNoteInput=function(e){t.setState((function(n){return t.props.onPlayNoteInput&&t.props.onPlayNoteInput(e,{prevActiveNotes:n.activeNotes}),n.activeNotes.includes(e)?null:{activeNotes:n.activeNotes.concat(e)}}))},t.handleStopNoteInput=function(e){t.setState((function(n){return t.props.onStopNoteInput&&t.props.onStopNoteInput(e,{prevActiveNotes:t.state.activeNotes}),{activeNotes:n.activeNotes.filter((function(t){return e!==t}))}}))},t}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(t){t.activeNotes!==this.props.activeNotes&&this.state.activeNotes!==this.props.activeNotes&&this.setState({activeNotes:this.props.activeNotes||[]})}},{key:"render",value:function(){var t=this.props,e=(t.activeNotes,t.onPlayNoteInput,t.onStopNoteInput,Object(ft.a)(t,["activeNotes","onPlayNoteInput","onStopNoteInput"]));return r.a.createElement(Nt,Object.assign({activeNotes:this.state.activeNotes,onPlayNoteInput:this.handlePlayNoteInput,onStopNoteInput:this.handleStopNoteInput},e))}}]),n}(r.a.Component),kt=k.fromNote("c3"),Et=k.fromNote("f5"),St=function(t){var e=t.activeNotes,n=t.keysAreCorrect,i=t.correctNotes,a=t.keyPlayPulses,c=t.highlightedNotes,u=t.renderScale,s=t.intervalOfChord,l=t.activeNotesTutorial,f=void 0===l?[]:l,h=Object(o.useState)(-1),v=Object(d.a)(h,2),p=v[0],b=v[1];return Object(o.useEffect)((function(){var t=p;if(null!==s)var e=setInterval((function(){t++,b(t),t>=s&&clearInterval(e)}),400)}),[s]),e=e.length>0&&void 0===e[0].velocity?e.map((function(t){return{key:t,velocity:1}})):e,r.a.createElement("div",{className:"piano-wrapper"},r.a.createElement(wt,{noteRange:{first:kt,last:Et},playNote:function(t){},stopNote:function(t){},width:1e3*u,activeNotes:e,correctNotes:i,keysAreCorrect:n,keyPlayPulses:a,highlightedNotes:c,intervalOfChord:s,intervalMarkersToShow:p,activeNotesTutorial:f}))};n(10),n(53);n(58);var xt=n(14),Mt=n(7);function Ct(){var t=Object(xt.a)(["\n        border-color: rgba(255, 255, 255, 0.75);\n        color: white;\n        /* border-width: 1px; */\n      "]);return Ct=function(){return t},t}function At(){var t=Object(xt.a)(["\n        border-color: #ffffff08;\n        color: #fffb;\n        background-color: #fff8dc10;\n        cursor: pointer;\n        text-shadow: none;\n\n        &:hover, &:active {\n          transition: none;\n          background-color: #fff8dc28;\n          border-color:#fff3;\n          color: #fff;\n          border-style: outset;\n        }\n\n        &:active {\n          border-style: inset;\n        }\n      "]);return At=function(){return t},t}function Pt(){var t=Object(xt.a)(["\n      height: 40px;\n      min-width: fit-content;\n      width: 120px;\n      padding: 0px 8px;\n      border: 2px solid #fff0;\n      border-radius: 12px;\n      margin: 10px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      color: hsl(200, 100%, 60%);\n      text-shadow: #00aaff 0px 0px 10px;\n      font-weight: bold;\n      /* background-color: #fff8dc18; */\n      transition: border 0.2s, color 0.2s, background-color 0.2s;\n      user-select: none;\n      font-size: 18px;\n\n      ","\n\n      ","\n      \n    "]);return Pt=function(){return t},t}var It=function(t){var e=t.onClick,n=t.children,o=t.enabled,r=(t.styles,t.className,t.active),i=void 0!==r&&r;return Object(Mt.b)("div",{css:Object(Mt.a)(Pt(),o&&Object(Mt.a)(At()),i&&Object(Mt.a)(Ct())),onClick:e},n)};[].concat(Object(f.a)(it(6)),Object(f.a)(it(7,!0).slice(1)));n(33);var Dt=n(22),_t=n.n(Dt),Rt=n(30),Tt=n(0),Kt=Tt.useEffect,Ft=Tt.useState,Lt=n(60),Gt=(n(10).useAwait,new AudioContext),Wt=function(){var t=Object(Rt.a)(_t.a.mark((function t(){return _t.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Lt.instrument(Gt,"acoustic_grand_piano");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),Bt=function(){var t=Ft(null),e=Object(d.a)(t,2),n=e[0],o=e[1];return Kt((function(){Wt().then(o)}),[]),n};var Ht=n(18),Ut=[{name:"treble",possibleOctaves:["3","4","5"]},{name:"bass",possibleOctaves:["2","3","4"]}];[x,M,C,A,P,E,S].reduce((function(t,e){return Ut.forEach((function(n){return n.possibleOctaves.forEach((function(o){return t.push({note:e,octave:o,clef:n.name})}))})),t}),[]),n(75),n(13);n(76).AMDF();var Vt={addDoubledNote:function(t,e,n){return[].concat(Object(f.a)(e),[F(t.root,n.value)])}},zt=function(t,e,n){var o=Object(f.a)(e);return n.forEach((function(n){console.log(o),o=Vt[n.type](t,e,n),console.log(o)})),o},qt=[{name:"Major",canHaveSeventh:!0,printName:function(t){var e=t.root,n=t.seventh;return"".concat(e," Major").concat(n?" 7th":"")},construct:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.withSeventh,o=void 0!==n&&n;return[t,F(t,4),F(t,7)].concat(Object(f.a)(o?[F(t,10)]:[]))}},{name:"Minor",canHaveSeventh:!0,printName:function(t){var e=t.root,n=t.seventh;return"".concat(e," Minor").concat(n?" 7th":"")},construct:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.withSeventh,o=void 0!==n&&n,r=e.voicing,i=void 0===r?[]:r,a=zt({root:t,type:"Minor",seventh:o},[t,F(t,3),F(t,7)].concat(Object(f.a)(o?[F(t,10)]:[])),i);return a}},{name:"Diminished",canHaveSeventh:!0,printName:function(t){var e=t.root,n=t.seventh;return"".concat(e," Diminished").concat(n?" 7th":"")},construct:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.withSeventh,o=void 0!==n&&n;return[t,F(t,3),F(t,6)].concat(Object(f.a)(o?[F(t,10)]:[]))}},{name:"Augmented",canHaveSeventh:!0,printName:function(t){var e=t.root,n=t.seventh;return"".concat(e," Augmented").concat(n?" 7th":"")},construct:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.withSeventh,o=void 0!==n&&n;return[t,F(t,4),F(t,8)].concat(Object(f.a)(o?[F(t,10)]:[]))}},{name:"Fr+",canHaveSeventh:!1,printName:function(t){var e=t.root,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.shortName,r=void 0!==o&&o;return r?"Fr+ in ".concat(e):"French Augmented 6th in ".concat(e)},construct:function(t){return[F(t,-4),t,F(t,2),F(t,6)]}},{name:"Gr+",canHaveSeventh:!1,printName:function(t){var e=t.root,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.shortName,r=void 0!==o&&o;return r?"Gr+ in ".concat(e):"German Augmented 6th in ".concat(e)},construct:function(t){return[F(t,-4),t,F(t,3),F(t,6)]}},{name:"Major b5",canHaveSeventh:!0,printName:function(t){var e=t.root,n=t.seventh;return"".concat(e," Major b5").concat(n?" 7th":"")},construct:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.withSeventh,o=void 0!==n&&n;return[t,F(t,4),F(t,6)].concat(Object(f.a)(o?[F(t,10)]:[]))}},{name:"Fully Diminished 7th",canHaveSeventh:!1,printName:function(t){var e=t.root;return"".concat(e,"\xba")},construct:function(t){return[t,F(t,3),F(t,6),F(t,9)]}}],Jt=function(t){return qt.find((function(e){return e.name===t}))},Xt=function(t){var e=t.root,n=t.type,o=t.seventh,r=t.voicing,i=void 0===r?[]:r;return Jt(n).construct(e,{withSeventh:o,voicing:i})},$t=[{name:"V \u2192 I",initial:"Major",resultantChord:function(t){var e=t.root;return{root:F(e,-7),type:"Major",seventh:!1}}},{name:"Gr+ \u2192 i6/4",initial:"Gr+",resultantChord:function(t){return{root:t.root,type:"Minor",seventh:!1,voicing:[{type:"addDoubledNote",value:-5}]}}},{name:"Fr+ \u2192 V",initial:"Fr+",resultantChord:function(t){var e=t.root;return{root:F(e,7),type:"Major",seventh:!1}}},{name:"Vb5 \u2192 V7",initial:"Major b5",resultantChord:function(t){return{root:t.root,type:"Major",seventh:!0}}},{name:"V+ \u2192 I6/4",initial:"Augmented",resultantChord:function(t){var e=t.root;return{root:F(e,-7),type:"Major",seventh:!1}}},{name:"iv\xba \u2192 V",initial:"Fully Diminished 7th",resultantChord:function(t){var e=t.root;return{root:F(e,1),type:"Major",seventh:!1}}}],Qt=function(t){var e=t.root,n=t.type,o=t.seventh,r=void 0!==o&&o,i=[],a=I,c=qt.map((function(t){return t.name}));return a.forEach((function(t){c.forEach((function(o){(Jt(o).canHaveSeventh?[!0,!1]:[!1]).forEach((function(a){if(t!==e||o!==n||a!==r&&Jt(n).canHaveSeventh){var c={root:t,type:o,seventh:a};Yt({root:e,type:n,seventh:r},c)&&i.push(c)}}))}))})),i},Yt=function(t,e){var n=Xt(t),o=Xt(e);return n.length===o.length&&n.every((function(t){return Zt(o,t)}))},Zt=function(t,e){return t.some((function(t){return t===e||D[t]===e}))},te=function(t){var e=Qt(t),n=[t].concat(Object(f.a)(e)),o=[];return n.forEach((function(t){$t.forEach((function(e){e.initial===t.type&&o.push({startingChord:t,resultantChord:e.resultantChord(t),name:e.name})}))})),o},ee=n(43),ne=n.n(ee);function oe(){var t=Object(xt.a)(["opacity: 0.7; font-size: 14px;"]);return oe=function(){return t},t}function re(){var t=Object(xt.a)(["display: flex; flex-direction: column; align-items: center;"]);return re=function(){return t},t}function ie(){var t=Object(xt.a)(["padding-bottom: 6px;"]);return ie=function(){return t},t}function ae(){var t=Object(xt.a)(["position: absolute; top: 0px; left: 0px; width: 25%; height: 100%; display: flex; justify-content: center; align-items: flex-end;"]);return ae=function(){return t},t}function ce(){var t=Object(xt.a)(["position: relative; width: 100%; display: flex; justify-content: center;"]);return ce=function(){return t},t}function ue(){var t=Object(xt.a)(["\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      padding: 12px;\n      border-radius: 4px;\n      height: fit-content;\n\n      cursor: pointer;\n      transition: transform 0.5s cubic-bezier(.3,1.85,.7,.83), box-shadow 0.2s, background-color 0.2s;\n      &:hover, &:active {\n        transform: scale(1.03);\n        box-shadow: 0px 0px 3px 1px rgba(255, 255, 255, 0.15);\n        background-color: rgba(255, 255, 255, 0.05);\n      }\n    "]);return ue=function(){return t},t}function se(){var t=Object(xt.a)(["display: flex; gap: 80px;"]);return se=function(){return t},t}function le(){var t=Object(xt.a)(["display: flex; align-items: center;"]);return le=function(){return t},t}function fe(){var t=Object(xt.a)(["width: 100%; display: flex;"]);return fe=function(){return t},t}function he(){var t=Object(xt.a)(["display: flex; flex-direction: column; justify-content: center; align-items: center; width: 100vw%;"]);return he=function(){return t},t}var de=I.map((function(t){return{note:t,fullName:void 0!==D[t]?"".concat(t,"/").concat(D[t]):t}})),ve=qt.map((function(t){return t.name})),pe=Object(o.createContext)(null),be=function(t){Object(Ht.a)(t);var e=Object(o.useState)({root:"C",type:"Major",seventh:!1}),n=Object(d.a)(e,2),r=n[0],i=n[1],a=Object(o.useState)(!1),c=Object(d.a)(a,2),u=c[0],s=c[1],l=(Qt(r),te(r),Bt()),f=Object(o.useRef)(null);return Object(Mt.b)(pe.Provider,{value:{setSelectedChord:i,arpeggiatePlayback:u,audio:l}},Object(Mt.b)("div",{css:Object(Mt.a)(he())},Object(Mt.b)("div",{css:Object(Mt.a)(fe())},de.map((function(t){var e=t.note,n=t.fullName;return Object(Mt.b)(It,{key:e,enabled:!0,onClick:function(){return i((function(t){return Object(lt.a)(Object(lt.a)({},t),{},{root:e})}))},active:r.root===e},n)}))),Object(Mt.b)("div",{css:Object(Mt.a)(le())},ve.map((function(t){return Object(Mt.b)(It,{key:t,enabled:!0,onClick:function(){return i((function(e){return Object(lt.a)(Object(lt.a)({},e),{},{type:t})}))},active:r.type===t},t)})),Object(Mt.b)("div",null,Object(Mt.b)("input",{type:"checkbox",checked:r.seventh,onChange:function(){return i((function(t){return Object(lt.a)(Object(lt.a)({},t),{},{seventh:!t.seventh})}))}})," 7th")),Object(Mt.b)("div",null,Object(Mt.b)("input",{type:"checkbox",checked:u,onChange:function(){return s((function(t){return!t}))}})," Arpeggiate Playback"),Object(Mt.b)("div",{css:Object(Mt.a)(se())},Object(Mt.b)(ye,{chord:r,ref:f}),Object(Mt.b)(me,{chord:r,startingChordRef:f}))))},ye=Object(o.forwardRef)((function(t,e){var n=t.chord,r=t.label,i=void 0===r?null:r,a=Object(o.useContext)(pe),c=a.setSelectedChord,u=a.arpeggiatePlayback,s=a.audio,l=u?1.5:1,h=Jt(n.type).printName(n),d=Xt(n),v=L(d),p=null!==s;return Object(Mt.b)("div",{onMouseEnter:function(){if(p){var t=v.reduce((function(t,e,n){var o=u?.3*n:.04*Math.random();return[].concat(Object(f.a)(t),[{time:o,note:e,duration:l-o}])}),[]);s.schedule(Gt.currentTime,t)}},onClick:function(){return c(n)},css:Object(Mt.a)(ue())},Object(Mt.b)("div",{css:Object(Mt.a)(ce())},Object(Mt.b)("div",{css:Object(Mt.a)(ae())},Object(Mt.b)("div",{css:Object(Mt.a)(ie())},i)),Object(Mt.b)("h2",null,h)),Object(Mt.b)("div",{ref:e},Object(Mt.b)(St,{activeNotes:v,correctNotes:v,keysAreCorrect:null,keyPlayPulses:!1,highlightedNotes:[],renderScale:.5,intervalOfChord:null})))})),me=function(t){var e=t.chord,n=t.startingChordRef,o=te(e);return console.log(o),Object(Mt.b)("div",null,o.map((function(t){return Object(Mt.b)(je,{key:"".concat(t.name).concat(t.startingChord.root),startingChordRef:n,progression:t,originalChord:e})})))},je=function(t){var e,n,i,a,c=t.startingChordRef,u=t.progression,s=t.originalChord,l=u.startingChord,f=u.resultantChord,h=u.name,d=Object(o.useRef)(null),v=Object(Mt.b)("div",{css:Object(Mt.a)(re())},(i=s,a=l,!["type","root","seventh"].every((function(t){return i[t]===a[t]}))&&Object(Mt.b)("div",{css:Object(Mt.a)(oe())},"as ".concat((n={shortName:!0},Jt((e=l).type).printName(e,n))))),Object(Mt.b)("div",null,h));return Object(Mt.b)(r.a.Fragment,null,Object(Mt.b)(ye,{chord:f,ref:d,label:v}),Object(Mt.b)("div",null,Object(Mt.b)(ne.a,{start:c,end:d,endAnchor:{position:"auto",offset:{x:-8}},startAnchor:{position:"auto",offset:{x:8}}})))};var Oe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(be,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[45,1,2]]]);
//# sourceMappingURL=main.bac9f638.chunk.js.map