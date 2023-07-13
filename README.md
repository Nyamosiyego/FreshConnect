
# FreshConnect-Customer Page

FreshConnect is a platform where farmers can register as vendors and post their products for sale. This is an ecommerce site where the customer can buy products posted by multiple vendors. You can find the [admin page if you click this link](https://github.com/Nyamosiyego/learn)

![Screenshot of FreshConnect homepage](https://res.cloudinary.com/dwh98o938/image/upload/v1689264517/Screenshot_2023-07-13_183552_jmjdir.png)

In the products page all the users can access all the products in the ecommerce FreshConnect page

![Screenshot of FreshConnect Product page](https://res.cloudinary.com/dwh98o938/image/upload/v1689264877/Screenshot_2023-07-13_191233_nwqemg.png)

Here users can choose products based on their categories and filter by properties

![Screenshot of FreshConnect Categories page](https://res.cloudinary.com/dwh98o938/image/upload/v1689264878/Screenshot_2023-07-13_191324_redflf.png)

In the accounts page a user can sign in with google to create account with us. Here you can also access your orders and wishlist.

![Screenshot of FreshConnect Account page](https://res.cloudinary.com/dwh98o938/image/upload/v1689265123/Screenshot_2023-07-13_191735_ilbjhr.png)

The picture below you can see the log in with google consent page and sign-in options

![Screenshot of FreshConnect orders page](https://res.cloudinary.com/dwh98o938/image/upload/v1689265123/Screenshot_2023-07-13_191756_jxzj1n.png)

Here you could see the accounts page with the orders and wishlist and also customer information

![Screenshot of FreshConnect Account page](https://res.cloudinary.com/dwh98o938/image/upload/v1689265134/Screenshot_2023-07-13_191820_sqflji.png)

After buying everything that you need the user can navigate to the cart page where they can see the total amount and checkout with stripe and mpesa stk-push

![Screenshot of FreshConnect admins page](https://res.cloudinary.com/dwh98o938/image/upload/v1689265709/Screenshot_2023-07-13_192101_z5vooa.png)

Stripe Checkout-page

![Screenshot of FreshConnect admins page](https://res.cloudinary.com/dwh98o938/image/upload/v1689265709/Screenshot_2023-07-13_192140_byhrps.png)

In the apply vendor page one could apply to be able to sell in our website. After applying we'll vet you then get back to you

![Screenshot of FreshConnect settings page](https://res.cloudinary.com/dwh98o938/image/upload/v1689265709/Screenshot_2023-07-13_192206_qougya.png)

## Getting Started

To get started with FreshConnect, follow these steps:

1. Clone the repository to your local machine using `git clone https://github.com/Nyamosiyego/FreshConnect.git`.
2. Navigate to the project directory and run `npm install` to install all dependencies.
3. Create a `.env` file in the root of the project directory and add the following environment variables:

```
    GOOGLE_ID=
    GOOGLE_SECRET=
    GITHUB_ID=
    GITHUB_SECRET=
    MONGODB_URI=
    EMAIL_SERVER=
    EMAIL_FROM=user@gmail.com
    SECRET=
    S3_ACCESS_KEY=
    S3_SECRET_ACCESS_KEY=
    S3_BUCKET=
    NEXTAUTH_URL="http://localhost:3000/"
    STRIPE_SK=
    STRIPE_PK= 
    PUBLIC_URL="http://localhost:3000/"
    MPESA_CONSUMER_KEY=
    MPESA_CONSUMER_SECRET=
    MPESA_PASS_KEY=
    MPESA_B2C_SECURITY_CREDENTIAL=
    MPESA_BUSINESS_SHORT_CODE=174379
    MPESA_PARTYA=
    MPESA_PARTYB=
    MPESA_INITIATOR_NAME=testapi
    MPESA_ENVIRONMENT="sandbox | live"
```

5. Run the project using the command npm run dev then head to [http://localhost:3000](http://localhost:3000).
