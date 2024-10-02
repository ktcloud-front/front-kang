import{j as n}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";const m=({size:u="small",label:t,value:c,onChange:d})=>{const g=u==="large"?"input-large":"input-small";return n.jsxs("div",{className:`input-wrapper ${g}`,children:[t&&n.jsx("label",{children:t}),n.jsx("input",{value:c,onChange:d})]})};m.__docgenInfo={description:"",methods:[],displayName:"Input",props:{size:{required:!1,tsType:{name:"union",raw:"'small' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'large'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"string"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: React.ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ReactChangeEvent",raw:"React.ChangeEvent<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},name:"e"}],return:{name:"void"}}},description:""}}};const f={title:"Components/Input",component:m,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:{type:"select",options:["small","large"]}},label:{control:"text"},value:{control:"text"},onChange:{action:"changed"}}},e={args:{size:"large",label:"Large Input",value:"Hello, World!"}},a={args:{size:"small",label:"Small Input",value:"Hello!"}};var l,r,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: 'Large Input',
    value: 'Hello, World!'
  }
}`,...(s=(r=e.parameters)==null?void 0:r.docs)==null?void 0:s.source}}};var o,p,i;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: 'Small Input',
    value: 'Hello!'
  }
}`,...(i=(p=a.parameters)==null?void 0:p.docs)==null?void 0:i.source}}};const y=["Large","Small"];export{e as Large,a as Small,y as __namedExportsOrder,f as default};
