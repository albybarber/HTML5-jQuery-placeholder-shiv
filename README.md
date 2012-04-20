HTML5-jQuery-placeholder-shiv
=============================

A HTML5 jQuery placeholder, that works for non-native browsers.

## Demo and Examples

### HTML

'''html
<input type="text" class="exampleInput textInput placeholder" value="" data-placeholder="Enter a Value" placeholder="Enter a Value" name="exampleInput">
'''

#### HTML Explained

 * data-placeholder="Enter a Value" - This is the place holder value you wish to appear (non HTML5 browsers)
                                    - If no value is entered it will default specified by the JS
 
 * placeholder="Enter a Value"      - This is the HTML5 attribute 'placeholder' (HTML5 browsers)


How to use the plugin:

### jQuery (JS)

The passed element does not need to be '.placeholder' but it would probably be smart to add it to all of you inputs that you wanted to have placeholders

'''js
// Using the plugin without parameters
jQuery('input.placeholder').placeholder();

// Adding custom text to a placeholder when the 'data-placeholder' attribute is not present
jQuery('input.placeholderSpecial').placeholder('start',{text : 'Enter a Special Value...'});
'''

Thanks,
Alby