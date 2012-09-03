## Demo and Examples

<<<<<<< HEAD
A HTML5 jQuery placeholder, that works for non-native browsers.

To see it in action download the repo and give it a go!

=======
>>>>>>> be6a33583ea2c3c1c14227a40349fd495091dfec
### HTML

```html
<input type="text" class="exampleInput textInput placeholder" value="" data-placeholder="Enter a Value" placeholder="Enter a Value" name="exampleInput">
```

<<<<<<< HEAD
=======
#### HTML Explained

 * *data-placeholder="Enter a Value"* - (non HTML5 browsers)
  * Add this if you want to have lots of inputs with placeholders and different values for each.
  * Otherwise you can specify it via the JS or leave it to the default value
 
 * *placeholder="Enter a Value"* - (HTML5 browsers)
  * This is the HTML5 attribute 'placeholder'

How to use the plugin:

>>>>>>> be6a33583ea2c3c1c14227a40349fd495091dfec
### jQuery (JS)

The passed element does not need to be '.placeholder' but it would probably be smart to add it to all of you inputs that you wanted to have placeholders

```js
jQuery(function() {
// Using the plugin without parameters
jQuery('input.placeholder').placeholder();

// or

// Adding custom text to a placeholder when the 'data-placeholder' attribute is not present
jQuery('input.placeholderSpecial').placeholder('start',{text : 'Enter a Special Value...'});

<<<<<<< HEAD
});
=======
});
```

Thanks,
Alby
>>>>>>> be6a33583ea2c3c1c14227a40349fd495091dfec
