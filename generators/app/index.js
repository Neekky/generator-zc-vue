const Generator = require('yeoman-generator');

module.exports = class extends Generator {
    prompting() {
        return this.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'Your project name',
                default: this.appname + 'v1' // appname 为项目生成目录名称
            }
        ])
            .then(answers => {
                this.answers = answers
            })
    }

    writting() {
        this.fs.copyTpl(
            this.templatePath('**'),
            this.destinationPath('./'),
            this.answers
        )
    }
}