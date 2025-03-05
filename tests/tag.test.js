import { expect, test } from 'vitest';
import Tag from '../src/modules/Tag/Tag.ts';

test('test br', () => {
    expect(new Tag("br").toString()).toBe('<br>');
});

test('test img', () => {
    expect(new Tag("img", { src: "path/to/image" }).toString()).toBe('<img src="path/to/image">');
});

test('test input', () => {
    expect(new Tag("input", { type: "submit", value: "Save" }).toString()).toBe('<input type="submit" value="Save">');
});

test('test label', () => {
    expect(new Tag("label", {}, "Email").toString()).toBe('<label>Email</label>');
});

test('test label 2', () => {
    expect(new Tag("label", { for: "email" }, "Email").toString()).toBe('<label for="email">Email</label>');
});

test('empty div', () => {
    expect(new Tag("div").toString()).toBe('<div></div>');
});