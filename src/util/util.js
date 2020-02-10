import config from '../../gatsby-config';

export const latest = (arr, limit) => {
  return [...arr].reverse().slice(0, limit);
}

export const asset = (path) => {
  const env = process.env.GATSBY_ENV;
  return env !== "development" ? path : config.pathPrefix + '/' + path;
}