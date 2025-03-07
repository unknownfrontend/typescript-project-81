import { expect, test } from 'vitest';
import Tag from '../src/modules/Tag/Tag.ts';
import {br, emptyDiv, img, input, label, labelFor} from "./__fixtures__/tag.js";

test('test br', () => {
    expect(new Tag("br").toString()).toBe(br);
});

test('test img', () => {
    expect(new Tag("img", { src: "path/to/image" }).toString()).toBe(img);
});

test('test input', () => {
    expect(new Tag("input", { type: "submit", value: "Save" }).toString()).toBe(input);
});

test('test label', () => {
    expect(new Tag("label", {}, "Email").toString()).toBe(label);
});

test('test label for', () => {
    expect(new Tag("label", { for: "email" }, "Email").toString()).toBe(labelFor);
});

test('empty div', () => {
    expect(new Tag("div").toString()).toBe(emptyDiv);
});