## Demo and Examples

A HTML5 jQuery placeholder, that works for non-native browsers.

To see it in action download the repo and give it a go!

### HTML

```html
<input type="text" class="exampleInput textInput placeholder" value="" data-placeholder="Enter a Value" placeholder="Enter a Value" name="exampleInput">
```

### jQuery (JS)

The passed element does not need to be '.placeholder' but it would probably be smart to add it to all of you inputs that you wanted to have placeholders

```js
jQuery(function() {
// Using the plugin without parameters
jQuery('input.placeholder').placeholder();

// or

// Adding custom text to a placeholder when the 'data-placeholder' attribute is not present
jQuery('input.placeholderSpecial').placeholder('start',{text : 'Enter a Special Value...'});

});
```

Thanks,
Alby
