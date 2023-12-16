/**
 * WordPress dependencies
 */
import { registerBlockType } from "@wordpress/blocks";
import { useBlockProps } from "@wordpress/block-editor";

// Register the block
registerBlockType("gutenberg-examples/example-01-basic-esnext", {
    edit() {
        const blockProps = useBlockProps();

        return <p {...blockProps}>Hello World (from the editor, in green).</p>;
    },
    save() {
        const blockProps = useBlockProps.save();

        return <p {...blockProps}>Hello World (from the frontend, in red).</p>;
    },
});
