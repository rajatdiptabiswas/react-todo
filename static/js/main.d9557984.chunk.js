(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{18:function(t,e,s){},19:function(t,e,s){},26:function(t,e,s){},27:function(t,e,s){},28:function(t,e,s){"use strict";s.r(e);var a=s(2),n=s.n(a),c=s(13),o=s.n(c),l=(s(18),s(12)),r=s(3),i=s(4),d=s(6),u=s(5),k=(s(19),s(0)),p=function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={value:""},t.handleChange=function(e){t.setState({value:e.target.value})},t.addTask=function(e){e.preventDefault();var s=t.state.value;s&&(t.props.addTaskItem(s),t.setState({value:""}))},t}return Object(i.a)(s,[{key:"render",value:function(){return Object(k.jsx)("div",{children:Object(k.jsxs)("form",{onSubmit:this.addTask,children:[Object(k.jsx)("input",{type:"text",placeholder:"Add a task...",value:this.state.value,onChange:this.handleChange}),Object(k.jsx)("button",{type:"submit",children:"+"})]})})}}]),s}(a.Component),h=s(10),m=s(11),j=(s(26),function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).taskName=t.props.taskName,t.id=t.props.taskID,t.isCompleted=t.props.isCompleted,t.completeTask=function(){t.isCompleted||t.props.handleComplete(t.id)},t.deleteTask=function(){t.props.handleDelete(t.id,t.isCompleted)},t}return Object(i.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"container",children:[Object(k.jsx)("div",{className:"taskName "+(this.isCompleted&&"taskCompleted"),children:Object(k.jsx)("p",{children:this.taskName})}),Object(k.jsxs)("div",{className:"buttons",children:[Object(k.jsx)(h.a,{icon:m.b,className:"done "+(this.isCompleted&&"disabledButton"),onClick:this.completeTask}),Object(k.jsx)("span",{className:"space"}),Object(k.jsx)(h.a,{icon:m.a,className:"delete",onClick:this.deleteTask})]})]})}}]),s}(a.Component));var f=function(t){var e=t.tasks.map((function(e){return Object(k.jsx)(j,{taskID:e.taskID,taskName:e.taskName,isCompleted:e.isCompleted,handleComplete:t.handleComplete,handleDelete:t.handleDelete},e.taskID)}));return Object(k.jsxs)("div",{children:[e,e.length>0&&Object(k.jsx)("br",{})]})},b=(s(27),function(t){Object(d.a)(s,t);var e=Object(u.a)(s);function s(){var t;Object(r.a)(this,s);for(var a=arguments.length,n=new Array(a),c=0;c<a;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={taskIDCounter:0,tasksLeft:[],tasksCompleted:[]},t.addTaskItem=function(e){t.setState((function(t){return{taskIDCounter:t.taskIDCounter+1,tasksLeft:[].concat(Object(l.a)(t.tasksLeft),[{taskID:t.taskIDCounter,taskName:e,isCompleted:!1}])}}))},t.completeTaskItem=function(e){var s=t.state.tasksLeft.find((function(t){return t.taskID===e}));s.isCompleted=!0,t.setState((function(t){return{tasksLeft:t.tasksLeft.filter((function(t){return t.taskID!==e})),tasksCompleted:[].concat(Object(l.a)(t.tasksCompleted),[s])}}))},t.deleteTaskItem=function(e,s){s?t.setState((function(t){return{tasksCompleted:t.tasksCompleted.filter((function(t){return t.taskID!==e}))}})):t.setState((function(t){return{tasksLeft:t.tasksLeft.filter((function(t){return t.taskID!==e}))}}))},t}return Object(i.a)(s,[{key:"render",value:function(){return Object(k.jsxs)("div",{className:"ToDoApp",children:[Object(k.jsx)("h1",{className:"title",children:"To-Do"}),Object(k.jsx)("p",{children:"You have ".concat(this.state.tasksLeft.length," tasks remaining")}),Object(k.jsx)("br",{}),Object(k.jsx)(f,{tasks:this.state.tasksLeft,handleComplete:this.completeTaskItem,handleDelete:this.deleteTaskItem}),this.state.tasksCompleted.length>0&&Object(k.jsx)("p",{children:"Finished tasks"}),Object(k.jsx)(f,{tasks:this.state.tasksCompleted,handleComplete:this.completeTaskItem,handleDelete:this.deleteTaskItem}),Object(k.jsx)(p,{addTaskItem:this.addTaskItem,className:"addTask"})]})}}]),s}(a.Component));o.a.render(Object(k.jsx)(n.a.StrictMode,{children:Object(k.jsx)(b,{})}),document.getElementById("root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.d9557984.chunk.js.map