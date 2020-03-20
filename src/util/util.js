import config from '../../gatsby-config';

export const latest = (arr, limit) => {
  return [...arr].reverse().slice(0, limit);
}

export const asset = (path) => {
  const env = process.env.GATSBY_ENV;
  return env === "production" && config.pathPrefix ? `${config.pathPrefix}${path}` : `${path}`;
}

export const sleep = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}