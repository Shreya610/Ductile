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
      heading: "DEFINITIONS",
      section: [
        {
          sectionTitle:
            "Duville Estates Pvt. Ltd and Riverdale means the company, corporation, firm, projects, individual or association of persons currently administering, providing content for, maintaining and otherwise managing the Site and every employee of Duville Estates Pvt. Ltd and Riverdale and its advertising agent or agents for the time being and their employees, and every consultant, advisor and associate of Duville Estates Pvt. Ltd and Riverdale and their respective employees.",
        },
        {
          sectionTitle:
            "“Contract”, “Agreement” and “Terms of Service” refer to the terms and conditions herein set forth.",
        },
        {
          sectionTitle:
            "“Employee” means every person working in any capacity for Duville Estates Pvt. Ltd and Riverdale as defined herein and includes every member of his family and every person residing in his household as a member of his family. “Hosting”, with all its grammatical variations, means and includes the provision of Services by Duville Estates Pvt. Ltd and Riverdale at the Site and subject always to the provisions of the Contract.",
        },
        {
          sectionTitle:
            "“Id” means the unique identification name or number assigned to every Member.",
        },
        {
          sectionTitle:
            "“Member” means and includes every person who, having satisfied the Eligibility Criteria set forth herein, has successfully completed the on-line registration process at the Site and has been assigned a unique Id by Duville Estates Pvt. Ltd and Riverdale and is not in default and has not committed breach of any of the terms of this Agreement.",
        },
        {
          sectionTitle:
            "“Personal Information” means all information about the Member provided to Duville Estates Pvt. Ltd and Riverdale via on-line forms at the Site or by any other means of communication, whether electronic, oral or written.",
        },
        {
          sectionTitle:
            "“Site” with all its grammatical variations refers to the web site hosted on the Internet/World Wide Web with the address of www.duville.com or www.riverdalepune.com or such other address as may periodically be assigned to or adopted by Duville Estates Pvt. Ltd and Riverdale.",
        },
      ],
    },
    {
      heading: "INFORMATION WE COLLECT ABOUT YOU AND HOW WE COLLECT IT",
      section: [
        {
          sectionTitle:
            "We collect several types of information from and about users of our Websites, including information:",
          subsection: [
            {
              title:
                '"by which you may be personally identified, such as name, postal address, e-mail address, passport number, property ID or telephone number ("personal information")"',
            },
            {
              title:
                "that is about you but individually does not identify you; and/or about your internet connection, the equipment you use to access our Websites and usage details.",
            },
          ],
        },
        {
          sectionTitle: "We collect this information:",
          subsection: [
            {
              title: "We collect this information:",
            },
            {
              title:
                "Automatically as you navigate through the site. Information collected automatically may include usage details, IP addresses and information collected through cookies, web beacons and other tracking technologies.",
            },

            {
              title: "From third parties, for example, our business partners.",
            },
          ],
        },
      ],
    },
    {
      heading: "INFORMATION YOU PROVIDE TO US.",
      section: [
        {
          sectionTitle:
            "The information we collect on or through our Websites may include:",

          subsection: [
            {
              title:
                "Information that you provide by filling in forms on our Websites. This includes information provided at the time of registering to use our Websites, subscribing to our service, registering for newsletter, using the ‘contact us’ form, using any of the forms, using the careers portal or requesting further services.",
            },
            {
              title:
                "We may also ask you for information through a form or when you enter a contest or promotion sponsored by us, and when you report a problem with our Websites.",
            },
            {
              title:
                "Records and copies of your correspondence (including e-mail addresses), if you contact us.",
            },
            {
              title:
                "Your responses to surveys that we might ask you to complete for research purposes.",
            },
            {
              title:
                "Details of transactions you carry out through our Websites and of the fulfilment of your orders. You may be required to provide financial information before placing an order or making payment through our Websites.",
            },
            {
              title: "Your search queries on the Website.",
            },
          ],
        },
      ],
    },
    {
      heading: "USAGE DETAILS, IP ADDRESSES, COOKIES AND OTHER TECHNOLOGIES",
      section: [
        {
          sectionTitle:
            "As you navigate through and interact with our Website, we may automatically collect certain information about your equipment, browsing actions and patterns, including:",

          subsection: [
            {
              title:
                "Details of your visits to our Websites, including traffic data, location data, logs and other communication data and the resources that you access and use on the Websites.",
            },
            {
              title:
                "Information about your computer and internet connection, including your IP address, operating system and browser type.",
            },
          ],
        },
        {
          sectionTitle:
            "The information we collect automatically is statistical data. It helps us to improve our Websites and to deliver a better and more personalized service by enabling us to:",

          subsection: [
            {
              title: "Estimate our audience size and usage patterns.",
            },
            {
              title:
                "Information about your computer and internet connection, including your IP address, operating system and browser type.",
            },
            {
              title: "Recognize you when you return to our Websites.",
            },
          ],
        },
        {
          sectionTitle:
            "The technologies we use for this automatic data collection may include:",

          subsection: [
            {
              title: "Cookies (or browser cookies)",
              description:
                "A cookie is a small file placed on the hard drive of your computer. You may refuse to accept browser cookies by activating the appropriate setting on your browser. However, if you select this setting you may be unable to access certain parts of our Websites. Unless you have adjusted your browser setting so that it will refuse cookies, our system will issue cookies when you direct your browser to our Websites.",
            },
            {
              title: "Flash Cookies",
              description:
                "Certain features of our Websites may use local stored objects (or Flash cookies) to collect and store information about your preferences and navigation to, from and on our Websites. Flash cookies are not managed by the same browser settings as are used for browser cookies.",
            },
            {
              title: "Web Beacons",
              description:
                "Pages of our Websites and our e-mails may contain small electronic files known as web beacons (also referred to as clear gifs. pixel tags and single-pixel gifs) that permit the Company, for example, to count users who have visited those pages or opened an e-mail and for other related website statistics (for example, recording the popularity of certain website content and verifying system and server integrity). ",
            },
          ],
        },
      ],
    },
    {
      heading: "HOW WE USE YOUR INFORMATION",
      section: [
        {
          sectionTitle:
            "We use information that we collect about you or that you provide to us, including any personal information:",

          subsection: [
            {
              title: "To present our Websites and its contents to you.",
            },
            {
              title:
                "To provide you with information or services that you request from us.",
            },
            {
              title: "To fulfill any other purpose for which you provide it.",
            },
            {
              title:
                "To provide you with notices, including expiration, billing and renewal notices.",
            },
            {
              title:
                "To carry out our obligations and enforce our rights arising from any contracts entered into between you and us, including for billing and collection.",
            },
            {
              title:
                "To notify you about changes to our Websites or any project or services we offer or provide.",
            },
            {
              title:
                "To allow you to participate in interactive features on our Websites.",
            },
            {
              title:
                "In any other way we may describe when you provide the information.",
            },
            {
              title: "For any other purpose with your consent.",
            },
          ],
        },
        {
          sectionTitle:
            "We may also use your information to contact you about our own and third-parties' projects and services that may be of interest to you. If you do not want us to use your information in this way, please contact us at ",
          sectionEmail: ["wecare@duville.com ", "marketing@duville.com "],
        },
      ],
    },
    {
      heading: "DISCLOSURE OF YOUR INFORMATION",
      section: [
        {
          sectionTitle:
            "We may disclose aggregated information about our users, and information that does not identify any individual, without restriction.",
        },
        {
          sectionTitle:
            "We may disclose personal information that we collect or you provide as described in this privacy policy:",

          subsection: [
            {
              title: "To our subsidiaries and affiliates.",
            },
            {
              title:
                "To contractors, service providers and other third parties we use to support our business.",
            },
            {
              title:
                "To a buyer or other successor in the event of a merger, divestiture, restructuring, reorganization, dissolution or other sale or transfer of some or all of the Company's assets, whether as a going concern or as part of bankruptcy, liquidation or similar proceeding, in which personal information held by the Company about our Website users is among the assets transferred.",
            },
            {
              title: "To fulfill the purpose for which you provide it.",
            },
            {
              title:
                "For any other purpose disclosed by us when you provide the information. With your consent.",
            },
          ],
        },
        {
          sectionTitle: "We may also disclose your personal information:",

          subsection: [
            {
              title:
                "To comply with any court order, law or legal process, including to respond to any government or regulatory request.",
            },
            {
              title:
                "To enforce or apply our terms of use or terms of sale and other agreements, including for billing and collection purposes. ",
            },
            {
              title:
                "If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of the Company, our customers or others. This includes exchanging information with other companies and organizations for the purposes of fraud protection and credit risk reduction.",
            },
          ],
        },
      ],
    },
    {
      heading: "ACCESSING AND CORRECTING YOUR INFORMATION",
      section: [
        {
          sectionTitle:
            "You can review and change your personal information by logging into the Website e-services. You may also request to update any personal information we hold about you by contacting us at",

          sectionEmail: ["wecare@duville.com ", "marketing@duville.com"],
        },
      ],
    },
    {
      heading: "INDEMNITY",
      section: [
        {
          sectionTitle:
            "The Member agrees and undertakes to indemnify and hereby indemnifies and keeps safe and harmless Duville Estates Pvt. Ltd and Riverdale from all loss, claim, demand, damage, costs, charges (including legal fees and charges) or prejudice that may be caused on account of the Member’s use of the Service offered by Duville Estates Pvt. Ltd and Riverdale at the site. The Member agrees and undertakes to indemnify and hereby indemnifies and keeps safe and harmless Duville Estates Pvt. Ltd and Riverdale from all losses, claims, demands, damages, costs, charges (including legal fees and charges) or prejudice that may be caused on account of the Member’s default or breach of any of the terms of this Agreement.",
        },
      ],
    },
    {
      heading: "CHANGES TO OUR PRIVACY POLICY",
      section: [
        {
          sectionTitle:
            "It is our policy to post any changes we make to our privacy policy on this page. The date the privacy policy was last revised is identified at the top of the page. You are responsible for periodically visiting our Website and this privacy policy to check for any changes.",
        },
      ],
    },
  ];

  return (
    <div className="overflow-x-hidden">
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

        <div className="flex max-w-3xl h-full mt-52 md:mt-80">
          <div className="font-lato md:leading-[65px] capitalize text-white text-[40px] md:text-[80px] font-bold md:mx-auto mx-5 md:my-auto  md:mt-[170px] mt-[200px]">
            Privacy Policy
          </div>
        </div>
      </div>

      <div className=" w-11/12 md:max-w-7xl mx-auto mt-10 md:mt-20 space-y-10">
        <h2 className="text-[25px] md:text-section-heading text-slate-600 font-plus-jakarta-sans font-bold ">
          Privacy Policy – Duville Estates Pvt.Ltd and Riverdale
        </h2>

        <p className="text-slate-700 font-medium leading-[30px]">
          Duville Estates Pvt.Ltd and Riverdale (which term includes all
          subsidiaries and projects of Duville Estates) <br /> (“Company”, “we”
          or “us”) respect your privacy and are committed to protecting it
          through our compliance with this policy.
          <br /> This policy describes the types of information we may collect
          from you or that you may provide when you visit <br /> the website
          www.duville.com or riverdalepune.com (our “Websites”) and our
          practices for collecting, using, maintaining, <br /> protecting and
          disclosing that information.
        </p>

        <div className="space-y-2">
          <h1 className="text-[22px] font-semibold  text-slate-600">
            This policy applies to information we collect:
          </h1>
          <ul className="list-disc ml-7 space-y-2">
            {BulletText.map((item, index) => (
              <li key={index} className="text-slate-700 font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-2">
          <h1 className="text-[22px] font-semibold text-slate-600 ">
            It does not apply to information collected by:
          </h1>
          <ul className="list-disc ml-7 space-y-2">
            {BulletText2.map((item, index) => (
              <li key={index} className="text-slate-700 font-medium">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-slate-700 font-medium leading-[30px]">
          Please read this policy carefully to understand our policies and
          practices regarding your information and how we will treat it.
          <br /> If you do not agree with our policies and practices, your
          choice is not to use our Website. By accessing or using this Website,{" "}
          <br />
          you agree to this privacy policy. This policy may change from time to
          time. Your continued use of this Website after <br /> we make changes
          is deemed to be acceptance of those changes, so please check the
          policy periodically for updates.
        </p>
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
                    {section?.sectionEmail ? (
                      <>
                        <span className="text-red font-medium">
                          {section?.sectionEmail[0]}
                        </span>
                        &nbsp;
                        {"   And  "}&nbsp;
                        <span className="text-red font-medium">
                          {section?.sectionEmail[1]}
                        </span>
                      </>
                    ) : (
                      ""
                    )}
                  </h2>
                  <ul className="list-disc ml-7 space-y-2 ">
                    {section?.subsection?.map((item, index) => (
                      <li
                        key={index}
                        className="text-slate-600 font-medium space-y-2 leading-link-text"
                      >
                        <p
                          className={`${
                            item?.description ? "font-semibold" : ""
                          } font-plus-jakarta-sans`}
                        >
                          {item.title}
                        </p>
                        <p className="leading-[35px] font-plus-jakarta-sans">
                          {item?.description}
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
