/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
 import { RadioControl } from '@wordpress/components';
 import { __experimentalNumberControl as NumberControl } from '@wordpress/components';
 

export default function Edit({attributes,setAttributes,className}) {
	return (
		<div className="wp-block"
		style={{border:"1px solid gray",
				padding:"10px"}}>
				<h4
				style={{textAlign:"center"}}>POST SNIP BLOCK</h4>
		<RadioControl 
		 label="Select Post types"
		 help="Select type of post whose snippets to be displayed."
		 selected={attributes.postType}
		 options = {
		 	[
		 	{label : 'Recent',  value:'r'},
		 	{label : 'Popular', value:'p' }]
		 }
		 onChange = {(option)=>setAttributes({postType:option})}
		/>
		Number of Posts:
		<NumberControl
		 isShiftStepEnabled={ true }
            onChange={(value)=> {
            	setAttributes({numOfPosts:value<1?1:value}); 
            	console.log(attributes.numOfPosts)}}
            shiftStep={ 1 }
            value = {attributes.numOfPosts}
		/>
		</div>
	);
}
