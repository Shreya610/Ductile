"use client";

import React from "react";
import CommunityPage from "../../components/Community/CommunityPage";

const page = () => {
  const subDetails = [
    {
      title: "RAIN WATER HARVESTING SYSTEMS",
      data: [
        "Harvested rainwater provides a sustainable and local water source. It reduces reliance on distant water supplies and helps maintain the balance of local ecosystems.",
        "Implementing a rainwater harvesting system can result in cost savings on water bills. Harvested rainwater can be used for non-potable purposes such as irrigation, flushing toilets, or washing vehicles, reducing the need for treated municipal water for these activities.",
        "Rainwater harvesting reduces stormwater runoff by capturing rainwater that would otherwise flow into storm drains. This helps prevent soil erosion, flooding, and the contamination of natural water bodies with pollutants carried by runoff.",
        "By capturing and storing rainwater, rainwater harvesting systems contribute to mitigating the risk of flooding. They help manage the flow of water during heavy rainfall, reducing the strain on drainage systems.",
        "Rainwater harvesting systems can contribute to groundwater recharge. When rainwater is allowed to percolate into the ground, it replenishes local aquifers and helps maintain a sustainable groundwater supply.",
        "The inclusion of a rainwater harvesting system promotes sustainable practices within the community. It raises awareness about water conservation and encourages residents to adopt eco-friendly behaviors.",
      ],
    },
    {
      title: "ONSITE WASTE TREATMENT FOR ORGANIC WASTE ",
      data: [
        "OWCs efficiently process organic waste, significantly reducing the volume of waste sent to landfills. This helps divert a substantial portion of the waste stream away from traditional disposal methods.",
        "By treating organic waste on-site, residential towers contribute to environmental sustainability. OWCs facilitate the conversion of organic waste into valuable resources, such as compost, which can be used to enrich soil and support local agriculture.",
        "OWCs convert organic waste into nutrient-rich compost, which serves as a valuable resource for landscaping, gardening, or other green initiatives within the residential tower. This resource recovery process closes the loop on the organic waste lifecycle.",
        "Landfills produce methane, a potent greenhouse gas, as organic waste decomposes anaerobically. OWCs promote aerobic decomposition, minimizing methane emissions and contributing to climate change mitigation.",
        "On-site treatment of organic waste can result in cost savings on waste disposal fees. Municipalities or waste management services often charge fees based on the volume of waste generated, and reducing organic waste volume can lead to financial benefits.",
        "The installation of on-site waste treatment aligns with environmental regulations and waste management guidelines. Compliance with local regulations ensures that the residential tower operates responsibly and in accordance with sustainability standards.",
      ],
    },
    {
      title: "CONTROL & REDUCTION OF AIR POLLUTION",
      data: [
        "Duville Estates ensures the adherence of proper guidelines to help minimize the release of pollutants into the air, thereby protecting the local environment and ecosystems. This contributes to the overall sustainability of the construction project",
        "In maintaining stringent guidelines to safeguard the health and safety of construction workers by minimizing exposure to harmful airborne contaminants. ",
        "DE uses low-emission and fuel-efficient construction equipment, and maintaining equipment to reduce emissions.",
        "DE implements measures such as water spraying, dust suppressants, and covering stockpiles to minimize the generation and spread of dust.",
      ],
    },
    {
      title: "STORAGE & TRANSPORTATION OF MATERIALS TO THE CONSTRUCTION SITE ",
      data: [
        "DE utilizes materials sourced within 400 km to help minimize transportation costs. Shorter transport distances lead to lower fuel consumption and transportation expenses",
        "Shorter transportation distances reduce the energy required for the transportation of materials. This contributes to lower greenhouse gas emissions and promotes energy efficiency and the reduction of carbon footprint associated with construction",
        "DE sources locally resulting in faster delivery of materials, helping to streamline construction timelines. This can be particularly advantageous in meeting project deadlines",
        "Close proximity to manufacturers allows for better oversight and quality control. It becomes easier to monitor the production process, address any issues promptly, and maintain a higher level of accountability in the supply chain.",
        "Locally sourced materials are often more adaptable to regional climate and environmental conditions. This can enhance the overall performance and durability of the construction, taking into account specific local factors.",
        "Some green building standards and certifications encourage or require the use of locally sourced materials. Adhering to these standards can enhance the project's green credentials and eligibility for certifications.",
      ],
    },
    {
      title: "HCFC FREE & HALON FREE FIRE SUPPRESSION SYSTEMS ",
      data: [
        "HCFCs (Hydrochlorofluorocarbon) are known for their ozone-depleting properties, and Halon is associated with both ozone depletion and global warming potential. HCFC-free and Halon-free fire suppression systems eliminate or significantly reduce the release of these harmful substances, contributing to environmental protection.",
        "HCFCs have been identified as contributors to ozone layer depletion. Halon compounds, although effective in firefighting, also have ozone-depleting potential. The use of alternatives that are HCFC-free and Halon-free helps in preserving the ozone layer, which is crucial for protecting life and hence contributing to environmental protection. ",
        "The use of HCFC-free and Halon-free fire suppression systems ensures compliance with international agreements and environmental regulations.",
        "HCFCs and Halon are potent greenhouse gases with high global warming potentials. Choosing alternatives that are free from these substances helps in minimizing the release of greenhouse gases, contributing to climate change mitigation efforts.",
        "HCFCs and Halon, when released into the environment during a fire suppression event, can pose health risks to occupants. The use of HCFC-free and Halon-free systems eliminates these risks, providing a safer environment for residents and emergency responders.",
      ],
    },
  ];

  const image = [
    "Community/environment/1.png",
    "Community/environment/2.png",
    "Community/environment/3.png",
    "Community/environment/4.png",
  ];
  return (
    <CommunityPage
      heading1={"Environment Sensitivity "}
      subDetails={subDetails}
      sectionHeading="Environment Sensitivity"
      BgImage={
        "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Community/environment/sbi.jpg?updatedAt=1707285181236"
      }
      BgImageMob={
        "https://ik.imagekit.io/athxbsw68/Duville%20Estate/public/Community/environment/banner_mob.jpg?updatedAt=1707285176439"
      }
      BgImage2={"Common/banner-2.png"}
      image={image}
      mainImg={"Community/environment/main.jpg"}
      cardHeading={"NATIONAL ENVIRONMENT DAY CELEBRATION"}
    />
  );
};

export default page;
