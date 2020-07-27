# cicerone 1.0.3

- Add `tab` and `tab_id` arguments to trigger open tabs.
- Add `is_id` argument to `step` and `highlight` method to allow using other selectors than `#id`, see [#7](https://github.com/JohnCoene/cicerone/issues/7)

# cicerone 1.0.2

Deprecated the `has_next_step`, `get_previous_el`, and `get_highlighted_el` methods, which were partly broken and mainly inadequate, in favour of `get_next` and `get_previous` methods. They contain all the information that was returned by the methods they deprecate and work better. They are fired when the user clicks next or previous.

# cicerone 1.0.1

* Initial CRAN version
