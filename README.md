# css_notes
Notes about CSS development

## block-level vs inline elements

**Block-level elements** are rendered as a block and hence take up all the available horizontal space. You can set `margin-top` and `margin-bottom` and two block-level elements will render in two different lines.
Some examples are: `<div>`, `<section>`, `<article>`, `<nav>` but also `<h1>`, `<h2>` etc and `<p>`.

**Inline elements** on the other hand only take up the space they require to fit their content in. Hence two inline-elements will fit into the same line (as long as the combined content doesn't take up the entire space in which case a line break would be added). In this case `margin-top` and `margin-bottom` have no effect on the element. `padding-top` and `padding-bottom` also don't push the adjacent content away but they will do so with the element border. You can read more about that behavior in the following article: https://hacks.mozilla.org/2015/03/understanding-inline-box-model/

Additionally, setting a `width` or `height` on an inline element also has no effect, they take as much space as required by the content.

Logically, this makes sense since you don't want your inline elements to destroy your multi-line text-layout. If you want to do so or need both block-level and inline behavior, you can set `display: inline-block` to merge behaviors.

Some example elements are: `<a>`, `<span>`, `<img>`.

Full list: https://www.w3schools.com/html/html_blocks.asp

## box-sizing

By default, the width and height of an element is calculated like this:

width + padding + border = actual width of an element
height + padding + border = actual height of an element

This means: when you set the width/height of an element, the element often appears bigger than you have set (because the element's border and padding are added to the element's specified width/height).

The box-sizing property allows us to include the padding and border in an element's total width and height.

If you set `box-sizing: border-box;` on an element, padding and border are included in the width and height. Since the result of using the `box-sizing: border-box;` is so much better, many developers want all elements on their pages to work this way.

```css
* {
  box-sizing: border-box;
}
```

Docs: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

## Resources

* [Academind](https://discord.com/invite/gxvEWGU)
* [W3C standards](https://www.w3.org/TR/?filter-tr-name=&status%5B%5D=standard&tags%5B%5D=css#tr_Cascading_Style_Sheets__CSS__Working_Group)
* [CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Google Fonts](https://fonts.google.com/)
* [Can I Use](https://caniuse.com/)
