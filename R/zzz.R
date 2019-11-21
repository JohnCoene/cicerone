.onLoad <- function(libname, pkgname) {
  shiny::addResourcePath(
    "driver-assets",
    system.file("driver", package = "cicerone")
  )
  shiny::addResourcePath(
    "cicerone-assets",
    system.file("cicerone", package = "cicerone")
  )
}