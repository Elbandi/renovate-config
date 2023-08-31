# renovate-config

To host the renovate config.

- `default.json` holds the basic config for all repositories. It extends the presets by the renovate project defined in `renovate-schema.json`.
- Each repository can extend/alter this config by adding a `renovate.json` file to the root of the repository.


