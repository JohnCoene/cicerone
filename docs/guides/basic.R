
guide <- Cicerone$
  new()$ 
  step(
    el = "text",
    title = "Text Input",
    description = "This is where you enter the text you want to print."
  )$
  step(
    "submit",
    "Send the Text",
    "Send the text to the server for printing"
  )
