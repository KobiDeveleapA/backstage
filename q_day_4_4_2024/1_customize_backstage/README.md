# Backstage - (1) Customize Backstage


## How to customize backstage?

Backstage composed out of two main application components: Frontend and Backend.

As generic as Backstage can be, it is a common practice to customize the Backstage frontend to meet our organization needs, strating from the look (UI) of the application and following the feel of it (UX).

In this part of the workshop, we will demonstrate how we can customize the look and the feel of our Backstage frontend instance.

We will start by changing Backstage home logo to our organization's one.

In order to achieve that, follow the instructions below:

```bash
  cd <backstage_project_dir>/packages/app/src/components/Root
```

Note that in the ```packages``` directory, there are two sub-directories: ```backend``` and ```app```.
The ```app``` directory is where Backstage's frontend components are located.

Inside the directory, we can find two files:

```LogoFull.tsx``` - Larger logo that is used when the sidebar is opened

```LogoIcon.tsx``` - Smaller logo that is used when the sidebar is closed

Let's modify our ```LogoFull.tsx``` file:

```bash
Import CustomizedLogo from './<customized_icon_path.jpg';
.
.
.
  const LogoFull = () => {
    const classes = useStyles();
    return <img src={CustomizedLogo} />;
  };
```
---

Next, we will demonstrate the ability to modify the entire theme of our Backstage application.

In order to achieve that, follow the instructions below:

Navigate to the following file:
```
<backstage_project_dir>/packages/app/src/app.tsx
```

Let's import some essential requirments:

```
import { themes } from '@backstage/theme'; # default Backstage themes (light and dark)
import { UnifiedThemeProvider } from '@backstage/theme'; # essential library for adding customized themes
import LightIcon from '@material-ui/icons/WbSunny'; # demo icon 
import { multicolorTheme } from './theme/multicolorTheme'; # our customized theme
```

Next, let's add the references for our different themes to the Backstage frontend application:

```
const app = createApp({
  apis,
  components: {
    SignInPage: props => <SignInPage {...props} auto providers={['guest']} />,
  },
  .
  .
  .
  themes: [
    // Keeping the original themes is completely optional
    {
      id: 'default-dark',
      title: 'Default Dark',
      variant: 'dark',
      Provider: ({ children }) => <UnifiedThemeProvider theme={themes.dark} children={children} />,
    },
    {
      id: 'default-light',
      title: 'Default Light',
      variant: 'light',
      Provider: ({ children }) => <UnifiedThemeProvider theme={themes.light} children={children} />,
    },
    {
      id: 'multicolor-theme',
      title: 'Multicolor Theme',
      variant: 'light',
      icon: <LightIcon />,
      Provider: ({ children }) => <UnifiedThemeProvider theme={multicolorTheme} children={children} />,
    }
  ]
});
```

Note that at this point the application will not render beacuse we didn't created the customized theme (multicolorTheme)

Create a dedicated directory to host the different customized themes under the src directory:

Add the exmaple customized theme to the directory. 

Let's navigate to our Backstage application and review the new feel and look of our application.
