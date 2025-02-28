import { formatError } from "../../src/utils/errors";

describe("errors", () => {
    test.each`
        error                            | expected
        ${"test"}                        | ${"test"}
        ${21}                            | ${"21"}
        ${{ toString: () => "message" }} | ${"message"}
        ${{ some: "data" }}              | ${'{"some":"data"}'}
    `("should format error to readable string", ({ error, expected }) => {
        expect(formatError(error)).toEqual(expected);
    });
});
