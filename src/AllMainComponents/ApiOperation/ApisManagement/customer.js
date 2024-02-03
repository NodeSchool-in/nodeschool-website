import { getApi, postApi } from '../ApiCalls/ApiCalls';

export async function createCustomer(body) {
    const payload = {
        url: "https://api.nodeschool.in/prod/customer/createCustomer",
        data: body,
        headers: {
            'Content-Type': 'application/json',
        }
    }
    return postApi(payload.url, payload.data, payload.headers);
}
