import { getApi } from '../ApiCalls/ApiCalls';

export async function api_blogpost(handle) {
  console.log('handler',handle)
  let url = `https://api.nodeschool.in/prod/post/getPost/${handle}.json`;
  let headers = {};

  return getApi(url, headers);
}
