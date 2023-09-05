module.exports = {
    "repositories": [
        "gitea/helm-chart"
    ],
    "endpoint": "https://gitea.com/api/v1",
    "gitAuthor": "Renovate Bot <renovate-bot@gitea.com>",
    "platform": "gitea",
    "onboardingConfigFileName": "renovate.json5",
    "autodiscover": false,
    "optimizeForDisabled": true,
    "forkProcessing": "disabled",
    "dryRun": null,
    "binarySource": "install",
    "hostRules": [
        {
            "matchHost": "docker.io",
            "username": process.env.HUB_DOCKER_COM_USER,
            "password": process.env.HUB_DOCKER_COM_TOKEN
        }
    ]
};
