"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserShield,
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Privacy() {
  return (
    <main>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80')",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-accent">
              Privacy Policy
            </h1>
            <p className="py-6">
              This policy outlines how LXT GROUP LLC stores and uses user data
              that is collected in the course of them visiting your website in
              accordance with General Data Protection Regulation (GDPR) and
              California Consumer Privacy Act (CCPA)
            </p>
          </div>
        </div>
      </div>

      <section className="relative block py-24 lg:pt-0">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
            <div className="w-full lg:w-10/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mt-8 mb-6 shadow-lg rounded-lg bg-base-100">
                <div className="flex-auto p-5 lg:p-10">
                  <h2 className="text-2xl font-semibold text-primary">
                    Last updated Jan 01, {new Date().getFullYear()}
                  </h2>
                  <p className="my-4 text-lg font-bold text-primary-content">
                    The collection, usage, disclosure and process of your
                    personal information in connection with our services.
                  </p>
                  <div
                    tabIndex={0}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      1. WHAT INFORMATION DO WE COLLECT?
                    </div>
                    <div className="collapse-content">
                      <h3 className="text-2xl font-semibold text-primary-content">
                        Personal information you disclose to us
                      </h3>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In Short: We collect personal information that you
                        provide to us.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We collect personal information that you voluntarily
                        provide to us when you express an interest in obtaining
                        information about us or our products and Services, when
                        you participate in activities on the Website or
                        otherwise when you contact us.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        The personal information that we collect depends on the
                        context of your interactions with us and the Website,
                        the choices you make and the products and features you
                        use.
                        <br />
                        The personal information we collect may include the
                        following:
                      </p>
                      <h3 className="text-2xl font-semibold text-primary-content">
                        Personal Information Provided by You.
                      </h3>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We collect names; phone numbers; email addresses; job
                        titles; contact preferences; and other similar
                        information.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        All personal information that you provide to us must be
                        true, complete and accurate, and you must notify us of
                        any changes to such personal information.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={1}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      2. HOW DO WE USE YOUR INFORMATION?
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In Short: We process your information for purposes based
                        on legitimate business interests, the fulfillment of our
                        contract with you, compliance with our legal
                        obligations, and/or your consent.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We use personal information collected via our Website
                        for a variety of business purposes described below. We
                        process your personal information for these purposes in
                        reliance on our legitimate business interests, in order
                        to enter into or perform a contract with you, with your
                        consent, and/or for compliance with our legal
                        obligations. We indicate the specific processing grounds
                        we rely on next to each purpose listed below.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We use the information we collect or receive:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            Fulfill and manage your orders. We may use your
                            information to fulfill and manage your orders,
                            payments, returns, and exchanges made through the
                            Website.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            Administer prize draws and competitions. We may use
                            your information to administer prize draws and
                            competitions when you elect to participate in our
                            competitions.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            To deliver and facilitate delivery of services to
                            the user. We may use your information to provide you
                            with the requested service.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            To respond to user inquiries/offer support to users.
                            We may use your information to respond to your
                            inquiries and solve any potential issues you might
                            have with the use of our Services.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            To send you marketing and promotional
                            communications. We and/or our third-party marketing
                            partners may use the personal information you send
                            to us for our marketing purposes, if this is in
                            accordance with your marketing preferences. <br />
                            For example, when expressing an interest in
                            obtaining information about us or our Website,
                            subscribing to marketing or otherwise contacting us,
                            we will collect personal information from you. You
                            can opt-out of our marketing emails at any time
                            <br />
                            (see the “WHAT ARE YOUR PRIVACY RIGHTS?” below).
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            Deliver targeted advertising to you. We may use your
                            information to develop and display personalized
                            content and advertising (and work with third parties
                            who do so) tailored to your interests and/or
                            location and to measure its effectiveness.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    tabIndex={2}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In Short: We only share information with your consent,
                        to comply with laws, to provide you with services, to
                        protect your rights, or to fulfill business obligations.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We may process or share your data that we hold based on
                        the following legal basis:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            Consent: We may process your data if you have given
                            us specific consent to use your personal information
                            for a specific purpose.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            Legitimate Interests: We may process your data when
                            it is reasonably necessary to achieve our legitimate
                            business interests.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            Performance of a Contract: Where we have entered
                            into a contract with you, we may process your
                            personal information to fulfill the terms of our
                            contract.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            Legal Obligations: We may disclose your information
                            where we are legally required to do so in order to
                            comply with applicable law, governmental requests, a
                            judicial proceeding, court order, or legal process,
                            such as in response to a court order or a subpoena
                            (including in response to public authorities to meet
                            national security or law enforcement requirements).
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            Vital Interests: We may disclose your information
                            where we believe it is necessary to investigate,
                            prevent, or take action regarding potential
                            violations of our policies, suspected fraud,
                            situations involving potential threats to the safety
                            of any person and illegal activities, or as evidence
                            in litigation in which we are involved.
                          </span>
                        </li>
                      </ul>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        More specifically, we may need to process your data or
                        share your personal information in the following
                        situations:
                      </p>
                      <ul className="flex flex-col lg:flex-row list-none mr-auto">
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            Business Transfers. We may share or transfer your
                            information in connection with, or during
                            negotiations of, any merger, sale of company assets,
                            financing, or acquisition of all or a portion of our
                            business to another company.
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div
                    tabIndex={3}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In Short: We may use cookies and other tracking
                        technologies to collect and store your information.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We may use cookies and similar tracking technologies
                        (like web beacons and pixels) to access or store
                        information. Specific information about how we use such
                        technologies and how you can refuse certain cookies is
                        set out in our Cookie Notice.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={4}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      5. HOW LONG DO WE KEEP YOUR INFORMATION?
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In Short: We keep your information for as long as
                        necessary to fulfill the purposes outlined in this
                        privacy notice unless otherwise required by law.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We will only keep your personal information for as long
                        as it is necessary for the purposes set out in this
                        privacy notice, unless a longer retention period is
                        required or permitted by law (such as tax, accounting or
                        other legal requirements). No purpose in this notice
                        will require us keeping your personal information for
                        longer than 1 year.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        When we have no ongoing legitimate business need to
                        process your personal information, we will either delete
                        or anonymize such information, or, if this is not
                        possible (for example, because your personal information
                        has been stored in backup archives), then we will
                        securely store your personal information and isolate it
                        from any further processing until deletion is possible.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={5}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      6. HOW DO WE KEEP YOUR INFORMATION SAFE?
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In Short: We aim to protect your personal information
                        through a system of organizational and technical
                        security measures.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We have implemented appropriate technical and
                        organizational security measures designed to protect the
                        security of any personal information we process.
                        However, despite our safeguards and efforts to secure
                        your information, no electronic transmission over the
                        Internet or information storage technology can be
                        guaranteed to be 100% secure, so we cannot promise or
                        guarantee that hackers, cybercriminals, or other
                        unauthorized third parties will not be able to defeat
                        our security, and improperly collect, access, steal, or
                        modify your information. Although we will do our best to
                        protect your personal information, transmission of
                        personal information to and from our Website is at your
                        own risk. You should only access the Website within a
                        secure environment.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={6}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      7. DO WE COLLECT INFORMATION FROM MINORS?
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In Short: We do not knowingly collect data from or
                        market to children under 18 years of age.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We do not knowingly solicit data from or market to
                        children under 18 years of age. By using the Website,
                        you represent that you are at least 18 or that you are
                        the parent or guardian of such a minor and consent to
                        such minor dependent’s use of the Website. If we learn
                        that personal information from users less than 18 years
                        of age has been collected, we will deactivate the
                        account and take reasonable measures to promptly delete
                        such data from our records. If you become aware of any
                        data we may have collected from children under age 18,
                        please contact us at legal@lxtgroup.nft.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={7}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      8. WHAT ARE YOUR PRIVACY RIGHTS?
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In Short: You may review, change, or terminate your
                        account at any time.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        If you are a resident in the EEA or UK and you believe
                        we are unlawfully processing your personal information,
                        you also have the right to complain to your local data
                        protection supervisory authority. You can find their
                        contact details here:
                        <span>
                          <Link href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm">
                            EU Commmission
                          </Link>
                        </span>
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        If you are a resident in Switzerland, the contact
                        details for the data protection authorities are
                        available here:
                        <span>
                          <Link href="https://www.edoeb.admin.ch/edoeb/en/home.html">
                            Federal Data Protection and Information Commissioner
                            (FDPIC)
                          </Link>
                        </span>
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        Cookies and similar technologies: Most Web browsers are
                        set to accept cookies by default. If you prefer, you can
                        usually choose to set your browser to remove cookies and
                        to reject cookies. If you choose to remove cookies or
                        reject cookies, this could affect certain features or
                        services of our Website. To opt-out of interest-based
                        advertising by advertisers on our Website visit
                        <span>
                          <Link href="http://www.aboutads.info/choices/">
                            DAA WEBCHOICES BROWSER CHECK
                          </Link>
                        </span>
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={8}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      9. CONTROLS FOR DO-NOT-TRACK FEATURES
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        Most web browsers and some mobile operating systems and
                        mobile applications include a Do-Not-Track (“DNT”)
                        feature or setting you can activate to signal your
                        privacy preference not to have data about your online
                        browsing activities monitored and collected. At this
                        stage no uniform technology standard for recognizing and
                        implementing DNT signals has been finalized. As such, we
                        do not currently respond to DNT browser signals or any
                        other mechanism that automatically communicates your
                        choice not to be tracked online. If a standard for
                        online tracking is adopted that we must follow in the
                        future, we will inform you about that practice in a
                        revised version of this privacy notice.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={9}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium whitespace-pre-wrap">
                      10. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In Short: Yes, if you are a resident of California, you
                        are granted specific rights regarding access to your
                        personal information.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        California Civil Code Section 1798.83, also known as the
                        “Shine The Light” law, permits our users who are
                        California residents to request and obtain from us, once
                        a year and free of charge, information about categories
                        of personal information (if any) we disclosed to third
                        parties for direct marketing purposes and the names and
                        addresses of all third parties with which we shared
                        personal information in the immediately preceding
                        calendar year. If you are a California resident and
                        would like to make such a request, please submit your
                        request in writing to us using the contact information
                        provided below.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        If you are under 18 years of age, reside in California,
                        and have a registered account with the Website, you have
                        the right to request removal of unwanted data that you
                        publicly post on the Website. To request removal of such
                        data, please contact us using the contact information
                        provided below, and include the email address associated
                        with your account and a statement that you reside in
                        California. We will make sure the data is not publicly
                        displayed on the Website, but please be aware that the
                        data may not be completely or comprehensively removed
                        from all our systems (e.g. backups, etc.).
                      </p>
                      <h4 className="text-2xl font-semibold text-primary-content">
                        CCPA Privacy Notice
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        The California Code of Regulations defines a “resident”
                        as:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            (1) every individual who is in the State of
                            California for other than a temporary or transitory
                            purpose and
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            (2) every individual who is domiciled in the State
                            of California who is outside the State of California
                            for a temporary or transitory purpose
                          </span>
                        </li>
                      </ul>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        All other individuals are defined as “non-residents.”
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        If this definition of “resident” applies to you, we must
                        adhere to certain rights and obligations regarding your
                        personal information.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        What categories of personal information do we collect?
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We have collected the following categories of personal
                        information in the past twelve (12) months:
                      </p>
                      <div className="block w-full overflow-x-auto">
                        {/* Projects table */}
                        <table className="items-center w-full bg-transparent border-collapse">
                          <thead>
                            <tr>
                              <th className="px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left bg-base-100 text-primary-200 border-primary0">
                                Category of Personal Information
                              </th>
                              <th className="px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left bg-base-100 text-primary-200 border-primary0">
                                Examples
                              </th>
                              <th className="px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left bg-base-100 text-primary-200 border-primary0">
                                Collected
                              </th>
                              <th className="px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left bg-base-100 text-primary-200 border-primary0">
                                Disclosed for Business Purposes
                              </th>
                              <th className="px-6 align-text-top border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-normal font-semibold text-left bg-base-100 text-primary-200 border-primary0">
                                Sold
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {/*Identfiers*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span className="ml-0 font-bold text-primary-600">
                                  Identifiers
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Identifiers, including relating to data used to
                                identify you, such as full name, email, address,
                                birthdate (month and day), and phone number.
                                Contact details, such as real name, alias,
                                postal address, telephone or mobile contact
                                number, unique personal identifier, online
                                identifier, Internet Protocol address, email
                                address and account name
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleCheck}
                                  size="sm"
                                  className="text-emerald-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <div className="flex">
                                  <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    size="sm"
                                    className="text-red-500"
                                  />
                                </div>
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <div className="flex items-center">
                                  <FontAwesomeIcon
                                    icon={faCircleXmark}
                                    size="sm"
                                    className="text-red-500"
                                  />
                                </div>
                              </td>
                            </tr>
                            {/*Personal categories*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span className="ml-0 font-bold text-primary-600">
                                  Personal information categories listed in the
                                  California Customer Records statute
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Name, contact information, education,
                                employment, employment history and financial
                                information
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleCheck}
                                  size="sm"
                                  className="text-emerald-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                            </tr>
                            {/*Protected categories*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span className="ml-0 font-bold text-primary-600">
                                  Protected classification characteristics under
                                  California or federal law
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Gender and date of birth
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                            </tr>
                            {/*Commercial information*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span className="ml-0 font-bold text-primary-600">
                                  Commercial information
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Transaction information, purchase history,
                                account history and products or services
                                purchased, obtained, or considered, financial
                                details and payment information
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                            </tr>
                            {/*Biometric information*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span className="ml-0 font-bold text-primary-600">
                                  Biometric information
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Fingerprints and voiceprints
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                            </tr>
                            {/*Internet activity*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span className="ml-0 font-bold text-primary-600">
                                  Internet or other similiar activity
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Browsing history, search history, online
                                behavior, interest data, and interactions with
                                our and other websites, applications, systems
                                and advertisements. device information, logs, IP
                                address, and analytics data
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                            </tr>
                            {/*Geolocation data*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span className="ml-0 font-bold text-primary-600">
                                  Geolocation data
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Device location
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                            </tr>
                            {/*Audio, electronic, visual, thermal, olfactory, or
                            similar information*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span className="ml-0 font-bold text-primary-600">
                                  Audio, electronic, visual, thermal, olfactory,
                                  or similar information
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Images and audio, video or call recordings
                                created in connection with our business
                                activities, photo or avatar, videos, and
                                recordings of phone calls between you and us,
                                where permitted by law.
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                            </tr>
                            {/* Professional or employment-related information*/}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span className="ml-0 font-bold text-primary-600">
                                  Professional or employment-related information
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Business contact details in order to provide you
                                our services at a business level, job title as
                                well as work history and professional
                                qualifications if you apply for a job with us.
                                Including communication preferences, customer
                                service and communications history, personal
                                information you permit us to see when
                                interacting with us through social media, and
                                personal information you provide us in relation
                                to a question, request, inquiry, survey, contest
                                or promotion.
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                            </tr>
                            {/* Inferences drawn from other personal information */}
                            <tr>
                              <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4 text-left flex items-center">
                                <span className="ml-0 font-bold text-primary-600">
                                  Inferences drawn from other personal
                                  information
                                </span>
                              </th>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-normal p-4">
                                Inferences drawn from any of the collected
                                personal information listed above to create a
                                profile or summary about, for example, an
                                individual’s preferences and characteristics,
                                including our predictions about your interests
                                and preferences and related Service Profile
                                Information.
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                              <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                                <FontAwesomeIcon
                                  icon={faCircleXmark}
                                  size="sm"
                                  className="text-red-500"
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We may also collect other personal information outside
                        of these categories instances where you interact with us
                        in-person, online, or by phone or mail in the context
                        of:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - Receiving help through our customer support
                            channels;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - Participation in customer surveys or contests; and
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - Facilitation in the delivery of our Services and
                            to respond to your inquiries.
                          </span>
                        </li>
                      </ul>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        How do we use and share your personal information?
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        More information about our data collection and sharing
                        practices can be found in this privacy notice.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        You may contact us by email at legal@lxtgroup.nft, by
                        visiting https://lxtgroup.nft/contact, or by referring
                        to the contact details at the bottom of this document.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        If you are using an authorized agent to exercise your
                        right to opt-out we may deny a request if the authorized
                        agent does not submit proof that they have been validly
                        authorized to act on your behalf.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        Will your information be shared with anyone else?
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We may disclose your personal information with our
                        service providers pursuant to a written contract between
                        us and each service provider. Each service provider is a
                        for-profit entity that processes the information on our
                        behalf.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We may use your personal information for our own
                        business purposes, such as for undertaking internal
                        research for technological development and
                        demonstration. This is not considered to be “selling” of
                        your personal data.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        LXT GROUP has not disclosed or sold any personal
                        information to third parties for a business or
                        commercial purpose in the preceding 12 months. Lexington
                        Tech will not sell personal information in the future
                        belonging to website visitors, users and other
                        consumers.
                      </p>
                      <h4 className="text-2xl font-semibold text-primary-content">
                        Your rights with respect to your personal data
                      </h4>
                      <h4 className="text-2xl font-semibold text-primary-content">
                        Right to request deletion of the data – Request to
                        delete
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        You can ask for the deletion of your personal
                        information. If you ask us to delete your personal
                        information, we will respect your request and delete
                        your personal information, subject to certain exceptions
                        provided by law, such as (but not limited to) the
                        exercise by another consumer of his or her right to free
                        speech, our compliance requirements resulting from a
                        legal obligation or any processing that may be required
                        to protect against illegal activities.
                      </p>
                      <h4 className="text-2xl font-semibold text-primary-content">
                        Right to be informed – Request to know
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        Depending on the circumstances, you have a right to
                        know:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - whether we collect and use your personal
                            information;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - the categories of personal information that we
                            collect;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - the purposes for which the collected personal
                            information is used;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - whether we sell your personal information to third
                            parties;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - the categories of personal information that we
                            sold or disclosed for a business purpose;
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - the categories of third parties to whom the
                            personal information was sold or disclosed for a
                            business purpose; and
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - the business or commercial purpose for collecting
                            or selling personal information.
                          </span>
                        </li>
                      </ul>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In accordance with applicable law, we are not obligated
                        to provide or delete consumer information that is
                        de-identified in response to a consumer request or to
                        re-identify individual data to verify a consumer
                        request.
                      </p>
                      <h4 className="text-2xl font-semibold text-primary-content">
                        Right to Non-Discrimination for the Exercise of a
                        Consumer’s Privacy Rights
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We will not discriminate against you if you exercise
                        your privacy rights.
                      </p>
                      <h4 className="text-2xl font-semibold text-primary-content">
                        Verification process
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        Upon receiving your request, we will need to verify your
                        identity to determine you are the same person about whom
                        we have the information in our system. These
                        verification efforts require us to ask you to provide
                        information so that we can match it with information you
                        have previously provided us. For instance, depending on
                        the type of request you submit, we may ask you to
                        provide certain information so that we can match the
                        information you provide with the information we already
                        have on file, or we may contact you through a
                        communication method (e.g. phone or email) that you have
                        previously provided to us. We may also use other
                        verification methods as the circumstances dictate.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We will only use personal information provided in your
                        request to verify your identity or authority to make the
                        request. To the extent possible, we will avoid
                        requesting additional information from you for the
                        purposes of verification. If, however, we cannot verify
                        your identity from the information already maintained by
                        us, we may request that you provide additional
                        information for the purposes of verifying your identity,
                        and for security or fraud-prevention purposes. We will
                        delete such additionally provided information as soon as
                        we finish verifying you.
                      </p>
                      <h4 className="text-2xl font-semibold text-primary-content">
                        Other privacy rights
                      </h4>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - you may object to the processing of your personal
                            data.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - you may request correction of your personal data
                            if it is incorrect or no longer relevant, or ask to
                            restrict the processing of the data.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - you can designate an authorized agent to make a
                            request under the CCPA on your behalf. We may deny a
                            request from an authorized agent that does not
                            submit proof that they have been validly authorized
                            to act on your behalf in accordance with the CCPA.
                          </span>
                        </li>
                        <li className="flex items-center">
                          <span className="inline-block ml-2 text-primary-content">
                            - you may request to opt-out from future selling of
                            your personal information to third parties. Upon
                            receiving a request to opt-out, we will act upon the
                            request as soon as feasibly possible, but no later
                            than 15 days from the date of the request
                            submission.
                          </span>
                        </li>
                      </ul>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        To exercise these rights, you can contact us by email at
                        legal@lxtgroup.nft, by visiting
                        https://lxtgroup.nft/contact, or by referring to the
                        contact details at the bottom of this document. If you
                        have a complaint about how we handle your data, we would
                        like to hear from you.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={10}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      11. DO WE MAKE UPDATES TO THIS NOTICE?
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        In Short: Yes, we will update this notice as necessary
                        to stay compliant with relevant laws.
                      </p>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        We may update this privacy notice from time to time. The
                        updated version will be indicated by an updated
                        “Revised” date and the updated version will be effective
                        as soon as it is accessible. If we make material changes
                        to this privacy notice, we may notify you either by
                        prominently posting a notice of such changes or by
                        directly sending you a notification. We encourage you to
                        review this privacy notice frequently to be informed of
                        how we are protecting your information.
                      </p>
                    </div>
                  </div>
                  <div
                    tabIndex={11}
                    className="collapse collapse-arrow border border-base-300 bg-base-200"
                  >
                    <div className="collapse-title text-xl font-medium">
                      12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                    </div>
                    <div className="collapse-content">
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        If you have questions or comments about this notice, you
                        may email us at legal@lxtgroup.nft or by post to:
                      </p>
                      <ul className="list-none mr-auto">
                        <li className="flex items-center">
                          <img
                            src="/logo_lxtgroup_circle.svg"
                            alt="LXT GROUP LLC"
                            height="16"
                            width="16"
                          />
                          <span className="inline-block ml-2 text-primary-content">
                            LXT GROUP LLC
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-map-marker-alt"></i>
                          <span className="inline-block ml-2 text-primary-content">
                            16192 Coastal Highway
                            <br />
                            Lewes, DE 19958
                            <br />
                            United States
                          </span>
                        </li>
                        <li className="flex items-center">
                          <i className="fas fa-at"></i>
                          <span className="inline-block ml-2 text-primary-content">
                            legal@lxtgroup.nft
                          </span>
                        </li>
                      </ul>
                      <br />
                      <h4 className="text-2xl font-semibold text-primary-content">
                        13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE
                        COLLECT FROM YOU?
                      </h4>
                      <p className="leading-relaxed mt-1 mb-4 text-primary-content">
                        Based on the applicable laws of your country, you may
                        have the right to request access to the personal
                        information we collect from you, change that
                        information, or delete it in some circumstances. To
                        request to review, update, or delete your personal
                        information, please submit a request form by clicking
                        here.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
