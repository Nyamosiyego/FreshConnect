import axios from "axios";
import MpesaPay from "mpesapay";

const Consumer_Key = process.env.MPESA_CONSUMER_KEY;
const Consumer_Secret = process.env.MPESA_CONSUMER_SECRET;
const Business_Short_Code = process.env.MPESA_BUSINESS_SHORT_CODE;
const Password = process.env.MPESA_PASSWORD;
const Passkey = process.env.MPESA_PASS_KEY
const Transaction_Description = "STKPush";
const Account_Reference = "Fresh";
const PartyA = process.env.MPESA_PARTYA;
const PartyB = process.env.MPESA_PARTYB;
const B2C_Security_Credential = process.env.MPESA_B2C_SECURITY_CREDENTIAL;
const Initiator_Name = process.env.MPESA_INITIATOR_NAME;
const Environment = "sandbox | live";
const callbackUrl = "https://fresh-connect.vercel.app/callback";

const mpesapay = new MpesaPay(
  Consumer_Key,
  Consumer_Secret,
  Business_Short_Code,
  Passkey,
  Account_Reference,
  Transaction_Description,
  PartyA,
  B2C_Security_Credential,
  Initiator_Name,
  Environment
);

// pages/api/mpesa.js

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Extract the necessary details from the request body
    const { phone, amount } = req.body;
    initiatePayment(amount, phone, callbackUrl);

    async function initiatePayment(amount, phone, callbackUrl) {
      try {
        const response = await mpesapay.stkPush(amount, phone, callbackUrl);
        console.log(amount, phone, callbackUrl);
        console.log(mpesapay);
        console.log(response);
        res.status(200).json({ response });
        // Handle the response data
      } catch (error) {
        res.status(500).json({ error: error.message });
        // Handle errors
      }
    }
  }
}
