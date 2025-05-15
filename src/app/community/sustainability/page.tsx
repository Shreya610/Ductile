"use client";

import React from "react";
import CommunityPageSustainable from "../../components/Community/CommunityPageSustainable";

const page = () => {
  const subDetails = [
    {
      title: "LANDSCAPING",

      section1: {
        img: "/Community/sustainability/Landscaping-1.jpg",
        data: [
          "Duville Estates believes in the designing of that kind of landscaping that can create microclimates to reduce the impact of extreme weather conditions.",
          "The appointment of world acclaimed landscaping consultants who are responsible for designing the community environment which eventually reduces the urban heat island effect and helps regulate temperature. ",
          "Significant importance has been dedicated to vegetation and the enhancement of bio-diversity that provides habitat and food sources for various birdlife that contributes to the local biodiversity",
        ],
        id: 1,
      },
      section2: {
        data: [
          "The community design provides a diverse range of plants supports ecological balance by providing a variety of niches for different species, from insects to birds",
          "The vegetation is planned to primarily absorb and reduce noise pollution, creating a quieter and more peaceful living environment",
          "The criticality to this at Riverdale can be assessed by the fact that the plants help absorb and filter rainwater, reducing the risk of flooding and soil erosion",
        ],
        img: "/Community/sustainability/Landscaping-2.jpg",
        id: 2,
      },
    },
    {
      title: "ROOF INSULATION",
      section1: {
        img: "/Community/sustainability/Roof-1.jpeg",
        data: [
          "Riverdale Project's U Value of roof assembly not more than 1.0 W/m2K . 50mm XPS Insulation to be provided for roof",
          "Residential prioritizes energy-efficient features, including roofs with low U-values. Energy-conscious buyers often prioritize homes with lower operating costs.",
          "A well-insulated roof reduces the demand on heating and cooling systems, leading to less strain on HVAC (heating, ventilation, and air conditioning)",
          "Enhancing thermal performance aligns with climate-responsive design strategies, helping buildings adapt to changing climate conditions",
        ],
        id: 3,
      },
    },
    {
      title: "SOLAR REFLECTANCE INDEX ",
      section1: {
        img: "/Community/sustainability/Solar-1.jpg",
        data: [
          "95 % Percentage area is covered with high SRI materials/ vegetation to the exposed roof area",
          "A higher SRI indicates a cooler surface and is particularly important for materials used in roofing to reduce heat absorption and contribute to energy efficiency in buildings",
          "SRI is a measure of a material's ability to reflect solar heat. The SRI takes into account both solar reflectance (the fraction of solar energy that is reflected by a material) and thermal emittance (the ability of a material to release absorbed heat). ",
        ],
        id: 4,
      },
    },
    {
      title: "DRIP IRRIGATION",
      section1: {
        img: "/Community/sustainability/Drip-1.jpg",
        data: [
          "Unlike traditional sprinkler systems, drip irrigation delivers water exactly where it's needed, minimizing wastage and ensuring that water is utilized efficiently. This becomes critical in water-scarce regions.",
          "Drip irrigation provides a consistent and controlled level of moisture to plants avoiding fluctuations that can stress plants and contribute to disease.",
        ],
        id: 5,
      },
      section2: {
        img: "/Community/sustainability/Drip-2.jpg",
        data: [
          "Drip systems deliver water directly to the root zone of plants, minimizing water contact with surrounding soil. This reduces the likelihood of weed growth since weeds are less likely to receive the water they need to thrive.",
          "Drip irrigation systems can be automated and programmed to ensure a consistent schedule for the landscape preventing soil erosion that can occur with more forceful water application. This is particularly beneficial on slopes or areas prone to erosion",
        ],
        id: 6,
      },
    },
    {
      title: "CONTROL & REDUCTION OF AIR POLLUTION",
      section1: {
        img: "/Community/sustainability/Control-1.jpg",
        data: [
          "Duville Estates ensures the adherence of proper guidelines to help minimize the release of pollutants into the air, thereby protecting the local environment and ecosystems. This contributes to the overall sustainability of the construction project",
          "DE uses low-emission and fuel-efficient construction equipment, and maintaining equipment to reduce emissions.",
          "In maintaining stringent guidelines to safeguard the health and safety of construction workers by minimizing exposure to harmful airborne contaminants. ",
          "DE implements measures such as water spraying, dust suppressants, and covering stockpiles to minimize the generation and spread of dust.",
        ],
        id: 7,
      },
    },

    {
      title: "STORAGE & TRANSPORTATION OF MATERIALS TO THE CONSTRUCTION SITE",
      section1: {
        img: "/Community/sustainability/Storage-1.jpg",
        data: [
          "De utilizes materials sourced within 400 km to help minimize transportation costs. Shorter transport distances lead to lower fuel consumption and transportation expenses",
          "Shorter transportation distances reduce the energy required for the transportation of materials. This contributes to lower greenhouse gas emissions and promotes energy efficiency and the reduction of carbon footprint associated with construction",
          "De sources locally resulting in faster delivery of materials, helping to streamline construction timelines. This can be particularly advantageous in meeting project deadlines",
        ],
        id: 8,
      },
      section2: {
        img: "/Community/sustainability/Storage-2.jpg",
        data: [
          "Close proximity to manufacturers allows for better oversight and quality control. It becomes easier to monitor the production process, address any issues promptly, and maintain a higher level of accountability in the supply chain.",
          "Locally sourced materials are often more adaptable to regional climate and environmental conditions. This can enhance the overall performance and durability of the construction, taking into account specific local factors.",
          "Some green building standards and certifications encourage or require the use of locally sourced materials. Adhering to these standards can enhance the project's green credentials and eligibility for certifications.",
        ],
        id: 9,
      },
    },
  ];

  const image = [
    "/Community/environment/1.png",
    "/Community/environment/2.png",
    "/Community/environment/3.png",
    "/Community/environment/4.png",
  ];
  return (
    <CommunityPageSustainable
      heading1={"Sustainability"}
      heading2={""}
      subDetails={subDetails}
      sectionHeading="Environment Sensitivity"
      BgImage={"/Community/sustainability/banner.jpg"}
      BgImageMob={"/Community/sustainability/banner_mob.jpg"}
      BgImage2={"/Common/banner-2.png"}
      image={image}
      mainImg={"/Community/environment/main.jpg"}
      cardHeading={"highlights of WORLD ENVIRONMENT DAY"}
    />
  );
};

export default page;
