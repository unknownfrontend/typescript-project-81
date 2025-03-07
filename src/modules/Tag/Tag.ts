import {Action, TagOptions} from './Tag.types'

export default class Tag {
    private generatedTag: string = ''
    private singleTags = ['br', 'img', 'input']

    constructor(protected name: string, protected options?: TagOptions, protected content?: string) {
        this.generateTag()
    }

    private generateTag = (): void => {
        if (this.singleTags.includes(this.name.toLowerCase())) {
            this.generatedTag = this.prepareSingle()

            return
        }

        this.generatedTag = this.prepare()
    }

    private prepareOptions = (): string => {
        if (!this.options || !Object.keys(this.options).length) return ''

        const options = Object.entries(this.options).map(([key, value]) => `${key}="${value}"`).join(' ')

        return ` ${options}`
    }

    private prepareSingle = (): string => {
        return `<${this.name}${this.prepareOptions()}>`
    }

    private prepare = (): string => {
        return `<${this.name}${this.prepareOptions()}>${this.content ?? ''}</${this.name}>`
    }

    public toString = (): string => this.generatedTag

    static formFor = (template: TagOptions, action: Action = {url: '#'}, cb?: () => void) => {
        const name = 'form'
        const options = {
            action: action.url,
            ...template
        }

        cb && cb()

        return new Tag(name, options).toString()
    }
}