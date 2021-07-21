function clear_overlays() {
  Array.from(document.getElementsByClassName('overlay')).forEach((el) => {
    el.style.display = 'none'
  })
}

function mode_toggle() {
  const current = localStorage.getItem('mode') || 'lite'
  const target = current === 'lite' ? 'dark' : 'lite'

  localStorage.setItem('mode', target)

  Array.from(document.getElementsByTagName('img')).forEach((el) => {
    el.src = el.src.replace(`${current}/`, `${target}/`)
  })
}

function mode_init() {
  // init lite/dark mode
  //const params = new URLSearchParams(document.location.search.substring(1))
  //if (params.get('mode')) localStorage.setItem('mode', params.get('mode'))
  if (localStorage.getItem('mode') === 'dark') {
    Array.from(document.getElementsByTagName('img')).forEach((el) => {
      el.src = el.src.replace(`lite/`, `dark/`)
    })
  }
}

function scroll_breadcrumb(controller) {
  const breadcrumb = new ScrollMagic
    .Scene({
      offset: 55,
    })
    .on('start', (event) => {
      if (event.scrollDirection === 'FORWARD') {
        document.getElementById('breadcrumb').src =
          document.getElementById('breadcrumb').src.replace('crumb', 'crumb-more')
      }
      else {
        document.getElementById('breadcrumb').src =
          document.getElementById('breadcrumb').src.replace('-more', '')
      }
    })
    .addTo(controller)
  return breadcrumb
}

