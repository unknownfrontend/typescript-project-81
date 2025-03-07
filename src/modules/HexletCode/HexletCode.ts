import {FormTags, FormTemplate} from './HexletCode.types'
import {TagOptions} from '../Tag/Tag.types'
import Tag from "../Tag/Tag"

export default class HexletCode {
    private static formContent = ''
    private static formTemplate: FormTemplate = {}

    private static prepareFormOptions = (formOptions: TagOptions): TagOptions  => {
        formOptions.action = formOptions?.url ?? '#'
        formOptions.method = formOptions?.method ?? 'post'

        delete formOptions.url

        return formOptions
    }

    static formFor = (template: FormTemplate, formOptions: TagOptions = {}, cb?: (f: any) => void) => {
        const name = 'form'
        const options = this.prepareFormOptions(formOptions)

        this.formContent = ''
        cb && this.prepareFormContent(template, () => cb(HexletCode))

        return new Tag(name, options, this.formContent).toString()
    }

    private static prepareFormContent = (template: FormTemplate, cb: () => void): void => {
        this.formTemplate = template
        cb()
    }

    private static checkTemplateError = (name: string): void => {
        if (!(name in this.formTemplate)) {
            throw new Error(`Error: Field ${name} does not exist in the template.`)
        }
    }

    private static prepareInputOptions = (name: string, options: FormTemplate): TagOptions => {
        const inputOptions = {
            name,
            type: options?.type ?? 'text',
            value: this.formTemplate[name] ?? '',
            ...options
        }

        delete inputOptions.as

        return inputOptions
    }

    static input = (name: string, options: FormTemplate): void => {
        this.checkTemplateError(name)

        if (options?.as === FormTags.TEXTAREA) {
            this.textarea(name, options)

            return
        }

        const inputOptions = this.prepareInputOptions(name, options)
        const labelName = this.formTemplate[name] ?? ''

        this.formContent += new Tag('label', {for: name}, labelName).toString()
        this.formContent += new Tag('input', inputOptions).toString()
    }

    private static prepareTextareaOptions = (name: string, options: FormTemplate): TagOptions => {
        const textareaOptions = {
            name,
            cols: options?.cols ?? '20',
            rows: options?.rows ?? '40',
            ...options
        }

        delete textareaOptions.as

        return textareaOptions
    }

    static textarea = (name: string, options: FormTemplate): void => {
        this.checkTemplateError(name)

        const value = this.formTemplate[name] ?? ''
        const textareaOptions = this.prepareTextareaOptions(name, options)

        this.formContent += new Tag('textarea', textareaOptions, value).toString()
    }

    static submit = (name?: string) => {
        const submitOptions = {
            type: 'submit',
            value: name?.length ? name : 'Save'
        }

        this.formContent += new Tag('input', submitOptions).toString()
    }
}