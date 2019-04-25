const blue = "#fjeiwoejwi"
const tuteria_blue = "#0064E6"
const main_text_color = "#484848"
const color = {
    "blue": {
        "B100": "#015DD6",
        "B90-primary": tuteria_blue,
        "B75": "#007AF6",
        "B50": "#94BDF2"
    },
    "gray": {
        "G100": main_text_color,
        "G75": "#787878",
        "G50": "#9D9D9D",
        "G25": "#DBDBDB",
        "G15": "#9D9D9D",
        "G10": "#9D9D9D"
    },
    "green": {
        "G100": "#36B37E",
        "G50": "#94D3B8",
        "G10": "#DCE8E2"
    },
    "red": {
        "R100": "#E9411B",
        "R50": "#EE9A87",
        "R10": "#F0E0DC"
    },
    "orange": {
        "O100": "#FFAB00",
        "O50": "#F9CF79",
        "O10": "#F5E4C2"
    },
    "white": "#FFFFFF"
}

const brand_color = {
    "tuteria-blue": "#0064E6",
    "tuteria-green": "#36B37E"
}
const font_family = "'Circular Std',sans-serif !important"
const font_weight = {
    "light": 400,
    "medium": 600,
    "bold": 800
}
const line_height = null
const letter_spacing = {
    "very-tight": "-0.8px",
    "quite-tight": "-0.6px",
    "fairly-tight": "-0.4px",
    "tight": "-0.2px",
    "no-spacing": "0px"
}

let font_size = {
    "very-big": {
        "font-size": "48px",
        "letter-spacing": letter_spacing["very-tight"],
        "line-height": "56px"
    },
    "quite-big": {
        "font-size": "36px",
        "letter-spacing": letter_spacing["quite-big"],
        "line-height": "40px"
    },
    "fairly-big": {
        "font-size": "28px",
        "letter-spacing": "-0.4px",
        "line-height": "36px"
    },
    "big": {
        "font-size": "22px",
        "letter-spacing": "-0.2px",
        "line-height": "28px"
    },
    "normal-heading": {
        "font-size": "19px",
        "line-height": "24px"
    },
    "small-heading": {
        "font-size": "17px",
        "line-height": "22px"
    },
    "regular": {
        "font-size": "16px;",
        "line-height": "24px;"
    },
    "small": {
        "font-size": "14px;",
        "line-height": "16px;"
    }
}
let border = {
    "radius": {
        "s": "2px",
        "m": "4px",
        "l": "10px"
    },
    "thickness": {
        "s": "1px",
        "m": "2px"
    }
}
const size = {
    "icon": null
}
let spacing = {
    "super-small": "2px",
    "quite-small": "4px",
    "small": "8px",
    "big": "16px",
    "quite-big": "32px",
    "very-big": "64px",
    "inset": {
        "default": "16px 16px 16px 16px",
        "super-small": "2px 2px 2px 2px",
        "quite-small": "4px 4px 4px 4px",
        "small": "8px 8px 8px 8px",
        "normal": "16px 16px 16px 16px",
        "large": "32px 32px 32px 32px",
        "very-large": "64px 64px 64px 64px"
    }
}
let layout = {
    "row": null,
    "margin": null,
    "gutter": null
}
let shadow = {
    "block": null,
    "text": null
}

/*color:
  blue:
    B100: "#015DD6"
    B90-primary: &tuteria-blue "#0064E6"
    B75: "#007AF6"
    B50: "#94BDF2"
 */
export default {
    color,
    layout,
    spacing,
    shadow,
    layout
}