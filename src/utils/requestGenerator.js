import * as config from "./config";

export function buildRequest(book) {
  return config.REQUEST_PREFIX + book + config.MAX_RESULTS + config.API_KEY;
}
