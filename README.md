
# jsFeeder - test your design's tolerance for dynamic content

## What can you do with jsFeeder?

It will test your layout to its maximum by testing its tolerance by dynamic content. This way you can see if your layout breaks. If it breaks, fix it! For example: check if your navigation doesn't break with menu items with more than 2 words. Or you can use it to insert test content if you don't have your final copy yet.

## How to use jsFeeder

Include the script right above the closing body tag.

```
<script src="path/jsfeed.js"></script>
```

Simple add data-feed attribute to your element to feed your elements with random content.
Refresh your page and new content will be inserted into your elements.

### How to use jsFeeder

#### Words

```
<a href="#" data-feed="w=2">Nav item 1</a>
```

The content "Nav item 1" will be replaced with 2 random words

#### Sentences

```
<div data-feed="s=5">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
</div>
```

The content between the div will be replaced with 5 sentences.

#### Paragraphs

Sometimes you want to insert paragraphs, jsFeed can do that for you by adding the p value

```
<div data-feed="p=2">
    
</div>
```

2 random paragraphs are added inside the div


### F5 the shit out of it!
Keep pressing ctrl + f5 or cmd + f5 to test your layout.


