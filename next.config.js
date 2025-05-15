/** */
const nextConfig = {
    reactStrictMode: true,
    trailingSlash: true,
    images: {
        domains: ["ik.imagekit.io", "res.cloudinary.com", "amazonaws.com"],
    },
    output: "export",
};

const withVideos = require("next-videos");

module.exports = withVideos();

module.exports = nextConfig;
