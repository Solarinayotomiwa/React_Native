module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            ["babel-preset-expo", { jsxImportSource: "nativewind" }],
            "nativewind/babel",
        ],
    };
};

/*module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
        'nativewind/babel',
        'expo-router/babel', // If you're using Expo Router
    ],
}; */

