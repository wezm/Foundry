package net.wezm.snippet

import scala.xml.{NodeSeq, Text}
import net.liftweb.util.Helpers._

class HelloWorld {
  def howdy(html: NodeSeq) = {
    bind("x", html, "stuff" -> "This was bound here")
  }

}
