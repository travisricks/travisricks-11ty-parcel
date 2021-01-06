---
pageTitle: 'Furigana'
---

## Plugin

This site is using the [Furigana plugin](https://github.com/iltrof/furigana-markdown-it) for [markdown-it](https://github.com/markdown-it/markdown-it).

## Examples

### Works:

| Input                                                                                                | Result                                                                    | As image                                                                             |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| `[漢字]{かんじ}`                                                                                     | [漢字]{かんじ}                                                            | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/1.png)  |
| `[漢字]{かん・じ}`<br>(allowed separator characters: ".．。・\|｜/／", as well as any kind of space) | [漢字]{かん・じ}<br>Or, if `<ruby>` is unsupported:<br>漢【かん】字【じ】 | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/2.png)  |
| `[取り返す]{とりかえす}`                                                                             | [取り返す]{とりかえす}                                                    | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/3.png)  |
| `[可愛い犬]{かわいいいぬ}`                                                                           | [可愛い犬]{かわいいいぬ}<br>(wrong match!)                                | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/4.png)  |
| `[可愛い犬]{か・わい・いいぬ}`                                                                       | [可愛い犬]{か・わい・いいぬ}                                              | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/5.png)  |
| `[可愛い犬]{か＋わい・いいぬ}`                                                                       | [可愛い犬]{か＋わい・いいぬ}                                              | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/6.png)  |
| `[食べる]{たべる}`                                                                                   | [食べる]{たべる}                                                          | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/7.png)  |
| `[食べる]{=たべる}`                                                                                  | [食べる]{=たべる}                                                         | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/8.png)  |
| `[アクセラレータ]{accelerator}`                                                                      | [アクセラレータ]{accelerator}                                             | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/9.png)  |
| `[accelerator]{アクセラレータ}`                                                                      | [accelerator]{アクセラレータ}                                             | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/10.png) |
| `[あいうえお]{*}` (or `{＊}`)                                                                        | [あいうえお]{\*}`(or`{＊}                                                 | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/11.png) |
| `[あいうえお]{*❤}` (or `{＊❤}`)                                                                      | [あいうえお]{\*❤}`(or`{＊❤}                                               | ![](https://raw.githubusercontent.com/iltrof/furigana-markdown-it/master/img/12.png) |

### Doesn't work 😞:

- Formatting: `[**漢字**]{かんじ}` doesn't make 漢字 bold.
- Matching katakana with hiragana: `[バカな奴]{ばかなやつ}` won't recognize that バカ and ばか are the same thing.
- Matching punctuation (or any other symbols): `[「はい」と言った]{「はい」といった}` will break on the 「」 brackets.
