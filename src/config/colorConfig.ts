/**
 * 全局颜色配置项，换肤配置
 * 主题名称theme1以及对应的颜色名称color1后面根据实际主题名和颜色名进行修改
 */

 export const COLOR_MAP = {
  // 第一套主题颜色
  theme1: {
    color1: '#FFCDD2',
    color2: '#E1BEE7',
    color3: '#EF9A9A',
    color4: '#F06292'
  },
  // 第二套主题颜色
  theme2: {
    color1: '#D1C4E9',
    color2: '#BBDEFB',
    color3: '#9575CD',
    color4: '#64B5F6'
  },
  // 第三套主题颜色
  theme3: {
    color1: '#C8E6C9',
    color2: '#DCE775',
    color3: '#81C784',
    color4: '#9CCC65'
  },
  // 第四套主题颜色
  theme4: {
    color1: '#FFCCBC',
    color2: '#CFD8DC',
    color3: '#FF8A65',
    color4: '#78909C'
  }
}

export type THEME_TYPE = keyof (typeof COLOR_MAP)
type THEME_ITEM = keyof (typeof COLOR_MAP['theme1'])

/**
 * 主题切换
 * @param theme 主题，默认使用主题一
 */
export function changeTheme (theme: THEME_TYPE = 'theme1'):void {
  const themeList = Object.keys(COLOR_MAP[theme]) as THEME_ITEM[]
  themeList.forEach((v: THEME_ITEM) => {
    document.body.style.setProperty(`--${v}`, COLOR_MAP[theme][v])
  })
}

/**
 * 得到的样式如下：
 * --color1: #FFCCBC;
 * --color2: #CFD8DC;
 * --color3: #FF8A65;
 * --color4: #78909C;
 */
