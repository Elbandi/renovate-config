module.exports = {
    "endpoint": "https://git.elbandi.net/api/v1",
    "gitAuthor": "Renovate Bot <renovate-bot@elbandi.net>",
    "platform": "gitea",
    "onboardingConfigFileName": "renovate.json5",
    "autodiscover": true,
    "autodiscoverFilter": ["elbandi/*"],
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
