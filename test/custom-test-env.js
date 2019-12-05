const NodeEnvironment = require("jest-environment-jsdom-fourteen");

/**
 * A custom environment to set the TextEncoder that is required by TensorFlow.js.
 */
class CustomEnvironment extends NodeEnvironment {
    constructor(config, context) {
        super(config, context);
        this.testPath = context.testPath;
        this.docblockPragmas = context.docblockPragmas;
        this.global.process.title = "jsdom";

        const { TextEncoder } = require("util");
        this.global.TextEncoder = TextEncoder;
        this.global.TextDecoder = TextDecoder;

        const nodeCrypto = require("crypto");
        this.global.crypto = {
            getRandomValues: function(buffer) {
                return nodeCrypto.randomFillSync(buffer);
            }
        };
    }
}

module.exports = CustomEnvironment;
