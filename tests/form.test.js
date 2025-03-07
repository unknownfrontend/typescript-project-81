import { expect, test } from 'vitest';
import HexletCode from '../src/modules/HexletCode/HexletCode.ts';
import {form, formAction} from "./__fixtures__/form.js";

const tpl1 = {name: 'nick'}
const formParams = {
    url: '/users'
}

test('test form without options', () => {
    expect(HexletCode.formFor(tpl1)).toBe(form);
});

test('test form with empty options', () => {
    expect(HexletCode.formFor(tpl1, {})).toBe(form);
});

test('test form with options', () => {
    expect(HexletCode.formFor(tpl1, formParams)).toBe(formAction);
});