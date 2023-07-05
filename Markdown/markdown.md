# **MarkDown Language**

Markdown is used for Documentation blog writting and much more. It has its special standard syntax. You can insert checkboxes, lists, images, code of various languages using a special syntax.

## **Paragrpahs**

<p>This is a Paragraph.</p>

## **Block Quote**
Block Quote is written by starting the line with a (>) sign. 

> This is a Block Quote.

## **Lists in Markdown**

### **Unordered List**
> Create unordered Lists by starting a line with a hyphen.

- This is an unordered list.
- This is also an unorederd list.

> Alternatively you can use the semantic html ul, li to create an unordered list.

<ul>
<li>This is an Unoreded List.</li>
<li>This is also an unorederd list.</li>
</ul>

## Ordered List
> Simply give each line a unique number.

1. This is an ordered list.
2. This is also ordered list.

>Alternatively you can use the semantic html ol, li to create an ordered list.

<ol>
<li>This is an ordered List.</li>
<li>This is also ordered list.</li>
</ol>

## **Making Text Bold**
> Make text bold by wrapping the words inside semantic b tag of html or **  ** inside the double astrisks, or inside double __ __ underscores. Let's See This in action.

### **Bold Text**

- This is a **Bold** Word.
- This is also a __Bold__ Word. 
- This is also a <b>Bold</b> Word. 

## **Making Text Italic**

> Make text italic by wrapping the words inside semantic i tag of html or * * inside a single astrisks, or inside single _ _ underscore.

- This is an *Italic* word.
- This is also an _Italic_ word.
- This is also an <i>Italic</i> word.
  
## **Both Italic and Bold**

> Make text italic and bold by wrapping the desired word inside tripple underscores _ or inside tripple asterisks *.
Or inside both semantic b and i tags. 
- This is a ___bold and Italic___ word.
- This is a ***bold and Italic*** word.
- This is a <b> <i> bold and Italic </i></b> word.

## **Inserting an image**

> Drag an image into your editor and hold the shift key to insert it inside markdown.

### **Syntax**

![Image Not Found](<Image Path.png>)


> This syntax starts with a ! symbol. Inside the braces we provide the text which will be displayed when image is not found or any sort of error.In this case it is just **alt text**. Next to that in paranthesis we put the path of the image inside the <> tags.


![Alt text](<../Screenshots/md snap.png>)