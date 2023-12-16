/**
 * WordPress dependencies
 */
import { registerBlockType } from "@wordpress/blocks";

// Register the block
registerBlockType("gutenberg-examples/example-01-basic-esnext", {
    edit: function () {
        return <p style={{color: 'red'}}>初めてのカスタムブロックができた</p>;
    },
    save: function () {
        return <p>初めてのカスタムブロックができた</p>;
    },
});
