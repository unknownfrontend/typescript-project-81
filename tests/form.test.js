import { expect, test } from 'vitest';
import Tag from '../src/modules/Tag/Tag';

const tpl1 = {method: 'post'}
const action = {
    url: '/users'
}

test('test form1', () => {
    expect(Tag.formFor(tpl1)).toBe('<form action="#" method="post"></form>');
});

test('test form2', () => {
    expect(Tag.formFor(tpl1, action)).toBe('<form action="/users" method="post"></form>');
});