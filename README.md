### Hexlet tests and linter status:
[![Actions Status](https://github.com/unknownfrontend/typescript-project-81/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/unknownfrontend/typescript-project-81/actions)

### Tests status:
<a href="https://codeclimate.com/github/unknownfrontend/typescript-project-81/maintainability"><img src="https://api.codeclimate.com/v1/badges/3a66397d626458c32c47/maintainability" /></a>
<a href="https://codeclimate.com/github/unknownfrontend/typescript-project-81/test_coverage"><img src="https://api.codeclimate.com/v1/badges/3a66397d626458c32c47/test_coverage" /></a>

### Example of usage

Для генерации формы необходимо определить template 
```javascript
const template = { name: 'rob', job: 'hexlet', gender: 'm' }
```
Где ключ это ```name``` элемента, а значение - ```value```

```javascript
HexletCode.formFor(template, { method: 'post' }, (f) => {
    f.input('name', {class: 'test-class'});
    f.input('job', { as: 'textarea' });
    f.textarea('gender', {cols: 50, rows: 100});
    f.submit();
})
```
На выводе (в строку):
```html
<form method="post" action="#">
    <label for="name">rob</label>
    <input name="name" type="text" value="rob" class="test-class">
    <textarea name="job" cols="20" rows="40">hexlet</textarea>
    <textarea name="gender" cols="50" rows="100">m</textarea>
    <input type="submit" value="Save">
</form>
```


**Параметры формы:** 

```javascript
{
    url: '/test' // Default: #,
    method: 'post' // Default: post
}
```

**Метод ```input```:** 

Генерация ```input```

```name```: Имя ```input``` сгенерированном в шаблоне. Если отсутствует в шаблоне - будет ошибка

```options```: Опции ```input```. По умолчанию ```type="text"```

```javascript
{
    as: 'textarea' // Необязательный параметр? превращает input в textarea
    key: value // Можно добавлять абсолютно любые свойства для input
}
```

**Метод ```textarea```:**

Генерация ```textarea```

```name```: Имя ```textarea``` в сгенерированном шаблоне. Если отсутствует в шаблоне - будет ошибка

```options```: Опции ```textarea```. По умолчанию ```cols="20" rows="40""```

```javascript
{
    key: value // Можно добавлять абсолютно любые свойства для инпута
}
```

**Метод ```submit```:** 

Отправка формы

```name```: Значение ```submit``` в сгенерированном шаблоне. По умолчанию **Save**
