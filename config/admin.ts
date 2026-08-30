export default ({ env }: { env: any }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'someSecretKey123456'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', 'someSaltKey123456'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT', 'someTransferSalt123456'),
    },
  },
});