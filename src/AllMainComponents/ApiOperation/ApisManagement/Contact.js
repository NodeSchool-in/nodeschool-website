import { postApi } from '../ApiCalls/ApiCalls';

export async function api_postContact(
  firstName,
  lastName,
  email,
  phone,
  query
) {
  let url = `https://api.nodeschool.in/prod/contact/postLead`;

  let headers = {
    'Content-Type': 'application/json',
  };

  let body = {
    firstName,
    lastName,
    email,
    phone,
    query,
  };

  return postApi(url, body, headers);
}
