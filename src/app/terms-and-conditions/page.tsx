"use client";
import React, { useEffect, useState } from "react";
import Navbar from "../components/LandingPage/Header/Navbar";
import Footer from "../common/Footer/Footer";

const page = () => {
  const [width, setWidth] = useState(0);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [width]);

  const BulletText = [
    "On these Websites.",
    "In e-mail, text and any other electronic messages between you and these WebsitesJ",
    "Through mobile and desktop applications you may download from these Websites, which provide dedicated",
    "Non-browser-based interaction between you and this WebsiteJ.",
    "When you interact with our advertising and applications on third-party websites and services.",
    "If those applications or advertising include links to this policy.",
  ];

  const BulletText2 = [
    "Us offline or through any other means, including any other websites operated by any third party Or",
    " Any third party, including through any application or content (including advertising) that may link to these Websites.",
  ];

  const sectionData = [
    {
      heading: "ACCESSING THE WEBSITE AND ACCOUNT SECURITY",
      section: [
        {
          sectionTitle:
            "We reserve the right to withdraw or amend the Website, and any service or material we provide on the Website, in our sole discretion without notice. We will not be liable if for any reason all or any part of the Website is unavailable at any time or for any period. From time to time, we may restrict access to some parts of the Website, or the entire Website, to any user, including registered users.",
        },
        {
          sectionTitle: "You are responsible for:",
          subsection: [
            {
              title:
                "Making all arrangements necessary for you to have access to the Website.",
            },
            {
              title:
                "Ensuring that all persons who access the Website through your internet connection are aware of these Terms of Use and comply with them.",
            },
          ],
        },
        {
          sectionTitle:
            "To access the Website or some of the resources it offers including, without limitation, payment using credit cards or other forms of electronic payment, you may be asked to provide certain registration details or other information. It is a condition of your use of the Website that all the information, including, without limitation, credit card information or information pertaining to other forms of electronic payments, you provide on the Website is correct, current and complete. You agree that all information you provide to register with this Website or otherwise, including but not limited to through the use of any interactive features on the Website, is governed by our Privacy Policy, and you consent to all actions we take with respect to your information consistent with our Privacy Policy. If you choose, or are provided with, a user name, password or any other piece of information as part of our security procedures, you must treat such information as confidential, and you must not disclose it to any other person or entity. You also acknowledge that your account is personal to you and agree not to provide any other person with access to this Website or portions of it using your user name, password or other security information. You agree to notify us immediately of any unauthorized access to or use of your user name or password or any other breach of security. You also agree to ensure that you exit from your account at the end of each session. You should use particular caution when accessing your account from a public or shared computer so that others are not able to view or record your password or other personal information. You may only have one account with this Website. If you received more than one username, password or activation code, please notify us immediately. Your use of more than one account will represent a breach of these Terms of Use. We have the right to disable any user name, password or other identifier, whether chosen by you or provided by us, at any time in our sole discretion for any or no reason, including if, in our opinion, you have violated any provision of these Terms of Use.",
        },
      ],
    },
    {
      heading: "INTELLECTUAL PROPERTY RIGHTS",
      section: [
        {
          sectionTitle:
            "The Website and its entire contents, features and functionality (including but not limited to all information, software, text, displays, images, video and audio, and the design, selection and arrangement thereof), are owned by the Company, its licensors or other providers of such material and are protected by India and international copyright, trademark, patent, trade secret and other intellectual property or proprietary rights laws.",
        },
        {
          sectionTitle:
            "These Terms of Use permit you to use the Website for your personal, non-commercial use only. You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store or transmit any of the material on our Website, except as follows:",
          subsection: [
            {
              title:
                "Your computer may temporarily store copies of such materials in RAM incidental to your accessing and viewing those materials.",
            },
            {
              title:
                "You may store files that are automatically cached by your Web browser for display enhancement purposes.",
            },

            {
              title:
                "You may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication or distribution.",
            },
            {
              title:
                "If we provide desktop, mobile or other applications for download, you may download a single copy to your computer or mobile device solely for your own personal, non-commercial use, provided you agree to be bound by our end user license agreement for such applications.",
            },
            {
              title:
                "If we provide social media features with certain content, you may take such actions as are enabled by such features.",
            },
          ],
        },
        {
          sectionTitle: "You must not:",
          subsection: [
            {
              title: "Modify copies of any materials from this site.",
            },
            {
              title:
                "Republish any part of the Website on another website, in any other medium (print, electronic or otherwise) or as part of any commercial service.",
            },

            {
              title:
                "Use any illustrations, photographs, video or audio sequences or any graphics separately from the accompanying text.",
            },

            {
              title:
                "Delete or alter any copyright, trademark or other proprietary rights notices from copies of materials from this site.",
            },
          ],
        },
        {
          sectionTitle:
            "No right, title or interest in or to the Website or any content on the site is transferred to you, and all rights not expressly granted are reserved by the Company. Any use of the Website not expressly permitted by these Terms of Use is a breach of these Terms of Use and may violate copyright, trademark and other laws",
        },
      ],
    },
    {
      heading: "TRADEMARKS",
      section: [
        {
          sectionTitle:
            "Duville Estates Pvt. Ltd., its subsidiaries, affiliates, contractors and/or participating corporations are the owners of the trade and service marks appearing on this website and all rights are reserved in respect of such trade and service marks.",
        },
      ],
    },
    {
      heading: "PROHIBITED USES",
      section: [
        {
          sectionTitle:
            "You may use the Website only for lawful purposes and in accordance with these Terms of Use. You agree not to use the Website:",

          subsection: [
            {
              title:
                "In any way that violates any applicable federal, local or international law or regulation, including without limitation, any form of misuse of credit cards or other forms of electronic payments.",
            },
            {
              title:
                '"To transmit, or procure the sending of, any advertising or promotional material, including any \\"junk mail\\", \\"chain letter\\" or \\"spam\\" or any other similar solicitation."',
            },
            {
              title:
                "To impersonate or attempt to impersonate the Company, a Company employee, another user or any other person or entity (including, without limitation, by using e-mail addresses or screen names associated with any of the foregoing).",
            },
            {
              title:
                "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Website, or which, as determined by us, may harm the Company or users of the Website or expose them to liability.",
            },
          ],
        },
        {
          sectionTitle:
            "Additionally, you agree not to:The information we collect automatically is statistical data. It helps us to improve our Websites and to deliver a better and more personalized service by enabling us to:",

          subsection: [
            {
              title:
                "Use the Website in any manner that could disable, overburden, damage, or impair the Website or interfere with any other party's use of the Website, including their ability to engage in real time activities through the Website.",
            },
            {
              title:
                "Use any robot, spider or other automatic device, process or means to access the Website for any purpose, including monitoring or copying any of the material on the Website. ",
            },
            {
              title:
                " Use any robot, spider or other automatic device, process or means to access the Website for any purpose, including monitoring or copying any of the material on the Website.",
            },
            {
              title:
                " Use any device, software or routine that interferes with the proper working of the Website.",
            },
            {
              title:
                " Introduce any viruses, trojan horses, worms, logic bombs or other material which is malicious or technologically harmful.",
            },
            {
              title:
                " Attempt to gain unauthorized access to, interfere with, damage or disrupt any parts of the Website, the server on which the Website is stored, or any server, computer or database connected to the Website.",
            },
            {
              title:
                "Attack the Website via a denial-of-service attack or a distributed denial-of-service attack. ",
            },
            {
              title:
                " Otherwise attempt to interfere with the proper working of the Website.",
            },
          ],
        },
      ],
    },
    {
      heading: "RELIANCE ON INFORMATION POSTED",
      section: [
        {
          sectionTitle:
            "The information presented on or through the Website is made available solely for general information purposes. We do not warrant the accuracy, completeness or usefulness of this information. Any reliance you place on such information is strictly at your own risk. We disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents.",
        },
        {
          sectionTitle:
            "Duville Estates Pvt. Ltd. reserves the absolute right, without any liability whatsoever, to amend vary or extend at any time the completion date of its projects inter alia the estimated/scheduled completion date(s) mentioned on or through the Website. ",
        },
      ],
    },
    {
      heading: "LINKING TO THE WEBSITE AND SOCIAL MEDIA FEATURES",
      section: [
        {
          sectionTitle:
            "You may link to any page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part.",
        },
        {
          sectionTitle:
            "This Website may provide certain social media features that enable you to:",

          subsection: [
            {
              title:
                "Link from your own or certain third-party websites to certain content on this Website.",
            },
            {
              title:
                "Send e-mails or other communications with certain content, or links to certain content, on this Website.",
            },
            {
              title:
                "Cause limited portions of content on this Website to be displayed or appear to be displayed on your own or certain third-party websites.",
            },
          ],
        },
        {
          sectionTitle:
            "You may use these features solely as they are provided by us, solely with respect to the content they are displayed with and otherwise in accordance with any additional terms and conditions we provide with respect to such features. Subject to the foregoing, you must not:",

          subsection: [
            {
              title:
                "Establish a link from any website that is not owned by you.",
            },
            {
              title:
                "Otherwise take any action with respect to the materials on this Website that is inconsistent with any other provision of these Terms of Use. ",
            },
          ],
        },
        {
          sectionTitle:
            "You agree to cooperate with us in causing any unauthorized framing or linking immediately to cease. We reserve the right to withdraw linking permission without notice.",
        },
        {
          sectionTitle:
            "We may disable all or any social media features and any links at any time without notice in our discretion.",
        },
      ],
    },
    {
      heading: "LINKS FROM THE WEBSITE",
      section: [
        {
          sectionTitle:
            "If the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including banner advertisements and sponsored links. We have no control over the contents of those sites or resources, and accept no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to this Website, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.",
        },
      ],
    },
    {
      heading: "DISCLAIMER OF WARRANTIES",
      section: [
        {
          sectionTitle:
            "You understand that we cannot and do not guarantee or warrant that the Website will be free of viruses or other destructive code. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for anti-virus protection and accuracy of data input and output, and for maintaining a means external to our Website for any reconstruction of any lost data.",
        },
      ],
    },
    {
      heading: "LIMITATION OF LIABILITY",
      section: [
        {
          sectionTitle:
            "Under no circumstance can Duville Estates Pvt. Ltd. and Riverdale be liable for any feature, function (programming errors, other errors, linking, rectification of the errors, updation, omissions), and safety (including loss/ damage of any personal data/information, or any loss whether foreseen, foreseeable, known or otherwise) mechanism built in the website. Duville Estates Pvt. Ltd and Riverdale or any of its affiliates are not liable for any consequential, incidental damages whether direct or indirect arising out of the use of the website. Contents of the website have not been investigated, verified and/or not continuously monitored. Company reserves all rights to disclose information as it deems necessary to satisfy any applicable law, or refuse to disclose, or edit, or to remove any content or information or materials, in whole or in part, at company´s sole discretion.",
        },
      ],
    },
    {
      heading: "INDEMNIFICATION",
      section: [
        {
          sectionTitle:
            "You agree to defend, indemnify and hold harmless the Company, its affiliates, licensors and service providers, and its and their respective officers, directors, employees, contractors, agents, licensors, suppliers, successors and assigns from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses or fees (including reasonable attorneys' fees) arising out of or relating to your violation of these Terms of Use or your use of the Website and,  any use of the Website's content, services and products other than as expressly authorized in these Terms of Use or your use of any information obtained from the Website.",
        },
      ],
    },
    {
      heading: "GOVERNING LAWS & JURISDICTION",
      section: [
        {
          sectionTitle:
            "Your use of the company website, its content, services and/or any information/material posted or available on website shall be governed by the law of the India and you agree to submit to the exclusive jurisdiction of the courts of the India.",
        },
      ],
    },
    {
      heading: "YOUR COMMENTS AND CONCERNS",
      section: [
        {
          sectionTitle: "This website is operated and owned by the Company.",
        },
        {
          sectionTitle:
            "In respect of requests for technical support and other communications relating to the Website, you can contact us by using our website contact form, or by emailing us at customerinfo@emaar.ae.",
        },
        {
          sectionTitle:
            "For feedback or suggestions, please contact us through the We Care form on the Website.",
        },
        {
          sectionTitle:
            "You understand and accept that by using this Website in updating, changing or altering your personal information, address (es) or contact details, you are accepting that the Company or any of its affiliates may, at their discretion, use such information as an alternative information to send legal notices under these Terms of Use or the Property Agreement. It is your obligation to immediately inform the Company of any changes to such information.",
        },
      ],
    },
    {
      heading: "DISCLAIMER",
      section: [
        {
          sectionTitle:
            "No representation or warranty of any kind whatsoever express or implied for the accuracy, correctness, completeness, fitness to the purpose or non-infringement of any content or any other information or material posted or available on the website. Any tangible or intangible harm/damage or any consequential or incidental damages thereof of any kind to the user, by accessing the website and/or any breach of the undertaking, is at User´s own risk.",
        },
      ],
    },
  ];

  return (
    <div className="overflow-hidden">
      <div
        style={{
          backgroundImage: `${
            width >= 640
              ? `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/privacy-policy/banner.jpg?updatedAt=1707284756639)`
              : `url(https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/privacy-policy/banner.jpg?updatedAt=1707284756639)`
          }`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Navbar />

        <div className="flex max-w-4xl h-full mt-52 md:mt-80">
          <div className="font-lato md:leading-[65px] capitalize text-white text-[50px] md:text-[80px] font-bold md:mx-auto mx-5 md:my-auto  md:mt-[170px] mt-[200px]">
            Terms & Conditions
          </div>
        </div>
      </div>

      {/* heading */}
      <div className="w-11/12 md:max-w-7xl mx-auto mt-10 md:mt-20 space-y-5">
        <h2 className="text-[25px] md:text-section-heading text-slate-600 uppercase font-plus-jakarta-sans font-bold ">
          Terms & Conditions - Duville Estates Pvt.Ltd and Riverdale
        </h2>

        <p className="text-slate-700 font-medium leading-[30px]">
          Please read these Terms & Conditions carefully. These are the general
          Terms & Conditions governing your access and use of this website
          (“Site”).
        </p>
      </div>

      {/* section 1 */}
      <div className="w-11/12 md:max-w-7xl mx-auto mt-20 ">
        <div className="w-full md:w-[90%] space-y-5">
          <h2 className="text-[22px] text-slate-600  font-semibold  font-plus-jakarta-sans ">
            ACCEPTANCE OF THE TERMS OF USE
          </h2>

          <p className="text-slate-700 font-medium leading-[30px]">
            This website is owned and operated by Duville Estates Pvt. Ltd and
            Riverdale (which term includes all subsidiaries and projects of
            Duville Estates Pvt. Ltd; and Riverdale) (“Duville Estates Pvt.
            Ltd.” or “Riverdale” "Company", "we" or "us"). The following terms
            and conditions, the lease or sale and purchase agreement (“Property
            Agreement”) entered into with the Company or any of its affiliates
            pertaining to a commercial lease, unit or plot in a Duville Estates
            Pvt. Ltd or any project within the Riverdale project in respect of
            which this website is used together with any documents they
            expressly incorporate by reference (collectively, these "Terms of
            Use"), govern your access to and use of Duville Estates Pvt. Ltd and
            Riverdale (the "Website"), including any content, functionality and
            services offered on or through the Website whether as a guest or a
            registered user
          </p>
          <p className="text-slate-700 font-medium leading-[30px]">
            Please read the Terms of Use carefully before you start to use the
            Website. By using the Website or, where applicable, by clicking to
            accept or agree to the Terms of Use when this option is made
            available to you, you accept and agree to be bound and abide by
            these Terms of Use and our Privacy Policy, found at{" "}
            <a href="www.duville.com" className="text-red">
              www.duville.com
            </a>{" "}
            &nbsp; or &nbsp;
            <a href="www.riverdalepune.com" className="text-red font-medium">
              www.riverdalepune.com
            </a>
            , incorporated herein by reference. If you do not want to agree to
            these Terms of Use or the Privacy Policy, you must not access or use
            the Website.
          </p>
        </div>
      </div>

      {/* section 2 */}
      <div className=" w-11/12 md:max-w-7xl mx-auto mt-10 md:mt-20 ">
        <div className=" w-full md:w-[90%] space-y-5">
          <h2 className="text-[22px] text-slate-600  font-semibold  font-plus-jakarta-sans ">
            ACCEPTANCE OF THE TERMS OF USE
          </h2>

          <p className="text-slate-700 font-medium leading-[35px]">
            This website is owned and operated by Duville Estates Pvt. Ltd and
            Riverdale (which term includes all subsidiaries of Duville Estates
            Pvt. Ltd and Riverdale) (“Duville Estates Pvt. Ltd” "Riverdale”
            “Company", "we" or "us"). The following terms and conditions, the
            lease or sale and purchase agreement (“Property Agreement”) entered
            into with the Company or any of its affiliates pertaining to a
            commercial lease, unit or plot in an Duville Estates project or any
            of the individual projects at Riverdale registered under RERA in
            respect of which this website is used together with any documents
            they expressly incorporate by reference (collectively, these "Terms
            of Use"), govern your access to and use of{" "}
            <a href="www.duville.com" className="text-red">
              www.duville.com
            </a>{" "}
            &nbsp; or &nbsp;
            <a href="www.riverdalepune.com" className="text-red font-medium">
              www.riverdalepune.com
            </a>{" "}
            (the "Website"), including any content, functionality and services
            offered on or through the Website whether as a guest or a registered
            user
          </p>
          <p className="text-slate-700 font-medium leading-[35px]">
            Please read the Terms of Use carefully before you start to use the
            Website. By using the Website or, where applicable, by clicking to
            accept or agree to the Terms of Use when this option is made
            available to you, you accept and agree to be bound and abide by
            these Terms of Use and our Privacy Policy, found at{" "}
            <a href="www.duville.com" className="text-red">
              www.duville.com
            </a>{" "}
            &nbsp; or &nbsp;
            <a href="www.riverdalepune.com" className="text-red font-medium">
              www.riverdalepune.com
            </a>
            , incorporated herein by reference. If you do not want to agree to
            these Terms of Use or the Privacy Policy, you must not access or use
            the Website.
          </p>
        </div>
      </div>

      <div className="w-11/12 md:max-w-7xl mx-auto mt-20 space-y-10">
        {sectionData?.map((card, idx) => (
          <div key={idx} className="space-y-3 md:w-[70%]">
            <h2 className="text-[20px] md:text-[22px] text-slate-600  font-semibold  font-plus-jakarta-sans ">
              {card?.heading}
            </h2>

            <div className="space-y-4">
              {card?.section?.map((section, idx) => (
                <div key={idx} className="space-y-3">
                  <h2 className="font-medium  md:text-lg text-slate-600 md:ml-2 leading-[30px] md:leading-[35px] font-plus-jakarta-sans">
                    {section?.sectionTitle}{" "}
                  </h2>
                  <ul className="list-disc ml-7 space-y-2 ">
                    {section?.subsection?.map((item, index) => (
                      <li
                        key={index}
                        className="text-slate-600 font-medium space-y-2 leading-link-text"
                      >
                        <p className={` font-plus-jakarta-sans`}>
                          {item.title}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default page;
