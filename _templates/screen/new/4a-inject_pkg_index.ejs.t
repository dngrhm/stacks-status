---
sh: touch screens/<%= dir %>/index.ts
to: screens/<%= dir %>/index.ts
inject: true
skip_if: <%= name %>
append: true
---
export * from './<%= name %>';