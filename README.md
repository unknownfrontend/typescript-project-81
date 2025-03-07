### Hexlet tests and linter status:
[![Actions Status](https://github.com/unknownfrontend/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/unknownfrontend/typescript-project-81/actions)

### Tests status:
<a href="https://codeclimate.com/github/unknownfrontend/typescript-project-81/maintainability"><img src="https://api.codeclimate.com/v1/badges/3a66397d626458c32c47/maintainability" /></a>
<a href="https://codeclimate.com/github/unknownfrontend/typescript-project-81/test_coverage"><img src="https://api.codeclimate.com/v1/badges/3a66397d626458c32c47/test_coverage" /></a>

### Example of usege

Для генерации формы необходимо определить template 
```javascript
const template = { name: 'rob', job: 'hexlet', gender: 'm' }
```
Где ключ это ```name``` элемента, а значение - ```value```

```javascript
HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name');
    f.input('job', { as: 'textarea' });
})
```