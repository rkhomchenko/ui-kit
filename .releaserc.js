const LOCAL = process.env.LOCAL || 'false';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const isLocalDeploy = LOCAL === '1';

const commitPlugin = '@semantic-release/commit-analyzer';
const releaseNotesPlugin = '@semantic-release/release-notes-generator';
const changelogPlugin = '@semantic-release/changelog';
const npmPlugin = [
    '@semantic-release/npm',
    {
        'npmPublish': false,
        'pkgRoot': 'projects/ui-kit'
    }
];
const execPlugin = [
    '@semantic-release/exec',
    {
        'prepareCmd': 'npm run build',
        'publishCmd': 'npm run publish:package'
    }
];
const gitPlugin = '@semantic-release/git';
const githubPlugin = '@semantic-release/github';

const ci = !isLocalDeploy;
const plugins = isLocalDeploy
    ? [commitPlugin, npmPlugin, execPlugin, gitPlugin]
    : [
        commitPlugin, releaseNotesPlugin, changelogPlugin,
        npmPlugin, execPlugin, gitPlugin, githubPlugin
    ];

if (isLocalDeploy && !GITHUB_TOKEN) {
    throw new Error('GITHUB_TOKEN is required for local deployment');
}

if (isLocalDeploy) {
    process.env.CI = '0';
    process.env.HUSKY = '0';
}

module.exports = {
    ci, plugins,
    'branches': [
        'main',
        'master',
        {
            'name': '(feat|fix|epic)/HYDRO-*',
            'prerelease': '${name.replace(/(feat|fix|epic)\\/HYDRO-*/g, "")}'
        },
        {
            'name': 'release/**',
            'prerelease': 'release'
        }
    ]
};
