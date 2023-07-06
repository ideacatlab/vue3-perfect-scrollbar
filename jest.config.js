module.exports = {
    globals: {},
    testEnvironment: "jsdom",
    transform: {
        "^.+\\.vue$": "babel-jest",
        "^.+\\js$": "babel-jest",
    },
    moduleFileExtensions: ["vue", "js", "json", "jsx", "ts", "tsx", "node"],
};
