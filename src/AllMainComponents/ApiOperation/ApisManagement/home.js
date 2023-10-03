import { getApi } from '../ApiCalls/ApiCalls';

export async function api_homePage() {
  let url = 'https://api.nodeschool.in/prod/page/home';

  let headers = {
    'Content-Type': 'application/json',
  };

  return getApi(url, headers);
}
