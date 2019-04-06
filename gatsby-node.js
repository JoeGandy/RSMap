exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /react-keyboard-shortcuts/,
                        use: loaders.null(),
                    },
                    {
                        test: /react-leaflet/,
                        use: loaders.null(),
                    },
                    {
                        test: /leaflet/,
                        use: loaders.null(),
                    },
                    {
                        test: /IconBaseClass/,
                        use: loaders.null(),
                    },
                    {
                        test: /Icons/,
                        use: loaders.null(),
                    },
                    {
                        test: /Quests/,
                        use: loaders.null(),
                    },
                    {
                        test: /Dungeons/,
                        use: loaders.null(),
                    },
                    {
                        test: /OSRSMap/,
                        use: loaders.null()
                    }
                ],
            },
        })
    }
}