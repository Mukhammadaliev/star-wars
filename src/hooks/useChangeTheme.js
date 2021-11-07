

export const changeBG = theme => {
  const root = document.querySelector(':root')

  root.style.setProperty('--theme-neitral-bgimage', `var(--theme-${theme}-bgimage)`)
}
