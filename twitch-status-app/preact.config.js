export default function(config, env, helpers) {
  if (env.isProd) {
    config.output.publicPath =
      'https://axzerk.github.io/codecamp-projects/twitch-status-app/build/';
  }
}
