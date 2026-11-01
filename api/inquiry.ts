import type { Request, Response } from 'express';

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed. Use POST.' });
  }

  try {
    const { name, email, phone, program, preferredTime, message, inquiryId } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields: name, email, and message are required.' });
    }

    const ownerEmail = process.env.VITE_GYM_OWNER_EMAIL || 'apoorvtest0111@gmail.com';
    const accessKey = process.env.VITE_WEB3FORMS_ACCESS_KEY;

    // If Web3Forms access key is available on the server, forward it
    if (accessKey && accessKey !== 'YOUR_WEB3FORMS_ACCESS_KEY') {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `⚡ New Athlete Inquiry: ${name} [${program}] - Ref #${inquiryId}`,
          from_name: 'VOLT ATHLETICS',
          to_email: ownerEmail,
          name,
          email,
          phone,
          program,
          preferred_time: preferredTime,
          message,
          replyto: email,
        }),
      });

      const data = await response.json();
      return res.status(200).json({ success: true, forwarded: true, data });
    }

    return res.status(200).json({
      success: true,
      forwarded: false,
      message: 'Inquiry registered successfully.',
      inquiryId: inquiryId || Math.floor(100000 + Math.random() * 900000).toString(),
      destination: ownerEmail,
    });
  } catch (error: any) {
    return res.status(500).json({ error: 'Internal server error processing inquiry', details: error.message });
  }
}
