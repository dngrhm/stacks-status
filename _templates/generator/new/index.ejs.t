---
to: _templates/<%= name %>/<%= action || 'new' %>/index.ejs.t
---
---
to: <%= dir %>/<%= name %>/index.js
---
export { default as <%= name %>} from './<%= name %>';