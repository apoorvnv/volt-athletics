export interface InquiryPayload {
  name: string;
  email: string;
  phone: string;
  program: string;
  preferredTime: string;
  message: string;
  inquiryId: string;
}

export const GYM_OWNER_EMAIL = 'apoorvtest0111@gmail.com';

/**
 * Generates the clean formatted plain text content of the inquiry
 */
export const getFormattedEmailText = (payload: InquiryPayload): string => {
  return `To: ${GYM_OWNER_EMAIL}
From: ${payload.name} <${payload.email}>
Subject: ⚡ Inbound Athlete Inquiry: ${payload.name} [${payload.program}] - Ref #${payload.inquiryId}

Hello VOLT ATHLETICS Coaching Team,

I am submitting an inquiry through the VOLT ATHLETICS website with the following details:

- Full Name: ${payload.name}
- Email: ${payload.email}
- Phone: ${payload.phone || 'Not provided'}
- Selected Discipline: ${payload.program}
- Preferred Callback Window: ${payload.preferredTime}
- Reference ID: #${payload.inquiryId}

Inquiry Message & Fitness Goals:
${payload.message}

Please confirm receipt and send me the onboarding guide and schedule.

Best regards,
${payload.name}
${payload.phone ? `Phone: ${payload.phone}` : ''}`;
};

/**
 * Builds the native mailto: URL pre-addressed to the gym owner with CC to the applicant
 */
export const createMailtoLink = (payload: InquiryPayload): string => {
  const subject = `⚡ Inbound Athlete Inquiry: ${payload.name} [${payload.program}] - Ref #${payload.inquiryId}`;

  const body = `Hello VOLT ATHLETICS Team,

I am submitting an inquiry through the website with the following details:

- Full Name: ${payload.name}
- Email: ${payload.email}
- Phone: ${payload.phone || 'Not provided'}
- Discipline Interest: ${payload.program}
- Preferred Callback Window: ${payload.preferredTime}
- Reference ID: #${payload.inquiryId}

Inquiry Message & Goals:
${payload.message}

Please confirm receipt and let me know about schedule availability.

Best regards,
${payload.name}
(${payload.email})`;

  return `mailto:${GYM_OWNER_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body
  )}&cc=${encodeURIComponent(payload.email)}`;
};

/**
 * Triggers native download of an inquiry confirmation receipt
 */
export const downloadInquiryReceipt = (payload: InquiryPayload) => {
  const content = `================================================
VOLT ATHLETICS - OFFICIAL INQUIRY RECEIPT
Power Your Potential.
================================================
Reference ID: #${payload.inquiryId}
Timestamp: ${new Date().toLocaleString()}
Destination: ${GYM_OWNER_EMAIL} (VOLT Concierge)
Athlete Email: ${payload.email}

------------------------------------------------
ATHLETE DETAILS:
------------------------------------------------
Name: ${payload.name}
Phone: ${payload.phone || 'Not provided'}
Discipline Interest: ${payload.program}
Preferred Callback Window: ${payload.preferredTime}

------------------------------------------------
INQUIRY MESSAGE & GOALS:
------------------------------------------------
${payload.message}

------------------------------------------------
STATUS & SLA:
------------------------------------------------
Status: PREPARED FOR DISPATCH
Destination Recipient: ${GYM_OWNER_EMAIL}
Expected Response Time: Within 4 business hours.
Facility: 840 Power Boulevard, District 4
Support Phone: +1 (800) 555-8658
================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `VOLT_INQUIRY_${payload.inquiryId}.txt`;
  link.click();
  URL.revokeObjectURL(url);
};
