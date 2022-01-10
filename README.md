# GtBootstrapIcons

### use before

in `app/AppModule` add `GtBootstrapIconsModule`;

in `app/styles.scss` add

```css
.bi {
  display: inline-block;
  vertical-align: -0.125em;
  font-size: inherit;
  width: 1em;
  height: 1em;
}
```

### use

```html
<!-- eg -->
<bi-activity></bi-activity>
<!-- or -->
<i icon="bi-activity"></i>

<!-- set color -->
<bi-activity class="bg-success"></bi-activity>
<i class="bg-success" icon="bi-activity"></i>

<!-- set size -->
<bi-activity class="bg-success fs-3"></bi-activity>
<i class="bg-success fs-3" icon="bi-activity"></i>
```
