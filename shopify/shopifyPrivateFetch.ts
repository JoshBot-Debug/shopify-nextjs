
const endpoint = process.env.SHOPIFY_STORE_DOMAIN;
const key = process.env.SHOPIFY_STOREFRONT_PRIVATE_ACCESS_TOKEN;
const apiVersion = process.env.SHOPIFY_STOREFRONT_API_VERSION;

export async function shopifyPrivateFetch({ query, variables }: { query: string; variables?: any }) {
  try {
    const result = await fetch(`https://${endpoint}/api/${apiVersion}/graphql.json`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Shopify-Storefront-Private-Token': key
        // should add Shopify-Storefront-Buyer-IP // https://shopify.dev/docs/api/usage/authentication#optional-ip-header
      } as any,
      body: JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json()
    };
  } catch (error) {
    console.error('Error:', error);
    return {
      status: 500,
      error: 'Error receiving data'
    };
  }
}