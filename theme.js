import highlight from '@mdx-deck/themes/syntax-highlighter-prism';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { vsDarkPartial as vsDark } from 'code-surfer';

export const themes = [
  vsDark,
  {
    prism: {
      style: atomDark
    },
    Slide: {
      width: '100%',
      '& > div': {
        paddingBottom: '56.25%',
        position: 'relative',
        width: '100%',
        height: '0'
      },
      '& > div > div': {
        position: 'absolute',
        width: '100%',
        height: '100%'
      }
    }
    // Customize your presentation theme here.
    //
    // Read the docs for more info:
    // https://github.com/jxnblk/mdx-deck/blob/master/docs/theming.md
    // https://github.com/jxnblk/mdx-deck/blob/master/docs/themes.md
  },
  highlight
];
