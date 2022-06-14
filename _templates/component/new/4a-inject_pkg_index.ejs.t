---
sh: touch components/<%= dir %>/index.ts
to: components/<%= dir %>/index.ts
inject: true
skip_if: <%= name %>
append: true
---
export * from './<%= name %>';