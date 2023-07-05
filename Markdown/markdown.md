# **MarkDown Language**

Markdown is used for Documentation blog writing and much more. It has its special standard syntax. You can insert checkboxes, lists, images, code of various languages using a special syntax.

## **Paragraphs**

<p>This is a Paragraph.</p>

## **Block Quote**

Block Quote is written by starting the line with a (>) sign.
>> ### Syntax
``` md
> This is a Block Quote.
```
### Output.
> This is a Block Quote.
### Nesting the block quotes.
>> ### Syntax

```md
>> This is nested block quote.
```
>> This is nested block quote.

- It can be intended by adding more quotes.

## **Lists in Markdown**

### **Unordered List**

> Create unordered Lists by starting a line with a hyphen.
>> ### Syntax

``` md
- This is an unordered list.
- This is also an unordered list.
```
### Output
- This is an unordered list.
- This is also an unordered list.

### Nested Unordered List.
>> ### Syntax

``` md
- HTML
    - Hyper Text Markup Language.
- CSS
    - Cascading Style Sheet.

```
### Output

- HTML
    - Hyper Text Markup Language.
- CSS
    - Cascading Style Sheet.

> Alternatively you can use the semantic html ul, li to create an unordered list.
>> ### Syntax
 
``` md
<ul>
<li>This is an Unordered List.</li>
<li>This is also an unordered list.</li>
</ul>
```
### Output
<ul>
<li>This is an Unordered List.</li>
<li>This is also an unordered list.</li>
</ul>

## Ordered List

> Simply give each line a unique number.
>> ### Syntax

``` md
1. This is an ordered list.
2. This is also ordered list.
```
### Output

1. This is an ordered list.
2. This is also ordered list.

> Alternatively you can use the semantic html ol, li to create an ordered list.
>> ### Syntax

``` md
<ol>
<li>This is an ordered List.</li>
<li>This is also ordered list.</li>
</ol>
```
### Output

<ol>
<li>This is an ordered List.</li>
<li>This is also ordered list.</li>
</ol>

### Nested Mixed List.
>> ### Syntax

```md
- HTML
    1. Hyper Text Markup Language.
    2. It is used to create the structure of website.
- CSS
    1. Cascading Style Sheet.
    2. It is used to style the website.
```
### Output

- HTML
    1. Hyper Text Markup Language.
    2. It is used to create the structure of website.
- CSS
    1. Cascading Style Sheet.
    2. It is used to style the website.

## **Making Text Bold**

> Make text bold by wrapping the words inside semantic b tag of html or \*\* \*\* inside the double asterisks, or inside double \_\_ \_\_ underscores. Let's See This in action.

### **Bold Text**
>> ### Syntax

```md
- This is a **Bold** Word.
- This is also a **Bold** Word.
- This is also a <b>Bold</b> Word.
```
### Output

- This is a **Bold** Word.
- This is also a **Bold** Word.
- This is also a <b>Bold</b> Word.

## **Making Text Italic**

> Make text italic by wrapping the words inside semantic i tag of html or \* \* inside a single asterisks, or inside single \_ \_ underscore.
>> ### Syntax

```md
- This is an _Italic_ word.
- This is also an _Italic_ word.
- This is also an <i>Italic</i> word.
```
### Output.
- This is an _Italic_ word.
- This is also an _Italic_ word.
- This is also an <i>Italic</i> word.

## **Both Italic and Bold**

> Make text italic and bold by wrapping the desired word inside triple underscores \_\_\_ or inside triple asterisks \*\*\*.
> Or inside both semantic b and i tags.
>> ### Syntax

```md
- This is a **_bold and Italic_** word.
- This is a **_bold and Italic_** word.
- This is a <b> <i> bold and Italic </i></b> word.
```
### Output
- This is a **_bold and Italic_** word.
- This is a **_bold and Italic_** word.
- This is a <b> <i> bold and Italic </i></b> word.

## **Strike Through**

> Make the text strike through by wrapping the text inside double tilde. ~~
>> ### Syntax

```md
- This text is ~~StrikeThrough~~
```
### Output.
- This text is ~~StrikeThrough~~

## **Mark the Special word**

> Mark special words by using html semantic mark tag.
>> ### Syntax
```md
- This text is <mark>Marked.</mark>
```
### Output.
---
- This text is <mark>Marked.</mark>

## **Write Power Formulas using html tags.** 

> Mark the upper power with sup tag.
> Mark the lower power with the sub tag.

```md
- H<sup>2</sup>O.
- H<sub>2</sub>O.
```
### Output.

- H<sup>2</sup>O.
- H<sub>2</sub>O.

## Write Emojis 

> Paste Emojis by pressing windows + ; semicolon button.
  
- 🔥💚🙄

## **Inserting an image**

> Drag an image into your editor and hold the shift key to insert it inside markdown.

### **Syntax**

![Image Not Found](<Image Path.png>)

> This syntax starts with a ! symbol. Inside the braces we provide the text which will be displayed when image is not found or any sort of error.In this case it is jest **alt text**. Next to that in parenthesis we put the path of the image.

>> ### Syntax

```md
![Alt text](<../Screenshots/md snap.png>)
``` 
### Output Image.

![Alt text](<../Screenshots/md snap.png>)

## **Code in Markdown**

## Inline Document Code

> Mark some document line code in single ticks to get some monospace code feel in the markdown. For Example this javascript code `const value = 5;`

>> ### Syntax

```md
`const value = 5;`
```

### For Long code

> Write code in markdown by wrapping the code inside the triple ticks `` and specifying the language's file extension as show in the above image.For this example let's take this code of python which maps the integers to their respective english letters. 
>> ### Syntax

```py
phone = input("Phone: ")
# Python Dictionary
digits_mapping={
    "1":"One",
    "2":"Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8":"Eight",
    "9":"Nine",
    "0":"Zero",
}
output=""
for ch in phone:
    output+= digits_mapping.get(ch,"!")+ " "
print(output)
```

> Where `digits_mapping = {}` is a python dictionary.


## **Links in Markdown**

> Create links in markdown by using [Link text] to insert link text followed by (URL).
>> ### Syntax

``` md
- [Github Repo Link](https://github.com/sarmad426/Documentation)
```
### Output Link.

- [Github Repo Link](https://github.com/sarmad426/Documentation)

> If your link is your text. Than you can simple write code in <>.

>> ### Syntax

```md
- <https://github.com>
```
 ### Output Link.
- <https://github.com>

> Or without any tags. But it is not supported by Github Flavor Markdown (GFM).
>> ### Syntax

```md
- https://github.com
```
### Output Link.

- https://github.com

## Horizontal Line

> Three Dashes,asterisks and underscores create a horizontal line.
>> ### Syntax

```md
---
```
### Output Line
---
> Let's separate some text using the horizontal line.

>> ### Syntax

```md
This is Some Sample Text.
***
This is also some Sample Text. 
```
### Output
This is Some Sample Text.

***

This is also some Sample Text. 

## Table in Markdown

> Let's create a table in markdown.It can be created by using html table or by some special syntax.

## By using HTML table 
>> ### Syntax

``` html
<table>
    <thead>
        <th>Language</th>
        <th>Type</th>
    </thead>
    <tbody>
        <tr>
            <td>
            Python
            </td>
            <td>
            Dynamically Typed
            </td>
        </tr>
        <tr>
            <td>
            C++
            </td>
            <td>
            Statically Typed
            </td>
        </tr>
        <tr>
            <td>
            Javascript
            </td>
            <td>
            Dynamically Typed
            </td>
        </tr>
        <tr>
            <td>
            Java
            </td>
            <td>
            Statically Typed
            </td>
        </tr>
        <tr>
            <td>
            Ruby
            </td>
            <td>
            Dynamically Typed
            </td>
        </tr>
        <tr>
            <td>
            Typescript
            </td>
            <td>
            Statically Typed
            </td>
        </tr>
    </tbody>
</table>
```
### Output Table
---
<table>
<thead>
<th>Language</th>
<th>Type</th>
</thead>
<tbody>
<tr>
<td>
Python
</td>
<td>
Dynamically Typed
</td>
</tr>
<tr>
<td>
C++
</td>
<td>
Statically Typed
</td>
</tr>
<tr>
<td>
Javascript
</td>
<td>
Dynamically Typed
</td>
</tr>
<tr>
<td>
Java
</td>
<td>
Statically Typed
</td>
</tr>
<tr>
<td>
Ruby
</td>
<td>
Dynamically Typed
</td>
</tr>
<tr>
<td>
Typescript
</td>
<td>
Statically Typed
</td>
</tr>
</tbody>
</table>

Alternatively we can use this weird syntax.
>> ### Syntax

```md
| Language |        Type        |
| :------- |        ----        |
|Python    | Dynamically Typed  |
| C++      | Statically Typed   |
|Javascript| Dynamically Typed  |
| C#       | Statically Typed   |
|Ruby      | Dynamically Typed  |
| Kotlin   | Statically Typed   |
```
### Output Table.

---
| Language |        Type        |
| :------- |        ----        |
|Python    | Dynamically Typed  |
| C++      | Statically Typed   |
|Javascript| Dynamically Typed  |
| C#       | Statically Typed   |
|Ruby      | Dynamically Typed  |
| Kotlin   | Statically Typed   |

## CheckBoxes.

### Unchecked Checkbox

>> ### Syntax

```md
- [ ] Create Catalogue
- [ ] Create CRUD App
- [ ] Create Markdown Documentation.
```
### Output
---
- [ ] Create Catalogue
- [ ] Create CRUD App
- [ ] Create Markdown Documentation.

### Checked Checkbox

> ### Syntax
```md
- [X] Create Prisma Docs
- [x] Create SQL Docs
- [x] Implement SQL Injection 
```
### Output
---
- [X] Create Prisma Docs
- [x] Create SQL Docs
- [x] Implement SQL Injection