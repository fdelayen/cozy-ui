import { createMuiTheme } from '@material-ui/core/styles'
import { getCssVariableValue } from '../utils/color'

const defaultValues = {
  borderRadius: 6
}

export const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: getCssVariableValue('primaryFont'),
    h6: {
      color: 'white'
    }
  },
  palette: {
    primary: {
      light: getCssVariableValue('primaryColorLight'),
      main: getCssVariableValue('primaryColor'),
      dark: getCssVariableValue('scienceBlue'),
      contrastText: getCssVariableValue('primaryContrastTextColor')
    },
    secondary: {
      light: getCssVariableValue('monza'),
      main: getCssVariableValue('portage'),
      dark: getCssVariableValue('azure'),
      contrastText: getCssVariableValue('white')
    },
    grey: {
      0: getCssVariableValue('white'),
      100: getCssVariableValue('paleGrey'),
      200: getCssVariableValue('silver'),
      300: getCssVariableValue('coolGrey'),
      400: getCssVariableValue('slateGrey'),
      800: getCssVariableValue('charcoalGrey'),
      900: getCssVariableValue('black')
    }
  },
  shape: {
    borderRadius: defaultValues.borderRadius
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 0
      }
    },
    MuiExpansionPanel: {
      rounded: {
        borderRadius: defaultValues.borderRadius
      },
      root: {
        boxShadow: '0 4px 12px 0 rgba(0, 0, 0, 0.08)',
        borderWidth: '0.0625rem',
        borderStyle: 'solid',
        borderColor: 'var(--silver)',
        overflow: 'hidden',
        marginBottom: '1rem'
      }
    },
    MuiExpansionPanelSummary: {
      expanded: {},
      root: {
        backgroundColor: 'var(--paleGrey)',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '0.875rem',
        minHeight: '3.5rem',
        padding: 0,
        color: 'var(--charcoalGrey)',
        '&$expanded': {
          minHeight: '3.5rem'
        }
      },
      content: {
        margin: '0.75rem 0',
        paddingLeft: '0.5rem',
        paddingRight: '0.5rem',
        '& > :last-child': {
          paddingRight: 0
        },
        '&$expanded': {
          margin: '0.75rem 0'
        }
      }
    },
    MuiExpansionPanelDetails: {
      root: {
        padding: 0,
        borderTop: '0.0625rem solid var(--silver)'
      }
    },
    MuiListItem: {
      root: {
        borderTop: '1px solid var(--silver)',
        minHeight: '4rem',
        paddingTop: '.5rem',
        paddingBottom: '.5rem',
        '&:last-child': {
          borderBottom: '1px solid var(--silver)'
        },
        '&$selected, &$selected:hover': {
          backgroundColor: 'var(--zircon)'
        },
        '&:hover, &:focus': {
          backgroundColor: 'var(--paleGrey)'
        }
      },
      gutters: {
        paddingLeft: '1rem',
        paddingRight: '1rem'
      },
      dense: {
        minHeight: '3.5rem'
      },
      secondaryAction: {
        paddingRight: '.5rem'
      },
      button: {
        '&:hover': {
          backgroundColor: getCssVariableValue('paleGrey')
        }
      }
    },
    MuiListSubheader: {
      root: {
        borderTop: '1px solid transparent',
        borderBottom: '1px solid var(--zircon)',
        marginBottom: '-1px',
        padding: 0,
        backgroundColor: 'var(--zircon)',
        textIndent: '2rem',
        fontWeight: 'bold',
        fontSize: '.75rem',
        lineHeight: 1.33,
        color: 'var(--coolGrey)'
      },
      gutters: {
        paddingLeft: 0,
        paddingRight: 0
      },
      sticky: {
        backgroundColor: 'var(--zircon)'
      }
    },
    MuiListItemSecondaryAction: {
      root: {
        zIndex: 1
      }
    },
    MuiMenuItem: {
      root: {
        minHeight: 'auto',
        paddingTop: 4,
        paddingBottom: 4,
        color: getCssVariableValue('charcoalGrey'),
        border: 0,
        '&:last-child': {
          borderBottom: 0
        }
      },
      gutters: {
        paddingLeft: 24,
        paddingRight: 24
      }
    }
  }
})

// Override default shadow for elevation 8 used for Popover
theme.shadows[8] =
  '0rem 0.125rem 0.375rem 0rem rgba(50, 54, 63, .19), 0rem 0.375rem 1.25rem 0rem rgba(50, 54, 63, .19)'

export default theme
