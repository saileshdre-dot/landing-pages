import Link from 'next/link';
import Image from 'next/image';

export default function TermsAndConditions() {
  return (
    <>
      <header className='site_header'>
        <div className='container'>
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="DRE Logo"
              width={150}
              height={50}
              style={{ width: 'auto', height: '40px', objectFit: 'contain' }}
            />
          </Link>
        </div>
      </header>

      <main className='policy_page'>
        <div className='container'>
          <div className='policy_content'>
            <h1>Terms and Conditions</h1>
            
            <p>
              Please be advised that accessing or utilizing the landing page implies the user's consent to abide by the following terms and conditions:
            </p>

            <h2>Intellectual Property</h2>

            <p>
              All content, images, logos, and other materials on this landing page are the property of respective project developer or its licensors. These properties are safeguarded by intellectual property laws, and users are expressly prohibited from copying, altering, distributing, or utilizing any content without obtaining prior written permission.
            </p>

            <h2>Property Information</h2>

            <p>
              This landing page's content, which includes details of the properties, costs, and availability, is subject to change at any time. The Company is not responsible for any inaccuracies or omissions in the information provided.
            </p>

            <h2>User Obligations</h2>

            <p>
              Users are obligated to furnish accurate and current information when submitting inquiries or requests via the landing page. Additionally, users must commit to refraining from engaging in any unlawful or harmful activities, such as hacking, spamming, or transmitting malicious software.
            </p>

            <h2>Privacy and Data Collection</h2>

            <p>
              The Company may collect, store, and use your personal information in accordance with its privacy policy, which is available at <Link href="/privacy-policy">DRE HOMES REAL ESTATE BROKER</Link>. We may use third-party services or tracking technologies, such as cookies or analytics tools, to collect information about your use of this landing page.
            </p>

            <h2>Disclaimer of Liability</h2>

            <p>
              The Company explicitly disclaims liability for any damages, losses, or injuries arising from the use of the landing page or reliance on the provided information. This disclaimer extends to encompass, but is not limited to, financial losses, property damage, or any other direct or indirect damages.
            </p>

            <h2>Links to Third-Party Websites</h2>

            <p>
              This landing page may contain links to external websites or resources. We do not endorse or assume responsibility for the content, privacy practices, or availability of those third-party sites.
            </p>

            <h2>Modifications to the Terms</h2>

            <p>
              The Company may update or modify these terms and conditions at any time without prior notice. We encourage you to review these terms periodically to stay informed about any changes.
            </p>

            <h2>Governing Law and Jurisdiction</h2>

            <p>
              Any legal disputes arising from your use of this landing page will be governed by the laws of the State of Maharashtra and will be resolved in the courts of Mumbai.
            </p>
          </div>
        </div>
      </main>

      <footer className='disclaimer_section'>
        <div className='container'>
          <p className='disclaimer_text'>
            <strong>Disclaimer:</strong> The information provided on this website is intended exclusively for informational purposes and should not be construed as an offer of services. This site is managed by a RERA authorized real estate agency namely DRE Homes Real Estate Broker is a company registered in Dubai, United Arab Emirates (License No. 599208), We are regulated by the Real Estate Regulatory Agency under office number 652.The pricing information presented on this website is subject to alteration without advance notification, and the assurance of property availability cannot be guaranteed. The images showcased on this website are for representational purposes only and may not accurately reflect the actual properties. We may share your data with Real Estate Regulatory Agency (RERA) registered Developers for further processing as necessary. Additionally, we may send updates and information to the mobile number or email address registered with us. All rights reserved. The content, design, and information on this website are protected by copyright and other intellectual property rights. Any unauthorized use or reproduction of the content may violate applicable laws. For accurate and up-to-date information regarding services, pricing, availability, and any other details, it is recommended to contact us directly through the provided contact information on this website. Thank you for visiting our website.
          </p>
          <div className='footer_links'>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-and-conditions">Terms and Conditions</Link>
          </div>
        </div>
      </footer>
    </>
  );
}

