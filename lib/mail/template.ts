/* eslint-disable @typescript-eslint/no-explicit-any */

export const appointmentEmailTemplate = (data: any) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Appointment Request</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
        }
        .container {
            max-width: 700px;
            margin: 0 auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
            color: white;
            padding: 25px 20px;
            text-align: center;
        }
        .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
        }
        .header .subtitle {
            margin: 5px 0 0 0;
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 30px;
        }
        .alert-banner {
            background: #fff9db;
            border: 1px solid #ffe066;
            border-radius: 6px;
            padding: 15px;
            margin-bottom: 25px;
            text-align: center;
            font-weight: 600;
            color: #e67700;
        }
        .section {
            margin-bottom: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        .section:last-child {
            border-bottom: none;
            margin-bottom: 0;
        }
        .section-title {
            color: #2c3e50;
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            padding: 8px 12px;
            background: #f8f9fa;
            border-radius: 4px;
        }
        .info-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 15px;
        }
        .info-item {
            margin-bottom: 12px;
        }
        .label {
            font-weight: 600;
            color: #555;
            font-size: 14px;
            margin-bottom: 4px;
        }
        .value {
            color: #2c3e50;
            font-size: 15px;
            padding: 8px 12px;
            background: #f8f9fa;
            border-radius: 4px;
            border-left: 3px solid #3498db;
        }
        .full-width {
            grid-column: 1 / -1;
        }
        .priority-item {
            background: #fff5f5;
            border-left: 3px solid #e74c3c;
        }
        .timestamp {
            text-align: center;
            color: #7f8c8d;
            font-size: 14px;
            margin-top: 10px;
        }
        .footer {
            background: #2c3e50;
            padding: 20px;
            text-align: center;
            color: #ecf0f1;
            font-size: 14px;
        }
        @media (max-width: 600px) {
            .info-grid {
                grid-template-columns: 1fr;
            }
            .content {
                padding: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📋 New Appointment Request</h1>
            <div class="subtitle">Website Form Submission</div>
        </div>
        
        <div class="content">
            <div class="alert-banner">
                ⚡ New appointment request received from website
            </div>

            <div class="timestamp">
                Submitted on: <strong>${new Date().toLocaleString()}</strong>
            </div>

            <div class="section">
                <div class="section-title">👤 Patient Details</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="label">Full Name</div>
                        <div class="value">${data.firstName} ${
  data.lastName
}</div>
                    </div>
                    <div class="info-item">
                        <div class="label">Email Address</div>
                        <div class="value">${data.email}</div>
                    </div>
                    <div class="info-item">
                        <div class="label">Phone Number</div>
                        <div class="value">${data.phone}</div>
                    </div>
                    <div class="info-item">
                        <div class="label">Date of Birth</div>
                        <div class="value">${data.dateOfBirth}</div>
                    </div>
                    <div class="info-item">
                        <div class="label">Gender</div>
                        <div class="value">${data.gender}</div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">📅 Appointment Preferences</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="label">Preferred Doctor</div>
                        <div class="value priority-item">${data.doctor}</div>
                    </div>
                    <div class="info-item">
                        <div class="label">Department</div>
                        <div class="value">${data.department}</div>
                    </div>
                    <div class="info-item">
                        <div class="label">Preferred Date</div>
                        <div class="value priority-item">${
                          data.preferredDate
                        }</div>
                    </div>
                    <div class="info-item">
                        <div class="label">Preferred Time</div>
                        <div class="value priority-item">${
                          data.preferredTime
                        }</div>
                    </div>
                    <div class="info-item full-width">
                        <div class="label">Preferred Location</div>
                        <div class="value">${data.location}</div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">💊 Medical Information</div>
                <div class="info-grid">
                    <div class="info-item full-width">
                        <div class="label">Reason for Appointment</div>
                        <div class="value">${data.reason}</div>
                    </div>
                    <div class="info-item full-width">
                        <div class="label">Symptoms Description</div>
                        <div class="value">${data.symptoms}</div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">🏥 Insurance Information</div>
                <div class="info-grid">
                    <div class="info-item">
                        <div class="label">Insurance Provider</div>
                        <div class="value">${data.insuranceProvider}</div>
                    </div>
                    <div class="info-item">
                        <div class="label">Insurance Number</div>
                        <div class="value">${data.insuranceNumber}</div>
                    </div>
                </div>
            </div>

            <div class="section">
                <div class="section-title">📊 Quick Actions</div>
                <div style="text-align: center; padding: 15px;">
                    <small>This request requires follow-up. Please contact the patient to confirm appointment availability.</small>
                </div>
            </div>
        </div>

        <div class="footer">
            <p>This email was automatically generated from your website appointment form</p>
            <p>© 2024 Your Medical Center. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`;

export function contactTemplate(data: any): string {
  return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f4f4f4; }
        .container { max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
        .header { background: #3498db; color: white; padding: 20px; text-align: center; }
        .content { padding: 25px; }
        .section { margin-bottom: 20px; padding-bottom: 15px; border-bottom: 1px solid #eee; }
        .info-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
        .label { font-weight: bold; color: #555; font-size: 14px; margin-bottom: 4px; }
        .value { background: #f8f9fa; padding: 8px 12px; border-radius: 4px; border-left: 3px solid #3498db; }
        .full-width { grid-column: 1 / -1; }
        .message-content { background: #f8f9fa; padding: 15px; border-radius: 6px; font-style: italic; }
        .footer { background: #2c3e50; color: white; padding: 15px; text-align: center; font-size: 14px; }
        @media (max-width: 600px) { .info-grid { grid-template-columns: 1fr; } }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📧 New Contact Message</h1>
            <p>Website Contact Form</p>
        </div>
        <div class="content">
            <div style="text-align: center; color: #666; margin-bottom: 20px;">
                Received on: ${new Date().toLocaleString()}
            </div>
            <div class="section">
                <h3>👤 Contact Details</h3>
                <div class="info-grid">
                    <div><span class="label">Full Name:</span><div class="value">${
                      data.fullName
                    }</div></div>
                    <div><span class="label">Email:</span><div class="value">${
                      data.email
                    }</div></div>
                    <div><span class="label">Phone:</span><div class="value">${
                      data.phone
                    }</div></div>
                    <div><span class="label">State:</span><div class="value">${
                      data.state
                    }</div></div>
                </div>
            </div>
            <div class="section">
                <h3>Subject</h3>
                <div class="message-content">${data.subject}</div>
            </div>
            <div class="section">
                <h3>💬 Message</h3>
                <div class="message-content">${data.message}</div>
            </div>
        </div>
        <div class="footer">
            <p>Automated notification from website contact form</p>
        </div>
    </div>
</body>
</html>`;
}
