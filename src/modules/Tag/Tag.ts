import {TagOptions} from './Tag.types'

export default class Tag {
    private generatedTag: string = ''
    private singleTags = ['br', 'img', 'input']

    constructor(protected name: string, protected options?: TagOptions, protected content: string = '') {
        this.generateTag()
    }

    private generateTag = (): void => {
        if (this.singleTags.includes(this.name.toLowerCase())) {
            this.generatedTag = this.prepareSingleTag()

            return
        }

        this.generatedTag = this.prepareTag()
    }

    private prepareOptions = (): string => {
        if (!this.options || !Object.keys(this.options).length) return ''

        const options = Object.entries(this.options).map(([key, value]) => `${key}="${value}"`).join(' ')

        return ` ${options}`
    }

    private prepareSingleTag = (): string => {
        return `<${this.name}${this.prepareOptions()}>`
    }

    private prepareTag = (): string => {
        return `<${this.name}${this.prepareOptions()}>${this.content ?? ''}</${this.name}>`
    }

    public toString = (): string => this.generatedTag
}