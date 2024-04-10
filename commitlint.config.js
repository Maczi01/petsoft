module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
        'type-enum': [2, 'always', [
            'build',
            'chore',
            'ci',
            'docs',
            'feat',
            'fix',
            'perf',
            'refactor',
            'revert',
            'style',
            'test',
        ]],
        'subject-case': [0], // Disable checking for subject case
        'subject-empty': [0], // Disable checking for empty subject
        'header-max-length': [0] // Disable checking for header length
    }
};
