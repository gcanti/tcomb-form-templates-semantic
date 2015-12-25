# Setup

```sh
npm install tcomb-form
npm install tcomb-form-templates-bootstrap
```

```js
import t from 'tcomb-form/lib'
import en from 'tcomb-form/lib/i18n/en'
import templates from 'tcomb-form-templates-bootstrap'

t.form.Form.i18n = en
t.form.Form.templates = templates
```