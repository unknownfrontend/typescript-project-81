import { expect, test } from 'vitest';
import HexletCode from '../src/modules/HexletCode/HexletCode.ts';
import {inputWithAdditional, inputWithAs, inputWithAsWithDefault, inputWithDefaultRedeclared} from "./__fixtures__/input.js";

const template = { name: 'rob', job: 'hexlet', gender: 'm' }

test('test input error', () => {
    expect(() =>
        HexletCode.formFor(template, { method: 'post' }, (f) => {
        f.input('hexlet');
    })).toThrowError()
});

test('input with as', () => {
    expect(
        HexletCode.formFor(template, { method: 'post' }, (f) => {
            f.input('name');
            f.input('job', { as: 'textarea' });
        })
    ).toBe(inputWithAs);
})

test('input with additional options', () => {
     expect(
        HexletCode.formFor(template, {}, (f) => {
            f.input('name', {class: 'user-input'});
            f.input('job');
        })
    ).toBe(inputWithAdditional);
})

test('input with default values', () => {
    expect(
        HexletCode.formFor(template, {}, (f) =>
            f.input('job', { as: 'textarea' }))
    ).toBe(inputWithAsWithDefault);
})

test('input with redeclared values', () => {
    expect(
        HexletCode.formFor(template, { url: '#' }, (f) =>
            f.input('job', { as: 'textarea', rows: 50, cols: 50}))
    ).toBe(inputWithDefaultRedeclared);
})