import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        RES_SAGE:"#538181",
        RES_GREEN:"#88AA22",
        RES_RED:"#CD3023",
        GRIDLINES:"grey",
        RES_YELLOW:"#FDB813",
        RES_BLUE:"#7686C2",
        RES_ORANGE:"#E87511",
        UNKNOWN_VALUE:"dark grey",
        RES_DULLER_ORANGE:"#D0940C",
        RES_DULLER_GREEN:"#489C54",
        RES_BROWN:"#805C0C",
        test:"#53B1B1",
        COMPLETE:"#00AF54",
        FINISH:"#007CBE"
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      height: theme => ({
        sidebar: "90.7%",
        navbar: "10%",
      }),
      width: theme => ({
        footer: "88%",
      }),
    },
  },
  plugins: [],   
}
export default config
